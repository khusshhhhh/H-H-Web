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

export function PageHeroBanner({ eyebrow, title, description, image, children }: PageHeroBannerProps) {
  return (
    <section className={cn("relative pt-40 pb-20 lg:pb-28", image ? "text-cream" : "bg-cream text-charcoal")}>
      {image && (
        <>
          <div className="absolute inset-0 -z-10">
            <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="object-cover" />
          </div>
          <div className="absolute inset-0 -z-10 bg-charcoal/55" />
        </>
      )}

      <Container>
        <Label className={image ? "text-sandstone" : "text-terracotta-text"}>{eyebrow}</Label>
        <h1 className="mt-5 max-w-4xl font-display text-fluid-3xl leading-[0.98] text-balance">{title}</h1>
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
