import type { MetadataRoute } from "next";
const routes = ["", "/frontend", "/backend", "/ai", "/product", "/projects/lernava", "/projects/ai-company"];
export default function sitemap(): MetadataRoute.Sitemap { return routes.map((route) => ({ url: `https://parasaf1.github.io/engineering-showcase${route}`, changeFrequency: route ? "monthly" : "weekly", priority: route ? .8 : 1 })); }
