import { LANGS, type Lang } from "./translations";

export const DEFAULT_LOCALE: Lang = "en";
export const LOCALES = LANGS.map((lang) => lang.code);

export const SITE_PATHS = [
  "/",
  "/services",
  "/portfolio",
  "/pricing",
  "/insights",
  "/about",
  "/contact",
  "/faq",
] as const;

export type SitePath = (typeof SITE_PATHS)[number];

export function isLocale(value: string | undefined): value is Lang {
  return LOCALES.includes(value as Lang);
}

export function getLocaleMeta(lang: Lang) {
  return LANGS.find((item) => item.code === lang) ?? LANGS[0];
}

export function normalizePath(path: string): SitePath {
  if (path === "") return "/";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return (SITE_PATHS.includes(normalized as SitePath) ? normalized : "/") as SitePath;
}

export function withLocalePath(lang: Lang, path: string): string {
  const normalized = path === "/" ? "" : normalizePath(path);
  return `/${lang}${normalized}`;
}

export function stripLocaleFromPath(pathname: string): SitePath {
  const segments = pathname.split("/").filter(Boolean);
  if (isLocale(segments[0])) {
    return normalizePath(`/${segments.slice(1).join("/")}`);
  }
  return normalizePath(pathname);
}

export function getLocalizedAlternates(path: SitePath) {
  return Object.fromEntries(LOCALES.map((lang) => [lang, withLocalePath(lang, path)]));
}

export function getPreferredLocale(acceptLanguage: string | null): Lang {
  if (!acceptLanguage) return DEFAULT_LOCALE;

  const candidate = acceptLanguage
    .split(",")
    .map((entry) => entry.trim().split(";")[0]?.toLowerCase())
    .map((entry) => entry?.slice(0, 2))
    .find((entry) => isLocale(entry));

  return candidate ?? DEFAULT_LOCALE;
}
