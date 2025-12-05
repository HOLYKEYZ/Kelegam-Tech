"use client"

import { ArrowRight, ChevronDown, Cloud, Code, Cpu, Database, Globe, Lock, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-50 dark:bg-[#0D1117] pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-bg.png" 
          alt="Digital Landscape" 
          fill 
          className="object-cover opacity-20 dark:opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/90 via-gray-50/80 to-gray-50 dark:from-[#0D1117]/90 dark:via-[#0D1117]/80 dark:to-[#0D1117]" />
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 dark:bg-primary/20 rounded-full blur-[120px] pointer-events-none z-0" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary mb-8 backdrop-blur-sm"
        >
          🚀 Building Africa's Digital Future
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 max-w-5xl mx-auto"
        >
          Powering Africa's <span className="text-gradient">Boldest</span> Global Digital Platforms
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Kelagam Technologies is a modern software and AI engineering company building secure, scalable, and intelligent digital platforms for enterprises, institutions, and governments.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link 
            href="/platforms" 
            className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 bg-secondary text-white shadow-lg shadow-secondary/25 hover:bg-secondary-dark transition-colors"
          >
            Explore Our Platforms
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 backdrop-blur-sm transition-colors"
          >
            Get In Touch
          </Link>
        </motion.div>

        {/* Tech Stack Badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 md:gap-6 opacity-70"
        >
          {[
            { icon: Code, text: "Next.js" },
            { icon: Cpu, text: "AI/ML" },
            { icon: Cloud, text: "Cloud" },
            { icon: Shield, text: "Security" },
            { icon: Database, text: "Big Data" },
            { icon: Lock, text: "Blockchain" },
          ].map((item, index) => (
            <div 
              key={index}
              className="flex items-center space-x-2 bg-gray-200/50 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 animate-float backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
