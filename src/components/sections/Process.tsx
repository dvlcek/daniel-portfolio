"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useStagger } from "@/components/animations/useStagger";
import { processSteps } from "@/lib/siteContent";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  useStagger(ref, ".step", { y: 24, stagger: 0.1 });

  return (
    <section id="process" className="py-20 md:py-32">
      <Container>
        <div ref={ref}>
          <SectionTitle
            eyebrow="Process"
            title="A structured process from strategy to launch."
            desc="Clear scope, clean execution, and a system you can actually use after handover."
          />

          <div className="relative mt-16">
            {/* Mobile timeline line */}
            <div className="absolute left-5 top-0 h-full w-px bg-white/10 md:hidden" />

            {/* Desktop timeline line */}
            <div className="absolute left-0 top-8 hidden h-px w-full bg-white/10 md:block" />

            <div className="grid gap-12 md:grid-cols-4 md:gap-8">
              {processSteps.map((s, idx) => (
                <div key={s.title} className="step relative">
                  {/* Node + line interaction */}
                  <div className="relative flex items-start gap-5 md:block">
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-black text-sm font-medium text-white shadow-[0_0_0_8px_rgba(0,0,0,1)] md:mx-auto">
                      {idx + 1}
                    </div>

                    <div className="min-w-0 md:mt-8 md:text-center">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-white/35">
                        Step {idx + 1}
                      </p>

                      <h3 className="mt-3 text-lg font-semibold tracking-tight text-white md:text-xl">
                        {s.title}
                      </h3>

                      <p className="mt-3 max-w-[28ch] text-sm leading-relaxed text-white/60 md:mx-auto">
                        {s.description}
                      </p>
                    </div>
                  </div>

                  {/* Optional connector accent for desktop except last */}
                  {idx < processSteps.length - 1 && (
                    <div className="absolute left-[2.5rem] top-5 h-px w-[calc(100%-2.5rem)] bg-gradient-to-r from-white/20 to-white/0 md:hidden" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}