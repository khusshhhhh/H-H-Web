"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { cn } from "@/lib/utils";

interface MaskRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  direction?: "up" | "left";
}

/** Clip-path panel reveal — used for gallery/hero imagery entrances. */
export function MaskReveal({ children, className, delay = 0, once = true, direction = "up" }: MaskRevealProps) {
  const reduced = useReducedMotionSafe();

  const hiddenClip = direction === "up" ? "inset(100% 0% 0% 0%)" : "inset(0% 100% 0% 0%)";

  if (reduced) {
    return <div className={cn("relative overflow-hidden", className)}>{children}</div>;
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="relative h-full w-full"
        initial={{ clipPath: hiddenClip, scale: 1.08 }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0%)", scale: 1 }}
        viewport={{ once }}
        transition={{ duration: 1.1, delay, ease: [0.65, 0, 0.35, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
