"use client";

import { animationConfig } from "@/lib/animation";
import { ensureGsap, gsap, useGSAP } from "./gsapClient";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export function useReveal<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  opts?: { delay?: number; y?: number; duration?: number; start?: string }
) {
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    ensureGsap();

    if (prefersReducedMotion) {
      gsap.set(el, { autoAlpha: 1, y: 0, clearProps: "transform" });
      return;
    }

    gsap.fromTo(
      el,
      { autoAlpha: 0, y: opts?.y ?? animationConfig.distance.revealY },
      {
        autoAlpha: 1,
        y: 0,
        duration: opts?.duration ?? animationConfig.duration.reveal,
        ease: animationConfig.ease.default,
        delay: opts?.delay ?? 0,
        scrollTrigger: {
          trigger: el,
          start: opts?.start ?? animationConfig.scroll.start,
          once: true,
        },
      },
    );
  }, {
    scope: ref,
    dependencies: [
      prefersReducedMotion,
      opts?.delay,
      opts?.duration,
      opts?.start,
      opts?.y,
    ],
    revertOnUpdate: true,
  });
}
