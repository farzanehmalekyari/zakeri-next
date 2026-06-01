"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, type CSSProperties } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Briefcase,
  Eye,
  Globe2,
  Home as HomeIcon,
  Layout,
  MessageCircle,
  MonitorSmartphone,
  Quote,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  TrendingUp,
  User,
  Workflow,
} from "lucide-react";
import type { Dict, Lang } from "@/i18n/translations";
import { withLocalePath } from "@/i18n/routing";
import { publicSiteConfig } from "@/lib/site";

type SectionProps = {
  lang: Lang;
  tr: Dict;
};

export function Hero({ lang, tr }: SectionProps) {
  const title = tr.hero.title;
  const highlight = tr.hero.highlight;
  const index = title.indexOf(highlight);
  const before = index >= 0 ? title.slice(0, index) : title;
  const after = index >= 0 ? title.slice(index + highlight.length) : "";

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--ink-1)]/10 via-[color:var(--ink-1)]/5 to-[color:var(--ink-1)]/10" />
      <div className="dot-grid absolute inset-0 opacity-50" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-6 pt-36 pb-16 md:items-start md:px-10 md:pt-44 lg:min-h-screen">
        <div className="hero-glass animate-float relative w-full max-w-2xl lg:max-w-3xl rounded-[3rem] md:rounded-[3.5rem] p-8 md:p-12 lg:p-14">
          <span
            className="hero-corner -top-6 -left-6"
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--glow-strong) 70%, transparent), transparent 70%)",
            }}
          />
          <span
            className="hero-corner -bottom-6 -right-6"
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--glow) 60%, transparent), transparent 70%)",
            }}
          />

          <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
            <span className="absolute -top-1/2 left-1/4 h-[200%] w-[1px] rotate-[18deg] bg-gradient-to-b from-transparent via-[color:var(--glow-strong)]/40 to-transparent blur-[1px]" />
            <span className="absolute -top-1/2 left-2/3 h-[200%] w-[1px] rotate-[18deg] bg-gradient-to-b from-transparent via-[color:var(--ink-5)]/25 to-transparent" />
          </span>

          <div className="relative flex items-start justify-between gap-4">
            <div className="pill-glow">
              <span className="dot" />
              {tr.hero.badge}
            </div>
            <div className="icon-tile shrink-0">
              <Sparkles className="h-5 w-5" />
            </div>
          </div>

          <h1 className="relative mt-7 text-4xl md:text-5xl lg:text-[3.75rem] font-semibold leading-[1.05] tracking-tight text-[color:var(--ink-5)]">
            {before}
            {index >= 0 && (
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(110deg, oklch(0.92 0.14 220), oklch(0.78 0.20 240) 55%, oklch(0.70 0.22 280))",
                }}
              >
                {highlight}
              </span>
            )}
            {after}
          </h1>

          <div className="relative mt-6 h-px w-40 overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[color:var(--glow-strong)] to-transparent" />
            <span className="absolute inset-0 blur-[3px] bg-gradient-to-r from-transparent via-[color:var(--glow)] to-transparent" />
          </div>

          <p className="relative mt-6 text-base md:text-lg text-[color:var(--ink-4)] leading-relaxed max-w-xl">
            {tr.hero.subtitle}
          </p>

          <div className="relative mt-8 flex flex-wrap items-center gap-3">
            <Link href={withLocalePath(lang, "/contact")} className="btn-luxe">
              {tr.cta.build} <ArrowRight className="h-4 w-4 flip-rtl relative z-10" />
            </Link>
            <Link href={withLocalePath(lang, "/portfolio")} className="btn-luxe-ghost">
              <span className="iconwrap">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
              {tr.cta.cases}
            </Link>
          </div>
        </div>

        <div className="mt-8 grid w-full max-w-3xl grid-cols-1 gap-3 md:grid-cols-3">
          {[
            { icon: Search, label: tr.hero.mini[0] },
            { icon: Globe2, label: tr.hero.mini[1] },
            { icon: Layout, label: tr.hero.mini[2] },
          ].map((item, i) => (
            <div key={i} className="glass rounded-2xl px-4 py-3 flex items-center gap-3">
              <item.icon className="h-4 w-4 text-[color:var(--ink-5)]" />
              <span className="text-sm text-[color:var(--ink-4)]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrustMarquee({ tr }: SectionProps) {
  const items = [...tr.trust, ...tr.trust];

  return (
    <section aria-label="Trust" className="relative border-y border-white/5 bg-[color:var(--ink-1)]/60 py-5 overflow-hidden">
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap text-[color:var(--ink-4)]">
        {items.map((label, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--glow)]" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function HomeAurora() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMouseMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${((event.clientX - rect.left) / rect.width) * 100}%`);
      el.style.setProperty("--my", `${((event.clientY - rect.top) / rect.height) * 100}%`);
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return <div ref={ref} className="aurora" />;
}

const PROBLEM_ACCENTS = ["#FF4FD8", "#00E5FF", "#B6FF3B", "#8B5CF6"] as const;

export function ProblemSection({ tr }: SectionProps) {
  return (
    <section className="relative py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-semibold text-gradient">{tr.problem.title}</h2>
          <p className="mt-4 text-[color:var(--ink-4)] text-lg">{tr.problem.sub}</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tr.problem.cards.map((card, i) => {
            const accent = PROBLEM_ACCENTS[i];
            return (
              <div
                key={i}
                className="group relative glass overflow-hidden rounded-3xl p-6 transition duration-500 hover:shadow-[0_30px_80px_-20px_var(--tw-shadow-color)] hover:-translate-y-1"
                style={{ "--problem-accent": accent, "--tw-shadow-color": accent } as CSSProperties}
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(120% 90% at 50% 0%, color-mix(in oklab, var(--problem-accent) 18%, transparent), transparent 58%)",
                  }}
                />
                <div
                  className="absolute inset-x-6 top-0 z-10 h-[2px] rounded-full opacity-0 transition group-hover:opacity-100"
                  style={{
                    background: "linear-gradient(90deg, transparent, var(--problem-accent), transparent)",
                    boxShadow: "0 0 24px var(--problem-accent)",
                  }}
                />
                <div
                  className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{
                    background: "color-mix(in oklab, var(--problem-accent) 18%, transparent)",
                    color: "var(--problem-accent)",
                  }}
                >
                  {
                    [
                      <Search key="search" className="h-5 w-5" />,
                      <ShieldCheck key="shield" className="h-5 w-5" />,
                      <Workflow key="workflow" className="h-5 w-5" />,
                      <Eye key="eye" className="h-5 w-5" />,
                    ][i]
                  }
                </div>
                <h3 className="relative z-10 mt-5 text-lg font-semibold text-[color:var(--ink-5)]">{card.t}</h3>
                <p className="relative z-10 mt-2 text-sm leading-relaxed text-[color:var(--ink-4)]">{card.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const SOLUTION_ICONS = [TrendingUp, Search, BrainCircuit, ShieldCheck, Workflow, BarChart3];

export function SolutionSection({ lang, tr }: SectionProps) {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[color:var(--ink-5)]">
            <Sparkles className="h-3 w-3" /> {tr.solution.badge}
          </div>
          <h2 className="mt-5 text-3xl md:text-5xl font-semibold text-gradient">{tr.solution.title}</h2>
          <p className="mt-4 text-[color:var(--ink-4)] text-lg">{tr.solution.sub}</p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tr.solution.cards.map((card, i) => {
            const Icon = SOLUTION_ICONS[i];
            return (
              <article
                key={i}
                className="group glass luminous-border rounded-3xl p-6 hover-lift overflow-hidden animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--glow)]/15 text-[color:var(--ink-5)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[color:var(--ink-5)]">{card.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-4)]">{card.d}</p>
                <div className="mt-6 h-28 rounded-2xl border border-white/10 bg-gradient-to-br from-[color:var(--ink-2)]/60 to-transparent relative overflow-hidden">
                  <div className="absolute -inset-10 opacity-40 bg-[radial-gradient(circle_at_30%_40%,var(--glow),transparent_60%)]" />
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 glass-strong rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-[color:var(--ink-5)]">
            <Sparkles className="h-5 w-5 text-[color:var(--glow)]" />
            <p className="text-base md:text-lg">{tr.solution.strip}</p>
          </div>
          <Link href={withLocalePath(lang, "/contact")} className="btn-primary whitespace-nowrap">
            {tr.cta.letsBuild} <ArrowRight className="h-4 w-4 flip-rtl" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const CASE_IMAGES = [
  "/images/case-realestate.jpg",
  "/images/case-clinic.jpg",
  "/images/case-personal.jpg",
  "/images/case-consulting.jpg",
];
const CASE_ICONS = [HomeIcon, Stethoscope, User, Briefcase];

export function CasesSection({ lang, tr }: SectionProps) {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[color:var(--ink-5)]">
            {tr.cases.badge}
          </div>
          <h2 className="mt-5 text-3xl md:text-5xl font-semibold text-gradient">{tr.cases.title}</h2>
          <p className="mt-4 text-[color:var(--ink-4)] text-lg">{tr.cases.sub}</p>
        </div>

        <div className="mt-12 -mx-6 md:-mx-10 px-14 md:px-20 overflow-x-auto snap-x snap-mandatory scroll-px-14 md:scroll-px-20 scrollbar-none">
          <div className="flex gap-6 pt-16 pb-28 md:pt-16 md:pb-28 group/list">
            {tr.cases.items.map((item, i) => {
              const Icon = CASE_ICONS[i];
              return (
                <article
                  key={i}
                  className="group relative snap-start shrink-0 w-[85%] sm:w-[60%] lg:w-[28%] glass rounded-3xl p-4 transition duration-500 hover:scale-[1.02] hover:shadow-glow"
                >
                  <div className="rounded-2xl overflow-hidden border border-white/10 bg-[color:var(--ink-1)]">
                    <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10 bg-white/5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                    </div>
                    <div className="relative h-44">
                      <Image
                        src={CASE_IMAGES[i]}
                        alt={item.industry}
                        fill
                        sizes="(min-width: 1024px) 28vw, (min-width: 640px) 60vw, 85vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-[11px] uppercase tracking-widest text-[color:var(--ink-4)]">
                    <Icon className="h-3.5 w-3.5" /> {item.industry}
                  </div>
                  <h3 className="mt-2 text-[color:var(--ink-5)] font-semibold">{item.goal}</h3>
                  <Link
                    href={withLocalePath(lang, "/portfolio")}
                    className="mt-4 inline-flex items-center gap-1 text-sm text-[color:var(--glow)] hover:text-[color:var(--glow-strong)]"
                  >
                    {tr.cta.learn} <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>

                  <div className="pointer-events-none absolute inset-0 z-10 rounded-3xl bg-[color:var(--ink-1)]/45 opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-6 z-20 w-[88%] rounded-2xl border border-white/15 bg-[color:var(--ink-2)] p-4 opacity-0 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.9)] translate-y-3 transition duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <Quote className="h-4 w-4 text-[color:var(--glow)]" />
                    <p className="mt-2 text-xs text-[color:var(--ink-4)] leading-relaxed">
                      &quot;{tr.cases.quote}&quot;
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <Image
                        src="/images/portrait.jpg"
                        alt=""
                        className="h-7 w-7 rounded-full object-cover"
                        width={28}
                        height={28}
                      />
                      <div className="text-[11px] text-[color:var(--ink-5)]">
                        {tr.cases.who.name}{" "}
                        <span className="text-[color:var(--ink-4)]/70">— {tr.cases.who.role}</span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link href={withLocalePath(lang, "/portfolio")} className="btn-ghost">
            {tr.cta.more} <ArrowRight className="h-4 w-4 flip-rtl" />
          </Link>
        </div>
      </div>
    </section>
  );
}

const SERVICE_IMAGES = [
  "/images/svc-geo.jpg",
  "/images/svc-ai.jpg",
  "/images/svc-web.jpg",
  "/images/svc-visibility.jpg",
];
const SERVICE_ICONS = [Search, BrainCircuit, MonitorSmartphone, Eye];

export function ServicesSection({ lang, tr }: SectionProps) {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-semibold text-gradient">{tr.services.title}</h2>
          <p className="mt-4 text-[color:var(--ink-4)] text-lg">{tr.services.sub}</p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 group/svc">
          {tr.services.items.map((item, i) => {
            const Icon = SERVICE_ICONS[i];
            return (
              <article
                key={i}
                className="relative glass rounded-[2rem] p-6 transition duration-500 hover-lift overflow-hidden group-hover/svc:[&:not(:hover)]:opacity-70"
              >
                <div
                  className="absolute inset-0 rounded-[2rem] opacity-0 hover:opacity-100 transition duration-500 pointer-events-none"
                  style={{
                    boxShadow:
                      "inset 0 0 0 1px color-mix(in oklab, var(--destructive) 60%, transparent), 0 0 60px -10px var(--destructive)",
                  }}
                />
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--glow)]/15 text-[color:var(--ink-5)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[color:var(--ink-5)]">{item.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-4)]">{item.d}</p>
                <Link
                  href={withLocalePath(lang, "/services")}
                  className="mt-4 inline-flex items-center gap-1 text-sm text-[color:var(--glow)] hover:text-[color:var(--glow-strong)]"
                >
                  {tr.cta.learn} <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <div className="mt-6 relative h-36 rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src={SERVICE_IMAGES[i]}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink-1)]/80 to-transparent" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const INDUSTRY_ICONS = [HomeIcon, Stethoscope, User, Briefcase];

export function IndustriesSection({ lang, tr }: SectionProps) {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[color:var(--ink-5)]">
            {tr.industries.badge}
          </div>
          <h2 className="mt-5 text-3xl md:text-5xl font-semibold text-[color:var(--ink-5)]">
            {tr.industries.titleA}
            <span className="text-gradient">{tr.industries.titleHL}</span>
            {tr.industries.titleB}
          </h2>
          <p className="mt-4 text-[color:var(--ink-4)] text-lg">{tr.industries.sub}</p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tr.industries.items.map((item, i) => {
            const Icon = INDUSTRY_ICONS[i];
            return (
              <article
                key={i}
                className="glass rounded-[2rem] p-6 hover-lift transition duration-300"
                style={{ background: "rgba(10,20,40,0.7)" }}
              >
                <div className="h-28 rounded-2xl border border-white/10 relative overflow-hidden">
                  <div className="absolute -inset-10 opacity-60 bg-[radial-gradient(circle_at_50%_50%,var(--glow),transparent_60%)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="h-10 w-10 text-[color:var(--ink-5)]" />
                  </div>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[color:var(--ink-5)]">{item.t}</h3>
                <p className="mt-2 text-sm text-[color:var(--ink-4)]">{item.d}</p>
                <Link
                  href={withLocalePath(lang, "/services")}
                  className="mt-4 inline-flex items-center gap-1 text-sm text-[color:var(--glow)] hover:text-[color:var(--glow-strong)]"
                >
                  {tr.cta.learn} <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function FinalCta({ lang, tr }: SectionProps) {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="glass-strong luminous-border rounded-[2.5rem] grid gap-8 p-8 md:p-14 md:grid-cols-2 items-center overflow-hidden">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold text-gradient leading-tight">
              {tr.finalCta.title}
            </h2>
            <p className="mt-4 text-[color:var(--ink-4)] text-lg max-w-md">{tr.finalCta.sub}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={withLocalePath(lang, "/contact")} className="btn-primary">
                {tr.cta.audit} <ArrowRight className="h-4 w-4 flip-rtl" />
              </Link>
              <a
                href={publicSiteConfig.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                <MessageCircle className="h-4 w-4" /> {tr.cta.whatsapp}
              </a>
            </div>
          </div>
          <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden border border-white/10">
            <Image
              src="/images/cta-visual.jpg"
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[color:var(--ink-1)]/70 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
