"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { gsap, registerGsap } from "@/lib/animation/gsap";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { cn } from "@/lib/utils";

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

/** Scroll-scrubbed vertical parallax. Disabled entirely under reduced motion. */
export function ParallaxLayer({ children, speed = 0.15, className }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotionSafe();

  useEffect(() => {
    if (reduced || !ref.current) return;
    registerGsap();

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        y: () => window.innerHeight * speed,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    });

    return () => ctx.revert();
  }, [reduced, speed]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}
