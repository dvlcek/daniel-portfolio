"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { TransitionAnchor } from "@/components/transition/TransitionAnchor";

const navItems = [
  { href: "/work", label: "Work" },
  { href: "#services", label: "Services" },
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
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#080616]/82 backdrop-blur-2xl">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(47,47,228,0.14),transparent_38%)]" />

      <div className="relative flex h-16 w-full items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <TransitionAnchor
          href="/"
          className="group flex items-center gap-3"
          onClick={closeMenu}
        >
          <div className="relative h-9 w-9 overflow-hidden rounded-2xl border border-white/[0.10] bg-white/[0.04] shadow-lg shadow-black/30 ring-1 ring-white/[0.06] transition duration-300 group-hover:border-[#2F2FE4]/40 group-hover:bg-[#2F2FE4]/10 group-hover:shadow-[#2F2FE4]/10">
            <Image
              src="/logo.svg"
              alt="Daniel Vlcek Logo"
              fill
              className="object-contain p-1.5"
              priority
            />
          </div>

          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-tight text-white transition duration-300 group-hover:text-[#C8CBFF]">
              Daniel Vlcek
            </p>
            <p className="text-xs text-white/45 transition duration-300 group-hover:text-white/60">
              Systems & Automation
            </p>
          </div>
        </TransitionAnchor>

        <nav
          className="hidden items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.035] p-1 shadow-lg shadow-black/20 backdrop-blur-xl md:flex"
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
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F2FE4]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080616]",
                  active
                    ? "bg-[#2F2FE4]/16 text-white ring-1 ring-[#2F2FE4]/25"
                    : "text-white/58 hover:bg-white/[0.06] hover:text-white",
                ].join(" ")}
              >
                {item.label}
              </TransitionAnchor>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button href="/contact" variant="primary">
            Book a Call
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Button href="/contact" variant="secondary" onClick={closeMenu}>
            Book Call
          </Button>

          <button
            type="button"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.10] bg-white/[0.05] text-white shadow-lg shadow-black/25 transition duration-300 hover:border-[#2F2FE4]/35 hover:bg-[#2F2FE4]/10 hover:text-[#C8CBFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F2FE4]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080616]"
          >
            {isMenuOpen ? (
              <X size={18} aria-hidden="true" />
            ) : (
              <Menu size={18} aria-hidden="true" />
            )}
          </button>
        </div>

        {isMenuOpen ? (
          <nav
            id="mobile-navigation"
            aria-label="Mobile"
            className="absolute inset-x-5 top-[calc(100%+0.75rem)] overflow-hidden rounded-3xl border border-white/[0.10] bg-[#080616]/96 p-3 shadow-[0_24px_90px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:inset-x-8 md:hidden"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(47,47,228,0.16),transparent_42%)]" />

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
                        ? "bg-[#2F2FE4]/16 text-white ring-1 ring-[#2F2FE4]/25"
                        : "text-white/65 hover:bg-white/[0.06] hover:text-white",
                    ].join(" ")}
                  >
                    <span>{item.label}</span>
                    <span className="text-white/25">↗</span>
                  </TransitionAnchor>
                );
              })}

              <Button
                href="/contact"
                variant="primary"
                className="mt-3 w-full justify-center"
                onClick={closeMenu}
              >
                Book a Call
              </Button>
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}