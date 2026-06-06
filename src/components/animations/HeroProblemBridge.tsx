"use client";

import { animationConfig, desktopMotionQuery } from "@/lib/animation";
import {
  ensureGsap,
  gsap,
  ScrollTrigger,
  useGSAP,
} from "@/components/animations/gsapClient";

type FlowClone = {
  id: string;
  source: HTMLElement;
  target: HTMLElement;
  clone: HTMLElement;
  finalRotate: number;
};

type ElementBox = {
  left: number;
  top: number;
  width: number;
  height: number;
};

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function lerp(start: number, end: number, progress: number) {
  return start + (end - start) * progress;
}

function smootherstep(value: number) {
  const t = clamp(value);
  return t * t * t * (t * (t * 6 - 15) + 10);
}

function getAbsoluteBox(element: HTMLElement): ElementBox {
  const rect = element.getBoundingClientRect();

  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
    width: rect.width,
    height: rect.height,
  };
}

function makeClone(element: HTMLElement) {
  const clone = element.cloneNode(true) as HTMLElement;

  clone.removeAttribute("data-flow-source");
  clone.setAttribute("aria-hidden", "true");
  clone.style.position = "fixed";
  clone.style.left = "0px";
  clone.style.top = "0px";
  clone.style.margin = "0";
  clone.style.pointerEvents = "none";
  clone.style.zIndex = "80";
  clone.style.boxSizing = "border-box";
  clone.style.transformOrigin = "center center";
  clone.style.willChange = "transform, opacity, width, height";
  clone.style.transition = "none";

  document.body.appendChild(clone);

  return clone;
}

function setVisibility(elements: HTMLElement[], value: number) {
  gsap.set(elements, {
    autoAlpha: value,
    overwrite: true,
  });
}

export function HeroProblemBridge() {
  useGSAP(() => {
    if (typeof window === "undefined") return;

    ensureGsap();

    const mm = gsap.matchMedia();

    mm.add(desktopMotionQuery, () => {
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
      const targetMap = new Map(
        targets.map((target) => [target.dataset.flowTarget, target]),
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
      const problemLines = document.querySelector<HTMLElement>(
        "[data-flow-lines='problem-scribble-lines']",
      );

      if (!sources.length || !targets.length) return;
      const flowClones: FlowClone[] = sources.flatMap((source) => {
        const id = source.dataset.flowSource;
        if (!id) return [];

        const target = targetMap.get(id);
        if (!target) return [];

        return [
          {
            id,
            source,
            target,
            clone: makeClone(source),
            finalRotate: Number(target.dataset.flowRotate ?? 0),
          },
        ];
      });

      const sourceBoxes = new Map<string, ElementBox>();
      const targetBoxes = new Map<string, ElementBox>();

      const measure = () => {
        flowClones.forEach(({ id, source, target }) => {
          sourceBoxes.set(id, getAbsoluteBox(source));
          targetBoxes.set(id, getAbsoluteBox(target));
        });
      };

      const drawProblemLines = (progress: number) => {
        if (!problemLines) return;

        const lines = Array.from(problemLines.querySelectorAll<SVGPathElement>("path"));
        lines.forEach((line) => {
          const length = line.getTotalLength();
          line.style.strokeDasharray = `${length}`;
          line.style.strokeDashoffset = `${length * (1 - progress)}`;
        });
      };

      setVisibility([...targets, ...problemNodes], 0);
      flowClones.forEach(({ clone }) => {
        clone.style.opacity = "0";
      });

      const render = (rawProgress: number) => {
        const progress = clamp(rawProgress);
        const activeProgress = smootherstep((progress - 0.06) / 0.82);
        const cloneOpacity =
          smootherstep(progress / 0.16) *
          (1 - smootherstep((progress - 0.86) / 0.14));
        const targetOpacity = smootherstep((progress - 0.72) / 0.22);
        const sourceOpacity = 1 - smootherstep((progress - 0.1) / 0.24);
        const heroLineOpacity = 1 - smootherstep((progress - 0.08) / 0.32);
        const problemLineProgress = smootherstep((progress - 0.28) / 0.52);
        const problemNodeOpacity = smootherstep((progress - 0.62) / 0.25);

        flowClones.forEach(({ id, clone, finalRotate }) => {
          const sourceBox = sourceBoxes.get(id);
          const targetBox = targetBoxes.get(id);
          if (!sourceBox || !targetBox) return;

          const left = lerp(sourceBox.left, targetBox.left, activeProgress);
          const top = lerp(sourceBox.top, targetBox.top, activeProgress);
          const width = lerp(sourceBox.width, targetBox.width, activeProgress);
          const height = lerp(sourceBox.height, targetBox.height, activeProgress);
          const rotate = lerp(0, finalRotate, activeProgress);
          const scale = lerp(1, 0.985, activeProgress);

          clone.style.left = `${left - window.scrollX}px`;
          clone.style.top = `${top - window.scrollY}px`;
          clone.style.width = `${width}px`;
          clone.style.height = `${height}px`;
          clone.style.opacity = `${cloneOpacity}`;
          clone.style.transform = `rotate(${rotate}deg) scale(${scale})`;
        });

        setVisibility(sources, sourceOpacity);
        setVisibility(targets, targetOpacity);
        setVisibility(problemNodes, problemNodeOpacity);

        if (heroLines) {
          gsap.set(heroLines, {
            autoAlpha: heroLineOpacity,
            overwrite: true,
          });
        }

        if (problemLines) {
          gsap.set(problemLines, {
            autoAlpha: problemLineProgress,
            overwrite: true,
          });
          drawProblemLines(problemLineProgress);
        }

        if (heroCore) {
          gsap.set(heroCore, {
            autoAlpha: 1 - smootherstep((progress - 0.12) / 0.52),
            filter: `blur(${lerp(0, 6, smootherstep((progress - 0.12) / 0.58))}px)`,
            scale: lerp(1, 0.92, smootherstep((progress - 0.12) / 0.58)),
            overwrite: true,
          });
        }

        gsap.set(outputNodes, {
          autoAlpha: 1 - smootherstep((progress - 0.04) / 0.24),
          y: lerp(0, -8, smootherstep((progress - 0.04) / 0.24)),
          overwrite: true,
        });
      };

      measure();
      render(0);

      const trigger = ScrollTrigger.create({
        trigger: hero,
        start: "bottom 92%",
        endTrigger: problem,
        end: "top 26%",
        scrub: animationConfig.scroll.scrub,
        invalidateOnRefresh: true,
        onUpdate: (self) => render(self.progress),
        onRefreshInit: measure,
        onRefresh: (self) => render(self.progress),
      });

      const onResize = () => {
        measure();
        render(trigger.progress);
      };

      window.addEventListener("resize", onResize);

      const cleanupBridge = () => {
        window.removeEventListener("resize", onResize);
        trigger.kill();
        flowClones.forEach(({ clone }) => clone.remove());
        setVisibility([...sources, ...targets, ...problemNodes, ...outputNodes], 1);
        if (heroLines) gsap.set(heroLines, { clearProps: "all" });
        if (problemLines) gsap.set(problemLines, { clearProps: "all" });
        if (heroCore) gsap.set(heroCore, { clearProps: "all" });
      };

      ScrollTrigger.refresh();

      return () => {
        cleanupBridge?.();
      };
    });

    return () => {
      mm.revert();
    };
  }, { dependencies: [], revertOnUpdate: true });

  return null;
}
