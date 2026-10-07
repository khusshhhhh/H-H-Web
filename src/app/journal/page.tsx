import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { articles } from "@/content/articles";
import { formatDate } from "@/lib/utils";
import { PageHeroBanner, bannerImages } from "@/components/ui/PageHeroBanner";
import { Container } from "@/components/ui/Container";
import { MaskReveal } from "@/components/motion/MaskReveal";

export const metadata: Metadata = buildMetadata({
  title: "Journal",
  description:
    "Notes on Adelaide climate-responsive design, knockdown rebuilds, renovations and coastal building from the Hills & Harbour studio.",
  path: "/journal",
});

export default function JournalPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      <PageHeroBanner
        image={bannerImages.journal}
        eyebrow="Journal"
        title="Notes on design, building and Adelaide"
        description="Practical thinking from our design and construction teams — not marketing copy."
      />

      <section className="bg-cream py-24 lg:py-32" aria-label="Journal articles">
        <Container>
          <Link
            href={`/journal/${featured.slug}`}
            className="group grid grid-cols-1 gap-8 border-b border-charcoal/10 pb-16 lg:grid-cols-12 lg:items-end lg:gap-14 lg:pb-24"
          >
            <MaskReveal className="aspect-[3/2] overflow-hidden rounded-sm lg:col-span-8">
              <Image
                src={featured.coverImage.src}
                alt={featured.coverImage.alt}
                fill
                sizes="(min-width: 1024px) 60vw, 90vw"
                className="object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.04]"
              />
            </MaskReveal>
            <div className="lg:col-span-4">
              <p className="text-fluid-xs uppercase tracking-widest2 text-terracotta-text">Latest</p>
              <h2 className="mt-4 font-display text-fluid-2xl leading-[1.05] text-charcoal text-balance group-hover:text-terracotta-text">
                {featured.title}
              </h2>
              <p className="mt-4 text-fluid-base leading-relaxed text-charcoal/65">{featured.excerpt}</p>
              <p className="mt-6 flex items-center gap-3 text-fluid-xs uppercase tracking-widest2 text-charcoal/45">
                {formatDate(featured.publishedAt)} &middot; {featured.readingMinutes} min read
                <ArrowUpRight
                  size={16}
                  className="text-terracotta-text transition-transform duration-500 ease-editorial group-hover:rotate-45"
                  aria-hidden="true"
                />
              </p>
            </div>
          </Link>

          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3">
            {rest.map((article) => (
              <Link key={article.slug} href={`/journal/${article.slug}`} className="group block">
                <MaskReveal className="aspect-[3/2] overflow-hidden rounded-sm">
                  <Image
                    src={article.coverImage.src}
                    alt={article.coverImage.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.05]"
                  />
                </MaskReveal>
                <p className="mt-5 text-fluid-xs uppercase tracking-widest2 text-charcoal/45">
                  {formatDate(article.publishedAt)} &middot; {article.readingMinutes} min read
                </p>
                <h2 className="mt-2 font-display text-fluid-lg text-charcoal group-hover:text-terracotta-text">
                  {article.title}
                </h2>
                <p className="mt-2 max-w-md text-fluid-sm text-charcoal/65">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
