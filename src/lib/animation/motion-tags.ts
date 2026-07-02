import { motion } from "framer-motion";
import type { TextTag } from "@/types/polymorphic";

/**
 * Static lookup of pre-created motion components, one per allowed polymorphic
 * tag. Calling `motion.create(tag)` inline during render creates a new
 * component type on every call, which resets child state — this table is
 * built once at module scope instead.
 */
export const MOTION_TAGS = {
  div: motion.create("div"),
  section: motion.create("section"),
  span: motion.create("span"),
  p: motion.create("p"),
  h1: motion.create("h1"),
  h2: motion.create("h2"),
  h3: motion.create("h3"),
  h4: motion.create("h4"),
  article: motion.create("article"),
  li: motion.create("li"),
} satisfies Record<TextTag, unknown>;
