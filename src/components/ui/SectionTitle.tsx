import { cn } from "@/app/lib/cn";

export function SectionTitle({
  eyebrow,
  title,
  desc,
  className,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("mb-10", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className={cn("micro-label inline-flex items-center gap-2", align === "center" && "justify-center")}>
          <span className="h-1.5 w-1.5 rounded-full bg-[#C16A3A] shadow-[0_0_24px_rgba(193,106,58,0.45)]" />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="section-heading mt-4 max-w-5xl">{title}</h2>
      {desc ? (
        <p className={cn("body-large mt-6 max-w-3xl", align === "center" && "mx-auto")}>
          {desc}
        </p>
      ) : null}
    </div>
  );
}
