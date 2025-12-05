"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gray-50 dark:bg-[#0D1117] border-t border-gray-200 dark:border-white/5">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 dark:from-primary/10 dark:to-secondary/10 z-0" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 dark:opacity-20 pointer-events-none z-0" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Let's Build What's Next
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10"
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
            className="inline-flex items-center justify-center rounded-md text-base font-bold h-14 px-10 bg-primary text-white hover:bg-primary-dark dark:bg-white dark:text-primary dark:hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Start a Conversation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
