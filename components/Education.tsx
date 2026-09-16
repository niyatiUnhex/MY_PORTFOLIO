import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="bg-cream/60 border-y border-line">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-24">
        <SectionHeading
          no="02"
          eyebrow="Education"
          title="A foundation in rigour."
          desc="Consistent distinction from school to postgraduate statistics."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.06}>
              <div className="group rounded-2xl border border-line bg-white p-6 md:p-7 hover:border-gold hover:shadow-[0_20px_50px_rgba(198,166,100,0.15)] transition-all">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-deep">
                      {e.period}
                    </p>
                    <h3 className="font-display mt-2 text-[21px] leading-snug text-ink">
                      {e.degree}
                    </h3>
                    <p className="mt-1 text-[14px] text-ink/60">{e.school}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-pine px-4 py-1.5 text-[13px] font-semibold text-ivory">
                    {e.result}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
