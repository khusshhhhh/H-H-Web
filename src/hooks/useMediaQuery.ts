"use client";

import { useSyncExternalStore } from "react";

function getServerSnapshot() {
  return false;
}

export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (callback) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", callback);
      return () => mql.removeEventListener("change", callback);
    },
    () => window.matchMedia(query).matches,
    getServerSnapshot,
  );
}

export function usePointerFine(): boolean {
  return useMediaQuery("(pointer: fine)");
}

export function useIsMobile(): boolean {
  return useMediaQuery("(max-width: 767px)");
}
