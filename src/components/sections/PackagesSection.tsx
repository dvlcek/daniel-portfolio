"use client";

import { useRef } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useStagger } from "@/components/animations/useStagger";
import { Button } from "@/components/ui/Button";
import { packages } from "@/lib/siteContent";

function isMainPackage(index: number) {
  return index === 0;
}

export function PackagesSection() {
  const ref = useRef<HTMLDivElement>(null);

  useStagger(ref, ".pkg-card", { y: 18, stagger: 0.08 });

  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-[#080616] py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/8 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(47,47,228,0.045),transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_60%,rgba(22,46,147,0.055),transparent_34%)]" />
      </div>

      <div
        ref={ref}
        className="relative z-10 w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20"
      >
        <div className="mx-auto max-w-[1800px]">
          <SectionTitle
            eyebrow="Services"
            title="Offers built around the systems your business needs."
            desc="Clear offers for businesses that need stronger websites, better operations, and systems built to support growth."
          />

          <div className="mt-14 grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
            {packages.map((pkg, index) => {
              const mainPackage = isMainPackage(index);

              return (
                <article
                  key={pkg.name}
                  className={[
                    "pkg-card group relative flex min-h-[540px] flex-col overflow-hidden rounded-3xl border p-6 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 md:p-7",
                    mainPackage
                      ? "border-[#2F2FE4]/28 bg-[#2F2FE4]/[0.04] shadow-[0_22px_70px_rgba(47,47,228,0.10)]"
                      : "border-white/[0.08] bg-white/[0.022] hover:border-[#2F2FE4]/22 hover:bg-white/[0.032]",
                  ].join(" ")}
                >
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-transparent to-transparent transition duration-300 group-hover:via-[#6D73FF]/60" />

                  {mainPackage ? (
                    <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-[#6D73FF]/75 to-transparent" />
                  ) : null}

                  <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#2F2FE4]/0 blur-3xl transition duration-500 group-hover:bg-[#2F2FE4]/8" />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/[0.10] bg-white/[0.035] font-mono text-xs text-white/45 transition duration-300 group-hover:border-[#2F2FE4]/30 group-hover:bg-[#2F2FE4]/10 group-hover:text-[#A7AEFF]">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      {mainPackage ? (
                        <span className="rounded-full border border-[#2F2FE4]/30 bg-[#2F2FE4]/10 px-3 py-1 text-xs text-[#A7AEFF]">
                          Core offer
                        </span>
                      ) : null}
                    </div>

                    <div className="mt-7">
                      <h3 className="text-2xl font-semibold tracking-tight text-white md:text-[1.7rem]">
                        {pkg.name}
                      </h3>

                      <p className="mt-4 text-sm leading-relaxed text-white/62">
                        <span className="text-white/35">Best for:</span>{" "}
                        {pkg.bestFor}
                      </p>
                    </div>

                    <div className="mt-8 h-px w-full bg-linear-to-r from-white/[0.10] via-white/[0.05] to-transparent" />

                    <div className="mt-7 flex-1">
                      <p className="text-[11px] uppercase tracking-[0.22em] text-white/35">
                        Included
                      </p>

                      <ul className="mt-4 space-y-3">
                        {pkg.includes.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm leading-relaxed text-white/68"
                          >
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-lg border border-[#2F2FE4]/25 bg-[#2F2FE4]/10 text-[#A7AEFF]">
                              <Check size={12} />
                            </span>

                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {pkg.subtle ? (
                        <p className="mt-5 text-xs italic leading-relaxed text-white/35">
                          {pkg.subtle}
                        </p>
                      ) : null}
                    </div>

                    <div className="mt-8">
                      <Button
                        href={pkg.cta.href}
                        variant={mainPackage ? "primary" : "secondary"}
                        className="w-full justify-center"
                      >
                        <span>{pkg.cta.label}</span>
                        <ArrowUpRight size={15} />
                      </Button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-3xl border border-white/[0.08] bg-white/[0.018] p-5 backdrop-blur-xl md:p-6">
            <p className="max-w-5xl text-sm leading-relaxed text-white/52 md:text-base">
              Every offer can be adapted to the current state of your business.
              The focus is not to sell unnecessary features, but to build the
              right system for visibility, operations, and long-term scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}