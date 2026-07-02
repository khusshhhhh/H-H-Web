"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { useLenis } from "@/components/motion/LenisProvider";
import { MonogramDrawing } from "@/components/home-sections/MonogramDrawing";

const STORAGE_KEY = "hh-intro-seen";
const DURATION_MS = 1600;

export function LoadingSequence() {
  const reduced = useReducedMotionSafe();
  const { stop, start } = useLenis();
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Deliberately deferred to an effect rather than a lazy useState
    // initializer: sessionStorage is only readable client-side, and
    // deciding visibility during the render pass would make the client's
    // hydration render diverge from the server-rendered markup (a real
    // hydration mismatch), not just an unnecessary render.
    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      alreadySeen = false;
    }

    if (alreadySeen || reduced) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(false);
      setReady(true);
      return;
    }

    setVisible(true);
    setReady(true);
    stop();
    document.body.style.overflow = "hidden";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  useEffect(() => {
    if (!visible) return;

    const startTime = Date.now();
    let frame: number;

    function tick() {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / DURATION_MS) * 100));
      setProgress(pct);
      if (pct < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        window.setTimeout(finish, 350);
      }
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  function finish() {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore storage errors (private browsing etc.)
    }
    document.body.style.overflow = "";
    start();
    setVisible(false);
  }

  if (!ready) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-charcoal"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          role="status"
          aria-live="polite"
          aria-label={`Loading Hills & Harbour, ${progress} percent`}
        >
          <button
            type="button"
            onClick={finish}
            className="absolute right-6 top-6 text-fluid-xs uppercase tracking-widest2 text-cream/50 transition-colors hover:text-cream"
          >
            Skip intro
          </button>
          <MonogramDrawing progress={progress} />
          <span className="mt-6 font-display text-fluid-sm tabular-nums text-cream/70">{progress}%</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
