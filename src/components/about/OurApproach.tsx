"use client"

import { Boxes, Cloud, LineChart, ShieldCheck, Sparkles, Users } from "lucide-react"
import { motion } from "framer-motion"

const approaches = [
  {
    icon: Boxes,
    title: "Modular Platform Design",
    description: "Built to scale in phases with flexible architecture that grows with your needs"
  },
  {
    icon: ShieldCheck,
    title: "Secure-by-Design Architecture",
    description: "Security baked into every layer from day one, not bolted on as an afterthought"
  },
  {
    icon: Sparkles,
    title: "AI-Enhanced Workflows",
    description: "Intelligent automation that learns from patterns and optimizes operations continuously"
  },
  {
    icon: Cloud,
    title: "Cloud & Edge Systems",
    description: "Hybrid infrastructure for performance and resilience with offline-first capabilities"
  },
  {
    icon: LineChart,
    title: "Data-Driven Insights",
    description: "Analytics engines that transform data into actionable intelligence for smarter decisions"
  },
  {
    icon: Users,
    title: "Human-Centered Implementation",
    description: "Adoption-focused design with comprehensive training and change management support"
  }
]

export function OurApproach() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-white mb-4"
          >
            How We Work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-light/70 text-lg max-w-2xl mx-auto"
          >
            We combine deep technical expertise with a practical understanding of African operational realities
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approaches.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-card border border-white/5 rounded-xl p-6 hover:bg-white/5 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-light/70 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
