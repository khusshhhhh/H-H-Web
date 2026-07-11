import type { ServiceArea } from "@/types/area";

export const serviceAreas: ServiceArea[] = [
  {
    slug: "adelaide-metro",
    name: "Adelaide Metro",
    description:
      "Established inner and middle-ring suburbs where knockdown rebuilds, renovations and infill developments dominate. Heritage overlays, character precincts and narrow lots are the norm rather than the exception, so local planning knowledge matters as much as design.",
    suburbs: [
      "Burnside", "Norwood", "Unley", "Glenelg", "Henley Beach", "Walkerville",
      "Prospect", "Malvern", "Toorak Gardens", "Kensington", "Parkside", "Rose Park",
    ],
    image: { src: "/images/projects/osmond-terrace-rebuild/hero.jpg", alt: "Contemporary render and timber home on an established Adelaide metro street", width: 1400, height: 1000, isPlaceholder: true },
  },
  {
    slug: "adelaide-hills",
    name: "Adelaide Hills",
    description:
      "Sloping sites, bushfire attack level ratings and a cooler microclimate call for a different design and construction response to the plains. We work closely with the land itself here — cut and fill, orientation and material specification all shift when a block has genuine fall.",
    suburbs: ["Mount Barker", "Stirling", "Aldgate", "Bridgewater", "Crafers", "Hahndorf", "Littlehampton"],
    image: { src: "/images/projects/hahndorf-road-house-and-land/hero.jpg", alt: "Contemporary cantilevered home at dusk in the Adelaide Hills", width: 1400, height: 1000, isPlaceholder: true },
  },
  {
    slug: "fleurieu-coast",
    name: "Fleurieu Coast",
    description:
      "Coastal exposure, salt air and increasingly, a genuine sea-change market of clients building a considered second home or forever home. Material durability and passive climate response are the priorities, without compromising the reason people choose to build here.",
    suburbs: ["Victor Harbor", "Goolwa", "McLaren Vale", "Port Elliot", "Normanville"],
    image: { src: "/images/projects/dune-house-glenelg/hero.jpg", alt: "Modern coastal home with pool near the water", width: 1400, height: 1000, isPlaceholder: true },
  },
  {
    slug: "barossa-valley",
    name: "Barossa Valley",
    description:
      "Larger acreage allotments, rural living overlays and a strong local trade network built around the region's wine industry. Homes here are often designed around outlook and entertaining as much as day-to-day living.",
    suburbs: ["Tanunda", "Angaston", "Nuriootpa", "Lyndoch"],
    image: { src: "/images/projects/walkerville-riverside-residences/hero.jpg", alt: "Modern residence with landscaped grounds", width: 1400, height: 1000, isPlaceholder: true },
  },
];
