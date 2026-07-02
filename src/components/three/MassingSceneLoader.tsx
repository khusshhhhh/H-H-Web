"use client";

import dynamic from "next/dynamic";
import { useShouldRender3D } from "@/hooks/useDeviceCapability";
import { useInViewport } from "@/hooks/useInViewport";
import { PhilosophyMassingDiagram } from "@/components/home-sections/PhilosophyMassingDiagram";

interface MassingSceneLoaderProps {
  stage: number;
  className?: string;
}

const HouseMassing = dynamic(() => import("@/components/three/HouseMassing").then((mod) => mod.HouseMassing), {
  ssr: false,
  loading: () => null,
});

export function MassingSceneLoader({ stage, className }: MassingSceneLoaderProps) {
  const canRender3d = useShouldRender3D();
  const { ref, inViewport } = useInViewport<HTMLDivElement>({ rootMargin: "150px" });

  return (
    <div ref={ref} className={className}>
      {canRender3d ? inViewport && <HouseMassing stage={stage} /> : <PhilosophyMassingDiagram stage={stage} />}
    </div>
  );
}
