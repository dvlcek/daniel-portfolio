import { cn } from "@/app/lib/cn";

export function SectionTitle({
  eyebrow,
  title,
  desc,
  className,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-10", className)}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-clay">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-4 max-w-4xl text-balance text-[clamp(2.35rem,5vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-cream">
        {title}
      </h2>
      {desc ? (
        <p className="mt-6 max-w-2xl text-base leading-8 text-stone md:text-lg">
          {desc}
        </p>
      ) : null}
    </div>
  );
}
