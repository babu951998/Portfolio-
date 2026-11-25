import type { Metadata, Viewport } from "next";
import { Newsreader, Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteConfig } from "@/data/site";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F5F0" },
    { media: "(prefers-color-scheme: dark)", color: "#111110" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.metadata.title,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.metadata.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    title: siteConfig.metadata.ogTitle,
    description: siteConfig.metadata.ogDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.metadata.ogTitle,
    description: siteConfig.metadata.twitterDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    if (stored === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: siteConfig.siteUrl,
    email: `mailto:${siteConfig.email}`,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    sameAs: [
      siteConfig.linkedinUrl,
      ...(siteConfig.githubUrl ? [siteConfig.githubUrl] : []),
    ],
    knowsAbout: [
      "Node.js",
      "TypeScript",
      "React.js",
      "Angular",
      "Python",
      "PHP",
      "CodeIgniter 4",
      "MongoDB",
      "MySQL",
      "MQTT",
      "Socket.io",
      "IoT Telemetry",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${newsreader.variable} ${jakarta.variable} ${ibmMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-screen antialiased selection:bg-accent-subtle">
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-bg focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-ink focus:ring-2 focus:ring-accent"
          >
            Skip to content
          </a>
          {children}
        </ThemeProvider>
        {process.env.VERCEL === "1" ? <Analytics /> : null}
      </body>
    </html>
  );
}
