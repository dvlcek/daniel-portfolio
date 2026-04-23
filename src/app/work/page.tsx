"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { caseStudies, type CaseStudy } from "@/lib/siteContent";

type CategoryFilter =
  | "all"
  | "system_build"
  | "websites"
  | "automation"
  | "rebuilds";

function getCategoryLabel(category: CaseStudy["category"]) {
  switch (category) {
    case "system_build":
      return "Business System Build";

    case "automation":
      return "Operations Optimization";

    case "rebuilds":
      return "Platform Rebuild";

    case "websites":
      return "Growth Platform";

    default:
      return "Project";
  }
}

const filters: { label: string; value: CategoryFilter }[] = [
  { label: "All Projects", value: "all" },
  { label: "System Builds", value: "system_build" },
  { label: "Operations Optimization", value: "automation" },
  { label: "Platform Rebuilds", value: "rebuilds" },
  { label: "Growth Platforms", value: "websites" },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");

  const filteredStudies = useMemo(() => {
    if (activeFilter === "all") return caseStudies;
    return caseStudies.filter((study) => study.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="min-h-screen overflow-x-hidden py-16 md:py-24">
      <Container className="max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-white/45">
            Selected Work
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-tight">
            Case studies built around business outcomes.
          </h1>

          <p className="mt-6 text-base leading-8 text-white/70 md:text-lg">
            A portfolio of websites, platform rebuilds, and automation systems
            designed to improve conversion, reduce manual work, and build a
            stronger digital foundation for growth.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value;

            return (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(filter.value)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-white text-black"
                    : "border border-white/10 bg-white/[0.03] text-white/75 hover:border-white/20 hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {filteredStudies.map((study) => (
            <a
              key={study.slug}
              href={`/work/${study.slug}`}
              className="group block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10">
                <Image
                  src={study.image}
                  alt={`${study.company} case study preview`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/80 backdrop-blur">
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
                <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                  {study.company} / {study.industry}
                </p>

                <h2 className="mt-4 text-xl font-semibold leading-tight text-white">
                  {study.result}
                </h2>

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

                <div className="mt-6 border-t border-white/10 pt-5">
                  <span className="text-sm font-medium text-white/75 transition group-hover:text-white">
                    View case study →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {filteredStudies.length === 0 && (
          <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
            <p className="text-white/70">
              No case studies found for this category yet.
            </p>
          </div>
        )}
      </Container>
    </main>
  );
}