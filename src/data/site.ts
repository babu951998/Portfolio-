export interface ProjectLinkConfig {
  liveUrl: string;
  repoUrl: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  location: string;
  availability: string;
  siteUrl: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  githubUrl: string;
  photoUrl: string;
  resumePath: string;
  projectLinks: {
    kariot: ProjectLinkConfig;
    "unimation-robotics": ProjectLinkConfig;
    fixix: ProjectLinkConfig;
  };
  resendFromEmail: string;
}

export const siteConfig: SiteConfig = {
  name: "Babu P",
  role: "Full Stack Developer",
  location: "Tamil Nadu, India",
  availability: "Open to Full Stack & Backend roles at product companies",
  /**
   * Replace with your deployed domain (no trailing slash).
   * Used for canonical URLs, sitemap.xml, robots.txt, and Open Graph metadata.
   */
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-babu-98.vercel.app",
  email: "arivubabu98@gmail.com",
  phone: "+91 86082 19655",
  linkedinUrl: "https://www.linkedin.com/in/babu9598",
  githubUrl: "https://github.com/babu951998",
  photoUrl: "/images/babu.jpg",
  /**
   * Resume PDF path inside /public, served at /resume
   */
  resumePath: "/Babu-P-Resume.pdf",
  /**
   * TODO (for you to fill in): Add public demo or repository links for each project if available.
   */
  projectLinks: {
    kariot: {
      liveUrl: "",
      repoUrl: "",
    },
    "unimation-robotics": {
      liveUrl: "",
      repoUrl: "",
    },
    fixix: {
      liveUrl: "",
      repoUrl: "",
    },
  },
  /**
   * Resend sender address. Use "onboarding@resend.dev" for testing before verifying your custom domain in Resend.
   */
  resendFromEmail:
    process.env.RESEND_FROM_EMAIL ||
    "Portfolio Contact <onboarding@resend.dev>",
};
