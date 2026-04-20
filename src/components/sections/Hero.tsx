"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useReveal } from "@/components/animations/useReveal";
import { DottedSurface } from "@/components/visuals/DottedSurface";

const outcomes = [
  {
    label: "Reduce repetitive manual work",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M3 4.5h6M3 8h5M3 11.5h4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M10 5.5h3v3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 5.5l-3.5 3.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Turn your website into a business asset",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect
          x="2"
          y="2.5"
          width="12"
          height="9"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M5 9l2-2 1.5 1.5L11 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 6H11v.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 13.5h4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Build systems that scale with your business",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect
          x="2"
          y="9"
          width="3"
          height="4"
          rx="0.8"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="6.5"
          y="6.5"
          width="3"
          height="6.5"
          rx="0.8"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <rect
          x="11"
          y="3.5"
          width="3"
          height="9.5"
          rx="0.8"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];

export function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useReveal(wrapRef);

  return (
    <section className="relative overflow-hidden">
      <div className="relative flex min-h-[calc(100vh-65px)] items-center py-16 md:py-24">
        <DottedSurface
          mode="hero"
          theme="dark"
          className="absolute inset-0 -z-20 opacity-60"
        />

        <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-black/10 via-black/40 to-black/90" />

        <Container>
          <div ref={wrapRef} className="mx-auto w-full max-w-5xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/80" />
              <p className="text-xs uppercase tracking-[0.22em] text-white/60">
                Operational Systems for Modern Businesses
              </p>
            </div>

            {/* Headline */}
            <h1 className="mt-6 max-w-5xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              I build systems that reduce manual work and make businesses
              operate faster.
            </h1>

            {/* Subtext */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
              From websites to internal workflows, these systems simplify
              operations, reduce manual work, and improve how your business
              runs.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
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

            {/* Outcome cards (CENTERED INLINE) */}
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {outcomes.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-left gap-3 rounded-xl bg-white/3 px-6 py-5 ring-1 ring-white/8 transition-all hover:bg-white/5 hover:ring-white/12"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/6 text-white/60 ring-1 ring-white/10">
                    {item.icon}
                  </span>

                  <p className="text-sm text-white/75">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}