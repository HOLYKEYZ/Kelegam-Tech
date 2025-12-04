"use client"

import { Eye, Target } from "lucide-react"
import { motion } from "framer-motion"

export function MissionVision() {
  return (
    <section className="py-20 bg-dark-lighter">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-dark-card border border-accent/20 rounded-2xl p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
            
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center text-accent mb-6">
              <Target className="w-6 h-6" />
            </div>
            
            <h3 className="font-display text-2xl font-bold text-accent mb-4">Our Mission</h3>
            <p className="text-light/80 text-lg leading-relaxed">
              To engineer intelligent, human-centered digital systems that strengthen operational efficiency and drive transformation across Africa.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-dark-card border border-secondary/20 rounded-2xl p-8 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
            
            <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary mb-6">
              <Eye className="w-6 h-6" />
            </div>
            
            <h3 className="font-display text-2xl font-bold text-secondary mb-4">Our Vision</h3>
            <p className="text-light/80 text-lg leading-relaxed">
              To become the continent's most trusted developer of enterprise platforms and digital infrastructure.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
