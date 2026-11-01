import type { Metadata } from "next"; import { RolePage } from "@/components/role-page";
export const metadata: Metadata = { title: "Technical Product Builder", description: "Requirements, architecture, technical decisions, validation, and iterative product delivery evidence." };
export default function Page() { return <RolePage slug="product" />; }
