"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Upload, FileText, Users, Tag, Globe } from "lucide-react"

export default function NewProjectPage() {
  const [projectTitle, setProjectTitle] = useState("")
  const [projectDescription, setProjectDescription] = useState("")
  const [projectCategory, setProjectCategory] = useState("")
  const [clientName, setClientName] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [budget, setBudget] = useState("")
  const [status, setStatus] = useState("planning")
  const [teamMembers, setTeamMembers] = useState<string[]>([])
  const [featuredProject, setFeaturedProject] = useState(false)
  const [publishToPortfolio, setPublishToPortfolio] = useState(false)
  const [mainImageUrl, setMainImageUrl] = useState("")
  const [galleryImages, setGalleryImages] = useState<string[]>([])
  const [projectUrl, setProjectUrl] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [currentTag, setCurrentTag] = useState("")

  const handleAddTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()])
      setCurrentTag("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleMainImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // In a real app, you would upload this file to your server
      // and get back a URL to use
      const fakeUrl = URL.createObjectURL(file)
      setMainImageUrl(fakeUrl)
    }
  }

  const handleGalleryImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      // In a real app, you would upload these files to your server
      // and get back URLs to use
      const newImages = Array.from(files).map((file) => URL.createObjectURL(file))
      setGalleryImages([...galleryImages, ...newImages])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this data to your backend
    console.log({
      projectTitle,
      projectDescription,
      projectCategory,
      clientName,
      startDate,
      endDate,
      budget,
      status,
      teamMembers,
      featuredProject,
      publishToPortfolio,
      mainImageUrl,
      galleryImages,
      projectUrl,
      tags,
    })

    alert("Project created successfully!")
    // Redirect to projects list or clear form
  }

  return (
    <div className="container mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Create New Project</h1>
        <Button variant="outline" onClick={() => window.history.back()}>
          Cancel
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="details">Project Details</TabsTrigger>
            <TabsTrigger value="team">Team & Client</TabsTrigger>
            <TabsTrigger value="media">Media & Gallery</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Enter the core details about your project</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="project-title">Project Title *</Label>
                  <Input
                    id="project-title"
                    placeholder="Enter project title"
                    value={projectTitle}
                    onChange={(e) => setProjectTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project-description">Project Description *</Label>
                  <Textarea
                    id="project-description"
                    placeholder="Describe the project"
                    rows={5}
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="project-category">Category *</Label>
                    <Select value={projectCategory} onValueChange={setProjectCategory} required>
                      <SelectTrigger id="project-category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="mobile-app">Mobile App</SelectItem>
                        <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                        <SelectItem value="branding">Branding</SelectItem>
                        <SelectItem value="seo">SEO Optimization</SelectItem>
                        <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="project-status">Status *</Label>
                    <Select value={status} onValueChange={setStatus} required>
                      <SelectTrigger id="project-status">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="planning">Planning</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="review">Under Review</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="on-hold">On Hold</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="start-date">Start Date</Label>
                    <Input
                      id="start-date"
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="end-date">End Date</Label>
                    <Input id="end-date" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project-budget">Budget</Label>
                  <Input
                    id="project-budget"
                    placeholder="Enter project budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project-url">Project URL</Label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                      <Globe className="h-4 w-4" />
                    </span>
                    <Input
                      id="project-url"
                      placeholder="https://example.com"
                      className="rounded-l-none"
                      value={projectUrl}
                      onChange={(e) => setProjectUrl(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project-tags">Tags</Label>
                  <div className="flex">
                    <Input
                      id="project-tags"
                      placeholder="Add a tag"
                      value={currentTag}
                      onChange={(e) => setCurrentTag(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault()
                          handleAddTag()
                        }
                      }}
                      className="rounded-r-none"
                    />
                    <Button type="button" onClick={handleAddTag} className="rounded-l-none">
                      Add
                    </Button>
                  </div>

                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {tags.map((tag, index) => (
                        <div
                          key={index}
                          className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full flex items-center text-sm"
                        >
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                          <button
                            type="button"
                            onClick={() => handleRemoveTag(tag)}
                            className="ml-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Team & Client Information</CardTitle>
                <CardDescription>Assign team members and client details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="client-name">Client Name</Label>
                  <Select value={clientName} onValueChange={setClientName}>
                    <SelectTrigger id="client-name">
                      <SelectValue placeholder="Select client" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="acme-corp">Acme Corporation</SelectItem>
                      <SelectItem value="globex">Globex Industries</SelectItem>
                      <SelectItem value="initech">Initech</SelectItem>
                      <SelectItem value="massive-dynamic">Massive Dynamic</SelectItem>
                      <SelectItem value="new-client">+ Add New Client</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {clientName === "new-client" && (
                  <div className="space-y-2 p-4 border rounded-md">
                    <Label htmlFor="new-client-name">New Client Name</Label>
                    <Input id="new-client-name" placeholder="Enter client name" />

                    <Label htmlFor="client-email" className="mt-4">
                      Client Email
                    </Label>
                    <Input id="client-email" type="email" placeholder="client@example.com" />

                    <Label htmlFor="client-phone" className="mt-4">
                      Client Phone
                    </Label>
                    <Input id="client-phone" placeholder="+1 (555) 123-4567" />

                    <Button type="button" className="mt-4">
                      Save Client
                    </Button>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="team-members">Team Members</Label>
                  <Select>
                    <SelectTrigger id="team-members">
                      <SelectValue placeholder="Assign team members" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="john-doe">John Doe (Developer)</SelectItem>
                      <SelectItem value="jane-smith">Jane Smith (Designer)</SelectItem>
                      <SelectItem value="robert-johnson">Robert Johnson (Project Manager)</SelectItem>
                      <SelectItem value="emily-davis">Emily Davis (SEO Specialist)</SelectItem>
                      <SelectItem value="michael-brown">Michael Brown (Content Writer)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {teamMembers.length > 0 && (
                  <div className="space-y-2 mt-4">
                    <Label>Assigned Team Members</Label>
                    <div className="flex flex-wrap gap-2">
                      {teamMembers.map((member, index) => (
                        <div
                          key={index}
                          className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full flex items-center text-sm"
                        >
                          <Users className="h-3 w-3 mr-1" />
                          {member}
                          <button
                            type="button"
                            onClick={() => setTeamMembers(teamMembers.filter((m) => m !== member))}
                            className="ml-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-2 mt-4">
                  <Button type="button" variant="outline">
                    <Users className="h-4 w-4 mr-2" />
                    Invite New Team Member
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="media" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Media</CardTitle>
                <CardDescription>Upload images and media files for your project</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="main-image">Main Project Image</Label>
                  <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                    {mainImageUrl ? (
                      <div className="relative w-full">
                        <img
                          src={mainImageUrl || "/placeholder.svg"}
                          alt="Project main"
                          className="w-full h-48 object-cover rounded-md"
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => setMainImageUrl("")}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <>
                        <Upload className="h-10 w-10 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500 mb-2">Drag and drop an image, or click to browse</p>
                        <Input
                          id="main-image"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleMainImageUpload}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => document.getElementById("main-image")?.click()}
                        >
                          Upload Image
                        </Button>
                      </>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gallery-images">Project Gallery</Label>
                  <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                    <Upload className="h-10 w-10 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500 mb-2">Upload multiple images for your project gallery</p>
                    <Input
                      id="gallery-images"
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={handleGalleryImageUpload}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById("gallery-images")?.click()}
                    >
                      Upload Images
                    </Button>
                  </div>

                  {galleryImages.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                      {galleryImages.map((image, index) => (
                        <div key={index} className="relative">
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-24 object-cover rounded-md"
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            className="absolute top-1 right-1 h-6 w-6 p-0"
                            onClick={() => setGalleryImages(galleryImages.filter((_, i) => i !== index))}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project-files">Project Files</Label>
                  <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
                    <FileText className="h-10 w-10 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500 mb-2">Upload project documents and files</p>
                    <Input id="project-files" type="file" multiple className="hidden" />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById("project-files")?.click()}
                    >
                      Upload Files
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Settings</CardTitle>
                <CardDescription>Configure additional project settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Featured Project</h3>
                    <p className="text-sm text-gray-500">Display this project prominently on your homepage</p>
                  </div>
                  <Switch checked={featuredProject} onCheckedChange={setFeaturedProject} />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Publish to Portfolio</h3>
                    <p className="text-sm text-gray-500">Make this project visible in your public portfolio</p>
                  </div>
                  <Switch checked={publishToPortfolio} onCheckedChange={setPublishToPortfolio} />
                </div>

                <div className="pt-4 border-t">
                  <h3 className="font-medium mb-2">SEO Settings</h3>

                  <div className="space-y-2">
                    <Label htmlFor="seo-title">SEO Title</Label>
                    <Input id="seo-title" placeholder="SEO optimized title" />
                  </div>

                  <div className="space-y-2 mt-4">
                    <Label htmlFor="seo-description">SEO Description</Label>
                    <Textarea id="seo-description" placeholder="SEO meta description" rows={3} />
                  </div>

                  <div className="space-y-2 mt-4">
                    <Label htmlFor="seo-keywords">SEO Keywords</Label>
                    <Input id="seo-keywords" placeholder="Comma-separated keywords" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end space-x-2 mt-6">
          <Button type="button" variant="outline" onClick={() => window.history.back()}>
            Cancel
          </Button>
          <Button type="submit">Create Project</Button>
        </div>
      </form>
    </div>
  )
}

// Missing component for the X icon
const X = () => (
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
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
)
