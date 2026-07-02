"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows } from "@react-three/drei";
import { ProceduralHouse } from "@/components/three/ProceduralHouse";
import { SceneLighting } from "@/components/three/SceneLighting";
import { HotspotMarker3D } from "@/components/three/HotspotMarker3D";
import { HeroCursorRig } from "@/components/three/HeroCursorRig";
import type { LightingMode, MaterialKey } from "@/components/three/house-config";

interface HouseSceneProps {
  variant: "hero" | "signature";
  materialKey: MaterialKey;
  lighting: LightingMode;
}

export function HouseScene({ variant, materialKey, lighting }: HouseSceneProps) {
  const isHero = variant === "hero";

  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      gl={{ antialias: true, powerPreference: "low-power" }}
      camera={{ position: isHero ? [5.5, 2.8, 6.5] : [5, 2.4, 5.8], fov: 32 }}
    >
      <color attach="background" args={["#171717"]} />
      <Suspense fallback={null}>
        <SceneLighting mode={lighting} />

        {isHero ? (
          <HeroCursorRig>
            <ProceduralHouse materialKey={materialKey} />
          </HeroCursorRig>
        ) : (
          <>
            <ProceduralHouse materialKey={materialKey} />
            <HotspotMarker3D />
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              minAzimuthAngle={-Math.PI / 4}
              maxAzimuthAngle={Math.PI / 4}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 2.15}
              makeDefault
            />
          </>
        )}

        <ContactShadows position={[0, -0.42, 0]} opacity={0.45} scale={12} blur={2.2} far={4} />
      </Suspense>
    </Canvas>
  );
}
