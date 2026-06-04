import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import {
  ArrowUpRight,
  BarChart3,
  Box,
  Check,
  Gem,
  Headphones,
  Rocket,
  ShieldCheck,
  Star,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";
import { getRouteLang, type LocalePageProps } from "@/i18n/server";
import { withLocalePath } from "@/i18n/routing";
import type { Lang } from "@/i18n/translations";

type PricingFeature = {
  label: string;
  available?: boolean;
};

type PricingPlan = {
  name: string;
  description: string;
  price: string;
  period: string;
  icon: LucideIcon;
  featured?: boolean;
  features: PricingFeature[];
};

type PricingBenefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type PricingCopy = {
  badge: string;
  title: string;
  titleAccent: string;
  lead: string[];
  monthly: string;
  yearly: string;
  save: string;
  popular: string;
  cta: string;
  plans: PricingPlan[];
  benefits: PricingBenefit[];
};

const pricingCopy: Record<Lang, PricingCopy> = {
  en: {
    badge: "Simple. Transparent. Fair.",
    title: "Pricing",
    titleAccent: "Plans",
    lead: [
      "Flexible pricing options tailored to your business needs.",
      "Choose the perfect plan and let's build something amazing together.",
    ],
    monthly: "Monthly",
    yearly: "Yearly",
    save: "Save 20%",
    popular: "Most Popular",
    cta: "Choose Plan",
    plans: [
      {
        name: "Starter",
        description: "Perfect for individuals and small businesses.",
        price: "$499",
        period: "/ month",
        icon: Rocket,
        features: [
          { label: "Custom Website Design" },
          { label: "Responsive Design" },
          { label: "SEO Basic Setup" },
          { label: "Up to 5 Pages" },
          { label: "Contact Form" },
          { label: "Priority Support", available: false },
        ],
      },
      {
        name: "Professional",
        description: "Ideal for growing businesses and startups.",
        price: "$999",
        period: "/ month",
        icon: Box,
        featured: true,
        features: [
          { label: "Everything in Starter" },
          { label: "Web Application Development" },
          { label: "SEO Advanced" },
          { label: "Up to 15 Pages" },
          { label: "Speed Optimization" },
          { label: "Priority Support" },
        ],
      },
      {
        name: "Enterprise",
        description: "Advanced solutions for large scale businesses.",
        price: "$1999",
        period: "/ month",
        icon: Gem,
        features: [
          { label: "Everything in Professional" },
          { label: "Advanced Web Applications" },
          { label: "GEO Optimization" },
          { label: "SEO Premium" },
          { label: "Unlimited Pages" },
          { label: "24/7 Priority Support" },
        ],
      },
    ],
    benefits: [
      {
        title: "Transparent Pricing",
        description: "No hidden costs. Ever.",
        icon: ShieldCheck,
      },
      {
        title: "Satisfaction Guarantee",
        description: "100% satisfaction or we make it right.",
        icon: ShieldCheck,
      },
      {
        title: "Ongoing Support",
        description: "Dedicated support every step of the way.",
        icon: Headphones,
      },
      {
        title: "Scalable Solutions",
        description: "Plans that grow with your business.",
        icon: BarChart3,
      },
    ],
  },
  fa: {
    badge: "ساده. شفاف. منصفانه.",
    title: "پلن‌های",
    titleAccent: "قیمت‌گذاری",
    lead: [
      "پلن‌های منعطف، متناسب با نیازهای کسب‌وکار شما.",
      "پلن مناسب را انتخاب کنید تا چیزی اثرگذار بسازیم.",
    ],
    monthly: "ماهانه",
    yearly: "سالانه",
    save: "۲۰٪ تخفیف",
    popular: "محبوب‌ترین",
    cta: "انتخاب پلن",
    plans: [
      {
        name: "استارتر",
        description: "مناسب افراد و کسب‌وکارهای کوچک.",
        price: "$499",
        period: "/ ماه",
        icon: Rocket,
        features: [
          { label: "طراحی اختصاصی وب‌سایت" },
          { label: "طراحی ریسپانسیو" },
          { label: "راه‌اندازی پایه سئو" },
          { label: "تا ۵ صفحه" },
          { label: "فرم تماس" },
          { label: "پشتیبانی اولویت‌دار", available: false },
        ],
      },
      {
        name: "پروفشنال",
        description: "مناسب کسب‌وکارهای در حال رشد و استارتاپ‌ها.",
        price: "$999",
        period: "/ ماه",
        icon: Box,
        featured: true,
        features: [
          { label: "تمام موارد استارتر" },
          { label: "توسعه وب‌اپلیکیشن" },
          { label: "سئوی پیشرفته" },
          { label: "تا ۱۵ صفحه" },
          { label: "بهینه‌سازی سرعت" },
          { label: "پشتیبانی اولویت‌دار" },
        ],
      },
      {
        name: "اینترپرایز",
        description: "راهکارهای پیشرفته برای کسب‌وکارهای بزرگ.",
        price: "$1999",
        period: "/ ماه",
        icon: Gem,
        features: [
          { label: "تمام موارد پروفشنال" },
          { label: "وب‌اپلیکیشن‌های پیشرفته" },
          { label: "بهینه‌سازی GEO" },
          { label: "سئوی پریمیوم" },
          { label: "صفحات نامحدود" },
          { label: "پشتیبانی اولویت‌دار ۲۴/۷" },
        ],
      },
    ],
    benefits: [
      {
        title: "قیمت‌گذاری شفاف",
        description: "بدون هزینه پنهان.",
        icon: ShieldCheck,
      },
      {
        title: "تضمین رضایت",
        description: "رضایت کامل یا اصلاح مسیر.",
        icon: ShieldCheck,
      },
      {
        title: "پشتیبانی مستمر",
        description: "همراهی در تمام مسیر.",
        icon: Headphones,
      },
      {
        title: "راهکارهای مقیاس‌پذیر",
        description: "پلن‌هایی که با کسب‌وکار رشد می‌کنند.",
        icon: BarChart3,
      },
    ],
  },
  ar: {
    badge: "بسيط. شفاف. عادل.",
    title: "خطط",
    titleAccent: "الأسعار",
    lead: [
      "خيارات أسعار مرنة مصممة لاحتياجات عملك.",
      "اختر الخطة المناسبة ولنصنع شيئاً مؤثراً.",
    ],
    monthly: "شهري",
    yearly: "سنوي",
    save: "وفر 20%",
    popular: "الأكثر شيوعاً",
    cta: "اختر الخطة",
    plans: [
      {
        name: "البداية",
        description: "مناسب للأفراد والأعمال الصغيرة.",
        price: "$499",
        period: "/ شهر",
        icon: Rocket,
        features: [
          { label: "تصميم موقع مخصص" },
          { label: "تصميم متجاوب" },
          { label: "إعداد SEO أساسي" },
          { label: "حتى 5 صفحات" },
          { label: "نموذج تواصل" },
          { label: "دعم أولوية", available: false },
        ],
      },
      {
        name: "الاحترافي",
        description: "مثالي للأعمال النامية والشركات الناشئة.",
        price: "$999",
        period: "/ شهر",
        icon: Box,
        featured: true,
        features: [
          { label: "كل ما في البداية" },
          { label: "تطوير تطبيقات ويب" },
          { label: "SEO متقدم" },
          { label: "حتى 15 صفحة" },
          { label: "تحسين السرعة" },
          { label: "دعم أولوية" },
        ],
      },
      {
        name: "المؤسسات",
        description: "حلول متقدمة للأعمال واسعة النطاق.",
        price: "$1999",
        period: "/ شهر",
        icon: Gem,
        features: [
          { label: "كل ما في الاحترافي" },
          { label: "تطبيقات ويب متقدمة" },
          { label: "تحسين GEO" },
          { label: "SEO مميز" },
          { label: "صفحات غير محدودة" },
          { label: "دعم أولوية 24/7" },
        ],
      },
    ],
    benefits: [
      {
        title: "أسعار شفافة",
        description: "لا تكاليف مخفية.",
        icon: ShieldCheck,
      },
      {
        title: "ضمان الرضا",
        description: "رضا كامل أو نصحح المسار.",
        icon: ShieldCheck,
      },
      {
        title: "دعم مستمر",
        description: "دعم مخصص في كل خطوة.",
        icon: Headphones,
      },
      {
        title: "حلول قابلة للتوسع",
        description: "خطط تنمو مع عملك.",
        icon: BarChart3,
      },
    ],
  },
};

const cardStyles = {
  regular: {
    background:
      "radial-gradient(circle at 3% 0%, rgba(255, 147, 232, 0.36), transparent 34%), radial-gradient(circle at 104% 2%, rgba(99, 220, 255, 0.55), transparent 31%), linear-gradient(150deg, rgba(94, 58, 139, 0.58) 0%, rgba(20, 37, 94, 0.82) 37%, rgba(4, 20, 56, 0.94) 100%)",
    borderColor: "rgba(174, 225, 255, 0.82)",
    boxShadow:
      "0 0 0 1px rgba(255,255,255,0.09) inset, 0 0 36px rgba(85,190,255,0.36), 0 0 40px rgba(246,132,226,0.20), 0 26px 70px rgba(0,0,0,0.50)",
  },
  featured: {
    background:
      "radial-gradient(circle at 8% 0%, rgba(197, 111, 255, 0.48), transparent 34%), radial-gradient(circle at 102% 4%, rgba(88, 217, 255, 0.66), transparent 34%), linear-gradient(155deg, rgba(64, 56, 181, 0.72) 0%, rgba(11, 62, 127, 0.88) 43%, rgba(3, 26, 70, 0.96) 100%)",
    borderColor: "rgba(190, 231, 255, 0.98)",
    boxShadow:
      "0 0 0 1px rgba(255,255,255,0.17) inset, 0 0 56px rgba(95,202,255,0.70), 0 0 50px rgba(201,118,255,0.35), 0 28px 78px rgba(0,0,0,0.54)",
  },
} satisfies Record<"regular" | "featured", CSSProperties>;

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const lang = await getRouteLang(params);
  return createPageMetadata({
    lang,
    path: "/pricing",
    title: "Pricing — Mohammadreza Zakari",
    description: "Transparent engagements designed around outcomes.",
    openGraphDescription: "Starter, Professional, Enterprise.",
  });
}

export default async function PricingPage({ params }: LocalePageProps) {
  const lang = await getRouteLang(params);
  const copy = pricingCopy[lang];

  return (
    <section className="relative isolate overflow-hidden pt-28 pb-14 text-[color:var(--ink-5)] md:pt-[118px] md:pb-14">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(900px 480px at 50% 4%, rgba(63, 103, 255, 0.26), transparent 62%), radial-gradient(640px 360px at 8% 42%, rgba(97, 209, 255, 0.18), transparent 64%), radial-gradient(620px 340px at 92% 40%, rgba(190, 91, 255, 0.17), transparent 62%), linear-gradient(180deg, #020824 0%, #02091f 72%, #01071d 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[-310px] -z-10 h-[660px] w-[1180px] -translate-x-1/2 rounded-[50%] border border-[#795dff]/35 opacity-80 blur-[0.3px]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[-360px] -z-10 h-[760px] w-[1420px] -translate-x-1/2 rounded-[50%] border border-[#486dff]/20 opacity-70"
      />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex rounded-full border border-[#96a7ff]/30 bg-[#111a42]/70 px-5 py-2 text-sm leading-none text-[#d8ddff] shadow-[0_0_24px_rgba(85,123,255,0.16)]">
            {copy.badge}
          </div>
          <h1 className="mt-4 text-5xl font-semibold leading-none tracking-normal text-white sm:text-6xl md:text-[56px]">
            {copy.title}{" "}
            <span className="bg-[linear-gradient(135deg,#a976ff_0%,#2f82ff_92%)] bg-clip-text text-transparent">
              {copy.titleAccent}
            </span>
          </h1>
          <div className="mt-2 text-base leading-6 text-[#bec5e6] md:text-lg md:leading-7">
            {copy.lead.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="mx-auto mt-4 flex w-full max-w-[365px] items-center rounded-full border border-[#4f70d7]/45 bg-[#0b1744]/78 p-1 shadow-[0_0_26px_rgba(64,130,255,0.26)]">
            <button
              type="button"
              className="flex-1 rounded-full border border-[#b9c6ff]/55 bg-[linear-gradient(180deg,#3c7dff_0%,#285be0_100%)] px-5 py-3 text-sm font-medium leading-none text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_0_22px_rgba(62,126,255,0.78)]"
            >
              {copy.monthly}
            </button>
            <button
              type="button"
              className="flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm leading-none text-[#d4dcff]"
            >
              <span>{copy.yearly}</span>
              <span className="rounded-full bg-[#2d376c] px-2.5 py-1 text-[11px] text-[#dce2ff]">
                {copy.save}
              </span>
            </button>
          </div>
        </div>

        <div className="mx-auto mt-5 grid max-w-[880px] gap-6 md:grid-cols-3 md:items-start xl:max-w-[1100px]">
          {copy.plans.map((plan) => (
            <PricingCard key={plan.name} copy={copy} lang={lang} plan={plan} />
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-[880px] overflow-hidden rounded-[24px] border border-[#82b9ff]/58 bg-[linear-gradient(145deg,rgba(30,47,120,0.80)_0%,rgba(9,26,72,0.88)_100%)] px-5 py-4 shadow-[0_0_42px_rgba(84,168,255,0.28),0_22px_70px_rgba(0,0,0,0.38)] md:px-8 md:py-5 xl:max-w-[1100px]">
          <div className="grid gap-4 md:grid-cols-4 md:divide-x md:divide-[#6680c7]/24">
            {copy.benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div key={benefit.title} className="flex items-center gap-3 md:px-4 first:md:pl-0 last:md:pr-0">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#8caaff]/44 bg-[#17285c]/78 text-[#c9d5ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.20),0_0_22px_rgba(92,137,255,0.20)]">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <div>
                    <h2 className="text-xs font-semibold tracking-normal text-white">{benefit.title}</h2>
                    <p className="mt-1 text-xs leading-5 text-[#b8c0df]">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

function PricingCard({ copy, lang, plan }: { copy: PricingCopy; lang: Lang; plan: PricingPlan }) {
  const Icon = plan.icon;
  const style = plan.featured ? cardStyles.featured : cardStyles.regular;

  return (
    <article
      className={`group relative flex min-h-[430px] flex-col overflow-hidden rounded-[24px] border p-6 text-start transition duration-300 hover:-translate-y-1 md:min-h-[442px] ${
        plan.featured ? "md:-mt-2 md:min-h-[456px]" : "md:mt-2"
      }`}
      style={style}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 56% 4%, rgba(255,255,255,0.18), transparent 30%), linear-gradient(180deg, rgba(255,255,255,0.10), transparent 34%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-4 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(120,216,255,0.85),transparent)]"
      />

      <div className="relative z-10 flex h-full flex-col">
        <div className="absolute end-0 top-0 flex h-[58px] w-[58px] items-center justify-center rounded-full border border-[#bfd3ff]/56 bg-[linear-gradient(145deg,rgba(112,84,220,0.72),rgba(33,139,232,0.68))] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_0_28px_rgba(88,184,255,0.45)]">
          <Icon className="h-7 w-7" strokeWidth={1.6} />
        </div>

        {plan.featured ? (
          <div className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-[#af9fff]/50 bg-[#6a50d9]/35 px-4 py-1.5 text-xs font-medium leading-none text-white shadow-[0_0_18px_rgba(159,111,255,0.34)]">
            <Star className="h-3.5 w-3.5" />
            {copy.popular}
          </div>
        ) : null}

        <div className="pe-16">
          <h2 className="text-2xl font-semibold tracking-normal text-white">{plan.name}</h2>
          <p className="mt-2 min-h-[40px] text-xs leading-5 text-[#d2d6ef] md:text-sm">{plan.description}</p>
        </div>

        <div className="mt-5 flex items-end gap-3">
          <div className="text-4xl font-semibold leading-none tracking-normal text-[#edf2ff] md:text-[42px]">
            {plan.price}
          </div>
          <div className="pb-1 text-sm text-[#c3c9e5]">{plan.period}</div>
        </div>

        <div className="mt-5 h-px w-full bg-[linear-gradient(90deg,rgba(157,181,255,0.22),rgba(109,169,255,0.28),rgba(157,181,255,0.08))]" />

        <ul className="mt-4 space-y-3">
          {plan.features.map((feature) => {
            const available = feature.available !== false;

            return (
              <li
                key={feature.label}
                className={`flex items-center gap-3 text-xs leading-none md:text-sm ${
                  available ? "text-[#e3e7ff]" : "text-[#737aab]"
                }`}
              >
                <span
                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                    available ? "text-[#86d7ff]" : "border border-[#657099]/50 text-[#596189]"
                  }`}
                >
                  {available ? <Check className="h-4 w-4" strokeWidth={2} /> : <X className="h-3 w-3" />}
                </span>
                <span>{feature.label}</span>
              </li>
            );
          })}
        </ul>

        <Link
          href={withLocalePath(lang, "/contact")}
          className="mt-auto inline-flex h-11 w-full items-center justify-center rounded-full border border-[#d9defe]/58 bg-[linear-gradient(100deg,rgba(178,92,220,0.64)_0%,rgba(57,83,178,0.56)_48%,rgba(84,210,248,0.72)_100%)] px-5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_0_24px_rgba(106,183,255,0.36)] transition hover:brightness-110"
        >
          <span className="flex-1 text-center">{copy.cta}</span>
          <ArrowUpRight className="h-5 w-5 shrink-0" strokeWidth={1.8} />
        </Link>
      </div>
    </article>
  );
}
