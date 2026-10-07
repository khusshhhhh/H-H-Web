import Image from "next/image";
import type { PlaceholderImage } from "@/types/image";
import { MaskReveal } from "@/components/motion/MaskReveal";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { cn } from "@/lib/utils";

interface ProjectGalleryProps {
  images: PlaceholderImage[];
}

/** Editorial rhythm: a wide opener, a staggered portrait pair, then a wide closer — repeating every four images. */
const LAYOUT = [
  { frame: "aspect-[16/10] sm:col-span-12", sizes: "100vw" },
  { frame: "aspect-[4/5] sm:col-span-5", sizes: "(min-width: 640px) 42vw, 100vw" },
  { frame: "aspect-[4/5] sm:col-span-7 sm:mt-24", sizes: "(min-width: 640px) 58vw, 100vw" },
  { frame: "aspect-[21/10] sm:col-span-12", sizes: "100vw" },
];

export function ProjectGallery({ images }: ProjectGalleryProps) {
  return (
    <section className="bg-cream py-24 lg:py-32" aria-label="Project gallery">
      <Container wide>
        <div className="mb-10 flex items-end justify-between">
          <Label>Gallery</Label>
          <span className="text-fluid-xs tabular-nums tracking-widest2 text-charcoal/45">
            {String(images.length).padStart(2, "0")} images
          </span>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-12 lg:gap-8">
          {images.map((image, index) => {
            const slot = LAYOUT[index % LAYOUT.length];
            return (
              <figure key={image.src + index} className={cn("group relative", slot.frame)}>
                <MaskReveal delay={(index % 2) * 0.08} className="h-full w-full rounded-sm">
                  <div className="relative h-full w-full overflow-hidden bg-charcoal">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes={slot.sizes}
                      className="object-cover transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.04]"
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end gap-4 bg-gradient-to-t from-charcoal/80 to-transparent p-5 pt-16 text-fluid-xs text-cream/90 opacity-0 transition-all duration-500 ease-editorial group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="tabular-nums tracking-widest2 text-sandstone">{String(index + 1).padStart(2, "0")}</span>
                      <span>{image.alt}</span>
                    </figcaption>
                  </div>
                </MaskReveal>
              </figure>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
