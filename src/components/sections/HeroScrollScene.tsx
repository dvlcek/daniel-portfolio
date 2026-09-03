"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SystemEarth } from "@/components/visuals/SystemEarth";

const signals = [
  "Systems, not software",
  "Automation that delivers",
  "Data that drives",
  "Decisions that scale",
] as const;

export function HeroScrollScene() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = rootRef.current;
    if (!root) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add("(min-width: 768px)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: root,
              start: "top top",
              end: "bottom top",
              scrub: 0.8,
              invalidateOnRefresh: true,
            },
          })
          .to(".hero-copy", { y: -18, opacity: 0.78, ease: "none" }, 0)
          .to(".hero-earth-shell", { yPercent: 7, scale: 1.05, ease: "none" }, 0)
          .to(".hero-signal-strip", { y: -8, opacity: 0.55, ease: "none" }, 0.12)
          .to(".hero-light-wash", { opacity: 0.9, ease: "none" }, 0.68);
      });

      return () => media.revert();
    }, root);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      data-hero-scene
      className="relative isolate min-h-[720px] overflow-hidden bg-[#050a10] text-white md:min-h-[760px]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_7%,rgba(255,255,255,0.018),transparent_30%),linear-gradient(180deg,#05080d_0%,#060b12_58%,#07111a_100%)]" />

      <div className="hero-earth-shell absolute inset-0 z-0 origin-[50%_82%] will-change-transform">
        <SystemEarth className="absolute inset-0" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-52 bg-gradient-to-t from-[#07111a] via-[#07111a]/45 to-transparent" />
      <div className="hero-light-wash pointer-events-none absolute inset-x-0 bottom-0 z-[4] h-40 bg-gradient-to-t from-[#f7f4ef]/14 to-transparent opacity-0" />

      <div className="hero-copy relative z-20 mx-auto flex max-w-[1280px] justify-center px-5 pt-[126px] text-center sm:px-8 md:pt-[138px] lg:px-14">
        <div className="max-w-[850px]">
          <h1 className="text-balance text-[clamp(2.75rem,5.35vw,4.85rem)] font-medium leading-[0.99] tracking-[-0.055em]">
            I turn operational chaos
            <br className="hidden sm:block" /> into systems that <span className="text-[#ff6a00]">scale.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-[650px] text-balance text-[13px] leading-6 text-white/58 sm:text-[14px] md:text-[15px]">
            Custom software, automation and applied AI built around how your business actually works.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
            <Link
              href="/work"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#ff6a00] px-5 text-[11px] font-semibold text-white shadow-[0_10px_30px_rgba(255,106,0,0.18)] transition hover:-translate-y-0.5 hover:bg-[#ff781f]"
            >
              View My Work
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/20 bg-black/10 px-5 text-[11px] font-semibold text-white/82 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white/35 hover:text-white"
            >
              Let&apos;s Talk
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-signal-strip absolute inset-x-0 bottom-0 z-20 px-5 sm:px-8 lg:px-14">
        <div className="mx-auto grid max-w-[1180px] grid-cols-2 border-t border-white/10 sm:grid-cols-4">
          {signals.map((signal, index) => (
            <div
              key={signal}
              className={`flex min-h-[58px] items-center justify-center gap-2 px-3 text-center text-[8px] font-semibold uppercase tracking-[0.16em] text-white/38 sm:text-[9px] ${index > 0 ? "border-l border-white/10" : ""}`}
            >
              {index === 0 ? <span className="h-1.5 w-1.5 rounded-full bg-[#ff6a00]" /> : null}
              {signal}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
