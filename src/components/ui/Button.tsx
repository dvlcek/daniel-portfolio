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
  }
>(function Button({ href, children, variant = "primary", className }, ref) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium transition will-change-transform";
  const styles: Record<Variant, string> = {
    primary:
      "bg-white text-black hover:-translate-y-0.5 hover:opacity-90 active:translate-y-0",
    secondary:
      "bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/14 hover:-translate-y-0.5 active:translate-y-0",
    ghost:
      "text-white/80 hover:text-white hover:bg-white/5 ring-1 ring-transparent hover:ring-white/10",
  };

  return (
    <Link ref={ref} href={href} className={cn(base, styles[variant], className)}>
      {children}
    </Link>
  );
});