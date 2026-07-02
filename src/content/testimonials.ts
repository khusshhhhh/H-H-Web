import type { Testimonial } from "@/types/testimonial";

export const testimonials: Testimonial[] = [
  {
    id: "t-burnside",
    clientName: "Sarah & Michael T.",
    suburb: "Burnside",
    projectSlug: "burnside-ridge-residence",
    quote:
      "They worked with the slope of our block instead of fighting it, and were upfront every time a decision would affect the budget. Eighteen months on, the house still feels like it was designed for exactly how we live.",
    isPlaceholder: true,
  },
  {
    id: "t-unley",
    clientName: "Amelia R.",
    suburb: "Unley Park",
    projectSlug: "unley-park-pavilion",
    quote:
      "We kept the front of our home and transformed the back completely. The team protected the gum tree we asked about on the first site visit and built the entire extension around it — it's the first thing visitors notice.",
    isPlaceholder: true,
  },
  {
    id: "t-glenelg",
    clientName: "David & Priya K.",
    suburb: "Glenelg",
    projectSlug: "dune-house-glenelg",
    quote:
      "Building this close to the coast, we were nervous about long-term maintenance. Two years in, the specification decisions they steered us toward have more than paid for themselves.",
    isPlaceholder: true,
  },
  {
    id: "t-walkerville",
    clientName: "The Bennett Family",
    suburb: "Walkerville",
    projectSlug: "walkerville-riverside-residences",
    quote:
      "As the landholder, I wanted a development that wouldn't feel like four identical project homes squeezed onto one title. Every one of the four residences has its own identity, and the finished street presence exceeded what we modelled in the feasibility stage.",
    isPlaceholder: true,
  },
  {
    id: "t-mountbarker",
    clientName: "Chris & Louise M.",
    suburb: "Mount Barker",
    projectSlug: "hahndorf-road-house-and-land",
    quote:
      "We'd been quoted a house-and-land package elsewhere that didn't account for our block's bushfire rating at all. Hills & Harbour picked it up in the first site visit and the number we budgeted for was the number we actually paid.",
    isPlaceholder: true,
  },
];

export function getTestimonialById(id: string) {
  return testimonials.find((testimonial) => testimonial.id === id);
}
