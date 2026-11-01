import type { ProjectStatus } from "@/lib/projects";

export interface CaseStudyContent {
  name: string; descriptor: string; role: string; overview: string; goal: string;
  built: string[]; architecture: string[]; technology: string[]; challenges: string[];
  decisions: string[]; testing: string[]; skills: string[]; focus: string;
  interview: string[]; sourceAccess: string;
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  return <section className="case-section"><h2>{title}</h2><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></section>;
}

export function CaseStudy({ content, status }: { content: CaseStudyContent; status: ProjectStatus }) {
  return <main>
    <section className="page-hero shell case-hero"><p className="eyebrow">Engineering case study</p><h1>{content.name}</h1><p className="lede">{content.descriptor}</p><div className="case-status"><span>{status.status}</span><p><b>Current milestone:</b> {status.current_milestone}</p></div></section>
    <div className="case-layout shell"><aside aria-label="Case study summary"><p className="section-label">My role</p><p>{content.role}</p><p className="section-label">Technology</p><div className="tags">{content.technology.map((item) => <span key={item}>{item}</span>)}</div></aside><article className="case-body">
      <section className="case-section"><h2>Overview</h2><p>{content.overview}</p></section>
      <section className="case-section"><h2>Problem / Product Goal</h2><p>{content.goal}</p></section>
      <ListSection title="What I Built / Worked On" items={content.built} />
      <ListSection title="Architecture" items={content.architecture} />
      <ListSection title="Engineering Challenges" items={content.challenges} />
      <ListSection title="Key Decisions" items={content.decisions} />
      <ListSection title="Verification / Testing" items={content.testing} />
      <ListSection title="Skills Demonstrated" items={content.skills} />
      <section className="case-section"><h2>Current Engineering Focus</h2><p>{content.focus}</p></section>
      <ListSection title="What I Can Demonstrate in an Interview" items={content.interview} />
      <section className="case-section ip-note"><h2>IP / Source Access</h2><p>{content.sourceAccess}</p></section>
    </article></div>
  </main>;
}
