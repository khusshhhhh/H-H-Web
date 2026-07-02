import type { PlaceholderImage } from "@/types/image";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: PlaceholderImage;
  isPlaceholder: true;
}
