"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-dark to-dark z-0" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none z-0" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Let's Build What's Next
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-light/80 max-w-2xl mx-auto mb-10"
        >
          Partner with us to design, deploy, and scale the digital systems powering the future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center rounded-md text-base font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-primary hover:bg-light h-14 px-10 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Start a Conversation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
