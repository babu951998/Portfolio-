import { skillGroups, skillsContent } from "@/data/site";
import { Reveal } from "./Reveal";

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-b border-line py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[70rem] px-5 sm:px-8">
        <div className="mb-10 border-b border-line pb-5">
          <p className="font-mono text-xs tracking-wider text-ink-muted uppercase">
            {skillsContent.eyebrow}
          </p>
          <h2
            id="skills-heading"
            className="mt-2 font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl"
          >
            {skillsContent.heading}
          </h2>
        </div>

        <Reveal>
          <dl className="divide-y divide-line border-b border-line">
            {skillGroups.map((group) => (
              <div
                key={group.label}
                className="grid grid-cols-1 gap-3 py-5 lg:grid-cols-12 lg:items-baseline lg:gap-10"
              >
                <dt className="font-mono text-xs tracking-wider text-accent uppercase lg:col-span-4">
                  {group.label}
                </dt>
                <dd className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs leading-relaxed text-ink-secondary lg:col-span-8">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={
                        item.length > 28
                          ? "sm:whitespace-nowrap"
                          : "whitespace-nowrap"
                      }
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
