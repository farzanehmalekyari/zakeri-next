import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/pages/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { getRouteLang, type LocalePageProps } from "@/i18n/server";
import { t } from "@/i18n/translations";

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const lang = await getRouteLang(params);
  return createPageMetadata({
    lang,
    path: "/contact",
    title: "Contact — Mohammadreza Zakari",
    description: "Tell us about your business and goals.",
    openGraphDescription: "Let's build your growth engine.",
  });
}

export default async function ContactPage({ params }: LocalePageProps) {
  const lang = await getRouteLang(params);
  const tr = t[lang];

  return (
    <>
      <PageHero title={tr.pages.contact.title} lead={tr.pages.contact.lead} />
      <ContactForm tr={tr} />
    </>
  );
}
