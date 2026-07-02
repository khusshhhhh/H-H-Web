import type { PlaceholderImage } from "@/types/image";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  coverImage: PlaceholderImage;
  publishedAt: string;
  author: string;
  tags: string[];
  readingMinutes: number;
}
