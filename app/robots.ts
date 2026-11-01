import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://parasaf1.github.io/engineering-showcase/sitemap.xml" }; }
