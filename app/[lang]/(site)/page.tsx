import type { Metadata } from "next";
import {
  CasesSection,
  FinalCta,
  Hero,
  HomeAurora,
  IndustriesSection,
  ProblemSection,
  ServicesSection,
  SolutionSection,
  TrustMarquee,
} from "@/components/home/Sections";
import { createPageMetadata } from "@/lib/metadata";
import { getRouteLang, type LocalePageProps } from "@/i18n/server";
import { t } from "@/i18n/translations";
import { withLocalePath } from "@/i18n/routing";

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const lang = await getRouteLang(params);
  return createPageMetadata({
    lang,
    path: "/",
    title: "Mohammadreza Zakeri — AI-era Digital Growth Architect",
    description:
      "We design websites and digital systems that attract traffic, build trust, and convert visitors into customers — built for the AI era.",
    openGraphDescription: "Found. Trusted. Chosen. Growth infrastructure for high-trust businesses.",
  });
}

export default async function HomePage({ params }: LocalePageProps) {
  const lang = await getRouteLang(params);
  const tr = t[lang];

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohammadreza Zakeri",
    jobTitle: "AI-era Digital Growth Architect",
    url: withLocalePath(lang, "/"),
    sameAs: [],
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mohammadreza Zakeri",
    description: "AI-era digital growth infrastructure for high-trust businesses.",
    url: withLocalePath(lang, "/"),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <HomeAurora />
      <Hero lang={lang} tr={tr} />
      <TrustMarquee lang={lang} tr={tr} />
      <ProblemSection lang={lang} tr={tr} />
      <SolutionSection lang={lang} tr={tr} />
      <CasesSection lang={lang} tr={tr} />
      <ServicesSection lang={lang} tr={tr} />
      <IndustriesSection lang={lang} tr={tr} />
      <FinalCta lang={lang} tr={tr} />
    </>
  );
}
