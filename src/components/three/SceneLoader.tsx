"use client";

import dynamic from "next/dynamic";
import { CanvasFallbackImage } from "@/components/three/CanvasFallbackImage";
import { HotspotOverlay } from "@/components/three/HotspotOverlay";
import { useShouldRender3D } from "@/hooks/useDeviceCapability";
import { useInViewport } from "@/hooks/useInViewport";
import type { MaterialKey, LightingMode } from "@/components/three/house-config";

interface SceneLoaderProps {
  variant: "hero" | "signature";
  materialKey?: MaterialKey;
  lighting?: LightingMode;
  className?: string;
  /** Only meaningful for the "signature" variant — the 3D scene renders its own in-canvas hotspots, so the DOM overlay is only needed for the static fallback. */
  showHotspotsOnFallback?: boolean;
}

const HouseScene = dynamic(() => import("@/components/three/HouseScene").then((mod) => mod.HouseScene), {
  ssr: false,
  loading: () => null,
});

/**
 * Sole gatekeeper for the 3D layer: decides between the real WebGL scene and
 * the static fallback based on reduced motion, mobile/low-power heuristics,
 * WebGL support, and viewport visibility (paused/unmounted off-screen).
 */
export function SceneLoader({ variant, materialKey, lighting, className, showHotspotsOnFallback }: SceneLoaderProps) {
  const canRender3d = useShouldRender3D();
  const { ref, inViewport } = useInViewport<HTMLDivElement>({ rootMargin: "150px" });

  return (
    <div ref={ref} className={className}>
      {canRender3d ? (
        inViewport && (
          <HouseScene variant={variant} materialKey={materialKey ?? "render"} lighting={lighting ?? "day"} />
        )
      ) : (
        <>
          <CanvasFallbackImage className="relative h-full w-full" />
          {showHotspotsOnFallback && <HotspotOverlay />}
        </>
      )}
    </div>
  );
}
