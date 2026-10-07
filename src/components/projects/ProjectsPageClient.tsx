"use client";

import { useMemo, useState } from "react";
import { projects } from "@/content/projects";
import { PageHeroBanner, bannerImages } from "@/components/ui/PageHeroBanner";
import { Container } from "@/components/ui/Container";
import { ProjectFilterBar } from "@/components/projects/ProjectFilterBar";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import type { ProjectCategory } from "@/types/project";

export function ProjectsPageClient() {
  const [active, setActive] = useState<ProjectCategory | "All">("All");

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((project) => project.category === active)),
    [active],
  );

  return (
    <>
      <PageHeroBanner
        image={bannerImages.projects}
        eyebrow="Our Work"
        title="A record of homes built with intent"
        description="Placeholder projects illustrating the range and standard of work we take on across Adelaide. Final photography and full case studies will replace this content before launch."
      />

      <section className="bg-cream py-24 lg:py-32" aria-label="All projects">
        <Container>
          <ProjectFilterBar active={active} onChange={setActive} className="mb-14" />
          <ProjectGrid projects={filtered} />
        </Container>
      </section>
    </>
  );
}
