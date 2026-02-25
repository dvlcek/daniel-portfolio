import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { primaryCta } from "@/lib/siteContent";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-white/55">
          © {new Date().getFullYear()} Daniel Vlcek. Automation systems and modern web infrastructure.
        </p>
        <div className="flex gap-4 text-sm text-white/60">
          <Link className="hover:text-white" href="/work">Work</Link>
          <Link className="hover:text-white" href="/services">Services</Link>
          <Link className="hover:text-white" href="/insights">Insights</Link>
          <Link className="hover:text-white" href={primaryCta.href}>{primaryCta.label}</Link>
        </div>
      </Container>
    </footer>
  );
}
