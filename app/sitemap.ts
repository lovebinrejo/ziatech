import type { MetadataRoute } from "next";
import { newsPosts } from "@/lib/data/news";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://autodiagchennai.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl,                priority: 1.0,  changeFrequency: "weekly" },
    { url: `${siteUrl}/services`,  priority: 0.9,  changeFrequency: "monthly" },
    { url: `${siteUrl}/products`,  priority: 0.8,  changeFrequency: "monthly" },
    { url: `${siteUrl}/news`,      priority: 0.7,  changeFrequency: "weekly" },
    { url: `${siteUrl}/about`,     priority: 0.6,  changeFrequency: "monthly" },
    { url: `${siteUrl}/contact`,   priority: 0.8,  changeFrequency: "monthly" },
  ];

  const newsRoutes: MetadataRoute.Sitemap = newsPosts.map((post) => ({
    url: `${siteUrl}/news/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...newsRoutes];
}
