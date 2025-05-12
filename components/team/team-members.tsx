"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"

const teamMembers = [
  {
    name: "Harsh Kajale",
    role: "Founder & Marketing Developer",
    bio: "With a passion for digital marketing and development, Harsh leads our team with innovative strategies and creative vision.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Harsh Jaiswal",
    role: "Frontend Developer",
    bio: "Harsh specializes in creating beautiful, responsive user interfaces using the latest frontend technologies and frameworks.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Bhavish",
    role: "Full Stack Developer",
    bio: "As our full-stack expert, Bhavish bridges the gap between frontend and backend, ensuring seamless integration and functionality.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Yashvardhan Jaiswal",
    role: "Backend Developer",
    bio: "Yashvardhan builds robust, scalable backend systems that power our applications with efficiency and reliability.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Divansaheb Sangale",
    role: "Offline Marketing Specialist",
    bio: "Divansaheb brings traditional marketing expertise to complement our digital strategies, creating comprehensive marketing solutions.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
]

export function TeamMembers() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="overflow-hidden h-full border border-border/50 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <div className="flex space-x-3">
                      <a
                        href={member.social.linkedin}
                        className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
                      >
                        <Linkedin className="h-5 w-5 text-white" />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
                      >
                        <Twitter className="h-5 w-5 text-white" />
                      </a>
                      <a
                        href={member.social.github}
                        className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
                      >
                        <Github className="h-5 w-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">{member.role}</p>
                  <p className="text-foreground/70">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
