import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { services, getServiceBySlug } from "@/content/services";
import { getProjectBySlug } from "@/content/projects";
import { buildMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/ui/JsonLd";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.name,
    description: service.shortDescription,
    path: `/services/${service.slug}`,
    image: service.heroImage.src,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedProjects = service.relatedProjectSlugs
    .map((s) => getProjectBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.name, path: `/services/${service.slug}` },
  ];

  return (
    <>
      <JsonLd data={buildBreadcrumbJsonLd(breadcrumbItems)} />

      <section className="relative flex h-[70svh] min-h-[440px] items-end overflow-hidden bg-charcoal text-cream">
        <Image src={service.heroImage.src} alt={service.heroImage.alt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/25 to-charcoal/10" />
        <Container className="relative pb-16 pt-32">
          <Breadcrumbs items={breadcrumbItems} tone="dark" />
          <Label className="mt-6 block text-sandstone">Service</Label>
          <h1 className="mt-5 max-w-2xl font-display text-fluid-3xl leading-[0.98] text-balance">{service.name}</h1>
        </Container>
      </section>

      <section className="bg-cream py-24 lg:py-32" aria-label={`About ${service.name}`}>
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <ScrollReveal className="lg:col-span-7">
              <SectionHeading eyebrow="Overview" title="How this service works" size="md" />
              <p className="mt-6 max-w-xl text-fluid-base leading-relaxed text-charcoal/70">{service.fullDescription}</p>

              <ul className="mt-10 flex flex-col gap-4">
                {service.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <Check size={18} className="mt-0.5 shrink-0 text-terracotta-text" aria-hidden="true" />
                    <span className="text-fluid-sm text-charcoal/75">{highlight}</span>
                  </li>
                ))}
              </ul>

              <Button href="/enquiry" size="lg" icon={<ArrowRight size={16} />} className="mt-10" magnetic>
                Start a conversation
              </Button>
            </ScrollReveal>

            <div className="lg:col-span-5">
              <p className="mb-4 text-fluid-xs uppercase tracking-widest2 text-charcoal/45">Other Services</p>
              <ul className="flex flex-col">
                {services
                  .filter((s) => s.slug !== service.slug)
                  .map((s) => (
                    <li key={s.slug} className="border-b border-charcoal/10 py-4">
                      <a href={`/services/${s.slug}`} className="text-fluid-base text-charcoal/80 hover:text-terracotta-text">
                        {s.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {relatedProjects.length > 0 && (
        <section className="bg-sandstone/20 py-24 lg:py-32" aria-label="Related projects">
          <Container>
            <SectionHeading eyebrow="See It Built" title="Related projects" />
            <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2">
              {relatedProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
