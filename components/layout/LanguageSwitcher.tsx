"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { LANGS, type Lang } from "@/i18n/translations";
import { getLocaleMeta, stripLocaleFromPath, withLocalePath } from "@/i18n/routing";

export function LanguageSwitcher({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const currentPath = stripLocaleFromPath(pathname ?? `/${lang}`);
  const currentLang = getLocaleMeta(lang);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative inline-flex text-xs">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[color:var(--ink-5)] transition hover:bg-white/10"
      >
        <Globe className="h-3.5 w-3.5 text-[color:var(--ink-4)]" aria-hidden />
        <span>{currentLang.native}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 text-[color:var(--ink-4)] transition ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      <div
        role="menu"
        className={`absolute top-full z-50 mt-2 min-w-full overflow-hidden rounded-2xl border border-white/10 bg-[color:var(--ink-2)]/95 p-1 shadow-[0_18px_60px_-24px_rgba(0,0,0,0.9)] backdrop-blur-xl transition ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
        }`}
      >
        {LANGS.map((item) => (
          <Link
            key={item.code}
            href={withLocalePath(item.code, currentPath)}
            hrefLang={item.code}
            role="menuitem"
            aria-current={lang === item.code ? "true" : undefined}
            onClick={() => setOpen(false)}
            className={`block whitespace-nowrap rounded-xl px-3 py-2 text-sm transition ${
              lang === item.code
                ? "bg-[color:var(--ink-5)]/15 text-[color:var(--ink-5)]"
                : "text-[color:var(--ink-4)] hover:bg-white/5 hover:text-[color:var(--ink-5)]"
            }`}
          >
            {item.native}
          </Link>
        ))}
      </div>
    </div>
  );
}
