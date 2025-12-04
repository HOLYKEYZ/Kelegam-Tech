import Link from "next/link"
import { Github, Linkedin, Mail, Phone, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-dark-lighter border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Company */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6 text-white">Kelagam</h3>
            <ul className="space-y-4 text-light/70">
              <li>
                <Link href="/about" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about#mission" className="hover:text-secondary transition-colors">
                  Mission & Vision
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-secondary transition-colors">
                  Careers
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
            <h3 className="font-display text-xl font-bold mb-6 text-white">Platforms</h3>
            <ul className="space-y-4 text-light/70">
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
            <h3 className="font-display text-xl font-bold mb-6 text-white">Services</h3>
            <ul className="space-y-4 text-light/70">
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
                <Link href="/services" className="hover:text-secondary transition-colors underline">
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6 text-white">Connect</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-dark-card p-2 rounded-full hover:bg-primary/20 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-dark-card p-2 rounded-full hover:bg-primary/20 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-dark-card p-2 rounded-full hover:bg-primary/20 hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
            <div className="space-y-3 text-light/70">
              <a href="mailto:info@kelagamtechnologies.com" className="flex items-center hover:text-secondary transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                info@kelagamtechnologies.com
              </a>
              <a href="tel:+2348076735750" className="flex items-center hover:text-secondary transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                +234 807 673 5750
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-light/50">
          <p>&copy; {new Date().getFullYear()} Kelagam Technologies. Built with precision.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-light transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-light transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
