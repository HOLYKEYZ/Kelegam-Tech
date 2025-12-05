import { Mail, Phone } from "lucide-react"
import Link from "next/link"


export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-[#161b22] border-t border-gray-200 dark:border-white/10 pt-16 pb-8 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Company */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6 text-gray-900 dark:text-white">Kelagam</h3>
            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              <li>
                <Link href="/about" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-secondary transition-colors">
                  Mission & Vision
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Platforms */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6 text-gray-900 dark:text-white">Platforms</h3>
            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              <li>
                <Link href="/platforms/uros" className="hover:text-primary transition-colors">
                  UROS
                </Link>
              </li>
              <li>
                <Link href="/platforms/ringam" className="hover:text-secondary transition-colors">
                  RingAm
                </Link>
              </li>
              <li>
                <Link href="/platforms/educonnect" className="hover:text-accent transition-colors">
                  EduConnect
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6 text-gray-900 dark:text-white">Services</h3>
            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              <li>
                <Link href="/services" className="hover:text-secondary transition-colors">
                  Enterprise Software
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary transition-colors">
                  AI & Automation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary transition-colors">
                  Cloud & DevOps
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary transition-colors underline decoration-secondary/30 hover:decoration-secondary">
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6 text-gray-900 dark:text-white">Connect</h3>
            <div className="space-y-3 text-gray-600 dark:text-gray-300">
              <a href="mailto:info@kelagamtechnologies.com" className="flex items-center hover:text-secondary transition-colors group">
                <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                info@kelagamtechnologies.com
              </a>
              <a href="tel:+2348076735750" className="flex items-center hover:text-secondary transition-colors group">
                <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                +234 807 673 5750
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-white/10 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Kelagam Technologies.</p>
        </div>
      </div>
    </footer>
  )
}
