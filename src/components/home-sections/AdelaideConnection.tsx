"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sun, Mountain, DoorOpen, Waves, ClipboardCheck, Leaf, ArrowUpRight } from "lucide-react";
import { serviceAreas } from "@/content/areas";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

const TOPICS = [
  {
    icon: Sun,
    title: "Built for the climate",
    body: "Hot, dry summers and mild winters shape orientation, glazing and shading decisions from the first sketch.",
  },
  {
    icon: Mountain,
    title: "Sourced from South Australia",
    body: "Long-standing relationships with Adelaide trades and suppliers, from stone yards to joinery workshops.",
  },
  {
    icon: DoorOpen,
    title: "Designed to open up",
    body: "Indoor and outdoor living are planned together, not bolted on — screens, eaves and courtyards that earn their keep.",
  },
  {
    icon: Waves,
    title: "Coast to foothills",
    body: "From salt air at Henley Beach to bushfire-rated sites in the Hills, each landscape asks for a different response.",
  },
  {
    icon: ClipboardCheck,
    title: "Fluent in local planning",
    body: "Heritage overlays, character precincts and council requirements are understood at site assessment, not discovered mid-build.",
  },
  {
    icon: Leaf,
    title: "Efficient by design",
    body: "Thermal mass, insulation and cross-ventilation are specified to perform — reducing running costs long after handover.",
  },
];

export function AdelaideConnection() {
  const reduced = useReducedMotionSafe();

  return (
    <section className="relative overflow-hidden bg-sandstone/25 py-28 lg:py-36" aria-label="Our connection to Adelaide">
      <TopographicBackground animate={!reduced} />

      <Container className="relative">
        <SectionHeading
          eyebrow="Local Knowledge"
          title="Shaped by Adelaide, from the foothills to the coast"
          description="South Australia's climate and geography are not a backdrop to our work — they're the starting brief for every project."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {TOPICS.map((topic, index) => (
            <ScrollReveal key={topic.title} delay={index * 0.05}>
              <topic.icon size={26} className="text-terracotta-text" aria-hidden="true" />
              <h3 className="mt-4 font-display text-fluid-lg text-charcoal">{topic.title}</h3>
              <p className="mt-2 max-w-xs text-fluid-sm leading-relaxed text-charcoal/65">{topic.body}</p>
            </ScrollReveal>
          ))}
        </div>

        <ul className="mt-20 grid grid-cols-2 gap-4 lg:mt-24 lg:grid-cols-4 lg:gap-6" role="list" aria-label="Regions we build in">
          {serviceAreas.map((area, index) => (
            <ScrollReveal as="li" key={area.slug} delay={index * 0.06} className={index % 2 === 1 ? "lg:mt-12" : undefined}>
              <Link href="/areas" className="group relative block aspect-[3/4] overflow-hidden rounded-sm bg-charcoal">
                <Image
                  src={area.image.src}
                  alt={area.image.alt}
                  fill
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  className="object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.07]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />
                <span className="absolute left-4 top-4 text-[0.65rem] tabular-nums tracking-widest2 text-cream/80">0{index + 1}</span>
                <ArrowUpRight
                  size={18}
                  className="absolute right-4 top-4 text-cream opacity-0 transition-all duration-500 ease-editorial group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-4 bottom-4">
                  <p className="font-display text-fluid-lg leading-tight text-cream">{area.name}</p>
                  <p className="mt-1 text-[0.65rem] uppercase tracking-widest2 text-cream/60">
                    {area.suburbs.slice(0, 2).join(" · ")}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function TopographicBackground({ animate }: { animate: boolean }) {
  const lines = [40, 90, 140, 190, 240, 290, 340];

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
      viewBox="0 0 1200 400"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {lines.map((y, index) => (
        <motion.path
          key={y}
          d={`M -100 ${y} Q 150 ${y - 50}, 300 ${y} T 600 ${y} T 900 ${y} T 1300 ${y}`}
          fill="none"
          stroke="#68766B"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0, x: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.5, x: animate ? [0, -20, 0] : 0 }}
          viewport={{ once: true }}
          transition={{
            pathLength: { duration: 1.8, delay: index * 0.08, ease: "easeOut" },
            opacity: { duration: 1.8, delay: index * 0.08, ease: "easeOut" },
            x: animate
              ? { duration: 14 + index, repeat: Infinity, ease: "easeInOut", delay: index * 0.08 }
              : { duration: 0 },
          }}
        />
      ))}
    </svg>
  );
}
