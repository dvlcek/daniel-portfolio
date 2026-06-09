export const animationConfig = {
  ease: {
    default: "power3.out",
    premium: "expo.out",
    soft: "power2.out",
  },
  duration: {
    reveal: 0.8,
    hero: 0.9,
    card: 0.7,
  },
  stagger: {
    tight: 0.045,
    default: 0.08,
    relaxed: 0.12,
  },
  scroll: {
    scrub: 0.35,
    start: "top 82%",
    sectionStart: "top 78%",
  },
  distance: {
    revealY: 28,
    cardY: 20,
  },
} as const;

export const reducedMotionQuery = "(prefers-reduced-motion: reduce)";
export const desktopMotionQuery =
  "(min-width: 1024px) and (prefers-reduced-motion: no-preference)";
export const mobileMotionQuery =
  "(max-width: 767px) and (prefers-reduced-motion: no-preference)";

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;

  return window.matchMedia(reducedMotionQuery).matches;
}