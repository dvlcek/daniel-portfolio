import Link from "next/link";

const navigation = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/#process" },
  { label: "Insights", href: "/insights" },
];

const services = [
  "Custom Software",
  "Automation & AI",
  "Web & Client Platforms",
  "Integrations",
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#06101b] text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.65fr_0.75fr_0.65fr]">
          <div>
            <Link
              href="/"
              className="text-[13px] font-semibold uppercase tracking-[0.22em] text-white/92 transition hover:text-white"
            >
              Daniel Vlcek
            </Link>
            <p className="mt-4 max-w-sm text-[13px] leading-6 text-white/42">
              Custom software, automation and applied AI built around how your business actually works.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/30">Navigation</p>
            <div className="mt-4 space-y-2.5">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="block text-[13px] text-white/52 transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/30">Services</p>
            <div className="mt-4 space-y-2.5">
              {services.map((item) => (
                <p key={item} className="text-[13px] text-white/52">{item}</p>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/30">Contact</p>
            <div className="mt-4 space-y-2.5">
              <Link href="/contact" className="block text-[13px] text-white/52 transition hover:text-white">
                Start a conversation
              </Link>
              <Link href="/work" className="block text-[13px] text-white/52 transition hover:text-white">
                View case studies
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.07] pt-5 text-[11px] text-white/28 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Daniel Vlcek. All rights reserved.</p>
          <p>Software Developer & Automation Architect</p>
        </div>
      </div>
    </footer>
  );
}
