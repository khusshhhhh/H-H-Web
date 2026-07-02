"use client";

import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { useIsMobile } from "@/hooks/useMediaQuery";

let webglSupportCache: boolean | null = null;

function supportsWebGL(): boolean {
  if (webglSupportCache !== null) return webglSupportCache;
  try {
    const canvas = document.createElement("canvas");
    webglSupportCache = Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    webglSupportCache = false;
  }
  return webglSupportCache;
}

/**
 * Single capability gate for all 3D scenes: false under reduced motion, when
 * WebGL is unavailable, or on mobile devices with a low core count. Safe to
 * call directly during render — WebGL support is cached after first check
 * and defaults to false during SSR (no `document` available).
 */
export function useShouldRender3D(): boolean {
  const reduced = useReducedMotionSafe();
  const isMobile = useIsMobile();
  const lowPower = typeof navigator !== "undefined" && navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 4;

  return !reduced && supportsWebGL() && !(isMobile && lowPower);
}
