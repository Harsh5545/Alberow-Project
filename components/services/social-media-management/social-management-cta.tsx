"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SocialManagementCta() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl overflow-hidden"
        >
          <div className="px-6 py-12 sm:px-12 sm:py-16 md:py-20 lg:py-24 relative">
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white mb-6">
                Ready to Elevate Your Social Media Presence?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let our expert team handle your social media management so you can focus on what you do best – running
                your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  View Our Portfolio
                </Button>
              </div>
            </div>

            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="h-full w-full" viewBox="0 0 800 800">
                <defs>
                  <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="1.5" fill="#fff" />
                  </pattern>
                </defs>
                <rect width="800" height="800" fill="url(#pattern)" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
