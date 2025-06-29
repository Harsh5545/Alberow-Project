"use client"

import { motion } from "framer-motion"
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiLaravel,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
} from "react-icons/si"

export function WebDevTechnologies() {
  const technologies = [
    { name: "React", icon: <SiReact size={48} className="text-sky-500" />, category: "Frontend" },
    { name: "Next.js", icon: <SiNextdotjs size={48} className="text-black dark:text-white" />, category: "Frontend" },
    { name: "Vue.js", icon: <SiVuedotjs size={48} className="text-green-500" />, category: "Frontend" },
    { name: "Angular", icon: <SiAngular size={48} className="text-red-600" />, category: "Frontend" },
    { name: "Node.js", icon: <SiNodedotjs size={48} className="text-green-700" />, category: "Backend" },
    { name: "Express", icon: <SiExpress size={48} className="text-gray-700 dark:text-gray-200" />, category: "Backend" },
    { name: "Django", icon: <SiDjango size={48} className="text-green-900" />, category: "Backend" },
    { name: "Laravel", icon: <SiLaravel size={48} className="text-red-500" />, category: "Backend" },
    { name: "MongoDB", icon: <SiMongodb size={48} className="text-green-600" />, category: "Database" },
    { name: "PostgreSQL", icon: <SiPostgresql size={48} className="text-blue-700" />, category: "Database" },
    { name: "MySQL", icon: <SiMysql size={48} className="text-blue-500" />, category: "Database" },
    { name: "Firebase", icon: <SiFirebase size={48} className="text-yellow-500" />, category: "Database" },
  ]

  return (
    <section className="py-16 md:py-24 bg-foreground/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            We leverage the latest technologies and frameworks to build modern, scalable, and high-performance web
            applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-background rounded-xl p-4 flex flex-col items-center justify-center border border-foreground/10 hover:border-foreground/20 hover:shadow-lg transition-all"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 mb-3 flex items-center justify-center">
                {tech.icon}
              </div>
              <h3 className="text-sm font-medium">{tech.name}</h3>
              <span className="text-xs text-foreground/60 mt-1">{tech.category}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Our technology stack is constantly evolving to incorporate the best tools and frameworks for your specific
            project needs.
          </p>
        </motion.div>
      </div>
    </section>
  )
}