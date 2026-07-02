import type { ProcessStep } from "@/types/process-step";

export const processSteps: ProcessStep[] = [
  {
    order: 1,
    slug: "initial-conversation",
    title: "Initial Conversation",
    shortDescription: "We listen before we design — your brief, your block and your budget.",
    fullDescription:
      "Every project starts with an unhurried conversation about how you want to live, what you've loved or struggled with in previous homes, and the realistic parameters of budget and timeframe. There's no obligation and no generic sales pitch — just an honest read on whether we're the right fit for each other.",
    durationEstimate: "1 meeting",
  },
  {
    order: 2,
    slug: "site-assessment",
    title: "Site Assessment",
    shortDescription: "Slope, orientation, soil and overlays — understood before design begins.",
    fullDescription:
      "We assess your site's orientation, fall, soil classification, easements, tree and heritage overlays, and bushfire attack level where relevant. This is the stage that protects you from costly surprises later — a slope or a service easement discovered mid-build is far more expensive to resolve than one identified on day one.",
    durationEstimate: "1–2 weeks",
  },
  {
    order: 3,
    slug: "concept-design",
    title: "Concept Design",
    shortDescription: "A floor plan and material direction shaped around your brief, not a display-home template.",
    fullDescription:
      "Our design team develops a concept floor plan and elevations that respond directly to your site assessment and brief. You'll see how the home sits on the block, how light and airflow move through it, and an early material direction — with room to refine before anything is locked in.",
    durationEstimate: "3–5 weeks",
    image: { src: "/images/process/concept-design.jpg", alt: "Hand sketching architectural plans on paper", width: 1200, height: 900, isPlaceholder: true },
  },
  {
    order: 4,
    slug: "documentation-and-approvals",
    title: "Documentation & Approvals",
    shortDescription: "Working drawings, engineering and the council or private certification process.",
    fullDescription:
      "Concept designs are developed into full working drawings, engaged with a structural engineer, and lodged for planning and building approval. We manage council and private certifier correspondence directly, keeping you informed without requiring you to interpret the process yourself.",
    durationEstimate: "6–10 weeks",
  },
  {
    order: 5,
    slug: "selections",
    title: "Selections",
    shortDescription: "Fixtures, finishes and fittings, guided rather than left to chance.",
    fullDescription:
      "Working from your approved concept and budget, our selections consultant guides you through tapware, tiling, joinery, appliances and external finishes — with defaults recommended at each price point so decision fatigue doesn't derail your timeline.",
    durationEstimate: "3–4 weeks",
  },
  {
    order: 6,
    slug: "construction",
    title: "Construction",
    shortDescription: "Fixed-price building, transparent scheduling and a single point of contact.",
    fullDescription:
      "Your dedicated site supervisor coordinates trades, quality checks and scheduling, with regular site updates so you always know what stage construction has reached. Variations, if they arise, are costed and approved before work proceeds — never invoiced as a surprise.",
    durationEstimate: "7–11 months",
  },
  {
    order: 7,
    slug: "handover",
    title: "Handover",
    shortDescription: "A guided walkthrough, a completed defects schedule, and the keys.",
    fullDescription:
      "Before handover, we complete an internal quality inspection and walk the home with you room by room, addressing any items on the defects schedule ahead of key handover. You'll leave with warranty documentation, appliance manuals and maintenance guidance specific to your home.",
    durationEstimate: "1–2 weeks",
  },
  {
    order: 8,
    slug: "aftercare",
    title: "Aftercare",
    shortDescription: "Structural warranty and a maintenance check-in, well after the removalists have left.",
    fullDescription:
      "Our relationship doesn't end at handover. Every home is covered by structural warranty in line with South Australian building requirements, and we schedule a maintenance check-in within the first year to address the minor settling issues any new home experiences.",
    durationEstimate: "Ongoing",
  },
];
