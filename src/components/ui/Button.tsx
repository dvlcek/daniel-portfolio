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
    "group inline-flex touch-manipulation items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold outline-none transition-all duration-300 ease-out will-change-transform focus-visible:ring-2 focus-visible:ring-blue-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:translate-y-0";

  const styles: Record<Variant, string> = {
    primary:
      "relative isolate overflow-hidden bg-[#1238F2] text-white ring-1 ring-[#1238F2]/60 shadow-[0_18px_42px_rgba(18,56,242,0.22)] before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:bg-[#0B247F] before:transition-transform before:duration-300 before:ease-out hover:-translate-y-0.5 hover:shadow-[0_22px_54px_rgba(18,56,242,0.28)] hover:before:scale-x-100",

    secondary:
      "bg-white/80 text-[#10131A] ring-1 ring-[#D8DCE8] shadow-[0_12px_32px_rgba(16,19,26,0.08)] backdrop-blur-xl hover:-translate-y-0.5 hover:bg-white hover:ring-[#1238F2]/25 hover:shadow-[0_16px_38px_rgba(16,19,26,0.12)]",

    ghost:
      "text-[#42506A] ring-1 ring-transparent hover:bg-white hover:text-[#10131A] hover:ring-[#D8DCE8]",
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
