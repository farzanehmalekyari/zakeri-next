import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, MessageCircle, Twitter } from "lucide-react";
import type { Dict, Lang } from "@/i18n/translations";
import { withLocalePath, type SitePath } from "@/i18n/routing";
import { publicSiteConfig } from "@/lib/site";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Footer({ lang, tr }: { lang: Lang; tr: Dict }) {
  const links: { href: SitePath; label: string }[] = [
    { href: "/services", label: tr.nav.services },
    { href: "/portfolio", label: tr.nav.portfolio },
    { href: "/pricing", label: tr.nav.pricing },
    { href: "/insights", label: tr.nav.insights },
    { href: "/about", label: tr.nav.about },
    { href: "/faq", label: tr.nav.faq },
  ];

  return (
    <footer className="relative mt-24 border-t border-white/10 bg-[color:var(--ink-1)]/80">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5 flex items-start gap-5">
            <Image
              src="/images/portrait.jpg"
              alt={tr.brand}
              className="h-20 w-20 rounded-2xl object-cover ring-1 ring-white/15"
              width={80}
              height={80}
            />
            <div>
              <div className="text-lg font-semibold text-[color:var(--ink-5)]">{tr.brand}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--ink-4)]/80 mt-1">
                {tr.subname}
              </div>
              <p className="mt-4 text-sm text-[color:var(--ink-4)] max-w-md">{tr.footer.tagline}</p>
              <div className="mt-5 text-2xl text-gradient font-semibold">{tr.footer.slogan}</div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-widest text-[color:var(--ink-4)]/70">
              {tr.footer.sections.explore}
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {links.map((item) => (
                <li key={item.href}>
                  <Link
                    href={withLocalePath(lang, item.href)}
                    className="text-[color:var(--ink-4)] hover:text-[color:var(--ink-5)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 flex flex-col gap-5">
            <div>
              <div className="text-xs uppercase tracking-widest text-[color:var(--ink-4)]/70">
                {tr.footer.sections.contact}
              </div>
              <a
                href={publicSiteConfig.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-3"
              >
                <MessageCircle className="h-4 w-4" /> {tr.cta.whatsapp}
              </a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-[color:var(--ink-4)]/70">
                {tr.footer.sections.language}
              </div>
              <div className="mt-3">
                <LanguageSwitcher lang={lang} />
              </div>
            </div>
            <div className="flex items-center gap-3 text-[color:var(--ink-5)]">
              <a aria-label="LinkedIn" href="#" className="neon-icon-box flex h-10 w-10 items-center justify-center rounded-2xl transition hover:brightness-110">
                <Linkedin className="h-5 w-5" />
              </a>
              <a aria-label="Twitter" href="#" className="neon-icon-box flex h-10 w-10 items-center justify-center rounded-2xl transition hover:brightness-110">
                <Twitter className="h-5 w-5" />
              </a>
              <a aria-label="Instagram" href="#" className="neon-icon-box flex h-10 w-10 items-center justify-center rounded-2xl transition hover:brightness-110">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[color:var(--ink-4)]/70">
          <div>
            © {new Date().getFullYear()} {tr.brand}. {tr.footer.rights}
          </div>
          <div>Found. Trusted. Chosen.</div>
        </div>
      </div>
    </footer>
  );
}
