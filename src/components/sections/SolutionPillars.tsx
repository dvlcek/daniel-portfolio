"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useStagger } from "@/components/animations/useStagger";
import { Button } from "@/components/ui/Button";

const pillars = [
  {
    number: "01",
    title: "Web Platforms",
    description:
      "Websites, portals, and digital platforms designed to build trust, improve conversion, and support business growth.",
    // button: {
    //   label: "See examples of this",
    //   href: "/work#web-platforms",
    // },
  },
  {
    number: "02",
    title: "Operational Automation",
    description:
      "Connected workflows and systems that reduce manual work, increase speed, and make daily operations more reliable.",
    // button: {
    //   label: "See examples of this",
    //   href: "/work#automation",
    // },
  },
  {
    number: "03",
    title: "Rebuilds & Optimization",
    description:
      "For businesses with an existing website or platform that needs better structure, stronger performance, and more useful underlying systems.",
  },
];

export function SolutionPillars() {
  const ref = useRef<HTMLDivElement>(null);
  useStagger(ref, ".pillar-card", { y: 18, stagger: 0.08 });

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/4 h-[320px] w-[320px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute right-0 top-0 h-[360px] w-[360px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
      </div>

      <Container>
        <div ref={ref} className="relative z-10">
          <SectionTitle
            eyebrow="How I solve it"
            title="I build the platform your clients see and the system your business runs on."
            desc="The goal is not just a better-looking website. It is a stronger system that helps the business operate faster, win more trust, and scale with less friction."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="pillar-card group relative overflow-hidden rounded-3xl border border-white/5 bg-white/2 p-7 backdrop-blur-l transition duration-300 hover:-translate-y-1 hover:border-white/10 hover:bg-white/5 md:p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-80" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                      {pillar.number}
                    </span>
                    <div className="h-px w-14 bg-white/10 transition-all duration-300 group-hover:w-50 group-hover:bg-white/20" />
                  </div>

                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-[15px]">
                    {pillar.description}
                  </p>

                  {/* <div className="mt-8 pt-6">
                    {pillar.button && (
                      <Button
                        href={pillar.button.href}
                        className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/60"
                      >
                        {pillar.button.label}
                      </Button>
                    )}
                  </div> */}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start gap-4 md:mt-12 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
              Each pillar is designed to strengthen both the customer-facing experience and the internal infrastructure behind it.
            </p>

            <Button href="/work" variant="primary">
              See how this looks in real projects
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}