"use client";

import { createContext, useContext, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import { useLenisScrollTrigger } from "@/hooks/useLenisScrollTrigger";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
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
  const lenisRef = useLenisScrollTrigger(!reduced);
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
