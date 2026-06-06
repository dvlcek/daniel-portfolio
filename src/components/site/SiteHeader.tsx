"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { TransitionAnchor } from "@/components/transition/TransitionAnchor";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const isActiveLink = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="fixed left-3 right-3 top-3 z-50 md:left-4 md:right-4 md:top-4">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between rounded-[24px] border border-[rgba(242,239,230,0.10)] bg-[rgba(8,8,7,0.72)] px-3 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl md:h-[4.25rem] md:px-5">
        <TransitionAnchor href="/" className="group flex items-center gap-3" onClick={closeMenu}>
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-[rgba(242,239,230,0.12)] bg-[rgba(242,239,230,0.06)] text-sm font-semibold text-[#F2EFE6] shadow-[inset_0_1px_0_rgba(242,239,230,0.12)]">
            DV
            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#C16A3A]" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-tight text-[#F2EFE6] transition group-hover:text-white">Daniel Vlcek</span>
            <span className="block text-[0.7rem] uppercase tracking-[0.12em] text-[#8E9188]">Systems Architect</span>
          </span>
        </TransitionAnchor>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => {
            const active = isActiveLink(item.href);
            return (
              <TransitionAnchor
                key={item.href}
                href={item.href}
                className={[
                  "rounded-full px-4 py-2 text-sm font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C16A3A]/45",
                  active ? "bg-[rgba(242,239,230,0.08)] text-[#F2EFE6]" : "text-[#B8B1A4] hover:bg-[rgba(242,239,230,0.06)] hover:text-[#F2EFE6]",
                ].join(" ")}
              >
                {item.label}
              </TransitionAnchor>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" className="min-h-10 px-5 py-2.5">Book a Call</Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Button href="/contact" variant="secondary" className="min-h-10 px-4 py-2" onClick={closeMenu}>Call</Button>
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[rgba(242,239,230,0.12)] bg-[rgba(242,239,230,0.06)] text-[#F2EFE6]"
          >
            {isMenuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <nav id="mobile-navigation" aria-label="Mobile" className="mx-auto mt-3 max-w-[1440px] overflow-hidden rounded-[24px] border border-[rgba(242,239,230,0.12)] bg-[rgba(8,8,7,0.92)] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.38)] backdrop-blur-2xl md:hidden">
          {navItems.map((item) => {
            const active = isActiveLink(item.href);
            return (
              <TransitionAnchor
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={[
                  "flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition duration-300",
                  active ? "bg-[rgba(242,239,230,0.08)] text-[#F2EFE6]" : "text-[#B8B1A4] hover:bg-[rgba(242,239,230,0.06)] hover:text-[#F2EFE6]",
                ].join(" ")}
              >
                <span>{item.label}</span>
                <span className="text-[#C16A3A]">+</span>
              </TransitionAnchor>
            );
          })}
        </nav>
      ) : null}
    </header>
  );
}
