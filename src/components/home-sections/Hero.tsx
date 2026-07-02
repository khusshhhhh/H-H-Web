"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SplitText } from "@/components/motion/SplitText";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { usePointerFine } from "@/hooks/useMediaQuery";
import { SceneLoader } from "@/components/three/SceneLoader";

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
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ x: offset.x * -14, y: offset.y * -10, scale: 1.08 }}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
      >
        <Image
          src="/images/home/hero.jpg"
          alt="Contemporary Adelaide home at dusk, framed by mature eucalypt trees"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal via-charcoal/25 to-charcoal/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal/50 via-transparent to-transparent" />

      <div className="relative z-10 w-full px-6 pb-16 pt-32 sm:px-8 lg:px-12 lg:pb-24">
        <div className="mb-6 flex items-center gap-2.5 text-cream/85">
          <MapPin size={15} aria-hidden="true" className="text-terracotta" />
          <span className="text-fluid-xs uppercase tracking-widest2">Adelaide, South Australia</span>
        </div>

        <h1 className="max-w-5xl text-fluid-hero font-display font-normal leading-[0.94] text-cream text-balance">
          <SplitText text="Homes shaped around" as="span" className="block" />
          <SplitText text="the way you live." as="span" className="block" delay={0.15} />
        </h1>

        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-md text-fluid-base leading-relaxed text-cream/80">
            Hills &amp; Harbour designs and builds custom homes, considered renovations and small
            developments across Adelaide — shaped by your site, your climate and the way your
            household actually lives.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="/projects" tone="dark" variant="primary" size="lg" magnetic>
              Explore our homes
            </Button>
            <Button href="/enquiry" tone="dark" variant="outline" size="lg" magnetic>
              Start your project
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 z-10 hidden lg:right-12 lg:block">
        <ScrollIndicator tone="dark" />
      </div>

      <div className="absolute right-6 top-28 z-10 hidden overflow-hidden rounded-sm border border-cream/20 bg-charcoal/40 backdrop-blur-sm sm:block lg:right-12">
        <SceneLoader variant="hero" className="relative h-40 w-40 lg:h-56 lg:w-56" />
        <p className="border-t border-cream/15 px-3 py-2 text-center text-fluid-xs uppercase tracking-widest2 text-cream/60">
          Explore in 3D
        </p>
      </div>
    </section>
  );
}
