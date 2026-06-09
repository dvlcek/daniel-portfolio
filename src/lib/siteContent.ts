export const primaryCta = {
  label: "Build my Business Operating System",
  href: "/contact",
};

export const secondaryCtas = {
  caseStudies: { label: "View real projects", href: "/work" },
  fullSystem: { label: "Build a Business Operating System", href: "/contact" },
  website: { label: "Plan a website", href: "/contact" },
  rebuild: { label: "Review my current setup", href: "/contact" },
  automation: { label: "Automate a workflow", href: "/contact" },
};

export type CaseStudyCategory =
  | "system_build"
  | "websites"
  | "automation"
  | "rebuilds";

export type CaseStudyProofItem = {
  label: string;
  value: string;
  text: string;
};

export type CaseStudySection = {
  label: string;
  title: string;
  description?: string;
};

export type CaseStudyAccess = {
  type: "public" | "private";
  label: string;
  description?: string;
};

export type CaseStudy = {
  slug: string;
  company: string;
  industry: string;
  category: CaseStudyCategory;
  categoryLabel: string;
  liveUrl: string;

  projectAccess: CaseStudyAccess;

  title: string;
  subtitle: string;
  result: string;
  intro: string;

  whatIDid: string[];
  stack: string[];

  summary: string;
  challenge: string;
  solution: string;
  outcome: string[];

  image: string;
  featuredMetric: string;

  proof: CaseStudyProofItem[];

  preview: {
    label: string;
    title: string;
  };

  summarySection: CaseStudySection;

  transformation: {
    label: string;
    title: string;
    beforeTitle: string;
    afterTitle: string;
    before: string[];
    after: string[];
  };

  detailSections: {
    challengeLabel: string;
    solutionLabel: string;
    componentsLabel: string;
  };

  impact: {
    label: string;
    title: string;
    description: string;
    items: string[];
  };

  outcomesSection: CaseStudySection;

  cta: {
    label: string;
    title: string;
    description: string;
    primaryText: string;
    secondaryText: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "storage-rental-platform",
    company: "Mini sklady self storage s.r.o.",
    industry: "Storage Rental",
    category: "system_build",
    categoryLabel: "Full Business Platform",
    liveUrl: "https://miniskladyslovensko.sk",

    projectAccess: {
      type: "public",
      label: "View Live Project",
    },

    title: "Self-Storage Rental Operations Platform",

    subtitle:
      "A full-stack rental platform that connects online bookings, Stripe payments, invoices, contracts, access code delivery, customer communication, cancellations, and internal operations.",

    result:
      "Built a complete rental operations platform that automates the customer lifecycle from online booking and payment to invoicing, contract handling, access code delivery, cancellations, and internal management.",

    intro:
      "Mini sklady self storage s.r.o. needed more than a public website. The business needed a digital operating layer for handling reservations, payments, billing, contracts, access information, customer communication, availability, and daily administration from one connected system.",

    whatIDid: [
      "Business platform architecture",
      "Customer-facing rental platform",
      "Payment and billing automation",
      "Customer lifecycle workflow",
      "Email and notification automation",
      "Internal operations dashboard",
    ],

    stack: ["Node.js", "PHP", "Stripe API", "Resend", "Google APIs"],

    summary:
      "I built a custom rental operations platform that gives the business one structured system for managing customers, payments, invoices, contracts, storage units, rental dates, cancellations, and internal operations. Instead of relying on manual reservations, manual invoice creation, payment checks, and repeated customer communication, the platform connects the full rental process into one clearer workflow.",

    challenge:
      "Without a connected system, the rental process would have depended heavily on manual administration. Customers would reserve storage by email or in person, the team would need to create invoices manually, check payments, update rental records, send access information, manage contracts, track cancellations, and monitor storage availability by hand. As the business grew, this would create slower service, more operational friction, and a higher risk of mistakes.",

    solution:
      "I designed and built a full rental operations system from the ground up. Customers can book storage online, pay through Stripe, and move through the rental flow without unnecessary back-and-forth. Stripe webhooks trigger key workflows such as payment confirmation, invoice generation, contract handling, rental status updates, customer emails, cancellation flows, and access code delivery on the rental start day after successful payment. The internal dashboard gives the team a central place to manage storage units, active rentals, customers, dates, payments, cancellations, and availability.",

    outcome: [
      "Automated the rental lifecycle across reservation, payment, rental start, monthly billing, failed payment handling, cancellations, and customer communication",
      "Replaced email-based and in-person reservations with a self-service online booking flow",
      "Generated legally structured Slovak PDF invoices automatically from Stripe payment data",
      "Automated contract handling using customer data collected during the rental process",
      "Delivered storage access codes automatically on the rental start day after successful payment",
      "Updated storage availability automatically after bookings, active rentals, and cancellations",
      "Created a central operations dashboard for managing storage units, rentals, customers, dates, payments, cancellations, and operational changes",
      "Reduced administrative overhead by replacing repetitive manual tasks with structured automated workflows",
      "Currently supports 36 customers and around 30 active monthly paying customers through the system",
    ],

    image: "/images/case-studies/storage-platform.png",

    featuredMetric: "Full rental lifecycle automated",

    proof: [
      {
        label: "Rental Lifecycle",
        value: "Fully automated",
        text: "Reservation, payment, rental start, monthly billing, failed payment handling, cancellation, and customer communication are handled through connected workflows.",
      },
      {
        label: "Customers Managed",
        value: "36 customers",
        text: "The platform manages customer data, rentals, billing, invoices, and operational records in one connected system.",
      },
      {
        label: "Active Monthly Rentals",
        value: "30 paying customers",
        text: "Around 30 active monthly paying customers are supported through automated payment, invoice, and communication workflows.",
      },
    ],

    preview: {
      label: "Project Preview",
      title:
        "A rental operations platform built around customer self-service, automated payments, recurring billing, access delivery, and internal business control.",
    },

    summarySection: {
      label: "Project Summary",
      title: "What this created for the business.",
    },

    transformation: {
      label: "Business Transformation",
      title:
        "From manual rental administration to a connected operating platform.",
      beforeTitle: "Before",
      afterTitle: "After",
      before: [
        "Customers reserved storage by email or in person",
        "Invoices had to be created and sent manually",
        "Payments had to be checked manually",
        "Rental records had to be updated by hand",
        "Access information had to be sent manually",
        "Contracts, cancellations, and availability had to be managed manually",
      ],
      after: [
        "Customers book storage online through a self-service rental flow",
        "Stripe payments trigger automated workflows through webhooks",
        "PDF invoices are generated automatically from payment and customer data",
        "Contracts are handled automatically using customer rental information",
        "Access codes are sent automatically on the rental start day after successful payment",
        "Storage availability, rentals, customers, payments, and cancellations are managed from one dashboard",
      ],
    },

    detailSections: {
      challengeLabel: "Challenge",
      solutionLabel: "Solution",
      componentsLabel: "System Components",
    },

    impact: {
      label: "System Impact",
      title: "How the platform supports the full rental lifecycle.",
      description:
        "The platform connects bookings, payments, invoices, contracts, notifications, access code delivery, cancellations, availability updates, and internal operations into one structured rental workflow.",
      items: [
        "Online reservations",
        "Stripe payment webhooks",
        "Automatic Slovak PDF invoice generation",
        "Automatic contract handling",
        "Access code delivery on rental start day",
        "Monthly billing automation",
        "Failed payment communication",
        "Customer rental emails",
        "Team reservation notifications",
        "Cancellation workflows",
        "Storage availability updates",
        "Dashboard-based operations management",
      ],
    },

    outcomesSection: {
      label: "Outcomes",
      title: "What changed after delivery",
    },

    cta: {
      label: "Next Step",
      title:
        "Need a business platform that turns manual operations into a clearer system?",
      description:
        "I design and build custom platforms, automation workflows, and internal systems that improve customer experience, reduce administrative overhead, and give businesses stronger operational control.",
      primaryText: "Build a system like this",
      secondaryText: "View more case studies",
    },
  },

  {
    slug: "artist-growth-platform",
    company: "Vlka ART",
    industry: "Creative / Art",
    category: "websites",
    categoryLabel: "Website / Platform",
    liveUrl: "https://vlkaart.sk",

    projectAccess: {
      type: "public",
      label: "View Live Project",
    },

    title: "Artist Portfolio, Inquiry & Content Management Platform",

    subtitle:
      "An artist platform for presenting around 80 artworks, managing availability, displaying exhibitions, collecting reservation inquiries, and updating content independently.",

    result:
      "Built a structured artist platform that centralizes artwork presentation, availability management, exhibition content, reservation inquiries, analytics, and admin control.",

    intro:
      "Vlka ART had social media profiles, but no dedicated website for presenting artwork in a professional and structured way. I built an artist platform that gives the brand a central online presence, organizes the artwork library, supports reservation inquiries, displays exhibitions, tracks visitor activity, and allows the artist to manage content independently.",

    whatIDid: [
      "Artist portfolio platform",
      "Artwork presentation and availability system",
      "Reservation and inquiry flow",
      "Email communication setup",
      "Content and artwork management dashboard",
      "Exhibition management system",
      "Google Analytics setup",
    ],

    stack: ["Next.js", "Node.js", "Email APIs"],

    challenge:
      "Before the platform, Vlka ART relied mainly on social media and manual communication. There was no central artwork archive, no structured way to show availability, no exhibition management system, and no clear inquiry flow for people interested in reserving artwork. This made the artist less discoverable outside social media and made it harder to present the work in a professional, sales-ready format.",

    solution:
      "I designed and built a custom artist platform with structured artwork pages, availability statuses, exhibition listings, reservation inquiries, automated email communication, Google Analytics, and a full admin panel. The artist can manage artworks, update availability, mark pieces as available, reserved, or sold, edit exhibitions, and control content without technical support. Interested visitors can send reservation inquiries, while both the artist and the visitor receive automated email confirmations.",

    summary:
      "Vlka ART now has a professional online platform that works as the central home for the artist’s brand, artwork, exhibitions, and reservation inquiries. Around 80 artworks are organized with clear availability statuses, visitors can contact the artist through a structured inquiry flow, and the admin panel gives the artist direct control over artworks and exhibitions. The platform improves trust, discoverability, and the path from artwork interest to reservation inquiry.",

    outcome: [
      "Created a professional website and central digital presence beyond social media",
      "Organized around 80 artworks in one structured portfolio platform",
      "Added artwork status management for available, reserved, and sold pieces",
      "Created a reservation inquiry flow for visitors interested in specific artworks",
      "Set up automated email confirmations for both the artist and interested visitors",
      "Built a full admin panel for managing artworks, availability, content, and exhibitions",
      "Added exhibition listings to support the artist’s professional presentation",
      "Set up Google Analytics to track website activity and understand visitor behavior",
      "Created a clearer foundation for future artwork promotion, reservations, and sales",
    ],

    image: "/images/case-studies/artist-platform.png",

    featuredMetric: "80 artworks managed in one platform",

    proof: [
      {
        label: "Artwork Library",
        value: "80 artworks",
        text: "The platform organizes around 80 artworks in one structured portfolio with clear information and availability status.",
      },
      {
        label: "Availability",
        value: "Available / Reserved / Sold",
        text: "Each artwork can be managed with a clear status, helping visitors understand what can still be requested.",
      },
      {
        label: "Content Control",
        value: "Management dashboard",
        text: "The artist can manage artworks, exhibitions, availability, and content independently without technical support.",
      },
    ],

    preview: {
      label: "Project Preview",
      title:
        "A professional artist platform built around artwork presentation, reservation inquiries, exhibitions, analytics, and independent content control.",
    },

    summarySection: {
      label: "Project Summary",
      title: "What this created for the artist.",
    },

    transformation: {
      label: "Project Transformation",
      title: "From social-media-only presence to structured artist platform.",
      beforeTitle: "Before",
      afterTitle: "After",
      before: [
        "The artist had social media profiles but no professional website",
        "Artwork was not centralized in one structured online portfolio",
        "Availability was not clearly shown in a dedicated system",
        "Reservation interest was handled through manual messages",
        "Exhibitions were not managed through a dedicated digital platform",
        "There was no analytics setup to understand visitor behavior",
      ],
      after: [
        "Vlka ART has a professional website and central digital presence",
        "Around 80 artworks are organized in one structured platform",
        "Each artwork can be marked as available, reserved, or sold",
        "Visitors can send reservation inquiries through a clear contact flow",
        "Both the artist and visitor receive automated email confirmations",
        "The artist can manage artworks, availability, exhibitions, and content through an admin panel",
        "Google Analytics tracks website activity and visitor behavior",
      ],
    },

    detailSections: {
      challengeLabel: "Challenge",
      solutionLabel: "Solution",
      componentsLabel: "Platform Components",
    },

    impact: {
      label: "Platform Impact",
      title:
        "How the platform improves presentation, inquiries, and content control.",
      description:
        "The platform gives the artist a professional online presence, organizes artwork and exhibitions, supports reservation inquiries, and makes content management independent through a custom admin panel.",
      items: [
        "Artwork inquiry flow",
        "Reservation request handling",
        "Automated visitor email confirmation",
        "Automated artist email notification",
        "Artwork availability management",
        "Available / reserved / sold status control",
        "Admin-based artwork updates",
        "Exhibition management",
        "Independent content management",
        "Google Analytics tracking",
      ],
    },

    outcomesSection: {
      label: "Outcomes",
      title: "What changed after delivery",
    },

    cta: {
      label: "Next Step",
      title:
        "Need a platform that makes your work easier to present, manage, and grow?",
      description:
        "I design and build practical websites and platforms that improve trust, create clearer customer journeys, and give businesses better control over content, inquiries, and daily work.",
      primaryText: "Build a platform like this",
      secondaryText: "View more case studies",
    },
  },

  {
    slug: "carscout-agent",
    company: "CarScout",
    industry: "Car Sales / Car Rental",
    category: "automation",
    categoryLabel: "Business Automation",
    liveUrl: "",

    projectAccess: {
      type: "private",
      label: "Private Internal Automation",
      description:
        "This is a private operational automation built for internal business use, so there is no public live URL. The preview shows the system interface and how the vehicle scouting workflow is structured.",
    },

    title: "Vehicle Acquisition Automation Agent",

    subtitle:
      "A custom automation system that monitors vehicle marketplaces, applies business-specific filters, imports matching listings, and notifies the team when relevant opportunities appear.",

    result:
      "Built an automated vehicle scouting workflow that reduces repetitive listing research, monitors marketplaces continuously, and helps the business identify matching cars faster with less manual effort.",

    intro:
      "CarScout was built for a car sales and rental business that already had working operations but relied on repetitive manual vehicle scouting. I created a custom automation agent that searches car listing platforms, applies the company’s own filters, imports relevant listings, and notifies the team when a matching opportunity becomes available.",

    whatIDid: [
      "Automated vehicle scouting system",
      "Custom listing scraper",
      "Filter-based vehicle matching logic",
      "Automated data import workflow",
      "Notification automation",
      "Owner analytics and tracking view",
      "Scalable automation workflow setup",
    ],

    stack: ["Python", "n8n", "APIs", "Web Scraping", "Automation Workflows"],

    summary:
      "CarScout turns repetitive vehicle research into a structured automation workflow. Instead of staff repeatedly checking car selling platforms manually, the system monitors listings, applies custom filters, imports matching vehicles, and notifies the team when a relevant opportunity appears. This gives the business faster access to potential deals, improves consistency, and creates a clearer process for vehicle acquisition.",

    challenge:
      "The business was already operating, but vehicle scouting still depended on repeated manual checks. Staff had to search listing platforms, compare vehicles against internal buying or rental criteria, and react quickly when new cars appeared. This created avoidable administrative overhead, slower reaction times, and a higher chance of missing relevant opportunities.",

    solution:
      "I built a custom automation agent that monitors car selling platforms and searches for listings based on the company’s criteria. The business can define and adjust filters inside its system, and the automation checks listings against those filters. When a matching vehicle appears, the system imports the relevant data into the platform and notifies the team. The workflow is designed to run continuously, giving the business a repeatable scouting process without depending on constant manual research.",

    outcome: [
      "Reduced repetitive manual vehicle scouting work",
      "Created a continuous monitoring system for car listings",
      "Allowed the business to define and adjust custom vehicle search filters",
      "Imported matching vehicle listings into the company platform automatically",
      "Notified the team when new relevant opportunities appeared",
      "Improved speed and consistency in identifying matching vehicles",
      "Reduced the risk of missed listings and manual research mistakes",
      "Gave the owner better visibility through tracking and analytics",
      "Created a structured alternative to adding more repetitive manual scouting work",
    ],

    image: "/images/case-studies/carscout-agent.png",

    featuredMetric: "Continuous vehicle opportunity monitoring",

    proof: [
      {
        label: "Monitoring",
        value: "Continuous scouting",
        text: "The system checks vehicle listing platforms instead of relying only on repeated manual staff research.",
      },
      {
        label: "Workflow",
        value: "Filter-based matching",
        text: "The business can define vehicle criteria, and the agent searches for listings that match those conditions.",
      },
      {
        label: "Efficiency",
        value: "Less manual research",
        text: "Repetitive vehicle scouting is handled by automation, reducing the need for constant manual checking and follow-up.",
      },
    ],

    preview: {
      label: "System Preview",
      title:
        "A private automation dashboard showing vehicle matches, search criteria, agent activity, notifications, and scouting analytics.",
    },

    summarySection: {
      label: "Project Summary",
      title: "What this created for the business.",
    },

    transformation: {
      label: "Business Transformation",
      title: "From manual vehicle scouting to automated opportunity detection.",
      beforeTitle: "Before",
      afterTitle: "After",
      before: [
        "Staff manually checked car selling platforms for new listings",
        "Vehicle opportunities had to be compared with business criteria by hand",
        "New listings could be missed if nobody checked at the right time",
        "The process required repetitive staff work every day",
        "The owner had less centralized visibility over scouting activity",
        "Scaling the process would have required more manual labor",
      ],
      after: [
        "The system monitors car listing platforms continuously",
        "Custom filters define what vehicles the business wants to find",
        "Matching listings are imported into the platform automatically",
        "The team receives notifications when relevant cars appear",
        "The owner gets better visibility through tracking and analytics",
        "The process can scale without adding repetitive manual scouting work",
      ],
    },

    detailSections: {
      challengeLabel: "Challenge",
      solutionLabel: "Solution",
      componentsLabel: "Automation Components",
    },

    impact: {
      label: "Automation Impact",
      title: "How the agent reduces repetitive scouting work.",
      description:
        "The automation replaces repeated manual marketplace checks with a system that monitors listings, applies business-specific filters, imports matching vehicles, and alerts the team when relevant opportunities appear.",
      items: [
        "Vehicle marketplace monitoring",
        "Custom filter management",
        "Automated listing checks",
        "Vehicle data extraction",
        "Matching logic",
        "Automated listing import",
        "Team notifications",
        "Owner tracking view",
        "Analytics visibility",
        "Scalable automation workflow",
      ],
    },

    outcomesSection: {
      label: "Outcomes",
      title: "What changed after delivery",
    },

    cta: {
      label: "Next Step",
      title:
        "Need to turn repetitive research into an automated business workflow?",
      description:
        "I build custom automation systems that help businesses reduce repetitive work, improve response speed, lower operational friction, and create clearer workflows around real business processes.",
      primaryText: "Automate a workflow like this",
      secondaryText: "View more case studies",
    },
  },

  {
    slug: "silver-oakstones-member-club-platform",
    company: "Silver Oakstones Member Club Platform",
    industry: "Private Club / Membership Organization",
    category: "system_build",
    categoryLabel: "Workflow Platform",
    liveUrl: "",

    projectAccess: {
      type: "private",
      label: "Private Concept Platform",
      description:
        "This is a private portfolio concept platform built to demonstrate a structured application and candidate review workflow. There is no public live URL, but the preview shows the landing page, guided application flow, candidate grouping logic, and admin review structure.",
    },

    title: "Private Club Application & Candidate Review Platform",

    subtitle:
      "A structured application platform for membership-based organizations, combining a landing page, guided form flow, candidate grouping, admin review, and email follow-up support.",

    result:
      "Built a private member club application concept that turns unstructured inquiries into a guided workflow for collecting applicant information, grouping candidates, and supporting internal review.",

    intro:
      "Silver Oakstones was built as a private platform concept for clubs, communities, and service businesses that need to review applicants before accepting them. Instead of relying on a basic contact form or scattered email communication, the system guides applicants through structured questions and gives staff a clearer way to review, group, and follow up with candidates.",

    whatIDid: [
      "Landing page",
      "Step-by-step application form",
      "Structured applicant questions",
      "Candidate grouping logic",
      "PHP backend handling",
      "JavaScript form logic",
      "Candidate review dashboard",
      "Candidate entry creation after submission",
      "Contact information handling",
      "Email workflow support",
      "Responsive frontend implementation",
    ],

    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "Form Logic",
      "Email Handling",
      "Admin Panel",
      "Responsive Design",
    ],

    summary:
      "Silver Oakstones demonstrates how a basic application or contact process can become a structured business workflow. Applicants move through a guided form instead of submitting unclear messages, their answers are processed through candidate grouping logic, and new entries are created for staff review inside an admin panel. The result is a cleaner application journey, more consistent applicant information, and a stronger foundation for membership-based review workflows.",

    challenge:
      "A basic contact form or email-based application process often creates unstructured information. Applicants may skip important details, write inconsistent answers, or require manual back-and-forth before staff can understand who they are and how they should be reviewed. For a private club or membership organization, this makes candidate review slower, less consistent, and harder to manage.",

    solution:
      "I built a private member club application platform with a landing page, a guided step-by-step form, candidate grouping logic, and an admin review panel. Applicants move through structured questions one step at a time, giving the organization more consistent and useful information. After submission, the system processes the answers, assigns the applicant into a candidate group, creates a new candidate entry, and supports the staff review and email follow-up workflow.",

    outcome: [
      "Turned a basic contact/application idea into a structured candidate workflow",
      "Created a more professional first impression through a clear landing page",
      "Guided applicants through step-by-step questions instead of one generic form",
      "Collected cleaner and more consistent applicant information",
      "Added candidate grouping logic based on submitted answers",
      "Created new candidate entries for staff review after form submission",
      "Built an admin panel for reviewing applicants, groups, and contact details",
      "Supported follow-up through email and contact workflow handling",
      "Created a reusable application workflow concept for clubs, communities, and service businesses",
      "Strengthened the system foundation beyond a static website by combining UI, form logic, backend handling, and admin review",
    ],

    image: "/images/case-studies/silver-oakstones-member-club-platform.png",

    featuredMetric: "Guided application workflow",

    proof: [
      {
        label: "Application Flow",
        value: "Step-by-step form",
        text: "Applicants are guided through structured questions instead of submitting unclear information through a basic contact form.",
      },
      {
        label: "Candidate Logic",
        value: "Automatic grouping",
        text: "Submitted answers are processed and used to assign applicants into candidate groups for cleaner internal review.",
      },
      {
        label: "Admin Review",
        value: "Candidate panel",
        text: "Staff can review applicant details, assigned groups, and contact information from an internal admin panel.",
      },
    ],

    preview: {
      label: "Platform Preview",
      title:
        "A private club application workflow showing a landing page, guided applicant form, candidate grouping logic, admin review, and email follow-up support.",
    },

    summarySection: {
      label: "Project Summary",
      title: "What this created for the application process.",
    },

    transformation: {
      label: "Workflow Transformation",
      title: "From unstructured inquiries to a guided candidate review system.",
      beforeTitle: "Before",
      afterTitle: "After",
      before: [
        "Applicants would submit information through a basic contact form or email",
        "Candidate details could be incomplete, inconsistent, or difficult to compare",
        "Staff would need manual back-and-forth to collect missing information",
        "There was no structured way to group applicants based on their answers",
        "Application review depended on reading unstructured messages manually",
        "Follow-up and contact handling were disconnected from the application flow",
      ],
      after: [
        "Applicants move through a guided step-by-step application form",
        "Structured questions collect more consistent and useful candidate information",
        "Submitted answers are processed by candidate grouping logic",
        "New candidate entries are created for staff review inside the admin panel",
        "Staff can review applicant details, assigned groups, and contact information in one place",
        "The workflow supports cleaner follow-up through email and contact handling",
      ],
    },

    detailSections: {
      challengeLabel: "Challenge",
      solutionLabel: "Solution",
      componentsLabel: "System Components",
    },

    impact: {
      label: "System Impact",
      title: "How the platform improves application review.",
      description:
        "The platform replaces unstructured application messages with a guided workflow that collects better applicant information, groups candidates automatically, and gives staff a clearer review process before follow-up.",
      items: [
        "Landing page",
        "Guided application form",
        "Structured applicant questions",
        "Candidate qualification flow",
        "Candidate grouping logic",
        "Form submission handling",
        "New candidate entry creation",
        "Admin review panel",
        "Contact detail management",
        "Email workflow support",
        "Responsive frontend experience",
        "Private club application workflow",
      ],
    },

    outcomesSection: {
      label: "Outcomes",
      title: "What changed after delivery",
    },

    cta: {
      label: "Next Step",
      title:
        "Need to turn unstructured inquiries into a smarter application workflow?",
      description:
        "I build custom platforms that help clubs, communities, service businesses, and organizations collect better information, qualify applicants, reduce manual review work, and manage follow-up through structured digital systems.",
      primaryText: "Build an application system",
      secondaryText: "View more case studies",
    },
  },

  {
    slug: "client-communication-automation-portal",
    company: "Client Communication Automation Portal",
    industry: "Private Agency Operations / Client Communication",
    category: "automation",
    categoryLabel: "Automation Portal",
    liveUrl: "",

    projectAccess: {
      type: "private",
      label: "Private Internal Automation",
      description:
        "This is a private internal automation portal built for agency operations, so there is no public live URL. The preview shows the structure behind profile management, AI-assisted draft generation, workflow settings, and VM-based automation support.",
    },

    title: "AI-Assisted Client Communication Operations Portal",

    subtitle:
      "A private internal portal that centralizes profile data, communication context, tone settings, AI-assisted response drafts, and VM-based workflow automation.",

    result:
      "Built a private AI-assisted operations portal that centralizes profile management, supports context-aware draft generation, and connects internal settings to a VM-based automation layer.",

    intro:
      "This project was built for a private agency that needed a clearer way to manage multiple client profiles and communication workflows. Instead of relying on scattered context, manual switching, and repeated communication tasks, the portal brings profile information, tone settings, communication rules, AI-assisted drafts, and workflow automation into one internal system.",

    whatIDid: [
      "Secure internal agency login",
      "Multi-profile management portal",
      "Profile information management",
      "Personality and communication settings",
      "AI-assisted response draft generation",
      "Backend workflow logic",
      "Database-backed profile storage",
      "VM-based automation layer",
      "Python and PyWinAuto workflow automation",
      "Windows application automation support",
      "JavaScript frontend interactions",
      "PHP backend implementation",
      "MySQL database structure",
      "Scalable multi-profile system architecture",
    ],

    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
      "Python",
      "PyWinAuto",
      "ChatGPT API",
      "JSON",
      "User Authentication",
      "VM Automation",
      "Windows App Automation",
      "Backend Workflow Logic",
      "Responsive Design",
    ],

    summary:
      "The Client Communication Automation Portal turns a scattered agency workflow into a centralized internal system. Staff can log in, create and manage client profiles, define communication style, store context rules, and generate profile-aware response drafts. The system separates profile data, database logic, AI-assisted draft generation, and VM-based workflow support into one clearer structure, helping the agency manage multiple profiles more consistently while reducing repetitive manual work.",

    challenge:
      "Before the portal, the agency had to manage multiple client profiles across separate tools, manual notes, and disconnected workflows. Staff needed to remember profile context, communication preferences, tone, and operational settings while switching between tools and remote environments. This created repetitive work, inconsistent response style, slower profile setup, scattered information, and a workflow that became harder to scale as more profiles were added.",

    solution:
      "I built a private internal automation portal with secure login, multi-profile management, profile-specific communication settings, AI-assisted response draft generation, and a VM-based automation layer. Staff can create profiles, define personality and tone settings, manage communication context, and use the portal as a control layer for workflow support. The backend stores structured profile data, the AI layer generates context-aware drafts for staff review, and the Python/PyWinAuto automation layer supports interaction with a Windows-based workflow environment.",

    outcome: [
      "Centralized profile information, communication context, and operational settings in one internal portal",
      "Reduced repetitive manual communication work by supporting profile-aware draft generation",
      "Improved consistency across managed profiles with structured personality and tone settings",
      "Created a structured multi-profile system for agency operations",
      "Separated portal logic, database storage, AI-assisted workflows, and VM automation into a clearer architecture",
      "Added secure login and internal access control for staff usage",
      "Built a backend structure for storing and managing profile-specific settings",
      "Connected AI-assisted draft generation with selected profile context and communication rules",
      "Created a VM-based automation layer using Python and PyWinAuto for workflow support",
      "Built a reusable foundation for future internal agency automation tools",
    ],

    image: "/images/case-studies/client-communication-automation-portal.png",

    featuredMetric: "AI-assisted multi-profile workflow",

    proof: [
      {
        label: "Profile Management",
        value: "Centralized portal",
        text: "Staff can manage multiple client profiles, context details, communication preferences, and operational settings from one internal system.",
      },
      {
        label: "AI Support",
        value: "Profile-aware drafts",
        text: "The system supports AI-assisted communication by generating draft responses based on selected profile context and rules for staff review.",
      },
      {
        label: "Automation Layer",
        value: "VM-based workflow",
        text: "A Python and PyWinAuto automation layer supports controlled workflow actions inside a Windows-based environment.",
      },
    ],

    preview: {
      label: "System Preview",
      title:
        "A private internal automation portal showing profile management, communication settings, AI-assisted draft workflows, backend data structure, and VM-based automation support.",
    },

    summarySection: {
      label: "Project Summary",
      title: "What this created for the agency workflow.",
    },

    transformation: {
      label: "Workflow Transformation",
      title:
        "From scattered profile management to a centralized AI-assisted operations portal.",
      beforeTitle: "Before",
      afterTitle: "After",
      before: [
        "Profile information and communication context were scattered across separate tools and manual notes",
        "Staff had to remember personality, tone, preferences, and context for each managed profile",
        "Similar communication tasks were repeated manually across multiple accounts",
        "Response style could become inconsistent between profiles",
        "Profile setup and management became slower as more profiles were added",
        "Staff had to switch between different tools and remote environments without one central control layer",
        "There was no structured system for profile-specific AI-assisted workflow settings",
      ],
      after: [
        "Staff can log into one internal portal to manage multiple profiles",
        "Each profile stores structured information, personality settings, tone, and communication rules",
        "AI-assisted draft generation uses selected profile context to support staff workflows",
        "Profile management becomes more consistent and easier to scale",
        "Backend storage keeps profile data and workflow settings organized",
        "A VM-based automation layer supports controlled workflow execution in a Windows environment",
        "The system creates a reusable foundation for future internal agency automation tools",
      ],
    },

    detailSections: {
      challengeLabel: "Challenge",
      solutionLabel: "Solution",
      componentsLabel: "Automation Components",
    },

    impact: {
      label: "Automation Impact",
      title: "How the portal supports clearer agency operations.",
      description:
        "The system connects profile management, communication context, AI-assisted draft generation, backend data storage, and VM-based workflow support into one structured internal operations portal.",
      items: [
        "Secure agency login",
        "Multi-profile management",
        "Profile information storage",
        "Personality settings",
        "Tone of voice settings",
        "Communication context rules",
        "AI-assisted draft generation",
        "Staff review workflow",
        "Backend profile database",
        "PHP workflow logic",
        "MySQL data structure",
        "JSON-based data handling",
        "Python automation layer",
        "PyWinAuto workflow support",
        "Windows app automation",
        "VM-based operations support",
        "Internal portal interface",
        "Scalable agency workflow foundation",
      ],
    },

    outcomesSection: {
      label: "Outcomes",
      title: "What changed after delivery",
    },

    cta: {
      label: "Next Step",
      title:
        "Need to centralize repetitive client communication workflows?",
      description:
        "I build private internal systems and automation portals that help agencies centralize profile data, reduce repetitive tasks, support staff with AI-assisted workflows, and create clearer operational systems.",
      primaryText: "Build an automation portal",
      secondaryText: "View more case studies",
    },
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
    title: "Why the workflow should be clear before adding AI",
    excerpt:
      "AI helps only when the process underneath it is already understood and structured.",
    readTime: "4 min read",
    body: [
      "Many businesses want to add AI before they have a clear process. That usually makes a messy workflow faster, not better.",
      "The better starting point is simple: map what comes in, who handles it, where decisions happen, where work gets stuck, and what should happen next.",
      "Once the process is clear, AI can support specific steps such as drafting, summarizing, classifying, routing, or checking information before a person reviews it.",
    ],
  },
  {
    slug: "when-to-rebuild-nextjs",
    title: "When a website needs more than a redesign",
    excerpt:
      "A visual redesign is not enough when the website no longer supports how the business works.",
    readTime: "5 min read",
    body: [
      "A rebuild makes sense when the current website is slow, hard to update, unclear for customers, or disconnected from lead handling and internal work.",
      "A better website should explain the offer, capture useful information, support follow-up, and give the business a cleaner foundation for future tools.",
      "The best rebuilds are practical. They improve content structure, customer flow, analytics, maintainability, and the way the business handles inquiries after they arrive.",
    ],
  },
];

export const processSteps = [
  {
    title: "Understand the business",
    description:
      "First I look at the offer, customers, tools, lead flow, admin work, and where the business loses time or clarity.",
  },
  {
    title: "Map the problem",
    description:
      "We separate symptoms from the real bottleneck, then decide what needs to be fixed first.",
  },
  {
    title: "Plan the system",
    description:
      "I define the pages, workflows, dashboard views, automations, integrations, and data flow before building.",
  },
  {
    title: "Build the solution",
    description:
      "I build the website, platform, automation, or internal tool and test the important customer and admin flows.",
  },
  {
    title: "Refine and improve",
    description:
      "After launch, we improve the system from real usage instead of guessing what the business needs next.",
  },
];

export const packages = [
  {
    name: "Business Operating System Build",
    bestFor:
      "For companies that already have customers, leads, tools, and daily operations, but everything feels too manual, scattered, slow, or hard to scale.",
    includes: [
      "Premium website or landing system connected to the business process",
      "Lead capture, qualification, CRM stages, and follow-up logic",
      "Automation workflows for repeated admin, notifications, and handoffs",
      "Internal dashboards, admin views, reporting, and operational visibility",
      "Scalable backend foundation and integrations built around how the company works",
    ],
    subtle:
      "Flagship offer for rebuilding the company's digital foundation into one connected, scale-ready operating system.",
    cta: secondaryCtas.fullSystem,
  },
  {
    name: "Business Automation Systems",
    bestFor:
      "For businesses losing time to repeated admin, slow follow-up, scattered tools, manual CRM updates, reporting, or client communication.",
    includes: [
      "Workflow review and bottleneck mapping",
      "CRM, email, form, dashboard, and notification automations",
      "Internal tools for admin, owners, teams, or client management",
      "Lead and client workflows that reduce repeated manual work",
      "AI-supported steps only where they make the process more useful",
    ],
    subtle:
      "Built to reduce repeated work and make daily operations clearer.",
    cta: secondaryCtas.automation,
  },
  {
    name: "Website / Landing Page",
    bestFor:
      "For businesses that need a clean website or landing page for trust, promotion, lead generation, campaigns, portfolio presentation, or a stronger online presence.",
    includes: [
      "Clear website or landing page structure around your offer",
      "Responsive design focused on trust and easy contact",
      "Copy, sections, and calls-to-action that business owners understand",
      "Inquiry form, booking request, or simple lead intake flow",
      "Performance, SEO basics, analytics, and maintainable setup",
    ],
    subtle:
      "Best when the main need is a stronger public presence, not a full internal system.",
    cta: secondaryCtas.website,
  },
  {
    name: "Redesign / Platform Remake",
    bestFor:
      "For businesses with an outdated website or existing platform that looks weak, is hard to manage, or no longer supports how the company works.",
    includes: [
      "Review of the current website, platform, content, and workflow",
      "Cleaner structure, stronger messaging, and easier user journeys",
      "Rebuild or remake of outdated frontend and backend pieces",
      "Improved lead intake, admin flow, integrations, or tracking where needed",
      "A practical foundation that can grow into automation or a platform",
    ],
    subtle:
      "Not just a visual redesign: the goal is to make the old setup more useful for the business.",
    cta: secondaryCtas.rebuild,
  },
];

export const faqItems = [
  {
    question: "Do I need a full platform or just a website?",
    answer:
      "Not always. If the main problem is trust, presentation, or lead generation, a website or landing page may be enough. If the problem continues after the inquiry arrives, a platform or automation system may be the better fit.",
  },
  {
    question: "Can you improve an existing website or platform?",
    answer:
      "Yes. If the current setup has useful parts, I can redesign, rebuild, simplify, or extend it instead of starting from zero.",
  },
  {
    question: "Can you automate my current workflow?",
    answer:
      "Usually, yes. The first step is to understand what is repeated manually, which tools are involved, what information moves between them, and where mistakes or delays happen.",
  },
  {
    question: "Do I need to know exactly what I need before contacting you?",
    answer:
      "No. Many clients only know that the current process is messy or too manual. I help map the problem first, then define the right website, platform, automation, or smaller first step.",
  },
  {
    question: "Do you work directly with business owners?",
    answer:
      "Yes. You work directly with me. There are no account managers or agency layers between the business problem and the person building the system.",
  },
  {
    question: "Can this start small and grow later?",
    answer:
      "Yes. A project can start with a website, an audit, one workflow automation, or one dashboard. The important part is building the first step in a way that does not block future improvements.",
  },
  {
    question: "What makes your approach different?",
    answer:
      "I do not only ask what pages you want. I look at how the business works, where time is wasted, where leads get lost, and what system would make daily work easier.",
  },
];
