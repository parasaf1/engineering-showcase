import Link from "next/link";
import type { ProjectStatus } from "@/lib/projects";
import type { projectCards } from "@/lib/content";

type Card = (typeof projectCards)[number];

export function ProjectCard({ project, status }: { project: Card; status: ProjectStatus }) {
  return <article className="project-card">
    <div className="project-top"><div><p className="eyebrow">{project.kicker}</p><h3>{project.name}</h3></div><span className="status-dot">{status.status}</span></div>
    <p className="role-line"><b>My role:</b> {project.role}</p>
    <p>{status.public_summary}</p>
    <div className="card-grid"><div><h4>Engineering challenges</h4><ul>{project.challenges.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h4>Demonstrated skills</h4><ul>{project.skills.map((item) => <li key={item}>{item}</li>)}</ul></div></div>
    <div className="tags" aria-label="Technologies">{project.technologies.map((item) => <span key={item}>{item}</span>)}</div>
    <p className="milestone"><b>Current:</b> {status.current_milestone}</p>
    <Link className="text-link" href={project.href}>Read the case study <span aria-hidden="true">→</span></Link>
  </article>;
}
