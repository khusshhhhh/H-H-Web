import type { Metadata } from "next";
import { fontDisplay, fontSans } from "@/app/fonts";
import { siteConfig } from "@/content/site-config";
import { LenisProvider } from "@/components/motion/LenisProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Adelaide Custom Home Builder`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Adelaide custom home builder",
    "luxury home builder Adelaide",
    "residential builder Adelaide",
    "knockdown rebuild Adelaide",
    "custom homes South Australia",
    "Adelaide property development",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.suburb,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.postcode,
    addressCountry: siteConfig.address.country,
  },
  areaServed: siteConfig.areasServed.map((area) => ({ "@type": "Place", name: area })),
  sameAs: Object.values(siteConfig.social),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${fontDisplay.variable} ${fontSans.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-cream font-sans text-charcoal antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />

        {/* Server-rendered loading overlay (removed by client when finished) */}
        <div
          id="hh-loading-overlay"
          className="fixed inset-0 z-[200] flex items-center justify-center bg-charcoal"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center justify-center">
            <button
              id="hh-skip"
              type="button"
              className="absolute right-6 top-6 text-fluid-xs uppercase tracking-widest2 text-cream/50"
            >
              Skip intro
            </button>
            <img src="/images/logo/whitelogo.png" alt="Hills & Harbour" className="h-24 w-auto" />
            <span id="hh-loading-progress" className="mt-6 font-display text-fluid-sm tabular-nums text-cream/70">0%</span>
          </div>
        </div>
        <LenisProvider>
          <Header />
          <main id="main-content" className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
