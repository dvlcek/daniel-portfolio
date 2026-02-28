"use client";

import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type Phase = "idle" | "cover" | "logo-in" | "logo-hold" | "logo-out" | "uncover";

type TransitionContextValue = {
  phase: Phase;
  isTransitioning: boolean;
  start: (href: string) => void;
};

const TransitionContext = createContext<TransitionContextValue | null>(null);

export function usePageTransition() {
  const ctx = useContext(TransitionContext);
  if (!ctx) throw new Error("usePageTransition must be used inside TransitionProvider");
  return ctx;
}

// Animation timeline:
// 0ms      — cover (black bg fades in)
// 420ms    — router.push (navigate)
// 550ms    — logo-in starts (parts begin animating in)
//            part1 @ 50ms, part2 @ 450ms, part3 @ 900ms, part4 @ 1300ms
//            part4 fully done at ~550 + 1300 + 850 = ~2700ms
// 2900ms   — logo-hold (all parts in, pause here)
// 3800ms   — logo-out (logo fades out)
// 4000ms   — uncover (black bg fades away)
// 4600ms   — idle

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("idle");
  const lockRef = useRef(false);

  const start = useCallback(
    (href: string) => {
      if (lockRef.current) return;
      lockRef.current = true;

      setPhase("cover");

      setTimeout(() => {
        router.push(href);
      }, 420);

      setTimeout(() => setPhase("logo-in"),   550);   // parts start animating
      setTimeout(() => setPhase("logo-hold"), 2000);  // all 4 parts fully in
      setTimeout(() => setPhase("logo-out"),  2500);  // hold for 1s, then exit
      setTimeout(() => setPhase("uncover"),   3000);  // bg starts uncovering
      setTimeout(() => {
        setPhase("idle");
        lockRef.current = false;
      }, 4200);
    },
    [router]
  );

  const value = useMemo(
    () => ({
      phase,
      isTransitioning: phase !== "idle",
      start,
    }),
    [phase, start]
  );

  return <TransitionContext.Provider value={value}>{children}</TransitionContext.Provider>;
}