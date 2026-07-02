import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProcessTimeline } from "@/components/process/ProcessTimeline";

export const metadata: Metadata = buildMetadata({
  title: "Our Building Process",
  description:
    "From first conversation to aftercare — the eight-stage process Hills & Harbour follows on every custom home, renovation and development in Adelaide.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <PageHeroBanner
        eyebrow="Our Process"
        title="Eight stages, one point of accountability"
        description="Building a home involves dozens of decisions and handoffs. We've structured our process so you always know what stage you're at, what happens next, and who to ask."
      />

      <section className="bg-cream py-24 lg:py-32" aria-label="Full building process">
        <Container>
          <ProcessTimeline variant="full" />
        </Container>
      </section>

      <section className="bg-charcoal py-24 text-cream lg:py-28" aria-label="Start your project">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-fluid-xl">Ready for the first conversation?</p>
            <p className="mt-2 max-w-md text-fluid-sm text-cream/70">
              No obligation, no generic pitch — just an honest read on your project and timeframe.
            </p>
          </div>
          <Button href="/enquiry" size="lg" icon={<ArrowRight size={16} />} magnetic>
            Start a project
          </Button>
        </Container>
      </section>
    </>
  );
}
