"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function DesignTools() {
  const tools = [
    {
      name: "Figma",
      description: "Collaborative design and prototyping",
      logo: "/placeholder.svg?height=60&width=60",
      category: "Design",
    },
    {
      name: "Adobe XD",
      description: "User experience design and prototyping",
      logo: "/placeholder.svg?height=60&width=60",
      category: "Design",
    },
    {
      name: "Sketch",
      description: "Digital design toolkit",
      logo: "/placeholder.svg?height=60&width=60",
      category: "Design",
    },
    {
      name: "InVision",
      description: "Digital product design platform",
      logo: "/placeholder.svg?height=60&width=60",
      category: "Prototyping",
    },
    {
      name: "Principle",
      description: "Interactive design and animation",
      logo: "/placeholder.svg?height=60&width=60",
      category: "Animation",
    },
    {
      name: "Miro",
      description: "Collaborative whiteboarding",
      logo: "/placeholder.svg?height=60&width=60",
      category: "Collaboration",
    },
    {
      name: "Hotjar",
      description: "User behavior analytics",
      logo: "/placeholder.svg?height=60&width=60",
      category: "Analytics",
    },
    {
      name: "Maze",
      description: "User testing platform",
      logo: "/placeholder.svg?height=60&width=60",
      category: "Testing",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Design Tools & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We use industry-leading tools and technologies to create exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center hover:shadow-lg transition-all duration-300 border-border/50 hover:border-pink-200 dark:hover:border-pink-800">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-100 to-orange-100 dark:from-pink-900/30 dark:to-orange-900/30 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-pink-500 rounded"></div>
                  </div>
                  <h3 className="font-semibold mb-2">{tool.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{tool.description}</p>
                  <span className="text-xs bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 px-2 py-1 rounded-full">
                    {tool.category}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
