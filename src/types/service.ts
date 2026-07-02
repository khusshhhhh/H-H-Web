import type { PlaceholderImage } from "@/types/image";

export type ServiceSlug =
  | "custom-homes"
  | "luxury-homes"
  | "knockdown-rebuilds"
  | "house-and-land"
  | "residential-developments"
  | "renovations-extensions";

export interface Service {
  slug: ServiceSlug;
  name: string;
  shortDescription: string;
  fullDescription: string;
  image: PlaceholderImage;
  heroImage: PlaceholderImage;
  highlights: string[];
  relatedProjectSlugs: string[];
}
