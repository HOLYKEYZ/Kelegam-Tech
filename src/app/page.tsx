import { CTASection } from "@/components/home/CTASection";
import { Hero } from "@/components/home/Hero";
import { PlatformsShowcase } from "@/components/home/PlatformsShowcase";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { WhyKelagam } from "@/components/home/WhyKelagam";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <WhatWeDo />
      <PlatformsShowcase />
      <WhyKelagam />
      <CTASection />
    </div>
  );
}
