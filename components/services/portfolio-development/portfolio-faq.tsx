"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function PortfolioFaq() {
  const faqs = [
    {
      question: "How long does it take to build a portfolio website?",
      answer:
        "Typically, a portfolio website takes 2-4 weeks to complete, depending on the complexity and number of revisions. We'll provide you with a detailed timeline during our initial consultation.",
    },
    {
      question: "Can I update my portfolio content myself?",
      answer:
        "Yes! We build all our portfolio websites with user-friendly content management systems that allow you to easily add, edit, or remove portfolio pieces, update your bio, and manage your content without any technical knowledge.",
    },
    {
      question: "Will my portfolio work on mobile devices?",
      answer:
        "All our portfolio websites are fully responsive and optimized for mobile devices. Your portfolio will look great and function perfectly on smartphones, tablets, and desktop computers.",
    },
    {
      question: "Do you provide hosting and domain services?",
      answer:
        "We can help you set up hosting and domain registration, or work with your existing hosting provider. We'll guide you through the best options based on your needs and budget.",
    },
    {
      question: "Can you integrate e-commerce functionality?",
      answer:
        "Yes, we can integrate e-commerce features to sell your artwork, photography prints, digital downloads, or services directly from your portfolio website. This is included in our Premium package or available as an add-on.",
    },
    {
      question: "What if I need changes after the website is launched?",
      answer:
        "We provide ongoing support and maintenance services. Minor updates and content changes are included in your support period, and we offer extended maintenance packages for ongoing needs.",
    },
    {
      question: "Do you provide SEO optimization?",
      answer:
        "Yes, all our portfolio websites include basic SEO optimization to help your work get discovered online. Our Professional and Premium packages include advanced SEO features and Google Analytics integration.",
    },
    {
      question: "Can you help migrate my existing portfolio?",
      answer:
        "We can help transfer your existing portfolio content, images, and data to your new website. We'll ensure nothing is lost in the transition and everything is properly organized.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-foreground/70 text-lg">
            Got questions about our portfolio development services? Find answers to the most common questions below.
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
                <AccordionContent className="pb-6 text-foreground/70 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
