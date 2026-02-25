"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useStagger } from "@/components/animations/useStagger";
import { Button } from "@/components/ui/Button";

const pillars = [
  {
    title: "Automation Systems",
    description:
      "Reduce manual work with workflows that connect your tools, standardize operations, and trigger actions automatically.",
  },
  {
    title: "Modern Web Builds",
    description:
      "High-performing Next.js sites built to convert, load fast, and stay maintainable.",
  },
  {
    title: "Full Redesigns and Rebuilds",
    description:
      "When you've outgrown your current stack: redesign the experience, rebuild the architecture, and ship a scalable foundation.",
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
            title="Automation + modern web builds, engineered as one system."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="pillar-card rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
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
