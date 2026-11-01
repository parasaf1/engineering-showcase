import type { Metadata } from "next"; import { RolePage } from "@/components/role-page";
export const metadata: Metadata = { title: "Frontend Development", description: "Flutter product work, API integration, UI implementation, and cross-stack debugging evidence." };
export default function Page() { return <RolePage slug="frontend" />; }
