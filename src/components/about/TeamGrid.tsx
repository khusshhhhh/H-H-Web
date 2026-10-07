import Image from "next/image";
import { team } from "@/content/team";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export function TeamGrid() {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-14 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-8">
      {team.map((member, index) => (
        <ScrollReveal key={member.id} delay={index * 0.05} className={index % 2 === 1 ? "lg:mt-14" : undefined}>
          <div className="group relative aspect-[5/6] overflow-hidden rounded-sm bg-charcoal" tabIndex={0}>
            <Image
              src={member.photo.src}
              alt={member.photo.alt}
              fill
              sizes="(min-width: 1024px) 20vw, 45vw"
              className="object-cover grayscale transition-all duration-700 ease-editorial group-hover:scale-[1.04] group-hover:grayscale-0 group-focus:scale-[1.04] group-focus:grayscale-0"
            />
            <div className="absolute inset-0 flex translate-y-full items-end bg-gradient-to-t from-charcoal via-charcoal/85 to-charcoal/20 p-4 transition-transform duration-500 ease-editorial group-hover:translate-y-0 group-focus:translate-y-0">
              <p className="text-fluid-xs leading-relaxed text-cream/90">{member.bio}</p>
            </div>
            <span className="absolute left-3 top-3 text-[0.65rem] tabular-nums tracking-widest2 text-cream/80">
              0{index + 1}
            </span>
          </div>
          <p className="mt-4 font-display text-fluid-base text-charcoal">{member.name}</p>
          <p className="mt-1 text-fluid-xs uppercase tracking-widest2 text-charcoal/50">{member.role}</p>
        </ScrollReveal>
      ))}
    </div>
  );
}
