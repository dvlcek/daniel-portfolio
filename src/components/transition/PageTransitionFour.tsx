"use client";

import { usePageTransition } from "./TransitionProvider";
import { usePrefersReducedMotion } from "@/components/animations/usePrefersReducedMotion";

export function PageTransition() {
  const { phase } = usePageTransition();
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) return null;

  const active = phase !== "idle";
  const covering =
    phase === "cover" ||
    phase === "logo-in" ||
    phase === "logo-hold" ||
    phase === "logo-out";
  const uncovering = phase === "uncover";
  const markVisible = phase === "logo-in" || phase === "logo-hold";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[999] overflow-hidden"
      style={{ visibility: active ? "visible" : "hidden" }}
    >
      <div
        className="absolute inset-0 bg-[#06101b]"
        style={{
          clipPath: covering
            ? "inset(0% 0% 0% 0%)"
            : uncovering
              ? "inset(0% 0% 100% 0%)"
              : "inset(100% 0% 0% 0%)",
          transition: uncovering
            ? "clip-path 0.46s cubic-bezier(0.76,0,0.24,1)"
            : "clip-path 0.42s cubic-bezier(0.76,0,0.24,1)",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_54%,rgba(91,151,211,0.13),transparent_28%),linear-gradient(180deg,#07111d_0%,#06101b_100%)]" />

        <div
          className="absolute left-1/2 top-1/2 h-px w-[min(46vw,520px)] -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(213,237,255,0.72),transparent)] shadow-[0_0_30px_rgba(139,201,247,0.24)]"
          style={{
            opacity: markVisible ? 0.72 : 0,
            transform: markVisible
              ? "translate(-50%,-50%) scaleX(1)"
              : "translate(-50%,-50%) scaleX(0.25)",
            transition: "opacity 0.28s ease, transform 0.5s cubic-bezier(0.2,0.8,0.2,1)",
          }}
        />

        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            opacity: markVisible ? 1 : 0,
            transform: markVisible ? "translateY(0px)" : "translateY(9px)",
            transition: "opacity 0.3s ease, transform 0.45s cubic-bezier(0.2,0.8,0.2,1)",
          }}
        >
          <div className="mt-20 flex items-center gap-3 text-white">
            <span className="text-[22px] font-semibold tracking-[-0.05em]">DV</span>
            <span className="h-4 w-px bg-white/18" />
            <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/52">Daniel Vlcek</span>
          </div>
        </div>
      </div>
    </div>
  );
}
