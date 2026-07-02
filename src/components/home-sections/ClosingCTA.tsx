"use client";

import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedLink } from "@/components/ui/AnimatedLink";
import { SplitText } from "@/components/motion/SplitText";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

export function ClosingCTA() {
  const reduced = useReducedMotionSafe();

  return (
    <section className="relative flex min-h-[90svh] items-center overflow-hidden bg-charcoal py-28 text-cream" aria-label="Get in touch">
      <ArchitecturalBackground animate={!reduced} />

      <Container className="relative">
        <p className="text-fluid-xs uppercase tracking-widest2 text-terracotta">Start Here</p>
        <h2 className="mt-6 max-w-4xl font-display text-fluid-3xl leading-[0.98] text-cream text-balance">
          <SplitText text="Let's create a home" as="span" className="block" />
          <SplitText text="that belongs to you." as="span" className="block" delay={0.12} />
        </h2>

        <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:flex-wrap">
          <Button href="/enquiry" size="lg" magnetic>
            Start a conversation
          </Button>
          <Button href="/projects" tone="dark" variant="outline" size="lg" magnetic>
            View available opportunities
          </Button>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-cream/15 pt-8 sm:flex-row sm:items-center sm:gap-10">
          <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="flex items-center gap-2.5 text-fluid-sm text-cream/85 hover:text-cream">
            <Phone size={16} aria-hidden="true" /> {siteConfig.phoneDisplay}
          </a>
          <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 text-fluid-sm text-cream/85 hover:text-cream">
            <Mail size={16} aria-hidden="true" /> {siteConfig.email}
          </a>
          <AnimatedLink href="/enquiry" className="flex items-center gap-2 text-fluid-sm text-cream/85 hover:text-cream">
            Submit a project enquiry <ArrowRight size={14} />
          </AnimatedLink>
        </div>
      </Container>
    </section>
  );
}

function ArchitecturalBackground({ animate }: { animate: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-[0.15]" aria-hidden="true">
      <svg className="h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
        {Array.from({ length: 13 }).map((_, i) => (
          <line key={`v-${i}`} x1={i * 100} y1="0" x2={i * 100} y2="800" stroke="#C9B9A3" strokeWidth="1" />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`h-${i}`} x1="0" y1={i * 100} x2="1200" y2={i * 100} stroke="#C9B9A3" strokeWidth="1" />
        ))}
        <motion.rect
          x="200" y="150" width="500" height="380" fill="none" stroke="#A8583C" strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.4, ease: "easeOut" }}
          animate={animate ? { x: [0, 24, 0] } : undefined}
        />
      </svg>
    </div>
  );
}
