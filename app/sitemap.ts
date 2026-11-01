import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-url";

const routes = [
  "",
  "/frontend",
  "/backend",
  "/ai",
  "/product",
  "/projects/lernava",
  "/projects/ai-company",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route ? "monthly" : "weekly",
    priority: route ? 0.8 : 1,
  }));
}
