"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Dict } from "@/i18n/translations";

export function FaqAccordion({ faq }: { faq: Dict["faq"] }) {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <Accordion type="single" collapsible className="space-y-3">
          {faq.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="glass rounded-2xl px-5 border-none">
              <AccordionTrigger className="text-[color:var(--ink-5)] text-left">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-[color:var(--ink-4)]">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
