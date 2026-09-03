"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { type CaseStudy } from "@/lib/siteContent";

type CategoryFilter = "all" | "system_build" | "websites" | "automation" | "rebuilds";

type WorkFilterGridProps = {
  studies: CaseStudy[];
};

const filters: { label: string; value: CategoryFilter }[] = [
  { label: "All", value: "all" },
  { label: "Business systems", value: "system_build" },
  { label: "Web & client platforms", value: "websites" },
  { label: "Automation", value: "automation" },
  { label: "Rebuilds", value: "rebuilds" },
];

export function WorkFilterGrid({ studies }: WorkFilterGridProps) {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");

  const filteredStudies = useMemo(() => {
    if (activeFilter === "all") return studies;
    return studies.filter((study) => study.category === activeFilter);
  }, [activeFilter, studies]);

  return (
    <section>
      <div data-page-reveal className="flex flex-col gap-5 border-y border-[#dde3e9] py-5 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value;
            return (
              <button
                key={filter.value}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter.value)}
                className={[
                  "rounded-full border px-4 py-2 text-[11px] font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4e8cff]/35",
                  isActive
                    ? "border-[#182231] bg-[#101722] text-white shadow-[0_8px_22px_rgba(16,23,34,0.12)]"
                    : "border-[#dbe2e9] bg-white/62 text-[#657184] hover:border-[#c5d0dc] hover:bg-white hover:text-[#101722]",
                ].join(" ")}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
        <p className="text-[10px] font-medium text-[#8a95a4]" aria-live="polite">
          {filteredStudies.length} {filteredStudies.length === 1 ? "case study" : "case studies"}
        </p>
      </div>

      {filteredStudies.length > 0 ? (
        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredStudies.map((study, index) => (
            <CaseStudyCard key={study.slug} study={study} index={index} />
          ))}
        </div>
      ) : (
        <div className="apple-glass mt-8 rounded-[26px] p-10 text-center">
          <p className="text-[13px] text-[#687486]">No case studies in this category yet.</p>
        </div>
      )}
    </section>
  );
}

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const proof = study.proof.slice(0, 2);

  return (
    <Link
      href={`/work/${study.slug}`}
      data-page-reveal
      data-optical-glass
      className="apple-glass optical-glass group flex min-h-[520px] flex-col rounded-[28px] p-3 transition-transform duration-500 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4e8cff]/35"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] border border-[#e0e5ea] bg-[#eef2f5]">
        <Image
          src={study.image}
          alt={`${study.company} case study preview`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
          sizes="(min-width: 1280px) 31vw, (min-width: 768px) 48vw, 100vw"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#101722]/38 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full border border-white/70 bg-white/78 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-[#526074] shadow-[0_6px_20px_rgba(16,23,34,0.05)] backdrop-blur-xl">
          {study.categoryLabel}
        </span>
        <span className="absolute bottom-3 left-3 text-[9px] font-semibold tracking-[0.16em] text-white/86">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <article className="flex flex-1 flex-col px-3 pb-3 pt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[8px] font-semibold uppercase tracking-[0.15em] text-[#8993a2]">{study.company}</p>
            <p className="mt-1 text-[9px] text-[#9aa4b1]">{study.industry}</p>
          </div>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#dae2ea] bg-white/72 text-[#315fae] transition group-hover:border-[#bfd0e1] group-hover:bg-white">
            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>

        <h2 className="mt-5 text-[22px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#101722]">{study.title}</h2>
        <p className="mt-3 line-clamp-3 text-[11px] leading-5 text-[#6b7788]">{study.result || study.subtitle}</p>

        {proof.length ? (
          <div className="mt-5 space-y-2">
            {proof.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-[9px] text-[#596678]">
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#cfd9e4] bg-white text-[#2563eb]"><Check size={8} /></span>
                <span><strong className="font-semibold text-[#334155]">{item.value}</strong> · {item.label}</span>
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-auto flex items-center justify-between border-t border-[#e0e5ea] pt-5">
          <span className="text-[10px] font-semibold text-[#1d4ed8]">View transformation</span>
          <ArrowRight size={12} className="text-[#1d4ed8] transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </article>
    </Link>
  );
}
