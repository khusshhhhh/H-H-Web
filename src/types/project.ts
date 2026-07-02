import type { PlaceholderImage } from "@/types/image";

export type ProjectCategory = "Custom Homes" | "Developments" | "Renovations" | "House & Land";

export interface MaterialPaletteItem {
  name: string;
  image: PlaceholderImage;
}

export interface Project {
  slug: string;
  name: string;
  suburb: string;
  region: "Adelaide Hills" | "Adelaide Metro" | "Fleurieu Coast" | "Barossa Valley";
  category: ProjectCategory;
  year: number;
  sizeSqm: number;
  scope: string;
  heroImage: PlaceholderImage;
  cardImage: PlaceholderImage;
  orientation: "landscape" | "portrait";
  challenge: string;
  response: string;
  materialPalette: MaterialPaletteItem[];
  gallery: PlaceholderImage[];
  beforeAfter?: { before: PlaceholderImage; after: PlaceholderImage };
  /** When true, the project detail page renders the illustrative abstract floor-plan diagram (not a real drawing — see FloorPlanViewer). */
  hasFloorplan?: boolean;
  testimonialId?: string;
  relatedProjectSlugs: string[];
  featured: boolean;
}
