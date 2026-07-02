"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProjects } from "@/content/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectFilterBar } from "@/components/projects/ProjectFilterBar";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { AnimatedLink } from "@/components/ui/AnimatedLink";
import type { ProjectCategory } from "@/types/project";

const featured = getFeaturedProjects();

export function FeaturedProjects() {
  const [active, setActive] = useState<ProjectCategory | "All">("All");

  const filtered = useMemo(
    () => (active === "All" ? featured : featured.filter((project) => project.category === active)),
    [active],
  );

  return (
    <section className="bg-cream py-28 lg:py-36" aria-label="Featured projects">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Selected Work"
            title="A sample of homes built with intent"
            description="Placeholder projects illustrating the range of work we take on across Adelaide — final photography and case studies will replace these once live."
          />
          <AnimatedLink href="/projects" className="hidden shrink-0 items-center gap-2 text-fluid-sm text-charcoal lg:flex">
            View all projects <ArrowRight size={16} />
          </AnimatedLink>
        </div>

        <ProjectFilterBar active={active} onChange={setActive} className="mb-14 mt-10" />

        <ProjectGrid projects={filtered} />

        <div className="mt-14 flex justify-center lg:hidden">
          <Link href="/projects" className="flex items-center gap-2 text-fluid-sm text-charcoal">
            View all projects <ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
