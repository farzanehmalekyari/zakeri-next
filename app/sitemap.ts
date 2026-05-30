import type { MetadataRoute } from "next";
import { LOCALES, SITE_PATHS, withLocalePath } from "@/i18n/routing";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return LOCALES.flatMap((lang) =>
    SITE_PATHS.map((path) => ({
      url: `${siteUrl}${withLocalePath(lang, path)}`,
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.8,
    })),
  );
}
