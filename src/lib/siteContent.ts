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
