"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const showcaseProjects = [
  {
    category: "E-commerce",
    projects: [
      {
        title: "Fashion Boutique",
        description: "A modern e-commerce platform with advanced filtering and seamless checkout experience.",
        image: "/placeholder.svg?height=600&width=800",
        features: ["Product catalog", "Advanced filtering", "Secure checkout", "Customer accounts"],
      },
      {
        title: "Organic Food Store",
        description: "An e-commerce website for organic food products with subscription options.",
        image: "/placeholder.svg?height=600&width=800",
        features: ["Subscription model", "Recipe integration", "Inventory management", "Delivery scheduling"],
      },
    ],
  },
  {
    category: "Corporate",
    projects: [
      {
        title: "Financial Services",
        description: "A professional website for a financial services company with secure client portal.",
        image: "/placeholder.svg?height=600&width=800",
        features: ["Client dashboard", "Document sharing", "Appointment booking", "Financial calculators"],
      },
      {
        title: "Law Firm",
        description: "A sophisticated website for a law firm with case studies and attorney profiles.",
        image: "/placeholder.svg?height=600&width=800",
        features: ["Attorney profiles", "Practice areas", "Case studies", "Contact forms"],
      },
    ],
  },
  {
    category: "SaaS",
    projects: [
      {
        title: "Project Management Tool",
        description: "A comprehensive project management application with real-time collaboration features.",
        image: "/placeholder.svg?height=600&width=800",
        features: ["Task management", "Team collaboration", "File sharing", "Progress tracking"],
      },
      {
        title: "Marketing Analytics Platform",
        description: "A data visualization platform for marketing analytics and campaign management.",
        image: "/placeholder.svg?height=600&width=800",
        features: ["Interactive dashboards", "Data visualization", "Campaign tracking", "Automated reporting"],
      },
    ],
  },
]

export function WebDevShowcase() {
  const [activeTab, setActiveTab] = useState("E-commerce")

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Portfolio
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-foreground/70 max-w-2xl mx-auto"
          >
            Explore our web development projects across various industries and see how we've helped businesses achieve
            their goals.
          </motion.p>
        </div>

        <Tabs defaultValue="E-commerce" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList>
              {showcaseProjects.map((category) => (
                <TabsTrigger key={category.category} value={category.category}>
                  {category.category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {showcaseProjects.map((category) => (
            <TabsContent key={category.category} value={category.category}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-background rounded-lg overflow-hidden border border-border/50 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <div className="relative h-64">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-foreground/70 mb-4">{project.description}</p>
                      <div className="mb-6">
                        <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-sm text-foreground/70">
                              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mr-2"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Button variant="outline" className="w-full">
                        View Case Study
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
