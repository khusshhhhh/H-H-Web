"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const HIDDEN_ON = ["/enquiry"];

/** Mobile-only floating CTA — fills the gap left by the header's "Start a project" button, which is hidden below sm. */
export function StickyEnquiryCta() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (HIDDEN_ON.includes(pathname)) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-x-4 bottom-4 z-40 sm:hidden"
        >
          <Button href="/enquiry" size="lg" icon={<ArrowRight size={16} />} className="w-full justify-center shadow-xl">
            Start a project
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
