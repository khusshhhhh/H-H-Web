"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUpRight, Phone, Mail } from "lucide-react";
import { primaryNav, siteConfig } from "@/content/site-config";
import { getFeaturedProjects } from "@/content/projects";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { cn } from "@/lib/utils";

interface MenuOverlayProps {
  open: boolean;
  onClose: () => void;
  pathname: string;
}

const previewProjects = getFeaturedProjects().slice(0, 4);

export function MenuOverlay({ open, onClose, pathname }: MenuOverlayProps) {
  const [hoverIndex, setHoverIndex] = useState(0);
  const reduced = useReducedMotionSafe();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useLockBodyScroll(open);

  useEffect(() => {
    if (open) closeButtonRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  const panelTransition = reduced ? { duration: 0.01 } : { duration: 0.7, ease: [0.65, 0, 0.35, 1] as const };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-[90] overflow-y-auto bg-charcoal text-cream"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={panelTransition}
        >
          <div className="flex min-h-screen flex-col px-6 py-6 lg:px-12 lg:py-8">
            <div className="flex items-center justify-between">
              <Link href="/" onClick={onClose} className="font-display text-fluid-lg text-cream">
                Hills &amp; Harbour
              </Link>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="flex items-center gap-2.5 rounded-full border border-cream/30 px-4 py-2.5 text-fluid-xs uppercase tracking-widest2 hover:bg-cream/10"
              >
                <X size={16} aria-hidden="true" />
                <span className="hidden sm:inline">Close</span>
              </button>
            </div>

            <div className="mt-10 grid flex-1 grid-cols-1 gap-12 lg:mt-16 lg:grid-cols-12">
              <nav aria-label="Primary" className="lg:col-span-7">
                <ul className="flex flex-col">
                  {primaryNav.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.li
                        key={item.href}
                        className="border-b border-cream/10"
                        initial={reduced ? undefined : { opacity: 0, y: 24 }}
                        animate={reduced ? undefined : { opacity: 1, y: 0 }}
                        transition={{ delay: reduced ? 0 : 0.15 + index * 0.06, duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
                        onMouseEnter={() => setHoverIndex(index % previewProjects.length)}
                      >
                        <Link
                          href={item.href}
                          onClick={onClose}
                          aria-current={isActive ? "page" : undefined}
                          className={cn(
                            "group flex items-center justify-between py-5 font-display text-[clamp(2rem,5vw,4rem)] leading-none transition-colors duration-300",
                            isActive ? "text-terracotta" : "text-cream hover:text-sandstone",
                          )}
                        >
                          {item.label}
                          <ArrowUpRight
                            className="h-8 w-8 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                            aria-hidden="true"
                          />
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>

                <div className="mt-12 flex flex-col gap-3 text-fluid-sm text-cream/70">
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="flex items-center gap-2.5 hover:text-cream">
                    <Phone size={16} aria-hidden="true" /> {siteConfig.phoneDisplay}
                  </a>
                  <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 hover:text-cream">
                    <Mail size={16} aria-hidden="true" /> {siteConfig.email}
                  </a>
                  <p className="mt-2 text-fluid-xs uppercase tracking-widest2 text-cream/40">{siteConfig.location}</p>
                </div>
              </nav>

              <div className="relative hidden overflow-hidden rounded-sm lg:col-span-5 lg:block">
                {previewProjects.map((project, index) => (
                  <motion.div
                    key={project.slug}
                    className="absolute inset-0"
                    initial={false}
                    animate={{ opacity: index === hoverIndex ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={project.cardImage.src}
                      alt={project.cardImage.alt}
                      fill
                      sizes="40vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/90 to-transparent p-6">
                      <p className="text-fluid-xs uppercase tracking-widest2 text-cream/70">{project.suburb}</p>
                      <p className="font-display text-fluid-lg text-cream">{project.name}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
