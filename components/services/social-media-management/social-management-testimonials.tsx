"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "Alberow's social media management has transformed how we connect with our audience. Their consistent posting and engagement strategies have built a loyal community around our brand.",
    author: "Rebecca Thompson",
    position: "Marketing Director, StyleBoutique",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "The team at Alberow handles our social media with professionalism and creativity. They've saved us countless hours while delivering better results than we could achieve in-house.",
    author: "Daniel Wilson",
    position: "CEO, TechSolutions",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "Since partnering with Alberow for our social media management, we've seen a dramatic increase in engagement and conversions. Their team truly understands our brand voice.",
    author: "Jennifer Martinez",
    position: "Founder, Wellness Collective",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export function SocialManagementTestimonials() {
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
              Clients Say
            </span>
          </h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our social media management
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
              <Quote className="h-10 w-10 text-blue-200 dark:text-blue-900 mb-4" />
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
