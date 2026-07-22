"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SplitText } from "@/components/motion/SplitText";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { usePointerFine } from "@/hooks/useMediaQuery";

/** Faint architectural line drawing — a hillside horizon and a house elevation — standing in for photography. */
function HeroLineArt() {
  return (
    <svg
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMaxYMax meet"
      className="absolute bottom-0 right-0 h-[85%] w-[65%] max-w-[760px] opacity-[0.5]"
      aria-hidden="true"
    >
      <line x1="0" y1="560" x2="1200" y2="560" stroke="#F3F0E9" strokeWidth="1" strokeOpacity="0.35" />
      <path
        d="M0 560 C 160 460, 260 460, 380 560 S 620 460, 760 560 S 1000 460, 1200 560"
        fill="none"
        stroke="#C9B9A3"
        strokeWidth="1.4"
        strokeOpacity="0.5"
      />
      <g stroke="#F3F0E9" strokeWidth="1.6" strokeOpacity="0.5" fill="none" strokeLinejoin="round">
        <polyline points="620,560 620,380 780,300 940,380 940,560" />
        <line x1="620" y1="380" x2="940" y2="380" />
      </g>
      <polyline points="620,380 780,300 940,380" fill="none" stroke="#A8583C" strokeWidth="2.5" strokeOpacity="0.65" />
      <rect x="670" y="440" width="60" height="80" fill="none" stroke="#F3F0E9" strokeWidth="1.2" strokeOpacity="0.5" />
      <rect x="850" y="440" width="60" height="80" fill="none" stroke="#F3F0E9" strokeWidth="1.2" strokeOpacity="0.5" />
    </svg>
  );
}

export function Hero() {
  const reduced = useReducedMotionSafe();
  const pointerFine = usePointerFine();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduced || !pointerFine) return;

    function handleMove(event: MouseEvent) {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      setOffset({ x, y });
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [reduced, pointerFine]);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-charcoal"
      aria-label="Introduction"
    >
      {/* Clean, minimalist background — no photography, just tone, grid and faint line art */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #F3F0E9 1px, transparent 1px), linear-gradient(to bottom, #F3F0E9 1px, transparent 1px)",
            backgroundSize: "clamp(32px, 6vw, 56px) clamp(32px, 6vw, 56px)",
          }}
        />
        <div className="absolute -top-1/3 right-[-15%] h-[70vw] w-[70vw] max-w-[900px] rounded-full bg-terracotta/[0.14] blur-[120px]" />
        <div className="absolute bottom-[-25%] left-[-15%] h-[55vw] w-[55vw] max-w-[600px] rounded-full bg-eucalyptus/[0.12] blur-[110px]" />

        <motion.div
          className="absolute inset-0 hidden sm:block"
          animate={{ x: offset.x * -10, y: offset.y * -8 }}
          transition={{ type: "spring", stiffness: 40, damping: 20 }}
        >
          <HeroLineArt />
        </motion.div>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30" />

      <div className="relative z-10 w-full px-6 pb-10 pt-28 sm:px-8 sm:pb-16 sm:pt-32 lg:px-12 lg:pb-24">
        <div className="mb-4 flex items-center gap-2.5 text-cream/85 sm:mb-6">
          <MapPin size={15} aria-hidden="true" className="text-terracotta" />
          <span className="text-fluid-xs uppercase tracking-widest2">Adelaide, South Australia</span>
        </div>

        <h1 className="max-w-5xl text-[clamp(2.5rem,11vw,3.75rem)] font-display font-normal leading-[1.05] text-cream text-balance sm:text-[clamp(3.25rem,8vw,5.5rem)] sm:leading-[0.98] lg:text-fluid-hero lg:leading-[0.94]">
          <SplitText text="Homes shaped around" as="span" className="block" />
          <SplitText text="the way you live." as="span" className="block" delay={0.15} />
        </h1>

        <div className="mt-6 flex flex-col gap-6 sm:mt-8 sm:gap-8 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-md text-fluid-base leading-relaxed text-cream/80">
            Hills &amp; Harbour designs and builds custom homes, considered renovations and small
            developments across Adelaide — shaped by your site, your climate and the way your
            household actually lives.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button href="/projects" tone="dark" variant="primary" size="lg" magnetic className="w-full justify-center sm:w-auto">
              Explore our homes
            </Button>
            <Button href="/enquiry" tone="dark" variant="outline" size="lg" magnetic className="w-full justify-center sm:w-auto">
              Start your project
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 z-10 hidden lg:right-12 lg:block">
        <ScrollIndicator tone="dark" />
      </div>
    </section>
  );
}
