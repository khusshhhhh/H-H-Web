"use client";

import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SceneLoader } from "@/components/three/SceneLoader";
import { MATERIAL_OPTIONS } from "@/components/three/house-config";
import type { MaterialKey, LightingMode } from "@/components/three/house-config";
import { cn } from "@/lib/utils";

export function SignatureHouse() {
  const [materialKey, setMaterialKey] = useState<MaterialKey>("render");
  const [lighting, setLighting] = useState<LightingMode>("day");

  return (
    <section className="bg-cream py-28 lg:py-36" aria-label="Interactive house exploration">
      <Container>
        <SectionHeading
          eyebrow="Explore The Detail"
          title="A closer look at how we build"
          description="An illustrative model — rotate, change the exterior material and switch lighting to see how a Hills & Harbour home is put together. Hotspots point to facade, materials, energy efficiency and landscape decisions."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-charcoal lg:col-span-8">
            <SceneLoader
              variant="signature"
              materialKey={materialKey}
              lighting={lighting}
              showHotspotsOnFallback
              className="relative h-full w-full"
            />
          </div>

          <div className="lg:col-span-4">
            <div>
              <p className="mb-4 text-fluid-xs uppercase tracking-widest2 text-charcoal/50">Exterior Material</p>
              <div className="flex flex-wrap gap-3">
                {MATERIAL_OPTIONS.map((option) => (
                  <button
                    key={option.key}
                    type="button"
                    onClick={() => setMaterialKey(option.key)}
                    aria-pressed={materialKey === option.key}
                    className={cn(
                      "flex items-center gap-2.5 rounded-full border px-4 py-2 text-fluid-xs transition-colors",
                      materialKey === option.key
                        ? "border-terracotta text-charcoal"
                        : "border-charcoal/20 text-charcoal/60 hover:border-charcoal/40",
                    )}
                  >
                    <span
                      className="h-3.5 w-3.5 rounded-full border border-charcoal/20"
                      style={{ backgroundColor: option.swatch }}
                      aria-hidden="true"
                    />
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <p className="mb-4 text-fluid-xs uppercase tracking-widest2 text-charcoal/50">Lighting</p>
              <div className="inline-flex rounded-full border border-charcoal/20 p-1">
                <button
                  type="button"
                  onClick={() => setLighting("day")}
                  aria-pressed={lighting === "day"}
                  className={cn(
                    "flex items-center gap-2 rounded-full px-4 py-2 text-fluid-xs transition-colors",
                    lighting === "day" ? "bg-charcoal text-cream" : "text-charcoal/60",
                  )}
                >
                  <Sun size={14} aria-hidden="true" /> Day
                </button>
                <button
                  type="button"
                  onClick={() => setLighting("evening")}
                  aria-pressed={lighting === "evening"}
                  className={cn(
                    "flex items-center gap-2 rounded-full px-4 py-2 text-fluid-xs transition-colors",
                    lighting === "evening" ? "bg-charcoal text-cream" : "text-charcoal/60",
                  )}
                >
                  <Moon size={14} aria-hidden="true" /> Evening
                </button>
              </div>
            </div>

            <p className="mt-10 text-fluid-xs leading-relaxed text-charcoal/50">
              Model shown is illustrative. Final material and lighting outcomes are confirmed during selections and
              vary by site, orientation and product availability.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
