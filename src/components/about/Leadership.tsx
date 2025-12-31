"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const team = [
  {
    name: "Treasure Emmanuel",
    role: "Founder & Lead Systems Architect",
    image: "/images/team/treasure-emmanuel.jpg",
    bio: "A multidisciplinary technology architect and systems strategist with expertise in geospatial analytics, AI-assisted platforms, and large-scale digital system design. Treasure leads Kelagam's product vision, technical architecture, and long-term innovation strategy, positioning the company as a key contributor to Africa's modern digital infrastructure."
  },
  {
    name: "Abraham O. Alhassan",
    role: "Chief Operating Officer (COO)",
    image: "/images/team/abraham-alhassan.jpg",
    bio: "With over 15 years of operational leadership across security, surveillance, and emergency management, Abraham drives Kelagam's operational strategy and execution frameworks. Drawing from experience at SPDC and safety compliance roles, he ensures solutions meet institutional expectations for reliability and disciplined delivery."
  },
  {
    name: "Ayanda Johnson",
    role: "Chief Technology Officer (CTO)",
    image: "/images/team/ayanda-johnson.jpg",
    bio: "Leading software engineering, platform architecture, and AI integration. Ayanda oversees backend and frontend development, ensuring the EIS platform and Kelagam's ecosystem are technically robust, secure, scalable, and aligned with global engineering standards."
  },
  {
    name: "Engineer Joseph Igunwe",
    role: "Chief Systems Integration Officer (CSIO)",
    image: "/images/team/joseph-igunwe.jpg",
    bio: "A globally experienced Engineering Technologist specializing in ICT infrastructure, PIDS, and advanced surveillance integrations. With certifications including CCNP and CompTIA Security+, Joseph oversees all field engineering processes and the unification of physical systems with Kelagam's software platforms."
  }
]

export function Leadership() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#161b22] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Leadership Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Visionary leaders building Africa's digital future through engineering excellence and strategic innovation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-[#1c2128] border border-gray-200 dark:border-white/5 shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-80 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Content */}
                <div className="relative p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-[#FB8500] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm font-bold text-secondary uppercase tracking-wider">
                      {member.role}
                    </p>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-6 group-hover:line-clamp-none transition-all duration-300">
                    {member.bio}
                  </p>
                </div>

                {/* Hover Border Gradient */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary/20 rounded-2xl transition-colors duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-white dark:bg-[#1c2128] rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-white/5 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
          <p className="text-xl md:text-2xl font-display font-medium text-gray-900 dark:text-white leading-relaxed relative z-10">
            "Our philosophy is simple: <span className="text-secondary">Build with integrity.</span> <span className="text-[#FB8500]">Deploy with intelligence.</span> <span className="text-blue-500">Innovate with purpose.</span>"
          </p>
        </motion.div>
      </div>
    </section>
  )
}

