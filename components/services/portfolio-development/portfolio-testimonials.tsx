"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function PortfolioTestimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Graphic Designer",
      content:
        "Alberow created an amazing portfolio that perfectly showcases my design work. The attention to detail and user experience is outstanding. I've received more client inquiries since launching!",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Rajesh Kumar",
      role: "Photographer",
      content:
        "The portfolio website they built for me is exactly what I envisioned. The gallery features are incredible and my photos look stunning. Highly recommend their services!",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Anita Desai",
      role: "Digital Artist",
      content:
        "Professional, creative, and responsive team. They understood my artistic vision and translated it into a beautiful, functional portfolio. The project was completed on time and within budget.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Vikram Singh",
      role: "Web Developer",
      content:
        "As a developer myself, I was impressed by the clean code and performance optimization. The portfolio showcases my projects perfectly and the admin panel makes updates easy.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-foreground/70 text-lg">
            Don't just take our word for it. Here's what creatives and professionals say about their portfolio websites.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-amber-500 mr-3" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-foreground/80 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-foreground/60 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
