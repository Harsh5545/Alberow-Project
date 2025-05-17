"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { X } from "lucide-react"

interface ProjectDialogProps {
  isOpen: boolean
  onClose: () => void
  project?: {
    id: string
    title: string
    description: string
    imageUrl: string
    category: string
    client: string
    completionDate: string
  }
  mode: "view" | "edit" | "create"
}

export function ProjectDialog({ isOpen, onClose, project, mode }: ProjectDialogProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    category: "",
    client: "",
    completionDate: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)

  // Prevent body scroll when dialog is open and fix the page shift issue
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow
    const originalPadding = window.getComputedStyle(document.body).paddingRight
    const originalWidth = document.body.style.width

    if (isOpen) {
      // Calculate scrollbar width
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

      // Store original body width to prevent layout shift
      const bodyWidth = document.body.clientWidth

      document.body.style.overflow = "hidden"
      document.body.style.paddingRight = `${scrollbarWidth}px`
      document.body.style.width = `${bodyWidth}px`

      // Set initial form data if in edit or view mode
      if (project && (mode === "edit" || mode === "view")) {
        setFormData({
          title: project.title,
          description: project.description,
          imageUrl: project.imageUrl,
          category: project.category,
          client: project.client,
          completionDate: project.completionDate,
        })
      }
    }

    return () => {
      // Use requestAnimationFrame to prevent flickering during transition
      requestAnimationFrame(() => {
        document.body.style.overflow = originalStyle
        document.body.style.paddingRight = originalPadding
        document.body.style.width = originalWidth || ""
      })
    }
  }, [isOpen, project, mode])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // API call would go here
      console.log("Submitting project data:", formData)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Close dialog after successful submission
      handleClose()
    } catch (error) {
      console.error("Error submitting project:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    // Use requestAnimationFrame to prevent layout shift
    requestAnimationFrame(() => {
      onClose()
    })
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // In a real app, you would upload the file to a server
      // and get back a URL. For now, we'll create a local URL.
      const localUrl = URL.createObjectURL(file)
      setFormData((prev) => ({ ...prev, imageUrl: localUrl }))
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent
        ref={dialogRef}
        className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto"
        onInteractOutside={(e) => e.preventDefault()} // Prevent closing on outside click during submission
      >
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle>
              {mode === "create" ? "Create New Project" : mode === "edit" ? "Edit Project" : "Project Details"}
            </DialogTitle>
            <Button variant="ghost" size="icon" onClick={handleClose} className="h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <DialogDescription>
            {mode === "create"
              ? "Add a new project to your portfolio"
              : mode === "edit"
                ? "Make changes to your project"
                : "View project details"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Project Title</Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                disabled={mode === "view" || isSubmitting}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                disabled={mode === "view" || isSubmitting}
                rows={4}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                disabled={mode === "view" || isSubmitting}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="client">Client</Label>
              <Input
                id="client"
                name="client"
                value={formData.client}
                onChange={handleChange}
                disabled={mode === "view" || isSubmitting}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="completionDate">Completion Date</Label>
              <Input
                id="completionDate"
                name="completionDate"
                type="date"
                value={formData.completionDate}
                onChange={handleChange}
                disabled={mode === "view" || isSubmitting}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">Project Image</Label>
              {mode !== "view" && (
                <Input id="image" type="file" accept="image/*" onChange={handleImageUpload} disabled={isSubmitting} />
              )}
              {formData.imageUrl && (
                <div className="mt-2 relative rounded-md overflow-hidden">
                  <img
                    src={formData.imageUrl || "/placeholder.svg"}
                    alt="Project preview"
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}
            </div>
          </div>

          {mode !== "view" && (
            <DialogFooter>
              <Button type="button" variant="outline" onClick={handleClose} disabled={isSubmitting}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"></span>
                    {mode === "create" ? "Creating..." : "Saving..."}
                  </>
                ) : mode === "create" ? (
                  "Create Project"
                ) : (
                  "Save Changes"
                )}
              </Button>
            </DialogFooter>
          )}
        </form>
      </DialogContent>
    </Dialog>
  )
}
