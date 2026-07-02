import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { TextTag } from "@/types/polymorphic";

interface LabelProps {
  as?: TextTag;
  children: ReactNode;
  className?: string;
}

/** Restrained uppercase label with generous letter-spacing, used throughout as an eyebrow/kicker. */
export function Label({ as: Tag = "p", children, className }: LabelProps) {
  return (
    <Tag
      className={cn(
        "text-fluid-xs font-medium uppercase tracking-widest2 text-terracotta-text",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
