"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MessageSquare } from "lucide-react"

export function ContactHero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-tr from-purple-500/5 via-background to-pink-500/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left max-w-2xl mb-10 md:mb-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}\
              transitionopacity: 0, y: 20}}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center px-3 py-1 rounded-full border border-purple-200 dark:border-purple-800 bg-purple-100/50 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300 text-sm mb-6"
            >
              Get in Touch
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Let's{" "}
              <span className="relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  Start a Conversation
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-foreground/70 text-lg"
            >
              Have a project in mind or want to learn more about our services? We'd love to hear from you! Fill out the
              form below and our team will get back to you as soon as possible.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: <Mail className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                  label: "Email Us",
                  delay: 0.7,
                },
                {
                  icon: <Phone className="h-8 w-8 text-pink-600 dark:text-pink-400" />,
                  label: "Call Us",
                  delay: 0.8,
                },
                {
                  icon: <MessageSquare className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                  label: "Chat With Us",
                  delay: 0.9,
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8 text-pink-600 dark:text-pink-400"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  label: "Visit Us",
                  delay: 1.0,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item.delay }}
                  className="bg-background p-6 rounded-lg border border-border/50 flex flex-col items-center text-center hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="mb-3"
                  >
                    {item.icon}
                  </motion.div>
                  <p className="font-medium">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
