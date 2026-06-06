import { cn } from "@/app/lib/cn";

export function SystemCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "glass-panel relative overflow-hidden rounded-[28px] p-6 transition duration-300 hover:-translate-y-1 hover:border-[rgba(242,239,230,0.22)] md:p-8",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(242,239,230,0.28)] to-transparent" />
      {children}
    </div>
  );
}
