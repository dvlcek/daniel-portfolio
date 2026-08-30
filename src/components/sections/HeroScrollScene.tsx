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
      viewBox="0 0 1440 720"
      preserveAspectRatio="none"
      className="hero-network pointer-events-none absolute inset-0 z-[2] h-full w-full opacity-50"
    >
      <defs>
        <linearGradient id="networkLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#78b6ef" stopOpacity="0" />
          <stop offset="0.48" stopColor="#b7ddff" stopOpacity="0.34" />
          <stop offset="1" stopColor="#78b6ef" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#networkLine)" strokeWidth="1">
        <path d="M10 332 C165 292 310 308 430 365 S650 426 720 442" />
        <path d="M1430 332 C1275 292 1130 308 1010 365 S790 426 720 442" />
        <path d="M110 438 C285 390 405 410 545 458" />
        <path d="M1330 438 C1155 390 1035 410 895 458" />
        <path d="M250 258 C395 250 495 302 592 360" />
        <path d="M1190 258 C1045 250 945 302 848 360" />
      </g>
      <g fill="#c7e5ff" opacity="0.66">
        <circle cx="430" cy="365" r="2" />
        <circle cx="1010" cy="365" r="2" />
        <circle cx="545" cy="458" r="2" />
        <circle cx="895" cy="458" r="2" />
        <circle cx="592" cy="360" r="1.6" />
        <circle cx="848" cy="360" r="1.6" />
      </g>
      <g fill="#efb778" opacity="0.72">
        <circle cx="250" cy="258" r="1.8" />
        <circle cx="1190" cy="258" r="1.8" />
        <circle cx="720" cy="442" r="1.9" />
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
            end: "bottom top",
            scrub: 0.75,
            invalidateOnRefresh: true,
          },
        });

        timeline
          .to(
            ".hero-copy",
            { y: -24, opacity: 0.82, scale: 0.985, ease: "none", duration: 0.3 },
            0,
          )
          .to(
            ".hero-earth-shell",
            { yPercent: 7, scale: 1.06, ease: "none", duration: 0.52 },
            0,
          )
          .to(
            ".hero-network",
            { opacity: 0.76, ease: "none", duration: 0.34 },
            0.08,
          )
          .to(
            ".hero-signal",
            { y: -12, scale: 0.99, ease: "none", stagger: 0.012, duration: 0.24 },
            0.08,
          )
          .fromTo(
            ".hero-sweep",
            { xPercent: -135, opacity: 0 },
            { xPercent: 135, opacity: 0.88, ease: "none", duration: 0.34 },
            0.28,
          )
          .to(
            ".hero-signal",
            { opacity: 0.18, y: -24, ease: "none", stagger: 0.012, duration: 0.22 },
            0.57,
          )
          .to(
            ".hero-copy",
            { opacity: 0.22, y: -38, ease: "none", duration: 0.2 },
            0.6,
          )
          .to(
            ".hero-light-wash",
            { opacity: 1, ease: "none", duration: 0.3 },
            0.64,
          )
          .to(
            ".hero-earth-shell",
            { yPercent: 14, scale: 1.12, opacity: 0.58, ease: "none", duration: 0.3 },
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
      className="relative isolate min-h-[760px] overflow-hidden bg-[#06101b] md:min-h-[780px]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(70,130,194,0.12),transparent_34%),linear-gradient(180deg,#07111d_0%,#06101b_73%,#07111d_100%)]" />

      <div className="hero-earth-shell absolute inset-0 z-0 origin-[50%_84%] will-change-transform">
        <SystemEarth className="absolute inset-0" />
      </div>
      <NetworkOverlay />

      <div className="hero-sweep pointer-events-none absolute bottom-[22%] left-[24%] z-[4] h-[2px] w-[52%] rounded-full bg-[linear-gradient(90deg,transparent,rgba(223,243,255,0.98),rgba(116,181,245,0.34),transparent)] opacity-0 blur-[0.2px] shadow-[0_0_26px_rgba(163,216,255,0.82)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] h-40 bg-gradient-to-t from-[#06101b] via-[#06101b]/42 to-transparent" />
      <div className="hero-light-wash pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[42%] bg-[linear-gradient(180deg,rgba(248,248,246,0)_0%,rgba(248,248,246,0.72)_68%,#f8f8f6_100%)] opacity-0" />

      <div className="hero-copy relative z-20 mx-auto flex max-w-[1440px] items-start justify-center px-5 pt-[128px] text-center text-white sm:px-8 md:pt-[112px] lg:px-14">
        <div className="max-w-[880px]">
          <h1 className="text-balance text-[clamp(2.55rem,5vw,4.7rem)] font-semibold leading-[0.98] tracking-[-0.052em]">
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

      <div className="absolute inset-x-0 bottom-7 z-20 px-5 sm:px-8 md:bottom-8 md:px-10 lg:px-14 xl:px-20">
        <div className="mx-auto grid max-w-[1160px] grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-5">
          {signals.map((signal, index) => {
            const Icon = signal.icon;
            return (
              <div
                key={signal.label}
                className={`hero-signal apple-glass-dark group min-w-0 rounded-[18px] px-3.5 py-3.5 text-white will-change-transform md:px-4 md:py-4 ${index === signals.length - 1 ? "col-span-2 sm:col-span-1" : ""}`}
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
    </section>
  );
}
