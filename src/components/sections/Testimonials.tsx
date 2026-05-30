"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useStagger } from "@/components/animations/useStagger";

const principles = [
  {
    number: "01",
    title: "Clear communication",
    text: "You know what is being built, why it matters, and what happens next.",
  },
  {
    number: "02",
    title: "Full ownership",
    text: "The project is handled with responsibility for the structure, logic, and outcome.",
  },
  {
    number: "03",
    title: "Systems thinking",
    text: "The work is built around how the business operates, not only how the interface looks.",
  },
  {
    number: "04",
    title: "Long-term structure",
    text: "The system is designed to stay maintainable, scalable, and useful after launch.",
  },
];

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);

  useStagger(ref, ".delivery-item", { y: 14, stagger: 0.06 });

  return (
    <section className="relative overflow-hidden bg-site-bg py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/8 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(47,47,228,0.045),transparent_28%)]" />
      </div>

      <Container>
        <div ref={ref} className="relative z-10">
          <SectionTitle
            eyebrow="How the work is delivered"
            title="Clear delivery. Strong ownership. Systems built for real use."
            desc="A simple working standard: structured communication, clean execution, and technical decisions that support the business long-term."
          />

          <div className="mt-12 overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.018] backdrop-blur-xl">
            <div className="grid md:grid-cols-2">
              {principles.map((item) => (
                <div
                  key={item.title}
                  className="delivery-item group relative border-b border-white/[0.07] p-6 transition-[background-color] duration-300 last:border-b-0 hover:bg-white/[0.025] md:border-r md:last:border-b md:[&:nth-child(even)]:border-r-0 md:[&:nth-last-child(-n+2)]:border-b-0"
                >
                  <div className="absolute left-0 top-0 h-full w-px bg-brand-blue/0 transition duration-300 group-hover:bg-brand-blue/70" />
                  <div className="absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-transparent to-transparent transition duration-300 group-hover:via-brand-blue-soft/45" />

                  <div className="flex gap-5">
                    <span className="font-mono text-xs text-brand-blue transition duration-300 group-hover:text-brand-blue-light">
                      {item.number}
                    </span>

                    <div>
                      <h3 className="text-base font-semibold tracking-tight text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/55">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/45">
            This section is intentionally simple: it supports trust without
            distracting from the stronger case studies, process, and service
            sections.
          </p>
        </div>
      </Container>
    </section>
  );
}