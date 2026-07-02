import { LoadingSequence } from "@/components/home-sections/LoadingSequence";
import { Hero } from "@/components/home-sections/Hero";
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
      <LoadingSequence />
      <Hero />
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
