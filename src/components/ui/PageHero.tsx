import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/app/lib/cn";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden pt-36 pb-14 md:pt-44 md:pb-20", className)}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[12%] top-16 h-80 w-80 rounded-full bg-[#8FA3B1]/10 blur-3xl" />
        <div className="absolute right-[8%] top-28 h-80 w-80 rounded-full bg-[#C16A3A]/10 blur-3xl" />
      </div>
      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <Badge>{eyebrow}</Badge>
            <h1 className="page-heading mt-7 max-w-5xl">{title}</h1>
          </div>
          <p className="body-large max-w-2xl lg:justify-self-end">{description}</p>
        </div>
        {children ? <div className="mt-10">{children}</div> : null}
      </Container>
    </section>
  );
}
