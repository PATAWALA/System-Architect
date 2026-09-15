"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";
type Size = "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const base =
      "relative inline-flex items-center justify-center gap-2 font-medium tracking-tight rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-deep disabled:opacity-50 disabled:pointer-events-none";

    const sizes: Record<Size, string> = {
      md: "px-5 py-2.5 text-sm",
      lg: "px-7 py-3.5 text-base",
    };

    const variants: Record<Variant, string> = {
      primary:
        "bg-gold-gradient text-slate-950 font-semibold shadow-[0_0_0_1px_rgba(212,175,55,0.4)] hover:shadow-gold-glow hover:-translate-y-0.5 active:translate-y-0",
      secondary:
        "bg-slate-900/60 backdrop-blur-md border border-slate-800 text-slate-200 hover:border-gold-400/50 hover:text-white hover:bg-slate-900/80",
    };

    return (
      <button
        ref={ref}
        className={cn(base, sizes[size], variants[variant], className)}
        {...props}
      >
        {variant === "primary" && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-white/0 via-white/20 to-white/0 opacity-0 hover:opacity-100 transition-opacity"
          />
        )}
        <span className="relative inline-flex items-center gap-2">{children}</span>
      </button>
    );
  }
);
Button.displayName = "Button";