import type { PlaceholderImage } from "@/types/image";
import type { Project } from "@/types/project";

export interface ServiceArea {
  slug: string;
  name: Project["region"];
  description: string;
  suburbs: string[];
  image: PlaceholderImage;
}
