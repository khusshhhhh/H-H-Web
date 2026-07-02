export type MaterialKey = "render" | "timber" | "brick";
export type LightingMode = "day" | "evening";

export const MATERIAL_OPTIONS: { key: MaterialKey; label: string; swatch: string }[] = [
  { key: "render", label: "Painted Render", swatch: "#EDE8DD" },
  { key: "timber", label: "Timber Cladding", swatch: "#7A5C3E" },
  { key: "brick", label: "Recycled Brick", swatch: "#7A3E28" },
];

export interface Hotspot {
  id: string;
  title: string;
  description: string;
  /** Percentage position over the visual (image or 3D canvas) */
  x: number;
  y: number;
  /** Approximate local-space position, used by the 3D scene once wired up */
  position3d: [number, number, number];
}

export const HOTSPOTS: Hotspot[] = [
  {
    id: "facade",
    title: "Facade",
    description: "A layered facade of render and timber, detailed to age gracefully in Adelaide's UV exposure.",
    x: 32,
    y: 42,
    position3d: [-1.4, 0.6, 1.2],
  },
  {
    id: "materials",
    title: "Materials",
    description: "Material selections are matched to orientation — durable, low-maintenance finishes on exposed faces.",
    x: 68,
    y: 55,
    position3d: [1.5, -0.2, 0.8],
  },
  {
    id: "energy",
    title: "Energy Efficiency",
    description: "Double glazing, cross-ventilation and thermal mass are specified as standard, not upgrades.",
    x: 50,
    y: 28,
    position3d: [0, 1.3, 0.2],
  },
  {
    id: "landscape",
    title: "Landscape Response",
    description: "Eaves, screening and landscaping are designed together to manage sun, privacy and outlook.",
    x: 15,
    y: 78,
    position3d: [-2.2, -0.8, -0.6],
  },
];
