import Link from "next/link";
import { tracks, type TrackSlug } from "@/lib/content";

export function RolePage({ slug }: { slug: TrackSlug }) {
  const track = tracks[slug];
  return <main>
    <section className="page-hero shell"><p className="eyebrow">Role track</p><h1>{track.label}</h1><p className="lede">{track.summary}</p><a className="button" href="mailto:afsharparsa725@gmail.com">Discuss a role</a></section>
    <section className="section shell two-col"><div><p className="section-label">How I contribute</p><h2>Useful from product intent through delivery</h2></div><div><p className="large-copy">{track.contribution}</p><div className="capability-list">{track.capabilities.map((item) => <span key={item}>{item}</span>)}</div></div></section>
    <section className="section shell"><p className="section-label">Project evidence</p><h2>Where the work shows up</h2><div className="evidence-grid">{track.evidence.map((item) => <article className="evidence-card" key={item.title}><p className="eyebrow">{item.project}</p><h3>{item.title}</h3><p>{item.detail}</p><Link className="text-link" href={item.href}>Inspect the evidence <span aria-hidden="true">→</span></Link></article>)}</div></section>
  </main>;
}
