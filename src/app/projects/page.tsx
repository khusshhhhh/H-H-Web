import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ProjectsPageClient } from "@/components/projects/ProjectsPageClient";

export const metadata: Metadata = buildMetadata({
  title: "Residential Building Projects in Adelaide",
  description:
    "Explore custom homes, renovations, knockdown rebuilds and small developments by Hills & Harbour across Adelaide, from Burnside to the Fleurieu foothills.",
  path: "/projects",
});

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
