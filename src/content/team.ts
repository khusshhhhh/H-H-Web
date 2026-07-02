import type { TeamMember } from "@/types/team-member";

const photo = (src: string, alt: string) => ({ src, alt, width: 500, height: 600, isPlaceholder: true as const });

export const team: TeamMember[] = [
  {
    id: "founder",
    name: "Claire Bennett",
    role: "Founding Director",
    bio: "Claire founded Hills & Harbour after a decade leading design teams on high-end residential and small-scale development projects across Adelaide. She still reviews every concept design personally before it reaches a client.",
    photo: photo("/images/team/01.jpg", "Portrait of Claire Bennett, Founding Director"),
    isPlaceholder: true,
  },
  {
    id: "design-director",
    name: "Nathan Cole",
    role: "Design Director",
    bio: "Nathan leads the design studio, translating each site assessment and client brief into a concept that responds to Adelaide's climate and topography rather than a repeated template.",
    photo: photo("/images/team/02.jpg", "Portrait of Nathan Cole, Design Director"),
    isPlaceholder: true,
  },
  {
    id: "construction-manager",
    name: "Elena Kovacs",
    role: "Construction Manager",
    bio: "Elena oversees every build from slab to handover, coordinating our South Australian trade partners and keeping clients informed at every stage rather than only at milestones.",
    photo: photo("/images/team/03.jpg", "Portrait of Elena Kovacs, Construction Manager"),
    isPlaceholder: true,
  },
  {
    id: "estimating-manager",
    name: "James Whitfield",
    role: "Estimating & Contracts Manager",
    bio: "James builds every fixed-price contract from first principles, so budget conversations happen before construction starts rather than during it.",
    photo: photo("/images/team/04.jpg", "Portrait of James Whitfield, Estimating & Contracts Manager"),
    isPlaceholder: true,
  },
  {
    id: "client-experience",
    name: "Priya Nair",
    role: "Client Experience Lead",
    bio: "Priya guides clients through selections and the handover process, making sure the small decisions — tapware, joinery, paint — get the same care as the big ones.",
    photo: photo("/images/team/05.jpg", "Portrait of Priya Nair, Client Experience Lead"),
    isPlaceholder: true,
  },
];
