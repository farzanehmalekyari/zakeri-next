import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Bot, CircleGauge, MonitorSmartphone, SearchCheck } from "lucide-react";
import { PageHero } from "@/components/pages/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { getRouteLang, type LocalePageProps } from "@/i18n/server";
import { t } from "@/i18n/translations";

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const lang = await getRouteLang(params);
  return createPageMetadata({
    lang,
    path: "/services",
    title: "Services — Mohammadreza Zakeri",
    description:
      "GEO, AEO, AI visibility, websites and AI solutions for high-trust businesses.",
    openGraphDescription: "Growth engines for the AI era.",
  });
}

const ICONS = [SearchCheck, Bot, MonitorSmartphone, CircleGauge];
const SERVICE_IMAGES = [
  "/images/svc-geo.jpg",
  "/images/svc-ai.jpg",
  "/images/svc-web.jpg",
  "/images/svc-visibility.jpg",
];

export default async function ServicesPage({ params }: LocalePageProps) {
  const lang = await getRouteLang(params);
  const tr = t[lang];

  return (
    <>
      <PageHero title={tr.pages.services.title} lead={tr.pages.services.lead} />
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="space-y-5">
            {tr.services.items.map((service, i) => {
              const Icon = ICONS[i];
              const image = SERVICE_IMAGES[i];
              return (
                <article
                  key={i}
                  className="service-row-card group grid gap-5 rounded-[2rem] p-4 md:p-5 lg:min-h-[18rem] lg:grid-cols-[18.5rem_minmax(13rem,0.82fr)_minmax(20rem,1fr)_5rem] lg:items-stretch lg:gap-7 lg:p-7"
                >
                  <div className="service-row-visual relative min-h-[13.5rem] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[color:var(--ink-1)] lg:min-h-[14rem]">
                    <Image
                      src={image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 18.5rem, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[color:var(--ink-1)]/78 via-[color:var(--ink-1)]/10 to-transparent" />
                    <div className="absolute start-4 top-4 neon-icon-box inline-flex h-11 w-11 items-center justify-center rounded-2xl">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="pointer-events-none absolute inset-x-5 bottom-4 h-px bg-gradient-to-r from-transparent via-[color:var(--glow)]/70 to-transparent" />
                  </div>

                  <div className="flex flex-col items-center justify-center border-white/10 text-center lg:border-s lg:px-6">
                    <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--glow)]">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h2 className="mt-3 max-w-[19rem] text-center text-2xl font-semibold leading-tight text-[color:var(--ink-5)] md:text-3xl lg:text-[2rem]">
                      {service.t}
                    </h2>
                  </div>

                  <div className="flex flex-col justify-center border-white/10 lg:border-s lg:ps-6">
                    <p className="max-w-xl text-base leading-relaxed text-[color:var(--ink-4)]">
                      {service.d}
                    </p>
                    <ul className="mt-4 grid gap-2 text-sm text-[color:var(--ink-5)] sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                      {service.bullets.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--glow)] shadow-[0_0_12px_var(--glow)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    aria-hidden
                    className="service-row-arrow pointer-events-none flex h-14 w-14 items-center justify-center rounded-full justify-self-end self-center text-[color:var(--ink-5)] lg:h-16 lg:w-16 lg:justify-self-center"
                  >
                    <ArrowRight className="h-5 w-5 flip-rtl" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
