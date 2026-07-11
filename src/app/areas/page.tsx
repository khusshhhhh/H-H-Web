import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { serviceAreas } from "@/content/areas";
import { projects } from "@/content/projects";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";

export const metadata: Metadata = buildMetadata({
  title: "Areas We Serve",
  description:
    "Hills & Harbour builds custom homes, renovations and developments across Adelaide Metro, the Adelaide Hills, the Fleurieu Coast and the Barossa Valley.",
  path: "/areas",
});

export default function AreasPage() {
  return (
    <>
      <PageHeroBanner
        eyebrow="Where We Build"
        title="From the foothills to the coast"
        description="Every region we work in asks something different of a design — here's what changes, and where we've already built."
      />

      <section className="bg-cream pb-28 lg:pb-36" aria-label="Areas we serve">
        <Container>
          <div className="flex flex-col gap-28 lg:gap-36">
            {serviceAreas.map((area, index) => {
              const relatedProjects = projects.filter((p) => p.region === area.name).slice(0, 3);
              const reversed = index % 2 === 1;

              return (
                <div key={area.slug} className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
                  <div className={reversed ? "lg:order-2 lg:col-span-6" : "lg:col-span-6"}>
                    <MaskReveal className="aspect-[4/3] overflow-hidden rounded-sm">
                      <ParallaxLayer speed={0.06} className="absolute -inset-y-8 inset-x-0">
                        <Image
                          src={area.image.src}
                          alt={area.image.alt}
                          fill
                          sizes="(min-width: 1024px) 45vw, 90vw"
                          className="object-cover"
                        />
                      </ParallaxLayer>
                    </MaskReveal>
                  </div>

                  <ScrollReveal className={reversed ? "lg:order-1 lg:col-span-6" : "lg:col-span-6"}>
                    <h2 className="font-display text-fluid-2xl leading-[1.05] text-charcoal">{area.name}</h2>
                    <p className="mt-5 max-w-lg text-fluid-base leading-relaxed text-charcoal/70">{area.description}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {area.suburbs.map((suburb) => (
                        <span
                          key={suburb}
                          className="rounded-full border border-charcoal/15 px-3.5 py-1.5 text-fluid-xs uppercase tracking-widest2 text-charcoal/55"
                        >
                          {suburb}
                        </span>
                      ))}
                    </div>

                    {relatedProjects.length > 0 && (
                      <div className="mt-8 flex flex-col gap-2">
                        <p className="text-fluid-xs uppercase tracking-widest2 text-charcoal/45">Built here</p>
                        {relatedProjects.map((project) => (
                          <Link
                            key={project.slug}
                            href={`/projects/${project.slug}`}
                            className="group flex items-center gap-2 text-fluid-sm text-charcoal/80 hover:text-terracotta-text"
                          >
                            {project.name}, {project.suburb}
                            <ArrowRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </ScrollReveal>
                </div>
              );
            })}
          </div>

          <div className="mt-28 flex flex-col items-start gap-6 rounded-sm bg-charcoal p-10 text-cream sm:flex-row sm:items-center sm:justify-between lg:p-14">
            <div>
              <p className="font-display text-fluid-lg">Not sure if we build in your area?</p>
              <p className="mt-2 max-w-md text-fluid-sm text-cream/70">
                Get in touch with your suburb or region and we&rsquo;ll give you a straight answer.
              </p>
            </div>
            <Button href="/enquiry" tone="dark" size="lg" icon={<ArrowRight size={16} />} magnetic>
              Start a project
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
