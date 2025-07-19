"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Users,
  Star,
  TrendingUp,
  Calendar,
  ShoppingCart,
} from "lucide-react"
import { projects, categories, type Project } from "@/lib/projects-data"

const iconMap = {
  users: Users,
  star: Star,
  "trending-up": TrendingUp,
  calendar: Calendar,
  "shopping-cart": ShoppingCart,
}

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  const openProjectModal = (project: Project) => {
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

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "twitter":
        return Twitter
      case "instagram":
        return Instagram
      case "linkedin":
        return Linkedin
      case "facebook":
        return Facebook
      default:
        return null
    }
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
                    <p className="text-xl font-semibold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </p>
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
          <DialogContent className="max-w-4xl p-0 overflow-hidden hide-scrollbar bg-background rounded-lg w-[95vw] max-h-[90vh] overflow-y-auto">
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
                    className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm hover:bg-background/90 rounded-full z-10"
                    onClick={() => setIsModalOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>

                  {selectedProject.images.length > 1 && (
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  )}
                </div>

                <div className="p-4 md:p-6 hide-scrollbar">
                  <DialogHeader>
                    <DialogTitle className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                      {selectedProject.title}
                    </DialogTitle>
                    <DialogDescription className="text-foreground/70">
                      {selectedProject.category} • {selectedProject.client} • {selectedProject.year}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="mt-6 space-y-6">
                    {/* Stats Section */}
                    {selectedProject.stats && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="grid grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg"
                      >
                        {selectedProject.stats.map((stat, i) => {
                          const IconComponent = iconMap[stat.icon as keyof typeof iconMap]
                          return (
                            <div key={i} className="text-center">
                              <div className="flex items-center justify-center mb-2">
                                {IconComponent && <IconComponent className="h-5 w-5 text-purple-600" />}
                              </div>
                              <div className="font-bold text-lg">{stat.value}</div>
                              <div className="text-xs text-foreground/60">{stat.label}</div>
                            </div>
                          )
                        })}
                      </motion.div>
                    )}

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <p className="text-lg font-semibold mb-2">Challenge</p>
                      <p className="text-foreground/70">{selectedProject.challenge}</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <p className="text-lg font-semibold mb-2">Solution</p>
                      <p className="text-foreground/70">{selectedProject.solution}</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <p className="text-lg font-semibold mb-2">Results</p>
                      <p className="text-foreground/70">{selectedProject.results}</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <p className="text-lg font-semibold mb-2">Key Features</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.features.map((feature, i) => (
                          <motion.span
                            key={i}
                            className="text-sm bg-muted px-3 py-1 rounded"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + i * 0.05 }}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(147, 51, 234, 0.1)" }}
                          >
                            {feature}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <p className="text-lg font-semibold mb-2">Technologies Used</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            className="text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + i * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex flex-col sm:flex-row gap-4 pt-2"
                    >
                      <Button
                        className="bg-gradient-to-r from-purple-600 to-pink-600 flex-1"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(selectedProject.liveUrl, "_blank")
                        }}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> View Live Project
                      </Button>

                      {selectedProject.githubUrl && (
                        <Button
                          variant="outline"
                          className="flex-1 bg-transparent"
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open(selectedProject.githubUrl, "_blank")
                          }}
                        >
                          <Github className="mr-2 h-4 w-4" /> View Code
                        </Button>
                      )}
                    </motion.div>

                    {selectedProject.socialLinks && Object.keys(selectedProject.socialLinks).length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <p className="text-lg font-semibold mb-2">Client Social Media</p>
                        <div className="flex gap-2">
                          {Object.entries(selectedProject.socialLinks).map(([platform, url]) => {
                            const IconComponent = getSocialIcon(platform)
                            if (!IconComponent || !url) return null

                            return (
                              <Button
                                key={platform}
                                variant="ghost"
                                size="icon"
                                className="rounded-full hover:bg-purple-100 hover:text-purple-600 dark:hover:bg-purple-900/20"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  window.open(url, "_blank")
                                }}
                              >
                                <IconComponent className="h-5 w-5" />
                              </Button>
                            )
                          })}
                        </div>
                      </motion.div>
                    )}
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
