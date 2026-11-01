import type { Metadata } from "next"; import { RolePage } from "@/components/role-page";
export const metadata: Metadata = {
  title: "Backend & Full-stack Engineering",
  description: "Python, FastAPI, service boundaries, persistence, testing, and containerized development evidence.",
  alternates: {
    canonical: "/backend",
  },
  openGraph: {
    type: "website",
    url: "/backend",
    title: "Backend & Full-stack Engineering — Parsa Afshar Fard",
    description: "Python, FastAPI, service boundaries, persistence, testing, and containerized development evidence.",
    siteName: "Parsa Afshar Fard — Engineering Portfolio",
  },
};
export default function Page() { return <RolePage slug="backend" />; }
