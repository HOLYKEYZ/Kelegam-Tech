"use client"

import { BarChart, Bot, Boxes, Building, CloudCog, Code, Cpu, GraduationCap, IdCard, Server, ShieldAlert, Users, Wrench, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const services = [
  {
    icon: Code,
    title: "Enterprise Software Development",
    description: "Custom enterprise applications built with modern frameworks and architectures. We develop secure, scalable systems tailored for high-demand environments including web platforms, mobile apps, APIs, and microservices.",
    category: "software"
  },
  {
    icon: Bot,
    title: "AI & Automation Engineering",
    description: "Machine learning models, predictive analytics systems, intelligent automation tools, and AI-powered workflows. From NLP to computer vision, we build AI that solves real business problems.",
    category: "ai"
  },
  {
    icon: ShieldAlert,
    title: "Cybersecurity & Digital Risk Protection",
    description: "Comprehensive security services including penetration testing, vulnerability assessments, infrastructure protection, identity and access management, threat monitoring, and digital risk defense.",
    category: "security"
  },
  {
    icon: Server,
    title: "Digital Infrastructure Engineering",
    description: "High-performance digital backbones for institutions and large organizations. Cloud architecture, on-premise infrastructure, hybrid systems, load balancing, and redundancy planning.",
    category: "infrastructure"
  },
  {
    icon: Boxes,
    title: "Systems Integration",
    description: "Unifying disparate software, hardware, cloud, and data components into a single functional ecosystem. API development, middleware, ETL pipelines, and legacy system modernization.",
    category: "software"
  },
  {
    icon: CloudCog,
    title: "Cloud & DevOps Services",
    description: "Cloud architecture design, migration services, infrastructure automation with Terraform/Ansible, CI/CD pipeline setup, containerization with Docker/Kubernetes, and high-availability systems.",
    category: "infrastructure"
  },
  {
    icon: IdCard,
    title: "Digital Identity & Registration Systems",
    description: "Secure digital enrollment systems for workforce, citizen, and enterprise use. Biometric integration, identity verification, credential management, and compliance with data protection regulations.",
    category: "security"
  },
  {
    icon: Cpu,
    title: "IoT & Smart Infrastructure Integration",
    description: "Deployment and integration of smart sensors, GPS tracking devices, RFID systems, and operational IoT systems. Edge computing, real-time data processing, and device management platforms.",
    category: "infrastructure"
  },
  {
    icon: BarChart,
    title: "Data Analytics & Decision Support Systems",
    description: "Business intelligence dashboards, geo-visualizations, analytics engines, predictive models, and reporting tools. Transform raw data into actionable insights with modern data warehousing.",
    category: "analytics"
  },
  {
    icon: Building,
    title: "Smart City & eGovernance Solutions",
    description: "Urban digital systems, municipal operations tools, connected governance platforms, citizen services portals, and public infrastructure management systems.",
    category: "software"
  },
  {
    icon: GraduationCap,
    title: "EdTech & Social Platform Development",
    description: "Scalable platforms for education, community engagement, entertainment, or professional networking. LMS systems, social features, content management, and user engagement tools.",
    category: "software"
  },
  {
    icon: Wrench,
    title: "Technical Deployment & Field Operations",
    description: "On-site installation services, infrastructure rollout, hardware deployment, system testing, commissioning, and technical support. We handle the physical implementation of digital systems.",
    category: "support"
  },
  {
    icon: Users,
    title: "Enterprise Training & Digital Transformation",
    description: "Capacity building and training programs for teams adopting new digital systems. Change management, user training, documentation, and ongoing support services.",
    category: "support"
  }
]

const categories = [
  { id: "all", label: "All Services" },
  { id: "software", label: "Software & Development" },
  { id: "ai", label: "AI & Automation" },
  { id: "security", label: "Security & Infrastructure" },
  { id: "analytics", label: "Analytics & Data" },
  { id: "support", label: "Deployment & Support" }
]

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(s => {
        if (activeCategory === "security") return s.category === "security" || s.category === "infrastructure"
        return s.category === activeCategory
      })

  return (
    <div className="flex flex-col min-h-screen pt-16 bg-dark">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Enterprise <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-light/70 max-w-3xl mx-auto leading-relaxed">
              We engineer robust digital solutions that drive transformation, security, and growth for forward-thinking organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 relative">
        <div className="container mx-auto px-4">
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border backdrop-blur-sm",
                  activeCategory === cat.id 
                    ? "bg-white text-dark border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
                    : "bg-white/5 text-light/60 border-white/10 hover:border-white/30 hover:text-white hover:bg-white/10"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(var(--primary),0.15)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-lg">
                    <service.icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-primary-light transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-light/70 text-base leading-relaxed mb-8 flex-grow group-hover:text-light/90 transition-colors">
                    {service.description}
                  </p>
                  
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-white/40 group-hover:text-primary/80 transition-colors">
                      {categories.find(c => c.id === service.category)?.label}
                    </span>
                    <Link 
                      href="/contact" 
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-primary group-hover:text-white transition-all duration-300"
                    >
                      <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-secondary-dark opacity-50" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-light/90 max-w-2xl mx-auto mb-10">
            Let's discuss how our engineering expertise can solve your most complex challenges.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center rounded-full text-base font-bold bg-white text-dark hover:bg-light h-14 px-10 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all duration-300 transform hover:-translate-y-1"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  )
}
