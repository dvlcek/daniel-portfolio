"use client";

import Image from "next/image";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useReveal } from "@/components/animations/useReveal";

const problems = [
  {
    label: "Repetitive admin tasks eating hours every week",
    icon: "/icons/problems/repetitive-tasks.png",
  },
  {
    label: "Tools and processes that don't connect properly",
    icon: "/icons/problems/disconnected.png",
  },
  {
    label: "Websites that look acceptable but don't support growth",
    icon: "/icons/problems/stagnant-website.png",
  },
  {
    label: "No clear tracking, workflow structure, or scalable backend",
    icon: "/icons/problems/no-tracking.png",
  },
];

export function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  useReveal(ref);

  return (
    <section className="relative overflow-hidden py-10 md:py-20">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-400px w-400px -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-300px w-300px rounded-full bg-white/5 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-260px w-260px rounded-full bg-white/5 blur-3xl" />
      </div>

      <Container>
        <div ref={ref} className="relative z-10">
          <SectionTitle
            eyebrow="The Problem"
            title="Most small companies don't need more effort. They need better systems."
            desc="When tasks are handled manually, tools don't connect, and the website is not built around real operations, growth starts depending on extra effort instead of better systems."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {problems.map((item) => (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/2 p-6 md:p-7 backdrop-blur-l transition duration-300 hover:border-white/10 hover:bg-white/[0.05] hover:scale-103"
              >
                <div className="absolute inset-0 bg-linear-to-br from-white/[0.03] to-transparent" />

                <div className="relative z-10 flex items-start gap-4">
                  {/* Icon badge — swap the PNG inside /public/icons/problems/ anytime */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/5 bg-white/2">
                    <Image
                      src={item.icon}
                      alt=""
                      width={30}
                      height={30}
                      className="brightness-0 invert"
                    />
                  </div>

                  <p className="pt-2 text-base font-semibold leading-snug text-white">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8 backdrop-blur-md">
            <p className="max-w-3xl text-lg leading-relaxed text-white/75 md:text-xl">
              You don&apos;t need more hustle.
              <span className="ml-2 font-semibold text-white">
                You need infrastructure that removes friction, connects workflows,
                and supports scale.
              </span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}