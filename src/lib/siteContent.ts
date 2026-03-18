export const primaryCta = {
  label: "Book a 20-min Strategy Call",
  href: "/contact",
};

export const secondaryCtas = {
  caseStudies: { label: "View Case Studies", href: "/work" },
  platform: { label: "Discuss Your Project", href: "/contact" },
  rebuild: { label: "Discuss Rebuild", href: "/contact" },
  automation: { label: "Book Automation Call", href: "/contact" },
};

export type CaseStudy = {
  slug: string;
  company: string;
  industry: string;
  result: string;
  whatIDid: string[];
  stack: string[];
  summary: string;
  challenge: string;
  solution: string;
  outcome: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "saas-lead-ops-automation",
    company: "B2B SaaS Team",
    industry: "Software",
    result: "Reduced lead handling from 12 steps to 3 and cut response time by 68%.",
    whatIDid: ["Workflow automation", "Lead routing", "Integration architecture"],
    stack: ["Next.js", "TypeScript", "HubSpot API", "Zapier", "Postmark"],
    summary:
      "Disconnected lead intake, CRM routing, and follow-up processes were slowing down sales response and creating avoidable manual work.",
    challenge:
      "Leads were coming in from multiple sources with no consistent routing logic. Sales had to manually review, assign, and follow up, which slowed response times and increased the risk of missed opportunities.",
    solution:
      "Built an automation layer that standardized incoming lead data, routed leads by rules, assigned ownership automatically, and triggered follow-up sequences with alerting.",
    outcome: [
      "Lead routing time dropped from around 45 minutes to under 5 minutes.",
      "Weekly manual operations work was reduced by more than 10 hours.",
      "The team gained a more reliable and scalable lead handling process.",
    ],
  },
  {
    slug: "services-company-nextjs-rebuild",
    company: "Multi-location Services Company",
    industry: "Home Services",
    result: "Increased qualified lead conversion by 32% after a full platform rebuild.",
    whatIDid: ["Platform rebuild", "UX restructuring", "Performance optimization", "Tracking setup"],
    stack: ["Next.js", "TypeScript", "Tailwind", "GSAP", "GA4"],
    summary:
      "The existing website looked acceptable on the surface but underperformed in speed, clarity, and lead generation.",
    challenge:
      "The business had no clear conversion structure, weak trust presentation, and limited tracking, making it difficult to improve performance or understand what users were doing.",
    solution:
      "Redesigned the site structure, rebuilt the frontend on a more scalable architecture, and implemented conversion-focused tracking for better visibility and future optimization.",
    outcome: [
      "Qualified lead conversion increased by 32%.",
      "CTA click-through improved by 24%.",
      "The team now works with a cleaner and more maintainable website foundation.",
    ],
  },
  {
    slug: "internal-reporting-automation",
    company: "Growth Operations Team",
    industry: "Ecommerce",
    result: "Replaced manual reporting with automated dashboards and saved 14 hours per week.",
    whatIDid: ["Reporting automation", "Data flow design", "Dashboard infrastructure"],
    stack: ["Node.js", "Google Sheets API", "BigQuery", "Looker Studio"],
    summary:
      "Reporting depended on repetitive manual work, inconsistent spreadsheets, and delayed data delivery.",
    challenge:
      "Leadership received updates too late, analysts spent too much time preparing reports, and teams lacked a clear single source of truth.",
    solution:
      "Automated the extraction and normalization of campaign and revenue data, then published structured datasets into dashboards with anomaly alerting.",
    outcome: [
      "Reporting moved from weekly updates to daily visibility.",
      "Manual reporting steps were reduced from 9 to 2.",
      "A reliable reporting foundation was created for cross-team decision-making.",
    ],
  }
];

export type InsightPost = {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  body: string[];
};

export const insightPosts: InsightPost[] = [
  {
    slug: "automation-before-ai",
    title: "Why teams should fix workflow architecture before adding AI",
    excerpt:
      "Most automation failures are architecture failures. Start with process clarity, then layer intelligence.",
    readTime: "4 min read",
    body: [
      "Teams often start with tools, not systems. That creates expensive automation that mirrors existing chaos.",
      "Map bottlenecks and decision points first. If ownership and inputs are unclear, automation will multiply errors faster.",
      "After the process is stable, introduce AI where classification, summarization, or prioritization has measurable upside.",
    ],
  },
  {
    slug: "when-to-rebuild-nextjs",
    title: "Signals that it is time for a full Next.js rebuild",
    excerpt:
      "A redesign can change appearance. A rebuild changes speed, maintainability, and conversion infrastructure.",
    readTime: "5 min read",
    body: [
      "Rebuild when performance debt blocks growth experiments and shipping updates feels risky.",
      "A modern App Router architecture improves composability, caching, and long-term delivery velocity.",
      "Treat the rebuild as a systems project: information architecture, tracking plan, and handover standards.",
    ],
  },
];

export const processSteps = [
  {
    title: "Discovery",
    description:
      "Understand the business, bottlenecks, and project goals.",
  },
  {
    title: "System Planning",
    description:
      "Define the platform structure, workflows, and technical approach.",
  },
  {
    title: "Design & Build",
    description:
      "Create the experience, develop the system, and connect key tools.",
  },
  {
    title: "Launch & Optimization",
    description:
      "Ship cleanly, test properly, and refine based on real usage.",
  },
];

export const packages = [
  {
    name: "Platform Build",
    bestFor:
      "For businesses launching a new website, webshop, or custom web platform with a strong technical foundation.",
    includes: [
      "project strategy",
      "UX/UI direction",
      "custom development",
      "core integrations",
      "launch support",
    ],
    cta: secondaryCtas.platform,
  },
  {
    name: "Rebuild & Upgrade",
    bestFor:
      "For businesses with an outdated website or platform that no longer supports growth, conversion, or internal operations.",
    includes: [
      "redesign and rebuild",
      "performance improvements",
      "structure cleanup",
      "feature expansion",
      "tracking and conversion setup",
    ],
    cta: secondaryCtas.rebuild,
  },
  {
    name: "Automation Systems",
    bestFor:
      "For businesses that want to reduce manual work, connect tools, and improve operations with automation and AI-supported workflows.",
    includes: [
      "workflow mapping",
      "automation architecture",
      "CRM and tool integrations",
      "AI-assisted process support",
      "operational optimization",
    ],
    cta: secondaryCtas.automation,
  },
];

export const faqItems = [
  {
    question: "What kind of projects are the best fit?",
    answer:
      "The best fit is a business that needs more than just a nice-looking website. I work best on projects where the goal is to improve operations, reduce manual work, or build a scalable platform that supports growth.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Yes. I primarily work with solo founders, small businesses, and growing teams that want serious systems without the complexity of a large agency process.",
  },
  {
    question: "Do you offer automation without a new website?",
    answer:
      "Yes. Automation projects can be delivered independently if the main need is workflow improvement, tool integration, or reducing repetitive admin work.",
  },
  {
    question: "Can you improve an existing platform?",
    answer:
      "Yes. I can rebuild or upgrade an existing website or platform when the current setup no longer supports performance, conversion, scalability, or internal processes.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on scope. Smaller website builds can move quickly, while larger platforms and automation systems require more planning and implementation. After a short discovery phase, I define the realistic timeline clearly.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. For selected projects, I offer ongoing support, improvements, and automation expansion after launch so the system can continue evolving with the business.",
  },
  {
    question: "Do you work internationally?",
    answer:
      "Yes. I am based in Austria and work with clients across Austria, Germany, Slovakia, and other international markets depending on project fit.",
  },
];
