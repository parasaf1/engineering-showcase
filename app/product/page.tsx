import type { Metadata } from "next"; import { RolePage } from "@/components/role-page";
export const metadata: Metadata = {
  title: "Technical Product Builder",
  description: "Requirements, architecture, technical decisions, validation, and iterative product delivery evidence.",
  alternates: {
    canonical: "/product",
  },
  openGraph: {
    type: "website",
    url: "/product",
    title: "Technical Product Builder — Parsa Afshar Fard",
    description: "Requirements, architecture, technical decisions, validation, and iterative product delivery evidence.",
    siteName: "Parsa Afshar Fard — Engineering Portfolio",
  },
};
export default function Page() { return <RolePage slug="product" />; }
