"use client";

import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useStagger } from "@/components/animations/useStagger";
import { Button } from "@/components/ui/Button";
import { caseStudies } from "@/lib/siteContent";

export function FeaturedOutcomes() {
  const ref = useRef<HTMLDivElement>(null);
  useStagger(ref, ".outcome-card", { y: 20, stagger: 0.08 });

  return (
    <section id="work" className=" py-20 md:py-28">
      <Container>
        <div ref={ref}>
          <SectionTitle
            eyebrow="Proof"
            title="Outcomes over aesthetics."
            desc="Real projects measured by business impact, not screenshots."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {caseStudies.map((study) => (
              <article key={study.slug} className="outcome-card rounded-2xl bg-white/3 backdrop-blur-sm p-7 ring-1 ring-white/10 transition hover:-translate-y-1 hover:ring-blue-800/80">
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">{study.company} / {study.industry}</p>
                <p className="mt-3 text-base font-semibold text-white">{study.result}</p>
                <p className="mt-4 text-sm text-white/65">
                  <span className="text-white/50">What I did:</span> {study.whatIDid.join(", ")}
                </p>
                <p className="mt-2 text-sm text-white/65">
                  <span className="text-white/50">Stack:</span> {study.stack.join(", ")}
                </p>
                <Button href={`/work/${study.slug}`} variant="ghost" className="mt-5 w-full justify-start px-0 py-0 ring-0 hover:bg-transparent">
                  View Case Study
                </Button>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
