export type Lang = "en" | "fa" | "ar";

export const LANGS: { code: Lang; label: string; native: string; dir: "ltr" | "rtl" }[] = [
  { code: "en", label: "English", native: "English", dir: "ltr" },
  { code: "fa", label: "Persian", native: "فارسی", dir: "rtl" },
  { code: "ar", label: "Arabic", native: "العربية", dir: "rtl" },
];

type FaqItem = { q: string; a: string };
type PricingPlan = { name: string; price: string; features: string[]; featured?: boolean };
export type Dict = {
  brand: string; subname: string;
  nav: { home: string; services: string; portfolio: string; pricing: string; insights: string; about: string; contact: string; faq: string };
  cta: { build: string; cases: string; letsBuild: string; audit: string; whatsapp: string; more: string; learn: string };
  hero: { badge: string; title: string; highlight: string; subtitle: string; mini: string[] };
  problem: { title: string; sub: string; cards: { t: string; d: string }[] };
  solution: { badge: string; title: string; sub: string; cards: { t: string; d: string }[]; strip: string };
  cases: { badge: string; title: string; sub: string; items: { industry: string; goal: string }[]; quote: string; who: { name: string; role: string } };
  services: { title: string; sub: string; items: { t: string; d: string }[] };
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
    cta: { build: "Build Your Growth Engine", cases: "See Case Studies", letsBuild: "Let's Build Your Growth Engine", audit: "Request a Growth Audit", whatsapp: "Contact on WhatsApp", more: "See More Case Studies", learn: "Learn More" },
    hero: {
      badge: "AI-ERA DIGITAL GROWTH ARCHITECT",
      title: "Designing Growth Infrastructure for the AI Era.",
      highlight: "Growth Infrastructure",
      subtitle: "Websites, search systems, AI visibility, and conversion paths built to help businesses get found, trusted, and chosen online.",
      mini: ["SEO Optimization", "GEO Strategy", "Web Design"],
    },
    problem: {
      title: "Why Beautiful Websites Still Fail",
      sub: "Most businesses do not have a design problem. They have a visibility, trust, and conversion problem.",
      cards: [
        { t: "No Qualified Traffic", d: "Visitors arrive without intent. Bounce rates rise. Sales pipeline stalls." },
        { t: "No Trust Architecture", d: "Missing proof, weak authority signals, no narrative that earns belief." },
        { t: "No Conversion Path", d: "Pretty pages, no clear next step. Leads slip away before action." },
        { t: "No AI/Search Visibility", d: "Invisible to LLMs and modern search. Competitors get cited, you don't." },
      ],
    },
    solution: {
      badge: "CORE SOLUTION",
      title: "Website as Growth Infrastructure",
      sub: "A high-performance website is more than design — it's a conversion, SEO, AI visibility, and lead generation engine.",
      cards: [
        { t: "Conversion-focused Structure", d: "Strategic UX architecture designed to guide users toward action." },
        { t: "SEO-ready Architecture", d: "Clean technical structure built for discoverability and ranking." },
        { t: "AI-ready Content", d: "Structured content optimized for GEO, AI discovery, and LLM visibility." },
        { t: "Trust-building Sections", d: "Testimonials, authority markers, proof elements, and credibility signals." },
        { t: "Lead Capture System", d: "Forms, automation touchpoints, and conversion capture flows." },
        { t: "Analytics & Improvement Path", d: "Performance monitoring and continuous optimization systems." },
      ],
      strip: "Your website shouldn't just look good. It should grow your business.",
    },
    cases: {
      badge: "CASE STUDIES — PROOF EARLY",
      title: "Websites we've designed and deployed",
      sub: "Real projects. Real results. See how we help businesses grow with high-performance websites and smart SEO.",
      items: [
        { industry: "Real Estate", goal: "Qualified buyer inquiries +180%" },
        { industry: "Clinic", goal: "New patient bookings doubled" },
        { industry: "Personal Brand", goal: "Authority + inbound speaking offers" },
        { industry: "Consulting", goal: "Lead-to-call rate 3.4×" },
      ],
      quote: "The new website helped us present our services more professionally and significantly improved qualified inquiries.",
      who: { name: "Dr. Sarah Mansouri", role: "Founder, Aria Clinic" },
    },
    services: {
      title: "Growth Engines for the AI Era",
      sub: "Strategic digital systems designed to improve visibility, trust, performance, and lead generation.",
      items: [
        { t: "GEO & AEO Ranking", d: "Get discovered by AI engines and search where it matters." },
        { t: "AI Solution", d: "Intelligent automations and AI systems that drive real impact." },
        { t: "Website & Web Application", d: "Fast, secure, and scalable digital experiences that perform." },
        { t: "AI Visibility", d: "Increase your brand's visibility across AI answers and platforms." },
      ],
    },
    industries: {
      badge: "INDUSTRIES",
      titleA: "Built for ", titleHL: "High-Trust", titleB: " Businesses",
      sub: "Strategic websites that turn trust into leads and presence into growth.",
      items: [
        { t: "Real Estate Consultants", d: "Turn property interest into qualified calls and buyer leads." },
        { t: "Doctors & Clinics", d: "Convert patients with trust, clarity, and professional presence." },
        { t: "Personal Brands", d: "Build authority and visibility that opens the right doors." },
        { t: "Personal Businesses", d: "Attract more clients and scale with a powerful online presence." },
      ],
    },
    finalCta: {
      title: "Your website should become your growth engine.",
      sub: "Let's build the digital infrastructure that helps your business get found, trusted, and chosen in the AI era.",
    },
    trust: ["AI Search Ready", "SEO Architecture", "Conversion UX", "Trust Systems", "Lead Generation", "Founder-led Strategy"],
    footer: {
      slogan: "Found. Trusted. Chosen.",
      tagline: "AI-era digital growth infrastructure for businesses that need to be found, trusted, and chosen online.",
      rights: "All rights reserved.",
      sections: { explore: "Explore", contact: "Contact", language: "Language" },
    },
    pages: {
      services: { title: "Services", lead: "End-to-end growth engineering — from architecture to AI visibility." },
      portfolio: { title: "Portfolio & Case Studies", lead: "Selected work for high-trust businesses." },
      pricing: { title: "Pricing", lead: "Transparent engagements designed around outcomes." },
      insights: { title: "Insights", lead: "Notes on AI-era growth, SEO, GEO, AEO and conversion." },
      about: { title: "About", lead: "Founder-led. Outcome-obsessed. Built for the AI era." },
      contact: { title: "Contact", lead: "Tell us about your business and goals." },
      faq: { title: "FAQ", lead: "Answers to the questions we hear most." },
    },
    faq: [
      { q: "What exactly do you build?", a: "We design and deploy growth infrastructure: high-performance websites, SEO/GEO/AEO architecture, AI-visibility systems, and conversion paths." },
      { q: "Who do you work with?", a: "Real estate consultants, doctors and clinics, personal brands, consultants, and founder-led service businesses." },
      { q: "How is this different from an agency?", a: "We are founder-led and outcome-focused. Strategy, design, build, and AI/SEO live under one roof." },
      { q: "Do you offer ongoing optimization?", a: "Yes. Every engine ships with analytics, monitoring, and a continuous improvement path." },
      { q: "What about multilingual sites?", a: "We build EN / FA / AR ready architectures with correct RTL, hreflang and locale-tuned content." },
    ],
    pricingPlans: [
      { name: "Foundation", price: "From $2,400", features: ["Conversion-focused site", "Core SEO architecture", "Analytics setup", "Launch in 3–4 weeks"] },
      { name: "Growth Engine", price: "From $6,800", features: ["Everything in Foundation", "GEO/AEO + AI visibility", "Trust system & proof layer", "Lead capture automations"], featured: true },
      { name: "Authority", price: "Custom", features: ["Multi-locale (EN/FA/AR)", "Editorial + content engine", "Advanced integrations", "Quarterly strategy"] },
    ],
  },
  fa: {
    brand: "محمدرضا ذکری",
    subname: "معمار رشد دیجیتال در عصر هوش مصنوعی",
    nav: { home: "خانه", services: "خدمات", portfolio: "نمونه‌کارها", pricing: "قیمت‌گذاری", insights: "بینش‌ها", about: "درباره", contact: "تماس", faq: "سوالات" },
    cta: { build: "موتور رشد خود را بسازید", cases: "مشاهده نمونه‌کارها", letsBuild: "بیایید موتور رشد شما را بسازیم", audit: "درخواست ممیزی رشد", whatsapp: "تماس از طریق واتساپ", more: "نمونه‌کارهای بیشتر", learn: "بیشتر بدانید" },
    hero: {
      badge: "معمار رشد دیجیتال در عصر هوش مصنوعی",
      title: "طراحی زیرساخت رشد برای عصر هوش مصنوعی.",
      highlight: "زیرساخت رشد",
      subtitle: "وب‌سایت‌ها، سیستم‌های جست‌وجو، دیده‌شدن در هوش مصنوعی و مسیرهای تبدیل، طراحی‌شده تا کسب‌وکار شما دیده، اعتماد و انتخاب شود.",
      mini: ["بهینه‌سازی سئو", "استراتژی GEO", "طراحی وب"],
    },
    problem: {
      title: "چرا وب‌سایت‌های زیبا هم شکست می‌خورند",
      sub: "بیشتر کسب‌وکارها مشکل طراحی ندارند؛ مشکل دیده‌شدن، اعتماد و تبدیل دارند.",
      cards: [
        { t: "ترافیک باکیفیت ندارید", d: "بازدیدکنندگان بدون قصد می‌آیند. نرخ پرش بالا می‌رود." },
        { t: "معماری اعتماد ندارید", d: "نشانه‌های اعتبار، روایت و اثبات اجتماعی غایب است." },
        { t: "مسیر تبدیل ندارید", d: "صفحات زیبا، اما بدون قدم بعدی شفاف." },
        { t: "دیده‌نشدن در سرچ و AI", d: "مدل‌های زبانی و جست‌وجوی مدرن شما را نمی‌بینند." },
      ],
    },
    solution: {
      badge: "راهکار اصلی",
      title: "وب‌سایت به‌مثابه زیرساخت رشد",
      sub: "وب‌سایت پرفورمنس بالا یعنی موتور تبدیل، سئو، دیده‌شدن در AI و تولید سرنخ.",
      cards: [
        { t: "ساختار متمرکز بر تبدیل", d: "معماری UX استراتژیک برای هدایت کاربر به اقدام." },
        { t: "معماری آماده برای سئو", d: "ساختار فنی تمیز برای کشف‌پذیری و رتبه." },
        { t: "محتوای آماده برای AI", d: "محتوای ساختاریافته برای GEO و کشف توسط LLMها." },
        { t: "بخش‌های اعتمادساز", d: "نظرات، نشانه‌های اعتبار و اجزای اثبات." },
        { t: "سیستم جذب سرنخ", d: "فرم‌ها، اتوماسیون و جریان‌های تبدیل." },
        { t: "تحلیل و مسیر بهبود", d: "پایش عملکرد و بهینه‌سازی مداوم." },
      ],
      strip: "وب‌سایت شما فقط نباید زیبا باشد؛ باید کسب‌وکار شما را رشد دهد.",
    },
    cases: {
      badge: "نمونه‌کارها — اثبات از همان ابتدا",
      title: "وب‌سایت‌هایی که طراحی و راه‌اندازی کرده‌ایم",
      sub: "پروژه‌های واقعی. نتایج واقعی.",
      items: [
        { industry: "املاک", goal: "افزایش ۱۸۰٪ سرنخ خریدار" },
        { industry: "کلینیک", goal: "دوبرابر شدن نوبت‌گیری" },
        { industry: "برند شخصی", goal: "ساخت اقتدار و دعوت‌های ورودی" },
        { industry: "مشاوره", goal: "نرخ تبدیل ۳٫۴ برابر" },
      ],
      quote: "وب‌سایت جدید کمک کرد خدماتمان را حرفه‌ای‌تر معرفی کنیم و سرنخ‌های باکیفیت‌مان به‌طور چشمگیری افزایش یافت.",
      who: { name: "دکتر سارا منصوری", role: "بنیان‌گذار، کلینیک آریا" },
    },
    services: {
      title: "موتورهای رشد برای عصر هوش مصنوعی",
      sub: "سیستم‌های دیجیتال استراتژیک برای دیده‌شدن، اعتماد، عملکرد و تولید سرنخ.",
      items: [
        { t: "رتبه‌بندی GEO و AEO", d: "دیده‌شدن در موتورهای AI و سرچ مدرن." },
        { t: "راهکار هوش مصنوعی", d: "اتوماسیون‌های هوشمند با اثر واقعی." },
        { t: "وب‌سایت و وب‌اپلیکیشن", d: "تجربه‌های دیجیتال سریع، امن و مقیاس‌پذیر." },
        { t: "دیده‌شدن در AI", d: "افزایش حضور برند در پاسخ‌های مدل‌های زبانی." },
      ],
    },
    industries: {
      badge: "صنایع",
      titleA: "ساخته‌شده برای کسب‌وکارهای ", titleHL: "پراعتماد", titleB: "",
      sub: "وب‌سایت‌های استراتژیک که اعتماد را به سرنخ تبدیل می‌کنند.",
      items: [
        { t: "مشاوران املاک", d: "تبدیل علاقه‌مند به تماس و سرنخ خریدار." },
        { t: "پزشکان و کلینیک‌ها", d: "جذب بیمار با اعتماد، شفافیت و حضور حرفه‌ای." },
        { t: "برندهای شخصی", d: "ساخت اقتدار و دیده‌شدن." },
        { t: "کسب‌وکارهای فردی", d: "جذب مشتری بیشتر با حضور قدرتمند." },
      ],
    },
    finalCta: {
      title: "وب‌سایت شما باید موتور رشدتان شود.",
      sub: "بیایید زیرساخت دیجیتالی بسازیم که شما را در عصر AI دیده، معتمد و منتخب کند.",
    },
    trust: ["آماده برای سرچ AI", "معماری سئو", "UX تبدیل", "سیستم اعتماد", "تولید سرنخ", "استراتژی بنیان‌گذار محور"],
    footer: {
      slogan: "دیده‌شده. معتمد. منتخب.",
      tagline: "زیرساخت رشد دیجیتال در عصر AI برای کسب‌وکارهایی که باید دیده، معتمد و انتخاب شوند.",
      rights: "تمام حقوق محفوظ است.",
      sections: { explore: "کاوش", contact: "تماس", language: "زبان" },
    },
    pages: {
      services: { title: "خدمات", lead: "مهندسی رشد سرتاسری — از معماری تا دیده‌شدن در AI." },
      portfolio: { title: "نمونه‌کارها", lead: "گزیده‌ای از کارهای ما برای کسب‌وکارهای پراعتماد." },
      pricing: { title: "قیمت‌گذاری", lead: "تعهدات شفاف، طراحی‌شده حول نتایج." },
      insights: { title: "بینش‌ها", lead: "نوشته‌هایی در رشد، سئو، GEO، AEO و تبدیل." },
      about: { title: "درباره", lead: "بنیان‌گذار محور. نتیجه‌محور. برای عصر AI." },
      contact: { title: "تماس", lead: "از کسب‌وکار و اهدافتان برایمان بگویید." },
      faq: { title: "سوالات متداول", lead: "پاسخ به سوالاتی که بیشتر می‌شنویم." },
    },
    faq: [
      { q: "دقیقاً چه چیزی می‌سازید؟", a: "زیرساخت رشد: وب‌سایت‌های پرفورمنس، معماری سئو/GEO/AEO، سیستم‌های دیده‌شدن در AI و مسیرهای تبدیل." },
      { q: "با چه کسانی کار می‌کنید؟", a: "مشاوران املاک، پزشکان و کلینیک‌ها، برندهای شخصی، مشاوران و کسب‌وکارهای بنیان‌گذار محور." },
      { q: "تفاوت با یک آژانس معمولی؟", a: "بنیان‌گذار محور، نتیجه‌محور، استراتژی و اجرا یکجا." },
      { q: "بهینه‌سازی مستمر دارید؟", a: "بله. هر موتور با تحلیل، پایش و مسیر بهبود تحویل می‌شود." },
      { q: "چندزبانه می‌سازید؟", a: "بله، معماری آماده EN/FA/AR با RTL درست، hreflang و محتوای محلی." },
    ],
    pricingPlans: [
      { name: "پایه", price: "از ۲٬۴۰۰ دلار", features: ["سایت متمرکز بر تبدیل", "معماری سئو", "تنظیم تحلیل", "راه‌اندازی ۳-۴ هفته"] },
      { name: "موتور رشد", price: "از ۶٬۸۰۰ دلار", features: ["تمام موارد پایه", "GEO/AEO + دیده‌شدن AI", "سیستم اعتماد", "اتوماسیون سرنخ"], featured: true },
      { name: "اقتدار", price: "سفارشی", features: ["چندزبانه (EN/FA/AR)", "موتور محتوا", "یکپارچه‌سازی پیشرفته", "استراتژی فصلی"] },
    ],
  },
  ar: {
    brand: "محمدرضا ذكري",
    subname: "مهندس النمو الرقمي في عصر الذكاء الاصطناعي",
    nav: { home: "الرئيسية", services: "الخدمات", portfolio: "الأعمال", pricing: "الأسعار", insights: "رؤى", about: "عنّا", contact: "تواصل", faq: "الأسئلة" },
    cta: { build: "ابنِ محرّك نموّك", cases: "شاهد دراسات الحالة", letsBuild: "لنبنِ محرك النمو الخاص بك", audit: "اطلب تدقيق نمو", whatsapp: "تواصل عبر واتساب", more: "المزيد من الحالات", learn: "اعرف المزيد" },
    hero: {
      badge: "مهندس النمو الرقمي في عصر الذكاء الاصطناعي",
      title: "تصميم بنية النمو في عصر الذكاء الاصطناعي.",
      highlight: "بنية النمو",
      subtitle: "مواقع وأنظمة بحث وظهور في الذكاء الاصطناعي ومسارات تحويل، لتُكتَشف وتُوثَّق وتُختار.",
      mini: ["تحسين السيو", "استراتيجية GEO", "تصميم الويب"],
    },
    problem: {
      title: "لماذا تفشل المواقع الجميلة؟",
      sub: "المشكلة ليست في التصميم بل في الظهور والثقة والتحويل.",
      cards: [
        { t: "لا توجد زيارات مؤهلة", d: "زوار بلا نيّة. ارتداد مرتفع." },
        { t: "لا توجد بنية ثقة", d: "غياب الإثبات والمصداقية." },
        { t: "لا يوجد مسار تحويل", d: "صفحات جميلة بلا خطوة تالية." },
        { t: "لا ظهور في AI/البحث", d: "غير مرئي لـ LLM والبحث الحديث." },
      ],
    },
    solution: {
      badge: "الحل الأساسي",
      title: "الموقع كبنية للنمو",
      sub: "الموقع عالي الأداء محرك تحويل وسيو وظهور في AI وتوليد عملاء.",
      cards: [
        { t: "بنية تركّز على التحويل", d: "معمارية تجربة استخدام تقود للفعل." },
        { t: "بنية جاهزة للسيو", d: "بنية تقنية نظيفة للظهور والترتيب." },
        { t: "محتوى جاهز للـ AI", d: "محتوى منظّم محسّن لـ GEO و LLM." },
        { t: "أقسام بناء الثقة", d: "شهادات وعلامات سلطة وإثبات." },
        { t: "نظام التقاط العملاء", d: "نماذج وأتمتة وتدفقات تحويل." },
        { t: "تحليلات ومسار تحسين", d: "مراقبة أداء وتحسين مستمر." },
      ],
      strip: "موقعك يجب ألا يكون جميلاً فقط، بل أن يُنمّي عملك.",
    },
    cases: {
      badge: "دراسات الحالة — إثبات مبكر",
      title: "مواقع صمّمناها وأطلقناها",
      sub: "مشاريع حقيقية. نتائج حقيقية.",
      items: [
        { industry: "عقارات", goal: "زيادة ١٨٠٪ في الاستفسارات" },
        { industry: "عيادة", goal: "تضاعف الحجوزات" },
        { industry: "علامة شخصية", goal: "سلطة ودعوات ظهور" },
        { industry: "استشارات", goal: "معدل تحويل ٣٫٤×" },
      ],
      quote: "ساعدنا الموقع الجديد على تقديم خدماتنا بشكل أكثر احترافية وتحسين الاستفسارات المؤهلة.",
      who: { name: "د. سارة منصوري", role: "مؤسِّسة عيادة آريا" },
    },
    services: {
      title: "محركات النمو لعصر الذكاء الاصطناعي",
      sub: "أنظمة رقمية استراتيجية لتحسين الظهور والثقة والأداء.",
      items: [
        { t: "ترتيب GEO و AEO", d: "كُن مرئيًا لمحركات الذكاء الاصطناعي." },
        { t: "حلول الذكاء الاصطناعي", d: "أتمتة ذكية بأثر حقيقي." },
        { t: "مواقع وتطبيقات", d: "تجارب سريعة وآمنة وقابلة للتوسع." },
        { t: "ظهور في AI", d: "زِد حضورك في إجابات الذكاء الاصطناعي." },
      ],
    },
    industries: {
      badge: "القطاعات",
      titleA: "مبني لأعمال ", titleHL: "عالية الثقة", titleB: "",
      sub: "مواقع تحوّل الثقة إلى عملاء.",
      items: [
        { t: "مستشارو العقارات", d: "تحويل الاهتمام إلى مكالمات مؤهلة." },
        { t: "أطباء وعيادات", d: "تحويل المرضى بالثقة والوضوح." },
        { t: "العلامات الشخصية", d: "بناء سلطة وظهور." },
        { t: "الأعمال الفردية", d: "جذب مزيد من العملاء." },
      ],
    },
    finalCta: {
      title: "موقعك يجب أن يصبح محرّك نموّك.",
      sub: "لنبنِ البنية الرقمية التي تجعلك تُكتَشَف وتُوثَّق وتُختار في عصر AI.",
    },
    trust: ["جاهز لبحث AI", "بنية سيو", "تجربة تحويل", "أنظمة ثقة", "توليد عملاء", "استراتيجية مؤسِّس"],
    footer: {
      slogan: "مُكتَشَف. موثوق. مُختار.",
      tagline: "بنية النمو الرقمي في عصر AI للأعمال التي تستحق أن تُكتَشَف وتُوثَّق وتُختار.",
      rights: "جميع الحقوق محفوظة.",
      sections: { explore: "استكشف", contact: "تواصل", language: "اللغة" },
    },
    pages: {
      services: { title: "الخدمات", lead: "هندسة نمو شاملة — من البنية إلى ظهور AI." },
      portfolio: { title: "الأعمال", lead: "أعمال مختارة لأعمال عالية الثقة." },
      pricing: { title: "الأسعار", lead: "ارتباطات شفافة مصمَّمة حول النتائج." },
      insights: { title: "رؤى", lead: "ملاحظات في النمو والسيو و GEO و AEO والتحويل." },
      about: { title: "عنّا", lead: "مؤسِّس. نتائج. لعصر AI." },
      contact: { title: "تواصل", lead: "حدّثنا عن عملك وأهدافك." },
      faq: { title: "الأسئلة الشائعة", lead: "إجابات الأسئلة الأكثر شيوعًا." },
    },
    faq: [
      { q: "ماذا تبنون بالضبط؟", a: "بنية نمو: مواقع عالية الأداء، بنية سيو/GEO/AEO، أنظمة ظهور AI، ومسارات تحويل." },
      { q: "مع من تعملون؟", a: "العقارات، الأطباء، العلامات الشخصية، المستشارون والأعمال المؤسِّسية." },
      { q: "الفرق عن الوكالة؟", a: "بقيادة المؤسِّس وموجَّه بالنتائج، الاستراتيجية والتنفيذ تحت سقف واحد." },
      { q: "هل توجد تحسينات مستمرة؟", a: "نعم، كل محرك يُسلَّم مع تحليلات ومسار تحسين." },
      { q: "متعدد اللغات؟", a: "نعم، بنية EN/FA/AR مع RTL صحيح و hreflang." },
    ],
    pricingPlans: [
      { name: "الأساس", price: "من $2,400", features: ["موقع موجّه للتحويل", "بنية سيو", "إعداد تحليلات", "الإطلاق خلال 3-4 أسابيع"] },
      { name: "محرك النمو", price: "من $6,800", features: ["كل ما في الأساس", "GEO/AEO + ظهور AI", "نظام ثقة", "أتمتة العملاء"], featured: true },
      { name: "السلطة", price: "مخصّص", features: ["متعدد اللغات", "محرك محتوى", "تكاملات متقدمة", "استراتيجية فصلية"] },
    ],
  },
};
