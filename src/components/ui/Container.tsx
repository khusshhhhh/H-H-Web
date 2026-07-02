import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { TextTag } from "@/types/polymorphic";

interface ContainerProps {
  as?: TextTag;
  className?: string;
  children: ReactNode;
  /** Use the wider bleed width for full-bleed editorial moments. */
  wide?: boolean;
}

export function Container({ as: Tag = "div", className, children, wide = false }: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-6 sm:px-8 lg:px-12",
        wide ? "max-w-[110rem]" : "max-w-[90rem]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
