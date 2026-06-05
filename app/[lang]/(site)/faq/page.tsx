import type { Metadata } from "next";
import { FaqAccordion } from "@/components/pages/FaqAccordion";
import { PageHero } from "@/components/pages/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { getRouteLang, type LocalePageProps } from "@/i18n/server";
import { t } from "@/i18n/translations";

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const lang = await getRouteLang(params);
  return createPageMetadata({
    lang,
    path: "/faq",
    title: "FAQ — Mohammadreza Zakeri",
    description: "Answers to the questions we hear most.",
    openGraphDescription: "Common questions about AI-era digital growth.",
  });
}

export default async function FaqPage({ params }: LocalePageProps) {
  const lang = await getRouteLang(params);
  const tr = t[lang];
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tr.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero title={tr.pages.faq.title} lead={tr.pages.faq.lead} />
      <FaqAccordion faq={tr.faq} />
    </>
  );
}
