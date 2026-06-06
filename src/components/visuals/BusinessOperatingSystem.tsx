"use client";

import type { ComponentType } from "react";
import { useMemo, useState } from "react";
import {
  CalendarDays,
  CreditCard,
  FileText,
  Folders,
  Globe,
  Inbox,
  Mail,
  MessageCircle,
  MousePointerClick,
  NotepadText,
  Send,
  Sparkles,
  Table2,
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
    description: "Conversion paths, forms, lead capture, and customer-facing signals.",
    status: "Signal captured",
    kind: "business",
    icon: Globe,
    position: "left-[4%] top-[9%]",
    point: { x: 98, y: 76 },
  },
  {
    id: "crm",
    label: "CRM",
    description: "Pipeline stages, lead ownership, notes, and sales next steps.",
    status: "Pipeline synced",
    kind: "business",
    icon: UsersRound,
    position: "left-[18%] top-[23%]",
    point: { x: 226, y: 160 },
  },
  {
    id: "emails",
    label: "Emails",
    description: "Inbound requests, follow-ups, reminders, and decision threads.",
    status: "Context attached",
    kind: "business",
    icon: Mail,
    position: "left-[5%] top-[39%]",
    point: { x: 108, y: 260 },
  },
  {
    id: "booking",
    label: "Booking",
    description: "Calls, consultations, calendars, and handoff moments.",
    status: "Handoff routed",
    kind: "business",
    icon: CalendarDays,
    position: "left-[21%] top-[53%]",
    point: { x: 236, y: 354 },
  },
  {
    id: "payments",
    label: "Payments",
    description: "Invoices, subscriptions, receipts, and revenue triggers.",
    status: "Revenue event logged",
    kind: "business",
    icon: CreditCard,
    position: "left-[6%] bottom-[12%]",
    point: { x: 116, y: 472 },
  },
  {
    id: "spreadsheets",
    label: "Spreadsheets",
    description: "Operational data that needs structure before it becomes risk.",
    status: "Data normalized",
    kind: "business",
    icon: Table2,
    position: "left-[25%] bottom-[5%]",
    point: { x: 286, y: 526 },
  },
  {
    id: "manual-tasks",
    label: "Manual Tasks",
    description: "Repeatable admin, reminders, status changes, and copy-paste work.",
    status: "Automation candidate",
    kind: "business",
    icon: MousePointerClick,
    position: "left-[30%] top-[8%]",
    point: { x: 330, y: 86 },
  },
  {
    id: "client-requests",
    label: "Client Requests",
    description: "Questions, approvals, files, and urgent changes from customers.",
    status: "Request classified",
    kind: "business",
    icon: Inbox,
    position: "left-[31%] bottom-[25%]",
    point: { x: 338, y: 440 },
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
    position: "right-[29%] top-[8%]",
    point: { x: 700, y: 82 },
  },
  {
    id: "telegram",
    label: "Telegram",
    description: "Fast conversation streams that need durable follow-through.",
    status: "Message routed",
    kind: "tool",
    icon: Send,
    position: "right-[10%] top-[12%]",
    point: { x: 850, y: 102 },
  },
  {
    id: "gmail",
    label: "Gmail",
    description: "Email threads connected back to contacts, projects, and owners.",
    status: "Thread mapped",
    kind: "tool",
    icon: Mail,
    position: "right-[21%] top-[29%]",
    point: { x: 760, y: 205 },
  },
  {
    id: "calendar",
    label: "Calendar",
    description: "Meetings, deadlines, follow-ups, and scheduling commitments.",
    status: "Deadline visible",
    kind: "tool",
    icon: CalendarDays,
    position: "right-[5%] top-[39%]",
    point: { x: 895, y: 272 },
  },
  {
    id: "slack",
    label: "Slack",
    description: "Team conversations translated into clear next actions.",
    status: "Decision captured",
    kind: "tool",
    icon: MessageCircle,
    position: "right-[27%] bottom-[31%]",
    point: { x: 708, y: 386 },
  },
  {
    id: "drive",
    label: "Drive",
    description: "Files and assets attached to the work that needs them.",
    status: "Assets indexed",
    kind: "tool",
    icon: Folders,
    position: "right-[8%] bottom-[22%]",
    point: { x: 868, y: 446 },
  },
  {
    id: "figma",
    label: "Figma",
    description: "Design files, feedback, approvals, and implementation details.",
    status: "Approval tracked",
    kind: "tool",
    icon: FileText,
    position: "right-[30%] bottom-[7%]",
    point: { x: 704, y: 524 },
  },
  {
    id: "automation",
    label: "Automation",
    description: "Rules, triggers, and integrations that move repeatable work.",
    status: "Rule armed",
    kind: "tool",
    icon: Workflow,
    position: "right-[5%] bottom-[5%]",
    point: { x: 900, y: 532 },
  },
];

const allNodes = [...businessNodes, ...toolNodes];

const connectorPath = (node: SystemNode) => {
  const center = { x: 500, y: 302 };
  const curve = node.kind === "business" ? -80 : 80;
  return `M ${node.point.x} ${node.point.y} C ${node.point.x + curve} ${node.point.y + 20}, ${center.x - curve} ${center.y - 34}, ${center.x} ${center.y}`;
};

export function BusinessOperatingSystem() {
  const [activeId, setActiveId] = useState(allNodes[0].id);
  const activeNode = useMemo(
    () => allNodes.find((node) => node.id === activeId) ?? allNodes[0],
    [activeId],
  );

  return (
    <div
      className="relative mx-auto mt-9 w-full max-w-7xl lg:mt-10"
      aria-label="Connected business operating system visual"
    >
      <div className="glass-panel relative min-h-[40rem] overflow-hidden rounded-[36px] p-4 sm:p-6 lg:min-h-[34rem] lg:p-8 xl:min-h-[37rem]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,rgba(193,106,58,0.16),transparent_30%),radial-gradient(circle_at_50%_60%,rgba(201,166,107,0.09),transparent_34%),radial-gradient(circle_at_15%_25%,rgba(124,132,100,0.11),transparent_32%),linear-gradient(180deg,rgba(242,239,230,0.045),rgba(5,5,5,0.20))]" />
        <div className="pointer-events-none absolute inset-6 rounded-[28px] border border-[rgba(242,239,230,0.055)]" />
        <div className="pointer-events-none absolute left-1/2 top-5 hidden h-[calc(100%-2.5rem)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#C16A3A]/18 to-transparent lg:block" />

        <svg
          data-flow-lines="hero-clean-lines"
          className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          viewBox="0 0 1000 600"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="earthConnector" x1="0" y1="0" x2="1" y2="0">
              <stop stopColor="#C16A3A" stopOpacity="0.06" />
              <stop offset="0.52" stopColor="#C9A66B" stopOpacity="0.56" />
              <stop offset="1" stopColor="#8FA3B1" stopOpacity="0.06" />
            </linearGradient>
          </defs>
          {allNodes.map((node) => (
            <path
              key={node.id}
              d={connectorPath(node)}
              stroke="url(#earthConnector)"
              strokeWidth={activeId === node.id ? 1.9 : 1.05}
              strokeLinecap="round"
              opacity={activeId === node.id ? 1 : 0.54}
              className="transition-[opacity,stroke-width] duration-300"
            />
          ))}
          <circle cx="500" cy="302" r="156" stroke="#C9A66B" strokeOpacity="0.11" />
          <circle cx="500" cy="302" r="106" stroke="#C16A3A" strokeOpacity="0.17" strokeDasharray="8 12" />
        </svg>

        <div
          data-flow-core="business-os"
          className={cn(
            "absolute left-1/2 top-[43%] z-20 hidden h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full lg:block xl:h-72 xl:w-72",
            "border border-[#C9A66B]/24 bg-[radial-gradient(circle_at_34%_25%,rgba(242,239,230,0.42),transparent_10%),radial-gradient(circle_at_42%_36%,rgba(201,166,107,0.28),transparent_28%),radial-gradient(circle_at_60%_62%,rgba(193,106,58,0.20),transparent_36%),linear-gradient(145deg,rgba(242,239,230,0.10),rgba(18,19,16,0.64)_46%,rgba(5,5,5,0.84))] shadow-[0_0_80px_rgba(193,106,58,0.22),inset_0_0_60px_rgba(242,239,230,0.06)] backdrop-blur-2xl transition duration-500",
            activeNode.kind === "tool" ? "shadow-[0_0_88px_rgba(143,163,177,0.18),inset_0_0_60px_rgba(242,239,230,0.06)]" : "",
          )}
        >
          <div className="absolute inset-5 rounded-full border border-[rgba(242,239,230,0.12)]" />
          <div className="absolute inset-11 animate-[systemScan_5s_ease-in-out_infinite] rounded-full border border-[#C16A3A]/18" />
          <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C9A66B]/22 bg-[#050505]/38 shadow-[inset_0_0_34px_rgba(201,166,107,0.12)]" />
          <div className="absolute inset-x-8 top-[45%] h-px bg-gradient-to-r from-transparent via-[#F2EFE6]/24 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-9 text-center">
            <p className="micro-label text-[#C9A66B]">Intelligent core</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.055em] text-[#F2EFE6] xl:text-4xl">
              One operating layer
            </h2>
            <p className="mt-3 max-w-[13rem] text-xs leading-5 text-[#B8B1A4]">
              Routes signals, context, decisions, and execution into a durable business system.
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

        <div className="absolute bottom-5 left-5 right-5 z-30 hidden lg:block">
          <div
            data-flow-output
            className="mx-auto flex max-w-3xl items-center justify-between gap-4 rounded-[24px] border border-[rgba(242,239,230,0.12)] bg-[rgba(8,8,7,0.68)] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-2xl"
          >
            <div>
              <p className="micro-label text-[#6F766E]">Active connection</p>
              <p className="mt-1 text-lg font-semibold tracking-[-0.035em] text-[#F2EFE6]">
                {activeNode.label} → Business core
              </p>
              <p className="mt-1 text-sm text-[#B8B1A4]">{activeNode.description}</p>
            </div>
            <div className="shrink-0 rounded-full border border-[#C16A3A]/24 bg-[#C16A3A]/10 px-4 py-2 text-sm font-medium text-[#E5E0D4]">
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
        "group absolute z-20 flex min-w-36 max-w-44 items-center gap-3 rounded-2xl border px-3.5 py-3 text-left backdrop-blur-xl transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C16A3A]",
        node.position,
        active
          ? "border-[#C9A66B]/42 bg-[#C16A3A]/14 shadow-[0_18px_54px_rgba(193,106,58,0.18)]"
          : "border-[rgba(242,239,230,0.105)] bg-[rgba(8,8,7,0.58)] hover:-translate-y-0.5 hover:border-[#C9A66B]/28 hover:bg-[rgba(242,239,230,0.065)]",
      )}
      onMouseEnter={onSelect}
      onClick={onSelect}
      aria-pressed={active}
    >
      <span
        className={cn(
          "grid h-9 w-9 shrink-0 place-items-center rounded-xl border transition duration-300",
          active
            ? "border-[#C9A66B]/34 bg-[#C9A66B]/12 text-[#F2EFE6]"
            : "border-[rgba(242,239,230,0.10)] bg-[rgba(242,239,230,0.04)] text-[#B8B1A4] group-hover:text-[#F2EFE6]",
        )}
      >
        <Icon size={17} />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold tracking-[-0.02em] text-[#F2EFE6]">
          {node.label}
        </span>
        <span className="mt-0.5 block truncate text-[0.68rem] uppercase tracking-[0.08em] text-[#6F766E]">
          {node.kind === "business" ? "Business input" : "External app"}
        </span>
      </span>
    </button>
  );
}

function MobileCore({ activeNode }: { activeNode: SystemNode }) {
  const Icon = activeNode.icon;

  return (
    <div className="rounded-[30px] border border-[#C9A66B]/20 bg-[rgba(8,8,7,0.68)] p-5 text-center shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-2xl">
      <div className="mx-auto grid h-40 w-40 place-items-center rounded-full border border-[#C9A66B]/24 bg-[radial-gradient(circle_at_36%_24%,rgba(242,239,230,0.36),transparent_13%),radial-gradient(circle_at_48%_44%,rgba(201,166,107,0.24),transparent_34%),linear-gradient(145deg,rgba(242,239,230,0.10),rgba(5,5,5,0.82))] shadow-[0_0_64px_rgba(193,106,58,0.20)]">
        <Sparkles className="text-[#C9A66B]" size={34} />
      </div>
      <p className="micro-label mt-5 text-[#C9A66B]">Intelligent core</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-[-0.045em] text-[#F2EFE6]">
        One operating layer
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
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
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

export const heroProblemNodeIds = allNodes.map((node) => node.id);
