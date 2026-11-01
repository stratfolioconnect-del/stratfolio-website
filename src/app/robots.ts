import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) {
    return { rules: { userAgent: "*", allow: "/", disallow: "/api/" } };
  }

  const baseUrl = new URL(siteUrl);
  if (baseUrl.protocol !== "https:" && baseUrl.hostname !== "localhost") {
    throw new Error("NEXT_PUBLIC_SITE_URL must use HTTPS outside local development.");
  }

  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: new URL("/sitemap.xml", baseUrl).toString(),
  };
}
