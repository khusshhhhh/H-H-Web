import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface RotatingBadgeProps {
  href: string;
  /** Text set around the ring — end it with a separator so the loop closes cleanly. */
  label: string;
  className?: string;
}

/** Circular text seal that turns slowly around an arrow — a quiet secondary call to action. */
export function RotatingBadge({ href, label, className }: RotatingBadgeProps) {
  return (
    <Link
      href={href}
      aria-label={label.replace(/[·\s]+$/g, "")}
      className={cn(
        "group relative flex h-32 w-32 items-center justify-center rounded-full border border-cream/20 bg-charcoal/30 text-cream backdrop-blur-sm transition-colors duration-500 ease-editorial hover:bg-terracotta",
        className,
      )}
    >
      <svg viewBox="0 0 120 120" className="animate-spin-slow absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <path id="hh-badge-ring" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <text fill="currentColor" fontSize="8.4" className="uppercase">
          <textPath href="#hh-badge-ring" textLength="272" lengthAdjust="spacing">
            {label}
          </textPath>
        </text>
      </svg>
      <ArrowUpRight
        size={22}
        className="transition-transform duration-500 ease-editorial group-hover:rotate-45"
        aria-hidden="true"
      />
    </Link>
  );
}
