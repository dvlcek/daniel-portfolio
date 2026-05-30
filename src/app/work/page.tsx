"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { caseStudies, type CaseStudy } from "@/lib/siteContent";

type CategoryFilter =
  | "all"
  | "system_build"
  | "websites"
  | "automation"
  | "rebuilds";

const filters: { label: string; value: CategoryFilter }[] = [
  { label: "All Projects", value: "all" },
  { label: "Business Operating Systems", value: "system_build" },
  { label: "Websites & Lead Platforms", value: "websites" },
  { label: "Business Automation", value: "automation" },
  { label: "Platform Rebuilds", value: "rebuilds" },
];

const pageSignals = [
  "Premium websites",
  "Custom business systems",
  "CRM automation",
  "Internal dashboards",
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");

  const filteredStudies = useMemo(() => {
    if (activeFilter === "all") return caseStudies;
    return caseStudies.filter((study) => study.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-site-bg py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand-blue/7 blur-3xl" />
        <div className="absolute -right-40 top-80 h-[28rem] w-[28rem] rounded-full bg-brand-blue-deep/18 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-linear-to-t from-site-bg-deep/55 to-transparent" />
      </div>

      <Container className="relative z-10 max-w-7xl">
        <header className="border-b border-white/[0.08] pb-12 md:pb-14">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_0.72fr] lg:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-brand-blue md:text-sm">
                Selected Work
              </p>

              <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.05]">
                Case studies built around business outcomes.
              </h1>
            </div>

            <p className="max-w-xl text-base leading-relaxed text-white/60 md:text-lg lg:justify-self-end">
              A portfolio of premium websites, custom business systems,
              internal dashboards, CRM automation, and platform rebuilds
              designed to improve trust and create cleaner operations.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {pageSignals.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/[0.08] bg-white/[0.018] px-4 py-2 text-sm text-white/48 backdrop-blur-xl"
              >
                {item}
              </span>
            ))}
          </div>
        </header>

        <section className="mt-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => {
                const isActive = activeFilter === filter.value;

                return (
                  <button
                    key={filter.value}
                    type="button"
                    onClick={() => setActiveFilter(filter.value)}
                    className={[
                      "rounded-full border px-4 py-2 text-sm font-medium transition-[background-color,border-color,color] duration-300",
                      isActive
                        ? "border-brand-blue/35 bg-brand-blue/10 text-brand-blue-light"
                        : "border-white/[0.08] bg-white/[0.018] text-white/52 hover:border-brand-blue/25 hover:text-white",
                    ].join(" ")}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>

            <p className="text-sm text-white/38">
              {filteredStudies.length} selected{" "}
              {filteredStudies.length === 1 ? "project" : "projects"}
            </p>
          </div>

          {filteredStudies.length > 0 ? (
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredStudies.map((study, index) => (
                <CaseStudyCard
                  key={study.slug}
                  study={study}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-3xl border border-white/[0.08] bg-white/[0.022] p-10 text-center">
              <p className="text-white/60">
                No case studies found for this category yet.
              </p>
            </div>
          )}
        </section>

        <footer className="mt-12 border-t border-white/[0.08] pt-6">
          <p className="max-w-3xl text-sm leading-relaxed text-white/42">
            Each project is presented as a business system, not just a visual
            build. The focus is always on structure, operational value, and what
            the solution makes easier for the company.
          </p>
        </footer>
      </Container>
    </main>
  );
}

function CaseStudyCard({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) {
  const summary = study.subtitle || study.summary;
  const tags = study.whatIDid?.slice(0, 3) ?? [];

  return (
    <Link
      href={`/work/${study.slug}`}
      className="group relative flex min-h-[560px] flex-col overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.022] transition-[background-color,border-color,box-shadow] duration-300 hover:border-brand-blue/25 hover:bg-white/[0.032] hover:shadow-[0_24px_80px_rgba(0,0,0,0.22)]"
    >
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-transparent to-transparent transition duration-300 group-hover:via-brand-blue-soft/55" />

      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.08]">
        <Image
          src={study.image}
          alt={`${study.company} case study preview`}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.035]"
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
        />

        <div className="absolute inset-0 bg-linear-to-t from-site-bg via-site-bg/18 to-transparent" />

        <div className="absolute left-4 top-4 rounded-full border border-white/[0.12] bg-site-bg/50 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/70 backdrop-blur-xl">
          {study.categoryLabel}
        </div>

        <div className="absolute bottom-4 left-4 rounded-2xl border border-white/[0.12] bg-site-bg/55 px-3 py-2 backdrop-blur-xl">
          <p className="font-mono text-xs text-brand-blue-light">
            {String(index + 1).padStart(2, "0")}
          </p>
        </div>
      </div>

      <article className="flex flex-1 flex-col p-6">
        <div>
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                {study.company}
              </p>

              <p className="mt-2 text-sm text-white/35">{study.industry}</p>
            </div>

            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-white/[0.10] bg-white/[0.025] text-white/35 transition duration-300 group-hover:border-brand-blue/30 group-hover:bg-brand-blue/10 group-hover:text-brand-blue-light">
              <ArrowUpRight size={15} />
            </span>
          </div>

          <h2 className="mt-6 text-2xl font-semibold leading-tight tracking-tight text-white">
            {study.title}
          </h2>

          <p className="mt-4 line-clamp-3 text-sm leading-6 text-white/56">
            {summary}
          </p>
        </div>

        <div className="mt-6 flex-1">
          {study.result ? (
            <div className="rounded-2xl border border-white/[0.08] bg-site-bg/45 p-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                Result
              </p>

              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/62">
                {study.result}
              </p>
            </div>
          ) : null}

          {tags.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/[0.08] bg-white/[0.018] px-3 py-1 text-xs text-white/48"
                >
                  {item}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-5">
          <span className="text-sm font-medium text-white/58 transition duration-300 group-hover:text-brand-blue-light">
            View case study
          </span>

          <span className="text-white/32 transition duration-300 group-hover:text-brand-blue-light">
            <ArrowUpRight size={15} />
          </span>
        </div>
      </article>
    </Link>
  );
}
