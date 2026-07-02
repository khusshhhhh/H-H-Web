"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger, registerGsap } from "@/lib/animation/gsap";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { useIsMobile } from "@/hooks/useMediaQuery";
import { Label } from "@/components/ui/Label";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { PhilosophyMassingDiagram } from "@/components/home-sections/PhilosophyMassingDiagram";
import { MassingSceneLoader } from "@/components/three/MassingSceneLoader";
import { cn } from "@/lib/utils";

const STAGES = [
  {
    title: "Designed around people",
    body: "Every brief starts with how a household actually moves through a day — not a template floor plan. Room adjacencies, sightlines and quiet zones are worked out before a single material is chosen.",
  },
  {
    title: "Responsive to place",
    body: "Orientation, slope and prevailing breeze shape the massing long before the facade does. A home tuned to its site performs better and costs less to run for as long as you own it.",
  },
  {
    title: "Built with precision",
    body: "Documentation is developed to a standard that leaves little room for on-site interpretation — so what's approved is what gets built, and what gets built is what you priced.",
  },
  {
    title: "Made to endure",
    body: "Material choices are weighed against Adelaide's climate and forty years of maintenance, not just the day of handover. Longevity is a design decision, made early.",
  },
];

export function PhilosophySection() {
  const reduced = useReducedMotionSafe();
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    if (reduced || isMobile || !sectionRef.current) return;
    registerGsap();

    const ctx = gsap.context(() => {
      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${STAGES.length * 70}%`,
        pin: true,
        scrub: 0.4,
        onUpdate: (self) => {
          const stage = Math.min(STAGES.length - 1, Math.floor(self.progress * STAGES.length));
          setActiveStage(stage);
        },
      });

      return () => trigger.kill();
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced, isMobile]);

  if (reduced || isMobile) {
    return (
      <section className="bg-cream py-24" aria-label="Our design philosophy">
        <div className="mx-auto max-w-6xl px-6">
          <Label className="mb-4 block text-terracotta-text">Our Philosophy</Label>
          <div className="grid grid-cols-1 gap-16 sm:grid-cols-2">
            {STAGES.map((stage, index) => (
              <ScrollReveal key={stage.title} delay={index * 0.05}>
                <div className="mb-6 aspect-[4/3] w-full max-w-xs">
                  <PhilosophyMassingDiagram stage={index} />
                </div>
                <h3 className="font-display text-fluid-xl text-charcoal">{stage.title}</h3>
                <p className="mt-3 max-w-sm text-fluid-base text-charcoal/70">{stage.body}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-cream" aria-label="Our design philosophy">
      <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-12">
        <div className="lg:w-1/2">
          <Label className="mb-6 block text-terracotta-text">Our Philosophy</Label>
          {STAGES.map((stage, index) => (
            <div
              key={stage.title}
              className={cn(
                "transition-opacity duration-500",
                activeStage === index ? "relative opacity-100" : "pointer-events-none absolute opacity-0",
              )}
              aria-hidden={activeStage !== index}
            >
              <span className="mb-3 block text-fluid-xs uppercase tracking-widest2 text-charcoal/40">
                0{index + 1} / 0{STAGES.length}
              </span>
              <h3 className="max-w-lg font-display text-fluid-2xl leading-[1.05] text-charcoal text-balance">
                {stage.title}
              </h3>
              <p className="mt-5 max-w-md text-fluid-base leading-relaxed text-charcoal/70">{stage.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex items-center justify-center lg:mt-0 lg:w-1/2">
          <MassingSceneLoader stage={activeStage} className="aspect-square w-full max-w-md" />
        </div>
      </div>
    </section>
  );
}
