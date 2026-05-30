"use client";

import Link from "next/link";
import React from "react";
import { cn } from "@/app/lib/cn";
import { useTransitionLink } from "@/components/transition/useTransitionLink";

type Variant = "primary" | "secondary" | "ghost";

export const Button = React.forwardRef<
  HTMLAnchorElement,
  {
    href: string;
    children: React.ReactNode;
    variant?: Variant;
    className?: string;
    target?: React.HTMLAttributeAnchorTarget;
    rel?: string;
    prefetch?: boolean;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  }
>(function Button(
  {
    href,
    children,
    variant = "primary",
    className,
    target,
    rel,
    prefetch = true,
    onClick,
  },
  ref,
) {
  const handleClick = useTransitionLink({ href, onClick, target });

  const base =
    "group inline-flex touch-manipulation items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium outline-none transition-all duration-300 ease-out will-change-transform focus-visible:ring-2 focus-visible:ring-blue-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg active:translate-y-0";

  const styles: Record<Variant, string> = {
    primary:
      "relative isolate overflow-hidden bg-brand-blue-vivid text-white ring-1 ring-brand-blue/60 shadow-[0_12px_34px_rgba(47,47,228,0.24)] before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-brand-blue-deep before:transition-transform before:duration-300 before:ease-out hover:-translate-y-0.5 hover:ring-brand-blue hover:shadow-[0_14px_38px_rgba(47,47,228,0.36)] hover:before:scale-x-100",

    secondary:
      "bg-white/[0.025] text-white ring-1 ring-white/[0.14] shadow-[0_10px_28px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 hover:bg-white/[0.055] hover:ring-brand-blue/40 hover:shadow-[0_14px_34px_rgba(0,0,0,0.28)]",

    ghost:
      "text-white/75 ring-1 ring-transparent hover:bg-white/[0.05] hover:text-white hover:ring-white/[0.10]",
  };

  return (
    <Link
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      prefetch={prefetch}
      className={cn(base, styles[variant], className)}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
});