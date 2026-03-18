"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useStagger } from "@/components/animations/useStagger";
import { processSteps } from "@/lib/siteContent";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  useStagger(ref, ".step", { y: 16, stagger: 0.08 });

  return (
    <section id="process" className=" py-20 md:py-28">
      <Container>
        <div ref={ref}>
          <SectionTitle
            eyebrow="Process"
            title="A structured process from strategy to launch."
            desc="Clear scope, clean execution, and a system you can actually use after handover."
          />

          <div className="grid gap-4 md:grid-cols-4">
            {processSteps.map((s, idx) => (
              <div
                key={s.title}
                className="step rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Step {idx + 1}
                </p>
                <p className="mt-3 text-base font-semibold text-white">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
