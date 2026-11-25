export interface CaseStudy {
  slug: "kariot" | "unimation-robotics" | "fixix";
  index: string;
  title: string;
  subtitle: string;
  category: string;
  period: string;
  role: string;
  scale: string;
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

export const heroContent = {
  eyebrow: "Full Stack Developer · Tamil Nadu, India",
  headline:
    "I build real-time IoT platforms, high-volume telemetry pipelines, and full-stack web applications.",
  subheadline:
    "2.5+ years shipping Node.js, React, Angular, Python, and CodeIgniter 4 systems—supporting 5,000+ connected devices reporting every second across 100+ customer sites.",
  primaryCta: "Get in touch",
  secondaryCta: "Resume PDF",
};

export const projects: CaseStudy[] = [
  {
    slug: "kariot",
    index: "01",
    title: "KarIoT",
    subtitle: "Smart Water Management Platform",
    category: "IoT Product · Real-Time Telemetry",
    period: "Apr 2024 – Present",
    role: "Full Stack Developer · Team Tweaks Technology",
    scale: "5,000+ devices · 100+ sites · 1s telemetry interval",
    problem:
      "Industrial, commercial, residential, and government water utilities—including CMWSSB—needed continuous visibility into tank levels, flow, water quality, energy, and pressure, plus reliable remote control of motors and valves.",
    summary:
      "Built Node.js MQTT-to-Socket.io telemetry services, MongoDB time-series aggregation pipelines, Angular and React.js live dashboards, CodeIgniter 4 REST APIs, and a Python AI chatbot.",
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
      "Built and maintained an MQTT-to-Socket.io pipeline ingesting 1-second telemetry from 5,000+ IoT devices across 100+ customer sites.",
      "Developed Node.js services to parse level, flow, water-quality, energy, and pressure payloads and persist them into MongoDB time-series collections.",
      "Designed MongoDB schemas, indexes, and aggregation pipelines for consumption analytics, pump runtime, and anomaly detection.",
      "Implemented remote motor and valve control workflows with live status feedback, rule-based scheduling, and background cron jobs for sync and reporting.",
      "Built a Python-based conversational chatbot using AI-assisted development so operators can query water-management data in plain language.",
    ],
    architecture: {
      caption:
        "End-to-end telemetry and command path from field sensors to live operator dashboards.",
      nodes: [
        {
          id: "devices",
          label: "5,000+ Field Devices",
          detail:
            "Level, flow, quality, energy & pressure sensors + motors/valves",
        },
        {
          id: "mqtt",
          label: "MQTT Broker",
          detail: "1-second telemetry publish & remote command topics",
        },
        {
          id: "node",
          label: "Node.js Processor",
          detail: "Payload parsing, validation, rule checks & cron sync",
        },
        {
          id: "mongo",
          label: "MongoDB",
          detail: "Time-series schemas & aggregation pipelines",
        },
        {
          id: "socket",
          label: "Socket.io + CI4 APIs",
          detail: "Live stream fan-out & CodeIgniter 4 REST endpoints",
        },
        {
          id: "ui",
          label: "Angular & React UI",
          detail: "Live dashboards, scheduling, analytics & Python chatbot",
        },
      ],
    },
    decisions: [
      {
        title: "Decoupling ingestion from dashboard delivery",
        detail:
          "Node.js workers consume MQTT topics and write parsed sensor readings to MongoDB while pushing live updates over Socket.io, keeping CodeIgniter 4 REST APIs focused on auth, configuration, and reporting.",
      },
      {
        title: "Aggregation pipelines over client-side rollups",
        detail:
          "Computing consumption, pump runtime, and anomaly metrics inside MongoDB aggregation pipelines avoids shipping raw 1-second sensor documents over the network to browser dashboards.",
      },
      {
        title: "Closed-loop remote actuation",
        detail:
          "Motor and valve control APIs pair command dispatch with live device-status feedback so operators see actual hardware state rather than assuming a command succeeded.",
      },
    ],
    outcome:
      "Supports 5,000+ connected devices and 500+ users across 100+ industrial, residential, commercial, and government sites including CMWSSB.",
  },
  {
    slug: "unimation-robotics",
    index: "02",
    title: "Unimation Robotics",
    subtitle: "Smart AC Monitoring and Control Platform",
    category: "IoT Product · HVAC Automation",
    period: "2024 – Present",
    role: "Full Stack Developer · Team Tweaks Technology",
    scale: "Web portal & mobile APIs · Automated scheduling",
    problem:
      "Facility operators needed centralized remote monitoring and control of distributed AC units—tracking temperature, operating mode, fan speed, and device health—without manual on-site checks.",
    summary:
      "Delivered MQTT telemetry handling, CodeIgniter 4 APIs for web and mobile clients, Angular monitoring dashboards, and cron-driven scheduling and alert modules.",
    stack: [
      "Node.js",
      "PHP (CodeIgniter 4)",
      "Angular",
      "MongoDB",
      "MQTT",
      "REST APIs",
    ],
    contributions: [
      "Implemented MQTT-based telemetry ingestion for AC temperature, operating mode, fan speed, and device health.",
      "Built remote monitoring and control features across CodeIgniter 4 REST APIs and Angular operator dashboards.",
      "Developed web portal and mobile app APIs for automated scheduling, alerts, and notifications backed by cron jobs.",
    ],
    architecture: {
      caption:
        "HVAC telemetry ingestion, scheduled automation, and web/mobile control architecture.",
      nodes: [
        {
          id: "ac",
          label: "AC Controllers",
          detail: "Temperature, mode, fan speed & health telemetry",
        },
        {
          id: "mqtt",
          label: "MQTT Broker",
          detail: "Bi-directional telemetry & command channel",
        },
        {
          id: "backend",
          label: "Node.js & CI4 APIs",
          detail: "Telemetry processing, web/mobile REST APIs & cron jobs",
        },
        {
          id: "mongo",
          label: "MongoDB",
          detail: "Device state, schedules, alerts & historical logs",
        },
        {
          id: "clients",
          label: "Angular & Mobile",
          detail: "Remote control, automated schedules & alert feeds",
        },
      ],
    },
    decisions: [
      {
        title: "Shared REST contract for web and mobile",
        detail:
          "Exposing unified CodeIgniter 4 endpoints for both the Angular portal and mobile clients kept scheduling, control, and alert logic consistent in one backend.",
      },
      {
        title: "Cron-backed schedule and alert execution",
        detail:
          "Running automated schedules and health-alert checks via background cron jobs decoupled time-based triggers from active user sessions.",
      },
    ],
    outcome:
      "Enabled remote HVAC monitoring, automated operating schedules, and real-time health alerts across web and mobile portals.",
  },
  {
    slug: "fixix",
    index: "03",
    title: "Fixix",
    subtitle: "Construction Materials E-Commerce Platform",
    category: "Full Stack · E-Commerce & RBAC",
    period: "2024 – Present",
    role: "Full Stack Developer · Team Tweaks Technology",
    scale: "MERN-stack admin & mobile-app APIs",
    problem:
      "Construction materials operations required a unified backend and admin console to manage catalog, categories, inventory, orders, and customers with strict role-based permissions.",
    summary:
      "Built MERN-stack admin features and mobile-app REST APIs covering products, orders, customers, inventory, authentication, RBAC, and request validation.",
    stack: ["Node.js", "Express.js", "React.js", "MongoDB", "REST APIs"],
    contributions: [
      "Developed Express.js REST APIs for products, categories, inventory, orders, and customer management.",
      "Built React.js admin modules with role-based access control (RBAC) and authentication.",
      "Implemented API input validation and structured error handling across admin and mobile-app endpoints.",
    ],
    architecture: {
      caption:
        "MERN-stack API and admin architecture with role-based access control.",
      nodes: [
        {
          id: "clients",
          label: "React Admin & Mobile",
          detail: "Operations dashboard and customer mobile app",
        },
        {
          id: "gateway",
          label: "Auth & RBAC Middleware",
          detail: "Token verification, role checks & payload validation",
        },
        {
          id: "express",
          label: "Node.js / Express API",
          detail: "Products, categories, inventory, orders & customers",
        },
        {
          id: "mongo",
          label: "MongoDB",
          detail: "Catalog, stock levels, order state & user roles",
        },
      ],
    },
    decisions: [
      {
        title: "Middleware-enforced RBAC and validation",
        detail:
          "Centralizing authentication, role checks, and schema validation in Express middleware ensured consistent enforcement across both admin and mobile routes.",
      },
    ],
    outcome:
      "Delivered end-to-end catalog, order, and inventory APIs with role-based access control for admin and mobile workflows.",
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "Team Tweaks Technology Pvt. Ltd.",
    role: "Software Developer",
    period: "Apr 2024 – Present",
    location: "Tamil Nadu, India",
    summary:
      "Develop and maintain full-stack applications and REST APIs using Node.js, Express.js, PHP (CodeIgniter 4), React.js, Angular, MongoDB, and MySQL for 500+ users across 100+ customer sites.",
    highlights: [
      "Built and maintained an MQTT-to-Socket.io data pipeline receiving telemetry from 5,000+ IoT devices reporting every second.",
      "Developed web and mobile APIs for remote monitoring and control of motors and valves with live device-status feedback.",
      "Designed MongoDB schemas, queries, and aggregation pipelines for high-volume time-series sensor data.",
      "Built RBAC admin modules for users, products, orders, inventory, reports, and settings.",
      "Integrated payment gateways, LDAP authentication, Firebase push notifications, third-party APIs, and AWS S3 storage; contributed to microservices.",
      "Built a Python-based AI chatbot for the KarIoT platform using AI-assisted development.",
    ],
  },
];

export const earlierCareer: EarlierRole[] = [
  {
    role: "Inside Sales Associate",
    company: "Byju's Classes",
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
    items: ["React.js", "Angular", "Next.js", "jQuery", "Tailwind CSS"],
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
    label: "Real-Time & IoT",
    items: [
      "MQTT",
      "WebSocket",
      "Socket.io",
      "Device Telemetry",
      "Remote Monitoring & Control",
    ],
  },
  {
    label: "Tools & Cloud",
    items: [
      "AWS S3",
      "Firebase Cloud Messaging",
      "Git",
      "CI/CD",
      "Postman",
      "Python Chatbot Development",
      "PuTTY",
      "SFTP",
    ],
  },
];

export const aboutContent = {
  paragraphs: [
    "I started in electronics and industrial operations—studying Electronics and Communication Engineering and working on the floor as an Automation Engineer at Foxconn and Site Manager at Sodexo—before moving full-time into software engineering. That background is why hardware-adjacent systems feel natural to me: when a pump controller drops offline or a sensor packet arrives malformed, I understand both the physical equipment and the backend code handling it.",
    "At Team Tweaks Technology, I work across the stack with Node.js, PHP (CodeIgniter 4), React, Angular, Python, MongoDB, and MySQL. Most of my day-to-day focus is on reliable telemetry ingestion, time-series aggregation, role-based APIs, and live operator interfaces that stay responsive under continuous 1-second device traffic.",
  ],
  education:
    "B.E. Electronics and Communication · Muthayammal Engineering College, Namakkal (Anna University) · 2015 – 2019 · CGPA 6.5/10",
};
