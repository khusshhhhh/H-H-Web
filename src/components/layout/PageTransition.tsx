"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "@/lib/animation/gsap";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduced = useReducedMotionSafe();

  // Some sections (e.g. the homepage's pinned scrollytelling) manipulate the
  // DOM directly via GSAP ScrollTrigger's pin-spacer. If a route change
  // unmounts that section while a pin is still active, React's own removal
  // of the (now GSAP-reparented) DOM node throws a removeChild mismatch.
  // Killing every ScrollTrigger the instant the route starts changing —
  // rather than relying on each component's own unmount-timed cleanup —
  // guarantees GSAP has already torn the pin-spacer down well before
  // React's exit-animation-then-remove eventually reaches that subtree.
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pathname]);

  if (reduced) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
