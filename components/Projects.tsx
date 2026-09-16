import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-24">
      <SectionHeading
        no="03"
        eyebrow="Selected Work"
        title="Projects that prove the method."
        desc="Each project pairs statistical reasoning with real datasets — spatial, financial, behavioural and digital."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.no} delay={(i % 2) * 0.08}>
            <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 md:p-8 hover:border-pine/30 hover:shadow-[0_24px_70px_rgba(14,59,46,0.1)] transition-all">
              <div className="flex items-center justify-between">
                <span className="font-display text-[15px] italic text-gold-deep">{p.no}</span>
                <span className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink/45">
                  {p.date}
                </span>
              </div>
              <h3 className="font-display mt-3 text-[24px] leading-tight text-ink">
                {p.title}
              </h3>
              <p className="mt-1 text-[13.5px] font-medium text-pine/80">{p.subtitle}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-cream border border-line px-3 py-1 text-[12px] font-semibold text-pine">
                    {t}
                  </span>
                ))}
              </div>
              <ul className="mt-5 space-y-2.5 text-[14.5px] leading-relaxed text-ink/70">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2.5">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
