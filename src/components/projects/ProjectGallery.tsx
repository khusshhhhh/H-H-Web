import Image from "next/image";
import type { PlaceholderImage } from "@/types/image";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { Container } from "@/components/ui/Container";

interface ProjectGalleryProps {
  images: PlaceholderImage[];
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  return (
    <section className="bg-cream py-24 lg:py-32" aria-label="Project gallery">
      <Container wide>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {images.map((image, index) => (
            <MaskReveal
              key={image.src + index}
              delay={index * 0.05}
              className={index % 3 === 0 ? "aspect-[4/3] sm:col-span-2" : "aspect-[4/3]"}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </MaskReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
