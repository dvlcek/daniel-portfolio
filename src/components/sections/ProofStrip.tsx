"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { useStagger } from "@/components/animations/useStagger";

const goals = [
  "Less manual operations",
  "Faster internal workflows",
  "Higher conversion rates",
  "Cleaner, scalable architecture",
];

export function ProofStrip() {
  const ref = useRef<HTMLDivElement>(null);
  useStagger(ref, ".proof-item", { y: 10, stagger: 0.05 });

  return (
    <section className="py-8">
      <Container>
        <div ref={ref} className="rounded-2xl bg-white/3 backdrop-blur-sm px-6 py-5 ring-1 ring-white/10">
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">Results I aim for</p>
          <div className="mt-4 grid gap-3 md:grid-cols-4">
            {goals.map((goal) => (
              <p key={goal} className="proof-item text-sm text-white/75">{goal}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
