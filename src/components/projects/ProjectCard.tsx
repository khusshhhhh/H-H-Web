import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/project";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
  className?: string;
}

export function ProjectCard({ project, priority = false, className }: ProjectCardProps) {
  const isPortrait = project.orientation === "portrait";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group block ${className ?? ""}`}
      aria-label={`View ${project.name} in ${project.suburb}`}
    >
      <MaskReveal className={isPortrait ? "aspect-[3/4]" : "aspect-[4/3]"}>
        <div className="relative h-full w-full overflow-hidden bg-charcoal">
          <ParallaxLayer speed={0.05} className="absolute -inset-y-10 inset-x-0">
            <Image
              src={project.cardImage.src}
              alt={project.cardImage.alt}
              fill
              priority={priority}
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.06]"
            />
          </ParallaxLayer>
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/0 to-charcoal/0 opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
          <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-cream/90 opacity-0 transition-all duration-400 ease-editorial group-hover:opacity-100 group-hover:translate-x-0 translate-x-2">
            <ArrowUpRight size={18} className="text-charcoal" aria-hidden="true" />
          </div>
        </div>
      </MaskReveal>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-fluid-lg text-charcoal transition-colors group-hover:text-terracotta-text">
            {project.name}
          </h3>
          <p className="mt-1 text-fluid-sm text-charcoal/60">
            {project.suburb} &middot; {project.category}
          </p>
        </div>
        <span className="whitespace-nowrap pt-1 text-fluid-xs uppercase tracking-widest2 text-charcoal/45">
          {project.year}
        </span>
      </div>
    </Link>
  );
}
