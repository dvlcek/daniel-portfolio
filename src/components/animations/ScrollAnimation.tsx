"use client";

import { type ReactNode, useRef } from "react";
import { useReveal } from "./useReveal";
import { useStagger } from "./useStagger";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  start?: string;
};

type StaggerProps = {
  children: ReactNode;
  className?: string;
  itemSelector: string;
  y?: number;
  stagger?: number;
  duration?: number;
  start?: string;
};

export function Reveal({
  children,
  className,
  delay,
  duration,
  y,
  start,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useReveal(ref, { delay, duration, y, start });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function Stagger({
  children,
  className,
  itemSelector,
  y,
  stagger,
  duration,
  start,
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useStagger(ref, itemSelector, { y, stagger, duration, start });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
