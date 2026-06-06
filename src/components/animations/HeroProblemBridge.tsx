"use client";

import { useEffect } from "react";
import {
  ensureGsap,
  gsap,
  ScrollTrigger,
} from "@/components/animations/gsapClient";

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function lerp(start: number, end: number, progress: number) {
  return start + (end - start) * progress;
}

function smoothstep(value: number) {
  const t = clamp(value);
  return t * t * (3 - 2 * t);
}

type DrawablePath = {
  path: SVGPathElement;
  length: number;
};

export function HeroProblemBridge() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (!desktopQuery.matches || reducedMotionQuery.matches) return;

    ensureGsap();

    let cleanupBridge: (() => void) | undefined;

    const ctx = gsap.context(() => {
      const hero = document.querySelector<HTMLElement>("[data-section='hero']");
      const problem = document.querySelector<HTMLElement>(
        "[data-section='problem']",
      );

      if (!hero || !problem) return;

      const sources = Array.from(
        document.querySelectorAll<HTMLElement>("[data-flow-source]"),
      );
      const targets = Array.from(
        document.querySelectorAll<HTMLElement>("[data-flow-target]"),
      );
      const outputNodes = Array.from(
        document.querySelectorAll<HTMLElement>("[data-flow-output]"),
      );
      const problemNodes = Array.from(
        document.querySelectorAll<HTMLElement>("[data-flow-problem-node]"),
      );
      const heroCore = document.querySelector<HTMLElement>(
        "[data-flow-core='business-os']",
      );
      const heroLines = document.querySelector<HTMLElement>(
        "[data-flow-lines='hero-clean-lines']",
      );
      const problemLines = document.querySelector<SVGElement>(
        "[data-flow-lines='problem-scribble-lines']",
      );

      if (!sources.length || !targets.length) return;

      const problemPaths: DrawablePath[] = problemLines
        ? Array.from(problemLines.querySelectorAll<SVGPathElement>("path")).map(
            (path) => {
              const length = path.getTotalLength();
              path.style.strokeDasharray = `${length}`;
              path.style.strokeDashoffset = `${length}`;
              return { path, length };
            },
          )
        : [];

      gsap.set(targets, { autoAlpha: 0, y: 18, scale: 0.98 });
      gsap.set(problemNodes, { autoAlpha: 0, y: 12 });
      if (problemLines) gsap.set(problemLines, { autoAlpha: 0 });

      const render = (rawProgress: number) => {
        const progress = clamp(rawProgress);
        const eased = smoothstep(progress);
        const sourceOpacity = 1 - clamp(progress / 0.32);
        const targetProgress = smoothstep((progress - 0.18) / 0.58);
        const problemLineProgress = smoothstep((progress - 0.12) / 0.62);
        const problemNodeProgress = smoothstep((progress - 0.58) / 0.34);

        gsap.set(sources, {
          autoAlpha: sourceOpacity,
          y: lerp(0, -8, eased),
          scale: lerp(1, 0.985, eased),
          overwrite: true,
        });

        gsap.set(targets, {
          autoAlpha: targetProgress,
          y: lerp(18, 0, targetProgress),
          scale: lerp(0.98, 1, targetProgress),
          overwrite: true,
        });

        if (heroLines) {
          gsap.set(heroLines, {
            autoAlpha: 1 - clamp(progress / 0.42),
            overwrite: true,
          });
        }

        if (problemLines) {
          gsap.set(problemLines, {
            autoAlpha: problemLineProgress,
            overwrite: true,
          });
          problemPaths.forEach(({ path, length }) => {
            path.style.strokeDashoffset = `${length * (1 - problemLineProgress)}`;
          });
        }

        if (heroCore) {
          gsap.set(heroCore, {
            autoAlpha: 1 - clamp((progress - 0.26) / 0.5),
            scale: lerp(1, 0.96, clamp((progress - 0.14) / 0.52)),
            overwrite: true,
          });
        }

        gsap.set(outputNodes, {
          autoAlpha: 1 - clamp(progress / 0.24),
          y: lerp(0, -8, clamp(progress / 0.24)),
          overwrite: true,
        });

        gsap.set(problemNodes, {
          autoAlpha: problemNodeProgress,
          y: lerp(12, 0, problemNodeProgress),
          overwrite: true,
        });
      };

      render(0);

      const trigger = ScrollTrigger.create({
        trigger: hero,
        start: "bottom bottom",
        endTrigger: problem,
        end: "top 18%",
        scrub: 0.35,
        invalidateOnRefresh: true,
        onUpdate: (self) => render(self.progress),
        onRefresh: (self) => render(self.progress),
      });

      cleanupBridge = () => {
        trigger.kill();
        gsap.set([...sources, ...targets, ...problemNodes, ...outputNodes], {
          clearProps: "all",
        });
        if (heroLines) gsap.set(heroLines, { clearProps: "all" });
        if (problemLines) gsap.set(problemLines, { clearProps: "all" });
        if (heroCore) gsap.set(heroCore, { clearProps: "all" });
        problemPaths.forEach(({ path }) => {
          path.style.strokeDasharray = "";
          path.style.strokeDashoffset = "";
        });
      };
    });

    ScrollTrigger.refresh();

    return () => {
      cleanupBridge?.();
      ctx.revert();
    };
  }, []);

  return null;
}
