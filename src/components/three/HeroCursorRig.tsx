"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";
import * as THREE from "three";

/** Lerps gentle rotation toward the normalized pointer position — cheap, no controls library needed for the hero. */
export function HeroCursorRig({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const targetY = state.pointer.x * 0.22;
    const targetX = state.pointer.y * -0.08;
    groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, targetY, 3, delta);
    groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, targetX, 3, delta);
  });

  return <group ref={groupRef}>{children}</group>;
}
