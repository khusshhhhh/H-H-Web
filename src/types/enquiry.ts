export type ProjectTypeOption =
  | "Custom Home"
  | "Luxury Home"
  | "Knockdown Rebuild"
  | "House & Land"
  | "Renovation or Extension"
  | "Residential Development"
  | "Not sure yet";

export type LandOwnershipOption =
  | "I own the land"
  | "Under contract"
  | "Still searching"
  | "Not applicable";

export type BudgetRangeValue =
  | "under-450k"
  | "450k-650k"
  | "650k-900k"
  | "900k-1.2m"
  | "1.2m-plus"
  | "not-sure";

export type TimeframeOption =
  | "As soon as possible"
  | "3–6 months"
  | "6–12 months"
  | "12+ months"
  | "Just exploring";

export interface EnquiryFormData {
  projectType: ProjectTypeOption | "";
  preferredLocation: string;
  landOwnershipStatus: LandOwnershipOption | "";
  approximateBudget: BudgetRangeValue | "";
  desiredTimeframe: TimeframeOption | "";
  stylePreferences: string[];
  fullName: string;
  email: string;
  phone: string;
  preferredContactMethod: "Email" | "Phone" | "";
  message: string;
  fileName: string | null;
  fileSize: number | null;
  privacyConsent: boolean;
  honeypot: string;
  formRenderedAt: number;
}

export const ENQUIRY_STEP_COUNT = 8;
