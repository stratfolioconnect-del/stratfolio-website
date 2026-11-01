import type { Metadata } from "next";

export function pageMetadata(
  title: string,
  description: string,
  pathname: string,
  type: "website" | "article" = "website",
): Metadata {
  const socialTitle = `${title} | STRATFOLIO INTELLIGENCE`;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const canonicalUrl = siteUrl ? new URL(pathname, siteUrl).toString() : undefined;
  return {
    title,
    description,
    openGraph: { title: socialTitle, description, type, ...(canonicalUrl ? { url: canonicalUrl } : {}) },
    twitter: { card: "summary_large_image", title: socialTitle, description },
    ...(canonicalUrl ? { alternates: { canonical: canonicalUrl } } : {}),
  };
}
