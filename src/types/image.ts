export interface PlaceholderImage {
  /** Path relative to /public, e.g. "/images/projects/burnside-ridge/hero.jpg" */
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Always true — flags stock/placeholder imagery the client must replace with real photography. */
  isPlaceholder: true;
  credit?: string;
}
