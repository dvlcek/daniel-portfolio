const flow = ["Website", "Lead Capture", "CRM Logic", "Automation", "Dashboard", "Reporting"];

export function SystemFlow({ compact = false }: { compact?: boolean }) {
  return (
    <div className="glass-panel relative overflow-hidden rounded-[28px] p-5 md:p-7">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(143,163,177,0.12),transparent_42%)]" />
      <div className="relative z-10">
        <div className="flex items-center justify-between border-b border-[rgba(242,239,230,0.08)] pb-4">
          <p className="micro-label">Operating layer</p>
          <span className="rounded-full bg-[#C16A3A]/12 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.08em] text-[#E5E0D4]">
            Live System
          </span>
        </div>
        <div className={compact ? "mt-6 grid gap-3" : "mt-8 grid gap-4 md:grid-cols-6"}>
          {flow.map((item, index) => (
            <div key={item} className="relative">
              <div className="rounded-2xl border border-[rgba(242,239,230,0.12)] bg-[rgba(242,239,230,0.055)] p-4 text-center">
                <p className="font-mono text-[0.68rem] text-[#C16A3A]">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-2 text-sm font-semibold text-[#F2EFE6]">{item}</p>
              </div>
              {index < flow.length - 1 ? (
                <span className="absolute -right-2 top-1/2 hidden h-px w-4 bg-gradient-to-r from-[#C16A3A] to-transparent md:block" />
              ) : null}
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            ["Response", "Faster follow-up"],
            ["Manual tasks", "Reduced handoffs"],
            ["Visibility", "One clear overview"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-[rgba(242,239,230,0.08)] bg-[#050505]/40 p-4">
              <p className="micro-label text-[#6F766E]">{label}</p>
              <p className="mt-2 text-lg font-semibold text-[#F2EFE6]">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
