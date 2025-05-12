"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MousePointer, Smartphone, Zap } from "lucide-react"
import Link from "next/link"

export function OnePageCta() {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-600 to-emerald-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Make a Strong Impression with a One-Page Website?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Let's create a stunning one-page website that effectively showcases your brand and converts visitors into
              customers. Our team is ready to bring your vision to life with a modern, responsive design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-white/90">
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute w-64 h-64 rounded-full bg-white/10 animate-pulse"></div>

              <div className="relative z-10 flex items-center gap-4">
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
                >
                  <MousePointer className="h-16 w-16 text-white" />
                </motion.div>

                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [10, -10, 10] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
                >
                  <Smartphone className="h-16 w-16 text-white" />
                </motion.div>

                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
                >
                  <Zap className="h-16 w-16 text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
