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
    <section id="services" className="py-20 md:py-28">
      <Container>
        <div ref={ref}>
          <SectionTitle
            eyebrow="Services"
            title="Offers built around the systems your business needs."
            desc="Clear offers for businesses that need stronger websites, better operations, and systems built to support growth."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {packages.map((pkg) => (
              <article
                key={pkg.name}
                className="pkg-card group relative overflow-hidden rounded-3xl border border-white/6 bg-white/[0.02] p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/10 hover:bg-white/[0.04] md:p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-80" />

                <div className="relative z-10 flex h-full flex-col">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                      {pkg.name}
                    </h3>

                    <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-white/68">
                      <span className="text-white/40">Best for:</span> {pkg.bestFor}
                    </p>
                  </div>

                  <div className="mt-8 flex-1">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-white/35">
                      Included
                    </p>

                    <ul className="mt-4 space-y-2">
                      {pkg.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-relaxed text-white/75"
                        >
                          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* subtle line */}
                    <p className="mt-4 text-xs pl-4  text-white/30 italic">
                      {pkg.subtle}
                    </p>
                  </div>

                  <div className="mt-8 pt-2">
                    <Button href={pkg.cta.href} variant="primary">
                      {pkg.cta.label}
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}