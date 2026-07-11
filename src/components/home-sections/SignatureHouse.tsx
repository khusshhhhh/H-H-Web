import Image from "next/image";
import { LayoutPanelTop, Layers, Zap, Trees } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

const DETAILS = [
  {
    icon: LayoutPanelTop,
    title: "Facade",
    description: "A layered facade of render and timber, detailed to age gracefully in Adelaide's UV exposure.",
  },
  {
    icon: Layers,
    title: "Materials",
    description: "Material selections are matched to orientation — durable, low-maintenance finishes on exposed faces.",
  },
  {
    icon: Zap,
    title: "Energy Efficiency",
    description: "Double glazing, cross-ventilation and thermal mass are specified as standard, not upgrades.",
  },
  {
    icon: Trees,
    title: "Landscape Response",
    description: "Eaves, screening and landscaping are designed together to manage sun, privacy and outlook.",
  },
];

export function SignatureHouse() {
  return (
    <section className="bg-cream py-28 lg:py-36" aria-label="Signature details">
      <Container>
        <SectionHeading
          eyebrow="Explore The Detail"
          title="A closer look at how we build"
          description="Four decisions that separate a considered home from a display-home default — the kind of detail that's easy to miss on a walkthrough and expensive to add afterward."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
          <MaskReveal className="aspect-[4/3] overflow-hidden rounded-sm bg-charcoal lg:col-span-8">
            <ParallaxLayer speed={0.06} className="absolute -inset-y-8 inset-x-0">
              <Image
                src="/images/home/hero.jpg"
                alt="Contemporary Hills & Harbour home exterior at dusk"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </ParallaxLayer>
          </MaskReveal>

          <div className="flex flex-col gap-8 lg:col-span-4">
            {DETAILS.map((detail, index) => (
              <ScrollReveal key={detail.title} delay={index * 0.05} className="flex gap-4">
                <detail.icon size={22} className="mt-0.5 shrink-0 text-terracotta-text" aria-hidden="true" />
                <div>
                  <p className="font-display text-fluid-base text-charcoal">{detail.title}</p>
                  <p className="mt-1.5 text-fluid-sm leading-relaxed text-charcoal/65">{detail.description}</p>
                </div>
              </ScrollReveal>
            ))}

            <p className="mt-2 text-fluid-xs leading-relaxed text-charcoal/45">
              Imagery shown is illustrative. Final material and finish outcomes are confirmed during selections and
              vary by site, orientation and product availability.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
