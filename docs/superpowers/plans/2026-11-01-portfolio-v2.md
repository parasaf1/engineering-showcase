# Engineering Portfolio V2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the public showcase into a recruiter-first engineering portfolio while preserving a strict, allowlisted status-publishing boundary for private projects.

**Architecture:** A statically rendered Next.js App Router site reads optional, sanitized project JSON through one tested data module. Shared content and presentation components power the homepage, four role tracks, and two project case studies. The Python publisher remains the only private-to-public ingestion path and records achievements only when an explicit recruiter-safe update is supplied.

**Tech Stack:** Next.js, React, TypeScript, CSS, Node test runner, Python standard library

**Spec:** User-provided “Showcase Publisher / Recruiter-Focused Showcase V2” requirements dated 2026-11-01.

## Global Constraints

- Keep private source, prompts, credentials, data, instructions, memory, and proprietary logic out of the public repository.
- Keep dependencies minimal and the output responsive, accessible, fast, and recruiter-friendly.
- Treat `data/lernava.json` and optional `data/ai-company.json` as sanitized dynamic status sources.
- Record at most eight recent achievements and only from an explicit meaningful `showcase:` update.
- Do not deploy to Vercel or begin AI Company Phase 11.

## Review Focus

- Missing `ai-company.json` must produce a useful fallback rather than a build failure.
- Malformed or extra-key project data must be rejected without leaking content.
- Empty/non-showcase updates must change status without adding an achievement.
- Keyboard and screen-reader navigation must expose clear landmarks, headings, and focus states.
- Static generation must cover all requested role and project routes.

---

### Task 1: Typed project data boundary

**Files:**
- Create: `lib/projects.ts`
- Create: `lib/projects.test.ts`
- Create: `data/lernava.json`

**Interfaces:**
- Produces: `loadProjectData(projectId): ProjectStatus`, `getRecentAchievements(): Achievement[]`

- [ ] Write failing tests for existing data, absent AI Company data, malformed data, and meaningful-achievement aggregation.
- [ ] Run the focused tests and confirm expected failures.
- [ ] Implement the minimal validated optional-file loader.
- [ ] Run the focused and complete test suites.

### Task 2: Recruiter-first portfolio and case studies

**Files:**
- Create: `app/layout.tsx`, `app/page.tsx`, `app/globals.css`
- Create: `app/frontend/page.tsx`, `app/backend/page.tsx`, `app/ai/page.tsx`, `app/product/page.tsx`
- Create: `app/projects/lernava/page.tsx`, `app/projects/ai-company/page.tsx`
- Create: `components/site-header.tsx`, `components/site-footer.tsx`, `components/project-card.tsx`, `components/role-page.tsx`, `components/case-study.tsx`
- Create: `lib/content.ts`

**Interfaces:**
- Consumes: typed project status from Task 1.
- Produces: seven static recruiter-facing routes plus shared navigation and contact UI.

- [ ] Add route/render smoke tests that fail before pages exist.
- [ ] Implement the shared shell, homepage hierarchy, role tracks, and evidence-led case studies.
- [ ] Add responsive and accessible CSS with visible focus and reduced-motion support.
- [ ] Run tests, lint, and typecheck.

### Task 3: Publisher, metadata, and repository hardening

**Files:**
- Modify: `scripts/render_showcase.py`
- Create: `tests/test_render_showcase.py`
- Create: `app/robots.ts`, `app/sitemap.ts`
- Modify: `README.md`, `.gitignore`
- Modify in LernAva repo: `.github/workflows/publish-showcase.yml`

**Interfaces:**
- Consumes: allowlisted schema v1 payload with optional `public_update`.
- Produces: sanitized status JSON/markdown and no achievement for an empty update.

- [ ] Write Python regression tests for explicit achievements, empty updates, deduplication, cap-eight behavior, and rejected unknown keys/secrets.
- [ ] Run tests and confirm the empty-update behavior fails against the original publisher.
- [ ] Make `public_update` optional/empty and update the LernAva workflow to omit it unless the commit subject starts with `showcase:`.
- [ ] Add metadata, robots, sitemap, README, ignore rules, and a public secret-pattern scan.
- [ ] Run install, all tests, lint, typecheck, production build, and secret scan before committing.
