import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/types/service";
import { MaskReveal } from "@/components/motion/MaskReveal";

export function ServiceCard({ service, index }: { service: Service; index?: number }) {
  return (
    <Link href={`/services/${service.slug}`} className="group block">
      <MaskReveal className="aspect-[4/3] overflow-hidden rounded-sm">
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          sizes="(min-width: 1024px) 30vw, 90vw"
          className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.05]"
        />
      </MaskReveal>
      <div className="mt-5 flex items-start justify-between gap-4 border-t border-charcoal/10 pt-5">
        <div>
          {index !== undefined && (
            <span className="mb-2 block text-fluid-xs tabular-nums tracking-widest2 text-terracotta-text">0{index + 1}</span>
          )}
          <h3 className="font-display text-fluid-lg text-charcoal group-hover:text-terracotta-text">{service.name}</h3>
          <p className="mt-2 max-w-xs text-fluid-sm text-charcoal/65">{service.shortDescription}</p>
        </div>
        <ArrowUpRight
          size={20}
          className="mt-1 shrink-0 -translate-x-1 text-charcoal/40 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-terracotta-text group-hover:opacity-100"
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}
