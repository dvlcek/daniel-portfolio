"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useReveal } from "@/components/animations/useReveal";
import { useMagnetic } from "@/components/animations/useMagnetic";
import { DottedSurface } from "@/components/visuals/DottedSurface";

const outcomes = [
  "Reduce repetitive admin work",
  "Build web platforms that convert",
  "Create systems that stay scalable",
];

export function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useReveal(wrapRef);
  useMagnetic(ctaRef, 0.18);

  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[calc(100vh-65px)]  flex items-center py-16 md:py-24">
        {/* Background */}
        <DottedSurface
          mode="hero"
          theme="dark"
          className="absolute inset-0 -z-20 opacity-60"
        />

        {/* Subtle overlay */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-black/10 via-black/40 to-black/90" />

        <Container>
          <div ref={wrapRef} className="mx-auto w-full max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/80" />
                  <p className="text-xs uppercase tracking-[0.22em] text-white/60">
                    Software Developer & Systems Builder
                  </p>
                </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              I build web platforms and automation systems that make companies run faster.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
              From premium websites and custom web apps to workflow automation and AI-supported operations, I build systems that improve how businesses look, work, and grow.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                // ref={ctaRef}
                href="/contact"
                variant="primary"
                className="w-full sm:w-auto"
              >
                Book a Strategy Call
              </Button>

              <Button
                href="/portfolio"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                View Selected Work
              </Button>
            </div>

            <div className="mt-12 border-t border-white/10 pt-6">
              <div className="grid gap-2 md:grid-cols-3">
                {outcomes.map((item) => (
                  <p key={item} className="text-sm text-white/55">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
          {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-white/40">
            <span className="text-[10px] uppercase tracking-[0.3em]">
              Scroll
            </span>

            <div className="relative h-10 w-[1px] overflow-hidden bg-white/20">
              <div className="scroll-line absolute top-0 left-0 w-full bg-white/70" />
            </div>
          </div>
        </div> */}
        </Container>
      </div>
    </section>
  );
}