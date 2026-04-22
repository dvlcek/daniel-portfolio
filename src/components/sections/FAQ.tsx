"use client";

import { useState, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useStagger } from "@/components/animations/useStagger";
import { faqItems } from "@/lib/siteContent";

export function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useStagger(ref, ".faq-item", { y: 14, stagger: 0.06 });

  return (
    <section className="py-20 md:py-28">
      <Container>
        <div ref={ref}>
          <SectionTitle
            eyebrow="FAQ"
            title="Questions before we work together"
          />

          <div className="mt-10 space-y-3">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.question}
                  className="faq-item group rounded-2xl border border-white/6 bg-white/[0.03] ring-1 ring-white/8 backdrop-blur-sm transition duration-300 hover:border-white/10"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between p-5 text-left md:p-6"
                  >
                    <span className="text-sm font-semibold text-white md:text-[15px]">
                      {item.question}
                    </span>

                    <span
                      className={`text-white/50 transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-5 md:px-6 md:pb-6">
                      <p className="text-sm leading-relaxed text-white/68 md:text-[15px]">
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