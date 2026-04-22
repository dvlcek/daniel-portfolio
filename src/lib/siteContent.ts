export const primaryCta = {
  label: "Book a 20-min Strategy Call",
  href: "/contact",
};

export const secondaryCtas = {
  caseStudies: { label: "View Case Studies", href: "/work" },
  platform: { label: "Book a Strategy Call", href: "/contact" },
  rebuild: { label: "Book a Strategy Call", href: "/contact" },
  automation: { label: "Book a Strategy Call", href: "/contact" },
};

export type CaseStudy = {
  slug: string;
  company: string;
  industry: string;
  category: "websites" | "automation" | "rebuilds";
  result: string;
  whatIDid: string[];
  stack: string[];
  summary: string;
  challenge: string;
  solution: string;
  outcome: string[];
  image: string;
  featuredMetric?: string;
  intro?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "storage-rental-platform",
    company: "Self-Storage Rental Co.",
    industry: "Storage Rental",
    category: "automation",
    result:
      "Built a fully automated rental system that allows the business to operate with zero administrative staff while handling payments, customers, and communication end-to-end.",
    whatIDid: [
      "End-to-end system architecture",
      "Automated payment & billing system",
      "Customer self-service platform",
      "Email & notification automation",
      "Admin & operations dashboard",
    ],
    stack: ["Node.js", "PHP", "Stripe API", "Resend", "Google APIs"],
    summary:
      "A storage rental startup needed a complete operational system — not just a website — to launch and run the business without hiring staff.",
    challenge:
      "Without a system, the business would require manual handling of bookings, payments, customer communication, and contract management. This would increase operational costs and slow down growth from day one.",
    solution:
      "Designed and built a fully automated rental infrastructure. Customers can rent, manage, and cancel units independently, while payments, invoicing, and communication are handled automatically.",
    outcome: [
      "Eliminated the need for administrative staff from day one.",
      "Reduced operational workload by automating core business processes.",
      "Enabled fully automated monthly recurring revenue handling.",
      "Improved customer experience through instant booking and self-service.",
      "Created a scalable system ready for growth without increasing costs.",
    ],
    image: "/images/case-studies/storage-platform.png",
    featuredMetric: "0 admin staff needed",
    intro:
      "Instead of building just a website, this project focused on creating a complete operational system — replacing manual work with automation and enabling the business to scale from day one.",
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
    title: "Discovery",
    description:
      "Understand the business, identify bottlenecks, and define project goals.",
  },
  {
    title: "System Planning",
    description:
      "Define the platform structure, workflows, and technical direction.",
  },
  {
    title: "Design & Build",
    description:
      "Design the experience, build the system, and connect the key tools.",
  },
  {
    title: "Launch & Optimization",
    description:
      "Launch cleanly, test thoroughly, and refine based on real usage.",
  },
];

export const packages = [
  {
    name: "New Platform Build",
    bestFor:
      "For businesses launching a new website, webshop, or custom platform with the right structure from the start.",
    includes: [
      "Project strategy",
      "UX/UI direction",
      "Custom development",
      "Core integrations",
      "Launch support",
    ],
    cta: secondaryCtas.platform,
  },
  {
    name: "Rebuild & Upgrade",
    bestFor:
      "For businesses with an outdated website or platform that no longer supports growth, conversion, or day-to-day operations.",
    includes: [
      "Redesign and rebuild",
      "Performance improvements",
      "Structure cleanup",
      "Feature expansion",
      "Tracking and conversion setup",
    ],
    cta: secondaryCtas.rebuild,
  },
  {
    name: "Operational Automation",
    bestFor:
      "For businesses that want to reduce manual work, connect tools, and improve operations through automation.",
    includes: [
      "Workflow mapping",
      "Automation architecture",
      "CRM and tool integrations",
      "Process automation support",
      "Operational optimization",
    ],
    cta: secondaryCtas.automation,
  },
];

export const faqItems = [
  {
    question: "What kind of businesses are the best fit?",
    answer:
      "The best fit is a business that needs more than just a better-looking website. I work best with companies that want stronger systems, less manual work, and a digital setup that supports growth.",
  },
  {
    question: "Do you only build websites?",
    answer:
      "No. Websites are only one part of the system. I also build automations, connect tools, improve workflows, and help businesses create a stronger operational setup behind the front end.",
  },
  {
    question: "Can you improve what we already have?",
    answer:
      "Yes. Not every project needs to start from zero. If the current website, platform, or workflow has a usable foundation, I can rebuild, optimize, and improve the system around it.",
  },
  {
    question: "Can automation be done without a new website?",
    answer:
      "Yes. If the main problem is manual work, disconnected tools, or inefficient internal processes, automation can be built independently from a website project.",
  },
  {
    question: "How does a project usually start?",
    answer:
      "It starts with a strategy call and a discovery phase. First I look at the business, the bottlenecks, and the goals. Then I define the right structure, scope, and direction before anything is built.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes. Depending on the project, I can continue with improvements, optimization, automation expansion, and support after launch so the system keeps evolving with the business.",
  },
  {
    question: "What makes your approach different?",
    answer:
      "I do not treat the project as just a website task. The focus is on the whole system: how the business operates, where manual work can be removed, and how the digital setup can perform better long-term.",
  },
];
