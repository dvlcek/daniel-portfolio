"use client";

import {
  CalendarCheck,
  ClipboardList,
  CreditCard,
  Globe2,
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
  problem: string;
  cost: string;
  fix: string;
  icon: LucideIcon;
};

const problemTools: ProblemTool[] = [
  { id: "website", label: "Website", icon: Globe2, x: 19, y: 18, rotate: -2, color: "text-clay" },
  { id: "crm", label: "CRM", icon: Users, x: 54, y: 19, rotate: 2, color: "text-mist-blue" },
  { id: "emails", label: "Emails", icon: Mail, x: 35, y: 39, rotate: -1, color: "text-clay" },
  { id: "bookings", label: "Bookings", icon: CalendarCheck, x: 78, y: 36, rotate: 2, color: "text-mist-blue" },
  { id: "payments", label: "Payments", icon: CreditCard, x: 24, y: 68, rotate: 1, color: "text-sand" },
  { id: "spreadsheet", label: "Spreadsheet", icon: Table2, x: 56, y: 69, rotate: -1, color: "text-muted-cream" },
  { id: "manual-tasks", label: "Manual Tasks", icon: ClipboardList, x: 81, y: 68, rotate: 1, color: "text-ash" },
];

const problemPoints: ProblemPoint[] = [
  {
    label: "Manual Work",
    problem: "Lead follow-up, updates, reminders, reporting, and admin tasks depend on people remembering the next step.",
    cost: "Time disappears into repeated checking, copying, and coordination.",
    fix: "Automate the repeated steps and keep the workflow visible.",
    icon: MousePointerClick,
  },
  {
    label: "Scattered Tools",
    problem: "Website, forms, email, CRM, payments, bookings, and dashboards all hold separate pieces of the process.",
    cost: "The team has to rebuild context manually across every tool.",
    fix: "Connect the tools into one operating layer around the business flow.",
    icon: PlugZap,
  },
  {
    label: "Lost Leads",
    problem: "The website may look fine, but inquiries do not move into a reliable lead workflow.",
    cost: "Good opportunities get delayed, forgotten, or followed up too late.",
    fix: "Capture the right context and route every inquiry into a clear next step.",
    icon: Globe2,
  },
  {
    label: "No Operational Clarity",
    problem: "Owners and teams cannot see what is active, blocked, paid, waiting, or next.",
    cost: "Decisions are made from fragments instead of one clear view of operations.",
    fix: "Build dashboards and internal views that show the state of the business.",
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
      <path d="M92 86 C166 52 232 108 316 82 C398 56 462 110 548 76 C604 54 640 68 674 56" stroke="#5F7480" strokeDasharray="7 10" strokeLinecap="round" strokeWidth="1" strokeOpacity="0.24" />
      <path d="M116 210 C210 168 266 238 360 190 C448 146 522 214 628 164" stroke="#B8643F" strokeDasharray="7 11" strokeLinecap="round" strokeWidth="1" strokeOpacity="0.22" />
      <path d="M132 306 C226 330 304 260 392 300 C486 342 568 288 642 316" stroke="#5F7480" strokeDasharray="7 11" strokeLinecap="round" strokeWidth="0.9" strokeOpacity="0.18" />
      <path d="M238 58 C248 116 212 144 250 190 C292 242 258 292 302 354" stroke="#151512" strokeDasharray="5 13" strokeLinecap="round" strokeWidth="0.8" strokeOpacity="0.12" />
      <path d="M484 52 C450 118 496 150 468 214 C442 274 500 310 476 366" stroke="#151512" strokeDasharray="5 13" strokeLinecap="round" strokeWidth="0.8" strokeOpacity="0.12" />
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
      className="absolute z-20 hidden h-12 w-[168px] items-center gap-3 overflow-hidden rounded-2xl border border-black/[0.08] bg-white/78 px-3.5 shadow-[0_16px_42px_rgba(21,21,18,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-2xl transition duration-300 hover:scale-[1.015] hover:border-clay/20 hover:bg-white md:flex"
    >
      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.72),rgba(247,244,236,0.56)_55%,rgba(184,100,63,0.04))]" />
      <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-black/[0.08] bg-site-bg shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-xl">
        <Icon className={tool.color} size={15} strokeWidth={2} />
      </span>
      <span className="relative truncate text-xs font-semibold text-muted-cream">
        {tool.label}
      </span>
    </div>
  );
}

function ProblemVisual() {
  return (
    <div className="relative min-w-0 md:min-h-[420px]">
      <div className="relative z-10 grid gap-3 md:hidden">
        {problemTools.map((tool) => {
          const Icon = tool.icon;

          return (
            <div
              key={tool.id}
              className="flex min-h-14 items-center gap-3 overflow-hidden rounded-2xl border border-black/[0.08] bg-white/76 px-4 py-3 shadow-[0_14px_34px_rgba(21,21,18,0.06),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-2xl"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-black/[0.08] bg-site-bg shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-xl">
                <Icon className={tool.color} size={16} strokeWidth={2} />
              </span>
              <span className="text-sm font-semibold text-muted-cream">
                {tool.label}
              </span>
            </div>
          );
        })}
      </div>

      <div className="relative z-10 mx-auto hidden h-[360px] max-w-[860px] overflow-hidden rounded-[2rem] md:block">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(184,100,63,0.05),transparent_35%),radial-gradient(circle_at_70%_20%,rgba(95,116,128,0.06),transparent_34%)]" />
        <ProblemScribbleLines />
        {problemTools.map((tool) => (
          <ProblemToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}

export function Problem() {
  return (
    <section
      className="relative overflow-hidden bg-site-bg py-20 md:py-28"
      data-section="problem"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_15%,rgba(143,163,177,0.08),transparent_32%),radial-gradient(circle_at_82%_20%,rgba(193,106,58,0.08),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cream/12 to-transparent" />

      <Container>
        <div className="relative z-10">
          <div className="overflow-hidden rounded-[2rem] border border-black/[0.08] bg-white/54 p-6 shadow-[0_28px_90px_rgba(21,21,18,0.07),inset_0_1px_0_rgba(255,255,255,0.82)] backdrop-blur-sm md:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.48fr_1fr] lg:items-center">
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.26em] text-clay">
                  The problem
                </p>
                <h2 className="mt-4 max-w-xl text-balance text-[clamp(2.45rem,4.8vw,4.8rem)] font-medium leading-[0.95] tracking-[-0.055em] text-cream">
                  Most companies do not have a website problem.
                  <span className="block italic text-clay">They have a system problem.</span>
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-stone">
                  When the website, CRM, forms, email, payments, dashboards, and
                  internal work are disconnected, the business runs on manual
                  checking instead of one scalable operating layer.
                </p>
              </div>

              <ProblemVisual />
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {problemPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.label}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-black/[0.08] bg-white/62 p-6 shadow-[0_18px_50px_rgba(21,21,18,0.06)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-clay/20 hover:bg-white"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.70),rgba(247,244,236,0.42)_58%,rgba(184,100,63,0.045))]" />
                  <div className="relative flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-black/[0.08] bg-site-bg text-clay shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-xl">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="font-mono text-xs font-semibold text-clay">
                        0{index + 1}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-cream">
                        {item.label}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-stone">{item.problem}</p>
                      <div className="mt-5 grid gap-3 text-sm leading-6">
                        <p className="rounded-2xl border border-black/[0.06] bg-site-bg/60 p-3 text-stone">
                          <span className="font-semibold text-muted-cream">Business cost:</span>{" "}
                          {item.cost}
                        </p>
                        <p className="rounded-2xl border border-clay/15 bg-clay/[0.06] p-3 text-stone">
                          <span className="font-semibold text-muted-cream">System fix:</span>{" "}
                          {item.fix}
                        </p>
                      </div>
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
