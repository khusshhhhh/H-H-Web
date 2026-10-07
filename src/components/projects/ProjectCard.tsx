"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { usePointerFine } from "@/hooks/useMediaQuery";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
  className?: string;
  /** Optional running number shown beside the title, e.g. the card's position in a grid. */
  index?: number;
}

export function ProjectCard({ project, priority = false, className, index }: ProjectCardProps) {
  const isPortrait = project.orientation === "portrait";
  const pointerFine = usePointerFine();
  const reduced = useReducedMotionSafe();
  const followCursor = pointerFine && !reduced;
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 26, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 260, damping: 26, mass: 0.5 });

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn("group block", className)}
      aria-label={`View ${project.name} in ${project.suburb}`}
    >
      <MaskReveal className={isPortrait ? "aspect-[3/4]" : "aspect-[4/3]"}>
        <div
          className={cn("relative h-full w-full overflow-hidden bg-charcoal", followCursor && "cursor-none")}
          onPointerEnter={(event) => {
            handlePointerMove(event);
            setHovered(true);
          }}
          onPointerMove={handlePointerMove}
          onPointerLeave={() => setHovered(false)}
        >
          <ParallaxLayer speed={0.05} className="absolute -inset-y-10 inset-x-0">
            <Image
              src={project.cardImage.src}
              alt={project.cardImage.alt}
              fill
              preload={priority}
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.06]"
            />
          </ParallaxLayer>
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/0 to-charcoal/0 opacity-70 transition-opacity duration-500 group-hover:opacity-95" />

          <span className="absolute left-5 top-5 rounded-full border border-cream/30 bg-charcoal/30 px-3.5 py-1.5 text-[0.65rem] uppercase tracking-widest2 text-cream backdrop-blur-sm">
            {project.category}
          </span>

          <p className="absolute inset-x-5 bottom-5 translate-y-3 text-fluid-sm leading-snug text-cream/90 opacity-0 transition-all duration-500 ease-editorial group-hover:translate-y-0 group-hover:opacity-100">
            {project.scope}
          </p>

          {followCursor ? (
            <motion.span
              className="pointer-events-none absolute left-0 top-0 flex h-24 w-24 items-center justify-center rounded-full bg-terracotta text-[0.65rem] uppercase tracking-widest2 text-cream"
              style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
              animate={{ scale: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
              aria-hidden="true"
            >
              View
            </motion.span>
          ) : (
            <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-cream/90">
              <ArrowUpRight size={18} className="text-charcoal" aria-hidden="true" />
            </div>
          )}
        </div>
      </MaskReveal>

      <div className="mt-5 flex items-start justify-between gap-4 border-t border-charcoal/10 pt-5">
        <div className="flex gap-5">
          {index !== undefined && (
            <span className="pt-1.5 text-fluid-xs tabular-nums tracking-widest2 text-terracotta-text">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
          <div>
            <h3 className="font-display text-fluid-lg text-charcoal transition-colors group-hover:text-terracotta-text">
              {project.name}
            </h3>
            <p className="mt-1 text-fluid-sm text-charcoal/60">
              {project.suburb} &middot; {project.sizeSqm}m&sup2;
            </p>
          </div>
        </div>
        <span className="whitespace-nowrap pt-1.5 text-fluid-xs uppercase tracking-widest2 text-charcoal/45">
          {project.year}
        </span>
      </div>
    </Link>
  );
}
