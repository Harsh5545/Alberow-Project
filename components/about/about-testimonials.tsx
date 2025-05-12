"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Alberow transformed our online presence completely. Their team's expertise in web development and SEO has significantly increased our traffic and conversions.",
    author: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Working with Alberow was a game-changer for our business. Their attention to detail and creative approach to problem-solving exceeded our expectations.",
    author: "Michael Chen",
    position: "Marketing Director, GrowthHub",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The team at Alberow delivered our e-commerce platform on time and within budget. The results have been outstanding, with a 40% increase in online sales.",
    author: "Emily Rodriguez",
    position: "Founder, StyleShop",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export function AboutTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

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
            What Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Clients Say
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-foreground/70 max-w-2xl mx-auto"
          >
            Don't just take our word for it. Here's what our clients have to say about working with Alberow.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border border-border/50 bg-background">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="absolute -top-2 -left-2 w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full -z-10" />
                        <Image
                          src={testimonials[currentIndex].image || "/placeholder.svg"}
                          alt={testimonials[currentIndex].author}
                          width={80}
                          height={80}
                          className="rounded-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <Quote className="h-10 w-10 text-purple-200 dark:text-purple-800 mb-4" />
                      <p className="text-xl mb-6 italic text-foreground/90">{testimonials[currentIndex].quote}</p>
                      <div>
                        <h4 className="font-semibold text-lg">{testimonials[currentIndex].author}</h4>
                        <p className="text-foreground/70">{testimonials[currentIndex].position}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
