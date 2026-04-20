"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TransitionAnchor } from "@/components/transition/TransitionAnchor";

const navItems = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0d14]/80 backdrop-blur">
      <Container className="relative flex h-16 items-center justify-between">
        <TransitionAnchor
          href="/"
          className="flex items-center gap-3"
          onClick={closeMenu}
        >
          <div className="relative h-8 w-8 overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/15">
            <Image
              src="/logo.svg"
              alt="Daniel Vlcek Logo"
              fill
              className="object-contain p-1"
              priority
            />
          </div>

          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-tight text-white">
              Daniel Vlcek
            </p>
            <p className="text-xs text-white/55">Systems & Automation</p>
          </div>
        </TransitionAnchor>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Button key={item.href} href={item.href} variant="ghost">
              {item.label}
            </Button>
          ))}
          <Button href="/contact" variant="primary">Book a Call</Button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Button href="/contact" variant="secondary" onClick={closeMenu}>
            Book Call
          </Button>
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/5 text-white transition-[background-color,border-color,color] hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            {isMenuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>

        {isMenuOpen ? (
          <nav
            id="mobile-navigation"
            aria-label="Mobile"
            className="absolute inset-x-6 top-[calc(100%-0.25rem)] rounded-3xl border border-white/10 bg-[#0a0d14]/96 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  href={item.href}
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={closeMenu}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                href="/contact"
                variant="primary"
                className="mt-2 w-full"
                onClick={closeMenu}
              >
                Book a Call
              </Button>
            </div>
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
