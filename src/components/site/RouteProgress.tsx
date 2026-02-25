"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "@/components/animations/gsapClient";

export function RouteProgress() {
  const pathname = usePathname();
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    gsap.killTweensOf(bar);
    gsap.set(bar, {
      scaleX: 0,
      transformOrigin: "left center",
      opacity: 1,
    });

    const tl = gsap.timeline();
    tl.to(bar, { scaleX: 1, duration: 0.38, ease: "power2.out" }).to(bar, {
      opacity: 0,
      duration: 0.2,
      ease: "power1.inOut",
    });

    return () => {
      tl.kill();
    };
  }, [pathname]);

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[70] h-[2px] w-full">
      <div
        ref={barRef}
        className="h-full w-full origin-left bg-gradient-to-r from-cyan-300/75 via-emerald-300/70 to-cyan-300/75"
      />
    </div>
  );
}
