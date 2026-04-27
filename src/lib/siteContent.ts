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
  category: "system_build" | "websites" | "automation" | "rebuilds";
  liveUrl: string;
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
    company: "Mini sklady self storage s.r.o.",
    industry: "Storage Rental",
    category: "system_build",
    liveUrl: "https://miniskladyslovensko.sk", 
    result:
      "Built the entire system that allows a storage rental business to run without administrative overhead — from brand to operations.",
    whatIDid: [
      "Brand and digital presence setup",
      "Customer-facing rental platform",
      "Payment and billing automation",
      "Customer lifecycle system",
      "Email and notification automation",
      "Admin and operations dashboard",
    ],
    stack: ["Node.js", "PHP", "Stripe API", "Resend", "Google APIs"],
    summary:
      "This project was about building the business infrastructure from the ground up. Instead of launching with manual processes and gradually improving them, the company started with a complete system that handles bookings, payments, communication, and operations automatically. This allowed the business to operate efficiently from day one and scale without increasing administrative overhead.",
    challenge:
      "The business started without any digital infrastructure. There was no platform, no booking system, no payment handling, and no operational setup. Without the right system, the business would rely entirely on manual work, making it difficult to launch efficiently or scale without hiring.",
    solution:
      "Designed and built the full operational platform for the business — combining a customer-facing rental system with automated payments, booking management, communication workflows, and internal operations. The system was built to allow customers to manage everything independently while reducing the need for manual administration.",
    outcome: [
      "Launched the business with a complete operational system from day one",
      "Removed the need for administrative staff through automation",
      "Reduced manual workload across bookings, payments, and communication",
      "Enabled recurring revenue through automated billing",
      "Improved customer experience with self-service and instant booking",
      "Created a scalable system ready for growth without increasing operational costs",
    ],
    image: "/images/case-studies/storage-platform.png",
    featuredMetric: "Operates without administrative overhead",
    intro:
      "This project was not just about building a website or adding automation. It was about building the entire system the business runs on — from brand and customer-facing platform to payments, workflows, and internal operations.",
  },
  {
    slug: "artist-growth-platform",
    company: "Vlka ART",
    industry: "Creative / Art",
    category: "websites",
    liveUrl: "https://vlkaart.sk",

    result:
      "Built a platform that allows an independent artist to present, manage, and sell their work professionally — replacing manual communication with a structured system.",

    intro:
      "This project focused on creating a professional digital presence for an artist who previously operated without any online system. The goal was to centralize their work, make it accessible, and introduce a structured way to handle interest, reservations, and communication.",

    whatIDid: [
      "Artist portfolio platform",
      "Artwork presentation and availability system",
      "Reservation and inquiry flow",
      "Email communication setup",
      "Admin panel for content and artwork management",
    ],

    stack: ["Next.js", "Node.js", "Email APIs"],

    challenge:
      "The artist had no online presence, no structured way to present their work, and no system for handling interest or reservations. Everything was managed manually through messages, making it difficult to showcase available pieces, communicate consistently, or appear as a professional business.",

    solution:
      "Designed and built a centralized platform where all artwork is presented in one place with clear structure, pricing, and availability. Introduced a reservation and inquiry system with automated email responses, along with an admin panel that allows the artist to manage content, update artwork, and control availability without technical knowledge.",

    summary:
      "Instead of relying on manual communication and scattered interactions, the artist now operates with a structured platform that supports presentation, inquiries, and basic sales processes. This creates a more professional impression and allows the artist to focus on their work rather than managing requests manually.",

    outcome: [
      "Created a professional online presence for the artist",
      "Centralized all artwork with clear availability and pricing",
      "Reduced manual communication through structured inquiries",
      "Made it easier to manage and update artwork independently",
      "Improved how the artist is perceived by potential clients and collaborators",
    ],

    featuredMetric:
      "From no presence to a structured platform for showcasing and managing artwork",

    image: "/images/case-studies/artist-platform.png",
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
    name: "Business System Build",
    bestFor:
      "For companies that need a complete system to operate and scale.",
    includes: [
      "Platform built around your business model",
      "Automated workflows, payments, and operations",
      "Customer-facing system (website or platform)",
      "Internal tools and admin structure",
      "Scalable architecture for long-term growth",
    ],
    subtle: "and more — tailored to your business",
    cta: secondaryCtas.platform,
  },
  {
    name: "Rebuild & Upgrade",
    bestFor:
      "For businesses with an existing platform that needs a stronger structure and performance.",
    includes: [
      "Rebuild of outdated website or platform",
      "Improved structure, speed, and reliability",
      "Conversion and tracking optimization",
      "System cleanup and better integrations",
      "Prepared for future expansion",
    ],
    subtle: "and more — based on your current setup",
    cta: secondaryCtas.rebuild,
  },
  {
    name: "Operations & Automation",
    bestFor:
      "For businesses that need to reduce manual work and streamline operations.",
    includes: [
      "Workflow analysis and bottleneck identification",
      "Automation of repetitive processes",
      "Tool and system integrations",
      "AI-supported workflows where relevant",
      "Ongoing operational improvements",
    ],
    subtle: "and more — depending on system complexity",
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
