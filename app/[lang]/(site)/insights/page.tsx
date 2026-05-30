import type { Metadata } from "next";
import { PageHero } from "@/components/pages/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { getRouteLang, type LocalePageProps } from "@/i18n/server";
import { t } from "@/i18n/translations";

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const lang = await getRouteLang(params);
  return createPageMetadata({
    lang,
    path: "/insights",
    title: "Insights — Mohammadreza Zakari",
    description: "Notes on AI-era growth, SEO, GEO, AEO, and conversion.",
    openGraphDescription: "Notes on AI-era growth.",
  });
}

const POSTS = [
  {
    title: "AI Visibility 101: Be cited, not just ranked",
    description: "How LLMs decide who to quote, and what to do about it.",
  },
  {
    title: "GEO vs SEO: a working playbook",
    description: "Generative Engine Optimization in plain English.",
  },
  {
    title: "Conversion paths for founder-led brands",
    description: "From discovery to a confident first call.",
  },
  {
    title: "Trust architecture for clinics",
    description: "Why a medical site needs more than testimonials.",
  },
];

export default async function InsightsPage({ params }: LocalePageProps) {
  const lang = await getRouteLang(params);
  const tr = t[lang];

  return (
    <>
      <PageHero title={tr.pages.insights.title} lead={tr.pages.insights.lead} />
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10 grid gap-6 md:grid-cols-2">
          {POSTS.map((post, i) => (
            <article key={i} className="glass rounded-3xl p-7 hover-lift">
              <div className="text-[11px] uppercase tracking-widest text-[color:var(--ink-4)]">
                Article · 2026
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-[color:var(--ink-5)]">
                {post.title}
              </h2>
              <p className="mt-3 text-[color:var(--ink-4)]">{post.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
