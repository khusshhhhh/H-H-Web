/** Restricted set of tags for polymorphic "as" props — avoids the TS quirk where a fully generic ElementType (including void elements) collapses `children` to `never`. */
export type TextTag = "div" | "section" | "span" | "p" | "h1" | "h2" | "h3" | "h4" | "article" | "li";
