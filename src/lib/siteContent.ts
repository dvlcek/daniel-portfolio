export const primaryCta = {
  label: "Book a 20-min Systems Call",
  href: "/contact",
};

export const secondaryCtas = {
  caseStudies: { label: "View Case Studies", href: "/work" },
  audit: { label: "Request Audit", href: "/audit" },
  sprint: { label: "Start a Sprint", href: "/contact" },
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
    whatIDid: ["Automation", "Tracking", "Integration Architecture"],
    stack: ["Next.js", "TypeScript", "HubSpot API", "Zapier", "Postmark"],
    summary:
      "Disconnected forms, CRM pipelines, and follow-up tasks were slowing sales velocity.",
    challenge:
      "Leads arrived from three sources with no standardized routing. Sales reps manually triaged every lead and missed SLA windows.",
    solution:
      "Built an automation layer that normalized incoming lead data, routed by territory, assigned ownership, and triggered follow-up sequences with alerting.",
    outcome: [
      "Lead routing time dropped from ~45 minutes to under 5 minutes.",
      "Weekly manual ops effort reduced by 10+ hours.",
      "Created clear handover docs for internal ops ownership.",
    ],
  },
  {
    slug: "services-company-nextjs-rebuild",
    company: "Multi-location Services Company",
    industry: "Home Services",
    result: "Increased qualified lead conversion by 32% after a full Next.js rebuild.",
    whatIDid: ["Rebuild", "UX", "Performance", "Analytics"],
    stack: ["Next.js", "TypeScript", "Tailwind", "GSAP", "GA4"],
    summary:
      "Legacy marketing site looked acceptable but underperformed in speed and conversion.",
    challenge:
      "No clear conversion path, weak trust signals, and missing instrumentation made optimization impossible.",
    solution:
      "Redesigned information architecture, rebuilt frontend in Next.js App Router, and added event-based conversion tracking with dashboard-ready taxonomy.",
    outcome: [
      "Core pages moved into high Lighthouse performance ranges.",
      "CTA click-through improved by 24%.",
      "Team now ships updates through a maintainable component system.",
    ],
  },
  {
    slug: "internal-reporting-automation",
    company: "Growth Operations Team",
    industry: "Ecommerce",
    result: "Replaced manual reporting with scheduled dashboards and saved 14 hours per week.",
    whatIDid: ["Automation", "Data Flow", "Reporting"],
    stack: ["Node.js", "Google Sheets API", "BigQuery", "Looker Studio"],
    summary:
      "Weekly reporting depended on multiple copy-paste workflows and ad-hoc spreadsheet logic.",
    challenge:
      "Leadership got delayed or inconsistent data, and analysts spent too much time preparing reports.",
    solution:
      "Automated extraction and normalization of campaign + revenue data, then published structured datasets to dashboards with alerting on anomalies.",
    outcome: [
      "Data freshness moved from weekly to daily.",
      "Manual reporting steps reduced from 9 to 2.",
      "Single source of truth established for cross-team reviews.",
    ],
  },
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
    title: "Diagnose",
    description:
      "Identify bottlenecks, data flow issues, and conversion friction in current systems.",
  },
  {
    title: "Design the system",
    description:
      "Define architecture, UX, integrations, and tracking before build execution.",
  },
  {
    title: "Ship in iterations",
    description:
      "Deliver weekly milestones with transparent scope and measurable outcomes.",
  },
  {
    title: "Document and handover",
    description:
      "Provide maintainable code, clear docs, and onboarding for your team.",
  },
];

export const packages = [
  {
    name: "Systems Audit",
    level: "Entry",
    bestFor: "Teams feeling operational friction",
    includes: [
      "Bottleneck map",
      "Automation opportunities",
      "Quick wins",
      "Execution roadmap",
    ],
    cta: secondaryCtas.audit,
  },
  {
    name: "Automation Sprint",
    level: "Core",
    bestFor: "Teams needing workflows now",
    includes: [
      "1-3 automations shipped",
      "Tool integrations",
      "Monitoring setup",
      "Documentation",
    ],
    cta: secondaryCtas.sprint,
  },
  {
    name: "Next.js Rebuild",
    level: "Premium",
    bestFor: "Companies outgrowing their current site",
    includes: [
      "Redesigned experience",
      "Rebuilt codebase",
      "Performance baseline",
      "Tracking foundation",
    ],
    cta: { label: "Discuss Rebuild", href: "/nextjs-rebuilds-for-growth" },
  },
  {
    name: "Optimization Retainer",
    level: "Scale",
    bestFor: "Ongoing optimization and system expansion",
    includes: [
      "Monthly improvements",
      "Conversion experiments",
      "Automation expansion",
      "Support",
    ],
    cta: { label: "Explore Retainer", href: "/contact" },
  },
];

export const faqItems = [
  {
    question: "Are you a freelancer?",
    answer:
      "I work as a technical growth partner, shipping systems and infrastructure with defined deliverables, documentation, and scalable architecture.",
  },
  {
    question: "How long does a rebuild take?",
    answer:
      "Rebuilds ship in phases. The first usable version lands quickly, then we iterate with prioritized improvements.",
  },
  {
    question: "What do you need from us?",
    answer:
      "Access to current tools, stakeholders for workflow mapping, and one decision-maker for approvals.",
  },
  {
    question: "Do you support what you build?",
    answer:
      "Yes. Handover is structured and ongoing support is available through a retainer.",
  },
];
