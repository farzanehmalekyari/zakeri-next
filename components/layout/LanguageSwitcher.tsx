"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { LANGS, type Lang } from "@/i18n/translations";
import { stripLocaleFromPath, withLocalePath } from "@/i18n/routing";

export function LanguageSwitcher({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const currentPath = stripLocaleFromPath(pathname ?? `/${lang}`);

  return (
    <div className="inline-flex items-center gap-1 glass rounded-full p-1 text-xs">
      <Globe className="h-3.5 w-3.5 mx-2 text-[color:var(--ink-4)]" aria-hidden />
      {LANGS.map((item) => (
        <Link
          key={item.code}
          href={withLocalePath(item.code, currentPath)}
          hrefLang={item.code}
          aria-current={lang === item.code ? "true" : undefined}
          className={`px-3 py-1.5 rounded-full transition ${
            lang === item.code
              ? "bg-[color:var(--ink-5)]/15 text-[color:var(--ink-5)]"
              : "text-[color:var(--ink-4)] hover:text-[color:var(--ink-5)]"
          }`}
        >
          {item.native}
        </Link>
      ))}
    </div>
  );
}
