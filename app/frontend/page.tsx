import type { Metadata } from "next"; import { RolePage } from "@/components/role-page";
export const metadata: Metadata = {
  title: "Frontend Development",
  description: "Flutter product work, API integration, UI implementation, and cross-stack debugging evidence.",
  alternates: {
    canonical: "/frontend",
  },
  openGraph: {
    type: "website",
    url: "/frontend",
    title: "Frontend Development — Parsa Afshar Fard",
    description: "Flutter product work, API integration, UI implementation, and cross-stack debugging evidence.",
    siteName: "Parsa Afshar Fard — Engineering Portfolio",
  },
};
export default function Page() { return <RolePage slug="frontend" />; }
