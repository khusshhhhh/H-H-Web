import type { PlaceholderImage } from "@/types/image";

export interface ProcessStep {
  order: number;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  durationEstimate?: string;
  image?: PlaceholderImage;
}
