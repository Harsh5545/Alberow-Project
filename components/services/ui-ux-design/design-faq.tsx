"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function DesignFAQ() {
  const faqs = [
    {
      question: "What's the difference between UI and UX design?",
      answer:
        "UI (User Interface) design focuses on the visual elements and interactive components of a product, while UX (User Experience) design encompasses the entire user journey and how users interact with the product. Both work together to create effective digital experiences.",
    },
    {
      question: "How long does a typical UI/UX design project take?",
      answer:
        "Project timelines vary based on complexity and scope. A simple website redesign might take 4-6 weeks, while a complex web application could take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you conduct user research and testing?",
      answer:
        "Yes, user research and testing are integral parts of our design process. We conduct user interviews, surveys, usability testing, and A/B testing to ensure our designs meet user needs and business objectives.",
    },
    {
      question: "Can you work with our existing brand guidelines?",
      answer:
        "We can work within your existing brand guidelines and style guides. If you don't have established guidelines, we can help create them as part of the design process.",
    },
    {
      question: "Do you provide design systems and style guides?",
      answer:
        "Yes, we create comprehensive design systems and style guides that include color palettes, typography, components, and usage guidelines. This ensures consistency across all your digital touchpoints.",
    },
    {
      question: "Will my design work on mobile devices?",
      answer:
        "All our designs are responsive and mobile-first. We ensure your design works perfectly across all devices and screen sizes, providing an optimal user experience everywhere.",
    },
    {
      question: "Do you offer ongoing design support?",
      answer:
        "Yes, we provide ongoing design support and maintenance services. This includes design updates, new feature designs, and continuous optimization based on user feedback and analytics.",
    },
    {
      question: "How do you measure design success?",
      answer:
        "We measure success through various metrics including user engagement, conversion rates, task completion rates, user satisfaction scores, and business KPIs. We set up analytics and tracking to monitor these metrics post-launch.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Got questions about our UI/UX design services? Find answers to common questions below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
