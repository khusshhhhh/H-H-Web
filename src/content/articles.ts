import type { Article } from "@/types/article";

export const articles: Article[] = [
  {
    slug: "designing-for-adelaides-climate",
    title: "Designing for Adelaide's Climate, Not Against It",
    excerpt:
      "Hot, dry summers and mild, wet winters call for a different set of design responses than the display-home defaults most builders reach for. Here's what we actually specify, and why.",
    coverImage: { src: "/images/journal/adelaide-climate.jpg", alt: "Indoor-outdoor living space with stone fireplace opening to a courtyard", width: 1200, height: 800, isPlaceholder: true },
    publishedAt: "2026-02-11",
    author: "Nathan Cole",
    tags: ["Design", "Climate", "Sustainability"],
    readingMinutes: 6,
    body: [
      "Adelaide's Mediterranean climate is one of the more forgiving in Australia to design for, provided the fundamentals are addressed at concept stage rather than patched in later with air-conditioning capacity.",
      "Orientation is the first and cheapest lever. Living spaces facing north with generous eave overhangs let low winter sun deep into a room while excluding the high summer sun that would otherwise force mechanical cooling to work overtime. It costs nothing extra to get this right at the design stage, and a great deal to retrofit afterward.",
      "Cross-ventilation matters more in Adelaide than most clients expect. Our northerly summer nights cool quickly once the sea breeze arrives, and a floor plan that lets that breeze move through the house can meaningfully reduce reliance on air-conditioning across the warmer months.",
      "Thermal mass — typically concrete slab or masonry internal walls — smooths out Adelaide's daily temperature swings, absorbing heat during the day and releasing it overnight. Paired with good insulation and double glazing on western elevations, it's one of the more cost-effective sustainability decisions available at the specification stage.",
      "None of this requires a home to look different from what you had in mind. It requires the design process to start with the site and the sky, which is exactly where every Hills & Harbour project begins.",
    ],
  },
  {
    slug: "what-a-knockdown-rebuild-actually-involves",
    title: "What a Knockdown Rebuild Actually Involves",
    excerpt:
      "Demolition, services relocation, council approvals and the build itself — the knockdown rebuild process has more moving parts than most homeowners expect. Here's the realistic sequence.",
    coverImage: { src: "/images/journal/knockdown-rebuild.jpg", alt: "Interior wall opened up during a renovation, showing timber framing", width: 1200, height: 800, isPlaceholder: true },
    publishedAt: "2025-11-04",
    author: "Elena Kovacs",
    tags: ["Knockdown Rebuild", "Process"],
    readingMinutes: 5,
    body: [
      "A knockdown rebuild is often the right answer when a home's location is right but the building itself has reached the end of its practical life — yet the process is frequently misunderstood as simply 'demolition, then building.'",
      "Before any demolition permit is lodged, we confirm asbestos status (common in homes built before the mid-1980s), arrange disconnection of services, and check for any heritage or character overlays that affect what can replace the existing dwelling.",
      "Demolition itself typically takes one to two weeks, followed by a site survey to confirm soil classification for the new footings — this can differ from assumptions made using neighbouring lots' data, and affects both engineering and cost.",
      "From there, the rebuild follows the same documentation, approval and construction sequence as a new home on vacant land, with one advantage: services (power, water, sewer) are usually already connected to the boundary, which can shave meaningful time off the early construction program.",
      "The clients who navigate this most smoothly are the ones who budget for the demolition and site works phase as a distinct, costed stage — rather than assuming it's a rounding error before the 'real' build begins.",
    ],
  },
  {
    slug: "renovation-or-rebuild",
    title: "Renovation or Rebuild: How We Help Clients Decide",
    excerpt:
      "The right answer isn't always obvious from the street. We walk through the structural, financial and lifestyle factors that actually determine whether to renovate or start again.",
    coverImage: { src: "/images/journal/renovate-or-rebuild.jpg", alt: "Living room with arched openings during a renovation project", width: 1200, height: 800, isPlaceholder: true },
    publishedAt: "2025-08-19",
    author: "Claire Bennett",
    tags: ["Renovations", "Advice"],
    readingMinutes: 7,
    body: [
      "Clients often arrive with a firm view on renovation versus rebuild, and around a third of the time our site assessment changes their mind — in both directions.",
      "Structural condition is the first filter. Sound footings, a serviceable roof structure and walls free of significant movement usually make renovation the more cost-effective path. Where footings are inadequate for a second storey or an existing slab can't support the new floor plan, the maths often shifts toward a rebuild.",
      "Heritage and character overlays can also tip the decision. In some Adelaide suburbs, retaining an existing street-facing facade while rebuilding behind it satisfies both council requirements and a client's attachment to the home's street presence — effectively a hybrid of both approaches.",
      "Budget certainty matters too. Renovations of older homes carry more inherent unknowns — what's actually behind that wall — while a rebuild on a cleared site offers more predictable costing from day one.",
      "We put a genuine recommendation in writing before any design work begins, including the reasoning behind it, so the decision is made with full information rather than assumption.",
    ],
  },
  {
    slug: "building-near-adelaides-beaches",
    title: "Building Near Adelaide's Beaches: What Changes",
    excerpt:
      "Salt air, sea breezes and coastal planning overlays all affect what and how you build from Henley Beach to Glenelg. Here's what we specify differently on coastal blocks.",
    coverImage: { src: "/images/journal/coastal-living.jpg", alt: "Sunrise over the ocean near an Adelaide beach suburb", width: 1200, height: 800, isPlaceholder: true },
    publishedAt: "2025-05-27",
    author: "James Whitfield",
    tags: ["Coastal", "Materials"],
    readingMinutes: 5,
    body: [
      "Coastal exposure in suburbs like Glenelg, Henley Beach and Grange accelerates corrosion in standard fixings and finishes, which is why we default to marine-grade stainless steel fastenings and powder-coated aluminium within roughly one kilometre of the coastline.",
      "Render and masonry generally perform better than raw metal cladding in salt-affected air, though the right answer depends on exposure and orientation — a west-facing elevation copping the afternoon sea breeze needs a different specification to a sheltered courtyard wall two doors back from the beach.",
      "Coastal character and building overlays in several beachside council areas also influence built form, height and setbacks — factors we check during site assessment rather than after a concept design has already been developed.",
      "None of this needs to compromise the reason most people want to build near the coast in the first place: the light, the outlook and the breeze. Good coastal design simply plans for the environment instead of hoping it won't matter.",
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
