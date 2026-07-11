import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  tone?: "light" | "dark";
}

/** Visual breadcrumb trail. Pair with buildBreadcrumbJsonLd() for the matching structured data. */
export function Breadcrumbs({ items, tone = "light" }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-fluid-xs uppercase tracking-widest2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 && (
                <ChevronRight size={12} className={tone === "dark" ? "text-cream/40" : "text-charcoal/30"} aria-hidden="true" />
              )}
              {isLast ? (
                <span aria-current="page" className={tone === "dark" ? "text-cream/70" : "text-charcoal/60"}>
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className={
                    tone === "dark"
                      ? "text-cream/50 hover:text-cream"
                      : "text-charcoal/45 hover:text-terracotta-text"
                  }
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
