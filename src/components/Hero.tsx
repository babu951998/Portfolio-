import { heroContent, siteConfig } from "@/data/site";
import { TelemetryStream } from "./TelemetryStream";

export function Hero() {
  return (
    <section className="border-b border-line pt-14 pb-16 sm:pt-20 sm:pb-24">
      <div className="mx-auto max-w-[70rem] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs tracking-wider text-accent uppercase">
              {heroContent.eyebrow}
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-[1.08] font-normal tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
              {heroContent.headline}
            </h1>
            <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-ink-secondary">
              {heroContent.subheadline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center border border-ink bg-ink px-5 py-2.5 font-mono text-xs tracking-wide text-bg uppercase transition-colors hover:border-accent hover:bg-accent"
              >
                {heroContent.primaryCta}
              </a>
              <a
                href="/resume?v=2"
                download="Babu_P_Full_Stack_Developer_Resume.pdf"
                className="inline-flex items-center border border-line px-5 py-2.5 font-mono text-xs tracking-wide text-ink uppercase transition-colors hover:border-ink"
              >
                {heroContent.secondaryCta}
              </a>
            </div>
            <p className="mt-4 font-mono text-xs text-ink-muted">
              {siteConfig.availability}
            </p>
          </div>

          <div className="lg:col-span-5">
            <TelemetryStream />
          </div>
        </div>
      </div>
    </section>
  );
}
