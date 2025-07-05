"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { User, UserRound } from "lucide-react";

const testimonials = [
  {
    name: "Manasi Kadam",
    position: "Marketing Director",
    company: "TechCorp Inc.",
    gender: "female",
    quote:
      "The SEO optimization services provided by Alberow have been transformative for our business. Our organic traffic has increased by 85% in just six months, and we're now ranking on the first page for all of our target keywords.",
  },
  {
    name: "Vicky More",
    position: "E-commerce Manager",
    company: "StyleShop",
    gender: "male",
    quote:
      "We've worked with several SEO agencies in the past, but none have delivered results like Alberow. Their data-driven approach and transparent reporting have made a significant impact on our online visibility and sales.",
  },
  {
    name: "Pritesh Manchekar",
    position: "Manager",
    gender: "male",
    company: "Infininte Focus Solution",
    quote:
      "Alberow's SEO team took the time to understand our business goals and target audience. Their strategic approach to keyword research and content optimization has helped us establish authority in our industry and attract high-quality leads.",
  },
];

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
            Hear from our clients about how our SEO services have helped them
            achieve their business goals.
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
                    <div className="w-20 h-20 rounded-full flex-shrink-0 flex items-center justify-center bg-muted">
                      {testimonial.gender === "female" ? (
                        <UserRound className="w-12 h-12 text-pink-500" aria-label="Female" />
                      ) : (
                        <User className="w-12 h-12 text-blue-500" aria-label="Male" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-lg italic mb-6 text-foreground/80">
                        "{testimonial.quote}"
                      </p>
                      <div>
                        <h4 className="text-lg font-semibold">
                          {testimonial.name}
                        </h4>
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
  );
}