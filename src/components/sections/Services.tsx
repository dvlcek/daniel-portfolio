"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useStagger } from "@/components/animations/useStagger";

const services = [
  {
    pillar: "Automation & AI Systems",
    items: [
      "CRM & lead automation",
      "Internal tools & dashboards",
      "Workflow optimization",
      "AI-assisted operations",
    ],
    note: "Reduce manual work. Increase operational speed.",
  },
  {
    pillar: "Modern Web Engineering",
    items: [
      "Next.js applications",
      "High-performance company sites",
      "Full redesign & rebuild",
      "Conversion-focused architecture",
    ],
    note: "Built for authority, speed, and scale.",
  },
];

export function Services() {
  const ref = useRef<HTMLDivElement>(null);
  useStagger(ref, ".svc", { y: 18, stagger: 0.08 });

  return (
    <section id="services" className="border-y border-white/5 py-20 md:py-28">
      <Container>
        <div ref={ref}>
          <SectionTitle
            eyebrow="Services"
            title="Two Pillars. One Outcome: Speed."
            desc="Clear offer structure for companies that want efficiency and a modern presence."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.pillar}
                className="svc rounded-2xl bg-white/5 p-7 ring-1 ring-white/10"
              >
                <p className="text-lg font-semibold text-white">{s.pillar}</p>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {s.items.map((i) => (
                    <li key={i}>• {i}</li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-white/55">{s.note}</p>
              </div>
            ))}
          </div>
        <div className="mt-6 rounded-xl bg-black/20 p-4 ring-1 ring-white/10">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                Typical Stack
            </p>
            <p className="mt-2 text-sm text-white/70">
                Next.js (App Router) • TypeScript • Tailwind • GSAP • API Integrations • Performance Optimization
            </p>
        </div>
        </div>
      </Container>
    </section>
  );
}