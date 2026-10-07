import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig, footerNav, primaryNav, moreNav } from "@/content/site-config";
import { Container } from "@/components/ui/Container";
import { AnimatedLink } from "@/components/ui/AnimatedLink";
import { Label } from "@/components/ui/Label";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cream/10 bg-charcoal pt-20 text-cream">
      <Container>
        <div className="flex flex-col gap-10 border-b border-cream/10 pb-16 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Image
              src="/images/logo/whitelogo.png"
              alt={siteConfig.name}
              width={400}
              height={96}
              className="h-14 w-auto"
            />
            <p className="mt-8 max-w-xl font-display text-fluid-2xl leading-[1.05] text-balance">
              Let&rsquo;s create a home that <span className="accent-italic text-sandstone">belongs</span> to you.
            </p>
          </div>
          <Link
            href="/enquiry"
            className="group flex w-fit items-center gap-4 rounded-full border border-cream/25 py-3 pl-7 pr-3 text-fluid-sm transition-colors duration-500 ease-editorial hover:border-terracotta hover:bg-terracotta"
          >
            Start a project
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-charcoal transition-transform duration-500 ease-editorial group-hover:rotate-45">
              <ArrowUpRight size={18} aria-hidden="true" />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-12 py-16 lg:grid-cols-12">
          <div className="col-span-2 lg:col-span-3">
            <p className="max-w-xs text-fluid-sm leading-relaxed text-cream/60">{siteConfig.description}</p>
          </div>

          <nav aria-label="Services" className="lg:col-span-2">
            <Label className="mb-5 block text-cream/45">Services</Label>
            <ul className="flex flex-col gap-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <AnimatedLink href={item.href} className="text-fluid-sm text-cream/75 hover:text-cream">
                    {item.label}
                  </AnimatedLink>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Site" className="lg:col-span-2">
            <Label className="mb-5 block text-cream/45">Site</Label>
            <ul className="flex flex-col gap-3">
              {primaryNav
                .filter((item) => item.href !== "/areas")
                .map((item) => (
                  <li key={item.href}>
                    <AnimatedLink href={item.href} className="text-fluid-sm text-cream/75 hover:text-cream">
                      {item.label}
                    </AnimatedLink>
                  </li>
                ))}
            </ul>
          </nav>

          <nav aria-label="More" className="lg:col-span-2">
            <Label className="mb-5 block text-cream/45">More</Label>
            <ul className="flex flex-col gap-3">
              {moreNav
                .filter((item) => item.href !== "/journal")
                .map((item) => (
                  <li key={item.href}>
                    <AnimatedLink href={item.href} className="text-fluid-sm text-cream/75 hover:text-cream">
                      {item.label}
                    </AnimatedLink>
                  </li>
                ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <Label className="mb-5 block text-cream/45">Contact</Label>
            <ul className="flex flex-col gap-3 text-fluid-sm text-cream/75">
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-sandstone">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-sandstone">
                  {siteConfig.email}
                </a>
              </li>
              <li className="pt-2 text-cream/50">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.suburb} {siteConfig.address.state} {siteConfig.address.postcode}
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-fluid-xs uppercase tracking-widest2 text-cream/55 hover:text-sandstone"
              >
                Instagram
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-fluid-xs uppercase tracking-widest2 text-cream/55 hover:text-sandstone"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-cream/10 py-8 text-fluid-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. Builder&rsquo;s licence {siteConfig.builderLicence}.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-sandstone">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-sandstone">
              Terms
            </Link>
          </div>
        </div>
      </Container>

      {/* Oversized outlined wordmark bleeding off the bottom edge */}
      <p
        className="text-outline pointer-events-none -mb-[0.2em] select-none whitespace-nowrap text-center font-display text-[15.5vw] leading-[0.8] text-cream/40"
        aria-hidden="true"
      >
        Hills &amp; Harbour
      </p>
    </footer>
  );
}
