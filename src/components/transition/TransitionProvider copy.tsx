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

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("idle");

  // prevent double-trigger spam
  const lockRef = useRef(false);

  const start = useCallback(
    (href: string) => {
      if (lockRef.current) return;
      lockRef.current = true;

      // Start covering immediately
      setPhase("cover");

      // Let the overlay reach "covered" BEFORE navigation to avoid flashing new page
      // (match your cover transition ~0.55s)
      window.setTimeout(() => {
        router.push(href);
      }, 420);

      // Continue your logo timeline (you can tune these)
      window.setTimeout(() => setPhase("logo-in"), 50);
      window.setTimeout(() => setPhase("logo-hold"), 650);
      window.setTimeout(() => setPhase("logo-out"), 1400);
      window.setTimeout(() => setPhase("uncover"), 1800);
      window.setTimeout(() => {
        setPhase("idle");
        lockRef.current = false;
      }, 2400);
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