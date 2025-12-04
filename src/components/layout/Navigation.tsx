"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/platforms", label: "Platforms" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-dark/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 group">
          <Image 
            src="/Kelegram-logo&icon.png" 
            alt="Kelagam Technologies" 
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
            priority
          />
          <span className="font-display text-xl font-bold text-white hidden sm:block">Kelagam</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium hover:text-secondary relative",
                pathname === route.href ? "text-white" : "text-light/70"
              )}
            >
              {route.label}
              {pathname === route.href && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary rounded-full" />
              )}
            </Link>
          ))}
          <Link 
            href="/contact"
            className="bg-secondary text-dark font-bold py-2 px-4 rounded hover:bg-secondary-light text-sm hover:shadow-[0_0_15px_rgba(59,206,172,0.4)]"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-light hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.15 }}
            className="md:hidden border-t border-white/10 bg-dark/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="container mx-auto py-6 px-4 flex flex-col space-y-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "text-lg font-medium hover:text-secondary py-2 border-b border-white/5 last:border-0",
                    pathname === route.href ? "text-white" : "text-light/70"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {route.label}
                </Link>
              ))}
              <Link 
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-secondary text-dark font-bold py-3 px-4 rounded hover:bg-secondary-light text-center mt-4"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
