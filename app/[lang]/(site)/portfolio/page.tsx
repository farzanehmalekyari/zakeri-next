import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/pages/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { getRouteLang, type LocalePageProps } from "@/i18n/server";
import { t } from "@/i18n/translations";

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const lang = await getRouteLang(params);
  return createPageMetadata({
    lang,
    path: "/portfolio",
    title: "Portfolio & Case Studies — Mohammadreza Zakari",
    description:
      "Selected work for real estate consultants, clinics, personal brands and consultants.",
    openGraphDescription: "Real projects. Real results.",
  });
}

const IMAGES = [
  "/images/case-realestate.jpg",
  "/images/case-clinic.jpg",
  "/images/case-personal.jpg",
  "/images/case-consulting.jpg",
];

export default async function PortfolioPage({ params }: LocalePageProps) {
  const lang = await getRouteLang(params);
  const tr = t[lang];

  return (
    <>
      <PageHero title={tr.pages.portfolio.title} lead={tr.pages.portfolio.lead} />
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid gap-6 md:grid-cols-2">
          {tr.cases.items.map((item, i) => (
            <article key={i} className="glass rounded-3xl p-4 hover-lift">
              <div className="relative h-64 rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src={IMAGES[i]}
                  alt={item.industry}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-5 px-2 pb-2">
                <div className="text-[11px] uppercase tracking-widest text-[color:var(--ink-4)]">
                  {item.industry}
                </div>
                <h2 className="mt-2 text-xl font-semibold text-[color:var(--ink-5)]">
                  {item.goal}
                </h2>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
