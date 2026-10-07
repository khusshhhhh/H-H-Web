import { services } from "@/content/services";

/** Slow-drifting band of service names in display type — a breath between the hero and the philosophy section. */
export function MarqueeBand() {
  const items = services.map((service) => service.name);

  return (
    <section className="overflow-hidden border-y border-charcoal/10 bg-cream py-7 lg:py-9" aria-label="What we build">
      <ul className="sr-only">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="animate-marquee flex w-max" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {items.map((item, index) => (
              <span key={item} className="flex items-center">
                <span
                  className={
                    index % 2 === 0
                      ? "font-display text-fluid-2xl text-charcoal"
                      : "accent-italic font-display text-fluid-2xl text-terracotta-text"
                  }
                >
                  {item}
                </span>
                <span className="mx-8 inline-block h-2 w-2 rotate-45 bg-terracotta lg:mx-12" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
