import Reveal from "./Reveal";

export default function SectionHeading({
  no,
  eyebrow,
  title,
  desc,
  dark = false,
}: {
  no: string;
  eyebrow: string;
  title: string;
  desc?: string;
  dark?: boolean;
}) {
  return (
    <Reveal>
      <div className="max-w-3xl">
        <p
          className={`text-[12px] font-semibold uppercase tracking-[0.28em] ${
            dark ? "text-gold-light" : "text-pine"
          }`}
        >
          <span className="text-gold-deep mr-2">{no}</span> — {eyebrow}
        </p>
        <h2
          className={`font-display mt-3 text-4xl md:text-5xl leading-[1.05] tracking-tight ${
            dark ? "text-ivory" : "text-ink"
          }`}
        >
          {title}
        </h2>
        {desc && (
          <p
            className={`mt-4 text-[16px] leading-relaxed ${
              dark ? "text-ivory/70" : "text-ink/65"
            }`}
          >
            {desc}
          </p>
        )}
        <div className="rule-gold mt-6 w-40 opacity-70" />
      </div>
    </Reveal>
  );
}
