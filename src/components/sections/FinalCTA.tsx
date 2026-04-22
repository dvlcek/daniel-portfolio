"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useReveal } from "@/components/animations/useReveal";

export function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref);

  return (
    <section id="contact" className="border-t border-white/5 py-20 md:py-28">
      <Container>
        <div ref={ref} className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mt-5 max-w-xl text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Need a better system behind your business?
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/65 md:text-base">
              Book a short strategy call and I’ll help you identify the
              highest-leverage improvements across your website, workflows, and
              internal operations.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="primary">
                Book a Strategy Call
              </Button>
            </div>

            <p className="mt-4 text-sm text-white/55">
              Clear direction, honest feedback, and a realistic next step.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-white/6 bg-white/[0.03] p-8 ring-1 ring-white/8 backdrop-blur-sm transition duration-300 hover:border-white/10 hover:bg-white/[0.05]">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-80" />

            <div className="relative z-10">
              <p className="text-sm font-semibold text-white">
                What we’ll clarify on the call
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-white/68">
                <li>• Current setup and business context</li>
                <li>• Biggest bottleneck in the website or operations</li>
                <li>• Whether you need a new build, rebuild, or automation</li>
                <li>• Timeline and implementation priority</li>
                <li>• Budget range if already defined</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}