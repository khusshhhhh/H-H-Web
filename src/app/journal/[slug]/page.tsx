import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { articles, getArticleBySlug } from "@/content/articles";
import { buildMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return buildMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/journal/${article.slug}`,
    image: article.coverImage.src,
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    author: { "@type": "Person", name: article.author },
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Journal", path: "/journal" },
          { name: article.title, path: `/journal/${article.slug}` },
        ])}
      />

      <article>
        <section className="relative flex h-[60svh] min-h-[380px] items-end overflow-hidden bg-charcoal text-cream">
          <Image src={article.coverImage.src} alt={article.coverImage.alt} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-charcoal/10" />
          <Container className="relative pb-14 pt-32">
            <Label className="text-sandstone">Journal</Label>
            <h1 className="mt-5 max-w-3xl font-display text-fluid-2xl leading-[1.05] text-balance">{article.title}</h1>
            <p className="mt-4 text-fluid-xs uppercase tracking-widest2 text-cream/60">
              {formatDate(article.publishedAt)} &middot; {article.author} &middot; {article.readingMinutes} min read
            </p>
          </Container>
        </section>

        <section className="bg-cream py-20 lg:py-28">
          <Container>
            <div className="mx-auto flex max-w-2xl flex-col gap-6 text-fluid-base leading-relaxed text-charcoal/80">
              {article.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mx-auto mt-14 flex max-w-2xl flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-charcoal/15 px-3.5 py-1.5 text-fluid-xs uppercase tracking-widest2 text-charcoal/55">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mx-auto mt-14 flex max-w-2xl items-center justify-between border-t border-charcoal/10 pt-8">
              <p className="text-fluid-sm text-charcoal/60">Have a project in mind?</p>
              <Button href="/enquiry" icon={<ArrowRight size={15} />} magnetic>
                Start a project
              </Button>
            </div>
          </Container>
        </section>
      </article>
    </>
  );
}
