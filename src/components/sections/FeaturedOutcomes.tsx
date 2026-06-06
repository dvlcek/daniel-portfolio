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
    <section
      id="work"
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      <Container>
        <div ref={ref}>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_0.65fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1238F2]">
                Featured projects
              </p>
              <h2 className="mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-[#10131A] md:text-5xl md:leading-[1.05]">
                Real projects where the website became part of the business
                system.
              </h2>
            </div>

            <div className="max-w-xl lg:justify-self-end">
              <p className="text-lg leading-8 text-[#566176]">
                A focused look at websites, dashboards, lead flows, rebuilds,
                and automation work designed to make daily operations clearer.
              </p>

              <Link
                href="/work"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#DDE2EE] bg-[#FAFAF8] px-5 py-3 text-sm font-semibold text-[#10131A] transition duration-300 hover:border-[#1238F2]/25 hover:text-[#1238F2]"
              >
                View case studies
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
            <Link
              href={`/work/${featuredStudy.slug}`}
              className="case-card group overflow-hidden rounded-[2rem] border border-[#DDE2EE] bg-[#FAFAF8] shadow-[0_16px_48px_rgba(16,19,26,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(16,19,26,0.10)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#EEF2FF]">
                <Image
                  src={featuredStudy.image}
                  alt={`${featuredStudy.company} project preview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.025]"
                  priority
                />
                <div className="absolute left-5 top-5 rounded-full bg-white/86 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1238F2] shadow-[0_10px_30px_rgba(16,19,26,0.08)] backdrop-blur-xl">
                  {getCategoryLabel(featuredStudy.category)}
                </div>
              </div>

              <div className="p-6 md:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7A8497]">
                  {featuredStudy.company} · {featuredStudy.industry}
                </p>
                <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[#10131A]">
                  {featuredStudy.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-[#566176]">
                  {featuredStudy.result}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1238F2]">
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
                  className="case-card group grid overflow-hidden rounded-[2rem] border border-[#DDE2EE] bg-white shadow-[0_16px_48px_rgba(16,19,26,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(16,19,26,0.10)] sm:grid-cols-[180px_1fr]"
                >
                  <div className="relative min-h-[180px] overflow-hidden bg-[#EEF2FF]">
                    <Image
                      src={study.image}
                      alt={`${study.company} project preview`}
                      fill
                      sizes="(max-width: 640px) 100vw, 180px"
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-col p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7A8497]">
                      {getCategoryLabel(study.category)}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-[#10131A]">
                      {study.title}
                    </h3>
                    <p className="mt-3 line-clamp-2 text-sm leading-7 text-[#566176]">
                      {study.result}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-semibold text-[#1238F2]">
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
