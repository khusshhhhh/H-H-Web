import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/Label";
import type { TextTag } from "@/types/polymorphic";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  as?: TextTag;
  align?: "left" | "center";
  size?: "md" | "lg" | "xl";
  className?: string;
}

const sizeMap: Record<NonNullable<SectionHeadingProps["size"]>, string> = {
  md: "text-fluid-xl",
  lg: "text-fluid-2xl",
  xl: "text-fluid-3xl",
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  as: Tag = "h2",
  align = "left",
  size = "lg",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Label className="mb-4 block">{eyebrow}</Label>}
      <Tag className={cn("text-balance font-display font-normal leading-[1.05] text-charcoal", sizeMap[size])}>
        {title}
      </Tag>
      {description && (
        <p className="mt-5 text-fluid-base leading-relaxed text-charcoal/70">{description}</p>
      )}
    </div>
  );
}
