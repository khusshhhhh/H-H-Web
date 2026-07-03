"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/content/site-config";
import { Button } from "@/components/ui/Button";
import { MenuOverlay } from "@/components/layout/MenuOverlay";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 64);
  });

  const solid = scrolled || menuOpen || pathname !== "/";

  return (
    <>
      <a href="#main-content" className="sr-only-focusable fixed left-4 top-4 z-[100] rounded bg-terracotta px-4 py-2 text-cream">
        Skip to content
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-editorial",
          solid ? "bg-cream/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(23,23,23,0.08)]" : "bg-transparent",
        )}
      >
        <div className="flex items-center justify-between px-6 py-5 lg:px-12">
          <Link href="/" aria-label={`${siteConfig.name} — home`}>
            <Image
              src={solid ? "/images/logo/blacklogo.png" : "/images/logo/whitelogo.png"}
              alt={`${siteConfig.name} — home`}
              width={400}
              height={96}
              className={cn("h-12 w-auto transition-all duration-500", solid ? "" : "")}
              priority
            />
          </Link>

          <div className="flex items-center gap-4">
            <Button href="/enquiry" size="md" className="hidden sm:inline-flex" magnetic>
              Start a project
            </Button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-haspopup="dialog"
              className={cn(
                "flex items-center gap-2.5 rounded-full border px-4 py-2.5 text-fluid-xs uppercase tracking-widest2 transition-colors duration-500",
                solid
                  ? "border-charcoal/20 text-charcoal hover:bg-charcoal/5"
                  : "border-cream/30 text-cream hover:bg-cream/10",
              )}
            >
              <Menu size={16} aria-hidden="true" />
              <span className="hidden sm:inline">Menu</span>
            </button>
          </div>
        </div>
      </header>

      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} pathname={pathname} />
    </>
  );
}
