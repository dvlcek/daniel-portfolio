import { ArrowUpRight, Check } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Stagger } from "@/components/animations/ScrollAnimation";
import { Button } from "@/components/ui/Button";
import { packages } from "@/lib/siteContent";

function isMainPackage(index: number) {
  return index === 0;
}

export function PackagesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-20 md:py-28">
      <Stagger
        itemSelector=".pkg-card"
        y={18}
        stagger={0.08}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10"
      >
        <SectionTitle
          eyebrow="Offers"
          title="Four ways to make your business easier to run."
          desc="The offer depends on the bottleneck: a full platform, automation around manual work, a clean website, or a remake of an outdated setup."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg, index) => {
            const mainPackage = isMainPackage(index);

            return (
              <article
                key={pkg.name}
                className={[
                  "pkg-card flex min-h-[520px] flex-col rounded-[2rem] border p-6 shadow-[0_16px_48px_rgba(16,19,26,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(16,19,26,0.10)]",
                  mainPackage
                    ? "border-[#1238F2]/28 bg-[#F4F7FF]"
                    : "border-[#E3E7F0] bg-[#FAFAF8]",
                ].join(" ")}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={[
                      "flex h-11 w-11 items-center justify-center rounded-2xl font-mono text-xs font-semibold",
                      mainPackage
                        ? "bg-[#1238F2] text-white"
                        : "bg-white text-[#1238F2] ring-1 ring-[#DDE2EE]",
                    ].join(" ")}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {mainPackage ? (
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#1238F2] ring-1 ring-[#C9D4FF]">
                      Flagship
                    </span>
                  ) : null}
                </div>

                <div className="mt-7">
                  <h3 className="text-2xl font-semibold tracking-tight text-[#10131A]">
                    {pkg.name}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#566176]">
                    <span className="font-semibold text-[#10131A]">Best for:</span>{" "}
                    {pkg.bestFor}
                  </p>
                </div>

                <div className="mt-7 h-px w-full bg-linear-to-r from-[#DDE2EE] via-[#E8EBF2] to-transparent" />

                <div className="mt-6 flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7A8497]">
                    Included
                  </p>
                  <ul className="mt-4 space-y-3">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-7 text-[#42506A]">
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1238F2]/10 text-[#1238F2]">
                          <Check size={12} />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {pkg.subtle ? (
                    <p className="mt-5 text-xs italic leading-6 text-[#7A8497]">
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
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-[2rem] border border-[#E3E7F0] bg-[#FAFAF8] p-6">
          <p className="max-w-5xl text-sm leading-7 text-[#566176] md:text-base">
            Every engagement starts with the current workflow. The goal is not
            to add features for their own sake, but to make leads, clients,
            admin work, and daily operations easier to handle.
          </p>
        </div>
      </Stagger>
    </section>
  );
}
