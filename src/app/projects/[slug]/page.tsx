import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { getProjectBySlug, getRelatedProjects, projects } from "@/content/projects";
import { getTestimonialById } from "@/content/testimonials";
import { buildMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";
import { formatSqm } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/ui/JsonLd";
import { ProjectMeta } from "@/components/projects/ProjectMeta";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { BeforeAfterSlider } from "@/components/projects/BeforeAfterSlider";
import { FloorPlanViewer } from "@/components/projects/FloorPlanViewer";
import { RelatedProjects } from "@/components/projects/RelatedProjects";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return buildMetadata({
    title: `${project.name}, ${project.suburb}`,
    description: `${project.scope} — a ${project.category.toLowerCase()} project by Hills & Harbour in ${project.suburb}, completed ${project.year}.`,
    path: `/projects/${project.slug}`,
    image: project.heroImage.src,
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const testimonial = project.testimonialId ? getTestimonialById(project.testimonialId) : undefined;
  const related = getRelatedProjects(project);

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
          { name: project.name, path: `/projects/${project.slug}` },
        ])}
      />

      {/* Full-screen intro */}
      <section className="relative flex h-[100svh] min-h-[560px] items-end overflow-hidden bg-charcoal text-cream">
        <Image
          src={project.heroImage.src}
          alt={project.heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-charcoal/10" />
        <Container className="relative pb-16 pt-32 lg:pb-24">
          <Label className="text-sandstone">
            {project.suburb} &middot; {project.year}
          </Label>
          <h1 className="mt-5 max-w-3xl font-display text-fluid-3xl leading-[0.98] text-balance">{project.name}</h1>
          <p className="mt-5 max-w-lg text-fluid-base text-cream/80">{project.scope}</p>
        </Container>
      </section>

      {/* Meta strip */}
      <section className="border-b border-charcoal/10 bg-cream py-12">
        <Container>
          <ProjectMeta project={project} />
        </Container>
      </section>

      {/* Challenge & response */}
      <section className="bg-cream py-24 lg:py-32" aria-label="Design challenge and response">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <ScrollReveal>
              <SectionHeading eyebrow="The Design Challenge" title="What we were asked to solve" size="md" />
              <p className="mt-6 max-w-lg text-fluid-base leading-relaxed text-charcoal/70">{project.challenge}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <SectionHeading eyebrow="The Architectural Response" title="How we responded" size="md" />
              <p className="mt-6 max-w-lg text-fluid-base leading-relaxed text-charcoal/70">{project.response}</p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Material palette */}
      <section className="bg-sandstone/20 py-24 lg:py-32" aria-label="Material palette">
        <Container>
          <SectionHeading eyebrow="Material Palette" title="What it's built from" />
          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3">
            {project.materialPalette.map((material) => (
              <div key={material.name}>
                <MaskReveal className="aspect-square overflow-hidden rounded-sm">
                  <Image
                    src={material.image.src}
                    alt={material.image.alt}
                    fill
                    sizes="(min-width: 640px) 30vw, 45vw"
                    className="object-cover"
                  />
                </MaskReveal>
                <p className="mt-4 text-fluid-sm text-charcoal/75">{material.name}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ProjectGallery images={project.gallery} />

      {project.beforeAfter && (
        <BeforeAfterSlider before={project.beforeAfter.before} after={project.beforeAfter.after} />
      )}

      {project.hasFloorplan && <FloorPlanViewer />}

      {testimonial && (
        <section className="bg-charcoal py-28 text-cream lg:py-36" aria-label="Client testimonial">
          <Container>
            <blockquote className="mx-auto max-w-3xl text-center">
              <p className="font-display text-fluid-2xl leading-[1.15] text-balance">&ldquo;{testimonial.quote}&rdquo;</p>
              <footer className="mt-8 text-fluid-xs uppercase tracking-widest2 text-cream/50">
                {testimonial.clientName} — {testimonial.suburb}
              </footer>
            </blockquote>
          </Container>
        </section>
      )}

      <RelatedProjects projects={related} />

      <section className="bg-cream pb-28 lg:pb-32" aria-label="Enquire about this project">
        <Container>
          <div className="flex flex-col items-start gap-6 rounded-sm bg-sandstone/20 p-10 sm:flex-row sm:items-center sm:justify-between lg:p-14">
            <div>
              <p className="font-display text-fluid-lg text-charcoal">Considering something similar?</p>
              <p className="mt-2 max-w-md text-fluid-sm text-charcoal/65">
                Every project starts with a conversation about your site and brief — {formatSqm(project.sizeSqm)} or
                otherwise.
              </p>
            </div>
            <Button href="/enquiry" size="lg" icon={<ArrowRight size={16} />} magnetic>
              Start a project
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
