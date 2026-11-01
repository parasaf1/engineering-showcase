import type { Metadata } from "next"; import { RolePage } from "@/components/role-page";
export const metadata: Metadata = { title: "Backend & Full-stack Engineering", description: "Python, FastAPI, service boundaries, persistence, testing, and containerized development evidence." };
export default function Page() { return <RolePage slug="backend" />; }
