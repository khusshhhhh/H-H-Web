import type { Project } from "@/types/project";
import { formatSqm } from "@/lib/utils";

interface ProjectMetaProps {
  project: Project;
  tone?: "light" | "dark";
}

export function ProjectMeta({ project, tone = "light" }: ProjectMetaProps) {
  const items = [
    { label: "Location", value: `${project.suburb}, ${project.region}` },
    { label: "Year", value: String(project.year) },
    { label: "Size", value: formatSqm(project.sizeSqm) },
    { label: "Type", value: project.category },
    { label: "Scope", value: project.scope },
  ];

  return (
    <dl className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
      {items.map((item) => (
        <div key={item.label}>
          <dt
            className={
              "text-fluid-xs uppercase tracking-widest2 " +
              (tone === "dark" ? "text-cream/45" : "text-charcoal/45")
            }
          >
            {item.label}
          </dt>
          <dd className={"mt-2 text-fluid-sm " + (tone === "dark" ? "text-cream/90" : "text-charcoal/85")}>
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
