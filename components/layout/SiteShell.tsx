import type { ReactNode } from "react";
import type { Lang, Dict } from "@/i18n/translations";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function SiteShell({
  children,
  lang,
  tr,
}: {
  children: ReactNode;
  lang: Lang;
  tr: Dict;
}) {
  return (
    <>
      <Header lang={lang} tr={tr} />
      <main className="relative">{children}</main>
      <Footer lang={lang} tr={tr} />
    </>
  );
}
