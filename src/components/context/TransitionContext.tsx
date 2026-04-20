"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";

interface TransitionContextType {
  navigate: (href: string) => void;
  phase: Phase;
}

export type Phase =
  | "idle"
  | "cover"
  | "logo-in"
  | "logo-hold"
  | "logo-out"
  | "uncover";

const TransitionContext = createContext<TransitionContextType>({
  navigate: () => {},
  phase: "idle",
});

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("cover");
  const isAnimating = useRef(false);

  const runExit = useCallback(
    (href: string) => {
      if (isAnimating.current) return;
      isAnimating.current = true;

      // Cover screen
      setPhase("cover");
      setTimeout(() => setPhase("logo-in"), 50);
      setTimeout(() => setPhase("logo-hold"), 600);
      setTimeout(() => {
        // Navigate while logo is showing
        router.push(href);
      }, 1000);
      setTimeout(() => setPhase("logo-out"), 1300);
      setTimeout(() => setPhase("uncover"), 1700);
      setTimeout(() => {
        setPhase("idle");
        isAnimating.current = false;
        document.documentElement.classList.remove("loading");
      }, 2300);
    },
    [router]
  );

  useEffect(() => {
    const bootDelayId = window.setTimeout(() => {
      setPhase("logo-in");
      window.setTimeout(() => setPhase("logo-hold"), 600);
      window.setTimeout(() => setPhase("logo-out"), 1300);
      window.setTimeout(() => setPhase("uncover"), 1700);
      window.setTimeout(() => {
        setPhase("idle");
        document.documentElement.classList.remove("loading");
      }, 2300);
    }, 50);

    return () => window.clearTimeout(bootDelayId);
  }, []);

  return (
    <TransitionContext.Provider value={{ navigate: runExit, phase }}>
      {children}
    </TransitionContext.Provider>
  );
}

export const useTransition = () => useContext(TransitionContext);
