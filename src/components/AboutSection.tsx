import { aboutContent } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-line py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[70rem] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs tracking-wider text-ink-muted uppercase">
              04 / About
            </p>
            <h2
              id="about-heading"
              className="mt-2 font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl"
            >
              From hardware floors to telemetry backends
            </h2>
          </div>

          <Reveal className="lg:col-span-8">
            <div className="max-w-[65ch] space-y-5 text-base leading-relaxed text-ink-secondary">
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-8 border-t border-line pt-4 font-mono text-xs text-ink-muted">
              Education: {aboutContent.education}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
