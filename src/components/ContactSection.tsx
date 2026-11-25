import { siteConfig } from "@/data/site";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[70rem] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs tracking-wider text-ink-muted uppercase">
              05 / Contact
            </p>
            <h2
              id="contact-heading"
              className="mt-2 font-serif text-3xl font-normal tracking-tight text-ink sm:text-4xl"
            >
              Let&apos;s talk about your engineering team
            </h2>
            <p className="mt-4 max-w-[44ch] text-base leading-relaxed text-ink-secondary">
              Available for Full Stack and Backend Developer interviews at
              product companies. Email directly or send a note here.
            </p>

            <dl className="mt-8 space-y-4 border-t border-line pt-6 font-mono text-xs">
              <div>
                <dt className="text-ink-muted uppercase">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="link-draw text-ink hover:text-accent"
                  >
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-ink-muted uppercase">LinkedIn</dt>
                <dd className="mt-1">
                  <a
                    href={siteConfig.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-draw text-ink hover:text-accent"
                  >
                    linkedin.com/in/babu9598
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-ink-muted uppercase">GitHub</dt>
                <dd className="mt-1">
                  {siteConfig.githubUrl ? (
                    <a
                      href={siteConfig.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-draw text-ink hover:text-accent"
                    >
                      {siteConfig.githubUrl.replace(/^https?:\/\//, "")}
                    </a>
                  ) : (
                    <span className="text-ink-muted">
                      Add githubUrl in src/data/site.ts
                    </span>
                  )}
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
