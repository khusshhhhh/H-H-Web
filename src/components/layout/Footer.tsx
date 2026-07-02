import Link from "next/link";
import { siteConfig, footerNav, primaryNav } from "@/content/site-config";
import { Container } from "@/components/ui/Container";
import { AnimatedLink } from "@/components/ui/AnimatedLink";
import { Label } from "@/components/ui/Label";

export function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-cream pt-20 pb-10 text-charcoal">
      <Container>
        <div className="grid grid-cols-1 gap-12 border-b border-charcoal/10 pb-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-fluid-xl leading-[1.05] text-balance">
              Let&rsquo;s create a home that belongs to you.
            </p>
            <p className="mt-6 max-w-sm text-fluid-sm text-charcoal/65">{siteConfig.description}</p>
          </div>

          <nav aria-label="Services" className="lg:col-span-3">
            <Label className="mb-5 block text-charcoal/50">Services</Label>
            <ul className="flex flex-col gap-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <AnimatedLink href={item.href} className="text-fluid-sm text-charcoal/75">
                    {item.label}
                  </AnimatedLink>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Site" className="lg:col-span-2">
            <Label className="mb-5 block text-charcoal/50">Site</Label>
            <ul className="flex flex-col gap-3">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <AnimatedLink href={item.href} className="text-fluid-sm text-charcoal/75">
                    {item.label}
                  </AnimatedLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <Label className="mb-5 block text-charcoal/50">Contact</Label>
            <ul className="flex flex-col gap-3 text-fluid-sm text-charcoal/75">
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-terracotta-text">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-terracotta-text">
                  {siteConfig.email}
                </a>
              </li>
              <li className="pt-2 text-charcoal/55">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.suburb} {siteConfig.address.state} {siteConfig.address.postcode}
              </li>
            </ul>
            <div className="mt-6 flex gap-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-fluid-xs uppercase tracking-widest2 text-charcoal/60 hover:text-terracotta-text"
              >
                Instagram
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-fluid-xs uppercase tracking-widest2 text-charcoal/60 hover:text-terracotta-text"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-8 text-fluid-xs text-charcoal/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. Builder&rsquo;s licence {siteConfig.builderLicence}.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-terracotta-text">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-terracotta-text">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
