"use client";

import type { ComponentType } from "react";
import { useMemo, useState } from "react";
import {
  Activity,
  BarChart3,
  Brain,
  Cpu,
  GitBranch,
  Layers3,
  Radar,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/app/lib/cn";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

type SystemModule = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  status: "Stable" | "Scanning" | "Optimizing" | "Routing";
  progress: number;
  icon: ComponentType<{ size?: number; className?: string }>;
  metrics: Array<{ label: string; value: string }>;
  bullets: string[];
};

const systemModules: SystemModule[] = [
  {
    id: "signal-map",
    title: "Signal Map",
    eyebrow: "Input layer",
    description:
      "Collects website, lead, CRM, and team signals into a readable operational map before work gets lost in handoffs.",
    status: "Scanning",
    progress: 76,
    icon: Radar,
    metrics: [
      { label: "Sources", value: "12" },
      { label: "Noise cut", value: "41%" },
      { label: "Latency", value: "Low" },
    ],
    bullets: [
      "Normalizes scattered intake",
      "Flags missing context",
      "Routes high-intent moments",
    ],
  },
  {
    id: "intelligence-layer",
    title: "Intelligence Layer",
    eyebrow: "Context layer",
    description:
      "Turns fragments into structured context so every next action has history, ownership, and business priority attached.",
    status: "Stable",
    progress: 88,
    icon: Brain,
    metrics: [
      { label: "Context", value: "Live" },
      { label: "Records", value: "98%" },
      { label: "Drift", value: "-24%" },
    ],
    bullets: [
      "Keeps decisions durable",
      "Connects people to work",
      "Maintains one source of truth",
    ],
  },
  {
    id: "design-engine",
    title: "Design Engine",
    eyebrow: "Interface layer",
    description:
      "Shapes dashboards, portals, and customer-facing flows into interfaces that feel clear instead of operationally heavy.",
    status: "Optimizing",
    progress: 69,
    icon: Layers3,
    metrics: [
      { label: "Flows", value: "8" },
      { label: "Clarity", value: "+32%" },
      { label: "Friction", value: "Down" },
    ],
    bullets: [
      "Simplifies complex workflows",
      "Clarifies hierarchy",
      "Designs for repeat use",
    ],
  },
  {
    id: "automation-core",
    title: "Automation Core",
    eyebrow: "Execution layer",
    description:
      "Moves repeatable steps through rules, triggers, notifications, and follow-ups so execution does not depend on memory.",
    status: "Routing",
    progress: 82,
    icon: Cpu,
    metrics: [
      { label: "Triggers", value: "24" },
      { label: "Handoffs", value: "Auto" },
      { label: "Manual", value: "-37%" },
    ],
    bullets: [
      "Automates repeatable actions",
      "Protects response speed",
      "Escalates exceptions",
    ],
  },
  {
    id: "problem-detection",
    title: "Problem Detection",
    eyebrow: "Friction layer",
    description:
      "Surfaces bottlenecks when context, decisions, ownership, or execution starts separating across the system.",
    status: "Scanning",
    progress: 64,
    icon: Activity,
    metrics: [
      { label: "Risks", value: "4" },
      { label: "Alerts", value: "Live" },
      { label: "Signal", value: "Strong" },
    ],
    bullets: [
      "Detects unclear ownership",
      "Spots decision gaps",
      "Highlights stalled execution",
    ],
  },
  {
    id: "decision-console",
    title: "Decision Console",
    eyebrow: "Control layer",
    description:
      "Gives leaders a calm command surface for workload, pipeline, bottlenecks, performance, and the next best move.",
    status: "Stable",
    progress: 91,
    icon: ShieldCheck,
    metrics: [
      { label: "Views", value: "6" },
      { label: "Priority", value: "Clear" },
      { label: "Confidence", value: "91%" },
    ],
    bullets: [
      "Shows what needs attention",
      "Supports faster decisions",
      "Keeps execution visible",
    ],
  },
];

const navItems = ["Overview", "Modules", "Signals", "Rules"];

export function SystemElementsSection() {
  const [activeModuleId, setActiveModuleId] = useState(systemModules[0].id);
  const activeModule = useMemo(
    () =>
      systemModules.find((module) => module.id === activeModuleId) ??
      systemModules[0],
    [activeModuleId],
  );
  const ActiveIcon = activeModule.icon;

  return (
    <section
      data-section="system-elements"
      className="system-elements-section relative overflow-hidden bg-[#050505] pb-0 pt-20 md:pt-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(193,106,58,0.12),transparent_32%),radial-gradient(circle_at_80%_8%,rgba(143,163,177,0.12),transparent_34%),linear-gradient(180deg,#050505_0%,#0B0C0A_54%,#080807_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(242,239,230,0.12)] to-transparent" />
      </div>

      <Container className="relative z-10" size="wide">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <SectionTitle
            eyebrow="System elements"
            title="An operating interface for the work behind the website."
            desc="The digital foundation is designed like a small business OS: signals come in, context gets structured, automations move the work, and decision surfaces stay clear."
            className="mb-0"
          />

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["System health", "96%", "Live"],
              ["Context sync", "24/7", "Active"],
              ["Friction scan", "04", "Detected"],
            ].map(([label, value, state]) => (
              <div
                key={label}
                className="rounded-[24px] border border-[rgba(242,239,230,0.10)] bg-[rgba(242,239,230,0.045)] p-4 backdrop-blur-xl"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="micro-label text-[#6F766E]">{label}</p>
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-[systemPulse_2.4s_ease-out_infinite] rounded-full bg-[#C16A3A] opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#C16A3A]" />
                  </span>
                </div>
                <p className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-[#F2EFE6]">
                  {value}
                </p>
                <p className="mt-1 text-xs text-[#8E9188]">{state}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-[36px] border border-[rgba(242,239,230,0.12)] bg-[linear-gradient(180deg,rgba(242,239,230,0.075),rgba(242,239,230,0.025)),rgba(10,10,9,0.78)] shadow-[0_36px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
          <div className="flex flex-col gap-4 border-b border-[rgba(242,239,230,0.09)] bg-[rgba(5,5,5,0.34)] px-4 py-4 sm:flex-row sm:items-center sm:justify-between md:px-6">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-[#C16A3A]/90 shadow-[0_0_18px_rgba(193,106,58,0.5)]" />
              <span className="h-3 w-3 rounded-full bg-[#C9A66B]/70" />
              <span className="h-3 w-3 rounded-full bg-[#8FA3B1]/60" />
              <div className="ml-2 hidden h-7 items-center rounded-full border border-[rgba(242,239,230,0.08)] bg-[#050505]/50 px-3 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-[#8E9188] sm:flex">
                ops.console / live-system
              </div>
            </div>

            <nav
              aria-label="System console views"
              className="flex gap-2 overflow-x-auto"
            >
              {navItems.map((item, index) => (
                <button
                  key={item}
                  type="button"
                  className={cn(
                    "shrink-0 rounded-full border px-3 py-2 text-xs font-medium transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C16A3A]",
                    index === 1
                      ? "border-[#C16A3A]/28 bg-[#C16A3A]/12 text-[#F2EFE6]"
                      : "border-[rgba(242,239,230,0.08)] bg-[rgba(242,239,230,0.035)] text-[#8E9188] hover:border-[#C16A3A]/22 hover:text-[#E5E0D4]",
                  )}
                  aria-pressed={index === 1}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          <div className="grid lg:grid-cols-[17rem_1fr_23rem]">
            <aside className="border-b border-[rgba(242,239,230,0.08)] p-4 md:p-5 lg:border-b-0 lg:border-r">
              <p className="micro-label text-[#6F766E]">Module dock</p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                {systemModules.map((module) => {
                  const Icon = module.icon;
                  const isActive = activeModule.id === module.id;

                  return (
                    <button
                      key={module.id}
                      type="button"
                      onClick={() => setActiveModuleId(module.id)}
                      className={cn(
                        "group flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C16A3A]",
                        isActive
                          ? "border-[#C16A3A]/35 bg-[#C16A3A]/12 shadow-[0_0_34px_rgba(193,106,58,0.12)]"
                          : "border-[rgba(242,239,230,0.075)] bg-[rgba(242,239,230,0.028)] hover:-translate-y-0.5 hover:border-[rgba(242,239,230,0.16)] hover:bg-[rgba(242,239,230,0.055)]",
                      )}
                      aria-pressed={isActive}
                    >
                      <span
                        className={cn(
                          "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition duration-300",
                          isActive
                            ? "border-[#C16A3A]/35 bg-[#C16A3A]/14 text-[#E5E0D4]"
                            : "border-[rgba(242,239,230,0.08)] bg-[#050505]/40 text-[#8E9188] group-hover:text-[#E5E0D4]",
                        )}
                      >
                        <Icon size={17} />
                      </span>
                      <span className="min-w-0">
                        <span
                          className={cn(
                            "block text-sm font-semibold",
                            isActive
                              ? "text-[#F2EFE6]"
                              : "text-[#B8B1A4] group-hover:text-[#F2EFE6]",
                          )}
                        >
                          {module.title}
                        </span>
                        <span className="mt-1 block truncate font-mono text-[0.64rem] uppercase tracking-[0.08em] text-[#6F766E]">
                          {module.status}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </aside>

            <div className="relative min-h-[34rem] overflow-hidden border-b border-[rgba(242,239,230,0.08)] p-5 md:p-8 lg:border-b-0 lg:border-r">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(242,239,230,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(242,239,230,0.02)_1px,transparent_1px)] bg-[size:44px_44px] opacity-60" />
              <div className="pointer-events-none absolute left-0 right-0 top-0 h-32 animate-[systemScan_5s_linear_infinite] bg-gradient-to-b from-[#C16A3A]/12 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-between gap-8">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#C16A3A]/24 bg-[#C16A3A]/10 px-3 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C16A3A] shadow-[0_0_18px_rgba(193,106,58,0.65)]" />
                    <p className="micro-label text-[#E5E0D4]">
                      {activeModule.eyebrow}
                    </p>
                  </div>
                  <div
                    key={activeModule.id}
                    className="animate-[systemReveal_420ms_ease_both]"
                  >
                    <h3 className="mt-6 max-w-2xl text-4xl font-semibold tracking-[-0.05em] text-[#F2EFE6] md:text-6xl">
                      {activeModule.title}
                    </h3>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-[#B8B1A4] md:text-lg">
                      {activeModule.description}
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 xl:grid-cols-[1fr_0.72fr] xl:items-end">
                  <div className="rounded-[28px] border border-[rgba(242,239,230,0.10)] bg-[#050505]/42 p-5 backdrop-blur-xl">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="micro-label text-[#6F766E]">
                          Processing confidence
                        </p>
                        <p className="mt-2 text-2xl font-semibold text-[#F2EFE6]">
                          {activeModule.progress}%
                        </p>
                      </div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C16A3A]/24 bg-[#C16A3A]/10 text-[#E5E0D4]">
                        <ActiveIcon size={22} />
                      </div>
                    </div>
                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-[rgba(242,239,230,0.08)]">
                      <div
                        key={`${activeModule.id}-progress`}
                        className="h-full rounded-full bg-gradient-to-r from-[#C16A3A] via-[#C9A66B] to-[#8FA3B1] transition-[width] duration-700 ease-out"
                        style={{ width: `${activeModule.progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {activeModule.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-2xl border border-[rgba(242,239,230,0.08)] bg-[rgba(242,239,230,0.04)] p-3"
                      >
                        <p className="font-mono text-[0.62rem] uppercase tracking-[0.08em] text-[#6F766E]">
                          {metric.label}
                        </p>
                        <p className="mt-2 text-sm font-semibold text-[#F2EFE6] md:text-base">
                          {metric.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <aside className="p-5 md:p-6">
              <div className="flex items-center justify-between gap-4">
                <p className="micro-label text-[#6F766E]">Active detail</p>
                <span className="rounded-full border border-[#C16A3A]/24 bg-[#C16A3A]/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.08em] text-[#E5E0D4]">
                  {activeModule.status}
                </span>
              </div>

              <div
                key={`${activeModule.id}-bullets`}
                className="mt-6 grid gap-3 animate-[systemReveal_420ms_ease_both]"
              >
                {activeModule.bullets.map((bullet, index) => (
                  <div
                    key={bullet}
                    className="rounded-2xl border border-[rgba(242,239,230,0.08)] bg-[rgba(242,239,230,0.04)] p-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-1 font-mono text-[0.65rem] text-[#C16A3A]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm leading-6 text-[#B8B1A4]">
                        {bullet}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[24px] border border-[#C16A3A]/18 bg-[#C16A3A]/[0.055] p-5">
                <div className="flex items-center gap-3">
                  <BarChart3 size={18} className="text-[#C16A3A]" />
                  <p className="text-sm font-semibold text-[#F2EFE6]">
                    System output
                  </p>
                </div>
                <p className="mt-3 text-sm leading-7 text-[#B8B1A4]">
                  Selected modules reveal where the operating layer should
                  collect context, protect decisions, and move execution
                  forward.
                </p>
              </div>
            </aside>
          </div>
        </div>

        <div aria-hidden="true" className="relative mx-auto h-48 max-w-5xl">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-[#C16A3A]/55 via-[#C16A3A]/28 to-transparent" />
          <div className="absolute left-1/2 top-10 h-3 w-3 -translate-x-1/2 rounded-full bg-[#C16A3A] shadow-[0_0_28px_rgba(193,106,58,0.68)]" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-[#080807]" />
          <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-[#C16A3A]/20 bg-[#050505]/60 px-4 py-2 text-xs text-[#8E9188] backdrop-blur-xl">
            <GitBranch size={14} className="text-[#C16A3A]" />
            <span>friction signals routed into problem detection</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
