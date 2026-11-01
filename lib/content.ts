import type { ProjectId } from "./projects";

export type TrackSlug = "frontend" | "backend" | "ai" | "product";

export const tracks: Record<TrackSlug, {
  label: string;
  eyebrow: string;
  summary: string;
  contribution: string;
  capabilities: string[];
  evidence: Array<{ project: string; title: string; detail: string; href: string }>;
}> = {
  frontend: {
    label: "Frontend Development",
    eyebrow: "Product interfaces that connect cleanly to real services",
    summary: "I build user-facing product flows with attention to integration, state, failure handling, and the details that make an interface usable—not just presentable.",
    contribution: "Flutter feature delivery, API integration, product UI implementation, cross-device thinking, and practical debugging across the client/service boundary.",
    capabilities: ["Flutter and Dart", "REST/JSON integration", "Authenticated client flows", "Feature-oriented UI structure", "Loading, error, and recovery states", "Responsive product thinking"],
    evidence: [{ project: "LearnAva", title: "Cross-stack learning client", detail: "Implemented and debugged Flutter flows for onboarding, identity, speaking practice, exam preparation, and protected learner content backed by FastAPI services.", href: "/projects/lernava" }],
  },
  backend: {
    label: "Backend / Full-stack",
    eyebrow: "Service boundaries, persistence, and verified product behavior",
    summary: "I design Python services around explicit boundaries and observable behavior, then connect them to the product experience they support.",
    contribution: "FastAPI services, authenticated APIs, persistent workflow state, integration design, automated tests, and container-based local development.",
    capabilities: ["Python and FastAPI", "API and service boundaries", "Authentication and authorization", "Persistent state", "Testing and validation", "Docker-based development"],
    evidence: [{ project: "LearnAva", title: "Modular learning services", detail: "Built around identity, billing, speaking, and exam-preparation modules with API contracts and tests for protected delivery and workflow behavior.", href: "/projects/lernava" }, { project: "AI Company / Extera", title: "Reliable execution runtime", detail: "Persistent tasks, approvals, recovery, eventing, and execution coordination form the backend of a governed agent platform.", href: "/projects/ai-company" }],
  },
  ai: {
    label: "AI Systems",
    eyebrow: "Agents that operate inside engineering constraints",
    summary: "I work beyond one-off prompts: routing, execution, approvals, memory boundaries, events, validation, and the operational shape required for agent systems to become dependable products.",
    contribution: "Multi-agent architecture, provider/model routing, controlled tool execution, human approval points, verification, context isolation, and observability direction.",
    capabilities: ["Multi-agent architecture", "Provider and model routing", "Approval-gated execution", "Execution verification", "Memory and context boundaries", "Events and auditability"],
    evidence: [{ project: "AI Company / Extera", title: "Governed multi-agent platform", detail: "Coordinates specialized agents through policy-owned routing, isolated execution, approvals, durable task state, memory interfaces, and system events.", href: "/projects/ai-company" }, { project: "LearnAva", title: "AI inside a product workflow", detail: "Applies AI-assisted conversation and generated learning media inside tested learner-facing flows rather than as an isolated demo.", href: "/projects/lernava" }],
  },
  product: {
    label: "Product Builder",
    eyebrow: "From an ambiguous idea to a working, testable system",
    summary: "I connect product intent to architecture and implementation: clarifying the workflow, choosing boundaries, coordinating delivery, validating behavior, and iterating from evidence.",
    contribution: "Requirements analysis, technical decision-making, architecture, implementation coordination, validation strategy, and iterative cross-stack delivery.",
    capabilities: ["Requirements to architecture", "Technical trade-offs", "Cross-stack execution", "Milestone definition", "Debugging and validation", "Iterative delivery"],
    evidence: [{ project: "LearnAva", title: "Learning product execution", detail: "Turned language-learning and exam-practice goals into connected mobile, API, media, and AI-assisted workflows.", href: "/projects/lernava" }, { project: "AI Company / Extera", title: "Platform thinking", detail: "Translated a broad agent-platform idea into separable runtime, execution, routing, approvals, memory, and event capabilities.", href: "/projects/ai-company" }],
  },
};

export const projectCards: Array<{
  id: ProjectId;
  name: string;
  kicker: string;
  role: string;
  technologies: string[];
  challenges: string[];
  skills: string[];
  href: string;
}> = [
  { id: "lernava", name: "LearnAva", kicker: "Language learning and exam preparation", role: "Product builder and cross-stack engineer", technologies: ["Flutter", "Dart", "Python", "FastAPI", "Docker"], challenges: ["Protected media delivery", "Client/service integration", "AI-assisted learning workflows"], skills: ["Frontend", "Backend", "Product delivery", "Testing"], href: "/projects/lernava" },
  { id: "ai-company", name: "AI Company / Extera", kicker: "Governed multi-agent execution platform", role: "System designer and implementing engineer", technologies: ["Python", "JavaScript", "LLM providers", "Event infrastructure"], challenges: ["Execution boundaries", "Policy-owned model routing", "Approvals and durable state"], skills: ["AI systems", "Architecture", "Backend", "Developer tools"], href: "/projects/ai-company" },
];

export const skills = [
  { group: "Frontend", items: ["Flutter", "Dart", "API integration", "Product UI", "Client debugging"] },
  { group: "Backend", items: ["Python", "FastAPI", "REST APIs", "Authentication", "Persistence", "Docker"] },
  { group: "AI Engineering", items: ["Multi-agent systems", "Model routing", "Approvals", "Execution verification", "Memory concepts"] },
  { group: "Architecture", items: ["Service boundaries", "Stateful workflows", "Context isolation", "Event-driven design"] },
  { group: "Product Engineering", items: ["Requirements analysis", "Iterative delivery", "Testing", "Debugging", "Technical decisions"] },
  { group: "Developer Tools", items: ["Git/GitHub", "AI-assisted development", "CLI workflows", "Automated validation"] },
];
