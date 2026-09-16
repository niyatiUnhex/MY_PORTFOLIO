import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="bg-pine-deep text-ivory">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-24">
        <SectionHeading
          dark
          no="04"
          eyebrow="Experience"
          title="Where analysis meets action."
          desc="Business-facing, government-trained, and AI-prototyped."
        />
        <div className="mt-10 space-y-5">
          {experience.map((e, i) => (
            <Reveal key={e.role} delay={i * 0.06}>
              <div className="rounded-2xl border border-ivory/12 bg-ivory/[0.04] p-6 md:p-8 backdrop-blur hover:border-gold/40 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3 className="font-display text-[22px]">{e.role}</h3>
                    <p className="mt-1 text-[14px] text-gold-light/90">{e.org}</p>
                  </div>
                  <span className="w-fit shrink-0 rounded-full border border-gold/40 px-4 py-1.5 text-[12.5px] font-semibold text-gold-light">
                    {e.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-[14.5px] leading-relaxed text-ivory/75">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
