"use client";

import { useEffect } from "react";
import { useLenis } from "@/components/motion/LenisProvider";

/** Locks scroll (native + Lenis) while a modal/drawer/menu overlay is open. */
export function useLockBodyScroll(locked: boolean) {
  const { stop, start } = useLenis();

  useEffect(() => {
    if (!locked) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    stop();

    return () => {
      document.body.style.overflow = originalOverflow;
      start();
    };
  }, [locked, stop, start]);
}
