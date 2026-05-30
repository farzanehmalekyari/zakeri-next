import type { ReactNode } from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { getRouteLang } from "@/i18n/server";
import { t } from "@/i18n/translations";

export default async function SiteLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const lang = await getRouteLang(params);
  return (
    <SiteShell lang={lang} tr={t[lang]}>
      {children}
    </SiteShell>
  );
}
