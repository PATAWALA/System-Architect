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
      "relative inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-tight transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8FAFC] disabled:opacity-50 disabled:pointer-events-none";

    const sizes: Record<Size, string> = {
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3.5 text-[15px]",
    };

    const variants: Record<Variant, string> = {
      // 🎯 Or dégradé exactement comme demandé
      primary:
        "bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#996515] text-slate-950 font-semibold shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all duration-300",
      secondary:
        "bg-white text-ink-900 border border-[#E2E8F0] hover:border-ink-700 hover:bg-surface-soft",
      ghost:
        "text-ink-700 hover:text-ink-900 hover:bg-surface-soft",
    };

    return (
      <button
        ref={ref}
        className={cn(base, sizes[size], variants[variant], className)}
        {...props}
      >
        <span className="relative inline-flex items-center gap-2">
          {children}
        </span>
      </button>
    );
  }
);
Button.displayName = "Button";