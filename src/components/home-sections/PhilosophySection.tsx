"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger, registerGsap } from "@/lib/animation/gsap";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { useIsMobile } from "@/hooks/useMediaQuery";
import { Label } from "@/components/ui/Label";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { PhilosophyMassingDiagram } from "@/components/home-sections/PhilosophyMassingDiagram";
import { cn } from "@/lib/utils";

const STAGES = [
  {
    title: "Designed around people",
    body: "Every brief starts with how a household actually moves through a day — not a template floor plan. Room adjacencies, sightlines and quiet zones are worked out before a single material is chosen.",
    image: { src: "/images/home/philosophy-1.jpg", alt: "Calm living room with a low sofa, pendant lights and soft daylight" },
  },
  {
    title: "Responsive to place",
    body: "Orientation, slope and prevailing breeze shape the massing long before the facade does. A home tuned to its site performs better and costs less to run for as long as you own it.",
    image: { src: "/images/home/philosophy-2.jpg", alt: "River red gum on a green South Australian hillside" },
  },
  {
    title: "Built with precision",
    body: "Documentation is developed to a standard that leaves little room for on-site interpretation — so what's approved is what gets built, and what gets built is what you priced.",
    image: { src: "/images/home/philosophy-3.jpg", alt: "Hand drawing a floor plan in ink" },
  },
  {
    title: "Made to endure",
    body: "Material choices are weighed against Adelaide's climate and forty years of maintenance, not just the day of handover. Longevity is a design decision, made early.",
    image: { src: "/images/home/philosophy-4.jpg", alt: "Weathered charred-timber cladding around tall narrow windows" },
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
          <Label className="mb-8 block text-terracotta-text">Our Philosophy</Label>
          <div className="grid grid-cols-1 gap-16 sm:grid-cols-2">
            {STAGES.map((stage, index) => (
              <ScrollReveal key={stage.title} delay={index * 0.05}>
                <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-sm bg-charcoal">
                  <Image
                    src={stage.image.src}
                    alt={stage.image.alt}
                    fill
                    sizes="(min-width: 640px) 45vw, 90vw"
                    className="object-cover"
                  />
                  <span className="absolute left-4 top-4 font-display text-fluid-lg text-cream">0{index + 1}</span>
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
      {/* Oversized stage numeral sitting behind the copy */}
      <span
        className="pointer-events-none absolute -left-6 bottom-[-6vw] select-none font-display text-[34vw] leading-none text-charcoal/[0.045]"
        aria-hidden="true"
      >
        0{activeStage + 1}
      </span>

      <div className="relative mx-auto flex h-full max-w-[90rem] flex-col justify-center px-6 lg:flex-row lg:items-center lg:gap-20 lg:px-12">
        <div className="lg:w-[46%]">
          <Label className="mb-8 block text-terracotta-text">Our Philosophy</Label>
          <div className="relative">
            {STAGES.map((stage, index) => (
              <div
                key={stage.title}
                className={cn(
                  "transition-all duration-700 ease-editorial",
                  activeStage === index
                    ? "relative translate-y-0 opacity-100"
                    : "pointer-events-none absolute inset-x-0 top-0 translate-y-4 opacity-0",
                )}
                aria-hidden={activeStage !== index}
              >
                <h3 className="max-w-lg font-display text-fluid-3xl leading-[1] text-charcoal text-balance">{stage.title}</h3>
                <p className="mt-6 max-w-md text-fluid-base leading-relaxed text-charcoal/70">{stage.body}</p>
              </div>
            ))}
          </div>

          <ol className="mt-12 flex max-w-md gap-3" aria-label="Philosophy stages">
            {STAGES.map((stage, index) => (
              <li key={stage.title} className="flex-1">
                <span
                  className={cn(
                    "block h-px w-full transition-colors duration-700 ease-editorial",
                    index <= activeStage ? "bg-terracotta" : "bg-charcoal/15",
                  )}
                />
                <span
                  className={cn(
                    "mt-3 block text-fluid-xs tabular-nums tracking-widest2 transition-colors duration-500",
                    index === activeStage ? "text-charcoal" : "text-charcoal/35",
                  )}
                >
                  0{index + 1}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative mt-14 flex justify-center lg:mt-0 lg:w-[54%] lg:justify-end">
          <div className="relative aspect-[4/5] h-[68vh] max-h-[720px] overflow-hidden rounded-sm bg-charcoal">
            {STAGES.map((stage, index) => (
              <div
                key={stage.image.src}
                className="absolute inset-0 transition-[clip-path] duration-[1100ms] ease-editorial"
                style={{ clipPath: index <= activeStage ? "inset(0% 0% 0% 0%)" : "inset(100% 0% 0% 0%)" }}
              >
                <Image
                  src={stage.image.src}
                  alt={stage.image.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className={cn(
                    "object-cover transition-transform duration-[1600ms] ease-editorial",
                    index === activeStage ? "scale-100" : "scale-110",
                  )}
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/45 via-transparent to-transparent" />
          </div>

          {/* Drawing card overlapping the photograph — the massing diagram builds as the stages advance */}
          <div className="absolute -bottom-6 left-0 hidden w-52 border border-charcoal/10 bg-cream p-4 shadow-[0_24px_60px_-30px_rgba(23,23,23,0.45)] lg:block xl:left-6 xl:w-60">
            <PhilosophyMassingDiagram stage={activeStage} />
            <p className="mt-2 flex items-center justify-between text-[0.65rem] uppercase tracking-widest2 text-charcoal/50">
              <span>Massing study</span>
              <span className="tabular-nums">
                0{activeStage + 1}/0{STAGES.length}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
