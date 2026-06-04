"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { Dict, Lang } from "@/i18n/translations";
import { getLocaleMeta, stripLocaleFromPath, withLocalePath, type SitePath } from "@/i18n/routing";
import { publicSiteConfig } from "@/lib/site";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header({ lang, tr }: { lang: Lang; tr: Dict }) {
  const pathname = usePathname();
  const dir = getLocaleMeta(lang).dir;
  const activePath = stripLocaleFromPath(pathname ?? `/${lang}`);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav: { href: SitePath; label: string }[] = [
    { href: "/", label: tr.nav.home },
    { href: "/services", label: tr.nav.services },
    { href: "/portfolio", label: tr.nav.portfolio },
    { href: "/pricing", label: tr.nav.pricing },
    { href: "/insights", label: tr.nav.insights },
    { href: "/about", label: tr.nav.about },
    { href: "/contact", label: tr.nav.contact },
  ];

  const navClass = (href: SitePath) =>
    `rounded-full px-3 py-1.5 text-sm transition hover:text-[color:var(--ink-5)] hover:bg-white/10 ${
      activePath === href
        ? "text-[color:var(--ink-5)] bg-[linear-gradient(110deg,rgba(98,184,255,0.20),rgba(244,126,232,0.12))] shadow-[0_0_24px_-14px_var(--glow)]"
        : "text-[color:var(--ink-4)]"
    }`;

  return (
    <>
      <header className="fixed inset-x-0 top-3 z-50 px-4 transition-all duration-500">
        <div
          className={`site-header-shell mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 transition duration-500 md:px-8 ${
            scrolled ? "shadow-[0_0_46px_-24px_var(--glow)]" : ""
          }`}
        >
          <Link href={withLocalePath(lang, "/")} className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="MZ" className="h-9 w-9" width={36} height={36} />
            <div className="hidden md:block leading-tight">
              <div className="text-sm font-semibold text-[color:var(--ink-5)]">{tr.brand}</div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--ink-4)]/80">
                {tr.subname}
              </div>
            </div>
            <div className="md:hidden leading-tight">
              <div className="text-sm font-semibold text-[color:var(--ink-5)]">{tr.brand}</div>
              <div className="text-[10px] text-[color:var(--ink-4)]/80">{tr.subname}</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => (
              <Link key={item.href} href={withLocalePath(lang, item.href)} className={navClass(item.href)}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher lang={lang} />
            <a
              href={publicSiteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary px-4 py-2 text-sm"
            >
              WhatsApp
            </a>
          </div>

          <button
            aria-label="Open menu"
            className="lg:hidden rounded-full glass p-2.5 text-[color:var(--ink-5)]"
            onClick={() => setOpen(true)}
            type="button"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
        <div
          className={`absolute inset-y-0 ${
            dir === "rtl" ? "left-0" : "right-0"
          } w-[85%] max-w-sm glass-strong p-6 flex flex-col gap-6`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image src="/images/logo.png" alt="MZ" className="h-8 w-8" width={32} height={32} />
              <div className="text-sm font-semibold text-[color:var(--ink-5)]">{tr.brand}</div>
            </div>
            <button
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="rounded-full p-2 text-[color:var(--ink-5)] hover:bg-white/5"
              type="button"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={withLocalePath(lang, item.href)}
                onClick={() => setOpen(false)}
                className={`rounded-2xl px-4 py-3 text-base hover:bg-white/5 hover:text-[color:var(--ink-5)] ${
                  activePath === item.href
                    ? "text-[color:var(--ink-5)] bg-white/5"
                    : "text-[color:var(--ink-4)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={withLocalePath(lang, "/faq")}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-base text-[color:var(--ink-4)] hover:bg-white/5 hover:text-[color:var(--ink-5)]"
            >
              {tr.nav.faq}
            </Link>
          </nav>
          <div className="mt-auto flex flex-col gap-3">
            <LanguageSwitcher lang={lang} />
            <a
              href={publicSiteConfig.whatsappUrl}
              onClick={() => setOpen(false)}
              target="_blank"
              rel="noreferrer"
              className="btn-primary justify-center px-4 py-3 text-base"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden fixed bottom-3 inset-x-3 z-40 transition-all duration-500 ${
          scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        <div className="glass-strong rounded-full px-2 py-2 flex items-center justify-between">
          {[
            { href: "/", label: tr.nav.home },
            { href: "/services", label: tr.nav.services },
            { href: "/portfolio", label: tr.nav.portfolio },
            { href: "/contact", label: tr.nav.contact },
          ].map((item) => (
            <Link
              key={item.href}
              href={withLocalePath(lang, item.href as SitePath)}
              className="flex-1 text-center text-xs py-2 text-[color:var(--ink-4)] hover:text-[color:var(--ink-5)]"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={publicSiteConfig.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-[linear-gradient(135deg,var(--glow),var(--neon-magenta))] text-white shadow-[0_0_24px_-8px_var(--glow)]"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>
      </div>
    </>
  );
}
