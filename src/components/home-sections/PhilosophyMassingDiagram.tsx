"use client";

import { motion } from "framer-motion";

interface PhilosophyMassingDiagramProps {
  stage: number;
}

/**
 * Lightweight SVG stand-in for the philosophy section's massing model. Layers
 * are revealed progressively as `stage` increases (0=structure only through
 * 3=complete with landscape). Replaced by the real R3F wireframe-to-solid
 * morph in the 3D layer — this keeps the section fully usable without it.
 */
export function PhilosophyMassingDiagram({ stage }: PhilosophyMassingDiagramProps) {
  return (
    <svg viewBox="0 0 480 420" className="h-full w-full" role="img" aria-hidden="true">
      {/* ground line — always present */}
      <motion.line
        x1="40" y1="360" x2="440" y2="360"
        stroke="#A9A7A1" strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1 }}
      />

      {/* structure — wireframe massing */}
      <g stroke="#C9B9A3" strokeWidth="1.4" fill="none">
        <polyline points="120,360 120,200 240,140 360,200 360,360" />
        <line x1="120" y1="200" x2="360" y2="200" />
        <line x1="240" y1="140" x2="240" y2="360" strokeDasharray="4 4" opacity="0.5" />
      </g>

      {/* material — solid fill fades in */}
      <motion.polygon
        points="120,360 120,200 240,140 360,200 360,360"
        fill="#171717"
        animate={{ opacity: stage >= 1 ? 0.9 : 0 }}
        transition={{ duration: 0.6 }}
      />
      <motion.polyline
        points="120,200 240,140 360,200"
        fill="none"
        stroke="#A8583C"
        strokeWidth="2.5"
        animate={{ opacity: stage >= 1 ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      />

      {/* light — window glow */}
      <motion.g animate={{ opacity: stage >= 2 ? 1 : 0 }} transition={{ duration: 0.6 }}>
        <rect x="150" y="240" width="50" height="70" fill="#F3F0E9" opacity="0.85" />
        <rect x="220" y="240" width="50" height="70" fill="#F3F0E9" opacity="0.65" />
        <rect x="290" y="240" width="50" height="70" fill="#F3F0E9" opacity="0.85" />
      </motion.g>

      {/* landscape — surrounding trees */}
      <motion.g animate={{ opacity: stage >= 3 ? 1 : 0 }} transition={{ duration: 0.6 }} stroke="#68766B" strokeWidth="1.6" fill="none">
        <path d="M60 360 C 60 300, 90 300, 90 250 M 75 320 L 105 320 M 68 280 L 98 280" />
        <path d="M400 360 C 400 310, 425 310, 425 265 M 388 330 L 412 330" />
      </motion.g>
    </svg>
  );
}
