export type Lang = "en" | "fa" | "ar";

export const LANGS: { code: Lang; label: string; native: string; dir: "ltr" | "rtl" }[] = [
  { code: "en", label: "English", native: "English", dir: "ltr" },
  { code: "fa", label: "Persian", native: "فارسی", dir: "rtl" },
  { code: "ar", label: "Arabic", native: "العربية", dir: "rtl" },
];

type FaqItem = { q: string; a: string };
type PricingPlan = { name: string; price: string; features: string[]; featured?: boolean };
type CaseItem = {
  industry: string;
  goal: string;
  summary: string;
  quote: string;
  who: { name: string; role: string };
};

export type Dict = {
  brand: string; subname: string;
  nav: { home: string; services: string; portfolio: string; pricing: string; insights: string; about: string; contact: string; faq: string };
  cta: { build: string; cases: string; letsBuild: string; audit: string; whatsapp: string; more: string; learn: string; viewPortfolio: string };
  hero: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    mini: string[];
    miniDescriptions: string[];
  };
  problem: { title: string; sub: string; cards: { t: string; d: string }[] };
  solution: { badge: string; title: string; sub: string; cards: { t: string; d: string }[]; strip: string };
  cases: { badge: string; title: string; sub: string; items: CaseItem[]; quote: string; who: { name: string; role: string }; cta: string };
  services: { title: string; sub: string; items: { t: string; d: string; bullets: string[] }[] };
  industries: { badge: string; titleA: string; titleHL: string; titleB: string; sub: string; items: { t: string; d: string }[] };
  finalCta: { title: string; sub: string };
  trust: string[];
  footer: { slogan: string; tagline: string; rights: string; sections: { explore: string; contact: string; language: string } };
  pages: Record<"services"|"portfolio"|"pricing"|"insights"|"about"|"contact"|"faq", { title: string; lead: string }>;
  faq: FaqItem[];
  pricingPlans: PricingPlan[];
};

export const t: Record<Lang, Dict> = {
  en: {
    brand: "Mohammadreza Zakari",
    subname: "AI-era Digital Growth Architect",
    nav: { home: "Home", services: "Services", portfolio: "Portfolio", pricing: "Pricing", insights: "Insights", about: "About", contact: "Contact", faq: "FAQ" },
    cta: {
      build: "Request Strategy Call",
      cases: "View Case Studies",
      letsBuild: "Let's Build Your Growth Engine",
      audit: "Request Strategy Call",
      whatsapp: "Contact on WhatsApp",
      more: "View More Projects",
      learn: "Explore Service",
      viewPortfolio: "View Portfolio",
    },
    hero: {
      badge: "AI-Era Website Growth",
      title: "Websites Built to Attract Traffic, Build Trust, and Convert Customers",
      highlight: "Attract Traffic",
      subtitle: "We design websites, web apps, SEO/GEO systems, and AI-ready structures that help businesses grow from the internet.",
      mini: ["High-Performance Websites", "Search & AI Ready", "Lead Generation System"],
      miniDescriptions: [
        "Fast, premium websites built to support real business growth.",
        "A structure that helps Google and AI tools understand your business.",
        "Clear paths, forms, and CTAs that turn attention into qualified leads.",
      ],
    },
    problem: {
      title: "Your website may look good. But is it built to grow your business?",
      sub: "Most websites fail because they are not designed as customer acquisition systems.",
      cards: [
        { t: "No Qualified Traffic", d: "Your site exists, but the right people are not finding it through search, AI, or intent-driven channels." },
        { t: "No Trust Architecture", d: "Visitors arrive, but they do not quickly understand why they should trust you, choose you, or contact you." },
        { t: "No Conversion Path", d: "Attention disappears when the journey is unclear, CTAs are weak, and lead capture is not intentional." },
        { t: "No AI/Search Visibility", d: "If search engines and AI tools cannot understand your brand, future customers will not discover you." },
      ],
    },
    solution: {
      badge: "CORE SOLUTION",
      title: "Website as Growth Infrastructure",
      sub: "A high-performance website is more than design. It is a conversion, SEO, AI visibility, and lead generation engine.",
      cards: [
        { t: "Conversion-focused Structure", d: "Strategic UX architecture designed to guide visitors toward meaningful action." },
        { t: "SEO-ready Architecture", d: "Clean technical and content structure built for discoverability, ranking, and long-term growth." },
        { t: "AI-ready Content", d: "Structured content designed for GEO, AI discovery, semantic clarity, and LLM visibility." },
        { t: "Trust-building Sections", d: "Proof, testimonials, authority markers, and credibility signals placed where decisions happen." },
        { t: "Lead Capture System", d: "Forms, CTAs, automation touchpoints, and conversion flows built to capture qualified demand." },
        { t: "Analytics & Improvement Path", d: "Measurement foundations that help track performance, improve conversion, and scale growth." },
      ],
      strip: "Your website should not just look good. It should grow your business.",
    },
    cases: {
      badge: "CASE STUDIES",
      title: "Websites we've designed and deployed",
      sub: "Real projects built to improve trust, visibility, and customer acquisition.",
      items: [
        {
          industry: "Real Estate",
          goal: "Generate qualified buyer and seller inquiries",
          summary: "A premium property website designed to present listings clearly, build trust, and turn visitors into calls.",
          quote: "The new website helped us present properties more professionally and receive more qualified inquiries.",
          who: { name: "Real Estate Client", role: "Property Advisory Team" },
        },
        {
          industry: "Doctors & Clinics",
          goal: "Build trust and increase appointment requests",
          summary: "A medical website structured around credibility, service clarity, patient education, and booking conversion.",
          quote: "Our online presence became clearer, more professional, and easier for patients to trust.",
          who: { name: "Clinic Client", role: "Healthcare Practice" },
        },
        {
          industry: "Personal Brand",
          goal: "Turn expertise into a premium digital presence",
          summary: "A personal brand website built to communicate authority, show expertise, and capture consultation leads.",
          quote: "The website finally reflects the level of expertise and trust I want people to feel.",
          who: { name: "Personal Brand Client", role: "Consultant" },
        },
        {
          industry: "Personal Business",
          goal: "Create a serious platform for customer acquisition",
          summary: "A conversion-focused business website with clear messaging, proof, and direct lead capture.",
          quote: "We moved from a basic online presence to a website that actually supports business growth.",
          who: { name: "Founder-led Client", role: "Business Owner" },
        },
      ],
      quote: "The new website helped us present our business more professionally and receive better inquiries.",
      who: { name: "Project Client", role: "Founder-led Business" },
      cta: "View Project",
    },
    services: {
      title: "The growth engines behind every high-performing website",
      sub: "Strategy, technology, and visibility working together to drive measurable growth.",
      items: [
        {
          t: "Website & Web Application",
          d: "Fast, secure, scalable digital experiences where traffic becomes trust, leads, and business growth.",
          bullets: ["Conversion-focused website design", "Custom web applications", "CMS and integrations", "Performance and security"],
        },
        {
          t: "GEO & AEO Ranking",
          d: "Optimize your presence for answer engines, AI-generated results, semantic search, and modern discovery.",
          bullets: ["Answer-ready content", "Entity and schema strategy", "Technical SEO foundations", "Search performance reporting"],
        },
        {
          t: "AI Visibility",
          d: "Structure your brand, content, and authority signals so AI systems can understand and recommend you.",
          bullets: ["LLM discovery mapping", "Structured content systems", "Authority signal design", "AI visibility reporting"],
        },
        {
          t: "AI Solution",
          d: "Build intelligent workflows, automations, assistants, and AI-powered systems that create real business leverage.",
          bullets: ["Workflow automation", "Custom AI assistants", "API and tool integrations", "Performance monitoring"],
        },
      ],
    },
    industries: {
      badge: "WHO WE HELP",
      titleA: "Built for businesses where ", titleHL: "trust", titleB: " drives growth",
      sub: "For service businesses, experts, consultants, clinics, real estate teams, and founder-led companies that need serious online presence.",
      items: [
        { t: "Real Estate Consultants", d: "Turn property interest into qualified calls and buyer or seller inquiries." },
        { t: "Doctors & Clinics", d: "Build patient trust with clear services, proof, education, and easy appointment paths." },
        { t: "Personal Brands", d: "Turn expertise into authority, visibility, and consultation leads." },
        { t: "Founder-led Businesses", d: "Create a serious digital platform that helps customers trust and contact you." },
      ],
    },
    finalCta: {
      title: "Ready to turn your website into a customer acquisition system?",
      sub: "Let's diagnose your growth opportunity and build the right website strategy.",
    },
    trust: ["Website Growth", "SEO-Ready Architecture", "GEO / AEO Strategy", "AI Visibility", "Lead Generation", "Conversion-Focused UI", "Real Deployed Projects", "High-Trust Digital Experiences"],
    footer: {
      slogan: "Building websites that attract traffic, earn trust, and convert customers.",
      tagline: "AI-era website growth systems for businesses that need to be found, trusted, and chosen online.",
      rights: "All rights reserved.",
      sections: { explore: "Explore", contact: "Contact", language: "Language" },
    },
    pages: {
      services: { title: "Services", lead: "The engines behind websites that attract traffic, build trust, and generate leads." },
      portfolio: { title: "Portfolio & Case Studies", lead: "Selected projects built for visibility, trust, and customer acquisition." },
      pricing: { title: "Pricing", lead: "Clear engagement options for serious website growth work." },
      insights: { title: "Insights", lead: "Practical notes on website growth, SEO, GEO, AI visibility, and conversion." },
      about: { title: "About", lead: "The background behind the work, the strategy, and the growth architecture." },
      contact: { title: "Contact", lead: "Tell us about your business, your current website, and what growth should look like." },
      faq: { title: "FAQ", lead: "Straight answers to the questions business owners usually ask first." },
    },
    faq: [
      { q: "What exactly do you build?", a: "We build websites and digital systems that help businesses get found, earn trust, and turn visitors into leads." },
      { q: "How is this different from normal website design?", a: "The website is planned as a growth system from the start: messaging, UX, SEO, AI visibility, trust signals, and conversion paths work together." },
      { q: "Do I need GEO or AI visibility?", a: "If people search for your service online, AI visibility is becoming part of discovery. We make the structure clear enough for search engines and AI tools to understand you." },
      { q: "Can you improve an existing website?", a: "Yes. Some projects need a rebuild, others need strategy, structure, content, SEO, and conversion improvements." },
      { q: "Do you build multilingual sites?", a: "Yes. We build English, Persian, and Arabic-ready sites with correct RTL, hreflang, and local content structure." },
    ],
    pricingPlans: [
      { name: "Foundation", price: "From $2,400", features: ["Conversion-focused website", "Core SEO architecture", "Analytics setup", "Launch in 3-4 weeks"] },
      { name: "Growth Engine", price: "From $6,800", features: ["Everything in Foundation", "GEO/AEO + AI visibility", "Trust system and proof layer", "Lead capture automations"], featured: true },
      { name: "Authority", price: "Custom", features: ["Multi-locale EN/FA/AR", "Content and authority system", "Advanced integrations", "Quarterly strategy"] },
    ],
  },
  fa: {
    brand: "محمدرضا ذکری",
    subname: "معمار رشد دیجیتال در عصر هوش مصنوعی",
    nav: { home: "خانه", services: "خدمات", portfolio: "نمونه‌کارها", pricing: "قیمت‌گذاری", insights: "بینش‌ها", about: "درباره", contact: "تماس", faq: "سوالات" },
    cta: {
      build: "درخواست جلسه استراتژی رشد",
      cases: "مشاهده کیس‌استادی‌ها",
      letsBuild: "بیایید موتور رشد شما را بسازیم",
      audit: "درخواست جلسه استراتژی رشد",
      whatsapp: "تماس از طریق واتساپ",
      more: "مشاهده پروژه‌های بیشتر",
      learn: "بررسی سرویس",
      viewPortfolio: "مشاهده نمونه‌کارها",
    },
    hero: {
      badge: "رشد وب‌سایت در عصر AI",
      title: "وب‌سایت‌هایی که ترافیک جذب می‌کنند، اعتماد می‌سازند و بازدیدکننده را به مشتری تبدیل می‌کنند",
      highlight: "ترافیک جذب می‌کنند",
      subtitle: "ما وب‌سایت، وب‌اپلیکیشن، ساختار SEO/GEO و سیستم‌های آماده برای AI طراحی می‌کنیم تا کسب‌وکارها از اینترنت رشد کنند.",
      mini: ["وب‌سایت پرفورمنس بالا", "آماده برای جستجو و AI", "سیستم جذب لید"],
      miniDescriptions: [
        "وب‌سایت سریع، حرفه‌ای و جدی برای رشد واقعی کسب‌وکار.",
        "ساختاری که به گوگل و ابزارهای AI کمک می‌کند کسب‌وکار شما را بفهمند.",
        "مسیرهای واضح، فرم‌ها و CTAهایی که توجه کاربر را به لید تبدیل می‌کنند.",
      ],
    },
    problem: {
      title: "ممکن است سایت شما خوب به نظر برسد؛ اما آیا برای رشد ساخته شده؟",
      sub: "بیشتر سایت‌ها شکست می‌خورند چون به‌عنوان سیستم جذب مشتری طراحی نشده‌اند.",
      cards: [
        { t: "ترافیک باکیفیت ندارید", d: "سایت شما وجود دارد، اما افراد درست از طریق جستجو، AI یا کانال‌های هدفمند آن را پیدا نمی‌کنند." },
        { t: "اعتماد سریع ساخته نمی‌شود", d: "بازدیدکننده وارد می‌شود، اما زود متوجه نمی‌شود چرا باید به شما اعتماد کند یا با شما تماس بگیرد." },
        { t: "مسیر تبدیل واضح نیست", d: "وقتی مسیر کاربر، CTAها و فرم‌های دریافت لید درست طراحی نشده باشند، توجه کاربر از بین می‌رود." },
        { t: "در جستجو و AI دیده نمی‌شوید", d: "اگر گوگل و ابزارهای AI برند شما را درست نفهمند، مشتریان آینده شما را پیدا نمی‌کنند." },
      ],
    },
    solution: {
      badge: "راهکار اصلی",
      title: "وب‌سایت به‌عنوان زیرساخت رشد",
      sub: "وب‌سایت پرفورمنس بالا فقط طراحی نیست؛ موتور تبدیل، سئو، دیده‌شدن در AI و جذب لید است.",
      cards: [
        { t: "ساختار متمرکز بر تبدیل", d: "معماری UX استراتژیک برای اینکه بازدیدکننده بداند قدم بعدی چیست." },
        { t: "معماری آماده SEO", d: "ساختار فنی و محتوایی تمیز برای دیده‌شدن، رتبه‌گرفتن و رشد بلندمدت." },
        { t: "محتوای آماده برای AI", d: "محتوای ساختاریافته برای GEO، کشف توسط AI، وضوح معنایی و دیده‌شدن در مدل‌های زبانی." },
        { t: "بخش‌های اعتمادساز", d: "اثبات، تستیمونیال، نشانه‌های اعتبار و سیگنال‌های اعتماد در جای درست." },
        { t: "سیستم دریافت لید", d: "فرم‌ها، CTAها، نقاط تماس و مسیرهای تبدیل برای جذب درخواست‌های واجد شرایط." },
        { t: "تحلیل و مسیر بهبود", d: "زیرساخت اندازه‌گیری برای بررسی عملکرد، بهبود conversion و رشد مداوم." },
      ],
      strip: "سایت شما نباید فقط زیبا باشد؛ باید کسب‌وکار شما را رشد دهد.",
    },
    cases: {
      badge: "کیس‌استادی‌ها",
      title: "وب‌سایت‌هایی که طراحی و اجرا کرده‌ایم",
      sub: "پروژه‌های واقعی که برای اعتمادسازی، دیده‌شدن و جذب مشتری ساخته شده‌اند.",
      items: [
        {
          industry: "مشاور املاک",
          goal: "جذب درخواست‌های واجد شرایط از خریداران و فروشندگان",
          summary: "یک وب‌سایت premium برای نمایش واضح ملک‌ها، ساخت اعتماد و تبدیل بازدیدکننده به تماس.",
          quote: "سایت جدید کمک کرد ملک‌ها را حرفه‌ای‌تر معرفی کنیم و درخواست‌های باکیفیت‌تری دریافت کنیم.",
          who: { name: "مشتری پروژه املاک", role: "تیم مشاوره ملک" },
        },
        {
          industry: "پزشکان و کلینیک‌ها",
          goal: "اعتمادسازی و افزایش درخواست نوبت",
          summary: "وب‌سایتی پزشکی با تمرکز بر اعتبار، شفافیت خدمات، آموزش بیمار و مسیر نوبت‌گیری.",
          quote: "حضور آنلاین ما واضح‌تر، حرفه‌ای‌تر و برای بیماران قابل اعتمادتر شد.",
          who: { name: "مشتری کلینیک", role: "مرکز درمانی" },
        },
        {
          industry: "برند شخصی",
          goal: "تبدیل تخصص به یک حضور دیجیتال premium",
          summary: "وب‌سایتی برای نمایش اقتدار، معرفی تخصص و جذب لیدهای مشاوره.",
          quote: "سایت بالاخره همان سطح تخصص و اعتمادی را نشان می‌دهد که می‌خواستم مخاطب حس کند.",
          who: { name: "مشتری برند شخصی", role: "مشاور" },
        },
        {
          industry: "کسب‌وکار شخصی",
          goal: "ساخت یک پلتفرم جدی برای جذب مشتری",
          summary: "وب‌سایتی تبدیل‌محور با پیام روشن، اثبات کافی و مسیر مستقیم دریافت لید.",
          quote: "از یک حضور ساده آنلاین رسیدیم به سایتی که واقعاً به رشد کسب‌وکار کمک می‌کند.",
          who: { name: "مشتری founder-led", role: "صاحب کسب‌وکار" },
        },
      ],
      quote: "سایت جدید کمک کرد حرفه‌ای‌تر دیده شویم و درخواست‌های بهتری دریافت کنیم.",
      who: { name: "مشتری پروژه", role: "کسب‌وکار founder-led" },
      cta: "مشاهده پروژه",
    },
    services: {
      title: "موتورهای رشد پشت هر وب‌سایت پرفورمنس بالا",
      sub: "استراتژی، تکنولوژی و دیده‌شدن کنار هم قرار می‌گیرند تا رشد قابل اندازه‌گیری بسازند.",
      items: [
        {
          t: "وب‌سایت و وب‌اپلیکیشن",
          d: "تجربه‌های دیجیتال سریع، امن و مقیاس‌پذیر که ترافیک را به اعتماد، لید و رشد کسب‌وکار تبدیل می‌کنند.",
          bullets: ["طراحی وب‌سایت تبدیل‌محور", "وب‌اپلیکیشن اختصاصی", "CMS و یکپارچه‌سازی‌ها", "عملکرد و امنیت"],
        },
        {
          t: "رتبه‌بندی GEO و AEO",
          d: "بهینه‌سازی حضور دیجیتال برای answer engineها، نتایج تولیدشده با AI، جستجوی معنایی و کشف مدرن.",
          bullets: ["محتوای آماده پاسخ", "استراتژی Entity و Schema", "پایه‌های فنی SEO", "گزارش عملکرد جستجو"],
        },
        {
          t: "دیده‌شدن در AI",
          d: "ساختاردهی برند، محتوا و سیگنال‌های اعتبار تا سیستم‌های AI بتوانند شما را بفهمند و پیشنهاد دهند.",
          bullets: ["نقشه دیده‌شدن در LLM", "سیستم محتوای ساختاریافته", "طراحی سیگنال‌های اعتبار", "گزارش دیده‌شدن در AI"],
        },
        {
          t: "راهکار هوش مصنوعی",
          d: "ساخت workflowهای هوشمند، اتوماسیون‌ها، دستیارها و سیستم‌های AI-powered برای ایجاد اهرم واقعی در کسب‌وکار.",
          bullets: ["اتوماسیون فرایندها", "دستیارهای اختصاصی AI", "اتصال API و ابزارها", "پایش عملکرد"],
        },
      ],
    },
    industries: {
      badge: "برای چه کسانی",
      titleA: "ساخته‌شده برای کسب‌وکارهایی که ", titleHL: "اعتماد", titleB: " در رشدشان مهم است",
      sub: "برای کسب‌وکارهای خدماتی، متخصص‌ها، مشاورها، کلینیک‌ها، تیم‌های املاک و برندهای founder-led که حضور آنلاین جدی می‌خواهند.",
      items: [
        { t: "مشاوران املاک", d: "تبدیل علاقه‌مندی به ملک به تماس و درخواست‌های واجد شرایط." },
        { t: "پزشکان و کلینیک‌ها", d: "اعتمادسازی با معرفی روشن خدمات، اعتبار، آموزش و مسیر نوبت‌گیری آسان." },
        { t: "برندهای شخصی", d: "تبدیل تخصص به اقتدار، دیده‌شدن و لیدهای مشاوره." },
        { t: "کسب‌وکارهای founder-led", d: "ساخت یک پلتفرم جدی که مشتری به آن اعتماد کند و با شما تماس بگیرد." },
      ],
    },
    finalCta: {
      title: "آماده‌اید سایتتان را به سیستم جذب مشتری تبدیل کنید؟",
      sub: "بیایید فرصت رشد شما را بررسی کنیم و استراتژی درست وب‌سایتتان را بسازیم.",
    },
    trust: ["رشد وب‌سایت", "ساختار آماده SEO", "استراتژی GEO / AEO", "دیده‌شدن در AI", "جذب لید", "UI تبدیل‌محور", "پروژه‌های واقعی و اجراشده", "تجربه دیجیتال اعتمادساز"],
    footer: {
      slogan: "ساخت وب‌سایت‌هایی که ترافیک جذب می‌کنند، اعتماد می‌سازند و مشتری می‌آورند.",
      tagline: "سیستم رشد وب‌سایت در عصر AI برای کسب‌وکارهایی که باید آنلاین دیده، قابل اعتماد و انتخاب شوند.",
      rights: "تمام حقوق محفوظ است.",
      sections: { explore: "کاوش", contact: "تماس", language: "زبان" },
    },
    pages: {
      services: { title: "خدمات", lead: "موتورهای پشت وب‌سایت‌هایی که ترافیک جذب می‌کنند، اعتماد می‌سازند و لید می‌گیرند." },
      portfolio: { title: "نمونه‌کارها", lead: "پروژه‌هایی که برای دیده‌شدن، اعتمادسازی و جذب مشتری ساخته شده‌اند." },
      pricing: { title: "قیمت‌گذاری", lead: "مسیرهای شفاف برای پروژه‌های جدی رشد وب‌سایت." },
      insights: { title: "بینش‌ها", lead: "یادداشت‌های کاربردی درباره رشد وب‌سایت، SEO، GEO، دیده‌شدن در AI و تبدیل." },
      about: { title: "درباره", lead: "پیش‌زمینه، تجربه و نگاه استراتژیک پشت کار." },
      contact: { title: "تماس", lead: "از کسب‌وکار، سایت فعلی و هدف رشدتان برایمان بگویید." },
      faq: { title: "سوالات متداول", lead: "پاسخ‌های ساده به سوالاتی که معمولاً اول پرسیده می‌شوند." },
    },
    faq: [
      { q: "دقیقاً چه چیزی می‌سازید؟", a: "وب‌سایت‌ها و سیستم‌های دیجیتالی که کمک می‌کنند کسب‌وکار دیده شود، اعتماد بسازد و بازدیدکننده را به لید تبدیل کند." },
      { q: "فرقش با طراحی سایت معمولی چیست؟", a: "از ابتدا سایت را به‌عنوان سیستم رشد می‌بینیم: پیام، UX، SEO، دیده‌شدن در AI، اعتمادسازی و مسیر تبدیل با هم طراحی می‌شوند." },
      { q: "GEO و دیده‌شدن در AI واقعاً لازم است؟", a: "اگر مشتریان شما آنلاین جستجو می‌کنند، دیده‌شدن در AI به بخشی از مسیر کشف تبدیل شده. ما ساختار سایت را برای گوگل و ابزارهای AI قابل فهم می‌کنیم." },
      { q: "اگر سایت فعلی داشته باشم باید از صفر شروع کنم؟", a: "نه همیشه. بعضی پروژه‌ها نیاز به بازطراحی دارند و بعضی فقط به اصلاح ساختار، محتوا، SEO و مسیر تبدیل." },
      { q: "سایت چندزبانه هم می‌سازید؟", a: "بله. ساختار آماده انگلیسی، فارسی و عربی با RTL درست، hreflang و محتوای متناسب هر زبان." },
    ],
    pricingPlans: [
      { name: "پایه", price: "از ۲٬۴۰۰ دلار", features: ["وب‌سایت تبدیل‌محور", "معماری اصلی SEO", "تنظیم تحلیل", "راه‌اندازی در ۳ تا ۴ هفته"] },
      { name: "موتور رشد", price: "از ۶٬۸۰۰ دلار", features: ["تمام موارد پایه", "GEO/AEO + دیده‌شدن در AI", "سیستم اعتماد و اثبات", "اتوماسیون دریافت لید"], featured: true },
      { name: "اقتدار", price: "سفارشی", features: ["چندزبانه EN/FA/AR", "سیستم محتوا و authority", "یکپارچه‌سازی پیشرفته", "استراتژی فصلی"] },
    ],
  },
  ar: {
    brand: "محمدرضا ذكري",
    subname: "مهندس النمو الرقمي في عصر الذكاء الاصطناعي",
    nav: { home: "الرئيسية", services: "الخدمات", portfolio: "الأعمال", pricing: "الأسعار", insights: "رؤى", about: "عنّا", contact: "تواصل", faq: "الأسئلة" },
    cta: {
      build: "اطلب جلسة استراتيجية للنمو",
      cases: "شاهد دراسات الحالة",
      letsBuild: "لنبنِ محرك النمو الخاص بك",
      audit: "اطلب جلسة استراتيجية للنمو",
      whatsapp: "تواصل عبر واتساب",
      more: "شاهد المزيد من المشاريع",
      learn: "استكشف الخدمة",
      viewPortfolio: "مشاهدة الأعمال",
    },
    hero: {
      badge: "نمو المواقع في عصر الذكاء الاصطناعي",
      title: "مواقع تجذب الزيارات، تبني الثقة، وتحول الزائر إلى عميل",
      highlight: "تجذب الزيارات",
      subtitle: "نصمم مواقع، تطبيقات ويب، أنظمة SEO/GEO، وبنية جاهزة للـ AI لمساعدة الأعمال على النمو من الإنترنت.",
      mini: ["مواقع عالية الأداء", "جاهزة للبحث و AI", "نظام توليد عملاء"],
      miniDescriptions: [
        "مواقع سريعة واحترافية ومناسبة لنمو الأعمال الجاد.",
        "بنية تساعد Google وأدوات AI على فهم عملك بوضوح.",
        "مسارات واضحة ونماذج ونداءات إجراء تحول الاهتمام إلى عملاء محتملين.",
      ],
    },
    problem: {
      title: "قد يبدو موقعك جميلاً. لكن هل بُني لينمّي عملك؟",
      sub: "تفشل معظم المواقع لأنها لا تُصمم كنظام لاكتساب العملاء.",
      cards: [
        { t: "لا توجد زيارات مؤهلة", d: "موقعك موجود، لكن الأشخاص المناسبين لا يجدونه عبر البحث أو AI أو القنوات ذات النية الواضحة." },
        { t: "الثقة لا تُبنى بسرعة", d: "يدخل الزائر إلى الموقع، لكنه لا يفهم سريعاً لماذا يثق بك أو يختارك أو يتواصل معك." },
        { t: "لا يوجد مسار تحويل واضح", d: "عندما تكون رحلة المستخدم غير واضحة، وتكون أزرار الدعوة ضعيفة، يضيع اهتمام الزائر." },
        { t: "لا ظهور في البحث و AI", d: "إذا لم تفهم محركات البحث وأدوات AI علامتك، فلن يكتشفك العملاء القادمون." },
      ],
    },
    solution: {
      badge: "الحل الأساسي",
      title: "الموقع كبنية للنمو",
      sub: "الموقع عالي الأداء ليس تصميماً فقط. إنه محرك تحويل، وSEO، وظهور في AI، وتوليد عملاء.",
      cards: [
        { t: "بنية تركّز على التحويل", d: "معمارية تجربة استخدام تساعد الزائر على معرفة الخطوة التالية بوضوح." },
        { t: "بنية جاهزة للـ SEO", d: "هيكل تقني ومحتوى نظيف للظهور والترتيب والنمو على المدى الطويل." },
        { t: "محتوى جاهز للـ AI", d: "محتوى منظم لـ GEO، وفهم AI، والوضوح الدلالي، والظهور في نماذج اللغة." },
        { t: "أقسام تبني الثقة", d: "إثباتات، شهادات، علامات مصداقية، وإشارات ثقة في أماكن القرار." },
        { t: "نظام التقاط العملاء", d: "نماذج، أزرار CTA، نقاط تواصل، ومسارات تحويل لالتقاط الطلب المؤهل." },
        { t: "تحليل ومسار تحسين", d: "أساس قياس يساعد على متابعة الأداء وتحسين التحويل وتوسيع النمو." },
      ],
      strip: "موقعك يجب ألا يكون جميلاً فقط؛ يجب أن ينمّي عملك.",
    },
    cases: {
      badge: "دراسات الحالة",
      title: "مواقع صممناها وأطلقناها",
      sub: "مشاريع حقيقية بُنيت لتحسين الثقة والظهور واكتساب العملاء.",
      items: [
        {
          industry: "العقارات",
          goal: "جذب طلبات مؤهلة من المشترين والبائعين",
          summary: "موقع عقاري premium لعرض العقارات بوضوح، بناء الثقة، وتحويل الزائر إلى اتصال.",
          quote: "ساعدنا الموقع الجديد على عرض العقارات باحترافية أكبر واستقبال طلبات أكثر جودة.",
          who: { name: "عميل عقاري", role: "فريق استشارات عقارية" },
        },
        {
          industry: "الأطباء والعيادات",
          goal: "بناء الثقة وزيادة طلبات الحجز",
          summary: "موقع طبي مبني حول المصداقية، وضوح الخدمات، تثقيف المرضى، ومسار الحجز.",
          quote: "أصبح حضورنا الرقمي أوضح وأكثر احترافية وأسهل على المرضى أن يثقوا به.",
          who: { name: "عميل عيادة", role: "مركز صحي" },
        },
        {
          industry: "العلامة الشخصية",
          goal: "تحويل الخبرة إلى حضور رقمي premium",
          summary: "موقع للعلامة الشخصية يوضح السلطة، يعرض الخبرة، ويلتقط طلبات الاستشارة.",
          quote: "أصبح الموقع يعكس مستوى الخبرة والثقة الذي أردت أن يشعر به الناس.",
          who: { name: "عميل علامة شخصية", role: "مستشار" },
        },
        {
          industry: "عمل يقوده المؤسس",
          goal: "بناء منصة جدية لاكتساب العملاء",
          summary: "موقع يركز على التحويل برسالة واضحة، إثبات كاف، ومسار مباشر للتواصل.",
          quote: "انتقلنا من حضور بسيط على الإنترنت إلى موقع يدعم نمو العمل فعلاً.",
          who: { name: "عميل founder-led", role: "صاحب عمل" },
        },
      ],
      quote: "ساعدنا الموقع الجديد على الظهور بشكل أكثر احترافية واستقبال طلبات أفضل.",
      who: { name: "عميل مشروع", role: "عمل يقوده المؤسس" },
      cta: "شاهد المشروع",
    },
    services: {
      title: "محركات النمو خلف كل موقع عالي الأداء",
      sub: "الاستراتيجية، التقنية، والظهور تعمل معاً لصناعة نمو قابل للقياس.",
      items: [
        {
          t: "الموقع وتطبيقات الويب",
          d: "تجارب رقمية سريعة وآمنة وقابلة للتوسع، حيث تتحول الزيارات إلى ثقة وعملاء ونمو.",
          bullets: ["تصميم موقع يركز على التحويل", "تطبيقات ويب مخصصة", "CMS وتكاملات", "الأداء والأمان"],
        },
        {
          t: "ترتيب GEO و AEO",
          d: "تحسين حضورك لمحركات الإجابة، نتائج AI، البحث الدلالي، والاكتشاف الحديث.",
          bullets: ["محتوى جاهز للإجابة", "استراتيجية Entity و Schema", "أساسيات SEO التقنية", "تقارير أداء البحث"],
        },
        {
          t: "الظهور في AI",
          d: "تنظيم العلامة والمحتوى وإشارات المصداقية حتى تفهمك أنظمة AI وتوصي بك.",
          bullets: ["خريطة ظهور LLM", "أنظمة محتوى منظمة", "تصميم إشارات المصداقية", "تقارير ظهور AI"],
        },
        {
          t: "حلول الذكاء الاصطناعي",
          d: "بناء سير عمل ذكي، أتمتة، مساعدين، وأنظمة AI-powered تمنح العمل قوة تشغيل حقيقية.",
          bullets: ["أتمتة سير العمل", "مساعدو AI مخصصون", "تكاملات API والأدوات", "مراقبة الأداء"],
        },
      ],
    },
    industries: {
      badge: "لمن نبني",
      titleA: "مصمم للأعمال التي يعتمد نموها على ", titleHL: "الثقة", titleB: "",
      sub: "للأعمال الخدمية، الخبراء، المستشارين، العيادات، فرق العقارات، والشركات التي يقودها المؤسس وتحتاج حضوراً رقمياً جاداً.",
      items: [
        { t: "مستشارو العقارات", d: "تحويل الاهتمام بالعقار إلى مكالمات وطلبات مؤهلة." },
        { t: "الأطباء والعيادات", d: "بناء ثقة المرضى من خلال وضوح الخدمات، المصداقية، التعليم، وسهولة الحجز." },
        { t: "العلامات الشخصية", d: "تحويل الخبرة إلى سلطة وظهور وطلبات استشارة." },
        { t: "أعمال يقودها المؤسس", d: "بناء منصة جدية تجعل العميل يثق بك ويتواصل معك." },
      ],
    },
    finalCta: {
      title: "هل أنت مستعد لتحويل موقعك إلى نظام لاكتساب العملاء؟",
      sub: "لنراجع فرصة النمو لديك ونبني استراتيجية الموقع المناسبة.",
    },
    trust: ["نمو الموقع", "بنية جاهزة للـ SEO", "استراتيجية GEO / AEO", "ظهور في AI", "توليد عملاء", "واجهة تركز على التحويل", "مشاريع حقيقية منفذة", "تجارب رقمية تبني الثقة"],
    footer: {
      slogan: "نبني مواقع تجذب الزيارات، تكسب الثقة، وتحول الزائر إلى عميل.",
      tagline: "أنظمة نمو للمواقع في عصر AI للأعمال التي تحتاج أن تُكتشف وتُوثق وتُختار على الإنترنت.",
      rights: "جميع الحقوق محفوظة.",
      sections: { explore: "استكشف", contact: "تواصل", language: "اللغة" },
    },
    pages: {
      services: { title: "الخدمات", lead: "المحركات خلف المواقع التي تجذب الزيارات، تبني الثقة، وتولد العملاء." },
      portfolio: { title: "الأعمال", lead: "مشاريع مختارة بُنيت للظهور والثقة واكتساب العملاء." },
      pricing: { title: "الأسعار", lead: "خيارات واضحة لمشاريع جادة في نمو المواقع." },
      insights: { title: "رؤى", lead: "ملاحظات عملية حول نمو المواقع، SEO، GEO، ظهور AI، والتحويل." },
      about: { title: "عنّا", lead: "الخلفية والخبرة والنظرة الاستراتيجية وراء العمل." },
      contact: { title: "تواصل", lead: "حدثنا عن عملك، موقعك الحالي، وشكل النمو الذي تريده." },
      faq: { title: "الأسئلة الشائعة", lead: "إجابات واضحة على الأسئلة التي يسألها أصحاب الأعمال أولاً." },
    },
    faq: [
      { q: "ماذا تبنون بالضبط؟", a: "نبني مواقع وأنظمة رقمية تساعد العمل على الظهور وبناء الثقة وتحويل الزائر إلى عميل محتمل." },
      { q: "ما الفرق عن تصميم موقع عادي؟", a: "نخطط للموقع كنظام نمو منذ البداية: الرسالة، UX، SEO، ظهور AI، الثقة، ومسار التحويل تعمل معاً." },
      { q: "هل أحتاج GEO أو ظهور AI؟", a: "إذا كان عملاؤك يبحثون عن خدمتك على الإنترنت، فإن ظهور AI أصبح جزءاً من الاكتشاف. نجعل بنية الموقع مفهومة لـ Google وأدوات AI." },
      { q: "إذا كان لدي موقع حالي، هل أبدأ من الصفر؟", a: "ليس دائماً. بعض المشاريع تحتاج إعادة بناء، وبعضها يحتاج تحسين الاستراتيجية والبنية والمحتوى وSEO والتحويل." },
      { q: "هل تبنون مواقع متعددة اللغات؟", a: "نعم. نبني مواقع جاهزة للإنجليزية والفارسية والعربية مع RTL صحيح و hreflang ومحتوى مناسب لكل لغة." },
    ],
    pricingPlans: [
      { name: "الأساس", price: "من $2,400", features: ["موقع يركز على التحويل", "بنية SEO أساسية", "إعداد التحليلات", "إطلاق خلال 3-4 أسابيع"] },
      { name: "محرك النمو", price: "من $6,800", features: ["كل ما في الأساس", "GEO/AEO + ظهور AI", "نظام ثقة وإثبات", "أتمتة التقاط العملاء"], featured: true },
      { name: "السلطة", price: "مخصص", features: ["متعدد اللغات EN/FA/AR", "نظام محتوى وسلطة", "تكاملات متقدمة", "استراتيجية فصلية"] },
    ],
  },
};
