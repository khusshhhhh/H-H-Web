import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

export const metadata: Metadata = buildMetadata({
  title: "Start a Project Enquiry",
  description:
    "Tell us about your project — type, location, budget and timeframe — and the Hills & Harbour team will be in touch within one business day.",
  path: "/enquiry",
});

export default function EnquiryPage() {
  return (
    <section className="bg-cream py-32 lg:py-40">
      <Container>
        <div className="mx-auto max-w-2xl">
          <Label className="mb-4 block">Project Enquiry</Label>
          <h1 className="font-display text-fluid-2xl leading-[1.05] text-charcoal text-balance">
            Tell us about your project
          </h1>
          <p className="mt-4 max-w-lg text-fluid-base text-charcoal/65">
            Eight short steps — most people finish in under three minutes. Every answer helps us prepare for a more
            useful first conversation.
          </p>

          <div className="mt-14">
            <EnquiryForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
