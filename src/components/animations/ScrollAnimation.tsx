"use client";

import { type ReactNode, useRef } from "react";
import { useReveal } from "./useReveal";
import { useStagger } from "./useStagger";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

type StaggerProps = {
  children: ReactNode;
  className?: string;
  itemSelector: string;
  y?: number;
  stagger?: number;
};

export function Reveal({ children, className, delay }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useReveal(ref, { delay });

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
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useStagger(ref, itemSelector, { y, stagger });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
