"use client"

import { Bot, Cloud, Code, Database, Network, Shield } from "lucide-react"
import { motion } from "framer-motion"

export function CompanyOverview() {
  const areas = [
    { icon: Code, label: "Software Engineering" },
    { icon: Cloud, label: "Cloud Computing" },
    { icon: Bot, label: "AI & Process Automation" },
    { icon: Shield, label: "Cybersecurity" },
    { icon: Database, label: "Data Infrastructure" },
    { icon: Network, label: "Large-scale Digital Coordination" },
  ]

  return (
    <section className="py-20 bg-white dark:bg-[#0D1117] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-secondary mb-6">
              Engineering the digital infrastructure powering Africa's transformation
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
              Kelagam Technologies is a Nigerian digital systems engineering company focused on delivering enterprise software, AI-powered infrastructure, and next-generation platforms for organizations of all sizes.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We design technologies that help institutions operate smarter, faster, and more efficiently. Our work sits at the intersection of deep technical expertise and a practical understanding of African operational realities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {areas.map((area, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-[#1c2128] border border-gray-200 dark:border-white/5 rounded-xl p-5 flex flex-col items-center text-center hover:border-secondary/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-3 group-hover:scale-110 transition-transform">
                  <area.icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{area.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

