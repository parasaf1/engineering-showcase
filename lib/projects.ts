import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

export type ProjectId = "lernava" | "ai-company";

export interface Achievement {
  date: string;
  text: string;
  projectId: ProjectId;
  projectName: string;
}

export interface ProjectStatus {
  schema_version: 1;
  project_id: ProjectId;
  display_name: string;
  status: string;
  current_milestone: string;
  public_summary: string;
  highlights: string[];
  verification: string[];
  recent_updates: Array<{ date: string; text: string }>;
  available: boolean;
}

const allowedKeys = new Set([
  "schema_version",
  "project_id",
  "display_name",
  "status",
  "current_milestone",
  "public_summary",
  "highlights",
  "verification",
  "public_update",
  "recent_updates",
]);

const fallback: Record<ProjectId, ProjectStatus> = {
  lernava: {
    schema_version: 1,
    project_id: "lernava",
    display_name: "LearnAva",
    status: "Portfolio evidence available",
    current_milestone: "Public status sync is not available",
    public_summary: "A cross-stack language-learning and exam-preparation product.",
    highlights: [],
    verification: [],
    recent_updates: [],
    available: false,
  },
  "ai-company": {
    schema_version: 1,
    project_id: "ai-company",
    display_name: "AI Company / Extera",
    status: "Portfolio evidence available",
    current_milestone: "Public status sync is intentionally optional",
    public_summary: "A multi-agent AI platform focused on governed, verifiable execution.",
    highlights: [],
    verification: [],
    recent_updates: [],
    available: false,
  },
};

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.length > 0 && value.every(
    (item) => typeof item === "string" && item.trim().length > 0,
  );
}

function isUpdates(value: unknown): value is Array<{ date: string; text: string }> {
  return Array.isArray(value) && value.every((item) => {
    if (!item || typeof item !== "object") return false;
    const record = item as Record<string, unknown>;
    return Object.keys(record).length === 2
      && typeof record.date === "string"
      && /^\d{4}-\d{2}-\d{2}$/.test(record.date)
      && typeof record.text === "string"
      && record.text.trim().length > 0;
  });
}

function validate(value: unknown, expectedId: ProjectId): ProjectStatus {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error("Invalid public project data: expected an object");
  }
  const data = value as Record<string, unknown>;
  if (Object.keys(data).some((key) => !allowedKeys.has(key))) {
    throw new Error("Invalid public project data: unexpected field");
  }
  const strings = ["display_name", "status", "current_milestone", "public_summary"];
  if (
    data.schema_version !== 1
    || data.project_id !== expectedId
    || strings.some((key) => typeof data[key] !== "string" || !(data[key] as string).trim())
    || !isStringArray(data.highlights)
    || !isStringArray(data.verification)
    || (data.recent_updates !== undefined && !isUpdates(data.recent_updates))
  ) {
    throw new Error("Invalid public project data: contract mismatch");
  }
  return {
    schema_version: 1,
    project_id: expectedId,
    display_name: data.display_name as string,
    status: data.status as string,
    current_milestone: data.current_milestone as string,
    public_summary: data.public_summary as string,
    highlights: data.highlights as string[],
    verification: data.verification as string[],
    recent_updates: (data.recent_updates as Array<{ date: string; text: string }> | undefined) ?? [],
    available: true,
  };
}

export function loadProjectData(projectId: ProjectId, root = process.cwd()): ProjectStatus {
  const path = join(root, "data", `${projectId}.json`);
  if (!existsSync(path)) return { ...fallback[projectId] };
  try {
    return validate(JSON.parse(readFileSync(path, "utf8")), projectId);
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error("Invalid public project data: malformed JSON", { cause: error });
    }
    throw error;
  }
}

export function getRecentAchievements(root = process.cwd()): Achievement[] {
  return (["lernava", "ai-company"] as const)
    .flatMap((projectId) => {
      const project = loadProjectData(projectId, root);
      return project.recent_updates.map((item) => ({
        ...item,
        projectId,
        projectName: project.display_name,
      }));
    })
    .sort((left, right) => right.date.localeCompare(left.date))
    .slice(0, 8);
}
