import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessTimeline } from "@/components/process/ProcessTimeline";

export function ProcessJourney() {
  return (
    <section className="bg-charcoal py-28 text-cream lg:py-32" aria-label="Our building process">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Our Process"
            title="Eight stages, one point of accountability"
            size="lg"
            className="text-cream [&_p]:text-cream/70"
          />
          <Link href="/process" className="hidden shrink-0 items-center gap-2 text-fluid-sm text-cream/80 hover:text-cream lg:flex">
            See the full process <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-16">
          <ProcessTimeline variant="compact" />
        </div>

        <div className="mt-10 flex justify-center lg:hidden">
          <Link href="/process" className="flex items-center gap-2 text-fluid-sm text-cream/80">
            See the full process <ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
