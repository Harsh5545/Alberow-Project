"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: "e-commerce-platform",
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/placeholder.svg?height=400&width=600",
    description: "A fully responsive e-commerce platform with advanced filtering and payment integration.",
    client: "StyleShop",
    year: "2023",
    technologies: ["Next.js", "Tailwind CSS", "Stripe", "Supabase"],
    challenge:
      "The client needed a modern e-commerce platform that could handle a large inventory with complex filtering options while maintaining fast performance and a seamless checkout experience.",
    solution:
      "We developed a custom e-commerce solution using Next.js for optimal performance and SEO. We implemented advanced filtering with instant search capabilities, integrated Stripe for secure payments, and used Supabase for inventory management.",
    results:
      "The new platform resulted in a 40% increase in online sales, a 25% reduction in cart abandonment, and significantly improved page load times.",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "corporate-website-redesign",
    title: "Corporate Website Redesign",
    category: "UI/UX Design",
    image: "/placeholder.svg?height=400&width=600",
    description: "Complete redesign of a corporate website with improved user experience and SEO optimization.",
    client: "TechCorp Inc.",
    year: "2023",
    technologies: ["React", "Framer Motion", "Node.js", "MongoDB"],
    challenge:
      "The client's existing website was outdated, difficult to navigate, and performing poorly in search engine rankings. They needed a modern redesign that would improve user experience and SEO performance.",
    solution:
      "We conducted a comprehensive UX audit and developed a new information architecture. The redesign focused on clear navigation, responsive design, and optimized content structure. We implemented SEO best practices throughout the development process.",
    results:
      "The redesigned website saw a 60% increase in organic traffic, 45% improvement in page engagement metrics, and a 30% increase in lead generation.",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "social-media-dashboard",
    title: "Social Media Dashboard",
    category: "Application",
    image: "/placeholder.svg?height=400&width=600",
    description: "A comprehensive dashboard for managing and analyzing social media performance across platforms.",
    client: "MarketingPro",
    year: "2022",
    technologies: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    challenge:
      "The client needed a centralized dashboard to monitor and analyze social media performance across multiple platforms, with the ability to schedule posts and generate comprehensive reports.",
    solution:
      "We developed a custom dashboard application that integrates with various social media APIs. The dashboard features real-time analytics, post scheduling capabilities, and automated reporting. We used D3.js for interactive data visualizations.",
    results:
      "The dashboard helped the client reduce time spent on social media management by 65% and improved campaign performance by providing actionable insights from the analytics.",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "restaurant-booking-system",
    title: "Restaurant Booking System",
    category: "Web Development",
    image: "/placeholder.svg?height=400&width=600",
    description: "An online booking system for restaurants with real-time availability and payment processing.",
    client: "Fine Dining Group",
    year: "2022",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    challenge:
      "The client needed a user-friendly booking system that could handle complex reservation logic, including table availability, special requests, and deposit payments.",
    solution:
      "We developed a custom booking system with real-time availability checking, integrated with the restaurant's existing POS system. The solution includes deposit payment processing, automated confirmation emails, and an admin dashboard for managing reservations.",
    results:
      "The booking system reduced no-shows by 80% through the deposit system and increased online bookings by 50%, while significantly reducing the workload on staff.",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    category: "UI/UX Design",
    image: "/placeholder.svg?height=400&width=600",
    description: "A creative portfolio website for a photographer showcasing their work with a unique layout.",
    client: "Alex Johnson Photography",
    year: "2022",
    technologies: ["Next.js", "GSAP", "Sanity CMS", "Cloudinary"],
    challenge:
      "The client needed a visually striking portfolio website that would showcase their photography work while providing an immersive and unique browsing experience for visitors.",
    solution:
      "We designed a custom portfolio with innovative scrolling animations and transitions using GSAP. The website features a masonry gallery layout, category filtering, and integration with Sanity CMS for easy content management.",
    results:
      "The new portfolio website increased the client's inquiries by 75% and has been featured in several web design showcases for its innovative approach.",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  {
    id: "fitness-tracking-app",
    title: "Fitness Tracking App",
    category: "Application",
    image: "/placeholder.svg?height=400&width=600",
    description: "A mobile application for tracking fitness activities, nutrition, and progress over time.",
    client: "FitLife",
    year: "2021",
    technologies: ["React Native", "Firebase", "Node.js", "Express"],
    challenge:
      "The client wanted to create a comprehensive fitness tracking app that would allow users to track workouts, nutrition, and progress while providing personalized recommendations.",
    solution:
      "We developed a cross-platform mobile app using React Native with a clean, intuitive interface. The app features workout tracking, nutrition logging, progress photos, goal setting, and personalized recommendations based on user data.",
    results:
      "The app has achieved over 50,000 downloads with a 4.7-star rating, and users report an average of 30% better adherence to their fitness goals.",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
]

const categories = ["All", "Web Development", "UI/UX Design", "Application"]

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  const openProjectModal = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    setIsModalOpen(true)
  }

  const nextImage = () => {
    if (!selectedProject) return
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length)
  }

  const prevImage = () => {
    if (!selectedProject) return
    setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length)
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" : ""}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                layout
              >
                <Card
                  className="overflow-hidden h-full border border-border/50 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300 group cursor-pointer"
                  onClick={() => openProjectModal(project)}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded">
                      {project.category}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-xs bg-muted px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs bg-muted px-2 py-1 rounded">+{project.technologies.length - 3}</span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-3xl p-0 overflow-hidden bg-background rounded-lg w-[90vw] max-h-[85vh] overflow-y-auto">
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-64 md:h-80 bg-black">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                        alt={`${selectedProject.title} image ${currentImageIndex + 1}`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90 rounded-full"
                        onClick={(e) => {
                          e.stopPropagation()
                          prevImage()
                        }}
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90 rounded-full"
                        onClick={(e) => {
                          e.stopPropagation()
                          nextImage()
                        }}
                      >
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </>
                  )}

                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm hover:bg-background/90 rounded-full"
                    onClick={() => setIsModalOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>

                  {/* Image counter */}
                  {selectedProject.images.length > 1 && (
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
                    <DialogDescription className="text-foreground/70">
                      {selectedProject.category} • {selectedProject.client} • {selectedProject.year}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="mt-6 space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Challenge</h3>
                      <p className="text-foreground/70">{selectedProject.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Solution</h3>
                      <p className="text-foreground/70">{selectedProject.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Results</h3>
                      <p className="text-foreground/70">{selectedProject.results}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, i) => (
                          <span key={i} className="text-sm bg-muted px-3 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
