"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useReveal } from "@/components/animations/useReveal";

export function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref);

  return (
    <section id="contact" className="border-t border-white/5 py-20 md:py-28">
      <Container>
        <div ref={ref} className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/50">
              Contact
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              If Your Company Is Ready To Operate Faster — Let’s Build The System Behind It.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/65 md:text-base">
              Send a short overview of what you’re building and where time is being lost.
              I’ll reply with next steps.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="mailto:daniel@example.com" variant="primary">
                Email Me
              </Button>
              <Button href="#" variant="secondary">
                Book a Call (Calendly)
              </Button>
            </div>
          </div>

          <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
            <p className="text-sm font-semibold text-white">What to include</p>
            <ul className="mt-4 space-y-2 text-sm text-white/65">
              <li>• Company + role</li>
              <li>• Current stack / tools</li>
              <li>• Biggest bottleneck</li>
              <li>• What “success” looks like</li>
              <li>• Timeline / constraints</li>
            </ul>
            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-white/40">
              Typical engagements: 2–8 weeks
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}