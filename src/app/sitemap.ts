import type { MetadataRoute } from "next";
import { caseStudies, insightPosts } from "@/lib/siteContent";

const baseUrl = "https://danielvlcek.com";
const lastModified = new Date("2026-05-31");

export default function sitemap(): MetadataRoute.Sitemap {
  const mainRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.55,
    },
  ];

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${baseUrl}/work/${study.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const insightRoutes: MetadataRoute.Sitemap = insightPosts.map((post) => ({
    url: `${baseUrl}/insights/${post.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.45,
  }));

  return [...mainRoutes, ...caseStudyRoutes, ...insightRoutes];
}
