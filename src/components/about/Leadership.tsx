"use client"

import { motion } from "framer-motion"

export function Leadership() {
  return (
    <section className="py-24 bg-dark-lighter">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-white mb-16"
        >
          Leadership
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item * 0.1 }}
              className="bg-dark-card border border-white/5 rounded-2xl p-8 flex flex-col items-center"
            >
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary via-secondary to-accent mb-6" />
              <h3 className="font-bold text-white text-xl mb-1">Team Member Name</h3>
              <p className="text-secondary text-sm font-medium mb-4">Position Title</p>
              <p className="text-light/60 text-sm">
                Short bio description goes here. Experienced in building scalable systems and leading technical teams.
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-xl md:text-2xl font-display font-medium text-white leading-relaxed">
            "Our philosophy is simple: <span className="text-secondary">Build with integrity.</span> <span className="text-primary-light">Deploy with excellence.</span> <span className="text-accent">Innovate with purpose.</span>"
          </p>
        </motion.div>
      </div>
    </section>
  )
}
