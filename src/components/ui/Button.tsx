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
  { href, children, variant = "primary", className, target, rel, prefetch = true, onClick },
  ref
) {
  const handleClick = useTransitionLink({ href, onClick, target });

  const base =
    "inline-flex touch-manipulation items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium transition-transform duration-300 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

  const styles: Record<Variant, string> = {
    primary:
      "relative overflow-hidden bg-transparent text-white ring-1 ring-white/15 transition-[border-color,box-shadow,color] duration-300 ease-out before:absolute before:inset-0 before:-z-10 before:bg-blue-800 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100 hover:ring-blue-800 hover:shadow-[0_12px_30px_rgba(71,74,168,0.35)] active:translate-y-0",
    secondary:
      "bg-white/10 text-white ring-1 ring-white/15 transition-[background-color,border-color,box-shadow,color] hover:bg-white/14 hover:-translate-y-0.5 active:translate-y-0",
    ghost:
      "text-white/80 ring-1 ring-transparent transition-[background-color,border-color,color] hover:bg-white/5 hover:text-white hover:ring-white/10",
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
