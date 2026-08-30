"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { TransitionAnchor } from "@/components/transition/TransitionAnchor";

const navItems = [
  { href: "/work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/#process", label: "Process" },
  { href: "/insights", label: "Insights" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHome = pathname === "/";

  const closeMenu = () => setIsMenuOpen(false);
  const isActive = (href: string) => !href.includes("#") && pathname === href;

  return (
    <header
      className={[
        "inset-x-0 top-0 z-[100] transition-colors duration-300",
        isHome
          ? "absolute bg-transparent"
          : "fixed border-b border-white/[0.055] bg-[#06101b]/82 backdrop-blur-2xl supports-[backdrop-filter]:bg-[#06101b]/72",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1600px] items-center justify-between px-5 sm:px-8 md:h-[72px] md:px-10 lg:px-14 xl:px-20">
        <TransitionAnchor
          href="/"
          onClick={closeMenu}
          className="group inline-flex items-center gap-3 text-white"
        >
          <span className="text-[13px] font-semibold uppercase tracking-[0.22em] text-white/92 transition-colors group-hover:text-white sm:text-[14px]">
            Daniel Vlcek
          </span>
        </TransitionAnchor>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <TransitionAnchor
              key={item.href}
              href={item.href}
              className={[
                "relative py-2 text-[12px] font-medium transition-colors duration-200",
                isActive(item.href) ? "text-white" : "text-white/68 hover:text-white",
              ].join(" ")}
            >
              {item.label}
              {isActive(item.href) ? (
                <span className="absolute inset-x-0 -bottom-0.5 h-px bg-white/55" />
              ) : null}
            </TransitionAnchor>
          ))}
        </nav>

        <div className="hidden lg:block">
          <TransitionAnchor
            href="/contact"
            className="group inline-flex h-10 items-center gap-2 rounded-full border border-white/18 bg-white/[0.025] px-5 text-[12px] font-medium text-white/88 backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/[0.065] hover:text-white"
          >
            Let&apos;s Talk
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </TransitionAnchor>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/14 bg-white/[0.035] text-white backdrop-blur-xl transition hover:bg-white/[0.07] lg:hidden"
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isMenuOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute inset-x-4 top-[calc(100%+0.6rem)] overflow-hidden rounded-[22px] border border-white/12 bg-[#08131f]/88 p-2 shadow-[0_24px_70px_rgba(0,0,0,0.34)] backdrop-blur-2xl sm:inset-x-8 lg:hidden"
        >
          <div className="space-y-1">
            {navItems.map((item) => (
              <TransitionAnchor
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-white/72 transition hover:bg-white/[0.055] hover:text-white"
              >
                {item.label}
                <ArrowRight size={14} className="text-white/34" />
              </TransitionAnchor>
            ))}
          </div>

          <TransitionAnchor
            href="/contact"
            onClick={closeMenu}
            className="mt-2 flex h-12 items-center justify-between rounded-xl bg-white px-4 text-sm font-semibold text-[#07111d]"
          >
            Let&apos;s Talk
            <ArrowRight size={15} />
          </TransitionAnchor>
        </nav>
      ) : null}
    </header>
  );
}
