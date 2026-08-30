"use client";

import { useEffect, useState } from "react";
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
  const [isHomeSurface, setIsHomeSurface] = useState(false);
  const isHome = pathname === "/";
  const lightHome = isHome && isHomeSurface;

  useEffect(() => {
    if (!isHome) return;

    let frame = 0;

    const update = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const hero = document.querySelector<HTMLElement>("[data-hero-scene]");
        if (!hero) return;
        setIsHomeSurface(hero.getBoundingClientRect().bottom <= 96);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [isHome]);

  const closeMenu = () => setIsMenuOpen(false);
  const isActive = (href: string) => !href.includes("#") && pathname === href;

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-[100] pointer-events-none",
        !isHome ? "border-b border-white/[0.055] bg-[#06101b]/82 backdrop-blur-2xl supports-[backdrop-filter]:bg-[#06101b]/72" : "",
      ].join(" ")}
    >
      <div
        className={[
          "pointer-events-auto mx-auto flex w-full items-center justify-between transition-[height,max-width,margin,padding,background-color,border-color,box-shadow,border-radius] duration-500 ease-out",
          isHome
            ? lightHome
              ? "mt-3 h-[54px] max-w-[900px] rounded-full border border-[#d8e0e8]/80 bg-white/78 px-4 shadow-[0_12px_34px_rgba(27,43,62,0.09)] backdrop-blur-2xl sm:px-5 md:h-14"
              : "h-16 max-w-[1600px] px-5 sm:px-8 md:h-[72px] md:px-10 lg:px-14 xl:px-20"
            : "h-16 max-w-[1600px] px-5 sm:px-8 md:h-[72px] md:px-10 lg:px-14 xl:px-20",
        ].join(" ")}
      >
        <TransitionAnchor href="/" onClick={closeMenu} className="group inline-flex items-center gap-3">
          <span
            className={[
              "text-[13px] font-semibold uppercase tracking-[0.22em] transition-colors sm:text-[14px]",
              lightHome ? "text-[#101722]" : "text-white/92 group-hover:text-white",
            ].join(" ")}
          >
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
                lightHome
                  ? isActive(item.href)
                    ? "text-[#101722]"
                    : "text-[#566274] hover:text-[#101722]"
                  : isActive(item.href)
                    ? "text-white"
                    : "text-white/68 hover:text-white",
              ].join(" ")}
            >
              {item.label}
              {isActive(item.href) ? (
                <span className={`absolute inset-x-0 -bottom-0.5 h-px ${lightHome ? "bg-[#101722]/40" : "bg-white/55"}`} />
              ) : null}
            </TransitionAnchor>
          ))}
        </nav>

        <div className="hidden lg:block">
          <TransitionAnchor
            href="/contact"
            className={[
              "group inline-flex h-10 items-center gap-2 rounded-full px-5 text-[12px] font-medium transition-all duration-300",
              lightHome
                ? "bg-[#07111d] text-white shadow-[0_8px_22px_rgba(7,17,29,0.14)] hover:-translate-y-0.5 hover:bg-[#0b1928]"
                : "border border-white/18 bg-white/[0.025] text-white/88 backdrop-blur-xl hover:border-white/30 hover:bg-white/[0.065] hover:text-white",
            ].join(" ")}
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
          className={[
            "flex h-10 w-10 items-center justify-center rounded-xl transition lg:hidden",
            lightHome
              ? "border border-[#d6dee7] bg-white/76 text-[#101722] shadow-[0_6px_18px_rgba(25,39,58,0.06)] backdrop-blur-xl hover:bg-white"
              : "border border-white/14 bg-white/[0.035] text-white backdrop-blur-xl hover:bg-white/[0.07]",
          ].join(" ")}
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isMenuOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className={[
            "pointer-events-auto absolute inset-x-4 top-[calc(100%+0.6rem)] overflow-hidden rounded-[22px] p-2 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-2xl sm:inset-x-8 lg:hidden",
            lightHome
              ? "border border-[#dce3ea] bg-white/90"
              : "border border-white/12 bg-[#08131f]/90",
          ].join(" ")}
        >
          <div className="space-y-1">
            {navItems.map((item) => (
              <TransitionAnchor
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={[
                  "flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition",
                  lightHome
                    ? "text-[#586577] hover:bg-[#f1f4f7] hover:text-[#101722]"
                    : "text-white/72 hover:bg-white/[0.055] hover:text-white",
                ].join(" ")}
              >
                {item.label}
                <ArrowRight size={14} className={lightHome ? "text-[#8b96a5]" : "text-white/34"} />
              </TransitionAnchor>
            ))}
          </div>

          <TransitionAnchor
            href="/contact"
            onClick={closeMenu}
            className={[
              "mt-2 flex h-12 items-center justify-between rounded-xl px-4 text-sm font-semibold",
              lightHome ? "bg-[#07111d] text-white" : "bg-white text-[#07111d]",
            ].join(" ")}
          >
            Let&apos;s Talk
            <ArrowRight size={15} />
          </TransitionAnchor>
        </nav>
      ) : null}
    </header>
  );
}
