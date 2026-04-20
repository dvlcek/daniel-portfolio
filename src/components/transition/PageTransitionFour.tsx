"use client";

import Image from "next/image";
import { usePageTransition } from "./TransitionProvider";
import { usePrefersReducedMotion } from "@/components/animations/usePrefersReducedMotion";

export function PageTransition() {
  const { phase } = usePageTransition();
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return null;
  }

  const active = phase !== "idle";
  const covering =
    phase === "cover" ||
    phase === "logo-in" ||
    phase === "logo-hold" ||
    phase === "logo-out";

  const logoVisible = phase === "logo-in" || phase === "logo-hold";

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[999] pointer-events-none"
      style={{
        visibility: active ? "visible" : "hidden",
      }}
    >
      {/* Solid black background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#000000",
          opacity: covering ? 1 : 0,
          transition: "opacity 0.55s cubic-bezier(0.76,0,0.24,1) 0s",
        }}
      />

      {/* Logo parts */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative" style={{ width: 200, height: 200 }}>

          {/* Glow behind logo */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(29,78,216,0.35) 0%, rgba(0,0,0,0) 70%)",
              filter: "blur(32px)",
              transform: "scale(1.9)",
              opacity: logoVisible ? 0.9 : 0,
              transition: "opacity 0.3s ease-out 0.1s",
            }}
          />

          {/* Part 1 — slides in from bottom */}
          <div
            className="absolute inset-0"
            style={{
              opacity: logoVisible ? 1 : 0,
              transform: logoVisible ? "translateY(0%)" : "translateY(180%)",
              transition: logoVisible
                ? "opacity 0.45s ease-out 0.0s, transform 0.55s cubic-bezier(0.34,1.3,0.64,1) 0.0s"
                : "opacity 0.2s ease-in, transform 0.25s ease-in",
            }}
          >
            <Image
              src="/part1.svg"
              alt=""
              fill
              priority
              className="object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>

          {/* Part 2 — slides in from top */}
          <div
            className="absolute inset-0"
            style={{
              opacity: logoVisible ? 1 : 0,
              transform: logoVisible ? "translateY(0%)" : "translateY(-180%)",
              transition: logoVisible
                ? "opacity 0.45s ease-out 0.3s, transform 0.55s cubic-bezier(0.34,1.3,0.64,1) 0.15s"
                : "opacity 0.2s ease-in, transform 0.25s ease-in",
            }}
          >
            <Image
              src="/part2.svg"
              alt=""
              fill
              priority
              className="object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>

          {/* Part 3 — slides in from left */}
          <div
            className="absolute inset-0"
            style={{
              opacity: logoVisible ? 1 : 0,
              transform: logoVisible ? "translateX(0%)" : "translateX(180%)",
              transition: logoVisible
                ? "opacity 0.45s ease-out 0.6s, transform 0.55s cubic-bezier(0.34,1.3,0.64,1) 0.3s"
                : "opacity 0.2s ease-in, transform 0.25s ease-in",
            }}
          >
            <Image
              src="/part3.svg"
              alt=""
              fill
              priority
              className="object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>

          {/* Part 4 — slides in from left, slight delay */}
          <div
            className="absolute inset-0"
            style={{
              opacity: logoVisible ? 1 : 0,
              transform: logoVisible ? "translateX(0%)" : "translateX(180%)",
              transition: logoVisible
                ? "opacity 0.45s ease-out 0.9s, transform 0.55s cubic-bezier(0.34,1.3,0.64,1) 0.45s"
                : "opacity 0.2s ease-in, transform 0.25s ease-in",
            }}
          >
            <Image
              src="/part4.svg"
              alt=""
              fill
              priority
              className="object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}
