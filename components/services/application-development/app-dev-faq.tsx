"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function ApplicationDevFaq() {
  const faqs = [
    {
      question: "How long does it take to develop a mobile app?",
      answer:
        "The timeline for mobile app development varies depending on the complexity and scope of the project. A simple app might take 2-3 months, while more complex applications could take 4-8 months or more. During our initial consultation, we'll provide a more accurate timeline based on your specific requirements.",
    },
    {
      question: "Do you develop for both iOS and Android?",
      answer:
        "Yes, we develop native applications for both iOS and Android platforms. We also offer cross-platform development using frameworks like React Native or Flutter, which can be a cost-effective solution for businesses looking to launch on both platforms simultaneously.",
    },
    {
      question: "How much does it cost to develop a mobile app?",
      answer:
        "The cost of developing a mobile app depends on various factors, including complexity, features, platforms, and design requirements. Basic apps typically start around $15,000, while more complex applications can range from $30,000 to $100,000+. We provide detailed proposals with transparent pricing after our initial consultation.",
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer:
        "Yes, we offer ongoing maintenance and support packages to ensure your application remains secure, up-to-date, and performing optimally. Our support packages include regular updates, bug fixes, performance optimization, and technical support.",
    },
    {
      question: "Can you help with app store submission?",
      answer:
        "Yes, we handle the entire app store submission process for both the Apple App Store and Google Play Store. We ensure your application meets all the requirements and guidelines for a smooth approval process.",
    },
    {
      question: "Do you sign NDAs?",
      answer:
        "Yes, we're happy to sign Non-Disclosure Agreements (NDAs) before discussing your app idea in detail. We understand the importance of confidentiality when developing innovative applications.",
    },
    {
      question: "What technologies do you use for app development?",
      answer:
        "For native iOS development, we use Swift. For native Android development, we use Kotlin. For cross-platform development, we use React Native and Flutter. For backend development, we use Node.js, Python, and Java, depending on the project requirements. We stay up-to-date with the latest technologies and best practices to ensure your application is built with the most appropriate and future-proof technologies.",
    },
    {
      question: "Can you integrate my app with existing systems?",
      answer:
        "Yes, we specialize in integrating mobile applications with existing systems and third-party services. Whether you need to connect to your CRM, ERP, payment gateways, or other business systems, we can develop secure and efficient integrations to streamline your operations and enhance your application's functionality.",
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
            Have questions about our application development services? Find answers to commonly asked questions below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-foreground/70">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
