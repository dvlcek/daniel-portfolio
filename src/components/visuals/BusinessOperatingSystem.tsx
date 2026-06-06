import { cn } from "@/app/lib/cn";

const fragments = [
  { id: "website", label: "Website", position: "left-[6%] top-[12%]", tone: "cream" },
  { id: "leads", label: "Leads", position: "left-[28%] top-[3%]", tone: "clay" },
  { id: "crm", label: "CRM", position: "right-[27%] top-[9%]", tone: "cream" },
  { id: "manual-work", label: "Manual Work", position: "right-[5%] top-[23%]", tone: "muted" },
  { id: "follow-ups", label: "Follow-ups", position: "left-[10%] bottom-[22%]", tone: "muted" },
  { id: "data", label: "Data", position: "left-[38%] bottom-[7%]", tone: "cream" },
  { id: "automations", label: "Automations", position: "right-[31%] bottom-[15%]", tone: "clay" },
  { id: "dashboard", label: "Dashboard", position: "right-[6%] bottom-[5%]", tone: "cream" },
];

const layers = [
  ["01", "Website layer", "Positioning, UX, conversion paths"],
  ["02", "CRM layer", "Lead logic, qualification, routing"],
  ["03", "Automation layer", "Follow-up, handoffs, notifications"],
  ["04", "Dashboard layer", "Visibility, reporting, decisions"],
];

const toneClass: Record<string, string> = {
  cream: "border-[rgba(242,239,230,0.14)] bg-[rgba(242,239,230,0.065)] text-[#F2EFE6]",
  clay: "border-[#C16A3A]/30 bg-[#C16A3A]/12 text-[#F2EFE6] shadow-[0_0_34px_rgba(193,106,58,0.12)]",
  muted: "border-[rgba(242,239,230,0.10)] bg-[rgba(8,8,7,0.56)] text-[#B8B1A4]",
};

export function BusinessOperatingSystem() {
  return (
    <div className="relative mx-auto mt-12 w-full max-w-6xl lg:mt-14" aria-label="Business operating system visual">
      <div className="glass-panel relative min-h-[34rem] overflow-hidden rounded-[36px] p-5 sm:p-7 lg:min-h-[38rem] lg:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(193,106,58,0.15),transparent_30%),radial-gradient(circle_at_50%_60%,rgba(143,163,177,0.12),transparent_42%),linear-gradient(180deg,rgba(242,239,230,0.04),rgba(5,5,5,0.18))]" />
        <div className="pointer-events-none absolute inset-x-10 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-[#C16A3A]/35 to-transparent lg:block" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-28 w-px -translate-x-1/2 bg-gradient-to-b from-[#C16A3A]/45 to-transparent" />

        <svg
          data-flow-lines="hero-clean-lines"
          className="pointer-events-none absolute inset-0 hidden h-full w-full text-[#C16A3A]/45 lg:block"
          viewBox="0 0 1000 560"
          fill="none"
          aria-hidden="true"
        >
          <path d="M145 138 C260 178 352 196 500 274" stroke="currentColor" strokeWidth="1" />
          <path d="M305 92 C390 152 450 188 500 274" stroke="currentColor" strokeWidth="1" />
          <path d="M694 126 C610 166 548 210 500 274" stroke="currentColor" strokeWidth="1" />
          <path d="M858 186 C742 210 620 235 500 274" stroke="currentColor" strokeWidth="1" />
          <path d="M176 412 C286 356 388 318 500 274" stroke="currentColor" strokeWidth="1" />
          <path d="M430 480 C458 398 482 334 500 274" stroke="currentColor" strokeWidth="1" />
          <path d="M676 420 C608 358 550 314 500 274" stroke="currentColor" strokeWidth="1" />
          <path d="M864 494 C750 412 632 342 500 274" stroke="currentColor" strokeWidth="1" />
        </svg>

        <div
          data-flow-core="business-os"
          className="absolute left-1/2 top-1/2 z-20 w-[min(88%,30rem)] -translate-x-1/2 -translate-y-1/2 rounded-[30px] border border-[#C16A3A]/26 bg-[linear-gradient(180deg,rgba(242,239,230,0.09),rgba(242,239,230,0.035)),rgba(8,8,7,0.78)] p-5 text-center shadow-[0_28px_100px_rgba(0,0,0,0.42)] backdrop-blur-2xl sm:p-7"
        >
          <p className="micro-label text-[#C16A3A]">Business operating system</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-[#F2EFE6] sm:text-4xl">
            One connected digital foundation.
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-[#B8B1A4]">
            Website, leads, CRM, automations, dashboards, and reporting designed as a single operating layer.
          </p>
          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            {layers.map(([number, title, detail]) => (
              <div key={title} className="rounded-2xl border border-[rgba(242,239,230,0.10)] bg-[rgba(242,239,230,0.045)] p-3 text-left">
                <p className="font-mono text-[0.65rem] text-[#C16A3A]">{number}</p>
                <p className="mt-1 text-sm font-semibold text-[#F2EFE6]">{title}</p>
                <p className="mt-1 text-xs leading-5 text-[#8E9188]">{detail}</p>
              </div>
            ))}
          </div>
        </div>

        {fragments.map((fragment) => (
          <div
            key={fragment.id}
            data-flow-source={fragment.id}
            className={cn(
              "absolute z-10 hidden rounded-2xl border px-4 py-3 text-sm font-semibold backdrop-blur-xl transition duration-500 lg:block",
              fragment.position,
              toneClass[fragment.tone],
            )}
          >
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#C16A3A] shadow-[0_0_18px_rgba(193,106,58,0.55)]" />
            {fragment.label}
          </div>
        ))}

        <div data-flow-output className="absolute bottom-5 left-5 right-5 z-20 grid gap-3 sm:grid-cols-3 lg:bottom-7 lg:left-7 lg:right-7">
          {[
            ["Lead response", "Automatic next steps"],
            ["Team clarity", "One operational view"],
            ["Manual work", "Removed where possible"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-[rgba(242,239,230,0.09)] bg-[#050505]/46 p-4 backdrop-blur-xl">
              <p className="micro-label text-[#6F766E]">{label}</p>
              <p className="mt-2 text-base font-semibold text-[#F2EFE6]">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
