import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contact-schema";
import { checkRateLimit } from "@/lib/rate-limit";
import { sendContactNotification } from "@/lib/email";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ success: false, error: "Invalid request body" }, { status: 400 });
  }

  // Honeypot — silently accept without processing so bots don't learn anything.
  if (body.honeypot) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  // Timing check — reject submissions faster than a human could plausibly complete the form.
  if (typeof body.formRenderedAt === "number" && Date.now() - body.formRenderedAt < 2000) {
    return NextResponse.json({ success: false, error: "Submission too fast" }, { status: 400 });
  }

  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ success: false, error: "Too many requests, please try again shortly" }, { status: 429 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ success: false, errors: parsed.error.flatten() }, { status: 422 });
  }

  // TODO(integration): optionally also POST to a CRM API (HubSpot, Pipedrive).
  // Server-side secrets (e.g. process.env.CRM_API_KEY) belong only here —
  // never in client-side code.
  console.log("[contact:new-submission]", { ...parsed.data, honeypot: undefined });
  await sendContactNotification(parsed.data);

  return NextResponse.json({ success: true }, { status: 200 });
}
