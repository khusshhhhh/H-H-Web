"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { useLenis } from "@/components/motion/LenisProvider";

const STORAGE_KEY = "hh-intro-seen";
const DURATION_MS = 1600;

export function LoadingSequence() {
  const reduced = useReducedMotionSafe();
  const { stop, start } = useLenis();
  // Starts true on both server and client render so the overlay is present
  // for first paint (no flash of content) — effects below decide whether to
  // dismiss it. Visibility is entirely React state, never manual DOM removal,
  // so it can never fight React's own reconciliation (e.g. Fast Refresh).
  const [visible, setVisible] = useState(true);
  const [percent, setPercent] = useState(0);

  function finish() {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore storage errors (private browsing etc.)
    }
    setVisible(false);
  }

  useEffect(() => {
    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      alreadySeen = false;
    }

    if (alreadySeen || reduced) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(false);
      return;
    }

    stop();
    document.body.style.overflow = "hidden";

    const startTime = Date.now();
    let frame: number;

    function tick() {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / DURATION_MS) * 100));
      setPercent(pct);
      if (pct < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        window.setTimeout(finish, 350);
      }
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = "";
      start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-charcoal"
          role="status"
          aria-live="polite"
          aria-label="Loading Hills & Harbour"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center justify-center">
            <button
              type="button"
              onClick={finish}
              className="absolute right-6 top-6 text-fluid-xs uppercase tracking-widest2 text-cream/50"
            >
              Skip intro
            </button>
            <Image
              src="/images/logo/whitelogo.png"
              alt="Hills & Harbour"
              width={240}
              height={58}
              className="h-24 w-auto"
              priority
            />
            <span className="mt-6 font-display text-fluid-sm tabular-nums text-cream/70">{percent}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
