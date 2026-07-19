"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { processSteps } from "@/content/process-steps";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { cn } from "@/lib/utils";

interface ProcessTimelineProps {
  variant?: "compact" | "full";
}

export function ProcessTimeline({ variant = "full" }: ProcessTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  if (variant === "compact") {
    return (
      <div className="relative" ref={containerRef}>
        <div className="no-scrollbar flex gap-6 overflow-x-auto pb-6 lg:grid lg:grid-cols-8 lg:gap-4 lg:overflow-visible">
          {processSteps.map((step) => (
            <div key={step.slug} className="min-w-[220px] flex-1 lg:min-w-0">
              <span className="mb-3 block text-fluid-xs tabular-nums text-terracotta">0{step.order}</span>
              <h3 className="font-display text-fluid-base text-cream">{step.title}</h3>
              <p className="mt-2 text-fluid-xs leading-relaxed text-cream/60">{step.shortDescription}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 hidden h-px w-full bg-cream/15 lg:block" aria-hidden="true">
          <motion.div className="h-px bg-terracotta" style={reduced ? { width: "100%" } : { width: lineHeight }} />
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative">
      <div className="absolute left-[15px] top-0 h-full w-px bg-charcoal/12 sm:left-[19px]" aria-hidden="true">
        <motion.div
          className="w-px bg-terracotta"
          style={reduced ? { height: "100%" } : { height: lineHeight }}
        />
      </div>

      <ol className="flex flex-col gap-16">
        {processSteps.map((step) => (
          <li key={step.slug} className="relative pl-12 sm:pl-16">
            <span
              className={cn(
                "absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-terracotta bg-cream text-fluid-xs tabular-nums text-terracotta-text sm:h-10 sm:w-10",
              )}
            >
              {step.order}
            </span>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center lg:gap-10">
              <div className="lg:col-span-7">
                <h3 className="font-display text-fluid-xl text-charcoal">{step.title}</h3>
                {step.durationEstimate && (
                  <p className="mt-1 text-fluid-xs uppercase tracking-widest2 text-charcoal/40">
                    {step.durationEstimate}
                  </p>
                )}
                <p className="mt-4 max-w-xl text-fluid-base leading-relaxed text-charcoal/70">
                  {step.fullDescription}
                </p>
              </div>
              {step.image && (
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm lg:col-span-5">
                  <Image src={step.image.src} alt={step.image.alt} fill sizes="(min-width: 1024px) 35vw, 90vw" className="object-cover" />
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
