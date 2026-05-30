"use client";

import { useRef } from "react";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useStagger } from "@/components/animations/useStagger";
import { processSteps } from "@/lib/siteContent";

const phaseOutputs = [
  {
    label: "Strategy output",
    items: ["Business goal clarity", "Lead and operations map", "Priority list"],
  },
  {
    label: "Scope output",
    items: ["Page and feature structure", "Integration plan", "Implementation path"],
  },
  {
    label: "Build output",
    items: ["Working product", "Connected tools", "Tested user journeys"],
  },
  {
    label: "Launch output",
    items: ["Live deployment", "Performance checks", "Next-step roadmap"],
  },
];

const phaseTransitions = [
  "Bottlenecks become priorities",
  "Priorities become build scope",
  "Build scope becomes launch",
  "Launch becomes improvement",
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);

  useStagger(ref, ".process-step", { y: 24, stagger: 0.1 });

  return (
    <section
      id="process"
      className="relative overflow-hidden bg-site-bg py-20 md:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(47,47,228,0.07),transparent_28%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_86%_52%,rgba(22,46,147,0.08),transparent_34%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/8 to-transparent" />

        <div className="absolute right-0 top-0 h-full w-1/2 opacity-[0.022]">
          <div className="h-full w-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:96px_96px]" />
        </div>
      </div>

      <Container>
        <div ref={ref} className="relative z-10">
          {/* Header */}
          <div className="grid gap-10 lg:grid-cols-[0.9fr_0.72fr] lg:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-brand-blue md:text-sm">
                Process
              </p>

              <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
                A controlled process from business clarity to shipped work.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-relaxed text-white/60 md:text-lg lg:justify-self-end">
              Every project starts by understanding the offer, customer journey,
              tools, and operational bottlenecks. Then the right website,
              dashboard, CRM flow, or automation is scoped and delivered.
            </p>
          </div>

          {/* Phase overview */}
          {/* <div className="mt-14 rounded-3xl border border-white/[0.08] bg-white/[0.025] p-4 backdrop-blur-xl">
            <div className="grid gap-3 md:grid-cols-4">
              {processOverview.map((item, index) => (
                <div
                  key={item}
                  className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-site-bg/55 px-4 py-4"
                >
                  <div className="absolute inset-x-4 top-0 h-px bg-linear-to-r from-transparent via-brand-blue/35 to-transparent" />

                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-brand-blue/25 bg-brand-blue/10 font-mono text-xs text-brand-blue-light">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <p className="text-sm font-medium text-white/75">
                        {item}
                      </p>

                      <p className="mt-1 text-xs text-white/35">
                        Phase {index + 1}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          {/* Process timeline */}
          <div className="relative mt-16">
            <div className="absolute left-5 top-0 h-full w-px bg-linear-to-b from-brand-blue/0 via-brand-blue/30 to-brand-blue/0 lg:left-1/2 lg:-translate-x-1/2" />

            <div className="space-y-10 lg:space-y-14">
              {processSteps.map((step, index) => {
                const phase = phaseOutputs[index] ?? phaseOutputs[0];
                const transition =
                  phaseTransitions[index] ?? "Clear handoff to next phase";
                const isEven = index % 2 === 0;
                const isLast = index === processSteps.length - 1;

                return (
                  <div key={step.title}>
                    <article
                      className={[
                        "process-step relative grid gap-6 lg:grid-cols-2 lg:items-center",
                        isEven ? "" : "lg:[&>*:first-child]:col-start-2",
                      ].join(" ")}
                    >
                      {/* Timeline node */}
                      <div className="absolute left-5 top-6 z-20 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-2xl border border-brand-blue/30 bg-site-bg font-mono text-xs text-brand-blue-light shadow-[0_0_0_8px_var(--color-site-bg)] lg:left-1/2">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      {/* Main phase card */}
                      <div
                        className={[
                          "ml-12 overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-xl transition-[border-color,background-color] duration-300 hover:border-brand-blue/22 hover:bg-white/[0.035] md:p-7 lg:ml-0",
                          isEven ? "lg:mr-14" : "lg:ml-14",
                        ].join(" ")}
                      >
                        <div className="h-px w-full bg-linear-to-r from-brand-blue/40 via-white/[0.08] to-transparent" />

                        <div className="mt-6">
                          <p className="text-xs uppercase tracking-[0.24em] text-white/35">
                            Phase {String(index + 1).padStart(2, "0")}
                          </p>

                          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                            {step.title}
                          </h3>

                          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/56 md:text-[15px]">
                            {step.description}
                          </p>

                          <div className="mt-6">
                            <p className="text-xs uppercase tracking-[0.22em] text-brand-blue-light">
                              {phase.label}
                            </p>

                            <div className="mt-4 grid gap-2">
                              {phase.items.map((item) => (
                                <div
                                  key={item}
                                  className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-site-bg/45 px-4 py-3"
                                >
                                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-brand-blue/25 bg-brand-blue/10 text-brand-blue-light">
                                    <Check size={13} />
                                  </span>

                                  <span className="text-sm text-white/62">
                                    {item}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Opposite explanation panel - not clickable */}
                      <div
                        className={[
                          "hidden lg:block",
                          isEven
                            ? "lg:pl-14"
                            : "lg:col-start-1 lg:row-start-1 lg:pr-14",
                        ].join(" ")}
                      >
                        <div className="rounded-3xl border border-white/[0.06] bg-site-bg/35 p-5">
                          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/30">
                            Phase purpose
                          </p>

                          <p className="mt-3 text-sm leading-relaxed text-white/45">
                            This step creates a clear decision point before the
                            project moves forward, so scope stays focused and
                            every deliverable has a defined role.
                          </p>
                        </div>
                      </div>
                    </article>

                    {/* Transition between phases */}
                    {!isLast ? (
                      <div className="process-step relative my-8 ml-12 lg:ml-0">
                        <div className="grid lg:grid-cols-2">
                          <div
                            className={[
                              isEven ? "lg:col-start-1 lg:pr-14" : "lg:col-start-2 lg:pl-14",
                            ].join(" ")}
                          >
                            <div className="relative rounded-2xl border border-brand-blue/18 bg-brand-blue/[0.035] px-4 py-3">
                              <div className="absolute left-[-31px] top-1/2 hidden h-px w-8 bg-brand-blue/28 lg:block" />

                              <div className="flex items-center justify-between gap-4">
                                <p className="text-xs uppercase tracking-[0.22em] text-brand-blue-light/80">
                                  Transition
                                </p>

                                <span className="h-px flex-1 bg-linear-to-r from-brand-blue/35 to-transparent" />

                                <p className="text-sm font-medium text-white/62">
                                  {transition}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA - clearly clickable */}
          <div className="mt-16 rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-xl md:p-7">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/35">
                  After launch
                </p>

                <p className="mt-3 max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
                  The launch is not the finish line.
                  <span className="ml-2 font-semibold text-white">
                    It is where the website, tools, and follow-up process start
                    proving what should improve next.
                  </span>
                </p>
              </div>

              <Button href="/contact" variant="primary">
                Book a Strategy Call
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
