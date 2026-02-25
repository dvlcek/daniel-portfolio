"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useReveal } from "@/components/animations/useReveal";
import { useMagnetic } from "@/components/animations/useMagnetic";
import { DottedSurface } from "@/components/visuals/DottedSurface";


export function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useReveal(wrapRef);
  useMagnetic(ctaRef, 0.18);

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* THREE background */}
      <DottedSurface mode="hero" theme="dark" className="opacity-70" />

      {/* Optional: vignette + gradient overlay (makes it premium) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 35% 25%, rgba(255, 255, 255, 0.08), #00000040 55%), radial-gradient(circle at 70% 70%, rgba(110, 231, 183, 0.10), #0000008a 55%)",
        }}
      />

      <Container>
        <div ref={wrapRef} className="relative">
          <p className="text-xs uppercase tracking-[0.25em] text-white/50">
            Software Developer & Automation Architect
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            I Build Scalable Digital Systems <br className="hidden md:block" />
            That Make Companies Operate Faster.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
            Automation infrastructure, modern web engineering, and full rebuilds for
            companies ready to eliminate inefficiency.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button ref={ctaRef} href="#contact" variant="primary" className="w-full sm:w-auto">
              Book a Strategy Call
            </Button>
            <Button href="#work" variant="secondary" className="w-full sm:w-auto">
              View Selected Work
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}