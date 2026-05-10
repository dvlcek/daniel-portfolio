import Link from "next/link";
import { Container } from "@/components/ui/Container";

const principles = [
  "Systems over surface-level fixes",
  "Business outcome before unnecessary features",
  "Clean structure and maintainable architecture",
  "Automation where it creates real value",
  "Clear communication and ownership",
];

const proofStats = [
  {
    value: "0",
    label: "manual admin staff needed",
  },
  {
    value: "100%",
    label: "core rental cycle automated",
  },
  {
    value: "24/7",
    label: "reservation and payment flow",
  },
];

const systemNodes = [
  "Website",
  "Reservations",
  "Stripe",
  "Emails",
  "Admin alerts",
  "Customer flow",
];

const helpBlocks = [
  {
    title: "Business platforms",
    text: "Full-stack platforms built around real operations, customers, bookings, payments, workflows, and growth.",
    benefit: "Turns business processes into one structured digital system.",
  },
  {
    title: "Workflow automation",
    text: "Automations for reservations, emails, notifications, lead handling, payment events, and repetitive admin tasks.",
    benefit: "Saves time, reduces mistakes, and removes unnecessary manual work.",
  },
  {
    title: "Website rebuilds",
    text: "Outdated websites rebuilt into stronger digital assets with better structure, performance, trust, and conversion flow.",
    benefit: "Makes the business look more professional and easier to buy from.",
  },
  {
    title: "Internal dashboards",
    text: "Admin panels and dashboards for managing leads, customers, bookings, content, data, and business operations.",
    benefit: "Gives the team more control and less dependency on scattered tools.",
  },
  {
    title: "API integrations",
    text: "Connections between CRMs, payment systems, booking tools, email platforms, databases, and external services.",
    benefit: "Makes tools work together instead of creating extra admin work.",
  },
  {
    title: "Digital infrastructure",
    text: "Clean technical foundations prepared for future features, automations, integrations, and scaling.",
    benefit: "Prevents messy short-term fixes and supports long-term growth.",
  },
];

const processSteps = [
  {
    title: "Understand",
    text: "I first understand the business model, workflow, users, bottlenecks, tools, and real operational problems.",
  },
  {
    title: "Structure",
    text: "Then I define what should be simplified, automated, connected, redesigned, or rebuilt.",
  },
  {
    title: "Build",
    text: "I develop the website, platform, automation, dashboard, or integration with clean and scalable structure.",
  },
  {
    title: "Improve",
    text: "After launch, the focus is reliability, maintainability, and making the system useful long term.",
  },
];

const bestFitProjects = [
  "Local businesses with too much manual admin work",
  "Companies that need booking, payment, or reservation systems",
  "Businesses using disconnected tools that should work together",
  "Outdated websites that should become stronger business assets",
  "Teams that need dashboards, admin panels, or internal tools",
  "Businesses that want to scale without hiring admin staff too early",
];

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/40">
      {children}
    </p>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-relaxed text-white/65 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function SystemVisual() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-white/[0.04] p-5 ring-1 ring-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.16),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_28%)]" />
      <div className="relative rounded-[1.5rem] bg-black/30 p-5 ring-1 ring-white/10">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-white/35">
              System layer
            </p>
            <h3 className="mt-1 text-lg font-semibold text-white">
              Automated business flow
            </h3>
          </div>

          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/60" />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {systemNodes.map((node, index) => (
            <div
              key={node}
              className="rounded-2xl bg-white/[0.06] p-4 ring-1 ring-white/10"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-semibold text-black">
                  {index + 1}
                </span>
                <span className="text-sm font-medium text-white">{node}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-2xl bg-white p-5 text-black">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/50">
            Result
          </p>
          <p className="mt-2 text-lg font-semibold">
            A cleaner business system with less manual work and faster
            operations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/[0.06] blur-3xl" />
        <div className="absolute right-0 top-52 h-[360px] w-[360px] rounded-full bg-white/[0.04] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_22%,transparent_78%,rgba(255,255,255,0.035))]" />
      </div>

      <Container>
        <section className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div>
            <Eyebrow>About Daniel Vlcek</Eyebrow>

            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              I build digital systems that make businesses easier to run.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              I am a Business Platform Builder, Full-Stack Developer, and
              Automation Specialist. I help local businesses replace manual
              work, outdated websites, and disconnected tools with clean
              platforms, automations, and digital infrastructure built for
              speed, structure, and growth.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Book a Strategy Call
              </Link>

              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Case Studies
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {proofStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white/[0.04] p-4 ring-1 ring-white/10"
                >
                  <p className="text-2xl font-semibold tracking-tight text-white">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-white/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <SystemVisual />
        </section>

        <section className="mt-16 grid gap-4 md:mt-24 md:grid-cols-3">
          <article className="rounded-[2rem] bg-white/[0.04] p-7 ring-1 ring-white/10 md:col-span-2">
            <Eyebrow>How I think</Eyebrow>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Development is the tool. Better business operations are the goal.
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-relaxed text-white/70 md:text-base">
              <p>
                I do not see websites, platforms, or automations as isolated
                technical tasks. I see them as business systems that should save
                time, create structure, reduce manual work, and help the company
                operate with more control.
              </p>

              <p>
                Before building, I look at what actually slows the business
                down: repeated admin tasks, disconnected tools, unclear
                workflows, slow response times, weak conversion flows, or
                outdated digital infrastructure.
              </p>

              <p>
                My focus is simple: understand the business problem, design the
                right structure, build cleanly, and leave the client with a
                system that is useful, reliable, and easier to manage.
              </p>
            </div>
          </article>

          <article className="rounded-[2rem] bg-white/[0.04] p-7 ring-1 ring-white/10">
            <Eyebrow>Principles</Eyebrow>

            <h2 className="mt-3 text-lg font-semibold text-white">
              Built with ownership, clarity, and long-term structure.
            </h2>

            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/70">
              {principles.map((principle) => (
                <li key={principle} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-4 grid gap-4 md:grid-cols-3">
          <article className="relative overflow-hidden rounded-[2rem] bg-white p-7 text-black md:col-span-2">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-black/10 blur-3xl" />

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/45">
                Strongest proof
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                Fully automated storage rental platform built from zero.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-black/70 md:text-base">
                My strongest real client project is a storage rental platform
                built from zero into a functional business system. The full core
                cycle is automated: storage reservation, customer flow, Stripe
                webhooks, emails, notifications, and admin updates.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/70 md:text-base">
                The result is a business that can handle reservations and
                operational communication without needing admin staff for the
                core process.
              </p>
            </div>
          </article>

          <article className="rounded-[2rem] bg-white/[0.04] p-7 ring-1 ring-white/10">
            <Eyebrow>Best fit</Eyebrow>

            <h3 className="mt-3 text-lg font-semibold text-white">
              Local businesses that want to scale faster.
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-white/70">
              I work best with businesses that already have real operations, but
              too much of their daily work still depends on manual handling,
              slow processes, or disconnected tools.
            </p>
          </article>
        </section>

        <section className="mt-16 md:mt-24">
          <SectionHeading
            eyebrow="Who I am"
            title="I am not only interested in code. I am interested in how a business works — and how it can work better."
            description="I like when things are clean, fast, structured, and easy to understand. When I see a slow process, repeated manual work, or a system that creates unnecessary friction, my mind naturally starts looking for a better way to build it."
          />

          <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
            <article className="rounded-[2rem] bg-white/[0.04] p-7 ring-1 ring-white/10">
              <h3 className="text-lg font-semibold text-white">
                Critical thinking before execution.
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-white/70">
                I question what is really needed, what can be simplified, what
                can be automated, and what should be built in a way that
                supports the business long term.
              </p>
            </article>

            <article className="rounded-[2rem] bg-white/[0.04] p-7 ring-1 ring-white/10">
              <h3 className="text-lg font-semibold text-white">
                Clean systems, not random features.
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-white/70">
                I enjoy working on business platforms, automations, internal
                tools, and digital infrastructure because these projects can
                improve how a company handles leads, bookings, payments,
                communication, admin work, and customer experience.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-16 md:mt-24">
          <SectionHeading
            eyebrow="How I help"
            title="I build the systems behind smoother operations."
            description="My work is best for businesses that need more than a simple website. I help create the technical structure behind better workflows, faster operations, and more scalable growth."
          />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {helpBlocks.map((block) => (
              <article
                key={block.title}
                className="group rounded-[2rem] bg-white/[0.04] p-7 ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <div className="mb-6 h-10 w-10 rounded-2xl bg-white/10 ring-1 ring-white/10 transition group-hover:bg-white group-hover:text-black" />

                <h3 className="text-lg font-semibold text-white">
                  {block.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-white/65">
                  {block.text}
                </p>

                <p className="mt-5 text-sm font-medium leading-relaxed text-white">
                  {block.benefit}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-4 md:mt-24 md:grid-cols-3">
          <article className="rounded-[2rem] bg-white/[0.04] p-7 ring-1 ring-white/10 md:col-span-2">
            <Eyebrow>Business decision-making</Eyebrow>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              I do not build features just because they are possible.
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-relaxed text-white/70 md:text-base">
              <p>
                Every feature should have a reason. Before I build something, I
                think about what it should improve for the business.
              </p>

              <p>
                Will it save time? Will it reduce manual work? Will it improve
                the customer experience? Will it make the system easier to
                manage? Will it support future growth?
              </p>

              <p>
                This is how I make technical decisions. I focus on clarity,
                efficiency, scalability, and practical value — not on adding
                complexity that the business does not need.
              </p>
            </div>
          </article>

          <article className="rounded-[2rem] bg-white/[0.04] p-7 ring-1 ring-white/10">
            <Eyebrow>Best for</Eyebrow>

            <h3 className="mt-3 text-lg font-semibold text-white">
              Businesses ready to remove operational friction.
            </h3>

            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/70">
              {bestFitProjects.map((project) => (
                <li key={project} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                  <span>{project}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-16 md:mt-24">
          <SectionHeading
            eyebrow="Process"
            title="My process starts with understanding the business behind the project."
            description="I work best when I can understand the real workflow first, then build the right technical structure around it."
          />

          <div className="grid gap-4 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[2rem] bg-white/[0.04] p-7 ring-1 ring-white/10"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-semibold text-black">
                  {index + 1}
                </div>

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-white/65">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 md:mt-24">
          <article className="overflow-hidden rounded-[2rem] bg-white/[0.04] ring-1 ring-white/10">
            <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
              <div className="p-7 md:p-10">
                <Eyebrow>Why this matters to me</Eyebrow>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-4xl">
                  I like turning complicated operations into simple, useful
                  systems.
                </h2>

                <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/70 md:text-base">
                  <p>
                    For me, this work is more than a technical hobby. I enjoy
                    improving how businesses work. I like finding cleaner
                    structures, faster processes, and better ways to connect the
                    parts of a company that should already work together.
                  </p>

                  <p>
                    My strength is seeing the bigger picture and the details at
                    the same time. I can look at a workflow, question what is
                    slowing it down, and suggest a more efficient way to build
                    it.
                  </p>

                  <p>
                    That mix of technical execution, critical thinking, and
                    business understanding is what I bring into every serious
                    project.
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 bg-black/20 p-7 md:border-l md:border-t-0 md:p-10">
                <div className="rounded-[1.5rem] bg-white p-6 text-black">
                  <p className="text-sm font-semibold">
                    The goal is not to build more software.
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-black/70">
                    The goal is to build the right system — one that saves time,
                    reduces confusion, improves the customer experience, and
                    helps the business operate with more confidence.
                  </p>
                </div>

                <div className="mt-4 rounded-[1.5rem] bg-white/[0.05] p-6 ring-1 ring-white/10">
                  <p className="text-sm font-semibold text-white">
                    One technical partner. Direct ownership. Business-first
                    thinking.
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    I am not trying to look like a huge agency. I work directly
                    with businesses as a technical partner who can understand
                    the problem, make smart decisions, and build the system
                    properly.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="mt-16 md:mt-24">
          <article className="relative overflow-hidden rounded-[2rem] bg-white p-7 text-black md:p-10">
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-black/10 blur-3xl" />

            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/45">
                  Work with me
                </p>

                <h2 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight md:text-4xl">
                  If your business needs more than just a website, let&apos;s
                  build the system behind it.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/70 md:text-base">
                  Whether you need a platform, website rebuild, internal tool,
                  booking system, payment flow, automation, or API integration,
                  I can help you create a digital system that is easier to
                  manage and built for growth.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/85"
                >
                  Book a Strategy Call
                </Link>

                <Link
                  href="/work"
                  className="inline-flex items-center justify-center rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-black transition hover:bg-black/5"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </article>
        </section>
      </Container>
    </main>
  );
}