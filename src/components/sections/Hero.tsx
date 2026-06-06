import Link from "next/link";
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
const coreEyebrow = "Your";
const coreSubtitle = "Business System";

const inputTools: InputTool[] = [
  { id: "website", label: "Website", icon: Globe2, x: 1.5, y: 8, targetY: 36 },
  { id: "crm", label: "CRM", icon: Users, x: 5.8, y: 21, targetY: 39.5 },
  { id: "emails", label: "Emails", icon: Mail, x: 0.8, y: 34, targetY: 43 },
  { id: "bookings", label: "Bookings", icon: CalendarCheck, x: 4.2, y: 47, targetY: 46.5 },
  { id: "payments", label: "Payments", icon: CreditCard, x: 0, y: 60, targetY: 50 },
  { id: "spreadsheet", label: "Spreadsheet", icon: Table2, x: 5.1, y: 73, targetY: 53.5 },
  { id: "manual-tasks", label: "Manual Tasks", icon: ClipboardList, x: 1.2, y: 86, targetY: 57 },
];

const rightToolNodes: RightToolNode[] = [
  { id: "messages", label: "Messages", icon: MessageSquare, x: 78, y: 17, lineY: 37.2, color: "text-[#FF3E6C]" },
  { id: "documents", label: "Documents", icon: FileText, x: 91, y: 27, lineY: 40.6, color: "text-[#1D2740]" },
  { id: "sheets", label: "Sheets", icon: Table2, x: 86, y: 45, lineY: 44, color: "text-[#2CB968]" },
  { id: "tasks", label: "Tasks", icon: SquareCheckBig, x: 93, y: 61, lineY: 47.4, color: "text-[#8A4DFF]" },
  { id: "calendar", label: "Calendar", icon: CalendarCheck, x: 82, y: 78, lineY: 50.8, color: "text-[#2A7BFF]" },
  { id: "team", label: "Team", icon: Users, x: 72, y: 80, lineY: 54.2, color: "text-[#2A7BFF]" },
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
          <stop offset="0%" stopColor="#DCE7FF" stopOpacity="0.05" />
          <stop offset="38%" stopColor="#8FACFF" stopOpacity="0.78" />
          <stop offset="50%" stopColor="#1238F2" stopOpacity="1" />
          <stop offset="62%" stopColor="#8FACFF" stopOpacity="0.78" />
          <stop offset="100%" stopColor="#DCE7FF" stopOpacity="0.05" />
        </linearGradient>
        <filter id="heroLineGlow" x="-20%" y="-25%" width="140%" height="150%">
          <feGaussianBlur stdDeviation="1.1" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        d="M28 46.5 C36 46.5 42 46.5 47.2 46.5"
        stroke="url(#heroStream)"
        strokeWidth="1.05"
        filter="url(#heroLineGlow)"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M52.8 46.5 C58 46.5 64 46.5 72 46.5"
        stroke="url(#heroStream)"
        strokeWidth="1.05"
        filter="url(#heroLineGlow)"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M50 56.5 C50 65 50 72.5 50 80.5"
        stroke="#7EA0FF"
        strokeDasharray="2 3"
        strokeOpacity="0.55"
        strokeWidth="0.7"
        filter="url(#heroLineGlow)"
        vectorEffect="non-scaling-stroke"
      />

      {inputTools.map((item, index) => {
        const startX = item.x + 20.5;
        const startY = item.y;
        return (
          <g key={`input-line-${item.id}`}>
            <path
              d={`M${startX} ${startY} C30 ${startY} 34 ${item.targetY} 46.8 ${item.targetY}`}
              stroke="#DCE7FF"
              strokeOpacity="0.8"
              strokeWidth="1.25"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d={`M${startX} ${startY} C30 ${startY} 34 ${item.targetY} 46.8 ${item.targetY}`}
              stroke={index % 2 === 0 ? "#7EA0FF" : "#5E86FF"}
              strokeDasharray="1.4 2.4"
              strokeOpacity="0.78"
              strokeWidth="0.45"
              vectorEffect="non-scaling-stroke"
            />
            <circle cx="46.8" cy={item.targetY} r="0.38" fill="#1238F2" />
          </g>
        );
      })}

      {rightToolNodes.map((node) => {
        const endX = node.x - 4.6;
        return (
          <g key={`output-line-${node.id}`}>
            <path
              d={`M53.2 ${node.lineY} C61 ${node.lineY} 65 ${node.y} ${endX} ${node.y}`}
              stroke="#DCE7FF"
              strokeOpacity="0.78"
              strokeWidth="1.2"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d={`M53.2 ${node.lineY} C61 ${node.lineY} 65 ${node.y} ${endX} ${node.y}`}
              stroke="#5E86FF"
              strokeDasharray="1.4 2.4"
              strokeOpacity="0.72"
              strokeWidth="0.45"
              vectorEffect="non-scaling-stroke"
            />
            <circle cx="53.2" cy={node.lineY} r="0.38" fill="#1238F2" />
            <circle cx={endX} cy={node.y} r="0.42" fill="#FFFFFF" stroke="#BFD0FF" strokeWidth="0.18" />
          </g>
        );
      })}

      <circle cx="50" cy="80.5" r="0.48" fill="#1238F2" />
    </svg>
  );
}

function CenterLogo() {
  return (
    <div
      className="absolute left-1/2 top-[46.5%] z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
      data-flow-core="business-os"
    >
      <div className="absolute h-[15.5rem] w-[15.5rem] rounded-full border border-[#DCE7FF]/70" />
      <div className="absolute h-[12.2rem] w-[12.2rem] rounded-full border border-[#DCE7FF]/60" />
      <div className="absolute h-[10rem] w-[10rem] rounded-full bg-[#1238F2]/[0.12] blur-3xl" />
      <div className="absolute h-[7.5rem] w-[7.5rem] rounded-full bg-[#6F98FF]/[0.16] blur-2xl" />
      <div className="absolute h-[6.25rem] w-[6.25rem] rounded-full bg-white/38 blur-xl" />

      <div className="relative flex h-[8rem] w-[8rem] items-center justify-center overflow-hidden rounded-full bg-white/18 shadow-[0_0_58px_rgba(91,124,255,0.34),0_28px_78px_rgba(18,56,242,0.21)] backdrop-blur-2xl">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_28%_20%,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0.24)_20%,rgba(91,124,255,0.34)_42%,rgba(18,56,242,0.34)_68%,rgba(9,20,82,0.42)_100%)]" />
        <div className="absolute left-[8%] top-[7%] h-[34%] w-[48%] rounded-full bg-white/42 blur-xl" />
        <div className="absolute right-[8%] top-[18%] h-[30%] w-[20%] rounded-full bg-white/20 blur-lg" />
        <div className="absolute bottom-0 h-1/2 w-full rounded-b-full bg-[radial-gradient(circle_at_50%_100%,rgba(62,119,255,0.48),transparent_60%)]" />
        <div className="absolute inset-0 rounded-full bg-[linear-gradient(145deg,rgba(255,255,255,0.44),rgba(255,255,255,0.06)_38%,rgba(18,56,242,0.24)_100%)]" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <p className="text-[0.52rem] font-bold uppercase tracking-[0.28em] text-white/90 drop-shadow-[0_2px_10px_rgba(18,56,242,0.35)]">
            {coreEyebrow}
          </p>
          <p className="mt-1.5 font-serif text-[2.45rem] leading-none tracking-[-0.07em] text-white drop-shadow-[0_4px_18px_rgba(18,56,242,0.4)]">
            {coreTitle}
          </p>
          <div className="mt-3 rounded-full bg-white/16 px-3.5 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.32)] backdrop-blur-xl">
            <p className="text-[0.43rem] font-bold uppercase tracking-[0.2em] text-white/90">
              {coreSubtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopSystemMap() {
  return (
    <div className="relative mx-auto hidden h-[318px] w-full max-w-[1120px] lg:block">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#AFC4FF]/70 to-transparent" />
      <ConnectorLines />
      <CenterLogo />

      {inputTools.map(({ id, label, icon: Icon, x, y }) => (
        <div
          key={id}
          data-flow-source={id}
          style={{ left: `${x}%`, top: `${y}%` }}
          className="group absolute z-20 flex h-[40px] w-[220px] -translate-y-1/2 items-center gap-3 overflow-hidden rounded-[18px] bg-white/42 px-4 shadow-[0_18px_50px_rgba(16,35,95,0.09),inset_0_1px_0_rgba(255,255,255,0.68)] backdrop-blur-2xl transition duration-300 hover:scale-[1.01] hover:bg-white/58 hover:shadow-[0_22px_64px_rgba(18,56,242,0.13),inset_0_1px_0_rgba(255,255,255,0.76)]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.6),rgba(255,255,255,0.14)_52%,rgba(94,134,255,0.09))]" />
          <div className="absolute inset-x-0 top-0 h-px bg-white/80" />
          <div className="absolute -left-10 top-0 h-full w-20 rotate-12 bg-white/24 blur-2xl transition duration-300 group-hover:translate-x-32" />
          <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/58 text-[#4B73FF] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_22px_rgba(91,122,255,0.12)] backdrop-blur-xl">
            <Icon size={15} strokeWidth={1.9} />
          </span>
          <span className="relative truncate text-sm font-semibold tracking-[-0.01em] text-[#1D2740]">
            {label}
          </span>
        </div>
      ))}

      {rightToolNodes.map(({ id, label, icon: Icon, x, y, color }) => (
        <div
          key={id}
          data-flow-output={id}
          style={{ left: `${x}%`, top: `${y}%` }}
          className="absolute z-20 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full bg-white/44 shadow-[0_18px_48px_rgba(16,35,95,0.09),inset_0_1px_0_rgba(255,255,255,0.72)] backdrop-blur-2xl transition duration-300 hover:scale-105 hover:bg-white/62"
          aria-label={label}
          title={label}
        >
          <div className="absolute inset-0 rounded-full bg-[linear-gradient(145deg,rgba(255,255,255,0.68),rgba(255,255,255,0.12)_58%,rgba(94,134,255,0.10))]" />
          <div className="absolute left-[18%] top-[12%] h-[28%] w-[44%] rounded-full bg-white/42 blur-md" />
          <Icon className={`relative ${color}`} size={20} strokeWidth={2} />
        </div>
      ))}

      <div
        data-flow-output="clarity-pill"
        className="absolute left-1/2 top-[88%] z-20 flex h-10 min-w-[250px] -translate-x-1/2 items-center justify-center overflow-hidden rounded-[18px] bg-white/44 px-5 text-center shadow-[0_18px_48px_rgba(16,35,95,0.09),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-2xl"
      >
        <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.58),rgba(255,255,255,0.12)_55%,rgba(94,134,255,0.08))]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/80" />
        <p className="relative text-sm font-bold text-[#1238F2]">
          One System. Total Clarity.
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
            className="flex min-h-14 min-w-0 items-center gap-3 overflow-hidden rounded-2xl bg-white/42 px-3 py-3 shadow-[0_14px_34px_rgba(16,35,95,0.09),inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-2xl"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/58 text-[#4B73FF] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_20px_rgba(91,122,255,0.10)] backdrop-blur-xl">
              <Icon size={16} strokeWidth={1.9} />
            </span>
            <span className="truncate text-xs font-semibold text-[#1D2740]">
              {label}
            </span>
          </div>
        ))}
      </div>
      <div className="relative mt-5 overflow-hidden rounded-[2rem] bg-white/20 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] backdrop-blur-2xl">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(82,112,255,0.10),transparent_45%)]" />
        <div className="relative mx-auto flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-white/18 shadow-[0_0_44px_rgba(91,124,255,0.30),0_28px_80px_rgba(18,56,242,0.18)] backdrop-blur-2xl">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_28%_20%,rgba(255,255,255,0.70)_0%,rgba(255,255,255,0.24)_18%,rgba(91,124,255,0.28)_38%,rgba(18,56,242,0.30)_64%,rgba(9,20,82,0.38)_100%)]" />
          <div className="absolute left-[8%] top-[7%] h-[34%] w-[48%] rounded-full bg-white/42 blur-xl" />
          <div className="absolute bottom-0 h-1/2 w-full rounded-b-full bg-[radial-gradient(circle_at_50%_100%,rgba(62,119,255,0.45),transparent_60%)]" />
          <div className="relative z-10 flex flex-col items-center text-center">
            <p className="text-[8px] font-bold uppercase tracking-[0.28em] text-white/90">
              {coreEyebrow}
            </p>
            <p className="mt-2 font-serif text-[2.3rem] leading-none tracking-[-0.07em] text-white">
              {coreTitle}
            </p>
            <div className="mt-3 rounded-full bg-white/16 px-3 py-1 backdrop-blur-xl">
              <p className="text-[6px] font-bold uppercase tracking-[0.2em] text-white/90">
                {coreSubtitle}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 flex justify-center gap-3">
          {rightToolNodes.slice(0, 5).map(({ id, label, icon: Icon, color }) => (
            <span
              key={id}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/62 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]"
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
    <div className="relative mt-6 w-full min-w-0 md:mt-7">
      <DesktopSystemMap />
      <MobileSystemMap />
    </div>
  );
}

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[#FAFAF8] text-[#0B1220]"
      data-section="hero"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-16rem] h-[44rem] w-[56rem] -translate-x-1/2 rounded-full bg-[#1238F2]/[0.06] blur-3xl" />
        <div className="absolute left-[-10rem] top-[18%] h-[26rem] w-[26rem] rounded-full bg-white/80 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D8DCE8] to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-72px)] w-full max-w-[1500px] flex-col justify-center px-5 py-10 sm:px-8 md:py-12 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-[860px] text-center">
          <p className="mb-4 inline-flex rounded-full bg-white/56 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1238F2] shadow-[0_8px_24px_rgba(18,56,242,0.08),inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-2xl">
            Websites • Systems • Automations
          </p>
          <h1 className="mx-auto max-w-[820px] text-balance break-words text-[clamp(2.05rem,8.8vw,4.35rem)] font-semibold leading-[0.97] tracking-[-0.055em] text-[#0B1220] max-[480px]:max-w-[350px] max-[480px]:text-[2.08rem]">
            Websites, systems &amp; automations that help your business{" "}
            <span className="font-serif italic font-normal text-[#1238F2]">
              run clearer.
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-[680px] text-[15px] leading-7 text-[#566176] max-[480px]:max-w-[350px] sm:text-base sm:leading-8">
            I help businesses turn disconnected tools, manual workflows, and
            outdated websites into one clear system that saves time, looks
            professional, and supports real growth.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="group inline-flex h-12 w-full max-w-[350px] items-center justify-center gap-3 overflow-hidden rounded-md bg-[#020817]/95 px-6 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(2,8,23,0.18),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-[#061126]/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1238F2]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAF8] sm:w-auto sm:min-w-[220px]"
            >
              Let&apos;s look at your setup
              <ArrowRight
                size={14}
                className="transition duration-300 group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="/work"
              className="inline-flex h-12 w-full max-w-[350px] items-center justify-center rounded-md bg-white/56 px-6 text-sm font-semibold text-[#0B1220] shadow-[0_12px_28px_rgba(16,19,26,0.06),inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-2xl transition duration-300 hover:-translate-y-0.5 hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1238F2]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAF8] sm:w-auto sm:min-w-[210px]"
            >
              View projects
            </Link>
          </div>
        </div>

        <SystemMap />
      </div>
    </section>
  );
}
