import type {
  BudgetRangeValue,
  LandOwnershipOption,
  ProjectTypeOption,
  TimeframeOption,
} from "@/types/enquiry";

export const PROJECT_TYPE_OPTIONS: ProjectTypeOption[] = [
  "Custom Home",
  "Luxury Home",
  "Knockdown Rebuild",
  "House & Land",
  "Renovation or Extension",
  "Residential Development",
  "Not sure yet",
];

export const LAND_OWNERSHIP_OPTIONS: LandOwnershipOption[] = [
  "I own the land",
  "Under contract",
  "Still searching",
  "Not applicable",
];

/**
 * Indicative budget ranges for Adelaide residential construction.
 * EDITABLE PLACEHOLDER — these are broad guide bands to help our team scope
 * a conversation, not fixed quotations. Update to match current build costs
 * before launch and revisit periodically as material and labour costs shift.
 */
export const BUDGET_RANGES: { value: BudgetRangeValue; label: string }[] = [
  { value: "under-450k", label: "Under $450,000" },
  { value: "450k-650k", label: "$450,000 – $650,000" },
  { value: "650k-900k", label: "$650,000 – $900,000" },
  { value: "900k-1.2m", label: "$900,000 – $1.2 million" },
  { value: "1.2m-plus", label: "$1.2 million +" },
  { value: "not-sure", label: "Not sure yet — happy to discuss" },
];

export const TIMEFRAME_OPTIONS: TimeframeOption[] = [
  "As soon as possible",
  "3–6 months",
  "6–12 months",
  "12+ months",
  "Just exploring",
];

export const STYLE_PREFERENCE_OPTIONS: string[] = [
  "Contemporary",
  "Coastal",
  "Minimalist",
  "Warm & Textural",
  "Mid-Century Influence",
  "Classic & Symmetrical",
  "Indoor–Outdoor Living",
  "Sustainable & Energy-Efficient",
];
