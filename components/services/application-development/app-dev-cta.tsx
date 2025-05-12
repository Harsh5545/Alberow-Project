"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone, Tablet, Laptop } from "lucide-react"
import Link from "next/link"

export function ApplicationDevCta() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Idea Into Reality?</h2>
            <p className="text-white/80 text-lg mb-8">
              Let's discuss your application development project and create a solution that drives your business
              forward. Our team is ready to bring your vision to life with cutting-edge technology and exceptional
              design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-white/90">
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
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
                  <Smartphone className="h-16 w-16 text-white" />
                </motion.div>

                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [10, -10, 10] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
                >
                  <Tablet className="h-16 w-16 text-white" />
                </motion.div>

                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
                >
                  <Laptop className="h-16 w-16 text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
