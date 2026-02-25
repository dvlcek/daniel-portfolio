"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useReveal } from "@/components/animations/useReveal";

export function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref);

  return (
    <section className="py-20 md:py-28">
      <Container>
        <div ref={ref} className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <SectionTitle
              eyebrow="Philosophy"
              title="I Don’t Build Pages. I Build Infrastructure."
              desc="Every project starts with one question: where is time being lost?"
            />
            <p className="max-w-xl text-sm leading-relaxed text-white/60">
              From there, I design and engineer systems that automate repetitive
              work, improve operational speed, increase conversion performance,
              and stay scalable as you grow.
            </p>
          </div>

          <div className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">
              Outcomes
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>• Replace manual workflows with automation.</li>
              <li>• Reduce tool friction across teams.</li>
              <li>• Build fast, modern web experiences that convert.</li>
              <li>• Design architecture for long-term scalability.</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}