"use client";

import { useEffect, useState } from "react";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { useLenis } from "@/components/motion/LenisProvider";

const STORAGE_KEY = "hh-intro-seen";
const DURATION_MS = 1600;

export function LoadingSequence() {
  const reduced = useReducedMotionSafe();
  const { stop, start } = useLenis();
  const [visible, setVisible] = useState(false);

  function finish() {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore storage errors (private browsing etc.)
    }

    const overlay = document.getElementById("hh-loading-overlay");
    if (overlay) {
      overlay.style.transition = "opacity 0.45s ease";
      overlay.style.opacity = "0";
      window.setTimeout(() => {
        overlay.parentNode?.removeChild(overlay);
      }, 500);
    }

    document.body.style.overflow = "";
    start();
    setVisible(false);
  }

  useEffect(() => {
    // Deliberately deferred to an effect rather than a lazy useState
    // initializer: sessionStorage is only readable client-side, and
    // deciding this during the render pass would make the client's
    // hydration render diverge from the server-rendered markup (a real
    // hydration mismatch), not just an unnecessary render.
    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      alreadySeen = false;
    }

    const overlay = document.getElementById("hh-loading-overlay");
    const skipBtn = document.getElementById("hh-skip");

    if (alreadySeen || reduced) {
      overlay?.parentNode?.removeChild(overlay);
      start();
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(false);
      return;
    }

    setVisible(true);
    stop();
    document.body.style.overflow = "hidden";

    const onSkip = () => finish();
    skipBtn?.addEventListener("click", onSkip);

    return () => {
      skipBtn?.removeEventListener("click", onSkip);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  useEffect(() => {
    if (!visible) return;

    const progressEl = document.getElementById("hh-loading-progress");
    const startTime = Date.now();
    let frame: number;

    function tick() {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / DURATION_MS) * 100));
      if (progressEl) progressEl.textContent = `${pct}%`;
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

  // This component only drives the server-rendered overlay via DOM.
  // It doesn't render UI itself, to avoid duplication and hydration mismatches.
  return null;
}
