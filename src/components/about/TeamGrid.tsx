import Image from "next/image";
import { team } from "@/content/team";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function TeamGrid() {
  return (
    <div className="grid grid-cols-2 gap-x-8 gap-y-14 sm:grid-cols-3 lg:grid-cols-5">
      {team.map((member, index) => (
        <ScrollReveal key={member.id} delay={index * 0.05}>
          <div className="relative aspect-[5/6] overflow-hidden rounded-sm bg-charcoal">
            <Image
              src={member.photo.src}
              alt={member.photo.alt}
              fill
              sizes="(min-width: 1024px) 20vw, 45vw"
              className="object-cover"
            />
          </div>
          <p className="mt-4 font-display text-fluid-base text-charcoal">{member.name}</p>
          <p className="mt-1 text-fluid-xs uppercase tracking-widest2 text-charcoal/50">{member.role}</p>
        </ScrollReveal>
      ))}
    </div>
  );
}
