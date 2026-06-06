"use client";

import Link from "next/link";
import React from "react";
import { cn } from "@/app/lib/cn";
import { useTransitionLink } from "@/components/transition/useTransitionLink";

type Variant = "primary" | "secondary" | "accent" | "ghost";

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
    "group inline-flex min-h-12 touch-manipulation items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-[-0.01em] outline-none transition-all duration-300 ease-out will-change-transform focus-visible:ring-2 focus-visible:ring-[rgba(193,106,58,0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] active:translate-y-0";

  const styles: Record<Variant, string> = {
    primary:
      "bg-[#F2EFE6] text-[#050505] shadow-[0_20px_60px_rgba(242,239,230,0.10)] hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_24px_70px_rgba(242,239,230,0.16)]",
    secondary:
      "border border-[rgba(242,239,230,0.14)] bg-[rgba(242,239,230,0.06)] text-[#F2EFE6] backdrop-blur-xl hover:-translate-y-0.5 hover:border-[rgba(242,239,230,0.24)] hover:bg-[rgba(242,239,230,0.10)]",
    accent:
      "bg-[#C16A3A] text-[#050505] shadow-[0_20px_54px_rgba(193,106,58,0.18)] hover:-translate-y-0.5 hover:bg-[#E06F38]",
    ghost:
      "text-[#B8B1A4] hover:-translate-y-0.5 hover:bg-[rgba(242,239,230,0.06)] hover:text-[#F2EFE6]",
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
