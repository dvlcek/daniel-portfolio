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
    "group inline-flex touch-manipulation items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-[-0.01em] outline-none transition-all duration-300 ease-out will-change-transform focus-visible:ring-2 focus-visible:ring-clay/60 focus-visible:ring-offset-2 focus-visible:ring-offset-site-bg active:translate-y-0";

  const styles: Record<Variant, string> = {
    primary:
      "relative isolate overflow-hidden bg-cream text-site-bg ring-1 ring-cream/10 shadow-[0_18px_50px_rgba(21,21,18,0.14)] before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-[#0D0E0C] before:transition-transform before:duration-300 before:ease-out hover:-translate-y-0.5 hover:shadow-[0_22px_58px_rgba(21,21,18,0.18)] hover:before:scale-x-100",

    secondary:
      "bg-white/70 text-cream ring-1 ring-black/[0.08] shadow-[0_14px_36px_rgba(21,21,18,0.08)] backdrop-blur-xl hover:-translate-y-0.5 hover:bg-white hover:ring-black/[0.14]",

    ghost:
      "text-stone ring-1 ring-transparent hover:bg-white/70 hover:text-cream hover:ring-black/[0.08]",
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
