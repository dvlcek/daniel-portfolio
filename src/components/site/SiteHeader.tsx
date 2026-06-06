"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { TransitionAnchor } from "@/components/transition/TransitionAnchor";

const navItems = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const isActiveLink = (href: string) => {
    if (href.startsWith("#")) return false;
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#E4E7EF] bg-[#FAFAF8]/86 backdrop-blur-2xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(18,56,242,0.08),transparent_42%)]" />

      <div className="relative mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <TransitionAnchor
          href="/"
          className="group flex items-center gap-3"
          onClick={closeMenu}
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-2xl border border-[#DDE2EE] bg-white shadow-[0_10px_30px_rgba(16,19,26,0.08)] ring-1 ring-white transition duration-300 group-hover:border-[#1238F2]/30 group-hover:shadow-[0_14px_34px_rgba(18,56,242,0.12)]">
            <Image
              src="/logo.svg"
              alt="Daniel Vlcek logo"
              fill
              className="object-contain p-1.5"
              priority
            />
          </div>

          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-tight text-[#10131A] transition duration-300 group-hover:text-[#1238F2]">
              Daniel Vlcek
            </p>
            <p className="text-xs text-[#647086] transition duration-300 group-hover:text-[#42506A]">
              Business systems partner
            </p>
          </div>
        </TransitionAnchor>

        <nav
          className="hidden items-center gap-1 rounded-full border border-[#DDE2EE] bg-white/76 p-1 shadow-[0_12px_36px_rgba(16,19,26,0.08)] backdrop-blur-xl md:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const active = isActiveLink(item.href);

            return (
              <TransitionAnchor
                key={item.href}
                href={item.href}
                className={[
                  "rounded-full px-4 py-2 text-sm transition duration-300",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1238F2]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                  active
                    ? "bg-[#1238F2] text-white shadow-[0_8px_20px_rgba(18,56,242,0.18)]"
                    : "text-[#647086] hover:bg-[#F2F4F8] hover:text-[#10131A]",
                ].join(" ")}
              >
                {item.label}
              </TransitionAnchor>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button href="/contact" variant="primary">
            Let&apos;s talk
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Button href="/contact" variant="secondary" className="px-5" onClick={closeMenu}>
            Talk
          </Button>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#DDE2EE] bg-white text-[#10131A] shadow-[0_10px_28px_rgba(16,19,26,0.08)] transition duration-300 hover:border-[#1238F2]/30 hover:text-[#1238F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1238F2]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            {isMenuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>

        {isMenuOpen ? (
          <nav
            id="mobile-navigation"
            aria-label="Mobile"
            className="absolute inset-x-5 top-[calc(100%+0.75rem)] overflow-hidden rounded-3xl border border-[#DDE2EE] bg-white/96 p-3 shadow-[0_24px_80px_rgba(16,19,26,0.16)] backdrop-blur-2xl sm:inset-x-8 md:hidden"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(18,56,242,0.08),transparent_42%)]" />
            <div className="relative flex flex-col gap-1">
              {navItems.map((item) => {
                const active = isActiveLink(item.href);

                return (
                  <TransitionAnchor
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={[
                      "flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition duration-300",
                      active
                        ? "bg-[#1238F2] text-white"
                        : "text-[#647086] hover:bg-[#F2F4F8] hover:text-[#10131A]",
                    ].join(" ")}
                  >
                    <span>{item.label}</span>
                    <span className="text-[#A3ACBA]">+</span>
                  </TransitionAnchor>
                );
              })}

              <Button
                href="/contact"
                variant="primary"
                className="mt-3 w-full justify-center"
                onClick={closeMenu}
              >
                Let&apos;s look at your setup
              </Button>
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
