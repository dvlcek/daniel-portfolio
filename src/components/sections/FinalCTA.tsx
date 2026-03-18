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
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Planning a platform or automation project?
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/65 md:text-base">
              Book a short strategy call and I’ll help you identify the highest-leverage improvements for your website, workflows, or internal systems.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="primary">
                Book a 20-min Systems Call
              </Button>
            </div>
            <p className="mt-4 text-sm text-white/55">Clear advice, no wasted time, and a realistic next step.</p>
          </div>

          <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
            <p className="text-sm font-semibold text-white">Qualification fields</p>
            <ul className="mt-4 space-y-2 text-sm text-white/65">
              <li>• Company size</li>
              <li>• Biggest bottleneck (automation, website, or both)</li>
              <li>• Timeline urgency</li>
              <li>• Budget range (optional)</li>
              <li>• Current website/tools link</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
