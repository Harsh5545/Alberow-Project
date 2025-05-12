"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does it take to develop a website?",
    answer:
      "The timeline for website development varies depending on the complexity and scope of the project. A simple informational website might take 4-6 weeks, while a complex e-commerce platform or custom web application could take 3-6 months. During our initial consultation, we'll provide a more accurate timeline based on your specific requirements.",
  },
  {
    question: "What is the typical process for working with your web development team?",
    answer:
      "Our process typically includes discovery and planning, design and prototyping, development, testing and quality assurance, deployment, and ongoing maintenance and support. We maintain clear communication throughout the project and involve you in key decision-making stages to ensure the final product meets your expectations.",
  },
  {
    question: "Do you provide website maintenance services after launch?",
    answer:
      "Yes, we offer ongoing maintenance and support services to ensure your website remains secure, up-to-date, and performing optimally. Our maintenance packages include regular updates, security monitoring, performance optimization, content updates, and technical support.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely. All websites we develop are fully responsive and optimized for all devices, including smartphones, tablets, and desktops. We follow mobile-first design principles to ensure an excellent user experience across all screen sizes.",
  },
  {
    question: "Can you help with website content creation?",
    answer:
      "Yes, we offer content creation services including copywriting, image selection, and graphic design. Our content team works closely with you to develop compelling content that aligns with your brand voice and effectively communicates your message to your target audience.",
  },
  {
    question: "What technologies do you use for web development?",
    answer:
      "We use a range of modern technologies depending on the project requirements. For frontend development, we typically use React, Next.js, and Tailwind CSS. For backend development, we use Node.js, Express, and various databases like MongoDB, PostgreSQL, or MySQL. We select the most appropriate technology stack based on your specific needs and project goals.",
  },
]

export function WebDevFaq() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Frequently Asked{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Questions
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-foreground/70 max-w-2xl mx-auto"
          >
            Find answers to common questions about our web development services.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-foreground/70">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
