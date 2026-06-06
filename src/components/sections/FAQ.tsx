"use client";

import { useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useStagger } from "@/components/animations/useStagger";
import { faqItems } from "@/lib/siteContent";

export function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useStagger(ref, ".faq-item", { y: 14, stagger: 0.06 });

  return (
    <section className="relative overflow-hidden bg-site-bg py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-black/8 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(47,47,228,0.03),transparent_30%)]" />
      </div>

      <Container>
        <div ref={ref} className="relative z-10">
          <SectionTitle
            eyebrow="FAQ"
            title="Questions before we work together"
            desc="Simple answers about scope, process, launch, and what working together usually looks like."
          />

          <div className="mt-12 border-t border-black/[0.08]">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              const answerId = `faq-answer-${index}`;

              return (
                <div
                  key={item.question}
                  className="faq-item border-b border-black/[0.08]"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="group flex min-h-[76px] w-full items-center justify-between gap-6 py-5 text-left md:min-h-[84px] md:py-6"
                  >
                    <div className="flex min-w-0 items-center gap-5">
                      <span
                        className={[
                          "w-6 shrink-0 font-mono text-xs transition-colors duration-300",
                          isOpen
                            ? "text-brand-blue-light"
                            : "text-cream/28 group-hover:text-brand-blue",
                        ].join(" ")}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={[
                          "text-base font-medium leading-snug transition-colors duration-300 md:text-lg",
                          isOpen
                            ? "text-cream"
                            : "text-cream/76 group-hover:text-cream",
                        ].join(" ")}
                      >
                        {item.question}
                      </span>
                    </div>

                    <span
                      className={[
                        "relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300",
                        isOpen
                          ? "text-brand-blue-light"
                          : "text-cream/36 group-hover:text-brand-blue-light",
                      ].join(" ")}
                    >
                      <span className="absolute h-px w-3.5 bg-current" />
                      <span
                        className={[
                          "absolute h-3.5 w-px bg-current transition-transform duration-300",
                          isOpen ? "scale-y-0" : "scale-y-100",
                        ].join(" ")}
                      />
                    </span>
                  </button>

                  <div
                    id={answerId}
                    className={[
                      "overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
                      isOpen ? "max-h-56 opacity-100" : "max-h-0 opacity-0",
                    ].join(" ")}
                  >
                    <div className="pb-6 pl-11 pr-10 md:pb-7 md:pl-11">
                      <p className="max-w-3xl text-sm leading-relaxed text-cream/55 md:text-[15px]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}