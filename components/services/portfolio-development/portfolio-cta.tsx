"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"

export function PortfolioCta() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-500/10 via-background to-orange-500/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Showcase Your Work with a{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600">
              Stunning Portfolio?
            </span>
          </h2>
          <p className="text-foreground/70 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Let's create a portfolio website that perfectly represents your work and helps you attract your ideal
            clients. Get started with a free consultation today.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-6 text-lg"
            >
              <Link href="/contact">
                Start Your Portfolio <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-6 text-lg">
              <Link href="/contact">
                <MessageCircle className="mr-2 h-5 w-5" />
                Free Consultation
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600 mb-2">50+</div>
              <div className="text-foreground/70">Portfolios Created</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-foreground/70">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600 mb-2">2-4 Weeks</div>
              <div className="text-foreground/70">Average Delivery</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
