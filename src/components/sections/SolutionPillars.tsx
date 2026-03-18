"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useStagger } from "@/components/animations/useStagger";
import { Button } from "@/components/ui/Button";

const pillars = [
  {
    title: "Web Platforms",
    description:
      "Custom websites, web applications, and webshops built to support growth, conversion, and long-term maintainability.",
  },
  {
    title: "Automation Systems",
    description:
      "Workflows and connected systems that reduce manual work, improve speed, and make operations more reliable.",
  },
  {
    title: "Rebuilds & Optimization",
    description:
      "For businesses that already have a website or platform but need a stronger structure, better performance, and more capable systems.",
  },
];

export function SolutionPillars() {
  const ref = useRef<HTMLDivElement>(null);
  useStagger(ref, ".pillar-card", { y: 18, stagger: 0.08 });

  return (
    <section className="py-20 md:py-28">
      <Container>
        <div ref={ref}>
          <SectionTitle
            eyebrow="What I build"
            title="I build the front-end platform and the operational system behind it."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="pillar-card rounded-2xl bg-white/3 backdrop-blur-sm p-7 ring-1 ring-white/10">
                <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{pillar.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <Button href="/work" variant="secondary">See how this looks in real projects</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
