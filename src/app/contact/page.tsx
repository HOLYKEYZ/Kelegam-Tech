"use client"

import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { cn } from "@/lib/utils"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  organization: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  message: z.string().min(50, "Message must be at least 50 characters"),
  consent: z.boolean().refine(val => val === true, "You must agree to be contacted")
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
    alert("Message sent successfully!")
  }

  return (
    <div className="flex flex-col min-h-screen pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-64px)]">
        
        {/* Left Side: Form */}
        <div className="bg-dark p-8 lg:p-16 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl mx-auto w-full relative z-10"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Let's Build Together</h1>
            <p className="text-light/70 mb-8 text-lg">Tell us about your project and we'll get back to you within 24 hours</p>

            <div className="bg-dark-card border border-white/5 rounded-2xl p-8 shadow-xl backdrop-blur-sm">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Name</label>
                    <input 
                      {...register("name")}
                      className={cn("w-full px-4 py-3 bg-dark/50 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors text-white placeholder:text-light/30", errors.name && "border-red-500")}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Email</label>
                    <input 
                      {...register("email")}
                      className={cn("w-full px-4 py-3 bg-dark/50 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors text-white placeholder:text-light/30", errors.email && "border-red-500")}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Organization (Optional)</label>
                    <input 
                      {...register("organization")}
                      className="w-full px-4 py-3 bg-dark/50 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors text-white placeholder:text-light/30"
                      placeholder="Company Ltd"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white">Phone (Optional)</label>
                    <input 
                      {...register("phone")}
                      className="w-full px-4 py-3 bg-dark/50 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors text-white placeholder:text-light/30"
                      placeholder="+234..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white">Message</label>
                  <textarea 
                    {...register("message")}
                    rows={4}
                    className={cn("w-full px-4 py-3 bg-dark/50 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors text-white resize-none placeholder:text-light/30", errors.message && "border-red-500")}
                    placeholder="Tell us about your project requirements..."
                  />
                  {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
                </div>

                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox"
                    {...register("consent")}
                    id="consent"
                    className="mt-1 w-4 h-4 rounded border-white/10 bg-dark/50 text-primary focus:ring-primary"
                  />
                  <label htmlFor="consent" className="text-sm text-light/70">
                    I agree to be contacted about this inquiry.
                  </label>
                </div>
                {errors.consent && <p className="text-xs text-red-500">{errors.consent.message}</p>}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Contact Info */}
        <div className="bg-dark-lighter p-8 lg:p-16 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-md mx-auto w-full relative z-10 space-y-8">
            <div className="grid grid-cols-1 gap-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-dark-card border border-white/5 p-6 rounded-xl hover:border-primary/30 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white">Email Us</h3>
                </div>
                <p className="text-light/70 pl-14">info@kelagamtechnologies.com</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-dark-card border border-white/5 p-6 rounded-xl hover:border-secondary/30 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white">Call Us</h3>
                </div>
                <p className="text-light/70 pl-14">+234 807 673 5750</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-dark-card border border-white/5 p-6 rounded-xl hover:border-accent/30 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white">Visit Us</h3>
                </div>
                <p className="text-light/70 pl-14">Lagos, Nigeria</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-dark-card border border-white/5 p-6 rounded-xl hover:border-white/20 transition-colors group"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white">Business Hours</h3>
                </div>
                <p className="text-light/70 pl-14">Always Available</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
