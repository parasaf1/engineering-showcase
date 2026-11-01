import Link from "next/link";

const links = [
  ["Work", "/#projects"], ["Frontend", "/frontend"], ["Backend", "/backend"],
  ["AI Systems", "/ai"], ["Product", "/product"], ["Contact", "/#contact"],
];

export function SiteHeader() {
  return <header className="site-header"><div className="shell nav-wrap">
    <Link className="brand" href="/" aria-label="Parsa Afshar Fard, home"><span>PA</span><b>Parsa Afshar Fard</b></Link>
    <nav aria-label="Primary navigation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
  </div></header>;
}
