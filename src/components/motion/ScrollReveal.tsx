"use client";

import type { ReactNode } from "react";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { MOTION_TAGS } from "@/lib/animation/motion-tags";
import { cn } from "@/lib/utils";
import type { TextTag } from "@/types/polymorphic";

interface ScrollRevealProps {
  children: ReactNode;
  as?: TextTag;
  className?: string;
  y?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
}

export function ScrollReveal({
  children,
  as = "div",
  className,
  y = 28,
  delay = 0,
  duration = 0.8,
  once = true,
  amount = 0.3,
}: ScrollRevealProps) {
  const reduced = useReducedMotionSafe();
  const MotionTag = MOTION_TAGS[as];

  if (reduced) {
    return <MotionTag className={cn(className)}>{children}</MotionTag>;
  }

  return (
    <MotionTag
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.65, 0, 0.35, 1] }}
    >
      {children}
    </MotionTag>
  );
}
