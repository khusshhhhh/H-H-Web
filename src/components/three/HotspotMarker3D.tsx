"use client";

import { useState } from "react";
import { Html } from "@react-three/drei";
import { Plus } from "lucide-react";
import { HOTSPOTS } from "@/components/three/house-config";
import { cn } from "@/lib/utils";

/** In-canvas hotspot markers using drei's <Html> — real, focusable DOM buttons anchored to 3D positions. */
export function HotspotMarker3D() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <>
      {HOTSPOTS.map((hotspot) => (
        <Html key={hotspot.id} position={hotspot.position3d} center distanceFactor={8}>
          <button
            type="button"
            onClick={() => setActiveId(activeId === hotspot.id ? null : hotspot.id)}
            aria-expanded={activeId === hotspot.id}
            aria-label={`${activeId === hotspot.id ? "Hide" : "Show"} information about ${hotspot.title}`}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full border transition-colors",
              activeId === hotspot.id
                ? "border-terracotta bg-terracotta text-cream"
                : "border-cream/70 bg-charcoal/50 text-cream backdrop-blur-sm",
            )}
          >
            <Plus size={16} className={cn("transition-transform", activeId === hotspot.id && "rotate-45")} aria-hidden="true" />
          </button>
          {activeId === hotspot.id && (
            <div className="absolute left-1/2 top-full mt-3 w-52 -translate-x-1/2 rounded-sm bg-charcoal p-4 text-left shadow-xl">
              <p className="font-display text-fluid-sm text-cream">{hotspot.title}</p>
              <p className="mt-1.5 text-fluid-xs leading-relaxed text-cream/70">{hotspot.description}</p>
            </div>
          )}
        </Html>
      ))}
    </>
  );
}
