import { Resend } from "resend";
import type { EnquirySchemaValues } from "@/lib/validation/enquiry-schema";
import type { ContactFormValues } from "@/lib/validation/contact-schema";

const NOTIFICATION_TO = process.env.NOTIFICATION_EMAIL ?? "admin@hillsandharbour.com.au";
// resend.dev is Resend's shared sending domain — works with no setup, but only
// delivers to the account owner's own verified email while testing. Replace
// RESEND_FROM_EMAIL with an address on a verified domain before launch.
const NOTIFICATION_FROM = process.env.RESEND_FROM_EMAIL ?? "Hills & Harbour Website <onboarding@resend.dev>";

let client: Resend | null = null;

function getClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  if (!client) client = new Resend(apiKey);
  return client;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderRows(rows: [string, string][]) {
  return rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 16px 6px 0;color:#7a7a7a;white-space:nowrap;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:6px 0;color:#171717;">${escapeHtml(value) || "—"}</td></tr>`,
    )
    .join("");
}

function wrapEmail(heading: string, rows: [string, string][]) {
  return `<div style="font-family:sans-serif;max-width:560px;margin:0 auto;">
    <h2 style="color:#171717;">${escapeHtml(heading)}</h2>
    <table style="border-collapse:collapse;width:100%;">${renderRows(rows)}</table>
  </div>`;
}

/**
 * Fire-and-log email dispatch: never throws. If RESEND_API_KEY isn't set, or
 * the send fails, we log and let the caller continue treating the form
 * submission itself as successful — a notification-email outage shouldn't
 * block a visitor's enquiry from being accepted.
 */
async function send(subject: string, html: string, replyTo?: string) {
  const resend = getClient();
  if (!resend) {
    console.warn("[email] RESEND_API_KEY not set — skipping email notification. Set it in .env.local to enable.");
    return;
  }

  try {
    const { error } = await resend.emails.send({
      from: NOTIFICATION_FROM,
      to: NOTIFICATION_TO,
      subject,
      html,
      replyTo,
    });
    if (error) console.error("[email] Resend returned an error:", error);
  } catch (err) {
    console.error("[email] Failed to send notification email:", err);
  }
}

export async function sendEnquiryNotification(data: EnquirySchemaValues) {
  const rows: [string, string][] = [
    ["Project type", data.projectType],
    ["Location", data.preferredLocation],
    ["Land ownership", data.landOwnershipStatus],
    ["Budget", data.approximateBudget],
    ["Timeframe", data.desiredTimeframe],
    ["Style preferences", data.stylePreferences.join(", ") || "—"],
    ["Name", data.fullName],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Preferred contact", data.preferredContactMethod],
    ["Message", data.message || "—"],
    ["Attachment", data.fileName ? `${data.fileName} (${data.fileSize ?? 0} bytes, not uploaded — name only)` : "—"],
  ];

  await send(`New project enquiry — ${data.fullName}`, wrapEmail("New project enquiry", rows), data.email);
}

export async function sendContactNotification(data: ContactFormValues) {
  const rows: [string, string][] = [
    ["Name", data.fullName],
    ["Email", data.email],
    ["Phone", data.phone || "—"],
    ["Message", data.message],
  ];

  await send(`New contact form message — ${data.fullName}`, wrapEmail("New contact form message", rows), data.email);
}
