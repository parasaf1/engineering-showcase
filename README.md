# Parsa Afshar Fard — Engineering Portfolio

This repository is both Parsa Afshar Fard's public engineering portfolio and a sanitized evidence layer for selected private projects.

The recruiter experience comes first: the Next.js site presents role-specific evidence for frontend, backend/full-stack, AI systems, and technical product work, with detailed LearnAva and AI Company / Extera case studies.

## Run locally

```bash
npm install
npm run test
npm run lint
npm run typecheck
npm run build
```

## Sanitized project status

`data/lernava.json` and the optional `data/ai-company.json` contain only allowlisted public metadata. Private repositories publish through a write-only deploy-key workflow: they can clone and update this public repository, but this repository never receives access to private source.

The boundary excludes source code, private prompts, credentials, user/customer data, database contents, internal agent instructions, private memory, raw private commit messages, and reusable proprietary business logic.

A normal private commit may update current status but does not create a public achievement. A recent achievement is added only when a private commit is intentionally titled:

```text
showcase: <meaningful recruiter-safe achievement>
```

The renderer validates an exact contract, rejects credential-like content, limits changes to the project data/case-study markers, deduplicates entries, and retains at most eight achievements.

## Contact

- Email: afsharparsa725@gmail.com
- GitHub: [parasaf1](https://github.com/parasaf1)

No source license is granted for proprietary project implementation. Portfolio documentation is provided for professional evaluation; see [LICENSE.md](LICENSE.md).
