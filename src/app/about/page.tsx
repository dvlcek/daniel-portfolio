import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About Daniel Vlcek | Software Developer Vienna",
  description:
    "Learn how Daniel Vlcek combines software development, automation, and business thinking to build websites, dashboards, CRM workflows, and custom business systems.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Daniel Vlcek | Software Developer & Automation Architect",
    description:
      "A technical business partner for companies that need better websites, lead flow, internal tools, and automation.",
    url: "/about",
    type: "website",
  },
};

const businessPrinciples = [
  {
    title: "Every business is different",
    text: "I do not force the same solution on every company. I first look at the offer, customers, tools, handoffs, and where friction appears.",
  },
  {
    title: "Business value before features",
    text: "A feature only makes sense if it improves lead flow, saves time, supports delivery, or makes the customer experience stronger.",
  },
  {
    title: "Long-term structure",
    text: "The goal is not a quick one-time delivery. The goal is a clean digital foundation the team can keep using and improving.",
  },
];

const capabilities = [
  "Premium websites",
  "Website and platform rebuilds",
  "Lead intake flows",
  "CRM pipelines",
  "Internal dashboards",
  "Client portals",
  "Booking and payment flows",
  "Business automation",
  "API integrations",
];

const partnerValues = [
  "I think about the offer and customer journey before the interface",
  "I question what is really needed before building",
  "I explain technical decisions in business language",
  "I keep the build maintainable so it can improve after launch",
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-site-bg py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand-blue/[0.07] blur-3xl" />
        <div className="absolute -right-44 top-[34rem] h-[34rem] w-[34rem] rounded-full bg-brand-blue-deep/20 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-96 bg-linear-to-t from-site-bg-deep/70 to-transparent" />
      </div>

      <Container className="relative z-10 max-w-7xl">
        {/* Hero */}
        <section className="grid gap-10 border-b border-white/[0.08] pb-14 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-brand-blue md:text-sm">
              About Daniel Vlcek
            </p>

            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.05]">
              Not just a developer. A technical partner for websites, operations, and growth.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-white/62 md:text-lg">
              I combine software development, automation, and entrepreneurial
              thinking to help companies make better digital decisions. The
              focus is not only to ship a finished project, but to improve how
              the website, lead flow, tools, and internal operations work
              together.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-blue-vivid px-5 py-3 text-sm font-medium text-white transition duration-300 hover:bg-brand-blue"
              >
                Book a Strategy Call
                <ArrowUpRight size={15} />
              </Link>

              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-2xl border border-white/[0.10] bg-white/[0.018] px-5 py-3 text-sm font-medium text-white/72 transition duration-300 hover:border-brand-blue/25 hover:text-white"
              >
                View selected work
              </Link>
            </div>
          </div>

          {/* Personal image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.022] p-3 backdrop-blur-xl">
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-brand-blue-soft/60 to-transparent" />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-site-bg-deep">
                <Image
                  src="/images/daniel-vlcek.jpg"
                  alt="Daniel Vlcek"
                  fill
                  priority
                  className="object-cover object-[75%_center]"
                />
              </div>
            </div>

            <div className="mt-4 rounded-3xl border border-white/[0.08] bg-white/[0.018] p-5 backdrop-blur-xl">
              <p className="text-sm font-semibold text-white">Daniel Vlcek</p>

              <p className="mt-1 text-sm text-white/48">
                Software Developer & Automation Architect
              </p>
            </div>
          </div>
        </section>

        {/* Positioning */}
        <section className="grid gap-8 border-b border-white/[0.08] py-14 lg:grid-cols-[0.42fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-brand-blue">
              Positioning
            </p>

            <h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Technical execution with a business owner&apos;s mindset.
            </h2>
          </div>

          <div>
            <p className="max-w-4xl text-lg leading-9 text-white/64 md:text-xl">
              A website, dashboard, CRM flow, or automation should never exist
              only because it looks good or because it is technically possible.
              It should create clarity, save time, improve customer flow,
              support the team, or make growth easier to handle.
            </p>
          </div>
        </section>

        {/* Business principles */}
        <section className="py-14">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.28em] text-brand-blue">
              How I think
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              I value the business behind the build.
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-white/55 md:text-base">
              The strongest results come from understanding the company first,
              then creating the right technical structure around how it sells,
              serves customers, and handles work.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {businessPrinciples.map((item, index) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/[0.08] bg-white/[0.022] p-6 transition-[background-color,border-color] duration-300 hover:border-brand-blue/20 hover:bg-white/[0.032]"
              >
                <p className="font-mono text-xs text-brand-blue-light">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-5 text-lg font-semibold tracking-tight text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-white/56">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section className="grid gap-6 border-y border-white/[0.08] py-14 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-brand-blue">
              What I create
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Practical digital infrastructure for modern companies.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/56 md:text-base">
              The work can start with a website, but the real value appears
              when the public experience connects to lead intake, CRM follow-up,
              dashboards, payments, and internal admin tools.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.018] p-4"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-brand-blue/25 bg-brand-blue/10 text-brand-blue-light">
                  <Check size={13} />
                </span>

                <span className="text-sm text-white/62">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Partner section */}
        <section className="grid gap-8 py-14 lg:grid-cols-[0.42fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-brand-blue">
              Working together
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              A partner mindset, not a done-and-gone delivery.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {partnerValues.map((item) => (
              <div key={item} className="border-t border-white/[0.08] pt-4">
                <p className="text-sm leading-relaxed text-white/58">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-y border-white/[0.08] py-10 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-brand-blue">
                Start with clarity
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Want to make your website, leads, and operations work better
                together?
              </h2>

              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/55 md:text-base">
                Start with a strategy call. We will look at your current setup,
                identify the highest-leverage bottleneck, and define the most
                realistic next step.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-blue-vivid px-5 py-3 text-sm font-medium text-white transition duration-300 hover:bg-brand-blue"
            >
              Book a Strategy Call
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}
