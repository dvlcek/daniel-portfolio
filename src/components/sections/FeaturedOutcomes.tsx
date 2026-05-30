"use client";

import Image from "next/image";
import Link from "next/link";
import {
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
  useRef,
} from "react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useStagger } from "@/components/animations/useStagger";
import { caseStudies } from "@/lib/siteContent";

function getCategoryLabel(
  category: "system_build" | "websites" | "automation" | "rebuilds",
) {
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

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

function updateSpotlight(event: MouseEvent<HTMLDivElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  event.currentTarget.style.setProperty("--spotlight-x", `${x}px`);
  event.currentTarget.style.setProperty("--spotlight-y", `${y}px`);
}

function SpotlightCard({
  children,
  className = "",
  innerClassName = "",
}: SpotlightCardProps) {
  const spotlightStyle = {
    "--spotlight-x": "50%",
    "--spotlight-y": "50%",
  } as CSSProperties;

  return (
    <div
      onMouseMove={updateSpotlight}
      style={spotlightStyle}
      className={`group relative overflow-hidden rounded-3xl bg-white/[0.07] p-px transition duration-300 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--spotlight-x) var(--spotlight-y), rgba(47,47,228,0.68), rgba(255,255,255,0.14) 32%, transparent 68%)",
        }}
      />

      <div
        className={`relative h-full overflow-hidden rounded-[23px] bg-site-bg/88 backdrop-blur-xl ${innerClassName}`}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(520px circle at var(--spotlight-x) var(--spotlight-y), rgba(47,47,228,0.10), transparent 58%)",
          }}
        />

        <div
          className="pointer-events-none absolute inset-x-8 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(260px circle at var(--spotlight-x) 0px, rgba(167,174,255,0.85), transparent 72%)",
          }}
        />

        <div className="relative z-10 h-full">{children}</div>
      </div>
    </div>
  );
}

export function FeaturedOutcomes() {
  const ref = useRef<HTMLDivElement>(null);

  useStagger(ref, ".case-card", { y: 20, stagger: 0.08 });

  const featuredStudy = caseStudies[0];
  const supportingStudies = caseStudies.slice(1, 5);

  if (!featuredStudy) {
    return null;
  }

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-site-bg py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(47,47,228,0.08),transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_54%,rgba(22,46,147,0.09),transparent_34%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/8 to-transparent" />

        <div className="absolute left-0 top-0 h-full w-1/2 opacity-[0.025]">
          <div className="h-full w-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:88px_88px]" />
        </div>
      </div>

      <Container>
        <div ref={ref} className="relative z-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_0.7fr] lg:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-brand-blue md:text-sm">
                Selected Work
              </p>

              <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Systems built to create business outcomes, not just screens.
              </h2>
            </div>

            <div className="max-w-xl lg:justify-self-end">
              <p className="text-base leading-relaxed text-white/60 md:text-lg">
                A focused look at platforms, automation systems, rebuilds, and
                digital infrastructure designed to reduce manual work and make
                companies operate faster.
              </p>

              <Link
                href="/work"
                className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/[0.12] bg-white/[0.035] px-5 py-3 text-sm font-medium text-white/75 transition duration-300 hover:border-brand-blue/35 hover:bg-brand-blue/10 hover:text-white"
              >
                View all work
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <Link
              href={`/work/${featuredStudy.slug}`}
              aria-label={`View case study: ${featuredStudy.result}`}
              className="case-card block"
            >
              <SpotlightCard className="h-full" innerClassName="h-full">
                <div className="grid h-full min-h-[620px] grid-rows-[1fr_auto]">
                  <div className="relative overflow-hidden border-b border-white/[0.08]">
                    <Image
                      src={featuredStudy.image}
                      alt={`${featuredStudy.company} project preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover opacity-90 transition duration-700 group-hover:scale-[1.025] group-hover:opacity-100"
                      priority
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-site-bg via-site-bg/30 to-transparent" />
                    <div className="absolute inset-0 bg-linear-to-r from-site-bg/40 via-transparent to-transparent" />

                    <div className="absolute left-5 top-5 inline-flex rounded-full border border-white/[0.12] bg-black/45 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/70 backdrop-blur-xl">
                      {getCategoryLabel(featuredStudy.category)}
                    </div>

                    {featuredStudy.featuredMetric ? (
                      <div className="absolute bottom-5 left-5 right-5 max-w-xl rounded-2xl border border-white/[0.12] bg-site-bg/72 p-4 backdrop-blur-xl">
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-blue-light">
                          Featured outcome
                        </p>
                        <p className="mt-2 text-lg font-semibold leading-snug text-white">
                          {featuredStudy.featuredMetric}
                        </p>
                      </div>
                    ) : null}
                  </div>

                  <div className="p-6 md:p-7">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">
                          {featuredStudy.company}
                        </p>
                        <p className="mt-1 text-sm text-white/45">
                          {featuredStudy.industry}
                        </p>
                      </div>

                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/[0.10] bg-white/[0.035] text-white/60 transition duration-300 group-hover:border-brand-blue/30 group-hover:bg-brand-blue/10 group-hover:text-white">
                        <ArrowUpRight size={18} />
                      </span>
                    </div>

                    <h3 className="mt-6 max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-white md:text-3xl">
                      {featuredStudy.result}
                    </h3>

                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/55">
                      {featuredStudy.summary}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {featuredStudy.whatIDid.slice(0, 5).map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/[0.10] bg-white/[0.035] px-3 py-1.5 text-xs text-white/60 transition duration-300 group-hover:border-brand-blue/25 group-hover:text-white/72"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </Link>

            <div className="grid gap-5">
              {supportingStudies.map((study, index) => (
                <Link
                  key={study.slug}
                  href={`/work/${study.slug}`}
                  aria-label={`View case study: ${study.result}`}
                  className="case-card block"
                >
                  <SpotlightCard innerClassName="h-full">
                    <div className="grid min-h-[188px] gap-0 sm:grid-cols-[180px_1fr]">
                      <div className="relative min-h-[180px] overflow-hidden border-b border-white/[0.08] sm:border-b-0 sm:border-r">
                        <Image
                          src={study.image}
                          alt={`${study.company} project preview`}
                          fill
                          sizes="(max-width: 640px) 100vw, 180px"
                          className="object-cover opacity-80 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-100"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-site-bg/80 via-transparent to-transparent" />

                        <span className="absolute left-3 top-3 rounded-full border border-white/[0.12] bg-black/45 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-white/65 backdrop-blur-xl">
                          0{index + 2}
                        </span>
                      </div>

                      <div className="flex min-h-0 flex-col p-5">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
                              {getCategoryLabel(study.category)}
                            </p>

                            <p className="mt-1 line-clamp-1 text-xs text-white/45">
                              {study.company} · {study.industry}
                            </p>
                          </div>

                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.10] bg-white/[0.035] text-white/55 transition duration-300 group-hover:border-brand-blue/30 group-hover:bg-brand-blue/10 group-hover:text-white">
                            <ArrowUpRight size={15} />
                          </span>
                        </div>

                        <h3 className="mt-4 line-clamp-2 text-lg font-semibold leading-snug text-white">
                          {study.result}
                        </h3>

                        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-white/50">
                          {study.summary}
                        </p>

                        <div className="mt-auto flex items-center justify-between gap-4 pt-5">
                          <p className="text-sm font-medium text-white/70 transition duration-300 group-hover:text-white">
                            View case study
                          </p>

                          <p className="line-clamp-1 text-right font-mono text-[10px] uppercase tracking-[0.12em] text-white/30">
                            {study.stack.slice(0, 2).join(" · ")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}