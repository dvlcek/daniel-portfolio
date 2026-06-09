"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  ArrowRight,
  BarChart3,
  Clock3,
  Gauge,
  Globe2,
  LayoutDashboard,
  MousePointerClick,
  Network,
  Repeat2,
  TimerReset,
  Users,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { animationConfig, reducedMotionQuery } from "@/lib/animation";
import { ensureGsap, gsap, useGSAP } from "@/components/animations/gsapClient";
import { HeroParallaxBackground } from "@/components/hero/HeroParallaxBackground";

type FloatingCard = {
  title: string;
  value: string;
  note: string;
  tag: string;
  icon: LucideIcon;
  position: string;
  widthClass: string;
  rotateClass: string;
};

type OsLayer = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type Metric = {
  label: string;
  value: string;
  note: string;
};

type Activity = {
  label: string;
  time: string;
};

const floatingCards: FloatingCard[] = [
  {
    title: "Manual Work Reduced",
    value: "18h saved",
    note: "Recurring admin tasks removed from the monthly workflow.",
    tag: "Efficiency",
    icon: Clock3,
    widthClass: "w-[220px]",
    rotateClass: "-rotate-[1.5deg]",
    position:
      "left-6 top-[7.8rem] hidden xl:block 2xl:left-14 2xl:top-[8.1rem]",
  },
  {
    title: "Lead Response Time",
    value: "2 min",
    note: "New inquiries are routed, logged, and prepared faster.",
    tag: "Speed",
    icon: TimerReset,
    widthClass: "w-[205px]",
    rotateClass: "rotate-[1.2deg]",
    position:
      "right-10 top-[10.2rem] hidden xl:block 2xl:right-20 2xl:top-[9.4rem]",
  },
  {
    title: "Qualified Lead Flow",
    value: "+27%",
    note: "Better intake and follow-up structure creates cleaner demand.",
    tag: "Growth",
    icon: MousePointerClick,
    widthClass: "w-[225px]",
    rotateClass: "rotate-[1.8deg]",
    position:
      "left-10 top-[22.4rem] hidden lg:block xl:left-20 2xl:left-28",
  },
  {
    title: "Live Automations",
    value: "31 workflows",
    note: "Follow-ups, reminders, routing, and internal tasks run automatically.",
    tag: "Automation",
    icon: Workflow,
    widthClass: "w-[250px]",
    rotateClass: "-rotate-[1.4deg]",
    position:
      "right-8 top-[24.1rem] hidden lg:block xl:right-20 2xl:right-32",
  },
  {
    title: "Connected Tools",
    value: "6 systems",
    note: "Website, forms, CRM, email, dashboard, and reporting connected.",
    tag: "Stack",
    icon: Network,
    widthClass: "w-[225px]",
    rotateClass: "rotate-[1deg]",
    position:
      "left-3 top-[38rem] hidden xl:block 2xl:left-[4.5rem]",
  },
  {
    title: "Follow-up Coverage",
    value: "94%",
    note: "Less missed opportunities through structured automated follow-up.",
    tag: "Control",
    icon: Repeat2,
    widthClass: "w-[215px]",
    rotateClass: "-rotate-[1.8deg]",
    position:
      "right-3 top-[41rem] hidden xl:block 2xl:right-[4.5rem]",
  },
  {
    title: "Operating View",
    value: "1 dashboard",
    note: "Leads, tasks, opportunities, and reporting visible in one place.",
    tag: "Clarity",
    icon: LayoutDashboard,
    widthClass: "w-[225px]",
    rotateClass: "rotate-[1.4deg]",
    position: "left-[8%] bottom-[8rem] hidden 2xl:block",
  },
  {
    title: "Pipeline Clarity",
    value: "42 open",
    note: "Active opportunities are visible instead of scattered across tools.",
    tag: "Pipeline",
    icon: Gauge,
    widthClass: "w-[215px]",
    rotateClass: "-rotate-[1deg]",
    position: "right-[8%] bottom-[6.5rem] hidden 2xl:block",
  },
];

const osLayers: OsLayer[] = [
  { title: "Website", description: "Convert", icon: Globe2 },
  { title: "Intake", description: "Qualify", icon: MousePointerClick },
  { title: "CRM", description: "Organize", icon: Users },
  { title: "Automation", description: "Execute", icon: Zap },
  { title: "Dashboard", description: "Control", icon: LayoutDashboard },
  { title: "Reporting", description: "Improve", icon: BarChart3 },
];

const metrics: Metric[] = [
  { label: "Time Saved", value: "18h", note: "per month" },
  { label: "Response", value: "2m", note: "avg. lead routing" },
  { label: "Lead Flow", value: "+27%", note: "qualified requests" },
  { label: "Follow-ups", value: "94%", note: "sent automatically" },
];

const activities: Activity[] = [
  { label: "Lead qualified", time: "2m ago" },
  { label: "CRM record created", time: "4m ago" },
  { label: "Follow-up scheduled", time: "8m ago" },
  { label: "Dashboard refreshed", time: "12m ago" },
];

function FloatingInfoCard({
  title,
  value,
  note,
  tag,
  icon: Icon,
  position,
  widthClass,
  rotateClass,
}: FloatingCard) {
  return (
    <article
      data-floating-card
      className={`acrylic-surface absolute z-20 ${widthClass} ${position} ${rotateClass} rounded-[1.55rem] border p-3 transition duration-300 hover:z-40 hover:-translate-y-1 hover:rotate-0 hover:border-[#b8643f]/28 hover:bg-white/62`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="acrylic-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border text-[#b8643f]">
          <Icon size={16} strokeWidth={1.8} />
        </span>

        <span className="acrylic-pill-success rounded-full border px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-[#4f7449]">
          {tag}
        </span>
      </div>

      <div className="acrylic-inset mt-4 rounded-[1.1rem] border p-3">
        <p className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[#7a7167]">
          {title}
        </p>

        <p className="mt-1.5 break-words text-[1.35rem] font-semibold leading-tight tracking-[-0.05em] text-[#171512]">
          {value}
        </p>

        <p className="mt-2 text-xs leading-5 text-[#5d574f]">{note}</p>
      </div>
    </article>
  );
}

function BusinessOSCard() {
  return (
    <div
      data-business-os
      className="acrylic-surface-strong relative z-30 mx-auto min-w-0 max-w-full overflow-hidden rounded-[2.4rem] border p-3 sm:w-full sm:max-w-[940px] sm:p-4 lg:p-5"
    >
      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.42),rgba(255,255,255,0.16)_58%,rgba(184,100,63,0.07))]" />
      <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-[#b8643f]/12 blur-3xl" />
      <div className="absolute -right-16 bottom-0 h-52 w-52 rounded-full bg-[#8cab72]/16 blur-3xl" />

      <div className="acrylic-inset relative z-10 min-w-0 overflow-hidden rounded-[1.85rem] border">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/45 px-4 py-4 sm:px-5">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#b8643f]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#f3d6b8]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#8cab72]" />
            </div>

            <p className="text-sm font-semibold tracking-[-0.02em] text-[#1d1a17]">
              Business OS
            </p>
          </div>

          <div className="acrylic-pill-success flex shrink-0 items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold text-[#4f7449]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6f965d]" />
            Connected
          </div>
        </div>

        <div className="grid min-w-0 gap-4 p-4 sm:p-5 lg:grid-cols-[minmax(0,1fr)_250px]">
          <div className="grid min-w-0 gap-4">
            <div className="grid min-w-0 grid-cols-2 gap-3 sm:grid-cols-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="acrylic-inset rounded-[1.15rem] border p-4"
                >
                  <p className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[#7a7167]">
                    {metric.label}
                  </p>
                  <p className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-[#171512]">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs text-[#625c54]">{metric.note}</p>
                </div>
              ))}
            </div>

            <div className="acrylic-inset rounded-[1.35rem] border p-4">
              <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm font-semibold text-[#211e1a]">
                  Operating flow
                </p>
                <span className="text-xs text-[#625c54]">
                  From lead to decision
                </span>
              </div>

              <div className="grid min-w-0 grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
                {osLayers.map((layer, index) => {
                  const Icon = layer.icon;

                  return (
                    <div
                      key={layer.title}
                      data-os-layer
                      className="acrylic-inset relative rounded-[1rem] border p-3 text-center transition duration-300 hover:-translate-y-0.5 hover:border-[#b8643f]/25 hover:bg-white/58"
                    >
                      {index < osLayers.length - 1 ? (
                        <span className="absolute -right-1 top-1/2 hidden h-px w-3 bg-[#b8643f]/38 lg:block" />
                      ) : null}

                      <span className="acrylic-icon mx-auto flex h-9 w-9 items-center justify-center rounded-xl border text-[#b8643f]">
                        <Icon size={16} strokeWidth={1.85} />
                      </span>

                      <p className="mt-2 text-[12px] font-semibold text-[#29251f]">
                        {layer.title}
                      </p>
                      <p className="mt-0.5 text-[10px] text-[#6f6960]">
                        {layer.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="acrylic-inset rounded-[1.35rem] border p-4">
              <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm font-semibold text-[#211e1a]">
                  System impact
                </p>
                <span className="text-xs text-[#625c54]">Last 30 days</span>
              </div>

              <svg viewBox="0 0 640 120" className="h-28 w-full">
                <path
                  d="M0 88 C70 84 98 70 150 74 C210 80 240 58 300 56 C360 54 390 76 452 48 C510 22 570 38 640 20"
                  fill="none"
                  stroke="#7f9f72"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <path
                  d="M0 98 C72 92 110 92 162 88 C218 84 250 78 306 76 C370 74 410 86 470 70 C530 54 584 58 640 48"
                  fill="none"
                  stroke="#b8643f"
                  strokeOpacity="0.55"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <aside className="grid min-w-0 content-start gap-3">
            <div className="acrylic-inset rounded-[1.35rem] border p-4">
              <p className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[#7a7167]">
                Recent system actions
              </p>

              <div className="mt-4 space-y-3">
                {activities.map((activity) => (
                  <div
                    key={activity.label}
                    className="flex min-w-0 items-center justify-between gap-3"
                  >
                    <div className="flex min-w-0 items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7f9f72]" />
                      <span className="truncate text-xs font-medium text-[#514b43]">
                        {activity.label}
                      </span>
                    </div>
                    <span className="shrink-0 text-[11px] text-[#756f67]">
                      {activity.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="acrylic-accent rounded-[1.35rem] border p-4">
              <p className="text-sm font-semibold leading-6 text-[#302a24]">
                One digital system for leads, workflows, follow-ups,
                dashboards, and business decisions.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      ensureGsap();

      const mm = gsap.matchMedia(root);
      const select = gsap.utils.selector(root);

      const intro = select<HTMLElement>("[data-hero-intro]");
      const floating = select<HTMLElement>("[data-floating-card]");
      const os = select<HTMLElement>("[data-business-os]");
      const layers = select<HTMLElement>("[data-os-layer]");

      mm.add(reducedMotionQuery, () => {
        gsap.set([...intro, ...floating, ...os, ...layers], {
          autoAlpha: 1,
          y: 0,
          x: 0,
          scale: 1,
          clearProps: "transform",
        });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          defaults: { ease: animationConfig.ease.default },
        });

        tl.fromTo(
          intro,
          { autoAlpha: 0, y: 18 },
          {
            autoAlpha: 1,
            y: 0,
            duration: animationConfig.duration.hero,
            stagger: animationConfig.stagger.tight,
          },
        )
          .fromTo(
            os,
            { autoAlpha: 0, y: 28, scale: 0.99 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.85,
              ease: animationConfig.ease.premium,
            },
            "-=0.3",
          )
          .fromTo(
            layers,
            { autoAlpha: 0, y: 10 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.45,
              stagger: animationConfig.stagger.tight,
            },
            "-=0.35",
          )
          .fromTo(
            floating,
            { autoAlpha: 0, y: 12, scale: 0.985 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              stagger: animationConfig.stagger.tight,
            },
            "-=0.35",
          );
      });

      return () => mm.revert();
    },
    { scope: rootRef, dependencies: [], revertOnUpdate: true },
  );

  return (
    <section
      ref={rootRef}
      className="relative isolate min-h-screen overflow-hidden bg-[#f7f4ed] pt-[calc(var(--nav-height)+2rem)] text-[#151512] sm:pt-[calc(var(--nav-height)+3rem)]"
      data-section="hero"
    >
      <HeroParallaxBackground triggerRef={rootRef} />

      <div className="relative z-20 mx-auto flex min-h-[calc(100svh-var(--nav-height)-2rem)] w-full max-w-[1500px] flex-col px-5 pb-16 sm:px-8 lg:pb-24 xl:px-12 2xl:px-16">
        {floatingCards.map((card) => (
          <FloatingInfoCard key={card.title} {...card} />
        ))}

        <div className="relative z-30 mx-auto w-full max-w-[980px] pt-8 text-center sm:pt-12 lg:pt-14">
          <h1
            data-hero-intro
            className="mx-auto max-w-[22rem] text-balance text-[clamp(2.35rem,10vw,6.4rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-[#151512] sm:max-w-[920px] sm:tracking-[-0.065em]"
          >
            Digital systems for companies that want to{" "}
            <span className="text-[#b8643f]">move faster.</span>
          </h1>

          <p
            data-hero-intro
            className="mx-auto mt-6 max-w-[760px] text-base leading-8 text-[#4f4a42] sm:text-xl sm:leading-9"
          >
            I build websites, business platforms, and automation systems that
            connect leads, workflows, data, and operations into one scalable
            foundation.
          </p>

          <div
            data-hero-intro
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              href="/contact"
              className="group inline-flex h-12 w-full max-w-[350px] items-center justify-center gap-2 rounded-full bg-[#b8643f] px-6 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(184,100,63,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#a95736] sm:w-auto"
            >
              Build My System
              <ArrowRight
                size={15}
                className="transition duration-300 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href="#problem"
              className="acrylic-pill inline-flex h-12 w-full max-w-[350px] items-center justify-center rounded-full border px-6 text-sm font-semibold text-[#29251f] transition duration-300 hover:-translate-y-0.5 hover:bg-white/62 sm:w-auto"
            >
              See the System Problem
            </Link>
          </div>
        </div>

        <div className="relative z-30 mt-10 flex-1 pb-8 sm:mt-12 lg:mt-14">
          <BusinessOSCard />
        </div>
      </div>
    </section>
  );
}
