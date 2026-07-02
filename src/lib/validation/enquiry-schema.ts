import { z } from "zod";

export const enquirySchema = z.object({
  projectType: z.enum(
    ["Custom Home", "Luxury Home", "Knockdown Rebuild", "House & Land", "Renovation or Extension", "Residential Development", "Not sure yet"],
    { message: "Please select a project type" },
  ),
  preferredLocation: z.string().trim().min(2, "Enter a suburb or region"),
  landOwnershipStatus: z.enum(["I own the land", "Under contract", "Still searching", "Not applicable"], {
    message: "Please select an option",
  }),
  approximateBudget: z.enum(["under-450k", "450k-650k", "650k-900k", "900k-1.2m", "1.2m-plus", "not-sure"], {
    message: "Please select a budget range",
  }),
  desiredTimeframe: z.enum(["As soon as possible", "3–6 months", "6–12 months", "12+ months", "Just exploring"], {
    message: "Please select a timeframe",
  }),
  stylePreferences: z.array(z.string()),
  fullName: z.string().trim().min(2, "Please enter your full name"),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z.string().trim().min(8, "Enter a valid phone number"),
  preferredContactMethod: z.enum(["Email", "Phone"], { message: "Please select a contact method" }),
  message: z.string(),
  fileName: z.string().nullable(),
  fileSize: z.number().nullable(),
  privacyConsent: z.literal(true, { message: "Please accept the privacy notice to continue" }),
  honeypot: z.string().max(0).optional().or(z.literal("")),
  formRenderedAt: z.number(),
});

export type EnquirySchemaValues = z.infer<typeof enquirySchema>;

/** Field names validated before advancing past each step. */
export const STEP_FIELDS: (keyof EnquirySchemaValues)[][] = [
  ["projectType"],
  ["preferredLocation"],
  ["landOwnershipStatus"],
  ["approximateBudget"],
  ["desiredTimeframe"],
  ["stylePreferences"],
  ["fullName", "email", "phone", "preferredContactMethod", "privacyConsent"],
  [],
];

export const STEP_LABELS = [
  "Project type",
  "Location",
  "Land ownership",
  "Budget",
  "Timeframe",
  "Style",
  "Your details",
  "Attachments",
];
