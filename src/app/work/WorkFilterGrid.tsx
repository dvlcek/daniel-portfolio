"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { type CaseStudy } from "@/lib/siteContent";

type CategoryFilter = "all" | "system_build" | "websites" | "automation" | "rebuilds";

const filters: { label: string; value: CategoryFilter }[] = [
  { label: "All Systems", value: "all" },
  { label: "Platforms", value: "system_build" },
  { label: "Websites", value: "websites" },
  { label: "Automations", value: "automation" },
  { label: "Rebuilds", value: "rebuilds" },
];

export function WorkFilterGrid({ studies }: { studies: CaseStudy[] }) {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");
  const filteredStudies = useMemo(() => activeFilter === "all" ? studies : studies.filter((study) => study.category === activeFilter), [activeFilter, studies]);

  return (
    <section className="section-compact pt-0">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value;
            return (
              <button key={filter.value} type="button" aria-pressed={isActive} onClick={() => setActiveFilter(filter.value)} className={["rounded-full border px-4 py-2 text-sm font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C16A3A]/35", isActive ? "border-[#C16A3A]/35 bg-[#C16A3A]/10 text-[#F2EFE6]" : "border-[rgba(242,239,230,0.10)] bg-[rgba(242,239,230,0.04)] text-[#B8B1A4] hover:border-[rgba(242,239,230,0.2)] hover:text-[#F2EFE6]"].join(" ")}>{filter.label}</button>
            );
          })}
        </div>
        <p className="text-sm text-[#8E9188]" aria-live="polite">{filteredStudies.length} selected {filteredStudies.length === 1 ? "system" : "systems"}</p>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredStudies.map((study, index) => <CaseStudyCard key={study.slug} study={study} index={index} />)}
      </div>
    </section>
  );
}

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <Link href={`/work/${study.slug}`} className="group glass-panel relative flex min-h-[520px] flex-col overflow-hidden rounded-[28px] transition duration-300 hover:-translate-y-1 hover:border-[rgba(242,239,230,0.22)]">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-[rgba(242,239,230,0.08)]">
        <Image src={study.image} alt={`${study.company} case study preview`} fill className="object-cover opacity-80 transition duration-700 group-hover:scale-[1.025]" sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/16 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full border border-[rgba(242,239,230,0.14)] bg-[#050505]/60 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.08em] text-[#E5E0D4] backdrop-blur-xl">{study.categoryLabel}</div>
        <div className="absolute bottom-4 left-4 rounded-2xl border border-[#C16A3A]/20 bg-[#C16A3A]/10 px-3 py-2 backdrop-blur-xl"><p className="font-mono text-xs text-[#E5E0D4]">{String(index + 1).padStart(2, "0")}</p></div>
      </div>
      <article className="flex flex-1 flex-col p-6">
        <p className="micro-label text-[#8E9188]">{study.company}</p>
        <p className="mt-2 text-sm text-[#6F766E]">{study.industry}</p>
        <h2 className="mt-6 text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#F2EFE6]">{study.title}</h2>
        <p className="mt-4 line-clamp-3 text-sm leading-7 text-[#B8B1A4]">{study.result}</p>
        <div className="mt-5 rounded-2xl border border-[rgba(242,239,230,0.08)] bg-[#050505]/35 p-4">
          <p className="micro-label text-[#6F766E]">Business result</p>
          <p className="mt-2 text-sm leading-6 text-[#E5E0D4]">{study.featuredMetric || "Connected digital system delivered"}</p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">{study.stack.slice(0, 4).map((item) => <span key={item} className="rounded-full border border-[rgba(242,239,230,0.08)] px-3 py-1 text-xs text-[#8E9188]">{item}</span>)}</div>
        <div className="mt-auto flex items-center justify-between border-t border-[rgba(242,239,230,0.08)] pt-5 text-sm font-semibold text-[#E5E0D4]">View system <ArrowUpRight size={15} /></div>
      </article>
    </Link>
  );
}
