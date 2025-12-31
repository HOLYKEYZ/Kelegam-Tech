import { CompanyOverview } from "@/components/about/CompanyOverview"
import { Leadership } from "@/components/about/Leadership"
import { MissionVision } from "@/components/about/MissionVision"
import { OurApproach } from "@/components/about/OurApproach"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero */}
      <section className="bg-gray-50 dark:bg-[#0D1117] py-16 border-b border-gray-200 dark:border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-secondary/10 to-transparent opacity-50 pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            About Kelagam Technologies
          </h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
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
