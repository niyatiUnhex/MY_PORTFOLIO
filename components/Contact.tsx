"use client";
import { useState } from "react";
import { Mail, Globe, Phone, Send, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="bg-cream/60 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-24">
        <SectionHeading
          no="06"
          eyebrow="Contact"
          title="Let's work with data, beautifully."
          desc="Open to analyst, statistics and research opportunities — and freelance dashboards."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="rounded-2xl bg-pine-deep p-8 text-ivory">
              <p className="font-display text-2xl">Niyati Sharma</p>
              <p className="mt-1 text-[14px] text-ivory/65">{profile.location}</p>
              <div className="mt-6 space-y-3 text-[14.5px]">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:text-gold-light">
                  <Mail size={16} className="text-gold" /> {profile.email}
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-gold-light">
                  <Globe size={16} className="text-gold" /> {profile.linkedinLabel}
                </a>
                <span className="flex items-center gap-3">
                  <Phone size={16} className="text-gold" /> {profile.phone}
                </span>
              </div>
              <div className="rule-gold mt-6 opacity-40" />
              <p className="mt-4 text-[13px] leading-relaxed text-ivory/60">
                Prefer email? I usually reply within a day. Include your role, timeline and dataset — if any.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <form onSubmit={submit} className="rounded-2xl border border-line bg-white p-7 md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-ink/55">Name</span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-line bg-ivory px-4 py-3 text-[15px] outline-none focus:border-pine"
                  />
                </label>
                <label className="block">
                  <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-ink/55">Email</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@company.com"
                    className="mt-2 w-full rounded-xl border border-line bg-ivory px-4 py-3 text-[15px] outline-none focus:border-pine"
                  />
                </label>
              </div>
              <label className="mt-4 block">
                <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-ink/55">Message</span>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about the role or project…"
                  className="mt-2 w-full rounded-xl border border-line bg-ivory px-4 py-3 text-[15px] outline-none focus:border-pine resize-y"
                />
              </label>
              <button
                type="submit"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-pine px-7 py-3.5 text-[15px] font-semibold text-ivory hover:bg-pine-soft transition-colors"
              >
                <Send size={15} /> Send Message
              </button>
              {sent && (
                <p className="mt-4 flex items-center gap-2 text-[14px] font-medium text-pine">
                  <CheckCircle2 size={16} /> Opening your mail app — I&apos;ll be in touch soon.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
