"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Users, Star, TrendingUp, Clock, CheckCircle, ArrowRight, ShoppingCart, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { projects } from "@/lib/projects-data"

const iconMap = {
  users: Users,
  star: Star,
  "trending-up": TrendingUp,
  calendar: Calendar,
  "shopping-cart": ShoppingCart,
  download: Download,
  clock: Clock,
  "check-circle": CheckCircle,
}

export function ApplicationDevShowcase() {
  // For now, we'll use projects that have stats (indicating they're more app-like)
  // or create some example app projects based on existing data
  const appProjects = projects.filter((project) => project.stats).slice(0, 3)

  // If we don't have enough projects with stats, we'll create some examples
  const caseStudies =
    appProjects.length >= 3
      ? appProjects.map((project, index) => ({
          title: project.title,
          description: project.description,
          image: project.image,
          stats: project.stats || [],
          platforms: project.type === "one-page" ? ["Web"] : ["Web", "Mobile"],
          color:
            index === 0
              ? "from-indigo-500 to-indigo-600"
              : index === 1
                ? "from-purple-500 to-purple-600"
                : "from-green-500 to-green-600",
          liveUrl: project.liveUrl,
        }))
      : [
          // Fallback examples based on your actual projects
          {
            title: "Shreeji E-commerce App",
            description: "A comprehensive e-commerce platform with modern interface and secure payment processing.",
            image: "/placeholder.svg?height=600&width=300",
            stats: [
              { icon: "shopping-cart", value: "500+", label: "Products" },
              { icon: "users", value: "200+", label: "Customers" },
              { icon: "trending-up", value: "45%", label: "Sales Increase" },
            ],
            platforms: ["Web", "Mobile"],
            color: "from-indigo-500 to-indigo-600",
            liveUrl: "https://shreeji-appp.vercel.app",
          },
          {
            title: "Nasik Bhel Bhandar App",
            description: "A vibrant food ordering application with real-time order tracking and customer reviews.",
            image: "/placeholder.svg?height=600&width=300",
            stats: [
              { icon: "shopping-cart", value: "60%", label: "Order Increase" },
              { icon: "star", value: "4.9", label: "Customer Rating" },
              { icon: "users", value: "1000+", label: "Happy Customers" },
            ],
            platforms: ["Web", "Mobile"],
            color: "from-purple-500 to-purple-600",
            liveUrl: "https://v0-bhel-bhaata-website.vercel.app",
          },
          {
            title: "Diamond Beauty Booking App",
            description:
              "An elegant beauty service booking application with appointment management and service catalog.",
            image: "/placeholder.svg?height=600&width=300",
            stats: [
              { icon: "calendar", value: "45%", label: "Booking Increase" },
              { icon: "star", value: "4.7", label: "Service Rating" },
              { icon: "users", value: "300+", label: "Regular Clients" },
            ],
            platforms: ["Web", "Mobile"],
            color: "from-green-500 to-green-600",
            liveUrl: "https://dimond.vercel.app",
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
            Explore our successful application development projects that have delivered exceptional results for our
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
                  {study.stats.map((stat, i) => {
                    const IconComponent = iconMap[stat.icon as keyof typeof iconMap]
                    return (
                      <div key={i} className="text-center">
                        <div
                          className={`bg-gradient-to-r ${study.color} text-white p-2 rounded-lg mb-2 flex items-center justify-center`}
                        >
                          {IconComponent && <IconComponent className="h-4 w-4" />}
                        </div>
                        <div className="font-semibold">{stat.value}</div>
                        <div className="text-xs text-foreground/60">{stat.label}</div>
                      </div>
                    )
                  })}
                </div>

                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => window.open(study.liveUrl, "_blank")}
                >
                  View Live Project <ArrowRight className="ml-2 h-4 w-4" />
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
