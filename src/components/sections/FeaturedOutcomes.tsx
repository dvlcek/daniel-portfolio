"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useStagger } from "@/components/animations/useStagger";
import { caseStudies } from "@/lib/siteContent";

function getCategoryLabel(category: "websites" | "automation" | "rebuilds") {
  switch (category) {
    case "websites":
      return "Website Build";
    case "automation":
      return "Automation System";
    case "rebuilds":
      return "Rebuild";
  }
}

export function FeaturedOutcomes() {
  const ref = useRef<HTMLDivElement>(null);

  useStagger(ref, ".case-card", { y: 20, stagger: 0.08 });

  return (
    <section id="work" className="py-20 md:py-28">
      <Container>
        <div ref={ref}>
          <SectionTitle
            eyebrow="Selected Work"
            title="Case studies built around business outcomes."
            desc="A preview of projects focused on conversion, automation, and scalable digital infrastructure."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                aria-label={`View case study: ${study.result}`}
                className="case-card group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
                  <Image
                    src={study.image}
                    alt={`${study.company} project preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Category pill — top left */}
                  <div className="absolute left-3 top-3 inline-flex rounded-full border border-white/15 bg-black/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/75 backdrop-blur">
                    {getCategoryLabel(study.category)}
                  </div>

                  {/* Metric badge — bottom left */}
                  {study.featuredMetric && (
                    <div className="absolute bottom-3 left-3 rounded-xl border border-white/15 bg-black/50 px-3 py-2 backdrop-blur">
                      <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/50">
                        Highlight
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-white">
                        {study.featuredMetric}
                      </p>
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5">

                  {/* Company row */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
                        {study.company}
                      </p>
                      <p className="mt-0.5 text-xs text-white/55">{study.industry}</p>
                    </div>

                    <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition group-hover:border-white/25 group-hover:text-white">
                      <ArrowUpRight size={14} />
                    </span>
                  </div>

                  {/* Result headline */}
                  <h3 className="mt-4 text-[15px] font-semibold leading-snug text-white">
                    {study.result}
                  </h3>

                  {/* Summary */}
                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-white/60">
                    {study.summary}
                  </p>

                  {/* Tags with overflow count */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {study.whatIDid.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/65"
                      >
                        {item}
                      </span>
                    ))}
                    {study.whatIDid.length > 3 && (
                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/40">
                        +{study.whatIDid.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                    <p className="flex items-center gap-1.5 text-sm font-medium text-white/80">
                      View case study
                      <ArrowUpRight size={13} className="opacity-60" />
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-white/35">
                      {study.stack.slice(0, 3).join(" · ")}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}