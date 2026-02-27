import Link from "next/link";
import React from "react";
import { cn } from "@/app/lib/cn";

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
  }
>(function Button({ href, children, variant = "primary", className, target, rel }, ref) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium transition will-change-transform";
  const styles: Record<Variant, string> = {
    primary:
    "relative overflow-hidden bg-transparent text-white ring-1 ring-white/15 transition-all duration-300 ease-out before:absolute before:inset-0 before:-z-10 before:bg-blue-800 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100 hover:ring-blue-800 hover:shadow-[0_12px_30px_rgba(71,74,168,0.35)] active:translate-y-0",
    secondary:
      "bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/14 hover:-translate-y-0.5 active:translate-y-0",
    ghost:
      "text-white/80 hover:text-white hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10",
  };

  return (
    <Link
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      className={cn(base, styles[variant], className)}
    >
      {children}
    </Link>
  );
});
