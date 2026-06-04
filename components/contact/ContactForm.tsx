"use client";

import { Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import type { Dict } from "@/i18n/translations";
import { publicSiteConfig } from "@/lib/site";

export function ContactForm({ tr }: { tr: Dict }) {
  const [sent, setSent] = useState(false);

  return (
    <section className="pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 grid gap-8 md:grid-cols-5">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
          className="glass-strong rounded-3xl p-7 md:col-span-3 space-y-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <Field label="Company" name="company" />
          <Field label="What are you trying to grow?" name="goal" textarea />
          <button type="submit" className="btn-primary w-full justify-center">
            Send
          </button>
          {sent && <p className="text-sm text-[color:var(--glow)]">Thanks — we&apos;ll be in touch.</p>}
        </form>
        <aside className="md:col-span-2 space-y-4">
          <a
            href={publicSiteConfig.whatsappUrl}
            target="_blank"
          rel="noreferrer"
          className="glass rounded-3xl p-6 flex items-center gap-4 hover-lift"
        >
          <span className="neon-icon-box flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
            <MessageCircle className="h-6 w-6" />
          </span>
          <div>
              <div className="text-[color:var(--ink-5)] font-semibold">WhatsApp</div>
              <div className="text-sm text-[color:var(--ink-4)]">{tr.cta.whatsapp}</div>
            </div>
          </a>
          <a
          href={`mailto:${publicSiteConfig.contactEmail}`}
          className="glass rounded-3xl p-6 flex items-center gap-4 hover-lift"
        >
          <span className="neon-icon-box flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
            <Mail className="h-6 w-6" />
          </span>
          <div>
              <div className="text-[color:var(--ink-5)] font-semibold">Email</div>
              <div className="text-sm text-[color:var(--ink-4)]">
                {publicSiteConfig.contactEmail}
              </div>
            </div>
          </a>
        </aside>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const className =
    "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-[color:var(--ink-5)] placeholder:text-[color:var(--ink-4)]/60 outline-none focus:border-[color:var(--glow)]/60 focus:ring-2 focus:ring-[color:var(--glow)]/30";

  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-[color:var(--ink-4)] mb-2">
        {label}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={5} className={className} />
      ) : (
        <input name={name} type={type} required={required} className={className} />
      )}
    </label>
  );
}
