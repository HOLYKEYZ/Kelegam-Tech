"use client"

import { Check } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface PlatformDetailCardProps {
  id: string
  badge: string
  title: string
  tagline: string
  description: string
  imageSrc: string
  capabilities: string[]
  gradientColor: 'primary' | 'secondary' | 'accent'
  align?: 'left' | 'right'
}

export function PlatformDetailCard({
  id,
  badge,
  title,
  tagline,
  description,
  imageSrc,
  capabilities,
  gradientColor,
  align = 'left'
}: PlatformDetailCardProps) {
  const colors = {
    primary: "text-primary border-primary/30 bg-primary/10",
    secondary: "text-secondary border-secondary/30 bg-secondary/10",
    accent: "text-accent border-accent/30 bg-accent/10"
  }

  return (
    <section id={id} className="py-24 border-b border-white/5 last:border-0 relative overflow-hidden">
      {/* Background Glow */}
      <div className={cn(
        "absolute top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 pointer-events-none",
        align === 'left' ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2",
        gradientColor === 'primary' && "bg-primary",
        gradientColor === 'secondary' && "bg-secondary",
        gradientColor === 'accent' && "bg-accent"
      )} />

      <div className="container mx-auto px-4 relative z-10">
        <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center", align === 'right' && "lg:grid-flow-dense")}>
          
          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: align === 'left' ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={cn(align === 'right' && "lg:col-start-2")}
          >
            <div className={cn("inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border mb-8", colors[gradientColor])}>
              {badge}
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
            <p className={cn("text-xl font-medium mb-8", colors[gradientColor].split(' ')[0])}>{tagline}</p>
            
            <p className="text-light/80 text-lg leading-relaxed mb-10">
              {description}
            </p>

            <div className="space-y-6">
              <h3 className="text-white font-bold text-lg uppercase tracking-wide border-b border-white/10 pb-2 inline-block">Key Capabilities</h3>
              <ul className="grid grid-cols-1 gap-4">
                {capabilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-light/90">
                    <div className={cn("mt-1 p-0.5 rounded-full", colors[gradientColor])}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={cn(
              "relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group",
              align === 'right' && "lg:col-start-1"
            )}
          >
            <div className={cn(
              "absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-10",
              gradientColor === 'primary' && "bg-primary",
              gradientColor === 'secondary' && "bg-secondary",
              gradientColor === 'accent' && "bg-accent"
            )} />
            
            <Image 
              src={imageSrc} 
              alt={`${title} Platform Interface`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
