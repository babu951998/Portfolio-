"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[70rem] items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="font-serif text-xl font-medium tracking-tight text-ink transition-colors hover:text-accent"
        >
          {siteConfig.name}
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {siteConfig.navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-draw font-mono text-xs tracking-wide text-ink-secondary uppercase transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/resume?v=2"
            download="Babu_P_Full_Stack_Developer_Resume.pdf"
            className="link-draw font-mono text-xs tracking-wide text-ink-secondary uppercase transition-colors hover:text-ink"
          >
            Resume
          </a>
          <ThemeToggle />
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-8 w-8 items-center justify-center border border-line text-ink"
          >
            {menuOpen ? (
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                aria-hidden="true"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="border-t border-line bg-bg px-5 py-5 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {siteConfig.navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block font-mono text-xs tracking-wide text-ink-secondary uppercase hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/resume?v=2"
                download="Babu_P_Full_Stack_Developer_Resume.pdf"
                onClick={() => setMenuOpen(false)}
                className="inline-block font-mono text-xs tracking-wide text-ink-secondary uppercase hover:text-ink"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
