"use client";

import { useRef } from "react";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  DatabaseZap,
  Globe2,
  Mail,
  MousePointerClick,
  PlugZap,
  Repeat2,
  TimerReset,
  Users,
  Workflow,
  XCircle,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { animationConfig, reducedMotionQuery } from "@/lib/animation";
import { ensureGsap, gsap, useGSAP } from "@/components/animations/gsapClient";

type DiagnosticCard = {
  question: string;
  problem: string;
  fix: string;
  icon: LucideIcon;
};

type MetricCard = {
  label: string;
  value: string;
  note: string;
  icon: LucideIcon;
};

type ToolNode = {
  label: string;
  status: string;
  icon: LucideIcon;
  position: string;
  rotateClass: string;
};

const diagnosticCards: DiagnosticCard[] = [
  {
    question: "Do new leads instantly become clean CRM records?",
    problem: "Or does someone still copy form details into another tool?",
    fix: "Lead capture should create the next step automatically.",
    icon: MousePointerClick,
  },
  {
    question: "Are follow-ups sent without someone remembering?",
    problem: "Or do good inquiries wait because the team is busy?",
    fix: "Follow-ups, reminders, and tasks should run in the background.",
    icon: Repeat2,
  },
  {
    question: "Can you see what is active, blocked, and next?",
    problem: "Or is your pipeline spread across emails, chats, and memory?",
    fix: "A dashboard should show the real state of the business.",
    icon: BarChart3,
  },
  {
    question: "Do your website, CRM, email, and workflows talk to each other?",
    problem: "Or does every tool hold a different piece of the process?",
    fix: "The system should connect the tools around your business flow.",
    icon: PlugZap,
  },
];

const metricCards: MetricCard[] = [
  {
    label: "Manual work",
    value: "18h",
    note: "monthly admin that can often be reduced",
    icon: Clock3,
  },
  {
    label: "Lead routing",
    value: "2m",
    note: "target response structure after inquiry",
    icon: TimerReset,
  },
  {
    label: "Follow-up coverage",
    value: "94%",
    note: "structured next steps instead of missed chances",
    icon: CheckCircle2,
  },
];

const toolNodes: ToolNode[] = [
  {
    label: "Website",
    status: "lead arrives",
    icon: Globe2,
    position: "left-[5%] top-[14%]",
    rotateClass: "-rotate-[2deg]",
  },
  {
    label: "Form",
    status: "context captured",
    icon: MousePointerClick,
    position: "left-[30%] top-[26%]",
    rotateClass: "rotate-[1.5deg]",
  },
  {
    label: "Email",
    status: "follow-up needed",
    icon: Mail,
    position: "right-[8%] top-[18%]",
    rotateClass: "rotate-[2deg]",
  },
  {
    label: "CRM",
    status: "record missing",
    icon: Users,
    position: "left-[8%] bottom-[20%]",
    rotateClass: "rotate-[1deg]",
  },
  {
    label: "Workflow",
    status: "not triggered",
    icon: Workflow,
    position: "right-[28%] bottom-[18%]",
    rotateClass: "-rotate-[1.5deg]",
  },
  {
    label: "Dashboard",
    status: "no clear view",
    icon: DatabaseZap,
    position: "right-[3%] bottom-[10%]",
    rotateClass: "rotate-[1.5deg]",
  },
];

function ProblemLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
      viewBox="0 0 900 430"
      fill="none"
      aria-hidden="true"
      data-problem-lines
    >
      <path
        d="M110 85 C185 50 245 106 315 82 C385 58 445 112 525 86 C620 54 695 90 790 58"
        stroke="#b8643f"
        strokeDasharray="8 12"
        strokeLinecap="round"
        strokeWidth="1.25"
        strokeOpacity="0.38"
      />
      <path
        d="M100 220 C185 178 260 248 350 204 C445 158 520 232 625 182 C710 142 770 170 830 146"
        stroke="#8cab72"
        strokeDasharray="8 12"
        strokeLinecap="round"
        strokeWidth="1.25"
        strokeOpacity="0.36"
      />
      <path
        d="M138 340 C228 366 306 288 404 328 C508 370 612 304 758 336"
        stroke="#151512"
        strokeDasharray="6 14"
        strokeLinecap="round"
        strokeWidth="1"
        strokeOpacity="0.14"
      />
    </svg>
  );
}

function ToolNodeCard({ node }: { node: ToolNode }) {
  const Icon = node.icon;

  return (
    <article
      data-problem-tool
      className={`acrylic-surface absolute z-20 w-[178px] ${node.position} ${node.rotateClass} rounded-[1.35rem] border p-3 transition duration-300 hover:z-30 hover:-translate-y-1 hover:rotate-0 hover:border-[#b8643f]/28 hover:bg-white/62`}
    >
      <div className="flex items-center gap-3">
        <span className="acrylic-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border text-[#b8643f]">
          <Icon size={17} strokeWidth={1.85} />
        </span>

        <div className="min-w-0">
          <p className="truncate text-sm font-semibold tracking-[-0.02em] text-[#171512]">
            {node.label}
          </p>
          <p className="mt-0.5 truncate text-xs text-[#625c54]">
            {node.status}
          </p>
        </div>
      </div>
    </article>
  );
}

function ProblemVisual() {
  return (
    <div
      data-problem-visual
      className="acrylic-surface-strong relative overflow-hidden rounded-[2.35rem] border p-4 lg:min-h-[430px]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.42),rgba(255,255,255,0.16)_58%,rgba(184,100,63,0.06))]" />
      <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-[#b8643f]/12 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-56 w-56 rounded-full bg-[#8cab72]/16 blur-3xl" />

      <div className="relative z-10 grid gap-3 lg:hidden">
        {toolNodes.map((node) => {
          const Icon = node.icon;

          return (
            <div
              key={node.label}
              className="acrylic-inset flex items-center gap-3 rounded-[1.25rem] border p-3"
            >
              <span className="acrylic-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border text-[#b8643f]">
                <Icon size={17} strokeWidth={1.85} />
              </span>
              <div>
                <p className="text-sm font-semibold text-[#171512]">
                  {node.label}
                </p>
                <p className="text-xs text-[#625c54]">{node.status}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative z-10 hidden h-[390px] lg:block">
        <ProblemLines />

        {toolNodes.map((node) => (
          <ToolNodeCard key={node.label} node={node} />
        ))}

        <div
          data-problem-center
          className="acrylic-accent absolute left-1/2 top-1/2 z-30 w-[292px] -translate-x-1/2 -translate-y-1/2 rounded-[1.8rem] border p-5 text-center shadow-[0_24px_70px_rgba(22,20,17,0.14),inset_0_1px_0_rgba(255,255,255,0.78)]"
        >
          <div className="acrylic-icon mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border text-[#b8643f]">
            <AlertTriangle size={22} strokeWidth={1.85} />
          </div>

          <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#9b6d4a]">
            The missing layer
          </p>

          <h3 className="mt-2 text-xl font-semibold leading-tight tracking-[-0.04em] text-[#171512]">
            Your website may look good. But what happens after the lead?
          </h3>

          <p className="mt-3 text-sm leading-6 text-[#5d574f]">
            That is where most companies lose speed, clarity, and opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ metric }: { metric: MetricCard }) {
  const Icon = metric.icon;

  return (
    <article
      data-problem-metric
      className="acrylic-surface rounded-[1.45rem] border p-4"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="acrylic-icon flex h-10 w-10 items-center justify-center rounded-2xl border text-[#b8643f]">
          <Icon size={17} strokeWidth={1.85} />
        </span>

        <span className="acrylic-pill-success rounded-full border px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-[#4f7449]">
          Target
        </span>
      </div>

      <p className="mt-5 text-3xl font-semibold tracking-[-0.06em] text-[#171512]">
        {metric.value}
      </p>
      <p className="mt-1 text-sm font-semibold text-[#29251f]">
        {metric.label}
      </p>
      <p className="mt-2 text-xs leading-5 text-[#625c54]">{metric.note}</p>
    </article>
  );
}

function DiagnosticCard({ card }: { card: DiagnosticCard }) {
  const Icon = card.icon;

  return (
    <article
      data-problem-card
      className="acrylic-surface group relative overflow-hidden rounded-[1.75rem] border p-5 transition duration-300 hover:-translate-y-1 hover:border-[#b8643f]/28 hover:bg-white/62 sm:p-6"
    >
      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.36),rgba(255,255,255,0.16)_60%,rgba(184,100,63,0.04))]" />

      <div className="relative">
        <div className="mb-5 flex items-start justify-between gap-4">
          <span className="acrylic-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-[#b8643f]">
            <Icon size={21} strokeWidth={1.85} />
          </span>

          <ArrowRight
            className="mt-2 hidden text-[#b8643f] opacity-0 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100 sm:block"
            size={18}
            strokeWidth={1.85}
          />
        </div>

        <h3 className="text-xl font-semibold leading-tight tracking-[-0.04em] text-[#171512]">
          {card.question}
        </h3>

        <div className="mt-5 grid gap-3">
          <div className="acrylic-accent rounded-[1.15rem] border p-4">
            <div className="flex items-start gap-3">
              <XCircle
                className="mt-0.5 shrink-0 text-[#b8643f]"
                size={17}
                strokeWidth={1.9}
              />
              <p className="text-sm leading-6 text-[#514b43]">
                {card.problem}
              </p>
            </div>
          </div>

          <div className="acrylic-success rounded-[1.15rem] border p-4">
            <div className="flex items-start gap-3">
              <CheckCircle2
                className="mt-0.5 shrink-0 text-[#6f965d]"
                size={17}
                strokeWidth={1.9}
              />
              <p className="text-sm leading-6 text-[#514b43]">{card.fix}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Problem() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      ensureGsap();

      const mm = gsap.matchMedia(root);
      const select = gsap.utils.selector(root);

      const intro = select<HTMLElement>("[data-problem-intro]");
      const visual = select<HTMLElement>("[data-problem-visual]");
      const tools = select<HTMLElement>("[data-problem-tool]");
      const center = select<HTMLElement>("[data-problem-center]");
      const metrics = select<HTMLElement>("[data-problem-metric]");
      const cards = select<HTMLElement>("[data-problem-card]");
      const lines = select<SVGPathElement>("[data-problem-lines] path");

      mm.add(reducedMotionQuery, () => {
        gsap.set(
          [...intro, ...visual, ...tools, ...center, ...metrics, ...cards],
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            clearProps: "transform",
          },
        );

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

        gsap
          .timeline({
            scrollTrigger: {
              trigger: root,
              start: animationConfig.scroll.sectionStart,
              once: true,
            },
            defaults: { ease: animationConfig.ease.default },
          })
          .fromTo(
            intro,
            { autoAlpha: 0, y: 24 },
            {
              autoAlpha: 1,
              y: 0,
              duration: animationConfig.duration.reveal,
              stagger: animationConfig.stagger.tight,
            },
          )
          .fromTo(
            visual,
            { autoAlpha: 0, y: 24, scale: 0.985 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.85,
              ease: animationConfig.ease.premium,
            },
            "-=0.45",
          )
          .fromTo(
            center,
            { autoAlpha: 0, y: 12, scale: 0.96 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.65,
              ease: animationConfig.ease.premium,
            },
            "-=0.4",
          )
          .fromTo(
            tools,
            { autoAlpha: 0, y: 12, scale: 0.97 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              stagger: animationConfig.stagger.tight,
            },
            "-=0.45",
          )
          .to(
            lines,
            {
              strokeDashoffset: 0,
              duration: 1,
              stagger: 0.035,
              ease: animationConfig.ease.soft,
            },
            "-=0.45",
          )
          .fromTo(
            metrics,
            { autoAlpha: 0, y: 18 },
            {
              autoAlpha: 1,
              y: 0,
              duration: animationConfig.duration.card,
              stagger: animationConfig.stagger.tight,
            },
            "-=0.25",
          )
          .fromTo(
            cards,
            { autoAlpha: 0, y: 22 },
            {
              autoAlpha: 1,
              y: 0,
              duration: animationConfig.duration.card,
              stagger: animationConfig.stagger.default,
            },
            "-=0.2",
          );
      });

      return () => mm.revert();
    },
    { scope: rootRef, dependencies: [], revertOnUpdate: true },
  );

  return (
    <section
      ref={rootRef}
      id="problem"
      className="relative overflow-hidden bg-[#f7f4ed] py-20 text-[#151512] md:py-28"
      data-section="problem"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(232,136,52,0.10),transparent_30%),radial-gradient(circle_at_85%_14%,rgba(140,171,114,0.13),transparent_30%),linear-gradient(180deg,#f7f4ed_0%,#fbf8f2_48%,#f7f4ed_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(21,21,18,0.12),transparent)]" />

      <Container>
        <div className="relative z-10">
          <div className="grid gap-10 lg:grid-cols-[0.45fr_1fr] lg:items-center">
            <div>
              <p
                data-problem-intro
                className="font-mono text-[10px] font-bold uppercase tracking-[0.26em] text-[#b8643f]"
              >
                Before another redesign
              </p>

              <h2
                data-problem-intro
                className="mt-4 max-w-xl text-balance text-[clamp(2.35rem,4.8vw,4.8rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-[#151512]"
              >
                Does your website actually run the business after the click?
              </h2>

              <p
                data-problem-intro
                className="mt-6 max-w-xl text-base leading-8 text-[#4f4a42]"
              >
                A modern website is not enough if every inquiry still creates
                manual work, slow follow-up, and scattered information.
              </p>

              <div
                data-problem-intro
                className="acrylic-accent mt-7 rounded-[1.45rem] border p-4"
              >
                <p className="text-sm font-semibold leading-6 text-[#302a24]">
                  The real question is simple: when a lead comes in, does your
                  system know what should happen next?
                </p>
              </div>
            </div>

            <ProblemVisual />
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {metricCards.map((metric) => (
              <MetricCard key={metric.label} metric={metric} />
            ))}
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {diagnosticCards.map((card) => (
              <DiagnosticCard key={card.question} card={card} />
            ))}
          </div>

          <div
            data-problem-intro
            className="acrylic-surface mx-auto mt-12 max-w-4xl rounded-[1.8rem] border p-5 text-center sm:p-6"
          >
            <p className="text-lg font-semibold leading-8 tracking-[-0.03em] text-[#171512]">
              If the answer is “not really”, you do not just need a nicer
              website. You need a connected digital system behind it.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
