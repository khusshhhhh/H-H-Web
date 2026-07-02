"use client";

import { motion } from "framer-motion";
import { Sun, Mountain, DoorOpen, Waves, ClipboardCheck, Leaf } from "lucide-react";
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
