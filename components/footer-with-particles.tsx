"use client"

import type React from "react"

import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Facebook, Instagram, Linkedin, ArrowUp, Mail, Phone, MapPin, Send, Heart, Sparkles, Code, Globe } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRef, useState, useEffect } from "react"

export function FooterWithParticles() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <footer
      ref={ref}
      className="relative bg-gradient-to-b from-background via-muted/20 to-muted/50 pt-20 pb-8 overflow-hidden"
    >
      {/* Interactive Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          style={{
            left: mousePosition.x * 0.02,
            top: mousePosition.y * 0.02,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          >
            {i % 3 === 0 ? (
              <Code className="w-4 h-4 text-purple-400/40" />
            ) : i % 3 === 1 ? (
              <Globe className="w-4 h-4 text-pink-400/40" />
            ) : (
              <Sparkles className="w-4 h-4 text-blue-400/40" />
            )}
          </motion.div>
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Company Section */}
          <motion.div
            className="lg:col-span-1"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} className="mb-6">
              <Link href="/" className="inline-block">
                <motion.span
                  className="font-bold text-3xl bg-gradient-to-r from-[#9433E8] via-pink-600 to-[#BF2BA2] bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  Alberow
                </motion.span>
              </Link>
            </motion.div>

            <p className="text-foreground/70 mb-6 leading-relaxed">
              Transforming ideas into powerful digital experiences that drive growth and success.
            </p>

            {/* Contact Cards */}
            <div className="space-y-3 mb-6">
              {[
                { icon: Phone, text: "+91 9137747708", href: "tel:+919137747708", color: "text-green-600" },
                { icon: Mail, text: "hello@alberow.com", href: "mailto:hello@alberow.com", color: "text-blue-600" },
                { icon: MapPin, text: "Kalyan, Maharashtra", href: "#", color: "text-purple-600" },
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 group"
                  whileHover={{ x: 5, scale: 1.02 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow`}
                  >
                    <contact.icon className={`w-5 h-5 ${contact.color}`} />
                  </div>
                  <span className="text-sm text-foreground/70 group-hover:text-foreground transition-colors">
                    {contact.text}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {[
                {
                  name: "Facebook",
                  icon: Facebook,
                  href: "https://www.facebook.com/people/Alberow/61578809690084/",
                  color: "hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950/20",
                },
                {
                  name: "Instagram",
                  icon: Instagram,
                  href: "https://www.instagram.com/alberow_/",
                  color: "hover:bg-pink-50 hover:text-pink-600 dark:hover:bg-pink-950/20",
                },
                {
                  name: "LinkedIn",
                  icon: Linkedin,
                  href: "https://www.linkedin.com/company/alberow",
                  color: "hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-950/20",
                },
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-xl bg-muted/40 flex items-center justify-center text-foreground/60 transition-all duration-300 ${social.color}`}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -10, 10, 0],
                    y: -3,
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <social.icon size={20} />
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="font-semibold text-lg mb-6 text-foreground">Quick Links</p>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Projects", "Team", "Blog", "Contact"].map((link, index) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <Link
                    href={`/${link.toLowerCase().replace(" ", "-").replace(" ", "-")}`}
                    className="text-foreground/70 hover:text-[#9433E8] transition-all duration-300 hover:translate-x-2 inline-block relative group"
                  >
                    <span className="relative z-10">{link}</span>
                    <motion.div
                      className="absolute inset-0 bg-[#9433E8]/10 rounded-md -z-10"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                      style={{ originX: 0 }}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-semibold text-lg mb-6 text-foreground">Our Services</p>
            <ul className="space-y-3">
              {[
                "Web Development",
                "SEO Optimization",
                "App Development",
                "Portfolio Design",
                "Social Media Marketing",
                "Digital Strategy",
              ].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                >
                  <Link
                    href="/services"
                    className="text-foreground/70 hover:text-pink-600 transition-all duration-300 hover:translate-x-2 inline-block relative group"
                  >
                    <span className="relative z-10">{service}</span>
                    <motion.div
                      className="absolute inset-0 bg-pink-600/10 rounded-md -z-10"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                      style={{ originX: 0 }}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="font-semibold text-lg mb-6 text-foreground">Stay Connected</p>
            <p className="text-foreground/70 mb-6">
              Get the latest updates, insights, and exclusive offers delivered to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pr-12 bg-background/50 border-muted-foreground/20 focus:border-[#9433E8] transition-all duration-300 focus:shadow-lg focus:shadow-[#9433E8]/20"
                  required
                />
                <motion.div
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    type="submit"
                    size="sm"
                    className="bg-gradient-to-r from-[#9433E8] to-[#BF2BA2] hover:from-purple-700 hover:to-[#BF2BA2] text-white p-2 h-8 w-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Send size={14} />
                  </Button>
                </motion.div>
              </motion.div>

              {isSubscribed && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="text-green-600 text-sm flex items-center space-x-2 bg-green-50 dark:bg-green-950/20 p-3 rounded-lg"
                >
                  <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.5 }}>
                    <Heart className="w-4 h-4 fill-current" />
                  </motion.div>
                  <span>Thank you for subscribing!</span>
                </motion.div>
              )}
            </form>

            {/* Status Indicators */}
            <div className="mt-6 pt-6 border-t border-muted-foreground/10 space-y-3">
              <motion.div
                className="flex items-center space-x-3 text-xs text-foreground/60"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.div
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <span>Available for new projects</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3 text-xs text-foreground/60"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.9 }}
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>24/7 Support Available</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1 }}
          className="border-t border-muted-foreground/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div className="flex items-center space-x-2 text-foreground/60 text-sm" whileHover={{ scale: 1.05 }}>
              <span>© {new Date().getFullYear()} Alberow. Crafted with</span>
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>in India</span>
            </motion.div>

            <div className="flex items-center space-x-6">
              <div className="flex space-x-4 text-sm text-foreground/60">
                <Link href="/privacy-policy" className="hover:text-[#9433E8] transition-colors">
                  Privacy
                </Link>
                <Link href="/terms-of-service" className="hover:text-[#9433E8] transition-colors">
                  Terms
                </Link>
              </div>

              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={scrollToTop}
                  className="hover:text-[#9433E8] hover:bg-[#9433E8]/10 transition-all duration-300 rounded-full relative overflow-hidden group"
                  aria-label="Scroll to top"
                >
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ArrowUp size={16} />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#9433E8]/20 to-[#BF2BA2]/20 rounded-full"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
