"use client"

import { useState } from "react"
import { X, ExternalLink, Github, Linkedin, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

export interface ProjectDetails {
  id: string
  title: string
  description: string
  image: string
  category: string
  technologies: string[]
  features?: string[]
  challenges?: string[]
  results?: string[]
  clientName?: string
  clientFeedback?: string
  projectUrl?: string
  githubUrl?: string
  socialLinks?: {
    linkedin?: string
    twitter?: string
    instagram?: string
  }
  completionDate?: string
}

interface ProjectDialogProps {
  project: ProjectDetails | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const ProjectDialog = ({ project, open, onOpenChange }: ProjectDialogProps) => {
  const [activeTab, setActiveTab] = useState("overview")

  if (!project) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl">{project.title}</DialogTitle>
            <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)} className="absolute right-4 top-4">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <DialogDescription>
            {project.category} • {project.completionDate || "Ongoing"}
          </DialogDescription>
        </DialogHeader>

        <div className="relative rounded-md overflow-hidden aspect-video mb-4">
          <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
        </div>

        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="tech">Technology</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Project Description</h3>
              <p className="text-muted-foreground">{project.description}</p>
            </div>

            {project.clientName && (
              <div>
                <h3 className="text-lg font-medium mb-2">Client</h3>
                <p className="text-muted-foreground">{project.clientName}</p>
              </div>
            )}

            <div>
              <h3 className="text-lg font-medium mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="details" className="space-y-4">
            {project.features && project.features.length > 0 && (
              <div>
                <h3 className="text-lg font-medium mb-2">Key Features</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {project.features.map((feature, index) => (
                    <li key={index} className="text-muted-foreground">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.challenges && project.challenges.length > 0 && (
              <div>
                <h3 className="text-lg font-medium mb-2">Challenges</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="text-muted-foreground">
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </TabsContent>

          <TabsContent value="tech" className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Technology Stack</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.technologies.map((tech) => (
                  <div key={tech} className="p-3 border rounded-md flex items-center justify-center text-center">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="results" className="space-y-4">
            {project.results && project.results.length > 0 && (
              <div>
                <h3 className="text-lg font-medium mb-2">Project Outcomes</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {project.results.map((result, index) => (
                    <li key={index} className="text-muted-foreground">
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.clientFeedback && (
              <div>
                <h3 className="text-lg font-medium mb-2">Client Feedback</h3>
                <blockquote className="border-l-4 pl-4 italic text-muted-foreground">
                  "{project.clientFeedback}"
                </blockquote>
              </div>
            )}
          </TabsContent>
        </Tabs>

        <DialogFooter
          className={cn("flex-col sm:flex-row gap-2 sm:gap-0", "sm:justify-between items-center pt-4 border-t")}
        >
          <div className="flex items-center space-x-2">
            {project.socialLinks?.linkedin && (
              <a
                href={project.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            )}
            {project.socialLinks?.twitter && (
              <a
                href={project.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            )}
            {project.socialLinks?.instagram && (
              <a
                href={project.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-muted"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            )}
          </div>

          <div className="flex space-x-2">
            {project.githubUrl && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </a>
              </Button>
            )}

            {project.projectUrl && (
              <Button size="sm" asChild>
                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Project
                </a>
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ProjectDialog
