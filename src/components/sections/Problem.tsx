"use client";

import {
  AlertCircle,
  CalendarCheck,
  ClipboardList,
  CreditCard,
  Globe2,
  HelpCircle,
  Mail,
  MousePointerClick,
  PlugZap,
  Table2,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";

type ProblemTool = {
  id: string;
  label: string;
  icon: LucideIcon;
  x: number;
  y: number;
  rotate: number;
  color: string;
};

type ProblemPoint = {
  label: string;
  desc: string;
  icon: LucideIcon;
};

const problemTools: ProblemTool[] = [
  { id: "website", label: "Website", icon: Globe2, x: 12, y: 18, rotate: -5, color: "text-[#2563EB]" },
  { id: "crm", label: "CRM", icon: Users, x: 57, y: 12, rotate: 4, color: "text-[#4F46E5]" },
  { id: "emails", label: "Emails", icon: Mail, x: 34, y: 34, rotate: -2, color: "text-[#2563EB]" },
  { id: "bookings", label: "Bookings", icon: CalendarCheck, x: 72, y: 38, rotate: 6, color: "text-[#2563EB]" },
  { id: "payments", label: "Payments", icon: CreditCard, x: 17, y: 61, rotate: 3, color: "text-[#2563EB]" },
  { id: "spreadsheet", label: "Spreadsheet", icon: Table2, x: 48, y: 70, rotate: -4, color: "text-[#16A34A]" },
  { id: "manual-tasks", label: "Manual Tasks", icon: ClipboardList, x: 76, y: 71, rotate: 3, color: "text-[#1D2740]" },
];

const problemPoints: ProblemPoint[] = [
  {
    label: "Too much work still happens manually",
    desc: "Follow-ups, reminders, client details, and admin tasks depend on people remembering what to do next.",
    icon: MousePointerClick,
  },
  {
    label: "Tools do not talk to each other",
    desc: "Forms, email, CRM, payments, booking, and client communication live in separate places.",
    icon: PlugZap,
  },
  {
    label: "The website does not support the process",
    desc: "The site may look acceptable, but the lead path is weak and the work after contact is still unclear.",
    icon: Globe2,
  },
  {
    label: "No clear view of next actions",
    desc: "Without a simple system or dashboard, every new inquiry creates more checking and coordination.",
    icon: Workflow,
  },
];

function ProblemScribbleLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full md:block"
      viewBox="0 0 720 430"
      fill="none"
      aria-hidden="true"
      data-flow-lines="problem-scribble-lines"
    >
      <defs>
        <filter id="problemLineGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path d="M74 92 C150 28 214 132 282 78 C352 22 420 92 492 58 C556 28 602 68 664 44" stroke="#A8B5DE" strokeDasharray="5 8" strokeLinecap="round" strokeWidth="1.4" filter="url(#problemLineGlow)" />
      <path d="M108 250 C182 172 252 300 334 214 C418 126 496 254 598 174" stroke="#90A8EA" strokeDasharray="4 8" strokeLinecap="round" strokeWidth="1.35" />
      <path d="M128 320 C218 356 292 260 372 310 C452 360 548 284 642 322" stroke="#B6C5F2" strokeDasharray="3 8" strokeLinecap="round" strokeWidth="1.25" />
      <path d="M270 120 C304 148 266 196 228 176 C186 154 220 94 270 120 C322 146 306 218 250 224" stroke="#B0BFF2" strokeDasharray="4 8" strokeLinecap="round" strokeWidth="1.2" />
      <path d="M450 98 C508 64 584 102 558 154 C532 206 446 178 470 124 C492 74 574 118 628 96" stroke="#B0BFF2" strokeDasharray="4 8" strokeLinecap="round" strokeWidth="1.2" />
      <path d="M470 270 C526 226 612 236 604 292 C596 344 504 332 512 282 C522 226 610 270 668 244" stroke="#B0BFF2" strokeDasharray="4 8" strokeLinecap="round" strokeWidth="1.2" />
    </svg>
  );
}

function ProblemToolCard({ tool }: { tool: ProblemTool }) {
  const Icon = tool.icon;

  return (
    <div
      data-flow-target={tool.id}
      data-flow-rotate={tool.rotate}
      style={{
        left: `${tool.x}%`,
        top: `${tool.y}%`,
        transform: `translate(-50%, -50%) rotate(${tool.rotate}deg)`,
      }}
      className="absolute z-20 hidden h-12 w-[168px] items-center gap-3 overflow-hidden rounded-2xl bg-white/45 px-3.5 shadow-[0_16px_42px_rgba(16,35,95,0.08),inset_0_1px_0_rgba(255,255,255,0.78)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:bg-white/62 md:flex"
    >
      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.62),rgba(255,255,255,0.16)_55%,rgba(94,134,255,0.08))]" />
      <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/62 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl">
        <Icon className={tool.color} size={15} strokeWidth={2} />
      </span>
      <span className="relative truncate text-xs font-semibold text-[#1D2740]">
        {tool.label}
      </span>
    </div>
  );
}

function WarningBubble({ id, icon: Icon, className }: { id: string; icon: LucideIcon; className: string }) {
  return (
    <span
      data-flow-problem-node={id}
      className={[
        "absolute z-30 hidden h-11 w-11 items-center justify-center rounded-full bg-white/58 text-[#1238F2] shadow-[0_14px_32px_rgba(16,35,95,0.09),inset_0_1px_0_rgba(255,255,255,0.82)] backdrop-blur-2xl md:flex",
        className,
      ].join(" ")}
    >
      <Icon size={18} strokeWidth={2} />
    </span>
  );
}

function ProblemVisual() {
  return (
    <div className="relative overflow-visible md:min-h-[420px]">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1238F2]/[0.09] blur-3xl" />
      <div className="pointer-events-none absolute left-[52%] top-[48%] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6F98FF]/[0.10] blur-2xl" />
      <ProblemScribbleLines />

      <div className="relative z-10 grid gap-3 md:hidden">
        {problemTools.map((tool) => {
          const Icon = tool.icon;
          return (
            <div key={tool.id} className="flex min-h-14 items-center gap-3 overflow-hidden rounded-2xl bg-white/50 px-4 py-3 shadow-[0_14px_34px_rgba(16,35,95,0.08),inset_0_1px_0_rgba(255,255,255,0.72)] backdrop-blur-2xl">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/62 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl">
                <Icon className={tool.color} size={16} strokeWidth={2} />
              </span>
              <span className="text-sm font-semibold text-[#1D2740]">{tool.label}</span>
            </div>
          );
        })}
      </div>

      <div className="relative z-10 mx-auto hidden h-[420px] max-w-[720px] md:block">
        {problemTools.map((tool) => (
          <ProblemToolCard key={tool.id} tool={tool} />
        ))}
        <WarningBubble id="alert-1" icon={AlertCircle} className="left-[28%] top-[46%]" />
        <WarningBubble id="alert-2" icon={AlertCircle} className="right-[10%] top-[18%]" />
        <WarningBubble id="question-1" icon={HelpCircle} className="right-[12%] bottom-[32%]" />
        <div className="absolute left-[49%] top-[47%] z-10 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1238F2]/[0.11] blur-2xl" />
      </div>
    </div>
  );
}

export function Problem() {
  return (
    <section
      className="relative overflow-hidden bg-white py-20 md:py-28"
      data-section="problem"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_15%,rgba(18,56,242,0.055),transparent_32%),radial-gradient(circle_at_82%_20%,rgba(18,56,242,0.04),transparent_30%)]" />
      <Container>
        <div className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1fr] lg:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#1238F2]">
                The problem
              </p>
              <h2 className="mt-4 max-w-xl text-balance text-[2.75rem] font-semibold leading-[0.95] tracking-[-0.055em] text-[#10131A] md:text-[4rem]">
                Too many tools.
                <span className="block font-serif italic font-normal text-[#1238F2]">
                  Zero connection.
                </span>
              </h2>
              <p className="mt-5 max-w-lg text-base leading-8 text-[#566176]">
                Disconnected tools, manual workarounds, and outdated websites
                slow you down, create mistakes, and make growth harder than it
                needs to be.
              </p>
            </div>
            <ProblemVisual />
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {problemPoints.map((item, index) => {
              const Icon = item.icon;
              return (
                <article key={item.label} className="group relative overflow-hidden rounded-[1.75rem] bg-[#FAFAF8]/82 p-6 shadow-[0_16px_44px_rgba(16,19,26,0.06),inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_22px_60px_rgba(16,19,26,0.09),inset_0_1px_0_rgba(255,255,255,0.9)]">
                  <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.64),rgba(255,255,255,0.14)_58%,rgba(94,134,255,0.06))]" />
                  <div className="relative flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/70 text-[#1238F2] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_24px_rgba(18,56,242,0.08)] backdrop-blur-xl">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#1238F2]">0{index + 1}</p>
                      <h3 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-[#10131A]">{item.label}</h3>
                      <p className="mt-3 text-sm leading-7 text-[#647086]">{item.desc}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
