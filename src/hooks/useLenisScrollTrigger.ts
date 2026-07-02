"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, registerGsap } from "@/lib/animation/gsap";

/**
 * Wires Lenis smooth-scroll to GSAP's ScrollTrigger. This is the highest-risk
 * integration point in the motion system — get the reconciliation wrong and
 * pinned sections (Philosophy, Process journey) desync from the actual
 * scroll position.
 *
 * Key rules:
 * 1. Lenis is driven by gsap.ticker (not its own rAF loop) so both share one clock.
 * 2. gsap.ticker.lagSmoothing(0) — GSAP's lag compensation otherwise fights Lenis' easing.
 * 3. ScrollTrigger.scrollerProxy points at Lenis' scroll value instead of window.scrollY.
 * 4. ScrollTrigger.refresh() runs once Lenis is ready, and again on resize.
 */
export function useLenisScrollTrigger(enabled: boolean) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!enabled) {
      lenisRef.current = null;
      return;
    }

    registerGsap();

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      touchMultiplier: 1.4,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length && value !== undefined) {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.body.style.transform ? "transform" : "fixed",
    });

    const refreshHandler = () => lenis.resize();
    ScrollTrigger.addEventListener("refresh", refreshHandler);
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(tickerCallback);
      ScrollTrigger.removeEventListener("refresh", refreshHandler);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [enabled]);

  return lenisRef;
}
