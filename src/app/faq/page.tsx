import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { faqs, FAQ_CATEGORIES } from "@/content/faqs";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/ui/JsonLd";
import { ScrollReveal } from "@/components/motion/ScrollReveal";

export const metadata: Metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to the questions we hear most from Adelaide homeowners about budget, timeframes, approvals and the building process.",
  path: "/faq",
});

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />
      <PageHeroBanner
        eyebrow="FAQ"
        title="Questions we hear before every project starts"
        description="Straight answers to the things clients most want to know before committing to a builder — no marketing gloss."
      />

      <section className="bg-cream pb-28 lg:pb-36" aria-label="Frequently asked questions">
        <Container>
          <div className="mx-auto max-w-3xl">
            {FAQ_CATEGORIES.map((category, index) => {
              const items = faqs.filter((faq) => faq.category === category);
              if (items.length === 0) return null;

              return (
                <ScrollReveal key={category} delay={index * 0.03} className="mb-16 last:mb-0">
                  <Label className="mb-2 block">{category}</Label>
                  <Accordion items={items} />
                </ScrollReveal>
              );
            })}

            <div className="mt-16 flex flex-col items-start gap-4 rounded-sm bg-sandstone/20 p-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-fluid-base text-charcoal/75">Still have a question we haven&rsquo;t covered?</p>
              <Button href="/contact" icon={<ArrowRight size={15} />} magnetic>
                Ask us directly
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
