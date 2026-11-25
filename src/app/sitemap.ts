import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-25T00:00:00.000Z");

  const workRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${siteConfig.siteUrl}/work/${project.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: siteConfig.siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...workRoutes,
  ];
}
