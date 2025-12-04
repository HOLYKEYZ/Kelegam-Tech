
"use client"

import { GraduationCap, Server, Video } from "lucide-react"
import { PlatformDetailCard } from "@/components/platforms/PlatformDetailCard"

export default function PlatformsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero */}
      <section className="bg-dark py-16 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent opacity-50 pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Our Digital <span className="text-gradient">Platforms</span>
          </h1>
          <p className="text-lg text-light/70 max-w-2xl mx-auto leading-relaxed">
            Kelagam develops platforms built for scale, performance, and real-world impact.
          </p>
        </div>
      </section>

      <PlatformDetailCard
        id="uros"
        badge="⭐ Flagship Platform"
        title="UROS"
        tagline="Unified Resource & Operations Suite"
        description="UROS is a powerful digital operations suite that helps organizations manage complex workflows, coordinate resources, and improve real-time operational efficiency. It is modular, scalable, and built to adapt to enterprise and government needs. UROS brings structure, clarity, and intelligence to any organization."
        imageSrc="/images/uros.png"
        capabilities={[
          "Workflow automation",
          "Resource and task coordination",
          "Multi-location operations visibility",
          "AI-supported routing",
          "Enterprise dashboards"
        ]}
        gradientColor="primary"
        align="left"
      />

      <PlatformDetailCard
        id="ringam"
        badge="⭐ Global Platform"
        title="RingAm"
        tagline="Digital Connection Platform for Celebrities & Professionals"
        description="RingAm allows fans, clients, and learners to connect directly with verified celebrities, influencers, experts, and professionals through paid video and audio sessions. RingAm redefines how people connect, communicate, and gain access."
        imageSrc="/images/ringam.png"
        capabilities={[
          "Mentorship",
          "Advisory calls",
          "Entertainment",
          "Paid consultations",
          "Fan engagement",
          "Digital talent monetization"
        ]}
        gradientColor="secondary"
        align="right"
      />

      <PlatformDetailCard
        id="educonnect"
        badge="⭐ EdTech Infrastructure"
        title="EduConnect"
        tagline="Smart Education Infrastructure System"
        description="EduConnect provides a unified digital backbone for managing school operations at scale. Designed for state and institutional use."
        imageSrc="/images/educonnect.png"
        capabilities={[
          "Teacher deployment",
          "Attendance and student records",
          "School resource tracking",
          "Data dashboards for ministries",
          "Performance and compliance monitoring"
        ]}
        gradientColor="accent"
        align="left"
      />
    </div>
  )
}
