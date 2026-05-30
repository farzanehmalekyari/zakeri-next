import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero } from "@/components/pages/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { getRouteLang, type LocalePageProps } from "@/i18n/server";
import { t } from "@/i18n/translations";
import { withLocalePath } from "@/i18n/routing";

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const lang = await getRouteLang(params);
  return createPageMetadata({
    lang,
    path: "/pricing",
    title: "Pricing — Mohammadreza Zakari",
    description: "Transparent engagements designed around outcomes.",
    openGraphDescription: "Foundation, Growth Engine, Authority.",
  });
}

export default async function PricingPage({ params }: LocalePageProps) {
  const lang = await getRouteLang(params);
  const tr = t[lang];

  return (
    <>
      <PageHero title={tr.pages.pricing.title} lead={tr.pages.pricing.lead} />
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid gap-6 md:grid-cols-3">
          {tr.pricingPlans.map((plan, i) => (
            <article
              key={i}
              className={`rounded-3xl p-7 hover-lift ${
                plan.featured ? "glass-strong luminous-border" : "glass"
              }`}
            >
              <div className="text-xs uppercase tracking-widest text-[color:var(--ink-4)]">
                {plan.name}
              </div>
              <div className="mt-3 text-3xl font-semibold text-gradient">{plan.price}</div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-[color:var(--ink-4)]">
                    <Check className="mt-0.5 h-4 w-4 text-[color:var(--glow)]" /> {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={withLocalePath(lang, "/contact")}
                className={`mt-7 inline-flex w-full justify-center ${
                  plan.featured ? "btn-primary" : "btn-ghost"
                }`}
              >
                {tr.cta.build}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
