"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useStagger } from "@/components/animations/useStagger";

const steps = [
  { t: "System Audit", d: "Identify bottlenecks, map workflows, define outcomes." },
  { t: "Architecture", d: "Design scalable structure, integrations, and interfaces." },
  { t: "Build & Integration", d: "Implement fast, clean code with reliable automation." },
  { t: "Optimize & Scale", d: "Measure, iterate, harden, and expand the system." },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  useStagger(ref, ".step", { y: 16, stagger: 0.08 });

  return (
    <section id="process" className="border-y border-white/5 py-20 md:py-28">
      <Container>
        <div ref={ref}>
          <SectionTitle
            eyebrow="Process"
            title="Structured. Technical. Efficient."
            desc="No chaos, no guesswork — engineered execution from audit to scale."
          />

          <div className="grid gap-4 md:grid-cols-4">
            {steps.map((s, idx) => (
              <div
                key={s.t}
                className="step rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Step {idx + 1}
                </p>
                <p className="mt-3 text-base font-semibold text-white">{s.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}