"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useStagger } from "@/components/animations/useStagger";
import { caseStudies } from "@/lib/siteContent";

function getCategoryLabel(
  category: "system_build" | "websites" | "automation" | "rebuilds",
) {
  switch (category) {
    case "system_build":
      return "Business operating system";
    case "automation":
      return "Business automation";
    case "rebuilds":
      return "Platform rebuild";
    case "websites":
      return "Website & lead platform";
    default:
      return "Project";
  }
}

export function FeaturedOutcomes() {
  const ref = useRef<HTMLDivElement>(null);
  useStagger(ref, ".case-card", { y: 20, stagger: 0.08 });

  const featuredStudy = caseStudies[0];
  const supportingStudies = caseStudies.slice(1, 4);

  if (!featuredStudy) return null;

  return (
    <section id="work" className="relative overflow-hidden bg-site-bg py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_12%,rgba(143,163,177,0.11),transparent_32%)]" />
      <Container>
        <div ref={ref} className="relative z-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_0.65fr] lg:items-end">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-clay">
                Featured systems
              </p>
              <h2 className="mt-5 max-w-4xl text-balance text-[clamp(2.5rem,5vw,5.4rem)] font-medium leading-[0.98] tracking-[-0.045em] text-cream">
                Systems built for clarity, conversion, and operational speed.
              </h2>
            </div>

            <div className="max-w-xl lg:justify-self-end">
              <p className="text-lg leading-8 text-stone">
                A focused look at websites, dashboards, lead flows, rebuilds,
                and automation work designed to make daily operations clearer.
              </p>

              <Link
                href="/work"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/70 px-5 py-3 text-sm font-semibold text-cream shadow-[0_14px_34px_rgba(21,21,18,0.05)] transition duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                View case studies
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
            <Link
              href={`/work/${featuredStudy.slug}`}
              className="case-card group overflow-hidden rounded-[2rem] border border-black/[0.08] bg-white/68 shadow-[0_24px_70px_rgba(21,21,18,0.08)] transition duration-300 hover:-translate-y-1 hover:border-clay/20 hover:bg-white"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-panel">
                <Image
                  src={featuredStudy.image}
                  alt={`${featuredStudy.company} project preview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className="object-cover opacity-[0.88] transition duration-700 group-hover:scale-[1.025]"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-site-bg/70 via-site-bg/8 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-black/[0.08] bg-white/72 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-cream shadow-[0_12px_26px_rgba(21,21,18,0.06)] backdrop-blur-xl">
                  {getCategoryLabel(featuredStudy.category)}
                </div>
              </div>

              <div className="p-6 md:p-7">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-ash">
                  {featuredStudy.company} / {featuredStudy.industry}
                </p>
                <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-cream">
                  {featuredStudy.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-stone">
                  {featuredStudy.result}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-clay">
                  View project
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </Link>

            <div className="grid gap-5">
              {supportingStudies.map((study) => (
                <Link
                  key={study.slug}
                  href={`/work/${study.slug}`}
                  className="case-card group grid overflow-hidden rounded-[2rem] border border-black/[0.08] bg-white/68 shadow-[0_18px_50px_rgba(21,21,18,0.06)] transition duration-300 hover:-translate-y-1 hover:border-clay/20 hover:bg-white sm:grid-cols-[180px_1fr]"
                >
                  <div className="relative min-h-[180px] overflow-hidden bg-panel">
                    <Image
                      src={study.image}
                      alt={`${study.company} project preview`}
                      fill
                      sizes="(max-width: 640px) 100vw, 180px"
                      className="object-cover opacity-[0.88] transition duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-site-bg/75 to-transparent" />
                  </div>
                  <div className="flex flex-col p-5">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-ash">
                      {getCategoryLabel(study.category)}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold leading-snug tracking-[-0.025em] text-cream">
                      {study.title}
                    </h3>
                    <p className="mt-3 line-clamp-2 text-sm leading-7 text-stone">
                      {study.result}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-clay">
                      View project
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
