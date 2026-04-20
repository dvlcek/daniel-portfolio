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
        <p className="text-xs uppercase tracking-[0.2em] text-white/50">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {desc ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65">
          {desc}
        </p>
      ) : null}
    </div>
  );
}
