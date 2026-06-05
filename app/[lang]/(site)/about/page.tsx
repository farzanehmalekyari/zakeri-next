import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/pages/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { getRouteLang, type LocalePageProps } from "@/i18n/server";
import { t } from "@/i18n/translations";
import { withLocalePath } from "@/i18n/routing";

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const lang = await getRouteLang(params);
  return createPageMetadata({
    lang,
    path: "/about",
    title: "About — Mohammadreza Zakeri",
    description: "Founder-led digital growth consultant for high-trust businesses.",
    openGraphDescription: "Founder-led. Outcome-obsessed. Built for the AI era.",
  });
}

export default async function AboutPage({ params }: LocalePageProps) {
  const lang = await getRouteLang(params);
  const tr = t[lang];

  return (
    <>
      <PageHero title={tr.pages.about.title} lead={tr.pages.about.lead} />
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid gap-10 md:grid-cols-12 items-start">
          <div className="md:col-span-5">
            <div className="glass rounded-3xl p-3">
              <Image
                src="/images/portrait.jpg"
                alt={tr.brand}
                className="rounded-2xl object-cover w-full h-auto"
                width={640}
                height={800}
              />
            </div>
          </div>
          <div className="md:col-span-7 space-y-5 text-[color:var(--ink-4)] text-lg leading-relaxed">
            <p>
              {tr.brand} is a founder-led digital growth consultant building infrastructure that
              helps businesses get{" "}
              <span className="text-[color:var(--ink-5)]">found, trusted, and chosen</span>{" "}
              online.
            </p>
            <p>
              Engagements pair strategy with execution: conversion-focused websites, SEO/GEO/AEO
              architecture, AI-visibility systems, and the analytics path that improves them.
            </p>
            <Link href={withLocalePath(lang, "/contact")} className="btn-primary mt-2">
              {tr.cta.build}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
