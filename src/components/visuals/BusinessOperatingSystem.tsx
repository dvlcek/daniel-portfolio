"use client";

import type { ComponentType } from "react";
import { useMemo, useState } from "react";
import {
  CalendarDays,
  CreditCard,
  Folders,
  Globe,
  Mail,
  MessageCircle,
  MousePointerClick,
  NotepadText,
  Send,
  Sparkles,
  UsersRound,
  Workflow,
} from "lucide-react";
import { cn } from "@/app/lib/cn";

type NodeKind = "business" | "tool";

type SystemNode = {
  id: string;
  label: string;
  description: string;
  status: string;
  kind: NodeKind;
  icon: ComponentType<{ size?: number; className?: string }>;
  position: string;
  point: { x: number; y: number };
};

const businessNodes: SystemNode[] = [
  {
    id: "website",
    label: "Website",
    description: "Lead capture, conversion paths, and customer-facing signals.",
    status: "Signal captured",
    kind: "business",
    icon: Globe,
    position: "left-[5%] top-[13%]",
    point: { x: 130, y: 105 },
  },
  {
    id: "crm",
    label: "CRM",
    description: "Pipeline stages, ownership, notes, and next steps.",
    status: "Pipeline synced",
    kind: "business",
    icon: UsersRound,
    position: "left-[20%] top-[31%]",
    point: { x: 260, y: 210 },
  },
  {
    id: "emails",
    label: "Emails",
    description: "Requests, follow-ups, reminders, and decision threads.",
    status: "Context attached",
    kind: "business",
    icon: Mail,
    position: "left-[7%] top-[51%]",
    point: { x: 145, y: 330 },
  },
  {
    id: "booking",
    label: "Booking",
    description: "Calls, calendars, deadlines, and handoff moments.",
    status: "Handoff routed",
    kind: "business",
    icon: CalendarDays,
    position: "left-[23%] bottom-[12%]",
    point: { x: 282, y: 455 },
  },
  {
    id: "payments",
    label: "Payments",
    description: "Invoices, subscriptions, receipts, and revenue triggers.",
    status: "Revenue event logged",
    kind: "business",
    icon: CreditCard,
    position: "left-[6%] bottom-[10%]",
    point: { x: 138, y: 465 },
  },
  {
    id: "manual-tasks",
    label: "Manual Tasks",
    description: "Repeatable admin, updates, reminders, and copy-paste work.",
    status: "Automation candidate",
    kind: "business",
    icon: MousePointerClick,
    position: "left-[27%] top-[9%]",
    point: { x: 330, y: 92 },
  },
];

const toolNodes: SystemNode[] = [
  {
    id: "notion",
    label: "Notion",
    description: "Docs, knowledge, requirements, and project context.",
    status: "Docs linked",
    kind: "tool",
    icon: NotepadText,
    position: "right-[27%] top-[9%]",
    point: { x: 670, y: 92 },
  },
  {
    id: "telegram",
    label: "Telegram",
    description: "Fast messages that need durable follow-through.",
    status: "Message routed",
    kind: "tool",
    icon: Send,
    position: "right-[7%] top-[14%]",
    point: { x: 858, y: 112 },
  },
  {
    id: "gmail",
    label: "Gmail",
    description: "Email threads mapped back to projects and owners.",
    status: "Thread mapped",
    kind: "tool",
    icon: Mail,
    position: "right-[23%] top-[33%]",
    point: { x: 728, y: 230 },
  },
  {
    id: "slack",
    label: "Slack",
    description: "Team conversations translated into clear next actions.",
    status: "Decision captured",
    kind: "tool",
    icon: MessageCircle,
    position: "right-[8%] top-[52%]",
    point: { x: 845, y: 345 },
  },
  {
    id: "drive",
    label: "Drive",
    description: "Files and assets attached to the work that needs them.",
    status: "Assets indexed",
    kind: "tool",
    icon: Folders,
    position: "right-[26%] bottom-[12%]",
    point: { x: 690, y: 455 },
  },
  {
    id: "automation",
    label: "Automation",
    description: "Rules, triggers, and integrations moving repeatable work.",
    status: "Rule armed",
    kind: "tool",
    icon: Workflow,
    position: "right-[6%] bottom-[10%]",
    point: { x: 865, y: 465 },
  },
];

const allNodes = [...businessNodes, ...toolNodes];

const connectorPath = (node: SystemNode) => {
  const center = { x: 500, y: 285 };
  const curve = node.kind === "business" ? -60 : 60;
  return `M ${node.point.x} ${node.point.y} C ${node.point.x + curve} ${node.point.y + 18}, ${center.x - curve} ${center.y - 26}, ${center.x} ${center.y}`;
};

export function BusinessOperatingSystem() {
  const [activeId, setActiveId] = useState(allNodes[0].id);
  const activeNode = useMemo(
    () => allNodes.find((node) => node.id === activeId) ?? allNodes[0],
    [activeId],
  );

  return (
    <div
      className="relative mx-auto mt-5 w-full max-w-6xl lg:mt-6"
      aria-label="Connected business operating system visual"
    >
      <div className="relative min-h-[34rem] overflow-hidden rounded-[30px] border border-transparent p-4 sm:p-5 lg:min-h-[23rem] lg:p-5 xl:min-h-[25rem]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(193,106,58,0.12),transparent_25%),radial-gradient(circle_at_50%_62%,rgba(201,166,107,0.06),transparent_30%)]" />
        <div className="pointer-events-none absolute inset-x-10 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-[#C9A66B]/12 to-transparent lg:block" />

        <svg
          data-flow-lines="hero-clean-lines"
          className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          viewBox="0 0 1000 540"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="earthConnector" x1="0" y1="0" x2="1" y2="0">
              <stop stopColor="#C16A3A" stopOpacity="0.05" />
              <stop offset="0.5" stopColor="#C9A66B" stopOpacity="0.54" />
              <stop offset="1" stopColor="#8FA3B1" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          {allNodes.map((node) => (
            <path
              key={node.id}
              d={connectorPath(node)}
              stroke="url(#earthConnector)"
              strokeWidth={activeId === node.id ? 1.8 : 1}
              strokeLinecap="round"
              opacity={activeId === node.id ? 1 : 0.42}
              className="transition-[opacity,stroke-width] duration-300"
            />
          ))}
          <circle cx="500" cy="285" r="122" stroke="#C9A66B" strokeOpacity="0.10" />
          <circle cx="500" cy="285" r="82" stroke="#C16A3A" strokeOpacity="0.16" strokeDasharray="7 12" />
        </svg>

        <div
          data-flow-core="business-os"
          className={cn(
            "absolute left-1/2 top-[44%] z-20 hidden h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full lg:block xl:h-52 xl:w-52",
            "border border-[#C9A66B]/24 bg-[radial-gradient(circle_at_35%_24%,rgba(242,239,230,0.38),transparent_11%),radial-gradient(circle_at_44%_38%,rgba(201,166,107,0.25),transparent_29%),radial-gradient(circle_at_62%_64%,rgba(193,106,58,0.18),transparent_36%),linear-gradient(145deg,rgba(242,239,230,0.10),rgba(18,19,16,0.64)_46%,rgba(5,5,5,0.84))] shadow-[0_0_68px_rgba(193,106,58,0.20),inset_0_0_54px_rgba(242,239,230,0.055)] backdrop-blur-2xl transition duration-500",
            activeNode.kind === "tool" ? "shadow-[0_0_70px_rgba(143,163,177,0.16),inset_0_0_54px_rgba(242,239,230,0.055)]" : "",
          )}
        >
          <div className="absolute inset-4 rounded-full border border-[rgba(242,239,230,0.12)]" />
          <div className="absolute inset-10 animate-[systemScan_5s_ease-in-out_infinite] rounded-full border border-[#C16A3A]/16" />
          <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C9A66B]/20 bg-[#050505]/38 shadow-[inset_0_0_28px_rgba(201,166,107,0.11)]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-7 text-center">
            <Sparkles className="text-[#C9A66B]" size={30} />
            <p className="micro-label mt-3 text-[#C9A66B]">Business core</p>
            <p className="mt-2 max-w-[9rem] text-[0.68rem] leading-5 text-[#B8B1A4]">
              Signals, decisions, ownership, execution.
            </p>
          </div>
        </div>

        <div className="relative z-20 grid gap-5 lg:hidden">
          <MobileCore activeNode={activeNode} />
          <NodeGroup
            title="Business inputs"
            nodes={businessNodes}
            activeId={activeId}
            onSelect={setActiveId}
          />
          <NodeGroup
            title="External tools"
            nodes={toolNodes}
            activeId={activeId}
            onSelect={setActiveId}
          />
        </div>

        <div className="hidden lg:block">
          {allNodes.map((node) => (
            <SystemNodeButton
              key={node.id}
              node={node}
              active={activeId === node.id}
              onSelect={() => setActiveId(node.id)}
            />
          ))}
        </div>

        <div className="absolute bottom-3 left-3 right-3 z-30 hidden lg:block">
          <div
            data-flow-output
            className="mx-auto grid max-w-3xl gap-3 rounded-[22px] border border-[rgba(242,239,230,0.11)] bg-[rgba(8,8,7,0.58)] p-3 shadow-[0_16px_48px_rgba(0,0,0,0.26)] backdrop-blur-2xl lg:grid-cols-[1fr_auto] lg:items-center"
          >
            <div>
              <p className="micro-label text-[#6F766E]">Active connection</p>
              <p className="mt-1 text-base font-semibold tracking-[-0.03em] text-[#F2EFE6]">
                {activeNode.label} → Business core
              </p>
              <p className="mt-1 text-xs leading-5 text-[#B8B1A4]">{activeNode.description}</p>
            </div>
            <div className="w-fit rounded-full border border-[#C16A3A]/24 bg-[#C16A3A]/10 px-3 py-1.5 text-xs font-medium text-[#E5E0D4]">
              {activeNode.status}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SystemNodeButton({
  node,
  active,
  onSelect,
}: {
  node: SystemNode;
  active: boolean;
  onSelect: () => void;
}) {
  const Icon = node.icon;

  return (
    <button
      type="button"
      data-flow-source={node.id}
      className={cn(
        "group absolute z-20 flex min-w-32 max-w-40 items-center gap-2.5 rounded-2xl border px-3 py-2.5 text-left backdrop-blur-xl transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C16A3A]",
        node.position,
        active
          ? "border-[#C9A66B]/40 bg-[#C16A3A]/13 shadow-[0_16px_44px_rgba(193,106,58,0.16)]"
          : "border-[rgba(242,239,230,0.10)] bg-[rgba(8,8,7,0.46)] hover:-translate-y-0.5 hover:border-[#C9A66B]/26 hover:bg-[rgba(242,239,230,0.06)]",
      )}
      onMouseEnter={onSelect}
      onClick={onSelect}
      aria-pressed={active}
    >
      <span
        className={cn(
          "grid h-8 w-8 shrink-0 place-items-center rounded-xl border transition duration-300",
          active
            ? "border-[#C9A66B]/32 bg-[#C9A66B]/12 text-[#F2EFE6]"
            : "border-[rgba(242,239,230,0.10)] bg-[rgba(242,239,230,0.04)] text-[#B8B1A4] group-hover:text-[#F2EFE6]",
        )}
      >
        <Icon size={15} />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold tracking-[-0.01em] text-[#F2EFE6]">
          {node.label}
        </span>
        <span className="mt-0.5 block truncate text-[0.62rem] uppercase tracking-[0.08em] text-[#6F766E]">
          {node.kind === "business" ? "Business" : "Tool"}
        </span>
      </span>
    </button>
  );
}

function MobileCore({ activeNode }: { activeNode: SystemNode }) {
  const Icon = activeNode.icon;

  return (
    <div className="rounded-[28px] border border-[#C9A66B]/20 bg-[rgba(8,8,7,0.68)] p-5 text-center shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-2xl">
      <div className="mx-auto grid h-36 w-36 place-items-center rounded-full border border-[#C9A66B]/24 bg-[radial-gradient(circle_at_36%_24%,rgba(242,239,230,0.34),transparent_13%),radial-gradient(circle_at_48%_44%,rgba(201,166,107,0.22),transparent_34%),linear-gradient(145deg,rgba(242,239,230,0.10),rgba(5,5,5,0.82))] shadow-[0_0_58px_rgba(193,106,58,0.18)]">
        <Sparkles className="text-[#C9A66B]" size={30} />
      </div>
      <p className="micro-label mt-5 text-[#C9A66B]">Intelligent core</p>
      <h2 className="mt-2 text-xl font-semibold tracking-[-0.045em] text-[#F2EFE6]">
        Business core
      </h2>
      <div className="mx-auto mt-4 flex w-fit items-center gap-2 rounded-full border border-[#C16A3A]/24 bg-[#C16A3A]/10 px-3 py-2 text-sm text-[#E5E0D4]">
        <Icon size={15} />
        {activeNode.label} connected
      </div>
    </div>
  );
}

function NodeGroup({
  title,
  nodes,
  activeId,
  onSelect,
}: {
  title: string;
  nodes: SystemNode[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div>
      <p className="micro-label mb-3 text-[#6F766E]">{title}</p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {nodes.map((node) => {
          const Icon = node.icon;
          const active = activeId === node.id;

          return (
            <button
              key={node.id}
              type="button"
              className={cn(
                "rounded-2xl border p-3 text-left transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C16A3A]",
                active
                  ? "border-[#C9A66B]/36 bg-[#C16A3A]/12 text-[#F2EFE6]"
                  : "border-[rgba(242,239,230,0.10)] bg-[rgba(242,239,230,0.045)] text-[#B8B1A4]",
              )}
              onClick={() => onSelect(node.id)}
              aria-pressed={active}
            >
              <Icon size={16} />
              <span className="mt-2 block text-sm font-semibold">{node.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
