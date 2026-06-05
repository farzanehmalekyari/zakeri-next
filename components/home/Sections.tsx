"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, type CSSProperties } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Bot,
  Building2,
  ChevronLeft,
  ChevronRight,
  ChartNoAxesCombined,
  ChartSpline,
  CircleGauge,
  Globe,
  Handshake,
  HeartPulse,
  MessageCircle,
  MonitorSmartphone,
  MoveHorizontal,
  PencilRuler,
  Quote,
  Search,
  SearchCheck,
  Sparkles,
  Waypoints,
  User,
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
  const featureCards = [
    { icon: Search, label: tr.hero.mini[0], description: tr.hero.miniDescriptions[0] },
    { icon: Globe, label: tr.hero.mini[1], description: tr.hero.miniDescriptions[1] },
    { icon: PencilRuler, label: tr.hero.mini[2], description: tr.hero.miniDescriptions[2] },
  ];

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
      <div className="absolute inset-0 bg-[color:var(--ink-1)]/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--ink-1)]/10 via-[color:var(--ink-1)]/5 to-[color:var(--ink-1)]/10" />
      <div className="dot-grid absolute inset-0 opacity-50" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-6 pt-36 pb-16 md:items-start md:px-10 md:pt-44 lg:min-h-screen">
        <div className="hero-glass animate-float relative w-full max-w-2xl lg:max-w-[42rem] rounded-[3rem] md:rounded-[3.5rem] p-8 md:p-11 lg:p-12">
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

          <h1 className="relative mt-7 text-4xl md:text-5xl lg:text-[3.75rem] font-semibold leading-[1.05] text-[color:var(--ink-5)]">
            {before}
            {index >= 0 && (
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(110deg, #F47EE8 0%, #B98CFF 44%, #62B8FF 100%)",
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

        <div className="hero-feature-grid mt-8 grid w-full max-w-[73rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((item, i) => (
            <article
              key={item.label}
              className="hero-feature-card group"
              style={{ "--feature-delay": `${i * 0.28}s` } as CSSProperties}
            >
              <span className="hero-feature-icon" aria-hidden>
                <item.icon className="h-7 w-7" strokeWidth={1.85} />
              </span>
              <div className="min-w-0 text-start">
                <h2 className="text-xl font-semibold leading-tight text-[color:var(--ink-5)] md:text-2xl">
                  {item.label}
                </h2>
                <p className="mt-3 max-w-[18rem] text-sm leading-relaxed text-[color:var(--ink-4)] md:text-base">
                  {item.description}
                </p>
              </div>
            </article>
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
                  className="neon-icon-box relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{
                    color: "var(--problem-accent)",
                  }}
                >
                  {
                    [
                      <SearchCheck key="search" className="h-5 w-5" />,
                      <BadgeCheck key="badge" className="h-5 w-5" />,
                      <Waypoints key="waypoints" className="h-5 w-5" />,
                      <CircleGauge key="gauge" className="h-5 w-5" />,
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

const SOLUTION_ICONS = [ChartSpline, SearchCheck, Bot, BadgeCheck, Waypoints, ChartNoAxesCombined];
const SOLUTION_IMAGES = [
  "/images/Conversion.png",
  "/images/SEO-ready.png",
  "/images/AI-ready.png",
  "/images/Trust.png",
  "/images/Lead.png",
  "/images/Analytics.png",
];

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
        <div className="relative mt-10 -mx-6 md:mx-0 md:mt-14">
          <div
            aria-hidden
            className="solution-scroll-cue pointer-events-none absolute end-7 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[color:var(--ink-2)]/80 text-[color:var(--ink-5)] shadow-[0_16px_45px_-22px_var(--glow)] backdrop-blur md:hidden"
          >
            <MoveHorizontal className="h-5 w-5" />
          </div>
          <div className="overflow-x-auto scroll-px-6 snap-x snap-mandatory px-6 pb-3 scrollbar-none md:overflow-visible md:px-0 md:pb-0">
            <div className="flex gap-5 md:grid md:grid-cols-2 lg:grid-cols-3">
              {tr.solution.cards.map((card, i) => {
                const Icon = SOLUTION_ICONS[i];
                return (
                  <article
                    key={i}
                    className="group glass luminous-border flex w-[82vw] max-w-[22rem] shrink-0 snap-start flex-col overflow-hidden rounded-3xl p-6 animate-fade-up hover-lift md:w-auto md:max-w-none md:shrink"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    <div className="neon-icon-box inline-flex h-11 w-11 items-center justify-center rounded-2xl">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-[color:var(--ink-5)]">{card.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-4)]">{card.d}</p>
                    <div className="relative mt-6 aspect-square overflow-hidden rounded-2xl border border-white/10 bg-[color:var(--ink-1)]">
                      <Image
                        src={SOLUTION_IMAGES[i]}
                        alt={card.t}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 82vw"
                        className="object-cover"
                      />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
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
const CASE_ICONS = [Building2, HeartPulse, User, Handshake];

export function CasesSection({ lang, tr }: SectionProps) {
  const casesCarouselRef = useRef<HTMLDivElement | null>(null);

  const scrollCases = (direction: -1 | 1) => {
    const carousel = casesCarouselRef.current;
    if (!carousel) return;

    carousel.scrollBy({
      left: carousel.clientWidth * 0.72 * direction,
      behavior: "smooth",
    });
  };

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

        <div className="relative mt-12 -mx-6 md:-mx-10">
          <button
            type="button"
            aria-label="Scroll case studies left"
            onClick={() => scrollCases(-1)}
            className="absolute left-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[color:var(--ink-2)]/80 text-[color:var(--ink-5)] shadow-[0_16px_45px_-22px_var(--glow)] backdrop-blur transition hover:border-[color:var(--glow)]/60 hover:bg-[color:var(--ink-2)] md:left-8"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Scroll case studies right"
            onClick={() => scrollCases(1)}
            className="absolute right-4 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[color:var(--ink-2)]/80 text-[color:var(--ink-5)] shadow-[0_16px_45px_-22px_var(--glow)] backdrop-blur transition hover:border-[color:var(--glow)]/60 hover:bg-[color:var(--ink-2)] md:right-8"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            ref={casesCarouselRef}
            className="px-14 md:px-20 overflow-x-auto snap-x snap-mandatory scroll-px-14 md:scroll-px-20 scrollbar-none"
          >
            <div className="flex items-start gap-10 pt-20 pb-40 md:gap-12 md:pt-20 md:pb-40 group/list">
              {tr.cases.items.map((item, i) => {
                const Icon = CASE_ICONS[i];
                const cardClassName = [
                  "group group/card relative isolate flex snap-start shrink-0 flex-col glass rounded-[2rem] p-5 transition-all duration-500 will-change-transform",
                  "w-[86%] sm:w-[62%] lg:w-[22rem]",
                  "lg:group-hover/list:opacity-35 lg:group-hover/list:brightness-50",
                  "hover:z-20 hover:-translate-y-4 hover:!scale-[1.045] hover:!opacity-100 hover:!brightness-100 hover:shadow-[0_24px_70px_-34px_var(--glow)] hover:ring-1 hover:ring-[color:var(--glow)]",
                ].join(" ");
                const imageClassName = [
                  "relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-[color:var(--ink-1)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-500",
                  "h-56 sm:h-60 lg:h-64",
                ].join(" ");
                return (
                  <article
                    key={i}
                    className={cardClassName}
                  >
                    <div className={imageClassName}>
                      <Image
                        src={CASE_IMAGES[i]}
                        alt={item.industry}
                        fill
                        sizes="(min-width: 1024px) 28vw, (min-width: 640px) 60vw, 85vw"
                        className="object-cover"
                      />
                      <div
                        className={[
                          "absolute inset-0 bg-gradient-to-t from-[color:var(--ink-1)]/50 via-transparent to-transparent transition duration-500 group-hover/card:opacity-10",
                          "opacity-50",
                        ].join(" ")}
                      />
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-[11px] uppercase tracking-widest text-[color:var(--ink-4)]">
                      <Icon className="h-3.5 w-3.5" /> {item.industry}
                    </div>
                    <h3 className="mt-2 text-[color:var(--ink-5)] font-semibold">{item.goal}</h3>
                    <Link
                      href={withLocalePath(lang, "/portfolio")}
                      className="mt-5 inline-flex items-center gap-1 text-sm text-[color:var(--glow)] hover:text-[color:var(--glow-strong)]"
                    >
                      {tr.cta.learn} <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>

                    <div className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] bg-[color:var(--ink-1)]/60 opacity-0 transition duration-500 lg:group-hover/list:opacity-100 group-hover/card:!opacity-0" />

                    <div
                      className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-6 z-20 w-[88%] rounded-2xl border border-white/30 p-4 opacity-0 shadow-[0_24px_90px_-28px_rgba(75,169,255,0.58)] backdrop-blur-2xl backdrop-saturate-150 ring-1 ring-white/10 translate-y-3 transition duration-500 group-hover:opacity-100 group-hover:translate-y-0"
                      style={{
                        background:
                          "linear-gradient(105deg, rgba(75,169,255,0.20) 0%, rgba(123,140,255,0.16) 54%, rgba(244,126,232,0.12) 100%), rgba(18,34,66,0.72)",
                      }}
                    >
                      <Quote className="h-4 w-4 text-[color:var(--glow-strong)]" />
                      <p className="mt-2 text-xs font-medium text-[color:var(--ink-5)]/95 leading-relaxed drop-shadow-[0_1px_7px_rgba(0,0,0,0.55)]">
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
                        <div className="text-[11px] font-medium text-[color:var(--ink-5)] drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]">
                          {tr.cases.who.name}{" "}
                          <span className="text-[color:var(--ink-5)]/72">— {tr.cases.who.role}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
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
const SERVICE_ICONS = [SearchCheck, Bot, MonitorSmartphone, CircleGauge];

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
                <div className="neon-icon-box inline-flex h-11 w-11 items-center justify-center rounded-2xl">
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

const INDUSTRY_IMAGES = [
  "/images/industry-realstate.jpg",
  "/images/Industry-doctor.jpg",
  "/images/Industry-personal.jpg",
  "/images/Industry-bussiness.jpg",
];

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
            return (
              <article
                key={i}
                className="glass rounded-[2rem] p-6 hover-lift transition duration-300"
                style={{ background: "rgba(10,20,40,0.7)" }}
              >
                <div className="h-28 rounded-2xl border border-white/10 relative overflow-hidden">
                  <Image
                    src={INDUSTRY_IMAGES[i]}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink-1)]/75 via-[color:var(--ink-1)]/10 to-transparent" />
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
