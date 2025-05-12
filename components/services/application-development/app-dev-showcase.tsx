"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Users, Star, TrendingUp, Clock, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function ApplicationDevShowcase() {
  const caseStudies = [
    {
      title: "Fitness Tracking App",
      description: "A mobile application for tracking fitness activities, nutrition, and progress over time.",
      image: "/placeholder.svg?height=600&width=300",
      stats: [
        { icon: <Download className="h-4 w-4" />, value: "50,000+", label: "Downloads" },
        { icon: <Star className="h-4 w-4" />, value: "4.7", label: "App Store Rating" },
        { icon: <TrendingUp className="h-4 w-4" />, value: "30%", label: "Better Adherence" },
      ],
      platforms: ["iOS", "Android"],
      color: "from-indigo-500 to-indigo-600",
    },
    {
      title: "Food Delivery App",
      description: "A mobile application for ordering food from local restaurants with real-time tracking.",
      image: "/placeholder.svg?height=600&width=300",
      stats: [
        { icon: <Download className="h-4 w-4" />, value: "100,000+", label: "Downloads" },
        { icon: <TrendingUp className="h-4 w-4" />, value: "35%", label: "Order Increase" },
        { icon: <Clock className="h-4 w-4" />, value: "28%", label: "Faster Delivery" },
      ],
      platforms: ["iOS", "Android", "Web"],
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "E-Learning Platform",
      description: "A mobile application for accessing educational content and courses on the go.",
      image: "/placeholder.svg?height=600&width=300",
      stats: [
        { icon: <Users className="h-4 w-4" />, value: "75,000+", label: "Active Users" },
        { icon: <CheckCircle className="h-4 w-4" />, value: "45%", label: "Completion Rate" },
        { icon: <TrendingUp className="h-4 w-4" />, value: "60%", label: "Engagement" },
      ],
      platforms: ["iOS", "Android", "Web"],
      color: "from-indigo-500 to-indigo-600",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our App Development Portfolio</h2>
          <p className="text-foreground/70 text-lg">
            Explore some of our successful application development projects that have delivered exceptional results for
            our clients.
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
              <div className="relative h-80 bg-muted">
                <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {study.platforms.map((platform, i) => (
                        <span key={i} className="text-xs bg-white/20 px-2 py-1 rounded-full">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-foreground/70 mb-4">{study.description}</p>

                <div className="grid grid-cols-3 gap-2 mb-6">
                  {study.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <div
                        className={`bg-gradient-to-r ${study.color} text-white p-2 rounded-lg mb-2 flex items-center justify-center`}
                      >
                        {stat.icon}
                      </div>
                      <div className="font-semibold">{stat.value}</div>
                      <div className="text-xs text-foreground/60">{stat.label}</div>
                    </div>
                  ))}
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
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
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
