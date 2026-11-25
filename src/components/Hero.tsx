import Image from "next/image";
import { heroContent } from "@/data/portfolio";
import { siteConfig } from "@/data/site";
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
            <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-ink-secondary sm:text-lg">
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
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-line px-5 py-2.5 font-mono text-xs tracking-wide text-ink uppercase transition-colors hover:border-ink"
              >
                {heroContent.secondaryCta}
              </a>
              <span className="font-mono text-xs text-ink-muted">
                {siteConfig.availability}
              </span>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-5">
            {siteConfig.photoUrl && (
              <div className="flex items-center gap-4 border border-line bg-surface/60 p-3">
                <div className="relative aspect-[4/5] w-24 shrink-0 overflow-hidden border border-line sm:w-28">
                  <Image
                    src={siteConfig.photoUrl}
                    alt={`${siteConfig.name} — ${siteConfig.role}`}
                    fill
                    priority
                    sizes="112px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="min-w-0 font-mono text-xs">
                  <p className="font-serif text-lg font-normal text-ink">
                    {siteConfig.name}
                  </p>
                  <p className="mt-0.5 text-ink-secondary">{siteConfig.role}</p>
                  <p className="mt-2 text-[11px] text-ink-muted">
                    2.5+ yrs · 5,000+ IoT devices · 100+ sites
                  </p>
                </div>
              </div>
            )}
            <TelemetryStream />
          </div>
        </div>
      </div>
    </section>
  );
}
