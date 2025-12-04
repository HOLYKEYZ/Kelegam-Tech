import { CompanyOverview } from "@/components/about/CompanyOverview"
import { Leadership } from "@/components/about/Leadership"
import { MissionVision } from "@/components/about/MissionVision"
import { OurApproach } from "@/components/about/OurApproach"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero */}
      <section className="bg-dark py-20 border-b border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
            About Kelagam Technologies
          </h1>
          <p className="text-xl text-light/70 max-w-3xl mx-auto">
            Engineering the digital infrastructure powering Africa's transformation
          </p>
        </div>
      </section>

      <CompanyOverview />
      <MissionVision />
      <OurApproach />
      <Leadership />
    </div>
  )
}
