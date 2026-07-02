import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name"),
  email: z.string().trim().email("Enter a valid email address"),
  phone: z.string().trim().min(8, "Enter a valid phone number").optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a little more (at least 10 characters)"),
  privacyConsent: z.literal(true, { message: "Please accept the privacy notice to continue" }),
  honeypot: z.string().max(0).optional().or(z.literal("")),
  formRenderedAt: z.number(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
