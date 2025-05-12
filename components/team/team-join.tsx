"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Palette, BarChart } from "lucide-react"

export function TeamJoin() {
  const openPositions = [
    {
      title: "Senior Frontend Developer",
      department: "Development",
      location: "Remote",
      type: "Full-time",
      icon: <Code className="h-5 w-5 text-purple-600 dark:text-purple-400" />,
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      icon: <Palette className="h-5 w-5 text-pink-600 dark:text-pink-400" />,
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      icon: <BarChart className="h-5 w-5 text-purple-600 dark:text-purple-400" />,
    },
  ]

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
            Join Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-foreground/70 max-w-2xl mx-auto"
          >
            We're always looking for talented individuals to join our team. Check out our open positions below.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-6 rounded-lg border border-border/50 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-4 bg-muted p-2 rounded-full">{position.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold">{position.title}</h3>
                      <p className="text-foreground/70">
                        {position.department} • {position.location} • {position.type}
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" className="hidden md:flex">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <Button variant="outline" className="w-full mt-4 md:hidden">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-foreground/70 mb-4">Don't see a position that matches your skills?</p>
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
