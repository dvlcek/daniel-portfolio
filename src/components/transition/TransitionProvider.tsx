"use client";

import React, {
  createContext,
  startTransition,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { usePrefersReducedMotion } from "@/components/animations/usePrefersReducedMotion";

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
  const prefersReducedMotion = usePrefersReducedMotion();
  const [phase, setPhase] = useState<Phase>("idle");
  const lockRef = useRef(false);
  const timeoutIdsRef = useRef<number[]>([]);

  const clearScheduledTransitions = useCallback(() => {
    for (const timeoutId of timeoutIdsRef.current) {
      window.clearTimeout(timeoutId);
    }
    timeoutIdsRef.current = [];
  }, []);

  const schedule = useCallback((callback: () => void, delay: number) => {
    const timeoutId = window.setTimeout(callback, delay);
    timeoutIdsRef.current.push(timeoutId);
  }, []);

  useEffect(() => clearScheduledTransitions, [clearScheduledTransitions]);

  const start = useCallback(
    (href: string) => {
      if (lockRef.current) return;
      lockRef.current = true;
      clearScheduledTransitions();

      if (prefersReducedMotion) {
        startTransition(() => router.push(href));
        lockRef.current = false;
        return;
      }

      setPhase("cover");
      schedule(() => startTransition(() => router.push(href)), 190);
      schedule(() => setPhase("logo-in"), 240);
      schedule(() => setPhase("logo-hold"), 620);
      schedule(() => setPhase("logo-out"), 790);
      schedule(() => setPhase("uncover"), 940);
      schedule(() => {
        setPhase("idle");
        lockRef.current = false;
      }, 1420);
    },
    [clearScheduledTransitions, prefersReducedMotion, router, schedule],
  );

  const value = useMemo(
    () => ({
      phase,
      isTransitioning: phase !== "idle",
      start,
    }),
    [phase, start],
  );

  return <TransitionContext.Provider value={value}>{children}</TransitionContext.Provider>;
}
