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
    default:
      return "Project";
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

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className="case-card group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
                  <Image
                    src={study.image}
                    alt={`${study.company} project preview`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  <div className="absolute left-4 top-4 inline-flex rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur">
                    {getCategoryLabel(study.category)}
                  </div>

                  {study.featuredMetric && (
                    <div className="absolute bottom-4 left-4 rounded-2xl border border-white/15 bg-black/45 px-3 py-2 backdrop-blur">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-white/55">
                        Highlight
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        {study.featuredMetric}
                      </p>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                        {study.company}
                      </p>
                      <p className="mt-1 text-sm text-white/55">{study.industry}</p>
                    </div>

                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition group-hover:border-white/20 group-hover:text-white">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold leading-tight text-white">
                    {study.result}
                  </h3>

                  <p className="mt-4 line-clamp-3 text-sm leading-6 text-white/65">
                    {study.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {study.whatIDid.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                    <p className="text-sm font-medium text-white/75">View case study</p>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                      {study.stack.slice(0, 2).join(" · ")}
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