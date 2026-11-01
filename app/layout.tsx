import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Parsa Afshar Fard — Product Builder & Software Engineer", template: "%s — Parsa Afshar Fard" },
  description: "Engineering portfolio spanning frontend development, backend systems, multi-agent AI platforms, and end-to-end product execution.",
  authors: [{ name: "Parsa Afshar Fard" }],
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "/", title: "Parsa Afshar Fard — Engineering Portfolio", description: "Selected product and engineering work across frontend, backend, AI systems, and product execution.", siteName: "Parsa Afshar Fard — Engineering Portfolio" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader /><div id="main-content">{children}</div><SiteFooter /></body></html>;
}
