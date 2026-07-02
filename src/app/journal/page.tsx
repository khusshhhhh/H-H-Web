import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { articles } from "@/content/articles";
import { formatDate } from "@/lib/utils";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import { Container } from "@/components/ui/Container";
import { MaskReveal } from "@/components/motion/MaskReveal";

export const metadata: Metadata = buildMetadata({
  title: "Journal",
  description:
    "Notes on Adelaide climate-responsive design, knockdown rebuilds, renovations and coastal building from the Hills & Harbour studio.",
  path: "/journal",
});

export default function JournalPage() {
  return (
    <>
      <PageHeroBanner
        eyebrow="Journal"
        title="Notes on design, building and Adelaide"
        description="Practical thinking from our design and construction teams — not marketing copy."
      />

      <section className="bg-cream pb-28 lg:pb-36" aria-label="Journal articles">
        <Container>
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {articles.map((article) => (
              <Link key={article.slug} href={`/journal/${article.slug}`} className="group block">
                <MaskReveal className="aspect-[3/2] overflow-hidden rounded-sm">
                  <Image
                    src={article.coverImage.src}
                    alt={article.coverImage.alt}
                    fill
                    sizes="(min-width: 640px) 45vw, 90vw"
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
