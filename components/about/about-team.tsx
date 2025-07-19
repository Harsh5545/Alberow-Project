"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Instagram, User } from "lucide-react"

const teamMembers = [
  {
    name: "Harsh Kajale",
    role: "Founder & Marketing Developer",
    bio: "With a passion for digital marketing and development, Harsh leads our team with innovative strategies and creative vision.",
    social: {
      linkedin: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile",
      instagram: "https://www.instagram.com/smartearnonline/",
      github: "https://github.com/Harsh5545",
    },
  },
 
  {
    name: "Bhavish",
    role: "Full Stack Developer",
    bio: "As our full-stack expert, Bhavish bridges the gap between frontend and backend, ensuring seamless integration and functionality.",
    social: {
      linkedin: "https://www.linkedin.com/in/bhavishmuneshwar/",
      instagram: "https://www.instagram.com/bhavish_muneshwar/",
      github: "https://github.com/Bhavishm009",
    },
  },
  {
    name: "Divansaheb Sangale",
    role: "Offline Marketing Specialist",
    bio: "Divansaheb brings traditional marketing expertise to complement our digital strategies, creating comprehensive marketing solutions.",
    social: {
      instagram: "https://www.instagram.com/divansangale/",
    },
  },
  {
  name: "Umair Sheikh",
  role: "Full Stack Developer",
  bio: "Umair specializes in both frontend and backend development, building scalable web applications and ensuring seamless user experiences from design to deployment.",
  social: {
    instagram: "https://instagram.com/umair.sheikh_",
    github: "#",
  },
},
{
  name: "Siddhesh Thorat",
  role: "Offline Marketing & Operations",
  bio: "Siddhesh manages offline marketing strategies and supports day-to-day operations, ensuring seamless coordination between teams and building strong brand presence beyond digital platforms.",
  social: {
    linkedin: "https://www.linkedin.com/in/siddhesh-thorat-4b8675326/",
    instagram: "https://www.instagram.com/_siddhesh.26/",
  },
},
  
  {
    name: "Manasi Kadam",
    role: "Digital Marketing Specialist",
    bio: "Manasi excels in digital marketing strategies, social media management, and creating engaging content that drives brand awareness and growth.",
    social: {
      linkedin: "https://www.linkedin.com/in/k-manasi/",
      instagram: "https://www.instagram.com/manasikadam_/",
    },
  },
   {
    name: "Harsh Jaiswal",
    role: "Frontend Developer",
    bio: "Harsh specializes in creating beautiful, responsive user interfaces using the latest frontend technologies and frameworks.",
    social: {
      linkedin: "https://www.linkedin.com/in/harsh-jaisw12/",
      github: "https://github.com/Harsh-Jaisw",
    },
  },
  {
    name: "Yashvardhan Jaiswal",
    role: "Backend Developer",
    bio: "Yashvardhan builds robust, scalable backend systems that power our applications with efficiency and reliability.",
    social: {
      instagram: "https://www.instagram.com/funkyheart_/",
      linkedin: "https://www.linkedin.com/in/yashwardhan-jaiswal-13866a235/",
      github: "https://github.com/yash13565",
    },
  },
]

export function AboutTeam() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h5
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Meet Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Team</span>
          </motion.h5>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-foreground/70 max-w-2xl mx-auto"
          >
            Our talented team of developers and marketers are dedicated to creating exceptional digital experiences.
          </motion.p>
        </div>

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
              <Card className="h-full border border-border/50 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300 group hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xl font-semibold mb-1">{member.name}</p>
                      <p className="text-purple-600 dark:text-purple-400 font-medium">{member.role}</p>
                    </div>
                  </div>

                  <p className="text-foreground/70 mb-6 leading-relaxed">{member.bio}</p>

                  <div className="flex space-x-3 pt-4 border-t border-border/50">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-muted hover:bg-purple-100 dark:hover:bg-purple-900/20 transition-colors group"
                      >
                        <Linkedin className="h-4 w-4 text-muted-foreground group-hover:text-purple-600" />
                      </a>
                    )}
                    {member.social.instagram && (
                      <a
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-muted hover:bg-purple-100 dark:hover:bg-purple-900/20 transition-colors group"
                      >
                        <Instagram className="h-4 w-4 text-muted-foreground group-hover:text-purple-600" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-muted hover:bg-purple-100 dark:hover:bg-purple-900/20 transition-colors group"
                      >
                        <Github className="h-4 w-4 text-muted-foreground group-hover:text-purple-600" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
