"use client";

import { useState } from "react";
import { ZoomIn, ZoomOut } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Illustrative abstract floor-plan diagram. Real per-project drawings don't
 * exist for these placeholder projects, so this renders a generic
 * architectural line-drawing motif rather than a mislabelled stock photo —
 * replace with the actual approved floor plan (SVG or image) per project.
 */
export function FloorPlanViewer() {
  const [zoom, setZoom] = useState(1);

  return (
    <section className="bg-sandstone/20 py-24 lg:py-32" aria-label="Floor plan">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Drawings"
            title="Illustrative floor plan"
            description="A generic diagram shown in place of final construction drawings — replace with the approved plan for this project."
          />
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => setZoom((z) => Math.max(0.7, z - 0.2))}
              aria-label="Zoom out"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/20 hover:bg-charcoal/5"
            >
              <ZoomOut size={16} />
            </button>
            <button
              type="button"
              onClick={() => setZoom((z) => Math.min(1.8, z + 0.2))}
              aria-label="Zoom in"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/20 hover:bg-charcoal/5"
            >
              <ZoomIn size={16} />
            </button>
          </div>
        </div>

        <div className="mt-10 overflow-auto rounded-sm bg-cream p-8">
          <svg
            viewBox="0 0 800 500"
            className="mx-auto transition-transform duration-300"
            style={{ width: `${zoom * 100}%`, maxWidth: "56rem" }}
            role="img"
            aria-label="Illustrative floor plan diagram showing living, kitchen, bedroom and outdoor zones"
          >
            <rect x="40" y="40" width="720" height="420" fill="none" stroke="#171717" strokeWidth="2" />
            <line x1="40" y1="220" x2="420" y2="220" stroke="#171717" strokeWidth="1.5" />
            <line x1="420" y1="40" x2="420" y2="460" stroke="#171717" strokeWidth="1.5" />
            <line x1="420" y1="300" x2="760" y2="300" stroke="#171717" strokeWidth="1.5" />
            <line x1="580" y1="300" x2="580" y2="460" stroke="#171717" strokeWidth="1.5" />

            <text x="70" y="140" className="fill-charcoal/60 text-[16px] uppercase tracking-widest2">Living</text>
            <text x="70" y="350" className="fill-charcoal/60 text-[16px] uppercase tracking-widest2">Kitchen</text>
            <text x="460" y="90" className="fill-charcoal/60 text-[16px] uppercase tracking-widest2">Bedroom 1</text>
            <text x="460" y="270" className="fill-charcoal/60 text-[16px] uppercase tracking-widest2">Bedroom 2</text>
            <text x="610" y="360" className="fill-charcoal/60 text-[16px] uppercase tracking-widest2">Bath</text>
            <text x="460" y="420" className="fill-charcoal/60 text-[16px] uppercase tracking-widest2">Outdoor</text>

            <rect x="60" y="450" width="80" height="6" fill="#A8583C" />
            <text x="150" y="457" className="fill-charcoal/50 text-[12px]">Approx. 1m</text>
          </svg>
        </div>
      </Container>
    </section>
  );
}
