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
    heroImage: img("/images/projects/burnside-ridge-residence/hero.jpg", "Contemporary dark-clad home with deep eaves and glazed balconies set among mature trees in Burnside", 2000, 1250),
    cardImage: img("/images/projects/burnside-ridge-residence/hero.jpg", "Contemporary dark-clad home with deep eaves and glazed balconies set among mature trees in Burnside", 2000, 1250),
    orientation: "landscape",
    challenge:
      "The clients wanted a home that felt private from the street without losing the established gum trees that shaped the block, on a site with a six-metre cross-fall that most volume builders had written off as too costly to work with.",
    response:
      "We stepped the floor plate down the slope in three shallow platforms, keeping excavation to a minimum and letting the upper level cantilever gently toward the canopy. A dark, low-maintenance cladding recedes against the foliage, while a full-height glazed link frames the largest tree from the kitchen and living spaces.",
    materialPalette: [
      { name: "Charred Timber Cladding", image: img("/images/projects/burnside-ridge-residence/materials/01.jpg", "Charred timber cladding boards with pronounced grain", 800, 800) },
      { name: "Board-Formed Concrete", image: img("/images/projects/burnside-ridge-residence/materials/02.jpg", "Board-formed concrete wall surface", 800, 800) },
      { name: "Stacked Sandstone", image: img("/images/projects/burnside-ridge-residence/materials/03.jpg", "Dry-stacked sandstone walling", 800, 800) },
    ],
    gallery: [
      img("/images/projects/burnside-ridge-residence/gallery/01.jpg", "Living room with tan leather sofa, timber joinery and botanical feature panels", 1600, 1200),
      img("/images/projects/burnside-ridge-residence/gallery/02.jpg", "Dark timber kitchen with island bench, bar stools and pendant lighting", 1600, 1200),
      img("/images/projects/burnside-ridge-residence/gallery/03.jpg", "Main bedroom with timber batten feature wall and low platform bed", 1600, 1200),
      img("/images/projects/burnside-ridge-residence/gallery/04.jpg", "Bathroom with veined stone feature wall, backlit mirror and floating vanity", 1600, 1200),
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
    heroImage: img("/images/projects/osmond-terrace-rebuild/hero.jpg", "Contemporary rendered home with a timber-screened upper level on an established tree-lined Norwood street", 2000, 1250),
    cardImage: img("/images/projects/osmond-terrace-rebuild/card.jpg", "Contemporary rendered and timber home with a brick base on a corner block, portrait view", 1200, 1600),
    orientation: "portrait",
    challenge:
      "A 1960s villa on a narrow Norwood block had reached the point where renovation no longer made financial sense, but the streetscape's heritage overlay and a tight 12-metre frontage limited what could replace it.",
    response:
      "We designed a considered street presence in materials that echo the neighbouring roofline and setbacks, while opening the rear entirely to the north for light and cross-ventilation. The result reads as part of the street rather than against it, while performing to a materially higher standard than the home it replaced.",
    materialPalette: [
      { name: "Bagged & Painted Brick", image: img("/images/projects/osmond-terrace-rebuild/materials/01.jpg", "White painted brick wall", 800, 800) },
      { name: "Black Steel-Framed Glazing", image: img("/images/projects/osmond-terrace-rebuild/materials/02.jpg", "Black steel-framed glazing detail", 800, 800) },
      { name: "Honed Marble Benchtop", image: img("/images/projects/osmond-terrace-rebuild/materials/03.jpg", "Honed white marble with soft grey veining", 800, 800) },
    ],
    gallery: [
      img("/images/projects/osmond-terrace-rebuild/gallery/01.jpg", "Minimal living room with grey modular sofa and full-height glazing to the garden", 1600, 1200),
      img("/images/projects/osmond-terrace-rebuild/gallery/02.jpg", "White kitchen with island bench, copper pendants and leather bar stools", 1600, 1200),
      img("/images/projects/osmond-terrace-rebuild/gallery/03.jpg", "Bathroom with freestanding bath beneath a black-framed window", 1600, 1200),
      img("/images/projects/osmond-terrace-rebuild/gallery/04.jpg", "Open-tread timber staircase with glass balustrade", 1600, 1200),
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
    heroImage: img("/images/projects/unley-park-pavilion/hero.jpg", "Timber-clad pavilion with a deep verandah set among established trees", 2000, 1250),
    cardImage: img("/images/projects/unley-park-pavilion/hero.jpg", "Timber-clad pavilion with a deep verandah set among established trees", 2000, 1250),
    orientation: "landscape",
    challenge:
      "A well-loved character home had a dark, disconnected rear kitchen and no genuine link to the garden. The brief was to keep the original street-facing rooms untouched while transforming the way the family actually lived at the back of the house.",
    response:
      "A single-storey pavilion in blackened timber sits deliberately apart from the original roofline, connected by a low glazed link that reads as a considered addition rather than an apology. Retractable glazing lets the new living space fold open to a north-facing courtyard around an existing gum tree we built the whole plan to protect.",
    materialPalette: [
      { name: "Blackened Timber Battens", image: img("/images/projects/unley-park-pavilion/materials/01.jpg", "Blackened timber batten cladding", 800, 800) },
      { name: "Stacked Slate", image: img("/images/projects/unley-park-pavilion/materials/02.jpg", "Stacked slate stone walling", 800, 800) },
      { name: "Terrazzo Flooring", image: img("/images/projects/unley-park-pavilion/materials/03.jpg", "Terrazzo floor surface with mixed stone aggregate", 800, 800) },
    ],
    gallery: [
      img("/images/projects/unley-park-pavilion/gallery/01.jpg", "Dining area with timber table opening to the garden through full-height glazing", 1600, 1200),
      img("/images/projects/unley-park-pavilion/gallery/02.jpg", "Timber and black kitchen with island bench and integrated appliances", 1600, 1200),
      img("/images/projects/unley-park-pavilion/gallery/03.jpg", "Living room with deep sofa and garden outlook", 1600, 1200),
      img("/images/projects/unley-park-pavilion/gallery/04.jpg", "Covered outdoor room with fireplace and timber screening", 1600, 1200),
    ],
    beforeAfter: {
      before: img("/images/projects/unley-park-pavilion/before.jpg", "Illustrative before photograph — original weatherboard cottage prior to renovation (representative placeholder, not the actual property)", 1600, 1000),
      after: img("/images/projects/unley-park-pavilion/after.jpg", "Illustrative after photograph — completed pavilion extension with timber deck and full-height glazing (representative placeholder, not the actual property)", 1600, 1000),
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
    heroImage: img("/images/projects/dune-house-glenelg/hero.jpg", "Modern white home with timber-lined soffit overlooking a pool near Glenelg beach", 2000, 1250),
    cardImage: img("/images/projects/dune-house-glenelg/card.jpg", "Modern white rendered home with landscaped garden, portrait view", 1200, 1600),
    orientation: "portrait",
    challenge:
      "Salt air, sea breezes and an exposed westerly aspect meant durability had to be designed in from the first sketch, without the finished home feeling armoured against its own setting.",
    response:
      "A restrained material palette of powder-coated aluminium, marine-grade fixings and rendered masonry gives the home a genuine coastal service life, while deep eaves and operable screens manage summer glare without blocking the sea breeze the site was chosen for. The pool and entertaining terrace sit hard against the northern boundary to maximise usable outdoor space on a comparatively tight coastal lot.",
    materialPalette: [
      { name: "Trowelled White Render", image: img("/images/projects/dune-house-glenelg/materials/01.jpg", "Hand-trowelled white render texture", 800, 800) },
      { name: "Limestone Walling", image: img("/images/projects/dune-house-glenelg/materials/02.jpg", "Limestone block walling", 800, 800) },
      { name: "Timber Lining Boards", image: img("/images/projects/dune-house-glenelg/materials/03.jpg", "Pale timber lining boards", 800, 800) },
    ],
    gallery: [
      img("/images/projects/dune-house-glenelg/gallery/01.jpg", "Covered terrace with timber-lined ceiling looking across the pool", 1600, 1200),
      img("/images/projects/dune-house-glenelg/gallery/02.jpg", "White kitchen with stone island bench and glass pendants", 1600, 1200),
      img("/images/projects/dune-house-glenelg/gallery/03.jpg", "Light-filled living room with indoor plants and soft coastal tones", 1600, 1200),
      img("/images/projects/dune-house-glenelg/gallery/04.jpg", "Main bedroom in soft neutral tones with filtered daylight", 1600, 1200),
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
    heroImage: img("/images/projects/henley-beach-courtyard-house/hero.jpg", "Courtyard house wrapping a pool and established trees at dusk near Henley Beach", 2000, 1250),
    cardImage: img("/images/projects/henley-beach-courtyard-house/hero.jpg", "Courtyard house wrapping a pool and established trees at dusk near Henley Beach", 2000, 1250),
    orientation: "landscape",
    challenge:
      "The existing home turned its back on a generous rear block, with small windows and a low-set roof that made the interior feel dark for most of the year despite the coastal location.",
    response:
      "We opened the rear elevation around a new central courtyard, using perforated metal screening to filter western sun while maintaining privacy from neighbouring properties. The courtyard now does double duty as a light well for the kitchen and living areas and a sheltered outdoor room usable for most of the year.",
    materialPalette: [
      { name: "Perforated Metal Screening", image: img("/images/projects/henley-beach-courtyard-house/materials/01.jpg", "Perforated metal screening detail", 800, 800) },
      { name: "Western Red Cedar Cladding", image: img("/images/projects/henley-beach-courtyard-house/materials/02.jpg", "Western red cedar cladding boards", 800, 800) },
      { name: "Off-Form Concrete", image: img("/images/projects/henley-beach-courtyard-house/materials/03.jpg", "Off-form concrete wall with formwork marks", 800, 800) },
    ],
    gallery: [
      img("/images/projects/henley-beach-courtyard-house/gallery/01.jpg", "White living room with exposed timber beam and garden light", 1600, 1200),
      img("/images/projects/henley-beach-courtyard-house/gallery/02.jpg", "Kitchen with sage island bench, stone splashback and display cabinetry", 1600, 1200),
      img("/images/projects/henley-beach-courtyard-house/gallery/03.jpg", "Main suite with arched timber bedhead niche", 1600, 1200),
      img("/images/projects/henley-beach-courtyard-house/gallery/04.jpg", "Bathroom with freestanding clawfoot bath and brass tapware", 1600, 1200),
    ],
    beforeAfter: {
      before: img("/images/projects/henley-beach-courtyard-house/before.jpg", "Illustrative before photograph — original home prior to renovation (representative placeholder, not the actual property)", 1600, 1000),
      after: img("/images/projects/henley-beach-courtyard-house/after.jpg", "Illustrative after photograph — completed courtyard renovation at dusk (representative placeholder, not the actual property)", 1600, 1000),
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
    heroImage: img("/images/projects/walkerville-riverside-residences/hero.jpg", "Row of contemporary gabled residences in dark metal cladding and red brick at Walkerville", 2000, 1250),
    cardImage: img("/images/projects/walkerville-riverside-residences/hero.jpg", "Row of contemporary gabled residences in dark metal cladding and red brick at Walkerville", 2000, 1250),
    orientation: "landscape",
    challenge:
      "The landholder wanted more than a standard subdivision of near-identical dwellings — a small development that would hold its value and its street appeal as a considered whole, on a site close enough to the Torrens to trade on outlook and access.",
    response:
      "Four torrens-title homes share a coherent material language and a common landscape strategy without repeating a single elevation, so the group reads as a considered small development rather than a project-home row. Shared driveway and screening plantings were resolved at the masterplan stage, ahead of individual dwelling design, to protect the amenity of every lot equally.",
    materialPalette: [
      { name: "Dark Face Brick", image: img("/images/projects/walkerville-riverside-residences/materials/01.jpg", "Dark face brickwork", 800, 800) },
      { name: "Perforated Aluminium Screen", image: img("/images/projects/walkerville-riverside-residences/materials/02.jpg", "Perforated aluminium screen around a glazed opening", 800, 800) },
      { name: "Nero Marble Benchtop", image: img("/images/projects/walkerville-riverside-residences/materials/03.jpg", "Black marble with fine white veining", 800, 800) },
    ],
    gallery: [
      img("/images/projects/walkerville-riverside-residences/gallery/01.jpg", "Living room with concrete feature wall and abstract artwork", 1600, 1200),
      img("/images/projects/walkerville-riverside-residences/gallery/02.jpg", "Compact kitchen and dining area in soft grey with timber flooring", 1600, 1200),
      img("/images/projects/walkerville-riverside-residences/gallery/03.jpg", "Open-plan dining area with timber staircase beyond", 1600, 1200),
      img("/images/projects/walkerville-riverside-residences/gallery/04.jpg", "Bathroom with floating timber vanity and frameless glass shower", 1600, 1200),
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
    heroImage: img("/images/projects/hahndorf-road-house-and-land/hero.jpg", "Contemporary single-level home with pool and lawn at dusk, hills beyond, near Mount Barker", 2000, 1250),
    cardImage: img("/images/projects/hahndorf-road-house-and-land/card.jpg", "Cantilevered timber-clad home among rocks and trees in the Adelaide Hills, portrait view", 1200, 1600),
    orientation: "portrait",
    challenge:
      "Buying land and briefing a home at the same time can leave clients exposed to cost blowouts once the true nature of a block is understood. This Hills allotment carried a noticeable slope and a bushfire risk rating that a generic house-and-land package hadn't accounted for.",
    response:
      "We matched a home design to the land before contracts were signed, adjusting the floor plan and construction specification for the site's actual bushfire attack level and fall, so the price the clients budgeted for was the price they built to. The finished home cantilevers gently over the lower slope to reduce cut and fill, with a material specification upgraded to meet BAL requirements without the home feeling like a bunker.",
    materialPalette: [
      { name: "Vertical Timber Battens", image: img("/images/projects/hahndorf-road-house-and-land/materials/01.jpg", "Vertical timber battens with shadow gaps", 800, 800) },
      { name: "Textured Render", image: img("/images/projects/hahndorf-road-house-and-land/materials/02.jpg", "Textured render wall finish", 800, 800) },
      { name: "Dry-Stacked Stone", image: img("/images/projects/hahndorf-road-house-and-land/materials/03.jpg", "Dry-stacked grey stone walling", 800, 800) },
    ],
    gallery: [
      img("/images/projects/hahndorf-road-house-and-land/gallery/01.jpg", "Living room in warm taupe tones with low modular sofa", 1600, 1200),
      img("/images/projects/hahndorf-road-house-and-land/gallery/02.jpg", "Kitchen with pale timber joinery, gas cooktop and stone benchtops", 1600, 1200),
      img("/images/projects/hahndorf-road-house-and-land/gallery/03.jpg", "Main bedroom with dark linen and indoor planting", 1600, 1200),
      img("/images/projects/hahndorf-road-house-and-land/gallery/04.jpg", "Bathroom with freestanding bath and timber-lined shower", 1600, 1200),
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
