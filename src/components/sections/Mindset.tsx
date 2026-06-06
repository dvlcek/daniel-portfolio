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
          className="rounded-3xl border border-black/[0.08] bg-white/58 p-8 ring-1 ring-black/[0.03] md:p-12"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-cream/50">
            Direct partner
          </p>
          <h3 className="mt-5 max-w-3xl text-2xl font-semibold tracking-tight text-cream md:text-4xl">
            You work directly with the person who maps the problem and builds
            the system.
          </h3>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-cream/62 md:text-base">
            I do not work like a big agency with account managers between you
            and the build. I ask how the business works, where time is wasted,
            where leads get lost, and what would make daily work easier before
            deciding what should be built.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              "No agency layers",
              "Business questions before code",
              "Practical tools, not just pretty pages",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-black/[0.08] bg-site-bg/45 p-4 text-sm text-cream/64"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
