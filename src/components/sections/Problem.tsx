import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/animations/ScrollAnimation";

const problems = [
  {
    label: "Admin tasks eating hours every week",
    desc: "Follow-ups, updates, reminders, and data entry keep pulling the team away from higher-value work.",
    icon: "/icons/problems/repetitive-tasks.png",
  },
  {
    label: "Forms, email, CRM, and payments do not connect",
    desc: "Lead intake, booking, payment, and customer handoffs happen across too many disconnected places.",
    icon: "/icons/problems/disconnected.png",
  },
  {
    label: "Websites that look fine but do not create enough trust",
    desc: "The site exists, but the offer is unclear, the lead path is weak, and follow-up starts too late.",
    icon: "/icons/problems/stagnant-website.png",
  },
  {
    label: "No clear view of leads, tasks, or next actions",
    desc: "Without a dashboard or structured reporting flow, every new customer adds more coordination overhead.",
    icon: "/icons/problems/no-tracking.png",
  },
];

const signals = [
  "Admin overload",
  "Scattered tools",
  "Slow follow-up",
  "No clear owner",
];

export function Problem() {
  return (
    <section className="relative overflow-hidden bg-site-bg py-20 md:py-28">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(47,47,228,0.08),transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_55%,rgba(22,46,147,0.10),transparent_34%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/8 to-transparent" />

        <div className="absolute right-0 top-0 h-full w-1/2 opacity-[0.035]">
          <div className="h-full w-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>
      </div>

      <Container>
        <Reveal className="relative z-10">
          {/* Header */}
          <div className="grid gap-10 lg:grid-cols-[0.95fr_0.75fr] lg:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.32em] text-brand-blue md:text-sm">
                The Problem
              </p>

              <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Growth gets harder when the website, leads, and operations do
                not work together.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
                When inquiries sit in email, CRM updates depend on memory, and
                internal work is tracked across scattered tools, the team loses
                speed before the customer even feels the value.
              </p>
            </div>

            {/* Diagnosis card */}
            <div className="group relative overflow-hidden rounded-3xl p-px transition duration-500 hover:shadow-[0_24px_80px_rgba(47,47,228,0.12)]">
              <div className="absolute inset-0 rounded-3xl bg-white/[0.08] transition duration-500 group-hover:bg-[linear-gradient(135deg,rgba(47,47,228,0.65),rgba(255,255,255,0.12),rgba(22,46,147,0.20))]" />

              <div className="relative rounded-[23px] bg-site-bg/80 p-5 backdrop-blur-xl">
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-transparent to-transparent transition duration-500 group-hover:via-brand-blue-soft/80" />
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-blue/0 blur-3xl transition duration-500 group-hover:bg-brand-blue/14" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-white/35">
                        Operations diagnosis
                      </p>
                      <p className="mt-2 text-sm font-medium text-white/80">
                        Common growth blockers
                      </p>
                    </div>

                    <span className="rounded-full border border-brand-blue/30 bg-brand-blue/10 px-3 py-1 text-xs text-brand-blue-light">
                      Before strategy
                    </span>
                  </div>

                  <div className="mt-4 grid gap-2">
                    {signals.map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-2xl border border-white/[0.07] bg-site-bg/45 px-4 py-3 transition duration-300 hover:border-brand-blue/25 hover:bg-brand-blue/10"
                      >
                        <span className="text-sm text-white/60">{item}</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-blue shadow-[0_0_16px_rgba(47,47,228,0.75)]" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Problem cards */}
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {problems.map((item, index) => (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-3xl p-px transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(0,0,0,0.34)]"
              >
                {/* Premium edge highlight */}
                <div className="absolute inset-0 rounded-3xl bg-white/[0.08] transition duration-500 group-hover:bg-[linear-gradient(135deg,rgba(47,47,228,0.70),rgba(255,255,255,0.14),rgba(22,46,147,0.18))]" />

                <div className="relative h-full overflow-hidden rounded-[23px] bg-site-bg/78 p-6 backdrop-blur-xl md:p-7">
                  {/* Top light edge */}
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-transparent to-transparent transition duration-500 group-hover:via-brand-blue-soft/90" />

                  {/* Soft hover glow */}
                  <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-brand-blue/0 blur-3xl transition duration-500 group-hover:bg-brand-blue/12" />

                  {/* Subtle inner shine */}
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/[0.04] via-transparent to-transparent opacity-60 transition duration-500 group-hover:opacity-100" />

                  <div className="relative z-10 flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/[0.08] bg-site-bg/60 text-brand-blue transition duration-300 group-hover:border-brand-blue/35 group-hover:bg-brand-blue/12 group-hover:shadow-[0_0_28px_rgba(47,47,228,0.18)]">
                      <Image
                        src={item.icon}
                        alt=""
                        width={28}
                        height={28}
                        className="brightness-0 invert opacity-70 transition duration-300 group-hover:opacity-100"
                      />
                    </div>

                    <div>
                      <div className="mb-3 flex items-center gap-3">
                        <span className="text-xs font-medium text-brand-blue transition duration-300 group-hover:text-brand-blue-light">
                          0{index + 1}
                        </span>
                        <span className="h-px w-8 bg-brand-blue/35 transition duration-300 group-hover:w-12 group-hover:bg-brand-blue-light/70" />
                      </div>

                      <h3 className="text-lg font-semibold leading-snug text-white">
                        {item.label}
                      </h3>

                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/50 transition duration-300 group-hover:text-white/62">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom statement */}
          <div className="group mt-10 overflow-hidden rounded-3xl p-px transition duration-500 hover:shadow-[0_24px_90px_rgba(47,47,228,0.10)]">
            <div className="absolute rounded-3xl bg-white/[0.08]" />

            <div className="relative overflow-hidden rounded-[23px] border border-brand-blue/20 bg-white/[0.035] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl md:p-8">
              <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-linear-to-r from-transparent via-brand-blue-soft/0 to-transparent transition duration-500 group-hover:via-brand-blue-soft/80" />
              <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-brand-blue/0 blur-3xl transition duration-500 group-hover:bg-brand-blue/12" />

              <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <p className="max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
                  You do not need more manual effort.
                  <span className="ml-2 font-semibold text-white">
                    You need a cleaner setup for leads, follow-up, reporting,
                    and daily operations.
                  </span>
                </p>

                <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-white/[0.08] bg-site-bg/55 px-4 py-3 transition duration-300 group-hover:border-brand-blue/30 group-hover:bg-brand-blue/10">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue-light ring-1 ring-brand-blue/25">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M2.5 11.5L6 8L8.5 10.5L13.5 4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 4.5H13.5V8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <span className="text-sm font-medium text-white/75">
                    Better operations create leverage
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
