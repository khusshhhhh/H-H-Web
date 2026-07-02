"use client";

import { useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import { usePointerFine } from "@/hooks/useMediaQuery";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

interface MagneticOptions {
  strength?: number;
}

/**
 * Pointer-follow "magnetic" offset for buttons/links. No-ops on touch
 * devices (pointer: coarse) and under reduced motion, per the brief's
 * "magnetic buttons only on pointer devices" requirement.
 */
export function useMagnetic({ strength = 0.35 }: MagneticOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  const isPointerFine = usePointerFine();
  const reduced = useReducedMotionSafe();
  const enabled = isPointerFine && !reduced;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (!enabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = event.clientX - (rect.left + rect.width / 2);
    const relY = event.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, x: springX, y: springY, handlePointerMove, handlePointerLeave, enabled };
}
