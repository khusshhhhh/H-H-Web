"use client";

import { createContext, useContext, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import { useLenisScrollTrigger } from "@/hooks/useLenisScrollTrigger";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { useIsMobile } from "@/hooks/useMediaQuery";
import { ScrollTrigger } from "@/lib/animation/gsap";

interface LenisContextValue {
  stop: () => void;
  start: () => void;
}

const LenisContext = createContext<LenisContextValue>({
  stop: () => {},
  start: () => {},
});

export function useLenis() {
  return useContext(LenisContext);
}

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotionSafe();
  const isMobile = useIsMobile();
  // Lenis re-implements scrolling via JS easing, tuned for mouse-wheel input.
  // On touch devices it adds ticker/ScrollTrigger overhead on every frame for
  // no benefit — native touch scrolling is already smooth and more
  // responsive than a JS-driven approximation of it. Skip Lenis entirely on
  // mobile/touch and let the browser handle scrolling natively; GSAP
  // ScrollTrigger works fine against native scroll with no proxy set up.
  const lenisRef = useLenisScrollTrigger(!reduced && !isMobile);
  const pathname = usePathname();

  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true });
    ScrollTrigger.refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const value = useMemo<LenisContextValue>(
    () => ({
      stop: () => lenisRef.current?.stop(),
      start: () => lenisRef.current?.start(),
    }),
    [lenisRef],
  );

  return <LenisContext.Provider value={value}>{children}</LenisContext.Provider>;
}
