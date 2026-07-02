import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/content/site-config";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { AnimatedLink } from "@/components/ui/AnimatedLink";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Hills & Harbour, Adelaide's design-led residential builder. Call, email or send a project enquiry.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeroBanner
        eyebrow="Contact"
        title="Let's talk about your site"
        description="Whether you have a block, a home in mind, or just a question about the process — get in touch and we'll respond within one business day."
      />

      <section className="bg-cream pb-28 lg:pb-36" aria-label="Contact form and details">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeading eyebrow="Send a Message" title="General enquiries" size="md" />
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="flex flex-col gap-8 rounded-sm bg-sandstone/20 p-8 lg:p-10">
                <div className="flex items-start gap-4">
                  <Phone size={20} className="mt-0.5 shrink-0 text-terracotta-text" aria-hidden="true" />
                  <div>
                    <p className="text-fluid-xs uppercase tracking-widest2 text-charcoal/50">Phone</p>
                    <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="mt-1 block text-fluid-base text-charcoal hover:text-terracotta-text">
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail size={20} className="mt-0.5 shrink-0 text-terracotta-text" aria-hidden="true" />
                  <div>
                    <p className="text-fluid-xs uppercase tracking-widest2 text-charcoal/50">Email</p>
                    <a href={`mailto:${siteConfig.email}`} className="mt-1 block text-fluid-base text-charcoal hover:text-terracotta-text">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin size={20} className="mt-0.5 shrink-0 text-terracotta-text" aria-hidden="true" />
                  <div>
                    <p className="text-fluid-xs uppercase tracking-widest2 text-charcoal/50">Studio</p>
                    <p className="mt-1 text-fluid-base text-charcoal">
                      {siteConfig.address.street}
                      <br />
                      {siteConfig.address.suburb} {siteConfig.address.state} {siteConfig.address.postcode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock size={20} className="mt-0.5 shrink-0 text-terracotta-text" aria-hidden="true" />
                  <div>
                    <p className="text-fluid-xs uppercase tracking-widest2 text-charcoal/50">Studio hours</p>
                    <p className="mt-1 text-fluid-base text-charcoal">Monday–Friday, 8:30am–5:00pm ACST</p>
                  </div>
                </div>

                <div className="border-t border-charcoal/10 pt-6">
                  <p className="text-fluid-sm text-charcoal/70">Have a specific project in mind?</p>
                  <AnimatedLink href="/enquiry" className="mt-2 flex items-center gap-2 text-fluid-base text-terracotta-text">
                    Start a full project enquiry <ArrowRight size={15} />
                  </AnimatedLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
