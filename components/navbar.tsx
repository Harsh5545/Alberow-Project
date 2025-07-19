"use client"
import { useRouter } from "next/navigation"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X, ChevronDown, Code, Smartphone, Globe, Zap, ArrowRight, Phone, Mail, FileText, Files, Users, Share2, Image } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const navLinks = [
  {
    name: "Home",
    href: "/",
    description: "Welcome to our digital agency",
  },
  {
    name: "Services",
    href: "/services",
    description: "Our web development solutions",
   submenu: [
      { name: "Web Development", href: "/web-development", icon: Code },
      { name: "Mobile Apps", href: "/application-development", icon: Smartphone },
      { name: "SEO Optimization", href: "/seo-optimization", icon: Globe },
      { name: "One-Page Websites", href: "/one-page-websites", icon: FileText },
      { name: "Multi-Page Websites", href: "/multi-page-websites", icon: Files },
      { name: "Portfolio Development", href: "/portfolio-development", icon: Image },
      { name: "Social Media Marketing", href: "/social-media-marketing", icon: Share2 },
      { name: "Social Media Management", href: "/social-media-management", icon: Users }
    ],
  },
  {
    name: "Portfolio",
    href: "/projects",
    description: "Our latest projects and case studies",
  },
  {
    name: "About",
    href: "/about",
    description: "Learn about our team and mission",
  },
  {
    name: "Blog",
    href: "/blog",
    description: "Latest insights and tutorials",
  },
  // {
  //   name: "Contact",
  //   href: "/contact",
  //   description: "Get in touch with our team",
  // },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [showSubmenu, setShowSubmenu] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const submenuRef = useRef<HTMLDivElement>(null)
const router = useRouter()
let submenuTimeout: ReturnType<typeof setTimeout>
  // Enhanced scroll detection with throttling
  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Enhanced scroll spy with intersection observer
  useEffect(() => {
    const sections = navLinks
      .map((link) => ({
        id: link.href.replace("#", ""),
        element: document.getElementById(link.href.replace("#", "")),
      }))
      .filter((section) => section.element)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: "-80px 0px -80px 0px",
      },
    )

    sections.forEach((section) => {
      if (section.element) observer.observe(section.element)
    })

    return () => observer.disconnect()
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setShowSubmenu(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.paddingRight = "var(--scrollbar-width, 0px)"
    } else {
      document.body.style.overflow = ""
      document.body.style.paddingRight = ""
    }
    return () => {
      document.body.style.overflow = ""
      document.body.style.paddingRight = ""
    }
  }, [isOpen])

  // const handleNavClick = (href: string) => {
  //   setIsOpen(false)
  //   setShowSubmenu(false)

  //   // Smooth scroll with offset for sticky header
  //   const element = document.getElementById(href.replace("#", ""))
  //   if (element) {
  //     const headerHeight = 80
  //     const elementPosition = element.offsetTop - headerHeight
  //     window.scrollTo({
  //       top: elementPosition,
  //       behavior: "smooth",
  //     })
  //   }
  // }
const handleNavClick = (href: string) => {
  setIsOpen(false)
  setShowSubmenu(false)

  if (href.startsWith("#")) {
    const element = document.getElementById(href.replace("#", ""))
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  } else {
    router.push(href)
  }
}
const handleSubmenuEnter = (name: string) => {
  clearTimeout(submenuTimeout)
  setHoveredItem(name)
  setShowSubmenu(true)
}

const handleSubmenuLeave = () => {
  submenuTimeout = setTimeout(() => {
    setHoveredItem(null)
    setShowSubmenu(false)
  }, 150) // add small delay (ms)
}
  return (
    <>
      <header
        ref={navRef}
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500 ease-out",
          scrolled
            ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50 py-2"
            : "bg-transparent py-4",
        )}
        role="banner"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            {/* <motion.a
              href="/"
              className="flex items-center space-x-3 z-10 group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("/")
              }}
              aria-label="Alberow - Web Development Agency"
            >
              <div className="relative">
                <motion.div
                  className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-xl flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Code className="w-5 h-5 text-white" />
                </motion.div>
                <motion.div className="absolute -inset-1 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
              </div>
              <div className="flex flex-col">
                <motion.span
                  className="font-bold text-xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.02 }}
                >
                  Alberow
                </motion.span>
                <span className="text-xs text-muted-foreground font-medium tracking-wide">WEB DEVELOPMENT</span>
              </div>
            </motion.a> */}
            <motion.a
  href="#home"
  className="flex items-center space-x-3 z-10 group"
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  onClick={(e) => {
    e.preventDefault()
    handleNavClick("/")
  }}
  aria-label="Alberow - Web Development Agency"
>
  <div className="relative">
    {/* <motion.div
      className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-xl flex items-center justify-center shadow-lg"
      whileHover={{ scale: 1.05, rotate: 5 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Code className="w-5 h-5 text-white" />
    </motion.div> */}
    {/* <motion.div className="absolute -inset-1 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" /> */}
  </div>
  <div className="flex flex-col">
    <motion.span
      className="font-bold text-3xl bg-gradient-to-r from-[#9433E8] via-pink-600 to-[#BF2BA2] bg-clip-text text-transparent"
      whileHover={{ scale: 1.02 }}
    >
      Alberow
    </motion.span>
    {/* <span className="text-xs text-muted-foreground font-medium tracking-wide">
      WEB DEVELOPMENT
    </span> */}
  </div>
</motion.a>


            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Main navigation" role="navigation">
              {navLinks.map((link, index) => (
                <div key={link.name} className="relative">
                  <motion.a
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group flex items-center space-x-1",
                      activeSection === link.href.replace("#", "")
                        ? "text-foreground bg-muted/50"
                        : "text-foreground/70 hover:text-foreground hover:bg-muted/30",
                    )}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    onMouseEnter={() => {
                      setHoveredItem(link.name)
                      if (link.submenu) setShowSubmenu(true)
                    }}
                    onMouseLeave={() => {
                      setHoveredItem(null)
                      if (!link.submenu) setShowSubmenu(false)
                    }}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    aria-describedby={`nav-desc-${link.name}`}
                  >
                    <span>{link.name}</span>
                    {link.submenu && (
                      <ChevronDown
                        className={cn(
                          "w-3 h-3 transition-transform duration-200",
                          showSubmenu && hoveredItem === link.name ? "rotate-180" : "",
                        )}
                      />
                    )}

                    {/* Active indicator */}
                    <motion.div
                      className="absolute -bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                      initial={{ width: 0, x: "-50%" }}
                      animate={{
                        width: activeSection === link.href.replace("#", "") ? "80%" : 0,
                        x: "-50%",
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.a>

                  {/* Submenu */}
                  <AnimatePresence>
                    {link.submenu && showSubmenu && hoveredItem === link.name && (
                      <motion.div
                        ref={submenuRef}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-xl p-2"
                        onMouseEnter={() => setShowSubmenu(true)}
                        onMouseLeave={() => setShowSubmenu(false)}
                      >
                        {link.submenu.map((item, idx) => (
                          <motion.a
                            key={item.name}
                            href={item.href}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            onClick={(e) => {
                              e.preventDefault()
                              handleNavClick(item.href)
                            }}
                          >
                            <div className="w-8 h-8 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                              <item.icon className="w-4 h-4 text-purple-600" />
                            </div>
                            <div>
                              <div className="font-medium text-sm">{item.name}</div>
                            </div>
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Hidden description for screen readers */}
                  <span id={`nav-desc-${link.name}`} className="sr-only">
                    {link.description}
                  </span>
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <ModeToggle />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <Button
                  asChild
                  className="bg-gradient-to-r from-[#9433E8]  to-[#BF2BA2] hover:from-purple-700 hover:via-pink-700 hover:to-[#BF2BA2] text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick("/contact")
                    }}
                    className="flex items-center space-x-2"
                  >
                    <span>Start Project</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center space-x-3 lg:hidden">
              <ModeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                className="z-10 relative"
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
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-y-0 right-0 z-40 w-full max-w-sm bg-background backdrop-blur-xl border-l border-border/50 lg:hidden shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col pt-16 h-full">
              {/* Mobile Header */}
              {/* <div className="flex items-center justify-between p-6 border-b border-border/50">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-lg flex items-center justify-center">
                    <Code className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-lg bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                      Alberow
                    </p>
                    <p className="text-xs text-muted-foreground">Web Development</p>
                  </div>
                </motion.div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="h-8 w-8"
                >
                  <X size={20} />
                </Button>
              </div> */}

              {/* Mobile Navigation Links */}
              <nav className="flex-1 overflow-y-auto p-6 space-y-2" role="navigation">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.1 }}
                  >
                    <a
                      href={link.href}
                      className={cn(
                        "group flex items-center justify-between p-4 rounded-xl transition-all duration-300 hover:bg-muted/50",
                        activeSection === link.href.replace("#", "")
                          ? "bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 text-foreground border border-purple-200/50 dark:border-purple-800/50"
                          : "text-foreground/80 hover:text-foreground",
                      )}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(link.href)
                      }}
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={cn(
                            "w-2 h-2 rounded-full transition-all duration-200",
                            activeSection === link.href.replace("#", "")
                              ? "bg-gradient-to-r from-purple-600 to-pink-600"
                              : "bg-muted group-hover:bg-foreground/30",
                          )}
                        />
                        <div>
                          <span className="font-medium">{link.name}</span>
                          <p className="text-xs text-muted-foreground mt-0.5">{link.description}</p>
                        </div>
                      </div>
                      <motion.div
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ x: 2 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </a>

                    {/* Mobile Submenu */}
                    {link.submenu && activeSection === link.href.replace("#", "") && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="ml-6 mt-2 space-y-1"
                      >
                        {link.submenu.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors text-sm"
                            onClick={(e) => {
                              e.preventDefault()
                              handleNavClick(item.href)
                            }}
                          >
                            <item.icon className="w-4 h-4 text-purple-600" />
                            <span>{item.name}</span>
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* Mobile Footer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="p-6 border-t border-border/50 space-y-4"
              >
                {/* Contact Info */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>Available for projects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <a href="tel:+1234567890" className="p-2 hover:bg-muted/50 rounded-lg transition-colors">
                      <Phone className="w-4 h-4" />
                    </a>
                    <a href="mailto:hello@alberow.com" className="p-2 hover:bg-muted/50 rounded-lg transition-colors">
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a
                    href="#contact"
                    className="flex items-center justify-center space-x-2"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick("#contact")
                    }}
                  >
                    <span>Start Your Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  )
}
