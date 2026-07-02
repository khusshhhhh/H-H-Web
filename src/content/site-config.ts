import type { NavItem } from "@/types/nav";

export const siteConfig = {
  name: "Hills & Harbour",
  tagline: "Upscale you and your surroundings",
  description:
    "Hills & Harbour designs and builds custom homes, luxury residences and considered renovations across Adelaide and South Australia — from the foothills to the coast.",
  url: "https://www.hillsandharbour.com.au",
  location: "Adelaide, South Australia",
  phone: "+61 8 8100 2200",
  phoneDisplay: "(08) 8100 2200",
  email: "studio@hillsandharbour.com.au",
  address: {
    street: "12 Halifax Street",
    suburb: "Adelaide",
    state: "SA",
    postcode: "5000",
    country: "AU",
  },
  social: {
    instagram: "https://www.instagram.com/hillsandharbour",
    linkedin: "https://www.linkedin.com/company/hillsandharbour",
    houzz: "https://www.houzz.com.au/pro/hillsandharbour",
  },
  /** Placeholder — replace with the company's actual South Australian Building Work Contractor licence number before launch. */
  builderLicence: "BLD 000000 (placeholder — insert SA licence number)",
  memberships: [
    "Housing Industry Association (HIA) — Member",
    "Master Builders SA — Member",
    "Green Building Council of Australia — Registered",
  ],
  yearsCombinedExperience: 46,
  homesCompleted: 210,
  areasServed: [
    "Adelaide Metro",
    "Adelaide Hills",
    "Fleurieu Coast",
    "Barossa Valley",
  ],
} as const;

export const primaryNav: NavItem[] = [
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Our Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavItem[] = [
  { label: "Custom Homes", href: "/services/custom-homes" },
  { label: "Luxury Homes", href: "/services/luxury-homes" },
  { label: "Knockdown Rebuilds", href: "/services/knockdown-rebuilds" },
  { label: "House & Land", href: "/services/house-and-land" },
  { label: "Developments", href: "/services/residential-developments" },
  { label: "Renovations", href: "/services/renovations-extensions" },
];
