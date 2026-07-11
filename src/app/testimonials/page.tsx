import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { testimonials } from "@/content/testimonials";
import { getProjectBySlug } from "@/content/projects";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export const metadata: Metadata = buildMetadata({
  title: "Client Testimonials",
  description:
    "What clients say about building a custom home, renovation or development with Hills & Harbour across Adelaide.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  const [featured, ...rest] = testimonials;

  return (
    <>
      <PageHeroBanner
        eyebrow="Client Stories"
        title="Judged on what clients say after handover, not before"
        description="Placeholder testimonials illustrating the tone and detail we'll gather from real clients — final quotes will replace these before launch."
      />

      <section className="bg-cream py-24 lg:py-32" aria-label="Featured testimonial">
        <Container>
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <Quote size={36} className="mx-auto text-terracotta" aria-hidden="true" />
            <p className="mt-8 font-display text-fluid-2xl leading-[1.15] text-charcoal text-balance">
              &ldquo;{featured.quote}&rdquo;
            </p>
            <footer className="mt-8 text-fluid-sm uppercase tracking-widest2 text-charcoal/50">
              {featured.clientName} — {featured.suburb}
            </footer>
            {featured.projectSlug && (
              <Link
                href={`/projects/${featured.projectSlug}`}
                className="mt-4 inline-flex items-center gap-2 text-fluid-sm text-terracotta-text hover:text-charcoal"
              >
                View the project <ArrowRight size={14} />
              </Link>
            )}
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-sandstone/20 py-24 lg:py-32" aria-label="More client testimonials">
        <Container>
          <div className="grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((testimonial, index) => {
              const project = testimonial.projectSlug ? getProjectBySlug(testimonial.projectSlug) : undefined;
              return (
                <ScrollReveal key={testimonial.id} delay={index * 0.05}>
                  <blockquote className="flex h-full flex-col border-l-2 border-terracotta pl-6">
                    <p className="flex-1 text-fluid-base leading-relaxed text-charcoal/80">&ldquo;{testimonial.quote}&rdquo;</p>
                    <footer className="mt-5 text-fluid-xs uppercase tracking-widest2 text-charcoal/45">
                      {testimonial.clientName} — {testimonial.suburb}
                    </footer>
                    {project && (
                      <Link
                        href={`/projects/${project.slug}`}
                        className="mt-2 inline-flex w-fit items-center gap-1.5 text-fluid-xs text-terracotta-text hover:text-charcoal"
                      >
                        {project.name} <ArrowRight size={12} />
                      </Link>
                    )}
                  </blockquote>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="mt-20 flex flex-col items-start gap-6 rounded-sm bg-charcoal p-10 text-cream sm:flex-row sm:items-center sm:justify-between lg:p-14">
            <div>
              <p className="font-display text-fluid-lg">Ready to start your own story?</p>
              <p className="mt-2 max-w-md text-fluid-sm text-cream/70">
                Every project on this page started with a short, obligation-free conversation.
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
