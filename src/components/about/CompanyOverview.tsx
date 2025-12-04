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
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Engineering the digital infrastructure powering Africa's transformation
            </h2>
            <p className="text-light/80 text-lg leading-relaxed mb-6">
              Kelagam Technologies is a Nigerian digital systems engineering company focused on delivering enterprise software, AI-powered infrastructure, and next-generation platforms for organizations of all sizes.
            </p>
            <p className="text-light/70 leading-relaxed">
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
                className="bg-dark-card border border-white/5 rounded-xl p-6 flex flex-col items-center text-center hover:border-primary/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <area.icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-light/90">{area.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
