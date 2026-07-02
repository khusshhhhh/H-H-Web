"use client";

import { motion } from "framer-motion";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { MOTION_TAGS } from "@/lib/animation/motion-tags";
import { cn } from "@/lib/utils";
import type { TextTag } from "@/types/polymorphic";

interface SplitTextProps {
  text: string;
  as?: TextTag;
  className?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
}

/** Word-level stagger reveal. Falls back to plain static text under reduced motion. */
export function SplitText({ text, as = "span", className, stagger = 0.05, delay = 0, once = true }: SplitTextProps) {
  const reduced = useReducedMotionSafe();
  const words = text.split(" ");
  const Tag = as;
  const MotionTag = MOTION_TAGS[Tag];

  if (reduced) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <MotionTag
      className={cn("inline", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      aria-label={text}
    >
      <span aria-hidden="true">
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="mr-[0.28em] inline-block overflow-hidden pb-[0.1em] align-bottom last:mr-0"
          >
            <motion.span
              className="inline-block"
              variants={{ hidden: { y: "115%" }, visible: { y: "0%" } }}
              transition={{ duration: 0.75, ease: [0.65, 0, 0.35, 1] }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </MotionTag>
  );
}
