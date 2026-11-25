import Link from "next/link";
import { projects } from "@/data/site";
import { Reveal } from "./Reveal";

export function WorkSection() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="border-b border-line py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[70rem] px-5 sm:px-8">
        <div className="mb-8 flex flex-col justify-between gap-3 border-b border-line pb-5 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs tracking-wider text-ink-muted uppercase">
              01 / Selected Work
            </p>
            <h2
              id="work-heading"
              className="mt-2 font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl"
            >
              Production systems &amp; architecture
            </h2>
          </div>
          <p className="font-mono text-xs text-ink-muted">
            IoT telemetry, HVAC automation &amp; e‑commerce APIs
          </p>
        </div>

        <div className="divide-y divide-line">
          {projects.map((project, idx) => (
            <Reveal key={project.slug} delay={idx * 0.05}>
              <article className="py-14">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-3 font-mono text-xs text-ink-muted">
                      <span className="text-accent">{project.index}</span>
                      <span>·</span>
                      <span>{project.category}</span>
                    </div>
                    <h3 className="mt-2 font-serif text-2xl font-normal tracking-tight text-ink sm:text-3xl">
                      <Link
                        href={`/work/${project.slug}`}
                        className="transition-colors hover:text-accent"
                      >
                        {project.title}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-ink-secondary">
                      {project.subtitle}
                    </p>
                    <p className="mt-3 font-mono text-xs text-ink-muted">
                      {project.scale}
                    </p>
                  </div>

                  <div className="lg:col-span-8">
                    <p className="max-w-[65ch] text-base leading-relaxed text-ink">
                      {project.problem}
                    </p>

                    <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed text-ink-secondary">
                      {project.contributions.map((item) => (
                        <li key={item} className="flex gap-2.5">
                          <span
                            className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-accent"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <ul
                      aria-label={`${project.title} technology stack`}
                      className="mt-6 flex flex-wrap gap-2"
                    >
                      {project.stack.map((tech) => (
                        <li
                          key={tech}
                          className="border border-line px-2.5 py-1 font-mono text-xs whitespace-nowrap text-ink-secondary"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap items-center gap-6">
                      <Link
                        href={`/work/${project.slug}`}
                        className="link-draw font-mono text-xs tracking-wide text-accent uppercase"
                      >
                        Read case study →
                      </Link>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${project.title} product site (opens in a new tab)`}
                          className="link-draw font-mono text-xs tracking-wide text-ink-secondary uppercase hover:text-ink"
                        >
                          Visit product site ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
