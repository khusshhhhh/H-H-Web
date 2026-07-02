import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center bg-cream py-32">
      <Container>
        <Label className="mb-6 block">404</Label>
        <h1 className="max-w-xl font-display text-fluid-2xl leading-[1.05] text-charcoal text-balance">
          This page hasn&rsquo;t been built yet.
        </h1>
        <p className="mt-5 max-w-md text-fluid-base text-charcoal/65">
          The page you&rsquo;re looking for may have moved, or the link may be out of date.
        </p>
        <div className="mt-10 flex gap-4">
          <Button href="/">Back to home</Button>
          <Button href="/projects" variant="outline">
            View projects
          </Button>
        </div>
        <p className="mt-10 text-fluid-sm text-charcoal/50">
          Or <Link href="/contact" className="underline hover:text-terracotta-text">get in touch</Link> and we&rsquo;ll point you in the right direction.
        </p>
      </Container>
    </section>
  );
}
