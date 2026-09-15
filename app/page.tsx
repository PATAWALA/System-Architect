import { HeroSection } from "@/components/sections/hero-section";
import { ProcessSection } from "@/components/sections/process-section";

export default function HomePage() {
  return (
    <main className="relative">
      <HeroSection />
      <ProcessSection />
    </main>
  );
}