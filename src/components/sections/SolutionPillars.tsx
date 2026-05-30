"use client";

import {
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
  useRef,
} from "react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useStagger } from "@/components/animations/useStagger";
import { Button } from "@/components/ui/Button";

const pillars = [
  {
    number: "01",
    title: "Premium Website & Lead Platform",
    layer: "Trust and lead layer",
    description:
      "A clear website or landing page that explains the offer, builds trust, captures qualified inquiries, and gives visitors a reason to act.",
    points: ["Premium UI/UX", "Lead intake", "Conversion structure"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="4"
          width="18"
          height="13"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M8 20H16M12 17V20"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M7 10.5L10 13.5L17 8"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "CRM & Follow-Up Flow",
    layer: "Lead handling layer",
    description:
      "Forms, CRM stages, email notifications, reminders, and handoffs connected so new opportunities do not disappear in scattered messages.",
    points: ["CRM pipeline", "Lead routing", "Follow-up process"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle
          cx="6"
          cy="7"
          r="3"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle
          cx="18"
          cy="7"
          r="3"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle
          cx="12"
          cy="17"
          r="3"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M8.5 8.7L10.7 14.2M15.5 8.7L13.3 14.2M9 17H6.5C5.1 17 4 15.9 4 14.5V13"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Dashboards & Internal Tools",
    layer: "Operations layer",
    description:
      "Custom admin views, client portals, booking flows, payment flows, and reporting dashboards that make daily work easier to manage.",
    points: ["Dashboard", "Client portal", "Admin tool"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 16.5L8.8 11.7L12.3 15.2L20 7.5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 7.5H20V12.5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 20H20"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const systemFlow = [
  "Client trust",
  "Lead intake",
  "CRM pipeline",
  "Dashboard",
  "Follow-up",
];

type SpotlightPanelProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

function updateSpotlight(event: MouseEvent<HTMLDivElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  event.currentTarget.style.setProperty("--spotlight-x", `${x}px`);
  event.currentTarget.style.setProperty("--spotlight-y", `${y}px`);
}

function SpotlightPanel({
  children,
  className = "",
  innerClassName = "",
}: SpotlightPanelProps) {
  const spotlightStyle = {
    "--spotlight-x": "50%",
    "--spotlight-y": "50%",
  } as CSSProperties;

  return (
    <div
      onMouseMove={updateSpotlight}
      style={spotlightStyle}
      className={`group relative overflow-hidden rounded-3xl bg-white/[0.07] p-px transition duration-300 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--spotlight-x) var(--spotlight-y), rgba(47,47,228,0.68), rgba(255,255,255,0.14) 32%, transparent 68%)",
        }}
      />

      <div
        className={`relative h-full overflow-hidden rounded-[23px] bg-site-bg/88 backdrop-blur-xl ${innerClassName}`}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(520px circle at var(--spotlight-x) var(--spotlight-y), rgba(47,47,228,0.09), transparent 58%)",
          }}
        />

        <div
          className="pointer-events-none absolute inset-x-8 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(260px circle at var(--spotlight-x) 0px, rgba(167,174,255,0.85), transparent 72%)",
          }}
        />

        <div className="relative z-10 h-full">{children}</div>
      </div>
    </div>
  );
}

export function SolutionPillars() {
  const ref = useRef<HTMLDivElement>(null);

  useStagger(ref, ".pillar-card", { y: 18, stagger: 0.08 });

  return (
    <section className="relative overflow-hidden bg-site-bg py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(47,47,228,0.07),transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_48%,rgba(22,46,147,0.09),transparent_34%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/8 to-transparent" />

        <div className="absolute left-0 top-0 h-full w-1/2 opacity-[0.026]">
          <div className="h-full w-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:88px_88px]" />
        </div>
      </div>

      <Container>
        <div ref={ref} className="relative z-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_0.7fr] lg:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-brand-blue md:text-sm">
                How I solve it
              </p>

              <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
                The public website and the internal operation should support
                each other.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-relaxed text-white/60 md:text-lg lg:justify-self-end">
              The right setup connects the first impression, lead intake, CRM
              pipeline, follow-up process, dashboards, and internal tools into
              a cleaner way to operate.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[0.72fr_1fr]">
            {/* Architecture overview */}
            <SpotlightPanel innerClassName="p-6 md:p-7">
              <div className="flex h-full min-h-[520px] flex-col">
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/35">
                      Digital structure
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">
                      From visitor to next action
                    </h3>
                  </div>

                  <span className="rounded-full border border-brand-blue/30 bg-brand-blue/10 px-3 py-1 text-xs text-brand-blue-light">
                    Connected
                  </span>
                </div>

                <div className="relative mt-8 flex flex-1 flex-col justify-between gap-4">
                  <div className="absolute bottom-10 left-[19px] top-10 w-px bg-linear-to-b from-brand-blue/0 via-brand-blue/35 to-brand-blue/0" />

                  {systemFlow.map((item, index) => (
                    <div key={item} className="relative flex items-center gap-4">
                      <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-brand-blue/25 bg-brand-blue/10 font-mono text-[11px] text-brand-blue-light shadow-[0_0_24px_rgba(47,47,228,0.12)]">
                        0{index + 1}
                      </span>

                      <div className="flex-1 rounded-2xl border border-white/[0.07] bg-site-bg/45 px-4 py-3">
                        <p className="text-sm font-medium text-white/75">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">
                  <p className="text-sm leading-relaxed text-white/55">
                    Each layer strengthens the next one: better presentation,
                    cleaner lead handling, clearer operations, and more room to
                    grow.
                  </p>
                </div>
              </div>
            </SpotlightPanel>

            {/* Pillars */}
            <div className="grid gap-5">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="pillar-card">
                  <SpotlightPanel innerClassName="p-6 md:p-7">
                    <div className="grid gap-6 md:grid-cols-[auto_1fr]">
                      <div className="flex md:flex-col md:items-center">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-brand-blue/25 bg-brand-blue/10 text-brand-blue-light transition duration-300 group-hover:border-brand-blue/40 group-hover:bg-brand-blue/15">
                          {pillar.icon}
                        </div>

                        <div className="ml-4 flex items-center gap-3 md:ml-0 md:mt-5 md:flex-col">
                          <span className="font-mono text-xs text-brand-blue transition duration-300 group-hover:text-brand-blue-light">
                            {pillar.number}
                          </span>
                          <span className="hidden h-12 w-px bg-brand-blue/25 transition duration-300 group-hover:bg-brand-blue-light/55 md:block" />
                        </div>
                      </div>

                      <div>
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p className="text-xs uppercase tracking-[0.22em] text-white/35">
                              {pillar.layer}
                            </p>

                            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                              {pillar.title}
                            </h3>
                          </div>

                          <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.025] text-white/45 transition duration-300 group-hover:border-brand-blue/30 group-hover:bg-brand-blue/10 group-hover:text-white sm:flex">
                            <ArrowUpRight size={16} />
                          </span>
                        </div>

                        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/55 md:text-[15px]">
                          {pillar.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {pillar.points.map((point) => (
                            <span
                              key={point}
                              className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs text-white/55 transition duration-300 group-hover:border-brand-blue/20 group-hover:text-white/70"
                            >
                              {point}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SpotlightPanel>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start gap-5 rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-xl md:mt-12 md:flex-row md:items-center md:justify-between md:p-7">
            <p className="max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
              Each layer is designed to improve both what customers see and how
              the team handles the work behind it.
            </p>

            <Button href="/work" variant="primary">
              <span>View Case Studies</span>
              <ArrowUpRight size={15} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
