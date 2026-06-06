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
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1238F2]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[#10131A] md:text-5xl md:leading-[1.05]">
        {title}
      </h2>
      {desc ? (
        <p className="mt-5 max-w-2xl text-base leading-8 text-[#566176]">
          {desc}
        </p>
      ) : null}
    </div>
  );
}
