import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-current/25 px-3.5 py-1.5 text-fluid-xs font-medium uppercase tracking-widest2",
        className,
      )}
    >
      {children}
    </span>
  );
}
