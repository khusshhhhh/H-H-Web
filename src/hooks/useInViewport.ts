"use client";

import { useEffect, useRef, useState } from "react";

interface UseInViewportOptions {
  rootMargin?: string;
  threshold?: number;
}

/** IntersectionObserver flag used to pause/unmount expensive scenes (3D, heavy scroll effects) off-screen. */
export function useInViewport<T extends HTMLElement>({
  rootMargin = "200px",
  threshold = 0,
}: UseInViewportOptions = {}) {
  const ref = useRef<T>(null);
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInViewport(entry.isIntersecting),
      { rootMargin, threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return { ref, inViewport };
}
