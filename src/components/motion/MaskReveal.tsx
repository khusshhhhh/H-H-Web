"use client";

import { useContext, useRef, useState } from "react";
import type { ReactNode } from "react";
import { motion, PresenceContext, useInView } from "framer-motion";
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
  const frameRef = useRef<HTMLDivElement>(null);
  // In-view is measured on the outer frame, never on the animated panel: the
  // panel starts fully clipped and scaled past the frame's overflow, so an
  // IntersectionObserver on it reports "not intersecting" and the reveal
  // would never start (images stayed blank after client-side navigation).
  const inView = useInView(frameRef, { once, amount: 0.1 });
  // On the first paint of a hard load, PageTransition's AnimatePresence
  // (initial={false}) asks children to skip their entrance. Honour that by
  // rendering the panel unmasked, so imagery is visible in the server HTML
  // without waiting for hydration. Frozen at mount so it can't flip later.
  const presence = useContext(PresenceContext);
  const [skipEntrance] = useState(() => presence?.initial === false);

  const hiddenClip = direction === "up" ? "inset(100% 0% 0% 0%)" : "inset(0% 100% 0% 0%)";

  if (reduced || skipEntrance) {
    return <div className={cn("relative overflow-hidden", className)}>{children}</div>;
  }

  return (
    <div ref={frameRef} className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="relative h-full w-full"
        initial={{ clipPath: hiddenClip, scale: 1.08 }}
        animate={inView ? { clipPath: "inset(0% 0% 0% 0%)", scale: 1 } : { clipPath: hiddenClip, scale: 1.08 }}
        transition={{ duration: 1.1, delay, ease: [0.65, 0, 0.35, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
