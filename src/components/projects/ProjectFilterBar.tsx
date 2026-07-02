"use client";

import { cn } from "@/lib/utils";
import type { ProjectCategory } from "@/types/project";

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "Custom Homes",
  "Developments",
  "Renovations",
  "House & Land",
];

interface ProjectFilterBarProps {
  active: ProjectCategory | "All";
  onChange: (category: ProjectCategory | "All") => void;
  className?: string;
}

export function ProjectFilterBar({ active, onChange, className }: ProjectFilterBarProps) {
  const options: (ProjectCategory | "All")[] = ["All", ...PROJECT_CATEGORIES];

  return (
    <div role="group" aria-label="Filter projects by category" className={cn("flex flex-wrap gap-3", className)}>
      {options.map((option) => {
        const isActive = active === option;
        return (
          <button
            key={option}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(option)}
            className={cn(
              "rounded-full border px-5 py-2.5 text-fluid-xs uppercase tracking-widest2 transition-colors duration-300",
              isActive
                ? "border-terracotta bg-terracotta text-cream"
                : "border-charcoal/20 text-charcoal/70 hover:border-charcoal/50 hover:text-charcoal",
            )}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
