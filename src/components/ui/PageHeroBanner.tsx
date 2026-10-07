import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import type { PlaceholderImage } from "@/types/image";
import { cn } from "@/lib/utils";

interface PageHeroBannerProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  image?: PlaceholderImage;
  children?: ReactNode;
}

/** Shared full-bleed banner images for the top-level pages, kept here so every page pulls a distinct photograph. */
export const bannerImages = {
  about: { src: "/images/banners/about.jpg", alt: "Weathered timber batten cladding against the sky", width: 2000, height: 1000, isPlaceholder: true },
  areas: { src: "/images/banners/areas.jpg", alt: "Adelaide city skyline seen across the suburbs from the foothills", width: 2000, height: 1000, isPlaceholder: true },
  contact: { src: "/images/banners/contact.jpg", alt: "Two designers reviewing drawings and samples in a light-filled studio", width: 2000, height: 1000, isPlaceholder: true },
  faq: { src: "/images/banners/faq.jpg", alt: "Floor plans and a sketchbook laid out on a desk", width: 2000, height: 1000, isPlaceholder: true },
  journal: { src: "/images/banners/journal.jpg", alt: "Drafting pens and a scale rule resting on architectural plans", width: 2000, height: 1000, isPlaceholder: true },
  process: { src: "/images/banners/process.jpg", alt: "Timber roof trusses under construction against a blue sky", width: 2000, height: 1000, isPlaceholder: true },
  projects: { src: "/images/banners/projects.jpg", alt: "Cantilevered gable form in textured concrete with a glazed balcony", width: 2000, height: 1000, isPlaceholder: true },
  services: { src: "/images/banners/services.jpg", alt: "Glass-fronted two-storey home beside a pool at sunset", width: 2000, height: 1000, isPlaceholder: true },
  testimonials: { src: "/images/banners/testimonials.jpg", alt: "Sheltered courtyard with outdoor lounge seating and planting", width: 2000, height: 1000, isPlaceholder: true },
} satisfies Record<string, PlaceholderImage>;

export function PageHeroBanner({ eyebrow, title, description, image, children }: PageHeroBannerProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden",
        image ? "flex min-h-[72svh] items-end bg-charcoal pb-16 pt-44 text-cream lg:pb-24" : "bg-cream pb-20 pt-40 text-charcoal lg:pb-28",
      )}
    >
      {image && (
        <>
          <div className="absolute inset-0 -z-10">
            <Image src={image.src} alt={image.alt} fill preload sizes="100vw" className="animate-kenburns object-cover" />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/35" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal/55 via-transparent to-transparent" />
        </>
      )}

      <Container>
        <div className="flex items-center gap-4">
          <span className={cn("h-px w-10", image ? "bg-sandstone" : "bg-terracotta")} aria-hidden="true" />
          <Label className={image ? "text-sandstone" : "text-terracotta-text"}>{eyebrow}</Label>
        </div>
        <h1 className="mt-6 max-w-4xl font-display text-fluid-3xl leading-[0.98] text-balance">{title}</h1>
        {description && (
          <p className={cn("mt-6 max-w-xl text-fluid-base leading-relaxed", image ? "text-cream/80" : "text-charcoal/70")}>
            {description}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
