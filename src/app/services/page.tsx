import type { Metadata } from "next";
import { services } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/services/ServiceCard";

export const metadata: Metadata = buildMetadata({
  title: "Residential Building Services in Adelaide",
  description:
    "Custom homes, luxury homes, knockdown rebuilds, house and land packages, residential developments and renovations — building services from Hills & Harbour, Adelaide.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeroBanner
        eyebrow="What We Build"
        title="Six ways to work with Hills & Harbour"
        description="From a single custom home to a small boutique development, each service is delivered by the same team, start to finish."
      />

      <section className="bg-cream pb-28 lg:pb-36" aria-label="All services">
        <Container>
          <div className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
