import assert from "node:assert/strict";
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";

import { getRecentAchievements, loadProjectData } from "./projects.ts";

const valid = {
  schema_version: 1,
  project_id: "lernava",
  display_name: "LearnAva",
  status: "Active development",
  current_milestone: "Validated learning flow",
  public_summary: "Cross-stack learning product.",
  highlights: ["Flutter and FastAPI"],
  verification: ["Tested workflow"],
  recent_updates: [{ date: "2026-11-01", text: "Validated audio delivery" }],
};

function fixture(): string {
  const root = join(tmpdir(), `showcase-${crypto.randomUUID()}`);
  mkdirSync(join(root, "data"), { recursive: true });
  return root;
}

test("loads a validated project status and its explicit achievements", () => {
  const root = fixture();
  try {
    writeFileSync(join(root, "data", "lernava.json"), JSON.stringify(valid));
    const result = loadProjectData("lernava", root);
    assert.equal(result.available, true);
    assert.equal(result.current_milestone, "Validated learning flow");
    assert.deepEqual(result.recent_updates, valid.recent_updates);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("returns a useful unavailable state when optional project data is absent", () => {
  const root = fixture();
  try {
    const result = loadProjectData("ai-company", root);
    assert.equal(result.available, false);
    assert.equal(result.status, "Portfolio evidence available");
    assert.deepEqual(result.recent_updates, []);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("rejects malformed or expanded public data contracts", () => {
  const root = fixture();
  try {
    writeFileSync(
      join(root, "data", "lernava.json"),
      JSON.stringify({ ...valid, private_notes: "must not pass" }),
    );
    assert.throws(() => loadProjectData("lernava", root), /public project data/);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("aggregates only explicit achievements in newest-first order", () => {
  const root = fixture();
  try {
    writeFileSync(join(root, "data", "lernava.json"), JSON.stringify(valid));
    writeFileSync(
      join(root, "data", "ai-company.json"),
      JSON.stringify({
        ...valid,
        project_id: "ai-company",
        display_name: "AI Company / Extera",
        recent_updates: [{ date: "2026-11-02", text: "Added execution tracing" }],
      }),
    );
    assert.deepEqual(getRecentAchievements(root).map((item) => item.text), [
      "Added execution tracing",
      "Validated audio delivery",
    ]);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
