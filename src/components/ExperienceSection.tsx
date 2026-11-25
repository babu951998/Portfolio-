import { earlierCareer, experience } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-b border-line py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[70rem] px-5 sm:px-8">
        <div className="mb-12 border-b border-line pb-5">
          <p className="font-mono text-xs tracking-wider text-ink-muted uppercase">
            02 / Experience
          </p>
          <h2
            id="experience-heading"
            className="mt-2 font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl"
          >
            Engineering timeline
          </h2>
        </div>

        <div className="space-y-10">
          {experience.map((item) => (
            <Reveal key={item.company}>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-4">
                  <p className="font-mono text-xs text-accent">{item.period}</p>
                  <h3 className="mt-1.5 font-serif text-2xl font-normal text-ink">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-ink-secondary">
                    {item.company}
                  </p>
                </div>

                <div className="lg:col-span-8">
                  <p className="max-w-[65ch] text-base leading-relaxed text-ink">
                    {item.summary}
                  </p>
                  <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-ink-secondary">
                    {item.highlights.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <span
                          className="mt-2 h-1 w-1 shrink-0 bg-ink-muted"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.05}>
            <div className="border-t border-line pt-8">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-4">
                  <p className="font-mono text-xs tracking-wider text-ink-muted uppercase">
                    Earlier Career (2020 – 2023)
                  </p>
                </div>
                <div className="lg:col-span-8">
                  <p className="font-mono text-xs leading-relaxed text-ink-secondary">
                    {earlierCareer
                      .map((r) => `${r.role}, ${r.company} (${r.period})`)
                      .join(" · ")}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
