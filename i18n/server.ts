import { notFound } from "next/navigation";
import { isLocale } from "./routing";
import type { Lang } from "./translations";

export type LocalePageProps = {
  params: Promise<{ lang: string }>;
};

export async function getRouteLang(params: LocalePageProps["params"]): Promise<Lang> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return lang;
}
