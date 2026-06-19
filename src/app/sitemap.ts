import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/constants";
import { siteConfig } from "@/config/seo";
import { getAllComponents } from "@/content/components";
import { getAllBlogs } from "@/content/blogs";

const BASE_URL = siteConfig.url;

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const components = getAllComponents();
  const blogs = getAllBlogs();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/component`,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/playground`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/create`,
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];

  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${BASE_URL}/component/category/${cat}`,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const componentPages: MetadataRoute.Sitemap = components.map((c) => ({
    url: `${BASE_URL}/component/${c.slug}`,
    lastModified: new Date(c.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = blogs.map((b) => ({
    url: `${BASE_URL}/blog/${b.slug}`,
    lastModified: new Date(b.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...categoryPages, ...componentPages, ...blogPages];
}
