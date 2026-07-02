import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site-config";

export function SuccessState() {
  return (
    <div className="flex flex-col items-start gap-5 rounded-sm bg-eucalyptus/15 p-10 lg:p-14" role="status">
      <CheckCircle2 size={32} className="text-eucalyptus-text" aria-hidden="true" />
      <div>
        <h2 className="font-display text-fluid-xl text-charcoal">Thank you — your enquiry is in</h2>
        <p className="mt-3 max-w-md text-fluid-sm leading-relaxed text-charcoal/70">
          A member of our team will review your project details and get in touch within one business day. In the
          meantime, feel free to browse our recent projects or call us directly on{" "}
          <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-terracotta-text underline">
            {siteConfig.phoneDisplay}
          </a>
          .
        </p>
      </div>
      <div className="flex gap-4">
        <Button href="/projects">View our projects</Button>
        <Button href="/" variant="outline">
          Back to home
        </Button>
      </div>
    </div>
  );
}
