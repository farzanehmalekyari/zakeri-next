import type { ReactNode } from "react";

export function PageHero({
  title,
  lead,
  children,
}: {
  title: string;
  lead: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative pt-40 pb-16 md:pt-48 md:pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <h1 className="text-4xl md:text-6xl font-semibold text-gradient leading-tight">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-[color:var(--ink-4)]">{lead}</p>
        {children}
      </div>
    </section>
  );
}
