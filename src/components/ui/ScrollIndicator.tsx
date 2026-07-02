"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

interface ScrollIndicatorProps {
  label?: string;
  tone?: "light" | "dark";
  className?: string;
}

export function ScrollIndicator({ label = "Scroll", tone = "dark", className }: ScrollIndicatorProps) {
  const reduced = useReducedMotionSafe();

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-3 text-fluid-xs uppercase tracking-widest2",
        tone === "dark" ? "text-cream/80" : "text-charcoal/70",
        className,
      )}
      aria-hidden="true"
    >
      <span>{label}</span>
      <span
        className={cn(
          "relative h-12 w-px overflow-hidden",
          tone === "dark" ? "bg-cream/25" : "bg-charcoal/20",
        )}
      >
        <motion.span
          className={cn("absolute inset-x-0 top-0 h-1/2", tone === "dark" ? "bg-cream" : "bg-charcoal")}
          animate={reduced ? { y: 0 } : { y: ["-100%", "200%"] }}
          transition={reduced ? undefined : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </span>
    </div>
  );
}
