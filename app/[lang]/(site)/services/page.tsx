import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Bot, CircleGauge, MonitorSmartphone, SearchCheck } from "lucide-react";
import { PageHero } from "@/components/pages/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { getRouteLang, type LocalePageProps } from "@/i18n/server";
import { t } from "@/i18n/translations";
import { withLocalePath } from "@/i18n/routing";

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const lang = await getRouteLang(params);
  return createPageMetadata({
    lang,
    path: "/services",
    title: "Services — Mohammadreza Zakari",
    description:
      "GEO, AEO, AI visibility, websites and AI solutions for high-trust businesses.",
    openGraphDescription: "Growth engines for the AI era.",
  });
}

const ICONS = [SearchCheck, Bot, MonitorSmartphone, CircleGauge];

export default async function ServicesPage({ params }: LocalePageProps) {
  const lang = await getRouteLang(params);
  const tr = t[lang];

  return (
    <>
      <PageHero title={tr.pages.services.title} lead={tr.pages.services.lead} />
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid gap-6 md:grid-cols-2">
          {tr.services.items.map((service, i) => {
            const Icon = ICONS[i];
            return (
              <article key={i} className="glass rounded-3xl p-7 hover-lift">
                <div className="neon-icon-box inline-flex h-11 w-11 items-center justify-center rounded-2xl">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-[color:var(--ink-5)]">
                  {service.t}
                </h2>
                <p className="mt-3 text-[color:var(--ink-4)]">{service.d}</p>
                <Link
                  href={withLocalePath(lang, "/contact")}
                  className="mt-5 inline-flex items-center gap-1 text-sm text-[color:var(--glow)]"
                >
                  {tr.cta.learn} <ArrowUpRight className="h-4 w-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
