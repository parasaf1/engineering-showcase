import type { Metadata } from "next"; import { RolePage } from "@/components/role-page";
export const metadata: Metadata = {
  title: "AI Systems Engineering",
  description: "Multi-agent architecture, model routing, approvals, execution verification, memory, and event infrastructure.",
  alternates: {
    canonical: "/ai",
  },
  openGraph: {
    type: "website",
    url: "/ai",
    title: "AI Systems Engineering — Parsa Afshar Fard",
    description: "Multi-agent architecture, model routing, approvals, execution verification, memory, and event infrastructure.",
    siteName: "Parsa Afshar Fard — Engineering Portfolio",
  },
};
export default function Page() { return <RolePage slug="ai" />; }
