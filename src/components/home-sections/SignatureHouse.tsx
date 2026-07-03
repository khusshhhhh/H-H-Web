"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function SignatureHouse() {
  // 3D interactions removed; static visual displayed instead

  return (
    <section className="bg-cream py-28 lg:py-36" aria-label="Interactive house exploration">
      <Container>
        <SectionHeading
          eyebrow="Explore The Detail"
          title="A closer look at how we build"
          description="An illustrative model — rotate, change the exterior material and switch lighting to see how a Hills & Harbour home is put together. Hotspots point to facade, materials, energy efficiency and landscape decisions."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-charcoal lg:col-span-8">
            <Image
              src="/images/home/hero.jpg"
              alt="Signature house"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="lg:col-span-4">


            <p className="mt-10 text-fluid-xs leading-relaxed text-charcoal/50">
              Model shown is illustrative. Final material and lighting outcomes are confirmed during selections and
              vary by site, orientation and product availability.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
