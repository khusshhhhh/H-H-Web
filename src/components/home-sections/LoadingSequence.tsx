"use client";

import { useEffect, useState } from "react";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { useLenis } from "@/components/motion/LenisProvider";

const STORAGE_KEY = "hh-intro-seen";
const DURATION_MS = 1600;

export function LoadingSequence() {
  const reduced = useReducedMotionSafe();
  const { stop, start } = useLenis();
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Control the server-rendered overlay via DOM to ensure it appears
    // before the main site content paints and to avoid hydration flashes.
    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      alreadySeen = false;
    }

    const overlay = document.getElementById("hh-loading-overlay");
    const progressEl = document.getElementById("hh-loading-progress");
    const skipBtn = document.getElementById("hh-skip");

    function removeOverlay() {
      if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
    }

    if (alreadySeen || reduced) {
      // Hide overlay immediately and let scrolling start
      removeOverlay();
      start();
      setVisible(false);
      setReady(true);
      return;
    }

    setVisible(true);
    setReady(true);
    stop();
    document.body.style.overflow = "hidden";

    // Attach skip handler
    const onSkip = () => finish(true);
    skipBtn?.addEventListener("click", onSkip);

    return () => {
      skipBtn?.removeEventListener("click", onSkip);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  useEffect(() => {
    if (!visible) return;

    const overlay = document.getElementById("hh-loading-overlay");
    const progressEl = document.getElementById("hh-loading-progress");

    const startTime = Date.now();
    let frame: number;

    function tick() {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / DURATION_MS) * 100));
      setProgress(pct);
      if (progressEl) progressEl.textContent = `${pct}%`;
      if (pct < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        window.setTimeout(() => finish(false), 350);
      }
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  function finish(skip = false) {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore storage errors (private browsing etc.)
    }

    const overlay = document.getElementById("hh-loading-overlay");
    if (overlay) {
      // simple fade via inline transition then remove
      overlay.style.transition = "opacity 0.45s ease";
      overlay.style.opacity = "0";
      window.setTimeout(() => {
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      }, 500);
    }

    document.body.style.overflow = "";
    start();
    setVisible(false);
  }

  // This component only drives the server-rendered overlay via DOM.
  // It doesn't render UI itself to avoid duplication and hydration mismatches.
  return null;
}
