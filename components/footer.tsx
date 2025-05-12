"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-muted/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="inline-block mb-4">
              <span className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Alberow
              </span>
            </Link>
            <p className="text-foreground/70 mb-6">
              Creating powerful digital experiences that drive growth and engagement for your business.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-purple-600 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-foreground/60 hover:text-purple-600 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-foreground/60 hover:text-purple-600 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-foreground/60 hover:text-purple-600 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-foreground/70 hover:text-purple-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-foreground/70 hover:text-purple-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-foreground/70 hover:text-purple-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-foreground/70 hover:text-purple-600 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-foreground/70 hover:text-purple-600 transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-foreground/70 hover:text-purple-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/70 hover:text-purple-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-foreground/70 hover:text-purple-600 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-foreground/70 hover:text-purple-600 transition-colors">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-foreground/70 hover:text-purple-600 transition-colors">
                  Application Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-foreground/70 hover:text-purple-600 transition-colors">
                  Portfolio Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-foreground/70 hover:text-purple-600 transition-colors">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-foreground/70 hover:text-purple-600 transition-colors">
                  Social Media Management
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-foreground/70 mb-4">Subscribe to our newsletter to receive updates and insights.</p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Your email" className="flex-1" />
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                <Mail size={16} />
                <span className="sr-only">Subscribe</span>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Alberow. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-foreground/60">
            <Link href="/privacy-policy" className="hover:text-purple-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-purple-600 transition-colors">
              Terms of Service
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="hover:text-purple-600 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
