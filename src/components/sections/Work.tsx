"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useStagger } from "@/components/animations/useStagger";
import { Button } from "@/components/ui/Button";

const work = [
  {
    title: "Automation: Lead → CRM → Follow-up",
    problem: "Leads were handled manually across tools.",
    solution: "Automated routing, enrichment, notifications, and sequences.",
    stack: "APIs • Webhooks • Node • CRM",
    outcome: "Faster response times, fewer dropped leads.",
  },
  {
    title: "Modern Rebuild: High-Conversion Website",
    problem: "Old site was slow and unclear.",
    solution: "Next.js rebuild with premium UI + performance focus.",
    stack: "Next.js • TypeScript • Tailwind • GSAP",
    outcome: "Higher trust, better conversion path clarity.",
  },
];

export function Work() {
  const ref = useRef<HTMLDivElement>(null);
  useStagger(ref, ".wrk", { y: 20, stagger: 0.08 });

  return (
    <section id="work" className="py-20 md:py-28">
      <Container>
        <div ref={ref}>
          <SectionTitle
            eyebrow="Selected Work"
            title="Systems That Deliver Measurable Impact"
            desc="Show transformation: problem → solution → outcome. Keep it business-first."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {work.map((w) => (
              <article
                key={w.title}
                className="wrk rounded-2xl bg-white/5 p-7 ring-1 ring-white/10"
              >
                <h3 className="text-lg font-semibold text-white">{w.title}</h3>

                <div className="mt-5 space-y-3 text-sm text-white/70">
                  <p><span className="text-white/50">Problem:</span> {w.problem}</p>
                  <p><span className="text-white/50">Solution:</span> {w.solution}</p>
                  <p><span className="text-white/50">Stack:</span> {w.stack}</p>
                  <p><span className="text-white/50">Outcome:</span> {w.outcome}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <Button href="#contact" variant="secondary">
              Discuss Your Project
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}