"use client";

import { useState } from "react";
import Image from "next/image";
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

  const isActiveLink = (href: string) => {
    if (href.startsWith("#")) return false;
    return pathname === href;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="relative mx-auto flex h-17 w-full max-w-[1440px] items-center justify-between rounded-full border border-black/[0.08] bg-site-bg/78 px-4 shadow-[0_18px_60px_rgba(21,21,18,0.08)] backdrop-blur-2xl sm:px-5">
        <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_18%_0%,rgba(167,183,190,0.20),transparent_42%),radial-gradient(circle_at_88%_20%,rgba(184,100,63,0.08),transparent_34%)]" />
        <TransitionAnchor
          href="/"
          className="group relative z-10 flex items-center gap-3"
          onClick={closeMenu}
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-[0_10px_28px_rgba(21,21,18,0.08)] ring-1 ring-black/[0.04] transition duration-300 group-hover:border-clay/35">
            <Image
              src="/logo.svg"
              alt="Daniel Vlcek logo"
              fill
              className="object-contain p-1.5"
              priority
            />
          </div>

          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-tight text-cream transition duration-300 group-hover:text-clay">
              Daniel Vlcek
            </p>
            <p className="text-xs text-stone transition duration-300 group-hover:text-muted-cream">
              Business Systems Architect
            </p>
          </div>
        </TransitionAnchor>

        <nav
          className="relative z-10 hidden items-center gap-1 rounded-full border border-black/[0.07] bg-white/62 p-1 shadow-[0_10px_30px_rgba(21,21,18,0.06)] backdrop-blur-xl md:flex"
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
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/45 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg",
                  active
                    ? "bg-cream text-site-bg shadow-[0_8px_20px_rgba(21,21,18,0.12)]"
                    : "text-stone hover:bg-white hover:text-cream",
                ].join(" ")}
              >
                {item.label}
              </TransitionAnchor>
            );
          })}
        </nav>

        <div className="relative z-10 hidden items-center gap-3 md:flex">
          <Button href="/contact" variant="primary">
            Build My OS
          </Button>
        </div>

        <div className="relative z-10 flex items-center gap-2 md:hidden">
          <Button href="/contact" variant="secondary" className="px-5" onClick={closeMenu}>
            Talk
          </Button>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-black/[0.08] bg-white text-cream shadow-[0_10px_28px_rgba(21,21,18,0.08)] transition duration-300 hover:border-clay/40 hover:text-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/45 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg"
          >
            {isMenuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>

        {isMenuOpen ? (
          <nav
            id="mobile-navigation"
            aria-label="Mobile"
            className="absolute inset-x-0 top-[calc(100%+0.75rem)] overflow-hidden rounded-3xl border border-black/[0.08] bg-site-bg/96 p-3 shadow-[0_24px_80px_rgba(21,21,18,0.16)] backdrop-blur-2xl md:hidden"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(184,100,63,0.10),transparent_42%)]" />
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
                        ? "bg-cream text-site-bg"
                        : "text-stone hover:bg-white/70 hover:text-cream",
                    ].join(" ")}
                  >
                    <span>{item.label}</span>
                    <span className="text-ash">+</span>
                  </TransitionAnchor>
                );
              })}

              <Button
                href="/contact"
                variant="primary"
                className="mt-3 w-full justify-center"
                onClick={closeMenu}
              >
                Build My Business OS
              </Button>
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
