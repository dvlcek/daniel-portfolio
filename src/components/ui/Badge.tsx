import { cn } from "@/app/lib/cn";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-[rgba(242,239,230,0.12)] bg-[rgba(242,239,230,0.06)] px-3.5 py-2 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-[#E5E0D4]",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#C16A3A] shadow-[0_0_24px_rgba(193,106,58,0.45)]" />
      {children}
    </span>
  );
}
