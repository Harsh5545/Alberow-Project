"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Layers, Globe, ShoppingCart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function MultiPageShowcase() {
  const caseStudies = [
    {
      title: "Corporate Business Website",
      description:
        "A comprehensive multi-page website for a corporate client with service pages, team profiles, and case studies.",
      image: "/placeholder.svg?height=600&width=400",
      results: "35% increase in qualified leads, 45% longer average session duration",
      features: ["Service Pages", "Team Profiles", "Case Studies", "Blog Section", "Contact Forms"],
      pages: 15,
      color: "from-purple-500 to-purple-600",
      icon: <Globe className="h-5 w-5" />,
    },
    {
      title: "E-Commerce Store",
      description:
        "A feature-rich online store with product categories, shopping cart, secure checkout, and customer accounts.",
      image: "/placeholder.svg?height=600&width=400",
      results: "120% increase in online sales, 25% higher average order value",
      features: ["Product Catalog", "Shopping Cart", "Secure Checkout", "Customer Accounts", "Order Tracking"],
      pages: 50,
      color: "from-pink-500 to-pink-600",
      icon: <ShoppingCart className="h-5 w-5" />,
    },
    {
      title: "Educational Institution",
      description:
        "A content-rich website for an educational institution with course information, faculty profiles, and resources.",
      image: "/placeholder.svg?height=600&width=400",
      results: "60% increase in student applications, 40% reduction in information inquiries",
      features: ["Course Catalog", "Faculty Profiles", "Resource Library", "Events Calendar", "Application Forms"],
      pages: 75,
      color: "from-purple-500 to-purple-600",
      icon: <Layers className="h-5 w-5" />,
    },
  ]

  return (
    <section id="multi-page-showcase" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Multi-Page Website Examples</h2>
          <p className="text-foreground/70 text-lg">
            Explore some of our successful multi-page website projects that have delivered exceptional results for our
            clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-xl overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative h-64 bg-muted">
                <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                    <div className="flex items-center gap-2">
                      <div className={`bg-gradient-to-r ${study.color} p-1 rounded-full`}>{study.icon}</div>
                      <span className="text-sm">{study.pages}+ Pages</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-foreground/70 mb-4">{study.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground/60 mb-2">KEY FEATURES:</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.features.map((feature, i) => (
                      <span
                        key={i}
                        className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground/60 mb-2">RESULTS:</h4>
                  <p className="text-sm text-foreground/80">{study.results}</p>
                </div>

                <Button variant="outline" className="w-full" asChild>
                  <Link href="/projects">
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
          >
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
