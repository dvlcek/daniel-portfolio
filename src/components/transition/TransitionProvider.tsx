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
        startTransition(() => {
          router.push(href);
        });
        lockRef.current = false;
        return;
      }

      setPhase("cover");

      schedule(() => {
        startTransition(() => {
          router.push(href);
        });
      }, 420);

      schedule(() => setPhase("logo-in"), 550);
      schedule(() => setPhase("logo-hold"), 2000);
      schedule(() => setPhase("logo-out"), 2500);
      schedule(() => setPhase("uncover"), 3000);
      schedule(() => {
        setPhase("idle");
        lockRef.current = false;
      }, 4200);
    },
    [clearScheduledTransitions, prefersReducedMotion, router, schedule]
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
