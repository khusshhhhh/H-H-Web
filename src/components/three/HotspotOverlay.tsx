"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { HOTSPOTS } from "@/components/three/house-config";
import { cn } from "@/lib/utils";

export function HotspotOverlay() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="absolute inset-0">
      {HOTSPOTS.map((hotspot) => {
        const isActive = activeId === hotspot.id;
        return (
          <div key={hotspot.id} className="absolute" style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}>
            <button
              type="button"
              onClick={() => setActiveId(isActive ? null : hotspot.id)}
              aria-expanded={isActive}
              aria-label={`${isActive ? "Hide" : "Show"} information about ${hotspot.title}`}
              className={cn(
                "relative flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition-colors",
                isActive ? "border-terracotta bg-terracotta text-cream" : "border-cream/70 bg-charcoal/40 text-cream backdrop-blur-sm",
              )}
            >
              <Plus size={16} className={cn("transition-transform", isActive && "rotate-45")} aria-hidden="true" />
              <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-cream/30" aria-hidden="true" />
            </button>

            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.25 }}
                  className="absolute left-1/2 top-full z-10 mt-3 w-56 -translate-x-1/2 rounded-sm bg-charcoal p-4 text-left shadow-xl"
                >
                  <p className="font-display text-fluid-sm text-cream">{hotspot.title}</p>
                  <p className="mt-1.5 text-fluid-xs leading-relaxed text-cream/70">{hotspot.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
