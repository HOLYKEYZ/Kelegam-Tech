"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button" // Will uncomment when shadcn is installed
import { Menu, X } from "lucide-react"

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
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border border-white/10">
            <Image 
              src="/logo.jpg" 
              alt="Kelagam Technologies" 
              fill 
              className="object-cover"
            />
          </div>
          <span className="font-display text-xl font-bold text-white hidden sm:block">Kelagam</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary",
                pathname === route.href ? "text-white" : "text-light/70"
              )}
            >
              {route.label}
            </Link>
          ))}
          {/* <Button variant="secondary" size="sm">Get Started</Button> */}
          <button className="bg-secondary text-dark font-bold py-2 px-4 rounded hover:bg-secondary-light transition-colors text-sm">
            Get Started
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-light hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-dark">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-base font-medium transition-colors hover:text-secondary",
                  pathname === route.href ? "text-white" : "text-light/70"
                )}
                onClick={() => setIsOpen(false)}
              >
                {route.label}
              </Link>
            ))}
             <button className="bg-secondary text-dark font-bold py-2 px-4 rounded hover:bg-secondary-light transition-colors text-sm w-full">
                Get Started
              </button>
          </div>
        </div>
      )}
    </header>
  )
}
