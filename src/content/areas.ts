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
    image: { src: "/images/areas/adelaide-metro.jpg", alt: "Tree-lined street in an established inner-Adelaide suburb", width: 1600, height: 1200, isPlaceholder: true },
  },
  {
    slug: "adelaide-hills",
    name: "Adelaide Hills",
    description:
      "Sloping sites, bushfire attack level ratings and a cooler microclimate call for a different design and construction response to the plains. We work closely with the land itself here — cut and fill, orientation and material specification all shift when a block has genuine fall.",
    suburbs: ["Mount Barker", "Stirling", "Aldgate", "Bridgewater", "Crafers", "Hahndorf", "Littlehampton"],
    image: { src: "/images/areas/adelaide-hills.jpg", alt: "Gum trees beside a gravel track in the Adelaide Hills", width: 1600, height: 1200, isPlaceholder: true },
  },
  {
    slug: "fleurieu-coast",
    name: "Fleurieu Coast",
    description:
      "Coastal exposure, salt air and increasingly, a genuine sea-change market of clients building a considered second home or forever home. Material durability and passive climate response are the priorities, without compromising the reason people choose to build here.",
    suburbs: ["Victor Harbor", "Goolwa", "McLaren Vale", "Port Elliot", "Normanville"],
    image: { src: "/images/areas/fleurieu-coast.jpg", alt: "Rocky green headland above turquoise water on the Fleurieu Coast", width: 1600, height: 1200, isPlaceholder: true },
  },
  {
    slug: "barossa-valley",
    name: "Barossa Valley",
    description:
      "Larger acreage allotments, rural living overlays and a strong local trade network built around the region's wine industry. Homes here are often designed around outlook and entertaining as much as day-to-day living.",
    suburbs: ["Tanunda", "Angaston", "Nuriootpa", "Lyndoch"],
    image: { src: "/images/areas/barossa-valley.jpg", alt: "Vineyard rows beneath a clear sky in the Barossa Valley", width: 1600, height: 1200, isPlaceholder: true },
  },
];
