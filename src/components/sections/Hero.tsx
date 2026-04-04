"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useReveal } from "@/components/animations/useReveal";
import { useMagnetic } from "@/components/animations/useMagnetic";
import { DottedSurface } from "@/components/visuals/DottedSurface";

const outcomes = [
  {
    label: "Reduce repetitive admin work",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 4h12M2 8h8M2 12h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12.5" cy="10.5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14.5 12.5l1.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Build web platforms that convert",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="2" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 14h6M8 12v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4.5 8.5l2-2 2 2 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "Create systems that stay scalable",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1" y="9" width="4" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="6" y="5" width="4" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="11" y="1" width="4" height="14" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

export function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useReveal(wrapRef);
  useMagnetic(ctaRef, 0.18);

  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[calc(100vh-65px)] flex items-center py-16 md:py-24">
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
            {/* Badge */}
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
              <Button href="/contact" variant="primary" className="w-full sm:w-auto">
                Book a Strategy Call
              </Button>
              <Button href="/portfolio" variant="secondary" className="w-full sm:w-auto">
                View Selected Work
              </Button>
            </div>

            {/* Outcome cards */}
            <div className="mt-12 grid gap-3 md:grid-cols-3">
              {outcomes.map((item) => (
                <div
                  key={item.label}
                  className="flex gap-3 rounded-xl bg-white/3 px-4 py-4 ring-1 ring-white/8"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/6 text-white/50 ring-1 ring-white/10">
                    {item.icon}
                  </span>
                  <p className="text-sm leading-snug text-white/60">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}