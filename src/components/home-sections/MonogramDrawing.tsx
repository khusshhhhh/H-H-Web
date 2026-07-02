import { motion } from "framer-motion";

interface MonogramDrawingProps {
  progress: number;
}

/** Simple architectural line drawing of the H&H monogram that constructs itself as `progress` (0–100) advances. */
export function MonogramDrawing({ progress }: MonogramDrawingProps) {
  const p = Math.max(0, Math.min(1, progress / 100));

  return (
    <svg viewBox="0 0 220 140" className="h-24 w-auto sm:h-32" role="img" aria-label="Hills & Harbour monogram">
      <motion.path
        d="M20 20 L20 120 M20 70 L75 70 M75 20 L75 120"
        stroke="#F3F0E9"
        strokeWidth="3"
        fill="none"
        strokeLinecap="square"
        style={{ pathLength: p }}
      />
      <motion.path
        d="M145 20 L145 120 M145 70 L200 70 M200 20 L200 120"
        stroke="#A8583C"
        strokeWidth="3"
        fill="none"
        strokeLinecap="square"
        style={{ pathLength: p }}
      />
      <motion.line
        x1="95" y1="70" x2="125" y2="70"
        stroke="#C9B9A3"
        strokeWidth="2"
        style={{ pathLength: p }}
      />
    </svg>
  );
}
