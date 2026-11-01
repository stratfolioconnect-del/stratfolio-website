import type { MetadataRoute } from "next";
import { insightSamples } from "@/lib/insight-data";
import { insightArticles } from "@/data/insight-articles";
import { services } from "@/lib/site-data";

const staticPaths = [
  "/",
  "/about",
  "/services",
  "/methodology",
  "/insights",
  "/pricing",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) return [];

  const baseUrl = new URL(siteUrl);
  if (baseUrl.protocol !== "https:" && baseUrl.hostname !== "localhost") {
    throw new Error("NEXT_PUBLIC_SITE_URL must use HTTPS outside local development.");
  }

  const paths = [
    ...staticPaths,
    ...services.map((service) => `/services/${service.slug}`),
    ...insightSamples.map((sample) => `/insights/${sample.slug}`),
    ...insightArticles.map((article) => `/insights/${article.slug}`),
  ];

  return paths.map((path) => ({
    url: new URL(path, baseUrl).toString(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
