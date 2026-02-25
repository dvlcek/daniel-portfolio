"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useReveal } from "@/components/animations/useReveal";

export function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref);

  return (
    <section className="border-y border-white/5 py-20 md:py-28">
      <Container>
        <div ref={ref}>
          <SectionTitle
            eyebrow="The Problem"
            title="Most Companies Don’t Have a Growth Problem. They Have a Systems Problem."
            desc="Manual processes. Disconnected tools. Outdated websites that don’t convert. Teams compensate with effort instead of better infrastructure."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {[
              { t: "Manual Ops", d: "Repeated tasks consume hours every week." },
              { t: "Tool Chaos", d: "CRMs, sheets, and apps that don’t talk." },
              { t: "Slow Web", d: "Outdated builds hurt trust and conversions." },
            ].map((x) => (
              <div
                key={x.t}
                className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
              >
                <p className="text-base font-semibold text-white">{x.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {x.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}