"use client"

import { BarChart3, Brain, Network, Shield, Target, Workflow } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Brain,
    title: "Operational Analytics",
    description: "Real-time data-driven operations that transform raw data into actionable intelligence for smarter decision-making across your organization.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "group-hover:border-primary/50",
    shadow: "group-hover:shadow-primary/20"
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Intelligent automation systems that eliminate manual processes, reduce errors, and accelerate operations through AI-driven workflows.",
    color: "text-secondary",
    bg: "bg-secondary/10",
    border: "group-hover:border-secondary/50",
    shadow: "group-hover:shadow-secondary/20"
  },
  {
    icon: Network,
    title: "Real-Time Coordination",
    description: "Seamless synchronization of teams, resources, and operations across multiple locations with live updates and intelligent routing.",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "group-hover:border-accent/50",
    shadow: "group-hover:shadow-accent/20"
  },
  {
    icon: Shield,
    title: "Enterprise-grade Data Platforms",
    description: "Scalable cloud infrastructure built into every layer, ensuring your digital transformation journey is protected from day one.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "group-hover:border-primary/50",
    shadow: "group-hover:shadow-primary/20"
  },
  {
    icon: BarChart3,
    title: "Data Visibility & Performance",
    description: "Comprehensive dashboards and analytics engines that provide complete visibility into operations, performance metrics, and KPIs.",
    color: "text-secondary",
    bg: "bg-secondary/10",
    border: "group-hover:border-secondary/50",
    shadow: "group-hover:shadow-secondary/20"
  },
  {
    icon: Target,
    title: "Measurable Impact",
    description: "Systems designed with clear ROI in mind - track efficiency gains, cost reductions, and operational improvements in real-time.",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "group-hover:border-accent/50",
    shadow: "group-hover:shadow-accent/20"
  }
]

export function WhatWeDo() {
  return (
    <section className="py-24 bg-white dark:bg-[#161b22] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            What We Do
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto"
          >
            We develop powerful digital platforms that drive transformation
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "group relative p-8 rounded-2xl bg-gray-50 dark:bg-[#1c2128] border border-gray-200 dark:border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl",
                feature.border,
                feature.shadow
              )}
            >
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3", feature.bg, feature.color)}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
              
              {/* Glow Effect on Hover */}
              <div className={cn(
                "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none",
                feature.color.replace('text-', 'bg-')
              )} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
