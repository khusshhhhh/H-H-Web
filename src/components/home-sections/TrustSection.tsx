import { ShieldCheck, Award } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { testimonials } from "@/content/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

const STATS = [
  { value: `${siteConfig.yearsCombinedExperience}+`, label: "Years combined team experience" },
  { value: `${siteConfig.homesCompleted}+`, label: "Homes completed across South Australia" },
  { value: `${siteConfig.areasServed.length}`, label: "Regions served, coast to Hills" },
  { value: "6", label: "Structural warranty on every home" },
];

const featuredTestimonials = testimonials.slice(0, 3);

export function TrustSection() {
  return (
    <section className="bg-cream py-28 lg:py-36" aria-label="Trust and capability">
      <Container>
        <SectionHeading eyebrow="Why Hills & Harbour" title="Judged on what's already built" />

        <dl className="mt-14 grid grid-cols-2 gap-8 border-y border-charcoal/10 py-12 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-fluid-2xl text-charcoal">{stat.value}</dd>
              <p className="mt-2 max-w-[16ch] text-fluid-xs uppercase tracking-widest2 text-charcoal/50">{stat.label}</p>
            </div>
          ))}
        </dl>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {featuredTestimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 0.08}>
              <blockquote className="border-l-2 border-terracotta pl-6">
                <p className="text-fluid-base leading-relaxed text-charcoal/80">&ldquo;{testimonial.quote}&rdquo;</p>
                <footer className="mt-4 text-fluid-xs uppercase tracking-widest2 text-charcoal/45">
                  {testimonial.clientName} — {testimonial.suburb}
                </footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-8 border-t border-charcoal/10 pt-10 text-fluid-sm text-charcoal/60 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <ShieldCheck size={20} className="text-eucalyptus-text" aria-hidden="true" />
            <span>Builder&rsquo;s licence {siteConfig.builderLicence}</span>
          </div>
          <div className="flex items-center gap-3">
            <Award size={20} className="text-eucalyptus-text" aria-hidden="true" />
            <span>{siteConfig.memberships.join(" · ")}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
