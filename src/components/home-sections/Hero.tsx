"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { Button } from "@/components/ui/Button";
import { SplitText } from "@/components/motion/SplitText";
import { RotatingBadge } from "@/components/ui/RotatingBadge";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { usePointerFine } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

const SLIDES = [
  {
    src: "/images/home/hero.jpg",
    alt: "Two-storey contemporary home glowing at dusk, with timber screening and deep terraces",
    caption: "Custom homes",
  },
  {
    src: "/images/home/hero-2.jpg",
    alt: "Single-level home wrapped around a pool beneath a pink evening sky",
    caption: "Indoor–outdoor living",
  },
  {
    src: "/images/home/hero-3.jpg",
    alt: "Stone and timber home lit warmly at night, reflected in still water",
    caption: "Material craft",
  },
];

const SLIDE_MS = 7000;

const STATS = [
  { value: `${siteConfig.homesCompleted}+`, label: "Homes completed" },
  { value: `${siteConfig.yearsCombinedExperience}`, label: "Years combined experience" },
  { value: `0${siteConfig.areasServed.length}`, label: "Regions, coast to Hills" },
];

export function Hero() {
  const reduced = useReducedMotionSafe();
  const pointerFine = usePointerFine();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(0);

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

  useEffect(() => {
    if (reduced) return;
    const timer = window.setTimeout(() => setActive((current) => (current + 1) % SLIDES.length), SLIDE_MS);
    return () => window.clearTimeout(timer);
  }, [active, reduced]);

  const slide = SLIDES[active];

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[100svh] w-full items-end overflow-hidden bg-charcoal lg:h-[100svh] lg:min-h-[680px]"
      aria-label="Introduction"
    >
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ x: offset.x * -14, y: offset.y * -10, scale: 1.06 }}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={slide.src}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 1.6, ease: [0.65, 0, 0.35, 1] }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              preload={active === 0}
              sizes="100vw"
              className={cn("object-cover", !reduced && "animate-kenburns")}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal via-charcoal/35 to-charcoal/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal/60 via-charcoal/10 to-transparent" />

      {/* Vertical studio line — desktop only */}
      <p
        className="absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 text-fluid-xs uppercase tracking-widest2 text-cream/45 [writing-mode:vertical-rl] xl:block"
        aria-hidden="true"
      >
        34.9285° S &nbsp;·&nbsp; 138.6007° E &nbsp;·&nbsp; Est. Adelaide
      </p>

      <div className="absolute right-6 top-28 z-10 hidden lg:right-12 lg:block">
        <RotatingBadge href="/enquiry" label="Start your project · Hills & Harbour · " />
      </div>

      <div className="relative z-10 w-full px-6 pb-8 pt-36 sm:px-8 lg:px-12 lg:pt-28 xl:pl-24">
        <div className="mb-6 flex items-center gap-2.5 text-cream/85">
          <MapPin size={15} aria-hidden="true" className="text-terracotta" />
          <span className="text-fluid-xs uppercase tracking-widest2">Adelaide, South Australia</span>
        </div>

        <h1 className="max-w-6xl font-display text-[clamp(2.9rem,1.1rem+6.6vw,7.75rem)] font-normal leading-[0.94] text-cream">
          <SplitText text="Homes shaped around" as="span" className="block" />
          <SplitText text="the way you live." as="span" className="block" delay={0.15} accentWords={["live."]} />
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

        {/* Stat rail + slide control */}
        <div className="mt-10 flex flex-col gap-6 border-t border-cream/15 pt-6 lg:flex-row lg:items-center lg:justify-between">
          <ul className="grid grid-cols-3 gap-6 lg:flex lg:gap-14" role="list">
            {STATS.map((stat) => (
              <li key={stat.label}>
                <p className="font-display text-fluid-xl leading-none text-cream">{stat.value}</p>
                <p className="mt-2 max-w-[14ch] text-[0.68rem] uppercase leading-snug tracking-widest2 text-cream/55">
                  {stat.label}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5">
            <p className="hidden min-w-[13rem] text-right text-fluid-xs uppercase tracking-widest2 text-cream/60 sm:block" aria-live="polite">
              <span className="tabular-nums text-cream">0{active + 1}</span> / 0{SLIDES.length} — {slide.caption}
            </p>
            <div className="flex gap-2" role="group" aria-label="Hero image">
              {SLIDES.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`Show image ${index + 1}: ${item.caption}`}
                  aria-current={index === active}
                  className="group relative h-6 w-12 cursor-pointer"
                >
                  <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-cream/30 transition-colors group-hover:bg-cream/60" />
                  {index === active && (
                    <motion.span
                      key={`${item.src}-${active}`}
                      className="absolute inset-x-0 top-1/2 h-px origin-left -translate-y-1/2 bg-cream"
                      initial={{ scaleX: reduced ? 1 : 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: reduced ? 0 : SLIDE_MS / 1000, ease: "linear" }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
