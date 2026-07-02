import type { Project } from "@/types/project";

const img = (
  src: string,
  alt: string,
  width: number,
  height: number,
): Project["heroImage"] => ({ src, alt, width, height, isPlaceholder: true, credit: "Stock photography (Unsplash) — placeholder for real project photography" });

export const projects: Project[] = [
  {
    slug: "burnside-ridge-residence",
    name: "Burnside Ridge Residence",
    suburb: "Burnside",
    region: "Adelaide Metro",
    category: "Custom Homes",
    year: 2024,
    sizeSqm: 412,
    scope: "New custom build — 4 bedroom, 3 bathroom, double garage, in-ground pool",
    heroImage: img("/images/projects/burnside-ridge-residence/hero.jpg", "Contemporary two-storey home with dark cladding set among mature trees in Burnside", 1600, 1000),
    cardImage: img("/images/projects/burnside-ridge-residence/hero.jpg", "Contemporary two-storey home with dark cladding set among mature trees in Burnside", 1600, 1000),
    orientation: "landscape",
    challenge:
      "The clients wanted a home that felt private from the street without losing the established gum trees that shaped the block, on a site with a six-metre cross-fall that most volume builders had written off as too costly to work with.",
    response:
      "We stepped the floor plate down the slope in three shallow platforms, keeping excavation to a minimum and letting the upper level cantilever gently toward the canopy. A dark, low-maintenance cladding recedes against the foliage, while a full-height glazed link frames the largest tree from the kitchen and living spaces.",
    materialPalette: [
      { name: "Feature Timber Cladding", image: img("/images/projects/burnside-ridge-residence/materials/01.jpg", "Timber cladding detail on the Burnside Ridge Residence", 500, 500) },
      { name: "Board-Formed Render", image: img("/images/projects/burnside-ridge-residence/materials/02.jpg", "Board-formed render facade detail", 500, 500) },
      { name: "Natural Stone Fireplace", image: img("/images/projects/burnside-ridge-residence/materials/03.jpg", "Natural stone fireplace surround", 500, 500) },
    ],
    gallery: [
      img("/images/projects/burnside-ridge-residence/gallery/01.jpg", "Open-plan living and kitchen with timber feature wall", 1200, 900),
      img("/images/projects/burnside-ridge-residence/gallery/02.jpg", "Living room opening to outdoor entertaining area with stone fireplace", 1200, 900),
      img("/images/projects/burnside-ridge-residence/gallery/03.jpg", "Kitchen with island bench and pendant lighting", 1200, 900),
      img("/images/projects/burnside-ridge-residence/gallery/04.jpg", "Main bedroom with feature wall and pendant lighting", 1200, 900),
    ],
    hasFloorplan: true,
    testimonialId: "t-burnside",
    relatedProjectSlugs: ["dune-house-glenelg", "hahndorf-road-house-and-land"],
    featured: true,
  },
  {
    slug: "osmond-terrace-rebuild",
    name: "Osmond Terrace Rebuild",
    suburb: "Norwood",
    region: "Adelaide Metro",
    category: "Custom Homes",
    year: 2023,
    sizeSqm: 298,
    scope: "Knockdown rebuild — 3 bedroom, 2 bathroom, established inner-suburban block",
    heroImage: img("/images/projects/osmond-terrace-rebuild/hero.jpg", "Contemporary render and timber home on an established Norwood street", 1600, 1000),
    cardImage: img("/images/projects/osmond-terrace-rebuild/card.jpg", "Contemporary render and timber home on an established Norwood street, portrait crop", 900, 1200),
    orientation: "portrait",
    challenge:
      "A 1960s villa on a narrow Norwood block had reached the point where renovation no longer made financial sense, but the streetscape's heritage overlay and a tight 12-metre frontage limited what could replace it.",
    response:
      "We designed a considered street presence in materials that echo the neighbouring roofline and setbacks, while opening the rear entirely to the north for light and cross-ventilation. The result reads as part of the street rather than against it, while performing to a materially higher standard than the home it replaced.",
    materialPalette: [
      { name: "Painted Render Facade", image: img("/images/projects/osmond-terrace-rebuild/materials/01.jpg", "Painted render facade detail", 500, 500) },
      { name: "Glass & Black Steel Glazing", image: img("/images/projects/osmond-terrace-rebuild/materials/02.jpg", "Black steel-framed glazing detail", 500, 500) },
      { name: "Engineered Stone Benchtop", image: img("/images/projects/osmond-terrace-rebuild/materials/03.jpg", "Engineered stone benchtop detail", 500, 500) },
    ],
    gallery: [
      img("/images/projects/osmond-terrace-rebuild/gallery/01.jpg", "Living area with staircase and northern light", 1200, 900),
      img("/images/projects/osmond-terrace-rebuild/gallery/02.jpg", "Kitchen with island bench and bar stools", 1200, 900),
      img("/images/projects/osmond-terrace-rebuild/gallery/03.jpg", "Bathroom with dark tiling and freestanding bath", 1200, 900),
      img("/images/projects/osmond-terrace-rebuild/gallery/04.jpg", "Living room with grey sofa and timber flooring", 1200, 900),
    ],
    relatedProjectSlugs: ["burnside-ridge-residence", "unley-park-pavilion"],
    featured: false,
  },
  {
    slug: "unley-park-pavilion",
    name: "Unley Park Pavilion",
    suburb: "Unley Park",
    region: "Adelaide Metro",
    category: "Renovations",
    year: 2023,
    sizeSqm: 165,
    scope: "Rear renovation and pavilion extension — kitchen, living and outdoor room",
    heroImage: img("/images/projects/unley-park-pavilion/hero.jpg", "Rear pavilion extension with black timber cladding beneath a mature gum tree", 1600, 1000),
    cardImage: img("/images/projects/unley-park-pavilion/hero.jpg", "Rear pavilion extension with black timber cladding beneath a mature gum tree", 1600, 1000),
    orientation: "landscape",
    challenge:
      "A well-loved character home had a dark, disconnected rear kitchen and no genuine link to the garden. The brief was to keep the original street-facing rooms untouched while transforming the way the family actually lived at the back of the house.",
    response:
      "A single-storey pavilion in blackened timber sits deliberately apart from the original roofline, connected by a low glazed link that reads as a considered addition rather than an apology. Retractable glazing lets the new living space fold open to a north-facing courtyard around an existing gum tree we built the whole plan to protect.",
    materialPalette: [
      { name: "Feature Timber Cladding", image: img("/images/projects/unley-park-pavilion/materials/01.jpg", "Blackened timber cladding detail", 500, 500) },
      { name: "Natural Stone Fireplace", image: img("/images/projects/unley-park-pavilion/materials/02.jpg", "Natural stone detail", 500, 500) },
      { name: "Engineered Stone Benchtop", image: img("/images/projects/unley-park-pavilion/materials/03.jpg", "Engineered stone benchtop detail", 500, 500) },
    ],
    gallery: [
      img("/images/projects/unley-park-pavilion/gallery/01.jpg", "Dining area with black steel staircase beyond", 1200, 900),
      img("/images/projects/unley-park-pavilion/gallery/02.jpg", "Living room with arched openings and fireplace", 1200, 900),
      img("/images/projects/unley-park-pavilion/gallery/03.jpg", "Bathroom with freestanding bath", 1200, 900),
      img("/images/projects/unley-park-pavilion/gallery/04.jpg", "Living room styled with soft furnishings", 1200, 900),
    ],
    beforeAfter: {
      before: img("/images/projects/unley-park-pavilion/before.jpg", "Illustrative before photograph — original rear addition prior to renovation (representative placeholder, not the actual property)", 1200, 900),
      after: img("/images/projects/unley-park-pavilion/after.jpg", "Illustrative after photograph — completed pavilion extension (representative placeholder, not the actual property)", 1200, 900),
    },
    testimonialId: "t-unley",
    relatedProjectSlugs: ["henley-beach-courtyard-house", "osmond-terrace-rebuild"],
    featured: true,
  },
  {
    slug: "dune-house-glenelg",
    name: "Dune House",
    suburb: "Glenelg",
    region: "Adelaide Metro",
    category: "Custom Homes",
    year: 2024,
    sizeSqm: 356,
    scope: "New custom build — 4 bedroom, 3 bathroom, coastal block, in-ground pool",
    heroImage: img("/images/projects/dune-house-glenelg/hero.jpg", "Modern white home with pool and timber-lined ceiling near Glenelg beach", 1600, 1000),
    cardImage: img("/images/projects/dune-house-glenelg/card.jpg", "Modern white home with pool near Glenelg beach, portrait crop", 900, 1200),
    orientation: "portrait",
    challenge:
      "Salt air, sea breezes and an exposed westerly aspect meant durability had to be designed in from the first sketch, without the finished home feeling armoured against its own setting.",
    response:
      "A restrained material palette of powder-coated aluminium, marine-grade fixings and rendered masonry gives the home a genuine coastal service life, while deep eaves and operable screens manage summer glare without blocking the sea breeze the site was chosen for. The pool and entertaining terrace sit hard against the northern boundary to maximise usable outdoor space on a comparatively tight coastal lot.",
    materialPalette: [
      { name: "Painted Render Facade", image: img("/images/projects/dune-house-glenelg/materials/01.jpg", "Painted render facade detail", 500, 500) },
      { name: "Glass & Black Steel Glazing", image: img("/images/projects/dune-house-glenelg/materials/02.jpg", "Glazing detail", 500, 500) },
      { name: "Engineered Stone Benchtop", image: img("/images/projects/dune-house-glenelg/materials/03.jpg", "Engineered stone benchtop detail", 500, 500) },
    ],
    gallery: [
      img("/images/projects/dune-house-glenelg/gallery/01.jpg", "Pool terrace with glass balustrade", 1200, 900),
      img("/images/projects/dune-house-glenelg/gallery/02.jpg", "Kitchen with marble-look benchtops", 1200, 900),
      img("/images/projects/dune-house-glenelg/gallery/03.jpg", "Living room with plants and coastal light", 1200, 900),
      img("/images/projects/dune-house-glenelg/gallery/04.jpg", "Living room with warm tones and rattan pendant", 1200, 900),
    ],
    hasFloorplan: true,
    testimonialId: "t-glenelg",
    relatedProjectSlugs: ["burnside-ridge-residence", "henley-beach-courtyard-house"],
    featured: true,
  },
  {
    slug: "henley-beach-courtyard-house",
    name: "Henley Beach Courtyard House",
    suburb: "Henley Beach",
    region: "Adelaide Metro",
    category: "Renovations",
    year: 2022,
    sizeSqm: 210,
    scope: "Whole-of-home renovation and extension — courtyard, kitchen and main suite",
    heroImage: img("/images/projects/henley-beach-courtyard-house/hero.jpg", "Contemporary home with perforated metal screening near Henley Beach", 1600, 1000),
    cardImage: img("/images/projects/henley-beach-courtyard-house/hero.jpg", "Contemporary home with perforated metal screening near Henley Beach", 1600, 1000),
    orientation: "landscape",
    challenge:
      "The existing home turned its back on a generous rear block, with small windows and a low-set roof that made the interior feel dark for most of the year despite the coastal location.",
    response:
      "We opened the rear elevation around a new central courtyard, using perforated metal screening to filter western sun while maintaining privacy from neighbouring properties. The courtyard now does double duty as a light well for the kitchen and living areas and a sheltered outdoor room usable for most of the year.",
    materialPalette: [
      { name: "Perforated Metal Screening", image: img("/images/projects/henley-beach-courtyard-house/materials/01.jpg", "Perforated metal screening detail", 500, 500) },
      { name: "Feature Timber Cladding", image: img("/images/projects/henley-beach-courtyard-house/materials/02.jpg", "Timber cladding detail", 500, 500) },
      { name: "Natural Stone Fireplace", image: img("/images/projects/henley-beach-courtyard-house/materials/03.jpg", "Natural stone detail", 500, 500) },
    ],
    gallery: [
      img("/images/projects/henley-beach-courtyard-house/gallery/01.jpg", "Living room with warm rustic tones", 1200, 900),
      img("/images/projects/henley-beach-courtyard-house/gallery/02.jpg", "Kitchen with pendant lighting", 1200, 900),
      img("/images/projects/henley-beach-courtyard-house/gallery/03.jpg", "Bathroom with freestanding bath", 1200, 900),
      img("/images/projects/henley-beach-courtyard-house/gallery/04.jpg", "Living room styled with soft furnishings", 1200, 900),
    ],
    beforeAfter: {
      before: img("/images/projects/henley-beach-courtyard-house/before.jpg", "Illustrative before photograph — original rear of home prior to renovation (representative placeholder, not the actual property)", 1200, 900),
      after: img("/images/projects/henley-beach-courtyard-house/after.jpg", "Illustrative after photograph — completed courtyard renovation (representative placeholder, not the actual property)", 1200, 900),
    },
    relatedProjectSlugs: ["unley-park-pavilion", "dune-house-glenelg"],
    featured: true,
  },
  {
    slug: "walkerville-riverside-residences",
    name: "Walkerville Riverside Residences",
    suburb: "Walkerville",
    region: "Adelaide Metro",
    category: "Developments",
    year: 2023,
    sizeSqm: 890,
    scope: "Boutique development — four architecturally matched torrens-title residences",
    heroImage: img("/images/projects/walkerville-riverside-residences/hero.jpg", "Modern white residences with pool near the Torrens River at Walkerville", 1600, 1000),
    cardImage: img("/images/projects/walkerville-riverside-residences/hero.jpg", "Modern white residences with pool near the Torrens River at Walkerville", 1600, 1000),
    orientation: "landscape",
    challenge:
      "The landholder wanted more than a standard subdivision of near-identical dwellings — a small development that would hold its value and its street appeal as a considered whole, on a site close enough to the Torrens to trade on outlook and access.",
    response:
      "Four torrens-title homes share a coherent material language and a common landscape strategy without repeating a single elevation, so the group reads as a considered small development rather than a project-home row. Shared driveway and screening plantings were resolved at the masterplan stage, ahead of individual dwelling design, to protect the amenity of every lot equally.",
    materialPalette: [
      { name: "Painted Render Facade", image: img("/images/projects/walkerville-riverside-residences/materials/01.jpg", "Painted render facade detail", 500, 500) },
      { name: "Perforated Metal Screening", image: img("/images/projects/walkerville-riverside-residences/materials/02.jpg", "Perforated metal screening detail", 500, 500) },
      { name: "Glass & Black Steel Glazing", image: img("/images/projects/walkerville-riverside-residences/materials/03.jpg", "Glazing detail", 500, 500) },
    ],
    gallery: [
      img("/images/projects/walkerville-riverside-residences/gallery/01.jpg", "Living room with grey tones and timber flooring", 1200, 900),
      img("/images/projects/walkerville-riverside-residences/gallery/02.jpg", "Dining area with black steel staircase", 1200, 900),
      img("/images/projects/walkerville-riverside-residences/gallery/03.jpg", "Kitchen with island bench and bar stools", 1200, 900),
      img("/images/projects/walkerville-riverside-residences/gallery/04.jpg", "Living room with arched openings and fireplace", 1200, 900),
    ],
    testimonialId: "t-walkerville",
    relatedProjectSlugs: ["hahndorf-road-house-and-land", "burnside-ridge-residence"],
    featured: true,
  },
  {
    slug: "hahndorf-road-house-and-land",
    name: "Hahndorf Road Residence",
    suburb: "Mount Barker",
    region: "Adelaide Hills",
    category: "House & Land",
    year: 2025,
    sizeSqm: 268,
    scope: "House and land package — 4 bedroom, 2 bathroom, Adelaide Hills allotment",
    heroImage: img("/images/projects/hahndorf-road-house-and-land/hero.jpg", "Contemporary cantilevered home at dusk in the Adelaide Hills near Mount Barker", 1600, 1000),
    cardImage: img("/images/projects/hahndorf-road-house-and-land/card.jpg", "Contemporary cantilevered home at dusk in the Adelaide Hills, portrait crop", 900, 1200),
    orientation: "portrait",
    challenge:
      "Buying land and briefing a home at the same time can leave clients exposed to cost blowouts once the true nature of a block is understood. This Hills allotment carried a noticeable slope and a bushfire risk rating that a generic house-and-land package hadn't accounted for.",
    response:
      "We matched a home design to the land before contracts were signed, adjusting the floor plan and construction specification for the site's actual bushfire attack level and fall, so the price the clients budgeted for was the price they built to. The finished home cantilevers gently over the lower slope to reduce cut and fill, with a material specification upgraded to meet BAL requirements without the home feeling like a bunker.",
    materialPalette: [
      { name: "Feature Timber Cladding", image: img("/images/projects/hahndorf-road-house-and-land/materials/01.jpg", "Timber cladding detail", 500, 500) },
      { name: "Board-Formed Render", image: img("/images/projects/hahndorf-road-house-and-land/materials/02.jpg", "Render facade detail", 500, 500) },
      { name: "Engineered Stone Benchtop", image: img("/images/projects/hahndorf-road-house-and-land/materials/03.jpg", "Engineered stone benchtop detail", 500, 500) },
    ],
    gallery: [
      img("/images/projects/hahndorf-road-house-and-land/gallery/01.jpg", "Open-plan living and kitchen with timber feature wall", 1200, 900),
      img("/images/projects/hahndorf-road-house-and-land/gallery/02.jpg", "Living room with warm tones and rattan pendant", 1200, 900),
      img("/images/projects/hahndorf-road-house-and-land/gallery/03.jpg", "Main bedroom with feature wall and pendant lighting", 1200, 900),
      img("/images/projects/hahndorf-road-house-and-land/gallery/04.jpg", "Bathroom with freestanding bath", 1200, 900),
    ],
    hasFloorplan: true,
    testimonialId: "t-mountbarker",
    relatedProjectSlugs: ["burnside-ridge-residence", "walkerville-riverside-residences"],
    featured: true,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getRelatedProjects(project: Project) {
  return project.relatedProjectSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((related): related is Project => Boolean(related));
}
