import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-config";
import { projects } from "@/content/projects";
import { services } from "@/content/services";
import { articles } from "@/content/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/projects",
    "/services",
    "/process",
    "/about",
    "/contact",
    "/journal",
    "/enquiry",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${siteConfig.url}/journal/${article.slug}`,
    lastModified: article.publishedAt,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...projectRoutes, ...serviceRoutes, ...articleRoutes];
}
