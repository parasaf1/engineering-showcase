import type { Metadata } from "next"; import { RolePage } from "@/components/role-page";
export const metadata: Metadata = { title: "AI Systems Engineering", description: "Multi-agent architecture, model routing, approvals, execution verification, memory, and event infrastructure." };
export default function Page() { return <RolePage slug="ai" />; }
