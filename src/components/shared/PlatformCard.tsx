"use client"

import { ArrowRight, Check, LucideIcon } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface PlatformCardProps {
  badge: string
  icon: LucideIcon
  title: string
  tagline: string
  description: string
  capabilities: string[]
  ctaText: string
  ctaHref: string
  gradientColor: 'primary' | 'secondary' | 'accent'
  delay?: number
}

export function PlatformCard({
  badge,
  icon: Icon,
  title,
  tagline,
  description,
  capabilities,
  ctaText,
  ctaHref,
  gradientColor,
  delay = 0
}: PlatformCardProps) {
  const colors = {
    primary: "border-primary/50 hover:border-primary",
    secondary: "border-secondary/50 hover:border-secondary",
    accent: "border-accent/50 hover:border-accent"
  }

  const badgeColors = {
    primary: "bg-primary/20 text-primary border-primary/30",
    secondary: "bg-secondary/20 text-secondary border-secondary/30",
    accent: "bg-accent/20 text-accent border-accent/30"
  }

  const iconColors = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.01 }}
      className={cn(
        "flex flex-col h-full bg-dark-card rounded-2xl border p-8 transition-all duration-300 relative overflow-hidden group",
        colors[gradientColor]
      )}
    >
      {/* Badge */}
      <div className="mb-6">
        <span className={cn("px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border", badgeColors[gradientColor])}>
          {badge}
        </span>
      </div>

      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className={cn("p-3 rounded-lg bg-white/5", iconColors[gradientColor])}>
          <Icon className="w-8 h-8" />
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold text-gradient">{title}</h3>
          <p className={cn("text-sm font-medium", iconColors[gradientColor])}>{tagline}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-light/70 mb-8 leading-relaxed">
        {description}
      </p>

      {/* Capabilities */}
      <div className="space-y-3 mb-8 flex-grow">
        {capabilities.map((cap, i) => (
          <div key={i} className="flex items-start gap-3 text-sm text-light/80">
            <Check className={cn("w-4 h-4 mt-1 flex-shrink-0", iconColors[gradientColor])} />
            <span>{cap}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-auto">
        <Link 
          href={ctaHref}
          className={cn(
            "inline-flex items-center justify-center w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 group-hover:gap-3",
            "bg-white/5 hover:bg-white/10 text-white border border-white/10"
          )}
        >
          {ctaText}
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Gradient Glow */}
      <div className={cn(
        "absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-[100px] opacity-20 pointer-events-none transition-opacity group-hover:opacity-30",
        gradientColor === 'primary' && "bg-primary",
        gradientColor === 'secondary' && "bg-secondary",
        gradientColor === 'accent' && "bg-accent"
      )} />
    </motion.div>
  )
}
