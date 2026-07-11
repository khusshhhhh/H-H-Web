"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

/** Thin fixed progress bar reflecting scroll position down the current page. */
export function ScrollProgressBar() {
  const reduced = useReducedMotionSafe();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 40, restDelta: 0.001 });

  if (reduced) return null;

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-terracotta"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
