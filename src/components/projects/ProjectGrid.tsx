import type { Project } from "@/types/project";
import { ProjectCard } from "@/components/projects/ProjectCard";

interface ProjectGridProps {
  projects: Project[];
}

/**
 * Asymmetric editorial layout: alternates wide/landscape and narrow/portrait
 * spans across a 12-column grid rather than a uniform card grid.
 */
const SPAN_PATTERN = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
  "lg:col-span-8",
  "lg:col-span-4",
];

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <p className="py-16 text-center text-fluid-base text-charcoal/60">
        No projects match this filter yet — check back soon or explore another category.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-12">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.slug}
          project={project}
          priority={index < 2}
          className={SPAN_PATTERN[index % SPAN_PATTERN.length]}
        />
      ))}
    </div>
  );
}
