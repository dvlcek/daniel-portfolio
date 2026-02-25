"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { useReveal } from "@/components/animations/useReveal";

export function Mindset() {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref);

  return (
    <section className="py-20 md:py-28">
      <Container>
        <div
          ref={ref}
          className="rounded-3xl bg-white/5 p-10 ring-1 ring-white/10 md:p-14"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-white/50">
            Mindset
          </p>
          <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            The future of competitive companies is operational speed.
          </h3>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/65 md:text-base">
            The winners won’t be those with bigger teams — but those with better systems.
            I help you build the infrastructure behind execution: automation, clean architecture,
            and a modern web presence that earns trust.
          </p>
        </div>
      </Container>
    </section>
  );
}