"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const base =
      "relative inline-flex items-center justify-center gap-2 font-medium tracking-tight rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400/40 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:opacity-50 disabled:pointer-events-none";

    const sizes: Record<Size, string> = {
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-[15px]",
    };

    const variants: Record<Variant, string> = {
      primary:
        "bg-ink-900 text-white hover:bg-ink-900/90 shadow-soft hover:shadow-card",
      secondary:
        "bg-surface text-ink-900 border border-ink-300 hover:border-ink-700 hover:bg-surface-soft",
      ghost: "text-ink-700 hover:text-ink-900 hover:bg-surface-soft",
    };

    return (
      <button
        ref={ref}
        className={cn(base, sizes[size], variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";