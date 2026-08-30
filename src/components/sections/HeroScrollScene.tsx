"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Boxes, Clock3, FileText, Gauge, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SystemEarth } from "@/components/visuals/SystemEarth";

const signals = [
  { label: "Leads Captured", value: "Automated", icon: Users },
  { label: "Systems", value: "Connected", icon: Boxes },
  { label: "Time Saved", value: "Tracked", icon: Clock3 },
  { label: "Revenue Impact", value: "Measured", icon: Gauge },
  { label: "Invoices", value: "Generated", icon: FileText },
] as const;

function NetworkOverlay() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 760"
      preserveAspectRatio="none"
      className="hero-network pointer-events-none absolute inset-0 z-[2] h-full w-full opacity-55"
    >
      <defs>
        <linearGradient id="networkLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#78b6ef" stopOpacity="0" />
          <stop offset="0.48" stopColor="#a9d4ff" stopOpacity="0.38" />
          <stop offset="1" stopColor="#78b6ef" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#networkLine)" strokeWidth="1">
        <path d="M20 335 C160 280 310 310 430 365 S650 430 720 448" />
        <path d="M1420 335 C1280 280 1130 310 1010 365 S790 430 720 448" />
        <path d="M120 450 C300 390 408 414 545 462" />
        <path d="M1320 450 C1140 390 1032 414 895 462" />
        <path d="M270 265 C410 250 500 310 590 365" />
        <path d="M1170 265 C1030 250 940 310 850 365" />
      </g>
      <g fill="#bfe1ff" opacity="0.68">
        <circle cx="430" cy="365" r="2" />
        <circle cx="1010" cy="365" r="2" />
        <circle cx="545" cy="462" r="2" />
        <circle cx="895" cy="462" r="2" />
        <circle cx="590" cy="365" r="1.6" />
        <circle cx="850" cy="365" r="1.6" />
      </g>
      <g fill="#f2ba7a" opacity="0.74">
        <circle cx="270" cy="265" r="1.9" />
        <circle cx="1170" cy="265" r="1.9" />
        <circle cx="720" cy="448" r="2" />
      </g>
    </svg>
  );
}

export function HeroScrollScene() {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const context = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });

        timeline
          .to(
            ".hero-copy",
            { y: -20, opacity: 0.86, scale: 0.985, ease: "none", duration: 0.28 },
            0,
          )
          .to(
            ".hero-earth-shell",
            { yPercent: 7, scale: 1.075, ease: "none", duration: 0.52 },
            0,
          )
          .to(
            ".hero-network",
            { opacity: 0.82, ease: "none", duration: 0.34 },
            0.08,
          )
          .to(
            ".hero-signal",
            { y: -16, scale: 0.985, ease: "none", stagger: 0.018, duration: 0.25 },
            0.08,
          )
          .fromTo(
            ".hero-sweep",
            { xPercent: -125, opacity: 0 },
            { xPercent: 125, opacity: 0.92, ease: "none", duration: 0.38 },
            0.26,
          )
          .to(
            ".hero-signal",
            { opacity: 0.2, y: -30, ease: "none", stagger: 0.015, duration: 0.22 },
            0.54,
          )
          .to(
            ".hero-copy",
            { opacity: 0.28, y: -42, ease: "none", duration: 0.2 },
            0.57,
          )
          .to(
            ".hero-light-wash",
            { opacity: 1, ease: "none", duration: 0.3 },
            0.66,
          )
          .to(
            ".hero-earth-shell",
            { yPercent: 20, scale: 1.14, opacity: 0.62, ease: "none", duration: 0.3 },
            0.66,
          );
      });

      return () => mm.revert();
    }, root);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      data-hero-scene
      className="relative isolate overflow-visible bg-[#06101b] md:h-[145svh] motion-reduce:h-auto"
    >
      <div className="relative min-h-[760px] overflow-hidden bg-[#06101b] md:sticky md:top-0 md:h-[100svh] md:min-h-[680px] motion-reduce:relative motion-reduce:h-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_11%,rgba(70,130,194,0.13),transparent_34%),linear-gradient(180deg,#07111d_0%,#06101b_74%,#07111d_100%)]" />

        <div className="hero-earth-shell absolute inset-0 z-0 origin-[50%_78%] will-change-transform">
          <SystemEarth className="absolute inset-0" />
        </div>
        <NetworkOverlay />

        <div className="pointer-events-none absolute inset-x-[7%] bottom-[11%] z-[3] h-[210px] rounded-[50%] border-t border-[#b8ddff]/45 shadow-[0_-8px_34px_rgba(87,159,231,0.18)]" />
        <div className="hero-sweep pointer-events-none absolute bottom-[16%] left-[24%] z-[4] h-[2px] w-[52%] rounded-full bg-[linear-gradient(90deg,transparent,rgba(206,235,255,0.95),rgba(117,181,245,0.35),transparent)] opacity-0 blur-[0.3px] shadow-[0_0_24px_rgba(154,210,255,0.85)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] h-44 bg-gradient-to-t from-[#06101b] via-[#06101b]/65 to-transparent" />
        <div className="hero-light-wash pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[48%] bg-[linear-gradient(180deg,rgba(248,248,246,0)_0%,rgba(248,248,246,0.78)_68%,#f8f8f6_100%)] opacity-0" />

        <div className="hero-copy relative z-20 mx-auto flex min-h-[510px] max-w-[1440px] items-start justify-center px-5 pt-[132px] text-center text-white sm:px-8 md:min-h-0 md:pt-[14vh] lg:px-14">
          <div className="max-w-[880px]">
            <h1 className="text-balance text-[clamp(2.55rem,5.2vw,4.85rem)] font-semibold leading-[0.98] tracking-[-0.052em]">
              I turn operational chaos
              <br className="hidden sm:block" /> into systems that scale.
            </h1>
            <p className="mx-auto mt-6 max-w-[650px] text-balance text-[14px] leading-6 text-white/63 sm:text-[15px] md:text-[16px] md:leading-7">
              Custom software, automation and applied AI that remove manual work,
              connect operations and make your business easier to run.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
              <Link
                href="/work"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-[12px] font-semibold text-[#07111d] shadow-[0_12px_34px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/94"
              >
                View My Work
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/18 bg-white/[0.035] px-5 text-[12px] font-semibold text-white/84 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/28 hover:bg-white/[0.07]"
              >
                Let&apos;s Talk
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-7 z-20 px-5 sm:px-8 md:bottom-[5.2vh] md:px-10 lg:px-14 xl:px-20">
          <div className="mx-auto grid max-w-[1160px] grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-5">
            {signals.map((signal) => {
              const Icon = signal.icon;
              return (
                <div
                  key={signal.label}
                  className="hero-signal apple-glass-dark group min-w-0 rounded-[18px] px-3.5 py-3.5 text-white will-change-transform md:px-4 md:py-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.045] text-[#acd5ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                      <Icon size={16} strokeWidth={1.55} />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-[8px] font-medium uppercase tracking-[0.08em] text-white/40">
                        {signal.label}
                      </p>
                      <p className="mt-0.5 truncate text-[12px] font-semibold tracking-[-0.015em] text-white/88 md:text-[13px]">
                        {signal.value}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
