"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useStagger } from "@/components/animations/useStagger";

const capabilities = [
  "Next.js App Router + TypeScript architecture",
  "Tailwind UI systems + premium interaction design",
  "GSAP motion for subtle, high-end transitions",
  "Automation workflows across CRM, forms, email, and internal tools",
  "Analytics, tracking, and conversion instrumentation",
  "Documentation and scalable handover",
];

export function Capabilities() {
  const ref = useRef<HTMLDivElement>(null);
  useStagger(ref, ".cap-item", { y: 12, stagger: 0.05 });

  return (
    <section className="py-20 md:py-28">
      <Container>
        <div ref={ref} className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 md:p-12">
          <SectionTitle
            eyebrow="Technical depth"
            title="Built with a modern stack and engineered to stay clean."
            className="mb-6"
          />
          <div className="grid gap-3 md:grid-cols-2">
            {capabilities.map((item) => (
              <p key={item} className="cap-item text-sm text-white/75">- {item}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
