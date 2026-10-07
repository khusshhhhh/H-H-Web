"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import { services } from "@/content/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { cn } from "@/lib/utils";

export function ServicesExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduced = useReducedMotionSafe();
  const active = services[activeIndex];

  return (
    <section className="bg-charcoal py-28 text-cream lg:py-36" aria-label="Our services">
      <Container>
        <SectionHeading
          eyebrow="What We Build"
          title="Six ways to work with us"
          size="lg"
          className="text-cream [&_p]:text-cream/70"
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <ul className="lg:col-span-6" role="list">
            {services.map((service, index) => {
              const isActive = index === activeIndex;
              return (
                <li key={service.slug} className="border-b border-cream/15">
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-expanded={isActive}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="flex items-baseline gap-5">
                      <span className={cn("text-fluid-xs tabular-nums", isActive ? "text-terracotta" : "text-cream/40")}>
                        0{index + 1}
                      </span>
                      <span
                        className={cn(
                          "font-display text-fluid-xl transition-colors duration-300",
                          isActive ? "text-cream" : "text-cream/50",
                        )}
                      >
                        {service.name}
                      </span>
                    </span>
                    <Plus
                      size={20}
                      className={cn("shrink-0 transition-transform duration-300", isActive && "rotate-45 text-terracotta")}
                      aria-hidden="true"
                    />
                  </button>

                  <div className="lg:hidden">
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: reduced ? 0 : 0.4, ease: [0.65, 0, 0.35, 1] }}
                          className="overflow-hidden"
                        >
                          <ServiceDetail service={service} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:col-span-6 lg:block">
            <div className="sticky top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: reduced ? 0 : 0.5, ease: [0.65, 0, 0.35, 1] }}
                >
                  <ServiceDetail service={active} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ServiceDetail({ service }: { service: (typeof services)[number] }) {
  return (
    <div>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          sizes="(min-width: 1024px) 40vw, 90vw"
          className="object-cover"
        />
      </div>
      <p className="mt-6 max-w-md text-fluid-base leading-relaxed text-cream/75">{service.shortDescription}</p>
      <Link
        href={`/services/${service.slug}`}
        className="mt-5 inline-flex items-center gap-2 text-fluid-sm text-terracotta hover:text-sandstone"
      >
        Learn more <ArrowRight size={15} aria-hidden="true" />
      </Link>
    </div>
  );
}
