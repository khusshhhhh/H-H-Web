"use client";

import { useMemo } from "react";
import * as THREE from "three";
import { MATERIAL_OPTIONS, type MaterialKey } from "@/components/three/house-config";

interface ProceduralHouseProps {
  materialKey: MaterialKey;
  wireframeOnly?: boolean;
  opacity?: number;
  windowGlow?: number;
}

const materialColor = (key: MaterialKey) => MATERIAL_OPTIONS.find((m) => m.key === key)?.swatch ?? "#EDE8DD";

/**
 * Parametric, primitive-based house massing — an abstract architectural form
 * rather than a literal GLB model, per the brief's "lightweight procedural
 * placeholder" guidance. Swap for a real GLB by replacing this component's
 * contents; see README "3D model replacement" for details.
 */
export function ProceduralHouse({ materialKey, wireframeOnly = false, opacity = 1, windowGlow = 0.15 }: ProceduralHouseProps) {
  const bodyMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: materialColor(materialKey),
        roughness: materialKey === "render" ? 0.85 : 0.6,
        metalness: 0.05,
        transparent: opacity < 1,
        opacity,
      }),
    [materialKey, opacity],
  );

  const roofMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#171717", roughness: 0.5, transparent: opacity < 1, opacity }),
    [opacity],
  );

  const glassMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#0d1414",
        emissive: "#A8583C",
        emissiveIntensity: windowGlow,
        roughness: 0.2,
        metalness: 0.3,
        transparent: opacity < 1,
        opacity,
      }),
    [opacity, windowGlow],
  );

  const edgesColor = "#F3F0E9";

  return (
    <group position={[0, -0.4, 0]}>
      {/* plinth */}
      <mesh position={[0, 0.05, 0]} receiveShadow>
        <boxGeometry args={[4.4, 0.1, 3.2]} />
        {wireframeOnly ? <meshBasicMaterial color={edgesColor} wireframe /> : <primitive object={bodyMaterial} attach="material" />}
      </mesh>

      {/* main massing volume */}
      <mesh position={[-0.2, 0.95, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 1.7, 2.2]} />
        {wireframeOnly ? <meshBasicMaterial color={edgesColor} wireframe /> : <primitive object={bodyMaterial} attach="material" />}
      </mesh>

      {/* secondary wing (asymmetric) */}
      <mesh position={[1.9, 0.6, 0.5]} castShadow receiveShadow>
        <boxGeometry args={[1.3, 1.0, 1.4]} />
        {wireframeOnly ? <meshBasicMaterial color={edgesColor} wireframe /> : <primitive object={bodyMaterial} attach="material" />}
      </mesh>

      {/* mono-pitch roof over main volume */}
      <mesh position={[-0.2, 1.85, 0]} rotation={[0, 0, THREE.MathUtils.degToRad(2)]} castShadow>
        <boxGeometry args={[3.5, 0.12, 2.5]} />
        {wireframeOnly ? <meshBasicMaterial color={edgesColor} wireframe /> : <primitive object={roofMaterial} attach="material" />}
      </mesh>

      {/* window insets on main volume front face */}
      {!wireframeOnly && (
        <>
          <mesh position={[-1.1, 0.95, 1.11]}>
            <planeGeometry args={[0.7, 1.0]} />
            <primitive object={glassMaterial} attach="material" />
          </mesh>
          <mesh position={[0.1, 0.95, 1.11]}>
            <planeGeometry args={[0.9, 1.0]} />
            <primitive object={glassMaterial} attach="material" />
          </mesh>
        </>
      )}
    </group>
  );
}
