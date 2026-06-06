import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function CtaPanel({
  eyebrow = "Next step",
  title,
  description,
  primaryLabel = "Book a Strategy Call",
  primaryHref = "/contact",
  secondaryLabel = "View Work",
  secondaryHref = "/work",
}: {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(242,239,230,0.12)] bg-[linear-gradient(180deg,#11120F_0%,#050505_100%)] p-8 shadow-[0_32px_90px_rgba(0,0,0,0.32)] md:p-12 lg:p-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[12%] top-[10%] h-80 w-80 rounded-full bg-[#C16A3A]/14 blur-3xl" />
        <div className="absolute right-[8%] top-[20%] h-96 w-96 rounded-full bg-[#8FA3B1]/12 blur-3xl" />
      </div>
      <div className="relative z-10 max-w-4xl">
        <Badge>{eyebrow}</Badge>
        <h2 className="section-heading mt-6">{title}</h2>
        <p className="body-large mt-6 max-w-3xl">{description}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={primaryHref}>{primaryLabel}<ArrowUpRight size={16} /></Button>
          <Button href={secondaryHref} variant="secondary">{secondaryLabel}</Button>
        </div>
      </div>
    </div>
  );
}
