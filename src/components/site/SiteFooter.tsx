import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { primaryCta } from "@/lib/siteContent";

const footerLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Insights", href: "/insights" },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-brand-blue/20 bg-site-bg-deep">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-blue-soft/55 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(47,47,228,0.08),transparent_34%)]" />
      </div>

      <Container>
        <div className="relative z-10 py-10 md:py-12">
          {/* Background brand mark */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <p className="select-none whitespace-nowrap text-[clamp(3.5rem,9vw,8rem)] font-semibold uppercase leading-none tracking-[-0.08em] text-white/[0.028]">
              Daniel Vlcek
            </p>
          </div>

          <div className="relative z-10 grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
            <div>
              <Link
                href="/"
                className="inline-flex text-sm font-semibold tracking-tight text-white transition-colors duration-300 hover:text-brand-blue-light"
              >
                Daniel Vlcek
              </Link>

              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/48">
                Software Developer & Automation Architect building scalable
                websites, automation systems, and digital infrastructure for
                cleaner business operations.
              </p>
            </div>

            <div className="flex flex-col gap-5 md:items-end">
              <nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-white/48 md:justify-end">
                {footerLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <Link
                href={primaryCta.href}
                className="text-sm font-medium text-brand-blue-light transition-colors duration-300 hover:text-white"
              >
                {primaryCta.label}
              </Link>
            </div>
          </div>

          <div className="relative z-10 mt-10 border-t border-white/[0.07] pt-5">
            <div className="flex flex-col gap-3 text-sm text-white/34 md:flex-row md:items-center md:justify-between">
              <p>
                © {new Date().getFullYear()} Daniel Vlcek. All rights reserved.
              </p>

              <p>Digital systems for faster, cleaner business operations.</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}