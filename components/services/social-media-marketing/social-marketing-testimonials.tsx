"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "The social media marketing team at Alberow completely transformed our online presence. Our engagement rates have skyrocketed, and we're seeing real business results from our social channels.",
    author: "Sarah Johnson",
    position: "Marketing Director, FashionHub",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "Working with Alberow for our social media marketing has been a game-changer. Their strategic approach and creative content have helped us stand out in a crowded market.",
    author: "Michael Chen",
    position: "CEO, TechStart",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "The ROI we've seen from Alberow's social media marketing services has exceeded our expectations. They truly understand our audience and how to connect with them effectively.",
    author: "Emily Rodriguez",
    position: "Owner, LocalEats Restaurant Chain",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export function SocialMarketingTestimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            What Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Clients Say
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our social media marketing
            services.
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
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700"
            >
              <Quote className="h-10 w-10 text-purple-200 dark:text-purple-900 mb-4" />
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
