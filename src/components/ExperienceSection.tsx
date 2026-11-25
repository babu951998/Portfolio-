import { earlierCareer, experience, experienceContent } from "@/data/site";
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
            {experienceContent.eyebrow}
          </p>
          <h2
            id="experience-heading"
            className="mt-2 font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl"
          >
            {experienceContent.heading}
          </h2>
        </div>

        <div className="space-y-12">
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
                  <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-ink-secondary">
                    {item.highlights.map((point) => (
                      <li key={point} className="flex gap-2.5">
                        <span
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-accent"
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
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-4">
                  <p className="font-mono text-xs tracking-wider text-ink-muted uppercase">
                    {experienceContent.earlierHeading}
                  </p>
                </div>
                <div className="lg:col-span-8">
                  <ul className="divide-y divide-line border-t border-b border-line">
                    {earlierCareer.map((role) => (
                      <li
                        key={`${role.company}-${role.period}`}
                        className="flex flex-col justify-between gap-1 py-3 text-sm sm:flex-row sm:items-center sm:gap-4"
                      >
                        <span className="text-ink-secondary">
                          <span className="text-ink">{role.role}</span>,{" "}
                          {role.company}
                        </span>
                        <span className="font-mono text-xs whitespace-nowrap text-ink-muted">
                          {role.period}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
