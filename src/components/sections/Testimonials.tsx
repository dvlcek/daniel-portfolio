"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useStagger } from "@/components/animations/useStagger";

const principles = [
  "Clear communication and ownership",
  "Systems thinking, not just pages",
  "Maintainable builds that scale",
  "Speed without sacrificing quality",
];

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  useStagger(ref, ".testimonial-item", { y: 14, stagger: 0.06 });

  return (
    <section className="border-y border-white/5 py-20 md:py-28">
      <Container>
        <div ref={ref}>
          <SectionTitle eyebrow="What teams value most" title="Trust transfer from how the work is delivered." />
          <div className="grid gap-3 md:grid-cols-2">
            {principles.map((item) => (
              <p key={item} className="testimonial-item rounded-xl bg-white/5 p-4 text-sm text-white/75 ring-1 ring-white/10">{item}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
