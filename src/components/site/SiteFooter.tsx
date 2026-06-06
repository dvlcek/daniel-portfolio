import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const systems = ["Premium Websites", "Business Platforms", "Automation Systems", "CRM & Lead Systems", "Internal Dashboards"];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-[rgba(242,239,230,0.10)] bg-[#050505]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C16A3A]/35 to-transparent" />
        <div className="absolute left-[10%] top-0 h-80 w-80 rounded-full bg-[#8FA3B1]/10 blur-3xl" />
        <div className="absolute right-[8%] top-16 h-96 w-96 rounded-full bg-[#C16A3A]/10 blur-3xl" />
      </div>
      <Container className="relative z-10 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <Link href="/" className="text-lg font-semibold tracking-tight text-[#F2EFE6]">Daniel Vlcek</Link>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-[#8E9188]">Software Developer & Automation Architect</p>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#B8B1A4]">
              Premium websites, platforms, automations, CRM workflows, dashboards, and scalable digital infrastructure for companies that want to operate faster and smarter.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Book a Strategy Call</Button>
              <Button href="/work" variant="secondary">View Systems</Button>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="micro-label">Navigation</p>
              <nav className="mt-4 grid gap-3">
                {footerLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm text-[#B8B1A4] transition hover:text-[#F2EFE6]">{link.label}</Link>
                ))}
              </nav>
            </div>
            <div>
              <p className="micro-label">Systems</p>
              <div className="mt-4 grid gap-3">
                {systems.map((item) => <p key={item} className="text-sm text-[#8E9188]">{item}</p>)}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-[rgba(242,239,230,0.08)] pt-6 text-sm text-[#6F766E] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Daniel Vlcek. All rights reserved.</p>
          <p>Digital systems for clearer operations, stronger conversion, and less manual work.</p>
        </div>
      </Container>
    </footer>
  );
}
