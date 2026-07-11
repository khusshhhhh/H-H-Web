import type { Metadata } from "next";
import Image from "next/image";
import { Compass, Ruler, HeartHandshake, Leaf } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site-config";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { TeamGrid } from "@/components/about/TeamGrid";

export const metadata: Metadata = buildMetadata({
  title: "About Hills & Harbour",
  description:
    "Hills & Harbour is an Adelaide residential builder founded on considered design and transparent building practice. Meet the studio behind the projects.",
  path: "/about",
});

const VALUES = [
  {
    icon: Compass,
    title: "Design-led, always",
    body: "Every project is led by design intent, not a catalogue of standard inclusions. If a decision doesn't serve the brief, we say so.",
  },
  {
    icon: Ruler,
    title: "Precision in documentation",
    body: "The gap between what's drawn and what's built is where budgets blow out. We close that gap before construction starts.",
  },
  {
    icon: HeartHandshake,
    title: "Transparent by default",
    body: "Costs, timelines and trade-offs are explained plainly, including the ones that aren't in our commercial interest to raise.",
  },
  {
    icon: Leaf,
    title: "Built for the long run",
    body: "Material and system choices are weighed against decades of Adelaide seasons, not just the day of handover photography.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeroBanner
        eyebrow="About Us"
        title="A studio built around considered residential design"
        description="Hills & Harbour was founded to bring a design-first, transparent approach to residential building in Adelaide — without the trade-offs that usually come with either volume building or bespoke architecture alone."
      />

      <section className="bg-cream py-24 lg:py-32" aria-label="Our story">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center">
            <ScrollReveal className="lg:col-span-6">
              <SectionHeading
                eyebrow="Our Story"
                title="Started by people who were frustrated with the alternatives"
                size="md"
              />
              <div className="mt-6 flex flex-col gap-5 text-fluid-base leading-relaxed text-charcoal/70">
                <p>
                  Hills &amp; Harbour began with a simple observation: Adelaide homeowners were choosing between
                  volume builders offering speed and certainty but little design input, or architectural practices
                  offering design excellence with far less cost and schedule certainty. Few were offering both.
                </p>
                <p>
                  We built our studio to close that gap — an in-house design team working alongside our own
                  construction and estimating teams from the first site visit, so design decisions are informed by
                  buildability and cost from day one, not discovered as a surprise during documentation.
                </p>
                <p>
                  Today we work across custom homes, renovations, knockdown rebuilds, house and land packages and
                  small residential developments throughout metropolitan Adelaide, the Adelaide Hills and the
                  Fleurieu Coast.
                </p>
              </div>
            </ScrollReveal>
            <MaskReveal className="aspect-[4/5] overflow-hidden rounded-sm lg:col-span-6">
              <ParallaxLayer speed={0.07} className="absolute -inset-y-10 inset-x-0">
                <Image
                  src="/images/projects/burnside-ridge-residence/gallery/01.jpg"
                  alt="Open-plan living space in a Hills & Harbour project"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              </ParallaxLayer>
            </MaskReveal>
          </div>
        </Container>
      </section>

      <section className="bg-sandstone/20 py-24 lg:py-32" aria-label="Our values">
        <Container>
          <SectionHeading eyebrow="What Guides Us" title="Four principles behind every project" />
          <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.05}>
                <value.icon size={26} className="text-terracotta-text" aria-hidden="true" />
                <h3 className="mt-4 font-display text-fluid-lg text-charcoal">{value.title}</h3>
                <p className="mt-2 text-fluid-sm leading-relaxed text-charcoal/65">{value.body}</p>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-24 lg:py-32" aria-label="Our team">
        <Container>
          <SectionHeading eyebrow="The Studio" title="A small team, deliberately" description="Every project is overseen by the same core team from first conversation to handover — no rotating point of contact." />
          <div className="mt-14">
            <TeamGrid />
          </div>
        </Container>
      </section>

      <section className="border-t border-charcoal/10 bg-cream py-16" aria-label="Credentials">
        <Container>
          <div className="flex flex-col gap-6 text-fluid-sm text-charcoal/60 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-10">
            <span>Builder&rsquo;s licence {siteConfig.builderLicence}</span>
            {siteConfig.memberships.map((membership) => (
              <span key={membership}>{membership}</span>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
