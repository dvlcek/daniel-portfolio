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
            title="Packages built around the work you actually need."
            desc="Clear service offers for companies that need stronger websites, better systems, and clean execution."
          />

          <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-12">
            {packages.map((pkg) => (
              <article
                key={pkg.name}
                className="pkg-card group relative border-t border-white/12 pt-6"
              >
                <div className="absolute left-0 top-0 h-px w-20 bg-white/35 transition-all duration-500 group-hover:w-132" />

                <div className="flex h-full flex-col">
                  <div>
                    {/* Optional level */}
                    {/* <p className="text-[11px] uppercase tracking-[0.22em] text-white/35">
                      {pkg.level}
                    </p> */}

                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                      {pkg.name}
                    </h3>

                    <p className="mt-4 max-w-[44ch] text-sm leading-relaxed text-white/65">
                      <span className="text-white/40">Best for:</span> {pkg.bestFor}
                    </p>
                  </div>

                  <div className="mt-8 flex-1">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-white/35">
                      Included
                    </p>

                    <ul className="mt-4 space-y-3">
                      {pkg.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-relaxed text-white/72"
                        >
                          <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/45" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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