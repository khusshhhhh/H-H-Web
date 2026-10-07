"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { cn } from "@/lib/utils";

/** `x`/`y` position each marker over the photograph, as a percentage of the image frame. */
const DETAILS = [
  {
    title: "Facade",
    description: "A layered facade of render and timber, detailed to age gracefully in Adelaide's UV exposure.",
    x: 11,
    y: 42,
  },
  {
    title: "Materials",
    description: "Material selections are matched to orientation — durable, low-maintenance finishes on exposed faces.",
    x: 63,
    y: 47,
  },
  {
    title: "Energy Efficiency",
    description: "Double glazing, cross-ventilation and thermal mass are specified as standard, not upgrades.",
    x: 41,
    y: 62,
  },
  {
    title: "Landscape Response",
    description: "Eaves, screening and landscaping are designed together to manage sun, privacy and outlook.",
    x: 82,
    y: 60,
  },
];

export function SignatureHouse() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-cream py-28 lg:py-36" aria-label="Signature details">
      <Container>
        <SectionHeading
          eyebrow="Explore The Detail"
          title="A closer look at how we build"
          description="Four decisions that separate a considered home from a display-home default — the kind of detail that's easy to miss on a walkthrough and expensive to add afterward."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
          <MaskReveal className="relative aspect-[4/3] overflow-hidden rounded-sm bg-charcoal lg:col-span-8">
            <ParallaxLayer speed={0.06} className="absolute -inset-y-8 inset-x-0">
              <Image
                src="/images/home/signature.jpg"
                alt="Courtyard entry framed by timber battens, a stone blade wall and full-height glazing"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-charcoal/15" />

              {DETAILS.map((detail, index) => (
                <button
                  key={detail.title}
                  type="button"
                  onClick={() => setActive(index)}
                  onPointerEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  aria-label={`${detail.title}: ${detail.description}`}
                  aria-pressed={active === index}
                  className="absolute -ml-5 -mt-5 flex h-10 w-10 cursor-pointer items-center justify-center"
                  style={{ left: `${detail.x}%`, top: `${detail.y}%` }}
                >
                  <span
                    className={cn(
                      "absolute h-7 w-7 rounded-full",
                      active === index ? "animate-pin-pulse bg-terracotta" : "bg-cream/40",
                    )}
                    aria-hidden="true"
                  />
                  <span
                    className={cn(
                      "relative flex h-7 w-7 items-center justify-center rounded-full text-[0.65rem] tabular-nums transition-colors duration-300",
                      active === index ? "bg-terracotta text-cream" : "bg-cream text-charcoal",
                    )}
                  >
                    {index + 1}
                  </span>
                </button>
              ))}
            </ParallaxLayer>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden bg-gradient-to-t from-charcoal/80 to-transparent p-6 pt-20 sm:block lg:p-8 lg:pt-24">
              <p className="text-[0.65rem] uppercase tracking-widest2 text-sandstone">
                0{active + 1} — {DETAILS[active].title}
              </p>
              <p className="mt-2 max-w-md text-fluid-sm leading-relaxed text-cream/90">{DETAILS[active].description}</p>
            </div>
          </MaskReveal>

          <div className="flex flex-col lg:col-span-4">
            <ul role="list" className="border-t border-charcoal/10">
              {DETAILS.map((detail, index) => (
                <ScrollReveal as="li" key={detail.title} delay={index * 0.05} className="border-b border-charcoal/10">
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    onPointerEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    aria-pressed={active === index}
                    className="flex w-full cursor-pointer gap-5 py-6 text-left"
                  >
                    <span
                      className={cn(
                        "pt-1 text-fluid-xs tabular-nums tracking-widest2 transition-colors duration-300",
                        active === index ? "text-terracotta-text" : "text-charcoal/35",
                      )}
                    >
                      0{index + 1}
                    </span>
                    <span>
                      <span
                        className={cn(
                          "block font-display text-fluid-lg transition-colors duration-300",
                          active === index ? "text-charcoal" : "text-charcoal/55",
                        )}
                      >
                        {detail.title}
                      </span>
                      <span className="mt-1.5 block text-fluid-sm leading-relaxed text-charcoal/65">
                        {detail.description}
                      </span>
                    </span>
                  </button>
                </ScrollReveal>
              ))}
            </ul>

            <p className="mt-6 text-fluid-xs leading-relaxed text-charcoal/45">
              Imagery shown is illustrative. Final material and finish outcomes are confirmed during selections and
              vary by site, orientation and product availability.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
