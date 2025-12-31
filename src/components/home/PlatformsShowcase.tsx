"use client"

import { GraduationCap, Server, Video } from "lucide-react"
import { motion } from "framer-motion"
import { PlatformCard } from "@/components/shared/PlatformCard"

export function PlatformsShowcase() {
  return (
    <section className="py-24 bg-white dark:bg-[#0D1117] relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Our Digital Platforms
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Enterprise-grade solutions built for scale, performance, and real-world impact
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <PlatformCard
            badge="⭐ Flagship Platform"
            icon={Server}
            title="EIS"
            tagline="Emergency Intelligence System"
            description="A state-scale operations platform designed to enhance emergency coordination, multi-agency workflow management, and resource deployment efficiency."
            capabilities={[
              "AI-powered workflow automation",
              "Multi-location resource coordination",
              "Enterprise dashboards with analytics",
              "Secure cloud infrastructure"
            ]}
            ctaText="Explore EIS"
            ctaHref="/platforms/eis"
            gradientColor="primary"
            delay={0}
          />

          <PlatformCard
            badge="🌍 Global Platform"
            icon={Video}
            title="RingAm"
            tagline="Digital Connection Platform"
            description="RingAm allows fans, clients, and learners to connect directly with verified celebrities, influencers, experts, and professionals through paid video and audio sessions."
            capabilities={[
              "Influencer–fan engagement channels",
              "Expert advisory sessions",
              "Monetization tools for creators and professionals",
              "Global reach"
            ]}
            ctaText="Explore RingAm"
            ctaHref="/platforms/ringam"
            gradientColor="secondary"
            delay={0.2}
          />

          <PlatformCard
            badge="🎓 EdTech Infrastructure"
            icon={GraduationCap}
            title="EduConnect"
            tagline="Smart Education Infrastructure"
            description="EduConnect provides a unified digital backbone for managing school operations at scale. Designed for educational institutions."
            capabilities={[
              "Centralized teacher deployment",
              "Student enrollment & records",
              "Institutional dashboards & reporting",
              "Compliance monitoring"
            ]}
            ctaText="Explore EduConnect"
            ctaHref="/platforms/educonnect"
            gradientColor="accent"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  )
}
