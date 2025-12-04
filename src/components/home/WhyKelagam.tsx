"use client"

import { Check, Cloud, Code, Globe, Shield, Zap } from "lucide-react"
import { motion } from "framer-motion"

const reasons = [
  {
    icon: Code,
    title: "Enterprise-Grade Engineering",
    description: "Battle-tested architectures built for mission-critical operations with 99.9% uptime guarantees."
  },
  {
    icon: Shield,
    title: "Secure Cloud Architecture",
    description: "Bank-level security with end-to-end encryption, SOC 2 compliance, and regular penetration testing."
  },
  {
    icon: Zap,
    title: "AI-Driven Innovation",
    description: "Cutting-edge machine learning and automation that evolves with your business needs."
  },
  {
    icon: Cloud,
    title: "Infinitely Scalable Platforms",
    description: "Microservices architecture that grows from 100 to 10 million users without breaking."
  },
  {
    icon: Globe,
    title: "Africa-Focused Development",
    description: "Built for African operational realities with offline-first capabilities and low-bandwidth optimization."
  },
  {
    icon: Check,
    title: "Proven Multi-Sector Expertise",
    description: "Successful deployments across government, education, healthcare, finance, and enterprise sectors."
  }
]

export function WhyKelagam() {
  return (
    <section className="py-24 bg-dark-lighter relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl font-bold text-white mb-8"
            >
              Why Partner With Kelagam
            </motion.h2>

            <div className="space-y-8 relative">
              {/* Connecting Line */}
              <div className="absolute left-4 top-4 bottom-4 w-px bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent hidden md:block" />

              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 relative group"
                >
                  <div className="flex-shrink-0 mt-1 relative z-10">
                    <div className="w-8 h-8 rounded-full bg-dark border border-secondary/30 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-dark transition-all duration-300 shadow-[0_0_15px_rgba(59,206,172,0.3)] group-hover:shadow-[0_0_20px_rgba(59,206,172,0.6)]">
                      <reason.icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary mb-2 group-hover:text-white transition-colors">{reason.title}</h3>
                    <p className="text-light/70 text-sm leading-relaxed max-w-md">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Visuals/Stats */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial from-secondary/20 to-transparent opacity-30 blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Enterprise Clients", value: "50+" },
                { label: "Top Tech Gurus", value: "50+" },
                { label: "Uptime SLA", value: "99.9%" },
                { label: "Support", value: "24/7" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="bg-dark-card border border-white/10 rounded-xl p-8 text-center hover:border-secondary/50 transition-colors group hover:bg-secondary/5"
                >
                  <div className="text-4xl md:text-5xl font-display font-bold text-white mb-3 text-gradient group-hover:scale-110 transition-transform duration-300 inline-block">
                    {stat.value}
                  </div>
                  <div className="text-xs text-light/60 uppercase tracking-widest font-bold">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
