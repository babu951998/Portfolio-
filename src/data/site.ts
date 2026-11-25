export interface ProjectLinkConfig {
  liveUrl?: string;
  repoUrl?: string;
}

export interface CaseStudy {
  slug: "kariot" | "unimation-robotics" | "fixix";
  index: string;
  title: string;
  subtitle: string;
  category: string;
  period: string;
  role: string;
  scale: string;
  liveUrl?: string;
  problem: string;
  summary: string;
  stack: string[];
  contributions: string[];
  architecture: {
    caption: string;
    nodes: { id: string; label: string; detail: string }[];
  };
  decisions: {
    title: string;
    detail: string;
  }[];
  outcome: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
}

export interface EarlierRole {
  role: string;
  company: string;
  period: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export const siteConfig = {
  name: "Babu P",
  role: "Full Stack Developer",
  location: "Tamil Nadu, India",
  availability: "Open to Full Stack and Backend roles at product companies",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-babu-98.vercel.app",
  email: "arivubabu98@gmail.com",
  phone: "+91 86082 19655",
  linkedinUrl: "https://linkedin.com/in/babu9598",
  githubUrl: "https://github.com/babu951998",
  photoUrl: "/images/babu.jpg",
  photoAlt: "Portrait of Babu P, Full Stack Developer",
  resumePath: "/Babu-P-Resume.pdf",
  resendFromEmail:
    process.env.RESEND_FROM_EMAIL ||
    "Portfolio Contact <onboarding@resend.dev>",
  metadata: {
    title: "Babu P, Full Stack Developer",
    description:
      "Full Stack Developer with 2.5+ years of experience building real‑time IoT platforms (5,000+ devices, MQTT to Socket.io), Node.js APIs, MongoDB time‑series pipelines, and React/Angular dashboards.",
    ogTitle: "Babu P, Full Stack Developer",
    ogDescription:
      "Full Stack Developer building real‑time IoT telemetry systems, Node.js and CodeIgniter 4 APIs, MongoDB aggregation pipelines, and React/Angular dashboards.",
    twitterDescription:
      "Full Stack Developer building real‑time IoT telemetry systems (5,000+ devices) and full‑stack web platforms.",
  },
  navLinks: [
    { href: "/#work", label: "Work" },
    { href: "/#experience", label: "Experience" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
  ],
};

export const heroContent = {
  eyebrow: "Full Stack Developer · Tamil Nadu, India",
  headline: "I build real‑time IoT platforms and the backends behind them.",
  subheadline:
    "I work on a platform that handles telemetry from 5,000+ connected devices, each reporting every second, across 100+ customer sites. Node.js, React, Angular, Python and CodeIgniter 4.",
  primaryCta: "Get in touch",
  secondaryCta: "Resume PDF",
  telemetryTitle: "MQTT to Socket.io Stream",
  telemetryBadge: "1 Hz · illustrative",
  telemetryNote: "kariot/site-104/pump-02 (illustrative telemetry)",
};

export const projects: CaseStudy[] = [
  {
    slug: "kariot",
    index: "01",
    title: "KarIoT",
    subtitle: "Smart Water Management Platform",
    category: "IoT Product · Real‑Time Telemetry",
    period: "Apr 2024 – Present",
    role: "Full Stack Developer · Team Tweaks Technology",
    scale: "Contributor · 5,000+ devices · 100+ sites · 1 s telemetry interval",
    liveUrl: "https://www.karikala.in/",
    problem:
      "A real‑time monitoring and control platform used by industrial, residential, commercial and government customers, including CMWSSB. It streams tank level, flow, water quality, energy and pressure data, and supports remote control of motors and valves.",
    summary:
      "Built the MQTT-to-Socket.io pipeline, Node.js sensor-parsing services, MongoDB schemas and aggregation pipelines, remote motor and valve control workflows, and a Python chatbot.",
    stack: [
      "Node.js",
      "PHP (CodeIgniter 4)",
      "Angular",
      "React.js",
      "Python",
      "MongoDB",
      "MQTT",
      "Socket.io",
      "REST APIs",
    ],
    contributions: [
      "Built and maintained the MQTT-to-Socket.io pipeline that receives 1-second telemetry from 5,000+ devices and feeds live dashboards.",
      "Wrote Node.js services that parse level, flow, water-quality, energy and pressure data and store it in MongoDB.",
      "Designed MongoDB schemas, queries and aggregation pipelines for high-volume time‑series sensor data, supporting consumption, flow, pump-runtime and anomaly-detection analytics.",
      "Built remote motor and valve control workflows, rule-based scheduling, and a Python chatbot that answers questions about a user’s water data.",
    ],
    architecture: {
      caption:
        "Telemetry and command path from field sensors to live operator dashboards.",
      nodes: [
        {
          id: "devices",
          label: "5,000+ Field Devices",
          detail:
            "Level, flow, water quality, energy and pressure sensors, motors and valves",
        },
        {
          id: "mqtt",
          label: "MQTT Broker",
          detail: "1-second telemetry publish and remote command topics",
        },
        {
          id: "node",
          label: "Node.js Services",
          detail: "Payload parsing, rule-based scheduling and cron sync",
        },
        {
          id: "mongo",
          label: "MongoDB",
          detail: "Time‑series schemas, queries and aggregation pipelines",
        },
        {
          id: "socket",
          label: "Socket.io + CI4 APIs",
          detail: "Live sensor streaming and CodeIgniter 4 REST APIs",
        },
        {
          id: "ui",
          label: "Angular, React & Bot",
          detail: "Live dashboards, remote control and Python chatbot",
        },
      ],
    },
    decisions: [
      {
        title: "Separating telemetry ingestion from REST APIs",
        detail:
          "Node.js services handle incoming MQTT sensor telemetry, MongoDB persistence, and Socket.io streaming to Angular and React.js dashboards, alongside CodeIgniter 4 APIs.",
      },
      {
        title: "Aggregation pipelines in MongoDB",
        detail:
          "Consumption, flow, pump-runtime, and anomaly-detection analytics run through MongoDB schemas, queries, and aggregation pipelines designed for high-volume time‑series sensor data.",
      },
      {
        title: "Live status feedback on remote control",
        detail:
          "Remote motor and valve monitoring and control workflows pair command dispatch with live device-status feedback and cron jobs for synchronization and reports.",
      },
    ],
    outcome:
      "Supports 5,000+ connected devices and 500+ users across 100+ industrial, residential, commercial and government customer sites, including CMWSSB.",
  },
  {
    slug: "unimation-robotics",
    index: "02",
    title: "Unimation Robotics",
    subtitle: "Smart AC Monitoring and Control Platform",
    category: "IoT Product · HVAC Automation",
    period: "2024 – Present",
    role: "Full Stack Developer · Team Tweaks Technology",
    scale: "Developer · Web portal and mobile APIs · Scheduling and alerts",
    liveUrl: "https://unimationrobotics.com/",
    problem:
      "A platform for monitoring and controlling AC units remotely, covering temperature, operating mode, fan speed and device health.",
    summary:
      "Implemented MQTT-based telemetry handling, CodeIgniter 4 APIs, Angular dashboards, web portal and mobile app APIs, automated scheduling, and alert and notification modules.",
    stack: [
      "Node.js",
      "PHP (CodeIgniter 4)",
      "Angular",
      "MongoDB",
      "MQTT",
      "REST APIs",
    ],
    contributions: [
      "Implemented MQTT-based telemetry handling for temperature, operating mode, fan speed and device health.",
      "Built remote monitoring and control features through CodeIgniter 4 APIs and Angular dashboards.",
      "Developed web portal and mobile app APIs, automated scheduling, and alert and notification modules backed by cron jobs.",
    ],
    architecture: {
      caption:
        "HVAC telemetry handling, automated scheduling, and web/mobile control flow.",
      nodes: [
        {
          id: "ac",
          label: "AC Units",
          detail: "Temperature, operating mode, fan speed and device health",
        },
        {
          id: "mqtt",
          label: "MQTT Broker",
          detail: "Telemetry and remote control messaging",
        },
        {
          id: "backend",
          label: "Node.js & CI4 APIs",
          detail: "Telemetry handling, web/mobile APIs and cron jobs",
        },
        {
          id: "mongo",
          label: "MongoDB",
          detail: "Device state, schedules and alert records",
        },
        {
          id: "clients",
          label: "Angular & Mobile",
          detail: "Remote control, scheduling and notifications",
        },
      ],
    },
    decisions: [
      {
        title: "Unified APIs for web portal and mobile app",
        detail:
          "CodeIgniter 4 APIs serve both Angular dashboards and mobile app clients for remote AC monitoring, control, and automated scheduling.",
      },
      {
        title: "Background cron jobs for schedules and alerts",
        detail:
          "Automated scheduling and alert and notification modules run through background cron jobs decoupled from interactive requests.",
      },
    ],
    outcome:
      "Delivered remote AC monitoring and control across Angular dashboards and mobile app APIs with automated scheduling and alerts.",
  },
  {
    slug: "fixix",
    index: "03",
    title: "Fixix",
    subtitle: "Construction Materials E-Commerce Platform",
    category: "Full Stack · E-Commerce and RBAC",
    period: "2024 – Present",
    role: "Full Stack Developer · Team Tweaks Technology",
    scale: "Developer · MERN-stack admin and mobile-app APIs",
    problem:
      "A construction-materials e-commerce platform with an admin console and mobile-app APIs for products, orders, customers, inventory and categories.",
    summary:
      "Developed MERN-stack admin and mobile-app API features for products, orders, customers, inventory and categories, with authentication, RBAC and API validation.",
    stack: ["Node.js", "Express.js", "React.js", "MongoDB", "REST APIs"],
    contributions: [
      "Developed Express.js REST APIs for products, categories, inventory, orders and customers.",
      "Built React.js admin modules with authentication and role-based access control (RBAC).",
      "Added API validation across the admin and mobile-app endpoints.",
    ],
    architecture: {
      caption:
        "MERN-stack admin and mobile-app API architecture with RBAC and validation.",
      nodes: [
        {
          id: "clients",
          label: "React Admin & Mobile",
          detail: "Admin console and mobile-app clients",
        },
        {
          id: "gateway",
          label: "Auth, RBAC & Validation",
          detail: "Authentication, role checks and API validation",
        },
        {
          id: "express",
          label: "Node.js / Express API",
          detail: "Products, categories, inventory, orders and customers",
        },
        {
          id: "mongo",
          label: "MongoDB",
          detail: "Catalog, inventory, order and customer data",
        },
      ],
    },
    decisions: [
      {
        title: "Shared RBAC and API validation layer",
        detail:
          "Authentication, role-based access control, and API validation are enforced across both admin and mobile-app endpoints in Express.js.",
      },
    ],
    outcome:
      "Delivered MERN-stack admin and mobile-app API features for products, orders, customers, inventory and categories.",
  },
];

export const experienceContent = {
  eyebrow: "02 / Experience",
  heading: "Engineering timeline",
  earlierHeading: "Earlier Career (2020 – 2023)",
};

export const experience: ExperienceItem[] = [
  {
    company: "Team Tweaks Technology Pvt. Ltd.",
    role: "Software Developer",
    period: "Apr 2024 – Present",
    location: "Tamil Nadu, India",
    summary:
      "Develop and maintain full‑stack applications and REST APIs using Node.js, Express.js, PHP (CodeIgniter 4), React.js, Angular, MongoDB, and MySQL for 500+ users across 100+ customer sites.",
    highlights: [
      "Built and maintained an MQTT-to-Socket.io data pipeline receiving telemetry from 5,000+ IoT devices reporting every second, powering live dashboards and high-volume data processing.",
      "Developed web and mobile APIs for remote monitoring and control of motors and valves, with live device-status feedback.",
      "Designed MongoDB schemas, queries, and aggregation pipelines for high-volume time‑series sensor data.",
      "Built admin modules with role-based access control (RBAC) for users, products, orders, inventory, reports, and settings.",
      "Integrated payment gateways, LDAP authentication, Firebase push notifications, third-party APIs, and AWS S3 file storage; contributed to microservices-based backend services.",
      "Built a Python-based AI chatbot for the KarIoT platform using AI-assisted development.",
    ],
  },
];

export const earlierCareer: EarlierRole[] = [
  {
    role: "Inside Sales Associate",
    company: "Byju’s Classes",
    period: "Jul 2022 – Jul 2023",
  },
  {
    role: "Automation Engineer",
    company: "Foxconn Hon Hai Technology India Pvt. Ltd.",
    period: "Jan 2022 – Jun 2022",
  },
  {
    role: "Site Manager",
    company: "Sodexo India Services Pvt. Ltd.",
    period: "Jan 2020 – Dec 2021",
  },
];

export const skillsContent = {
  eyebrow: "03 / Technical Skills",
  heading: "Stack & tooling",
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: [
      "JavaScript",
      "TypeScript",
      "Python",
      "PHP",
      "HTML5",
      "CSS3",
      "SCSS",
    ],
  },
  {
    label: "Frontend",
    items: ["React.js", "Angular", "jQuery"],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "CodeIgniter 4",
      "REST APIs",
      "Microservices",
      "RBAC",
      "LDAP Authentication",
      "Cron Jobs",
    ],
  },
  {
    label: "Databases",
    items: [
      "MongoDB (Schema Design, Aggregation Pipelines, Query Optimization)",
      "MySQL",
    ],
  },
  {
    label: "Real‑Time and IoT",
    items: [
      "MQTT",
      "WebSocket",
      "Socket.io",
      "Device Telemetry",
      "Remote Monitoring and Control",
    ],
  },
  {
    label: "AI and Chatbots",
    items: ["Python Chatbot Development", "AI-Assisted Development"],
  },
  {
    label: "Tools and Cloud",
    items: [
      "AWS S3",
      "Git",
      "CI/CD",
      "Postman",
      "VS Code",
      "PuTTY",
      "SFTP",
      "Firebase Cloud Messaging",
    ],
  },
];

export const aboutContent = {
  eyebrow: "04 / About",
  heading: "From hardware floors to telemetry backends",
  paragraphs: [
    "I started in electronics. I studied Electronics and Communication Engineering, then worked as an Automation Engineer at Foxconn and a Site Manager at Sodexo before moving into software in 2024. That background is why IoT work feels natural to me: I’m comfortable with both the equipment side of a system and the code that handles its data.",
    "At Team Tweaks Technology I work across the stack: Node.js, PHP (CodeIgniter 4), React, Angular, Python, MongoDB and MySQL. Most of my time goes into telemetry ingestion, time‑series aggregation, role-based APIs and live operator dashboards.",
  ],
  education:
    "B.E. Electronics and Communication · Muthayammal Engineering College, Namakkal (Anna University) · 2015 – 2019",
};

export const contactContent = {
  eyebrow: "05 / Contact",
  heading: "Hiring for a backend or full‑stack role?",
  subtext:
    "I’m open to Full Stack and Backend Developer roles at product companies. Email is fastest, or use the form.",
  submitLabel: "Send message",
  submittingLabel: "Sending...",
  successMessage: "Message sent. I’ll reply within one business day.",
};
