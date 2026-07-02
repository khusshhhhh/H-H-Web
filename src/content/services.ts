import type { Service } from "@/types/service";

const img = (src: string, alt: string, width: number, height: number) => ({
  src,
  alt,
  width,
  height,
  isPlaceholder: true as const,
  credit: "Stock photography (Unsplash) — placeholder for real project photography",
});

export const services: Service[] = [
  {
    slug: "custom-homes",
    name: "Custom Homes",
    shortDescription: "A home designed around your block, your routines and the way your family actually lives.",
    fullDescription:
      "Every custom home begins with the site, not a floor plan. We spend time understanding orientation, fall, prevailing breezes and the way you move through a day before a single wall is drawn, so the finished home responds to your block rather than being adapted to fit it. The result is a residence that feels considered from the street to the last skirting board.",
    image: img("/images/services/custom-homes.jpg", "Contemporary custom-built home with dark cladding", 1400, 1000),
    heroImage: img("/images/services/custom-homes.jpg", "Contemporary custom-built home with dark cladding", 1400, 1000),
    highlights: [
      "Site-specific design from concept through documentation",
      "Fixed-price building contracts with transparent variations",
      "Direct access to your project team throughout construction",
    ],
    relatedProjectSlugs: ["burnside-ridge-residence", "dune-house-glenelg"],
  },
  {
    slug: "luxury-homes",
    name: "Luxury Homes",
    shortDescription: "Elevated specification and considered detailing for clients building once and building well.",
    fullDescription:
      "Luxury, to us, is measured in decisions rather than square metres — the junction where a stone benchtop meets a window reveal, the way a pool terrace catches the last light, the quiet performance of a home that's genuinely comfortable in every season. We work with specialist trades and premium South Australian suppliers to deliver a standard of finish that holds up to close inspection for decades, not just at handover.",
    image: img("/images/services/luxury-homes.jpg", "Luxury home with pool and expansive glazing", 1400, 1000),
    heroImage: img("/images/services/luxury-homes.jpg", "Luxury home with pool and expansive glazing", 1400, 1000),
    highlights: [
      "Bespoke material and finish selections sourced through our supplier network",
      "Integrated landscape, pool and outdoor living design",
      "Dedicated selections consultant from concept to completion",
    ],
    relatedProjectSlugs: ["dune-house-glenelg", "walkerville-riverside-residences"],
  },
  {
    slug: "knockdown-rebuilds",
    name: "Knockdown Rebuilds",
    shortDescription: "Replace a tired home with a new one, on the block and in the suburb you've already chosen.",
    fullDescription:
      "A knockdown rebuild lets you stay in the location, school zone and street you value while starting fresh below the roofline. We manage demolition, authority approvals, services relocation and the build itself as one coordinated program, so there's a single point of accountability from the first site visit to the final inspection — not a handoff between separate demolition and building contracts.",
    image: img("/images/services/knockdown-rebuilds.jpg", "Contemporary rebuild on an established suburban street", 1400, 1000),
    heroImage: img("/images/services/knockdown-rebuilds.jpg", "Contemporary rebuild on an established suburban street", 1400, 1000),
    highlights: [
      "End-to-end management of demolition, approvals and services",
      "Heritage overlay and character precinct experience",
      "Design responses tailored to established streetscapes",
    ],
    relatedProjectSlugs: ["osmond-terrace-rebuild"],
  },
  {
    slug: "house-and-land",
    name: "House & Land",
    shortDescription: "A home matched to your block before contracts are signed, not adjusted to fit it afterward.",
    fullDescription:
      "We review land before you commit to it — slope, orientation, bushfire attack level, easements and council overlays — so the home you've budgeted for is the home you're actually able to build. Where we're building in a new estate or Hills allotment, we work directly with the land developer and council on your behalf to keep approvals moving.",
    image: img("/images/services/house-and-land.jpg", "Contemporary home in the Adelaide Hills at dusk", 1400, 1000),
    heroImage: img("/images/services/house-and-land.jpg", "Contemporary home in the Adelaide Hills at dusk", 1400, 1000),
    highlights: [
      "Independent land assessment before you exchange contracts",
      "Bushfire attack level (BAL) and slope-responsive design",
      "Packages available across Adelaide's growth corridors and the Hills",
    ],
    relatedProjectSlugs: ["hahndorf-road-house-and-land"],
  },
  {
    slug: "residential-developments",
    name: "Residential Developments",
    shortDescription: "Small-lot and multi-dwelling developments designed to hold their value as a considered whole.",
    fullDescription:
      "For landholders and investors, we design and deliver boutique developments — torrens title, community title and small multi-unit projects — with a masterplanning approach that protects amenity and street appeal across every allotment, not just the show lot. We work with your feasibility from concept, so design decisions are grounded in the numbers from day one.",
    image: img("/images/services/residential-developments.jpg", "Boutique residential development with shared landscaping", 1400, 1000),
    heroImage: img("/images/services/residential-developments.jpg", "Boutique residential development with shared landscaping", 1400, 1000),
    highlights: [
      "Feasibility-informed masterplanning and staging",
      "Torrens title, community title and small multi-unit experience",
      "Coordinated delivery across every dwelling in the development",
    ],
    relatedProjectSlugs: ["walkerville-riverside-residences"],
  },
  {
    slug: "renovations-extensions",
    name: "Renovations & Extensions",
    shortDescription: "Considered additions that respect what's working in your home and resolve what isn't.",
    fullDescription:
      "The best renovations don't announce themselves — they simply make a home work the way it should have all along. We assess structure, services and orientation before proposing a design direction, so you understand what's genuinely achievable within your budget before you fall in love with a concept that isn't. Many of our renovation clients live in the property throughout construction, and we plan sequencing accordingly.",
    image: img("/images/services/renovations-extensions.jpg", "Renovated rear pavilion extension with timber cladding", 1400, 1000),
    heroImage: img("/images/services/renovations-extensions.jpg", "Renovated rear pavilion extension with timber cladding", 1400, 1000),
    highlights: [
      "Structural and services assessment prior to design",
      "Staged construction planning for occupied homes",
      "Character and heritage-sensitive extension design",
    ],
    relatedProjectSlugs: ["unley-park-pavilion", "henley-beach-courtyard-house"],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
