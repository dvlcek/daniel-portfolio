"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

type Phase = "idle" | "cover" | "logo-in" | "logo-hold" | "logo-out" | "uncover";

export function PageTransition() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("idle");
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const runIntro = useCallback(() => {
    setPhase("cover");
    setTimeout(() => setPhase("logo-in"), 50);
    setTimeout(() => setPhase("logo-hold"), 650);
    setTimeout(() => setPhase("logo-out"), 1400);
    setTimeout(() => setPhase("uncover"), 1800);
    setTimeout(() => setPhase("idle"), 2400);
  }, []);

  // First load
  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
      runIntro();
    }
  }, []);

  // Route change
  useEffect(() => {
    if (!isFirstLoad) {
      runIntro();
    }
  }, [pathname]);

  const isVisible = phase !== "idle";

  return (
    <>
      {/* ── Overlay panel ── */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-[999] pointer-events-none flex items-center justify-center overflow-hidden"
        style={{
          transform:
            phase === "cover" || phase === "logo-in" || phase === "logo-hold"
              ? "translateY(0%)"
              : phase === "uncover"
              ? "translateY(-100%)"
              : phase === "idle"
              ? "translateY(-100%)"
              : "translateY(0%)",
          transition:
            phase === "cover"
              ? "transform 0.55s cubic-bezier(0.76, 0, 0.24, 1)"
              : phase === "uncover"
              ? "transform 0.55s cubic-bezier(0.76, 0, 0.24, 1)"
              : "none",
          // Start off-screen bottom before covering
          ...(phase === "idle" ? {} : {}),
        }}
      >
        {/* Dark background with blue gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, #0a1628 0%, #050c18 40%, #000000 100%)",
          }}
        />

        {/* Blue accent glow top */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at center top, #1d4ed8 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Blue accent glow bottom */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at center bottom, #1e40af 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* ── Logo ── */}
        <div
          className="relative z-10 flex flex-col items-center gap-6"
          style={{
            opacity:
              phase === "logo-in" || phase === "logo-hold"
                ? 1
                : phase === "logo-out"
                ? 0
                : 0,
            transform:
              phase === "logo-in" || phase === "logo-hold"
                ? "scale(1) translateY(0px)"
                : phase === "logo-out"
                ? "scale(1.08) translateY(-8px)"
                : "scale(0.85) translateY(12px)",
            transition:
              phase === "logo-in"
                ? "opacity 0.5s ease-out, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)"
                : phase === "logo-out"
                ? "opacity 0.35s ease-in, transform 0.35s ease-in"
                : "none",
          }}
        >
          {/* Glow ring behind logo */}
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full opacity-60"
              style={{
                background:
                  "radial-gradient(circle, #1d4ed840 0%, transparent 70%)",
                filter: "blur(20px)",
                transform: "scale(1.8)",
              }}
            />
            <Image
              src="/logo.svg"
              alt="Logo"
              width={100}
              height={100}
              priority
              className="relative z-10 drop-shadow-[0_0_30px_rgba(29,78,216,0.6)]"
            />
          </div>

          {/* Loading bar */}
          <div className="w-24 h-px bg-white/10 overflow-hidden rounded-full">
            <div
              className="h-full bg-gradient-to-r from-blue-800 to-blue-600 rounded-full"
              style={{
                width:
                  phase === "logo-in"
                    ? "30%"
                    : phase === "logo-hold"
                    ? "100%"
                    : "0%",
                transition:
                  phase === "logo-hold"
                    ? "width 0.7s cubic-bezier(0.4, 0, 0.2, 1)"
                    : phase === "logo-in"
                    ? "width 0.4s ease-out"
                    : "none",
              }}
            />
          </div>
        </div>
      </div>

      {/* ── Bottom slide-in panel (creates the two-panel wipe effect) ── */}
      <div
        aria-hidden="true"
        className="fixed inset-0 z-[998] pointer-events-none"
        style={{
          background: "#000814",
          transform:
            phase === "cover"
              ? "translateY(0%)"
              : phase === "logo-in" || phase === "logo-hold" || phase === "logo-out"
              ? "translateY(0%)"
              : phase === "uncover"
              ? "translateY(100%)"
              : "translateY(100%)",
          transition:
            phase === "cover"
              ? "transform 0.55s cubic-bezier(0.76, 0, 0.24, 1) 0.05s"
              : phase === "uncover"
              ? "transform 0.55s cubic-bezier(0.76, 0, 0.24, 1) 0.05s"
              : "none",
        }}
      />
    </>
  );
}