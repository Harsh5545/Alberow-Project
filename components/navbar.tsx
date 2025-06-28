"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const navRef = useRef<HTMLDivElement>(null)

  // Sticky and shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll spy for anchor sections
  useEffect(() => {
    const handleScroll = () => {
      let current = "home"
      for (const link of navLinks) {
        const section = document.getElementById(link.href.replace("#", ""))
        if (section && window.scrollY + 80 >= section.offsetTop) {
          current = link.href.replace("#", "")
        }
      }
      setActiveSection(current)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // Smooth scroll CSS
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = ""
    }
  }, [])

  return (
    <header
      ref={navRef}
      className={cn(
        "sticky top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center space-x-2 z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              Alberow
            </motion.div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-foreground/80 hover:text-foreground transition-colors relative group py-2",
                  activeSection === link.href.replace("#", "") && "text-foreground font-medium"
                )}
              >
                {link.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 group-hover:w-full",
                    activeSection === link.href.replace("#", "") ? "w-full" : "w-0"
                  )}
                />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="w-10 flex justify-center items-center">
              <ModeToggle className="relative" />
            </div>
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            >
              <a href="#contact">Get Started</a>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <div className="w-10 flex justify-center items-center">
              <ModeToggle className="relative" />
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="z-10"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "100vh", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 z-0 md:hidden bg-background/95 backdrop-blur-md pt-20"
          >
            <div className="container mx-auto px-4 py-4 h-full flex flex-col">
              <div className="flex-1 flex flex-col justify-center space-y-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className={cn(
                        "text-foreground/80 hover:text-foreground py-2 transition-colors text-2xl font-medium flex items-center",
                        activeSection === link.href.replace("#", "") && "text-foreground font-bold"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: activeSection === link.href.replace("#", "") ? 24 : 0 }}
                        className="h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 mr-2"
                      />
                      {link.name}
                    </a>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="py-8"
              >
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white w-full py-6 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <a href="#contact">Get Started</a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}