import { Hero } from "@/components/home-sections/Hero";
import { MarqueeBand } from "@/components/home-sections/MarqueeBand";
import { PhilosophySection } from "@/components/home-sections/PhilosophySection";
import { FeaturedProjects } from "@/components/home-sections/FeaturedProjects";
import { SignatureHouse } from "@/components/home-sections/SignatureHouse";
import { ServicesExperience } from "@/components/home-sections/ServicesExperience";
import { ProcessJourney } from "@/components/home-sections/ProcessJourney";
import { AdelaideConnection } from "@/components/home-sections/AdelaideConnection";
import { TrustSection } from "@/components/home-sections/TrustSection";
import { ClosingCTA } from "@/components/home-sections/ClosingCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeBand />
      <PhilosophySection />
      <FeaturedProjects />
      <SignatureHouse />
      <ServicesExperience />
      <ProcessJourney />
      <AdelaideConnection />
      <TrustSection />
      <ClosingCTA />
    </>
  );
}
