"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export function OnePageTestimonials() {
  const testimonials = [
    {
      quote:
        "Alberow created a stunning one-page website for my restaurant that perfectly captures our brand and has significantly increased our online reservations.",
      author: "David Chen",
      position: "Owner, Fusion Kitchen",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      quote:
        "As a freelance designer, I needed a portfolio that would showcase my work effectively. Alberow delivered a beautiful one-page website that has helped me attract high-quality clients.",
      author: "Jessica Williams",
      position: "Graphic Designer",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      quote:
        "Our product launch page created by Alberow exceeded all expectations. The design was perfect, and the pre-order functionality worked flawlessly, resulting in a successful launch.",
      author: "Mark Thompson",
      position: "Marketing Director, TechGadget",
      avatar: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-teal-500/5 via-background to-emerald-500/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Client Success Stories</h2>
          <p className="text-foreground/70 text-lg">
            Don't just take our word for it. Here's what our clients have to say about our one-page website services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-xl p-6 shadow-sm border border-border/50 relative"
            >
              <div className="absolute -top-5 -left-5 bg-gradient-to-r from-teal-600 to-emerald-600 text-white p-2 rounded-full">
                <Quote className="h-6 w-6" />
              </div>

              <div className="flex items-center mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              <p className="text-foreground/80 italic mb-6">"{testimonial.quote}"</p>

              <div className="flex items-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-foreground/60">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
