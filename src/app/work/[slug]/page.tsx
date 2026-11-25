import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { TelemetryStream } from "@/components/TelemetryStream";
import { projects, siteConfig } from "@/data/site";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: `${project.title}: ${project.subtitle}`,
    description: project.summary,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.title}: ${project.subtitle} · ${siteConfig.name}`,
      description: project.summary,
      url: `${siteConfig.siteUrl}/work/${project.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="main-content" className="flex-1 py-12 sm:py-20">
        <article className="mx-auto max-w-[70rem] px-5 sm:px-8">
          <Link
            href="/#work"
            className="link-draw font-mono text-xs tracking-wider text-ink-muted uppercase hover:text-ink"
          >
            ← Back to all work
          </Link>

          <header className="mt-8 border-b border-line pb-10">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-ink-muted">
              <span className="text-accent">{project.index}</span>
              <span>·</span>
              <span>{project.category}</span>
              <span>·</span>
              <span>{project.period}</span>
            </div>
            <h1 className="mt-3 font-serif text-4xl leading-tight font-normal tracking-tight text-ink sm:text-5xl">
              {project.title}: {project.subtitle}
            </h1>
            <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-ink-secondary sm:text-lg">
              {project.summary}
            </p>

            <dl className="mt-8 grid grid-cols-1 gap-6 border-t border-line pt-6 sm:grid-cols-3">
              <div>
                <dt className="font-mono text-xs tracking-wider text-ink-muted uppercase">
                  Role
                </dt>
                <dd className="mt-1 text-sm text-ink">{project.role}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs tracking-wider text-ink-muted uppercase">
                  Scale
                </dt>
                <dd className="mt-1 text-sm text-ink">{project.scale}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs tracking-wider text-ink-muted uppercase">
                  Stack
                </dt>
                <dd className="mt-1 flex flex-wrap gap-1.5 font-mono text-xs leading-relaxed text-ink-secondary">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="border border-line px-2 py-0.5 whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>

            {project.liveUrl && (
              <div className="mt-6">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title} product site (opens in a new tab)`}
                  className="inline-flex items-center border border-ink px-4 py-2 font-mono text-xs uppercase transition-colors hover:bg-ink hover:text-bg"
                >
                  Visit product site ↗
                </a>
              </div>
            )}
          </header>

          {/* Context */}
          <section className="grid grid-cols-1 gap-6 border-b border-line py-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <h2 className="font-mono text-xs tracking-wider text-accent uppercase">
                01 / Context &amp; Problem
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="max-w-[65ch] text-base leading-relaxed text-ink">
                {project.problem}
              </p>
            </div>
          </section>

          {/* Architecture */}
          <section className="border-b border-line py-12">
            <h2 className="mb-6 font-mono text-xs tracking-wider text-accent uppercase">
              02 / Architecture Overview
            </h2>
            <ArchitectureDiagram
              architecture={project.architecture}
              title={project.title}
            />
            {project.slug === "kariot" && (
              <div className="mt-8">
                <TelemetryStream />
              </div>
            )}
          </section>

          {/* What I Built */}
          <section className="grid grid-cols-1 gap-6 border-b border-line py-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <h2 className="font-mono text-xs tracking-wider text-accent uppercase">
                03 / What I Built
              </h2>
            </div>
            <div className="lg:col-span-8">
              <ul className="space-y-3 text-base leading-relaxed text-ink-secondary">
                {project.contributions.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-accent"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Technical Decisions */}
          <section className="grid grid-cols-1 gap-6 border-b border-line py-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <h2 className="font-mono text-xs tracking-wider text-accent uppercase">
                04 / Decisions &amp; Trade‑offs
              </h2>
            </div>
            <div className="space-y-6 lg:col-span-8">
              {project.decisions.map((decision) => (
                <div key={decision.title} className="max-w-[65ch]">
                  <h3 className="font-serif text-xl text-ink">
                    {decision.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-secondary">
                    {decision.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Outcome */}
          <section className="grid grid-cols-1 gap-6 border-b border-line py-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <h2 className="font-mono text-xs tracking-wider text-accent uppercase">
                05 / Outcome
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="max-w-[65ch] text-base leading-relaxed text-ink">
                {project.outcome}
              </p>
            </div>
          </section>

          {/* Next project */}
          <nav
            aria-label="Next case study"
            className="flex items-center justify-between pt-10"
          >
            <Link
              href="/#contact"
              className="link-draw font-mono text-xs tracking-wider text-ink-muted uppercase hover:text-ink"
            >
              Discuss this architecture
            </Link>
            <Link
              href={`/work/${nextProject.slug}`}
              className="link-draw font-mono text-xs tracking-wider text-accent uppercase"
            >
              Next: {nextProject.title} →
            </Link>
          </nav>
        </article>
      </main>
      <Footer />
    </div>
  );
}
