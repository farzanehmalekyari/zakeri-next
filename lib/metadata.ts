import type { Metadata } from "next";
import { getLocalizedAlternates, withLocalePath, type SitePath } from "@/i18n/routing";
import type { Lang } from "@/i18n/translations";
import { getSiteUrl } from "./site";

type PageMetadataInput = {
  lang: Lang;
  path: SitePath;
  title: string;
  description: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
};

const localeMap: Record<Lang, string> = {
  en: "en_US",
  fa: "fa_IR",
  ar: "ar",
};

export function createPageMetadata({
  lang,
  path,
  title,
  description,
  openGraphTitle,
  openGraphDescription,
}: PageMetadataInput): Metadata {
  const canonical = withLocalePath(lang, path);
  const languages = {
    ...getLocalizedAlternates(path),
    "x-default": withLocalePath("en", path),
  };

  return {
    metadataBase: new URL(getSiteUrl()),
    title,
    description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title: openGraphTitle ?? title,
      description: openGraphDescription ?? description,
      type: "website",
      url: canonical,
      locale: localeMap[lang],
    },
    twitter: {
      card: "summary",
      title: openGraphTitle ?? title,
      description: openGraphDescription ?? description,
    },
  };
}
