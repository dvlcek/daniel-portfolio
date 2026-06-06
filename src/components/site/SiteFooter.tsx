import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { primaryCta } from "@/lib/siteContent";

const footerLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/#process" },
  { label: "Insights", href: "/insights" },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-black/[0.08] bg-[#0D0E0C]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#F7F4EC]/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_0%,rgba(184,100,63,0.14),transparent_32%),radial-gradient(circle_at_76%_18%,rgba(167,183,190,0.12),transparent_34%)]" />
      </div>

      <Container>
        <div className="relative z-10 py-10 md:py-12">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <p className="select-none whitespace-nowrap text-[clamp(3.5rem,9vw,8rem)] font-semibold uppercase leading-none tracking-[-0.08em] text-white/[0.028]">
              Daniel Vlcek
            </p>
          </div>

          <div className="relative z-10 grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
            <div>
              <Link
                href="/"
                className="inline-flex text-sm font-semibold tracking-tight text-[#F7F4EC] transition-colors duration-300 hover:text-white"
              >
                Daniel Vlcek
              </Link>

              <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#F7F4EC]/58">
                Premium websites, automation systems, CRM workflows, dashboards,
                and scalable digital infrastructure for companies that want
                clearer operations.
              </p>
            </div>

            <div className="flex flex-col gap-5 md:items-end">
              <nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-[#F7F4EC]/58 md:justify-end">
                {footerLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="transition-colors duration-300 hover:text-[#F7F4EC]"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <Link
                href={primaryCta.href}
                className="text-sm font-medium text-[#C9A66B] transition-colors duration-300 hover:text-[#F7F4EC]"
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

              <p>Digital systems for faster, cleaner operations.</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
