"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechCorp Inc.",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The SEO optimization services provided by Alberow have been transformative for our business. Our organic traffic has increased by 85% in just six months, and we're now ranking on the first page for all of our target keywords.",
  },
  {
    name: "Michael Brown",
    position: "E-commerce Manager",
    company: "StyleShop",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "We've worked with several SEO agencies in the past, but none have delivered results like Alberow. Their data-driven approach and transparent reporting have made a significant impact on our online visibility and sales.",
  },
  {
    name: "Emily Wilson",
    position: "CEO",
    company: "Wilson Consulting",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Alberow's SEO team took the time to understand our business goals and target audience. Their strategic approach to keyword research and content optimization has helped us establish authority in our industry and attract high-quality leads.",
  },
]

export function SeoTestimonials() {
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
            Client{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Success Stories
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-foreground/70 max-w-2xl mx-auto"
          >
            Hear from our clients about how our SEO services have helped them achieve their business goals.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            spaceBetween={30}
            slidesPerView={1}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-background p-8 md:p-12 rounded-lg shadow-sm border border-border/50">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-lg italic mb-6 text-foreground/80">"{testimonial.quote}"</p>
                      <div>
                        <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                        <p className="text-foreground/70">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
