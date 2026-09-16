import { BadgeCheck, Crown } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skillGroups, certifications, leadership } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-24">
      <SectionHeading
        no="05"
        eyebrow="Capabilities"
        title="A precise, practical toolkit."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.07}>
            <div className="h-full rounded-2xl border border-line bg-white p-7">
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-gold-deep">
                {g.title}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span key={s} className="rounded-full bg-pine px-4 py-1.5 text-[13.5px] font-medium text-ivory">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div id="certifications" className="mt-10 grid gap-5 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border border-line bg-cream/70 p-7">
            <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.24em] text-pine">
              <BadgeCheck size={16} className="text-gold-deep" /> Certifications
            </p>
            <ul className="mt-4 space-y-3">
              {certifications.map((c) => (
                <li key={c.title} className="flex items-start justify-between gap-4 rounded-xl bg-white border border-line px-4 py-3">
                  <span className="text-[14.5px] font-medium text-ink">{c.title}</span>
                  <span className="shrink-0 text-[12.5px] text-ink/50">{c.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="h-full rounded-2xl bg-pine p-7 text-ivory">
            <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.24em] text-gold-light">
              <Crown size={16} /> Leadership
            </p>
            <ul className="mt-4 space-y-3">
              {leadership.map((l) => (
                <li key={l.title} className="rounded-xl border border-ivory/15 bg-ivory/[0.06] px-4 py-3">
                  <p className="text-[14.5px] font-medium">{l.title}</p>
                  <p className="text-[12.5px] text-ivory/60">{l.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
