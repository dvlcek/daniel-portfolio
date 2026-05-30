"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { useReveal } from "@/components/animations/useReveal";
import { CableFlow } from "@/components/visuals/CableFlow";

const outcomes = [
  {
    label: "Built around your operations",
    icon: (
      <svg width="17" height="17" viewBox="0 0 16 16" fill="none">
        <circle
          cx="8"
          cy="3"
          r="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="4"
          cy="12"
          r="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="12"
          cy="12"
          r="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M7.2 4.8L4.8 10.1M8.8 4.8L11.2 10.1M6 12H10"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Reliable, secure, and maintainable",
    icon: (
      <svg width="17" height="17" viewBox="0 0 16 16" fill="none">
        <path
          d="M8 1.5L13.2 3.7V7.4C13.2 10.7 11.1 13.6 8 14.5C4.9 13.6 2.8 10.7 2.8 7.4V3.7L8 1.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M5.7 8L7.2 9.5L10.5 6.2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Designed for leads and growth",
    icon: (
      <svg width="17" height="17" viewBox="0 0 16 16" fill="none">
        <path
          d="M2.5 12.5L6.2 8.8L8.8 11.4L13.5 5.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 5.5H13.5V9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const impactCards = [
  {
    label: "Admin time",
    value: 120,
    suffix: "h",
    decimals: 0,
    detail: "potential monthly reduction",
  },
  {
    label: "Cost control",
    value: 3.6,
    prefix: "€",
    suffix: "k",
    decimals: 1,
    detail: "based on €30/h admin time",
  },
  {
    label: "Response speed",
    value: 1,
    prefix: "<",
    suffix: "min",
    decimals: 0,
    detail: "instant lead follow-up",
  },
];

const systemItems = [
  "Lead intake",
  "CRM workflows",
  "Booking flows",
  "Client portals",
  "Dashboards",
];

type CountUpProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
};

function CountUp({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 500,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setHasAnimated(true);

        let startTime: number | null = null;

        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;

          const progress = Math.min((currentTime - startTime) / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          const currentValue = value * easedProgress;

          setDisplayValue(currentValue);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setDisplayValue(value);
          }
        };

        requestAnimationFrame(animate);
        observer.disconnect();
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [duration, hasAnimated, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    >
      <path
        d="M4 10L10 4M10 4H5M10 4V9"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeroDashboard() {
  return (
    <div className="relative mx-auto hidden h-[620px] w-full max-w-[680px] [perspective:1400px] lg:block">
      <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/10 blur-3xl" />

      <div
        className="group absolute right-0 top-8 w-[390px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/40 backdrop-blur-2xl transition-all duration-500 ease-out will-change-transform [transform:perspective(1000px)_rotateX(0deg)_rotateY(-8deg)_translateZ(0)] hover:border-brand-blue/35 hover:bg-white/[0.065] hover:shadow-brand-blue/20 hover:[transform:perspective(1000px)_rotateX(4deg)_rotateY(-13deg)_translateY(-14px)_translateZ(24px)]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.16),transparent_34%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-white/35">
                Impact model
              </p>
              <h3 className="mt-2 text-lg font-medium text-white">
                Operations value
              </h3>
            </div>

            <span className="rounded-full border border-brand-blue/30 bg-brand-blue/10 px-3 py-1 text-xs text-brand-blue-light">
              Estimated
            </span>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {impactCards.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/[0.08] bg-site-bg/50 p-3 transition duration-300 group-hover:border-white/[0.14] group-hover:bg-site-bg/65"
              >
                <p className="text-[11px] text-white/40">{item.label}</p>

                <p className="mt-2 text-2xl font-semibold tracking-tight text-white">
                  <CountUp
                    value={item.value}
                    prefix={item.prefix}
                    suffix={item.suffix}
                    decimals={item.decimals}
                    duration={500}
                  />
                </p>

                <p className="mt-2 text-[11px] leading-snug text-white/35">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-white/[0.08] bg-site-bg/50 p-4 transition duration-300 group-hover:border-white/[0.14] group-hover:bg-site-bg/65">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-white/70">Efficiency gain</p>

              <p className="text-xs text-brand-blue-light">
                +
                <CountUp value={42} suffix="%" duration={550} />
              </p>
            </div>

            <div className="flex h-20 items-end gap-2">
              {[28, 42, 36, 58, 52, 76, 68, 92].map((height, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-t-md bg-linear-to-t from-brand-blue-deep/40 to-brand-blue/90 transition-all duration-500 group-hover:to-brand-blue-soft"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="group absolute left-0 top-52 w-[270px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-black/35 backdrop-blur-2xl transition-all duration-500 ease-out will-change-transform [transform:perspective(1000px)_rotateX(0deg)_rotateY(10deg)_translateZ(0)] hover:border-brand-blue/30 hover:bg-white/[0.055] hover:shadow-brand-blue/15 hover:[transform:perspective(1000px)_rotateX(4deg)_rotateY(15deg)_translateY(-12px)_translateZ(24px)]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.13),transparent_34%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.22em] text-white/35">
            What can be improved
          </p>

          <div className="mt-4 space-y-2">
            {systemItems.map((item) => (
              <div
                key={item}
                className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-site-bg/50 px-3 py-2 transition duration-300 hover:border-brand-blue/30 hover:bg-brand-blue/10"
              >
                <span className="text-sm text-white/65">{item}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-brand-blue shadow-[0_0_14px_rgba(47,47,228,0.9)]" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="group absolute bottom-10 right-24 w-[310px] overflow-hidden rounded-3xl border border-brand-blue/20 bg-white/[0.04] p-5 shadow-2xl shadow-brand-blue/10 backdrop-blur-2xl transition-all duration-500 ease-out will-change-transform [transform:perspective(1000px)_rotateX(0deg)_rotateY(-6deg)_translateZ(0)] hover:border-brand-blue/45 hover:bg-white/[0.06] hover:shadow-brand-blue/25 hover:[transform:perspective(1000px)_rotateX(-4deg)_rotateY(-12deg)_translateY(-12px)_translateZ(24px)]"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.14),transparent_34%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative z-10 flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-brand-blue/25 bg-brand-blue/10 text-brand-blue-light transition duration-300 group-hover:scale-110 group-hover:border-brand-blue/50 group-hover:bg-brand-blue/20">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 16.5L9 11.5L13 15.5L20 7.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15 7.5H20V12.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div>
            <p className="text-sm font-medium text-white">
              Built for cleaner operations
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/45">
              Faster follow-up, clearer handoffs, fewer repeated tasks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useReveal(wrapRef);

  return (
    <section className="relative w-full overflow-hidden bg-site-bg">
      <div className="pointer-events-none absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 bg-site-bg" />

        <CableFlow className="absolute inset-y-0 right-[-8%] w-[130%] opacity-100" />

        <div className="absolute inset-0 bg-linear-to-b from-site-bg/20 via-site-bg/35 to-site-bg/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_46%,rgba(47,47,228,0.12),transparent_36%)]" />
      </div>

      <div className="relative z-10 flex min-h-[calc(100vh-65px)] w-full items-center px-5 py-16 sm:px-8 md:py-24 lg:px-12 xl:px-16 2xl:px-20">
        <div
          ref={wrapRef}
          className="grid w-full items-center gap-16 lg:grid-cols-[1fr_0.95fr]"
        >
          <div className="w-full">
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-brand-blue md:text-sm">
              Websites · Automation · Internal Tools
            </p>

            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
              Websites, automation, and internal tools for{" "}
              <span className="text-brand-blue">cleaner operations.</span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-white/65 md:text-lg xl:text-xl">
              I help companies replace disconnected websites, slow follow-up,
              and scattered tools with fast digital infrastructure built around
              how the company actually works.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                href="/contact"
                variant="primary"
                className="group w-full sm:w-auto"
              >
                <span>Book a Strategy Call</span>
                <ArrowIcon />
              </Button>

              <Button
                href="/work"
                variant="secondary"
                className="group w-full sm:w-auto"
              >
                <span>View Case Studies</span>
                <ArrowIcon />
              </Button>
            </div>

            <div className="mt-8 grid w-full gap-3 sm:grid-cols-3">
              {outcomes.map((item) => (
                <div
                  key={item.label}
                  className="group flex min-h-[62px] items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue/25 hover:bg-white/[0.045] hover:shadow-[0_12px_28px_rgba(0,0,0,0.24)]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-brand-blue transition duration-300 group-hover:text-brand-blue-soft">
                    {item.icon}
                  </span>

                  <p className="max-w-[13rem] text-sm leading-snug text-white/70 transition duration-300 group-hover:text-white/82">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}
