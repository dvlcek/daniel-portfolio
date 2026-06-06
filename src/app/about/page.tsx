import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About Daniel Vlcek | Business Systems Developer Vienna",
  description:
    "Learn how Daniel Vlcek works directly with business owners to build websites, platforms, automations, dashboards, and practical business systems.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Daniel Vlcek | Business Systems Developer",
    description:
      "A direct technical partner for companies that need clearer websites, workflows, internal tools, and automation.",
    url: "/about",
    type: "website",
  },
};

const businessPrinciples = [
  {
    title: "Workflow before features",
    text: "I do not start with a random feature list. I first look at how leads, clients, tools, and admin work move through the business.",
  },
  {
    title: "Useful before impressive",
    text: "A system should make daily work easier, reduce manual steps, improve follow-up, or help the business manage information more clearly.",
  },
  {
    title: "Direct communication",
    text: "You work directly with me, not through account managers. That keeps decisions close to the real business problem.",
  },
];

const capabilities = [
  "Websites and landing pages",
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
  "I ask business questions before writing code",
  "I question what is actually needed before building",
  "I explain technical decisions in practical language",
  "I keep the build maintainable so it can improve later",
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
              I build practical business systems, not just pages.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-white/62 md:text-lg">
              I work directly with business owners to understand how the
              company actually works, where time is wasted, where leads get
              lost, and what kind of website, platform, dashboard, or
              automation would make daily work easier.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-blue-vivid px-5 py-3 text-sm font-medium text-white transition duration-300 hover:bg-brand-blue"
              >
                Let&apos;s look at your current setup
                <ArrowUpRight size={15} />
              </Link>

              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-2xl border border-white/[0.10] bg-white/[0.018] px-5 py-3 text-sm font-medium text-white/72 transition duration-300 hover:border-brand-blue/25 hover:text-white"
              >
                View real projects
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
                Business systems developer
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
              Technical execution with a practical business mindset.
            </h2>
          </div>

          <div>
            <p className="max-w-4xl text-lg leading-9 text-white/64 md:text-xl">
              A website, dashboard, CRM flow, or automation should never exist
              only because it looks good or because it is technically possible.
              It should create clarity, reduce manual work, improve follow-up,
              or make the business easier to manage.
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
              I care about the business behind the build.
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-white/55 md:text-base">
              The strongest work comes from understanding the company first,
              then creating the right technical structure around how it sells,
              serves clients, and handles daily work.
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
              Practical systems for websites, workflows, and operations.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/56 md:text-base">
              The work can start with a website, but the real value appears
              when the public experience supports lead intake, follow-up,
              dashboards, payments, and internal admin work.
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
              A direct partner, not a done-and-gone vendor.
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
                Want to make your website, tools, or workflows easier to run?
              </h2>

              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/55 md:text-base">
                Start by showing me your current setup. We will look at what is
                messy, manual, or unclear, then define the most realistic next
                step.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-blue-vivid px-5 py-3 text-sm font-medium text-white transition duration-300 hover:bg-brand-blue"
            >
              Tell me what you want to improve
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}
