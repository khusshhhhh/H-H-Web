"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ProceduralHouse } from "@/components/three/ProceduralHouse";

interface HouseMassingProps {
  stage: number;
}

/**
 * Wireframe-to-solid morph for the Philosophy section: two overlapping
 * ProceduralHouse instances (wireframe + solid) cross-fade via opacity as
 * `stage` advances through structure -> material -> light -> landscape,
 * avoiding expensive true vertex morphing while still reading as "wireframe
 * becomes finished form."
 */
export function HouseMassing({ stage }: HouseMassingProps) {
  const solidOpacity = stage >= 1 ? 1 : 0;
  const wireOpacity = stage >= 1 ? 0 : 1;
  const windowGlow = stage >= 2 ? 0.9 : 0.05;

  return (
    <Canvas dpr={[1, 1.5]} camera={{ position: [4.5, 2.2, 5], fov: 34 }} gl={{ antialias: true, powerPreference: "low-power" }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 6, 3]} intensity={stage >= 1 ? 1.1 : 0.4} />

        <ProceduralHouse materialKey="render" wireframeOnly opacity={wireOpacity} />
        <ProceduralHouse materialKey="render" opacity={solidOpacity} windowGlow={windowGlow} />

        {stage >= 3 && <LandscapeProps />}
      </Suspense>
    </Canvas>
  );
}

function LandscapeProps() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.42, 0]}>
        <circleGeometry args={[4.5, 32]} />
        <meshStandardMaterial color="#68766B" roughness={1} />
      </mesh>
      <mesh position={[-2.6, 0.6, 1.4]}>
        <coneGeometry args={[0.5, 1.6, 8]} />
        <meshStandardMaterial color="#3E4740" roughness={1} />
      </mesh>
      <mesh position={[3.1, 0.4, -1]}>
        <coneGeometry args={[0.4, 1.2, 8]} />
        <meshStandardMaterial color="#3E4740" roughness={1} />
      </mesh>
    </group>
  );
}
