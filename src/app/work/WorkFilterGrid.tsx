"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { type CaseStudy } from "@/lib/siteContent";

type CategoryFilter =
  | "all"
  | "system_build"
  | "websites"
  | "automation"
  | "rebuilds";

type WorkFilterGridProps = {
  studies: CaseStudy[];
};

const filters: { label: string; value: CategoryFilter }[] = [
  { label: "All Projects", value: "all" },
  { label: "Full Platforms", value: "system_build" },
  { label: "Websites", value: "websites" },
  { label: "Automation", value: "automation" },
  { label: "Remakes", value: "rebuilds" },
];

export function WorkFilterGrid({ studies }: WorkFilterGridProps) {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");

  const filteredStudies = useMemo(() => {
    if (activeFilter === "all") return studies;
    return studies.filter((study) => study.category === activeFilter);
  }, [activeFilter, studies]);

  return (
    <section className="mt-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value;

            return (
              <button
                key={filter.value}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter.value)}
                className={[
                  "rounded-full border px-4 py-2 text-sm font-medium transition-[background-color,border-color,color] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/35 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg",
                  isActive
                    ? "border-brand-blue/35 bg-brand-blue/10 text-brand-blue-light"
                    : "border-black/[0.08] bg-white/55 text-cream/52 hover:border-brand-blue/25 hover:text-cream",
                ].join(" ")}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <p className="text-sm text-cream/38" aria-live="polite">
          {filteredStudies.length} selected{" "}
          {filteredStudies.length === 1 ? "project" : "projects"}
        </p>
      </div>

      {filteredStudies.length > 0 ? (
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredStudies.map((study, index) => (
            <CaseStudyCard key={study.slug} study={study} index={index} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-3xl border border-black/[0.08] bg-white/58 p-10 text-center">
          <p className="text-cream/60">
            No case studies found for this category yet.
          </p>
        </div>
      )}
    </section>
  );
}

function CaseStudyCard({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) {
  const tags = study.whatIDid?.slice(0, 3) ?? [];

  return (
    <Link
      href={`/work/${study.slug}`}
      className="group relative flex min-h-[520px] flex-col overflow-hidden rounded-[1.5rem] border border-black/[0.08] bg-white/58 transition-[background-color,border-color,box-shadow] duration-300 hover:border-brand-blue/25 hover:bg-white/72 hover:shadow-[0_20px_60px_rgba(0,0,0,0.20)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/35 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg"
    >
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-transparent to-transparent transition duration-300 group-hover:via-brand-blue-soft/55" />

      <div className="relative aspect-[16/10] overflow-hidden border-b border-black/[0.08]">
        <Image
          src={study.image}
          alt={`${study.company} case study preview`}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.035]"
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
        />

        <div className="absolute inset-0 bg-linear-to-t from-site-bg via-site-bg/18 to-transparent" />

        <div className="absolute left-4 top-4 rounded-full border border-black/[0.12] bg-site-bg/50 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-cream/70 backdrop-blur-xl">
          {study.categoryLabel}
        </div>

        <div className="absolute bottom-4 left-4 rounded-2xl border border-black/[0.12] bg-site-bg/55 px-3 py-2 backdrop-blur-xl">
          <p className="font-mono text-xs text-brand-blue-light">
            {String(index + 1).padStart(2, "0")}
          </p>
        </div>
      </div>

      <article className="flex flex-1 flex-col p-6">
        <div>
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-cream/35">
                {study.company}
              </p>

              <p className="mt-2 text-sm text-cream/35">{study.industry}</p>
            </div>

            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-black/[0.10] bg-white/58 text-cream/35 transition duration-300 group-hover:border-brand-blue/30 group-hover:bg-brand-blue/10 group-hover:text-brand-blue-light">
              <ArrowUpRight size={15} />
            </span>
          </div>

          <h2 className="mt-6 text-2xl font-semibold leading-tight tracking-tight text-cream">
            {study.title}
          </h2>

          <p className="mt-4 line-clamp-3 text-sm leading-6 text-cream/58">
            {study.result}
          </p>
        </div>

        <div className="mt-6 flex-1">
          {study.result ? (
            <div className="rounded-2xl border border-black/[0.08] bg-site-bg/45 p-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-cream/30">
                Proof angle
              </p>

              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-cream/62">
                Problem mapped, system built, workflow made easier.
              </p>
            </div>
          ) : null}

          {tags.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/[0.08] bg-white/55 px-3 py-1 text-xs text-cream/48"
                >
                  {item}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-black/[0.08] pt-5">
          <span className="text-sm font-medium text-cream/58 transition duration-300 group-hover:text-brand-blue-light">
            View project
          </span>

          <span className="text-cream/32 transition duration-300 group-hover:text-brand-blue-light">
            <ArrowUpRight size={15} />
          </span>
        </div>
      </article>
    </Link>
  );
}
