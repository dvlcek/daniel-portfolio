"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useStagger } from "@/components/animations/useStagger";

const principles = [
  "Clear communication and full ownership of the project",
  "Systems thinking, not just website design",
  "Built to be maintainable and scalable long-term",
  "Fast execution without compromising quality",
];

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  useStagger(ref, ".testimonial-item", { y: 14, stagger: 0.06 });

  return (
    <section className=" py-20 md:py-28">
      <Container>
        <div ref={ref}>
          <SectionTitle
            eyebrow="How the work is delivered"
            title="Systems built to work in real businesses."
            desc="Clear structure, direct communication, and full ownership from start to finish."
          />
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
