"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { PlaceholderImage } from "@/types/image";

interface BeforeAfterSliderProps {
  before: PlaceholderImage;
  after: PlaceholderImage;
}

export function BeforeAfterSlider({ before, after }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  function updateFromClientX(clientX: number) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }

  return (
    <section className="bg-cream py-24 lg:py-32" aria-label="Before and after comparison">
      <Container>
        <SectionHeading
          eyebrow="Before & After"
          title="Drag to compare"
          description="See the transformation for yourself — drag the handle to move between before and after."
        />

        <div
          ref={containerRef}
          className="relative mt-12 aspect-[16/10] w-full touch-none select-none overflow-hidden rounded-sm"
          onPointerDown={(e) => {
            e.currentTarget.setPointerCapture(e.pointerId);
            updateFromClientX(e.clientX);
          }}
          onPointerMove={(e) => {
            if (e.buttons !== 1) return;
            updateFromClientX(e.clientX);
          }}
        >
          <Image src={after.src} alt={after.alt} fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
            <Image src={before.src} alt={before.alt} fill sizes="100vw" className="object-cover" />
          </div>

          <div className="absolute inset-y-0 z-10 w-0.5 bg-cream" style={{ left: `${position}%` }}>
            <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream shadow-lg">
              <MoveHorizontal size={18} className="text-charcoal" aria-hidden="true" />
            </div>
          </div>

          <span className="absolute left-4 top-4 rounded-full bg-charcoal/70 px-3 py-1 text-fluid-xs uppercase tracking-widest2 text-cream">
            Before
          </span>
          <span className="absolute right-4 top-4 rounded-full bg-charcoal/70 px-3 py-1 text-fluid-xs uppercase tracking-widest2 text-cream">
            After
          </span>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label="Before and after comparison slider"
          className="mt-4 w-full accent-terracotta"
        />
      </Container>
    </section>
  );
}
