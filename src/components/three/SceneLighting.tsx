"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { LightingMode } from "@/components/three/house-config";

interface SceneLightingProps {
  mode: LightingMode;
}

/** Day/evening lighting rig — cross-fades intensity and colour rather than cutting instantly. */
export function SceneLighting({ mode }: SceneLightingProps) {
  const ambientRef = useRef<THREE.AmbientLight>(null);
  const sunRef = useRef<THREE.DirectionalLight>(null);
  const warmRef = useRef<THREE.PointLight>(null);

  const targetAmbient = mode === "day" ? 0.75 : 0.22;
  const targetSun = mode === "day" ? 1.3 : 0.15;
  const targetWarm = mode === "day" ? 0 : 1.4;

  useFrame((_, delta) => {
    const lerp = (current: number, target: number) => THREE.MathUtils.damp(current, target, 4, delta);

    if (ambientRef.current) ambientRef.current.intensity = lerp(ambientRef.current.intensity, targetAmbient);
    if (sunRef.current) sunRef.current.intensity = lerp(sunRef.current.intensity, targetSun);
    if (warmRef.current) warmRef.current.intensity = lerp(warmRef.current.intensity, targetWarm);
  });

  return (
    <>
      <ambientLight ref={ambientRef} intensity={0.75} color="#F3F0E9" />
      <directionalLight
        ref={sunRef}
        position={[4, 6, 3]}
        intensity={1.3}
        color="#FFF6E8"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight ref={warmRef} position={[-1.1, 1.2, 1.6]} intensity={0} color="#A8583C" distance={4} />
      <hemisphereLight args={["#C9D6DA", "#3E4740", 0.35]} />
    </>
  );
}
