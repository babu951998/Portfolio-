import { skillGroups } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-b border-line py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[70rem] px-5 sm:px-8">
        <div className="mb-12 border-b border-line pb-5">
          <p className="font-mono text-xs tracking-wider text-ink-muted uppercase">
            03 / Technical Skills
          </p>
          <h2
            id="skills-heading"
            className="mt-2 font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl"
          >
            Stack &amp; tooling
          </h2>
        </div>

        <Reveal>
          <dl className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.label} className="border-t border-line pt-4">
                <dt className="font-mono text-xs tracking-wider text-accent uppercase">
                  {group.label}
                </dt>
                <dd className="mt-3 font-mono text-xs leading-relaxed text-ink-secondary">
                  {group.items.join(" · ")}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
