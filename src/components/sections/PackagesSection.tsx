"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useStagger } from "@/components/animations/useStagger";
import { Button } from "@/components/ui/Button";
import { packages } from "@/lib/siteContent";

export function PackagesSection() {
  const ref = useRef<HTMLDivElement>(null);
  useStagger(ref, ".pkg-card", { y: 18, stagger: 0.08 });

  return (
    <section id="services" className="border-y border-white/5 py-20 md:py-28">
      <Container>
        <div ref={ref}>
          <SectionTitle
            eyebrow="Services"
            title="Choose the build that matches your stage."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {packages.map((pkg) => (
              <article key={pkg.name} className="pkg-card rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">{pkg.level}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{pkg.name}</h3>
                <p className="mt-3 text-sm text-white/65"><span className="text-white/45">Best for:</span> {pkg.bestFor}</p>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {pkg.includes.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
                <Button href={pkg.cta.href} variant="secondary" className="mt-5">{pkg.cta.label}</Button>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
