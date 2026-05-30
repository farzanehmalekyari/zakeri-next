import type { ReactNode } from "react";
import { Amiri, IBM_Plex_Serif } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { getLocaleMeta, isLocale, LOCALES } from "@/i18n/routing";

const serif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-site-serif",
});

const rtl = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-site-rtl",
});

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const meta = getLocaleMeta(lang);

  return (
    <html lang={lang} dir={meta.dir} className={`${serif.variable} ${rtl.variable}`}>
      <body>{children}</body>
    </html>
  );
}
