import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-[70rem] flex-col items-start justify-between gap-4 px-5 text-xs text-ink-muted sm:flex-row sm:items-center sm:px-8">
        <p className="font-mono">
          © 2026 {siteConfig.name} · {siteConfig.location}
        </p>
        <p className="font-mono">Built with Next.js</p>
      </div>
    </footer>
  );
}
