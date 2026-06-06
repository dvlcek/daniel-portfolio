"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  ArrowRight,
  CalendarCheck,
  ClipboardList,
  CreditCard,
  FileText,
  Globe2,
  Mail,
  MessageSquare,
  SquareCheckBig,
  Table2,
  Users,
  type LucideIcon,
} from "lucide-react";
import { animationConfig, reducedMotionQuery } from "@/lib/animation";
import { ensureGsap, gsap, useGSAP } from "@/components/animations/gsapClient";

type InputTool = {
  id: string;
  label: string;
  icon: LucideIcon;
  x: number;
  y: number;
  targetY: number;
};

type RightToolNode = {
  id: string;
  label: string;
  icon: LucideIcon;
  x: number;
  y: number;
  lineY: number;
  color: string;
};

const coreTitle = "DV";
const coreEyebrow = "Connected";
const coreSubtitle = "Business OS";

const inputTools: InputTool[] = [
  { id: "website", label: "Website", icon: Globe2, x: 4.2, y: 9, targetY: 36 },
  { id: "crm", label: "CRM", icon: Users, x: 7.2, y: 22, targetY: 39.5 },
  { id: "emails", label: "Emails", icon: Mail, x: 3.2, y: 35, targetY: 43 },
  { id: "bookings", label: "Bookings", icon: CalendarCheck, x: 6.2, y: 48, targetY: 46.5 },
  { id: "payments", label: "Payments", icon: CreditCard, x: 3.7, y: 61, targetY: 50 },
  { id: "spreadsheet", label: "Spreadsheet", icon: Table2, x: 7.4, y: 74, targetY: 53.5 },
  { id: "manual-tasks", label: "Manual Tasks", icon: ClipboardList, x: 4.6, y: 87, targetY: 57 },
];

const rightToolNodes: RightToolNode[] = [
  { id: "messages", label: "Messages", icon: MessageSquare, x: 76, y: 17, lineY: 37.2, color: "text-clay" },
  { id: "documents", label: "Documents", icon: FileText, x: 88, y: 27, lineY: 40.6, color: "text-muted-cream" },
  { id: "sheets", label: "Sheets", icon: Table2, x: 84, y: 45, lineY: 44, color: "text-sand" },
  { id: "tasks", label: "Tasks", icon: SquareCheckBig, x: 88, y: 61, lineY: 47.4, color: "text-mist-blue" },
  { id: "calendar", label: "Calendar", icon: CalendarCheck, x: 82, y: 78, lineY: 50.8, color: "text-clay" },
  { id: "team", label: "Team", icon: Users, x: 73, y: 80, lineY: 54.2, color: "text-mist-blue" },
];

function ConnectorLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full lg:block"
      viewBox="0 0 100 100"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
      data-flow-lines="hero-clean-lines"
    >
      <defs>
        <linearGradient id="heroStream" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#151512" stopOpacity="0.08" />
          <stop offset="48%" stopColor="#B8643F" stopOpacity="0.62" />
          <stop offset="100%" stopColor="#5F7480" stopOpacity="0.18" />
        </linearGradient>
      </defs>

      <path d="M30 46.5 C37 46.5 42 46.5 47.3 46.5" stroke="url(#heroStream)" strokeWidth="0.9" vectorEffect="non-scaling-stroke" />
      <path d="M52.7 46.5 C58 46.5 64 46.5 70 46.5" stroke="url(#heroStream)" strokeWidth="0.9" vectorEffect="non-scaling-stroke" />

      {inputTools.map((item, index) => {
        const startX = item.x + 20.5;
        const startY = item.y;

        return (
          <g key={`input-line-${item.id}`}>
            <path
              d={`M${startX} ${startY} C31 ${startY} 36 ${item.targetY} 46.9 ${item.targetY}`}
              stroke={index % 2 === 0 ? "#B8643F" : "#5F7480"}
              strokeOpacity="0.36"
              strokeWidth="0.72"
              vectorEffect="non-scaling-stroke"
            />
          </g>
        );
      })}

      {rightToolNodes.map((node) => {
        const endX = node.x - 4.6;

        return (
          <g key={`output-line-${node.id}`}>
            <path
              d={`M53.1 ${node.lineY} C60 ${node.lineY} 64 ${node.y} ${endX} ${node.y}`}
              stroke="#5F7480"
              strokeOpacity="0.30"
              strokeWidth="0.72"
              vectorEffect="non-scaling-stroke"
            />
          </g>
        );
      })}
    </svg>
  );
}

function CenterLogo() {
  return (
    <div
      className="absolute left-1/2 top-[46.5%] z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
      data-flow-core="business-os"
    >
      <div className="absolute h-[15rem] w-[15rem] rounded-full bg-clay/[0.10] blur-3xl" />
      <div className="absolute h-[10rem] w-[14rem] rounded-full bg-mist-blue/[0.10] blur-3xl" />

      <div className="relative flex h-[9.5rem] w-[10.5rem] items-center justify-center overflow-hidden rounded-[2rem] border border-black/[0.08] bg-white text-cream shadow-[0_28px_90px_rgba(21,21,18,0.12),0_0_70px_rgba(184,100,63,0.12)]">
        <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.88),rgba(242,239,230,0.72)_54%,rgba(201,166,107,0.20))]" />
        <div className="relative z-10 flex flex-col items-center justify-center px-5 text-center">
          <p className="font-mono text-[0.52rem] font-bold uppercase tracking-[0.22em] text-[#4D514A]">
            {coreEyebrow}
          </p>
          <p className="mt-1 text-[2.9rem] leading-none tracking-[-0.08em] text-[#050505]">
            {coreTitle}
          </p>
          <p className="mt-3 max-w-[8rem] font-mono text-[0.48rem] font-bold uppercase leading-3 tracking-[0.16em] text-[#4D514A]">
            {coreSubtitle}
          </p>
          <p className="mt-2 text-[0.68rem] font-semibold leading-4 tracking-[-0.01em] text-[#0D0E0C]">
            Connect tools. Automate work. See the business.
          </p>
        </div>
      </div>
    </div>
  );
}

function DesktopSystemMap() {
  return (
    <div className="relative mx-auto hidden h-[360px] w-full max-w-[1180px] overflow-visible lg:block">
      <div className="pointer-events-none absolute inset-x-10 top-[46%] h-px bg-linear-to-r from-transparent via-clay/18 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-[44%] h-[20rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(184,100,63,0.10),rgba(95,116,128,0.06)_42%,transparent_70%)] blur-3xl" />
      <ConnectorLines />
      <CenterLogo />

      {inputTools.map(({ id, label, icon: Icon, x, y }) => (
        <div
          key={id}
          data-flow-source={id}
          style={{ left: `${x}%`, top: `${y}%` }}
          className="group absolute z-20 flex h-[42px] w-[210px] -translate-y-1/2 items-center gap-3 overflow-hidden rounded-xl border border-black/[0.08] bg-white/82 px-4 shadow-[0_14px_34px_rgba(21,21,18,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-2xl transition duration-300 hover:scale-[1.01] hover:border-clay/25 hover:bg-white"
        >
          <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.80),rgba(247,244,236,0.55)_52%,rgba(184,100,63,0.055))]" />
          <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/[0.08] bg-site-bg text-clay shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-xl">
            <Icon size={15} strokeWidth={1.9} />
          </span>
          <span className="relative truncate text-sm font-semibold tracking-[-0.01em] text-muted-cream">
            {label}
          </span>
        </div>
      ))}

      {rightToolNodes.map(({ id, label, icon: Icon, x, y, color }) => (
        <div
          key={id}
          data-flow-output={id}
          style={{ left: `${x}%`, top: `${y}%` }}
          className="absolute z-20 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border border-black/[0.08] bg-white/90 shadow-[0_14px_34px_rgba(21,21,18,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-2xl transition duration-300 hover:scale-105 hover:border-clay/25 hover:bg-white"
          aria-label={label}
          title={label}
        >
          <div className="absolute inset-0 rounded-full bg-[linear-gradient(145deg,rgba(255,255,255,0.85),rgba(247,244,236,0.52)_58%,rgba(95,116,128,0.10))]" />
          <Icon className={`relative ${color}`} size={20} strokeWidth={2} />
        </div>
      ))}

      <div
        data-flow-output="clarity-pill"
        className="absolute left-1/2 top-[86%] z-20 flex h-10 min-w-[250px] -translate-x-1/2 items-center justify-center overflow-hidden rounded-[18px] border border-clay/20 bg-white/82 px-5 text-center shadow-[0_18px_48px_rgba(21,21,18,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-2xl"
      >
        <p className="relative text-sm font-bold text-cream">
          One System. Operational Clarity.
        </p>
      </div>
    </div>
  );
}

function MobileSystemMap() {
  return (
    <div className="lg:hidden">
      <div className="grid min-w-0 grid-cols-1 gap-3 min-[420px]:grid-cols-2">
        {inputTools.map(({ id, label, icon: Icon }) => (
          <div
            key={id}
            className="flex min-h-14 min-w-0 items-center gap-3 overflow-hidden rounded-2xl border border-black/[0.08] bg-white/75 px-3 py-3 shadow-[0_12px_30px_rgba(21,21,18,0.06),inset_0_1px_0_rgba(255,255,255,0.78)] backdrop-blur-2xl"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/[0.08] bg-site-bg text-clay shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-xl">
              <Icon size={16} strokeWidth={1.9} />
            </span>
            <span className="truncate text-xs font-semibold text-muted-cream">
              {label}
            </span>
          </div>
        ))}
      </div>
      <div className="relative mt-5 overflow-visible p-2">
        <div className="pointer-events-none absolute inset-x-4 top-1/2 h-px bg-linear-to-r from-transparent via-clay/18 to-transparent" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(184,100,63,0.10),rgba(95,116,128,0.06)_48%,transparent_72%)] blur-3xl" />
        <div className="relative mx-auto flex min-h-44 w-full max-w-[17rem] items-center justify-center overflow-hidden rounded-[2rem] border border-black/[0.08] bg-white p-5 text-cream shadow-[0_24px_70px_rgba(21,21,18,0.10)]">
          <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.88),rgba(242,239,230,0.72)_56%,rgba(201,166,107,0.18))]" />
          <div className="relative z-10 flex flex-col items-center text-center">
            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.22em] text-[#4D514A]">
              {coreEyebrow}
            </p>
            <p className="mt-1 text-[2.7rem] leading-none tracking-[-0.08em] text-[#050505]">
              {coreTitle}
            </p>
            <p className="mt-2 font-mono text-[8px] font-bold uppercase tracking-[0.16em] text-[#4D514A]">
              {coreSubtitle}
            </p>
            <p className="mt-2 max-w-[11rem] text-xs font-semibold leading-5 text-[#0D0E0C]">
              Connect tools. Automate work. See the business.
            </p>
          </div>
        </div>
        <div className="mt-5 flex justify-center gap-3">
          {rightToolNodes.slice(0, 5).map(({ id, label, icon: Icon, color }) => (
            <span
              key={id}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.08] bg-white/80 shadow-[0_10px_24px_rgba(21,21,18,0.06),inset_0_1px_0_rgba(255,255,255,0.82)]"
              aria-label={label}
              title={label}
            >
              <Icon className={color} size={16} strokeWidth={2} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SystemMap() {
  return (
    <div className="relative mt-8 w-full min-w-0 md:mt-10">
      <DesktopSystemMap />
      <MobileSystemMap />
    </div>
  );
}

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const root = rootRef.current;
    if (!root) return;

    ensureGsap();

    const mm = gsap.matchMedia(root);
    const select = gsap.utils.selector(root);
    const introItems = select<HTMLElement>("[data-hero-intro]");
    const systemItems = select<HTMLElement>(
      "[data-flow-source], [data-flow-output], [data-flow-core='business-os']",
    );
    const lines = select<SVGPathElement>("[data-flow-lines='hero-clean-lines'] path");

    mm.add(reducedMotionQuery, () => {
      gsap.set([...introItems, ...systemItems], {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        clearProps: "transform",
      });
      gsap.set(lines, { clearProps: "all" });
    });

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      lines.forEach((line) => {
        const length = line.getTotalLength();
        gsap.set(line, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });

      const tl = gsap.timeline({ defaults: { ease: animationConfig.ease.default } });

      tl.fromTo(
        introItems,
        { autoAlpha: 0, y: 18 },
        {
          autoAlpha: 1,
          y: 0,
          duration: animationConfig.duration.hero,
          stagger: animationConfig.stagger.tight,
        },
      )
        .to(
          lines,
          {
            strokeDashoffset: 0,
            duration: 1.1,
            ease: animationConfig.ease.soft,
            stagger: 0.025,
          },
          "-=0.35",
        )
        .fromTo(
          systemItems,
          { autoAlpha: 0, y: 14, scale: 0.985 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            ease: animationConfig.ease.premium,
            stagger: animationConfig.stagger.tight,
          },
          "-=0.9",
        );
    });

    return () => mm.revert();
  }, { scope: rootRef, dependencies: [], revertOnUpdate: true });

  return (
    <section
      ref={rootRef}
      className="relative isolate overflow-hidden bg-site-bg pt-28 text-cream md:pt-32"
      data-section="hero"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(167,183,190,0.24),transparent_38%),radial-gradient(circle_at_82%_18%,rgba(184,100,63,0.12),transparent_30%),linear-gradient(180deg,#F7F4EC_0%,#F1EDE3_100%)]" />
        <div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(21,21,18,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(21,21,18,0.045)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-6rem)] w-full max-w-[1500px] flex-col justify-center px-5 pb-16 sm:px-8 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[900px] text-center">
          <p data-hero-intro className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/68 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-muted-cream shadow-[0_12px_32px_rgba(21,21,18,0.06),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-2xl">
            <span className="h-1.5 w-1.5 rounded-full bg-clay shadow-[0_0_24px_rgba(193,106,58,0.55)]" />
            Software Developer & Automation Architect
          </p>
          <h1 data-hero-intro className="mx-auto max-w-[900px] text-balance break-words text-[clamp(2.85rem,6vw,6rem)] font-semibold leading-[1.01] tracking-[-0.055em] text-cream max-[480px]:max-w-[350px] max-[480px]:text-[2.45rem] max-[480px]:leading-[1.04]">
            Digital systems for companies that want to move faster.
          </h1>
          <p data-hero-intro className="mx-auto mt-6 max-w-[820px] text-base leading-8 text-stone max-[480px]:max-w-[350px] sm:text-xl sm:leading-9">
            I design and build high-performing websites, business platforms,
            and automation systems that connect your leads, workflows, data,
            and operations into one scalable digital foundation.
          </p>
          <div data-hero-intro className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="group inline-flex h-12 w-full max-w-[350px] items-center justify-center gap-3 overflow-hidden rounded-full bg-cream px-6 text-sm font-semibold text-site-bg shadow-[0_18px_50px_rgba(21,21,18,0.14)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#0D0E0C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/60 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg sm:w-auto sm:min-w-[220px]"
            >
              Book a Strategy Call
              <ArrowRight size={14} className="transition duration-300 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/work"
              className="inline-flex h-12 w-full max-w-[350px] items-center justify-center rounded-full border border-black/[0.08] bg-white/70 px-6 text-sm font-semibold text-cream shadow-[0_14px_38px_rgba(21,21,18,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-2xl transition duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/50 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg sm:w-auto sm:min-w-[210px]"
            >
              Explore Systems
            </Link>
          </div>
        </div>

        <SystemMap />
      </div>
    </section>
  );
}
