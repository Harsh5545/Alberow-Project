"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  LinkIcon,
  ImageIcon,
  Heading1,
  Heading2,
  Heading3,
  Send,
  Clock,
  Eye,
  Save,
  X,
  Plus,
  Trash2,
  FileText,
  Users,
  Upload,
} from "lucide-react"

export function EmailEditor() {
  const [activeTab, setActiveTab] = useState("design")
  const [emailSubject, setEmailSubject] = useState("")
  const [previewText, setPreviewText] = useState("")
  const [selectedTemplate, setSelectedTemplate] = useState("blank")
  const [emailContent, setEmailContent] = useState(
    '<div style="font-family: Arial, sans-serif; line-height: 1.6;"><p>Hello,</p><p>Write your email content here.</p><p>Best regards,<br>Your Name</p></div>',
  )
  const [htmlContent, setHtmlContent] = useState("")
  const [showPreview, setShowPreview] = useState(false)
  const [scheduleEmail, setScheduleEmail] = useState(false)
  const [scheduledDate, setScheduledDate] = useState("")
  const [scheduledTime, setScheduledTime] = useState("")
  const [selectedRecipients, setSelectedRecipients] = useState<string[]>([])
  const [showImageUploader, setShowImageUploader] = useState(false)
  const [uploadedImages, setUploadedImages] = useState<string[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)
  const editorRef = useRef<HTMLDivElement>(null)

  const templates = [
    { id: "blank", name: "Blank Template", icon: "file-text" },
    { id: "newsletter", name: "Newsletter", icon: "newspaper" },
    { id: "announcement", name: "Announcement", icon: "megaphone" },
    { id: "welcome", name: "Welcome Email", icon: "hand-wave" },
    { id: "promotion", name: "Promotion", icon: "tag" },
  ]

  const recipientLists = [
    { id: "all-clients", name: "All Clients", count: 124 },
    { id: "active-clients", name: "Active Clients", count: 87 },
    { id: "newsletter", name: "Newsletter Subscribers", count: 1456 },
    { id: "team", name: "Team Members", count: 12 },
  ]

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    // Handle multiple files
    Array.from(files).forEach((file) => {
      // In a real app, you would upload this file to your server
      // and get back a URL to use in the editor
      const fakeUrl = URL.createObjectURL(file)
      setUploadedImages((prev) => [...prev, fakeUrl])
    })
  }

  const insertImageToEditor = (imageUrl: string) => {
    // Insert image at cursor position or append to content
    const imgTag = `<img src="${imageUrl}" alt="Email image" style="max-width: 100%; height: auto; margin: 10px 0;" />`
    setEmailContent((prev) => prev + imgTag)
    setShowImageUploader(false)
  }

  const handleFormatAction = (action: string) => {
    // In a real implementation, this would apply formatting to selected text
    // or insert elements at cursor position
    console.log(`Format action: ${action}`)

    // Simple example of adding formatting
    switch (action) {
      case "bold":
        setEmailContent((prev) => prev + "<strong>Bold text</strong>")
        break
      case "italic":
        setEmailContent((prev) => prev + "<em>Italic text</em>")
        break
      case "underline":
        setEmailContent((prev) => prev + "<u>Underlined text</u>")
        break
      case "h1":
        setEmailContent((prev) => prev + "<h1>Heading 1</h1>")
        break
      case "h2":
        setEmailContent((prev) => prev + "<h2>Heading 2</h2>")
        break
      case "h3":
        setEmailContent((prev) => prev + "<h3>Heading 3</h3>")
        break
      case "alignLeft":
        setEmailContent((prev) => prev + '<div style="text-align: left;">Left aligned text</div>')
        break
      case "alignCenter":
        setEmailContent((prev) => prev + '<div style="text-align: center;">Center aligned text</div>')
        break
      case "alignRight":
        setEmailContent((prev) => prev + '<div style="text-align: right;">Right aligned text</div>')
        break
      case "list":
        setEmailContent((prev) => prev + "<ul><li>List item 1</li><li>List item 2</li></ul>")
        break
      case "orderedList":
        setEmailContent((prev) => prev + "<ol><li>List item 1</li><li>List item 2</li></ol>")
        break
      case "link":
        const url = prompt("Enter URL:", "https://")
        if (url) {
          setEmailContent((prev) => prev + `<a href="${url}" style="color: #0066cc;">${url}</a>`)
        }
        break
      case "image":
        setShowImageUploader(true)
        break
      default:
        break
    }
  }

  const handleSendEmail = () => {
    // In a real app, you would send the email to your backend
    console.log({
      subject: emailSubject,
      previewText,
      content: activeTab === "code" && htmlContent ? htmlContent : emailContent,
      recipients: selectedRecipients,
      scheduled: scheduleEmail,
      scheduledDateTime: scheduleEmail ? `${scheduledDate}T${scheduledTime}` : null,
    })

    alert("Email sent successfully!")
  }

  const handleScheduleEmail = () => {
    if (!scheduledDate || !scheduledTime) {
      alert("Please select both date and time for scheduling")
      return
    }

    // In a real app, you would send the scheduled email to your backend
    console.log({
      subject: emailSubject,
      previewText,
      content: activeTab === "code" && htmlContent ? htmlContent : emailContent,
      recipients: selectedRecipients,
      scheduled: true,
      scheduledDateTime: `${scheduledDate}T${scheduledTime}`,
    })

    alert("Email scheduled successfully!")
  }

  const handleTemplateChange = (templateId: string) => {
    setSelectedTemplate(templateId)

    // In a real app, you would load the template content from your backend
    // This is just a simple example
    switch (templateId) {
      case "newsletter":
        setEmailContent(`
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #f5f5f5; padding: 20px; text-align: center;">
              <h1 style="color: #333;">Monthly Newsletter</h1>
            </div>
            <div style="padding: 20px;">
              <h2 style="color: #444;">Latest Updates</h2>
              <p>Hello,</p>
              <p>Here are our latest updates and news...</p>
              <div style="background-color: #eef; padding: 15px; border-radius: 5px; margin: 15px 0;">
                <h3 style="margin-top: 0;">Featured Article</h3>
                <p>Check out our latest article on web development trends.</p>
                <a href="#" style="color: #0066cc;">Read More →</a>
              </div>
              <p>Best regards,<br>The Team</p>
            </div>
            <div style="background-color: #333; color: white; padding: 15px; text-align: center;">
              <p>© 2023 Your Company. All rights reserved.</p>
              <p><a href="#" style="color: #ddd;">Unsubscribe</a></p>
            </div>
          </div>
        `)
        break
      case "welcome":
        setEmailContent(`
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #4CAF50; padding: 20px; text-align: center;">
              <h1 style="color: white;">Welcome to Our Service!</h1>
            </div>
            <div style="padding: 20px;">
              <p>Hello there,</p>
              <p>We're thrilled to have you on board! Thank you for signing up.</p>
              <p>Here are a few things you can do to get started:</p>
              <ul>
                <li>Complete your profile</li>
                <li>Explore our features</li>
                <li>Connect with other users</li>
              </ul>
              <p>If you have any questions, feel free to reply to this email.</p>
              <p>Best regards,<br>The Team</p>
            </div>
            <div style="background-color: #333; color: white; padding: 15px; text-align: center;">
              <p>© 2023 Your Company. All rights reserved.</p>
            </div>
          </div>
        `)
        break
      case "announcement":
        setEmailContent(`
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #2196F3; padding: 20px; text-align: center;">
              <h1 style="color: white;">Important Announcement</h1>
            </div>
            <div style="padding: 20px;">
              <p>Dear valued customer,</p>
              <p>We have an important announcement to share with you.</p>
              <div style="background-color: #e3f2fd; padding: 15px; border-radius: 5px; margin: 15px 0;">
                <h3 style="margin-top: 0; color: #0d47a1;">New Feature Launch</h3>
                <p>We're excited to announce the launch of our new feature that will help you...</p>
              </div>
              <p>Thank you for your continued support.</p>
              <p>Best regards,<br>The Management Team</p>
            </div>
            <div style="background-color: #333; color: white; padding: 15px; text-align: center;">
              <p>© 2023 Your Company. All rights reserved.</p>
            </div>
          </div>
        `)
        break
      case "promotion":
        setEmailContent(`
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #ff9800; padding: 20px; text-align: center;">
              <h1 style="color: white;">Special Offer Inside!</h1>
            </div>
            <div style="padding: 20px;">
              <p>Hello there,</p>
              <p>We have an exclusive offer just for you!</p>
              <div style="background-color: #fff3e0; padding: 15px; border-radius: 5px; margin: 15px 0; text-align: center;">
                <h2 style="margin-top: 0; color: #e65100;">25% OFF</h2>
                <p>Use code <strong>SPECIAL25</strong> at checkout</p>
                <p>Valid until [Date]</p>
                <a href="#" style="display: inline-block; background-color: #ff9800; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 10px;">Shop Now</a>
              </div>
              <p>Don't miss out on this limited-time offer!</p>
              <p>Best regards,<br>The Sales Team</p>
            </div>
            <div style="background-color: #333; color: white; padding: 15px; text-align: center;">
              <p>© 2023 Your Company. All rights reserved.</p>
              <p><a href="#" style="color: #ddd;">Unsubscribe</a></p>
            </div>
          </div>
        `)
        break
      case "blank":
      default:
        setEmailContent(
          '<div style="font-family: Arial, sans-serif; line-height: 1.6;"><p>Hello,</p><p>Write your email content here.</p><p>Best regards,<br>Your Name</p></div>',
        )
        break
    }
  }

  const toggleRecipient = (recipientId: string) => {
    setSelectedRecipients((prev) =>
      prev.includes(recipientId) ? prev.filter((id) => id !== recipientId) : [...prev, recipientId],
    )
  }

  return (
    <div className="w-full space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => setShowPreview(!showPreview)}>
            <Eye className="h-4 w-4 mr-2" />
            {showPreview ? "Hide Preview" : "Preview"}
          </Button>
          <Button variant="outline" size="sm">
            <Save className="h-4 w-4 mr-2" />
            Save Draft
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => setScheduleEmail(!scheduleEmail)}>
            <Clock className="h-4 w-4 mr-2" />
            {scheduleEmail ? "Cancel Schedule" : "Schedule"}
          </Button>
          <Button size="sm" onClick={handleSendEmail}>
            <Send className="h-4 w-4 mr-2" />
            Send Now
          </Button>
        </div>
      </div>

      {scheduleEmail && (
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-4 items-end">
              <div className="space-y-2 flex-1">
                <Label htmlFor="schedule-date">Date</Label>
                <Input
                  id="schedule-date"
                  type="date"
                  value={scheduledDate}
                  onChange={(e) => setScheduledDate(e.target.value)}
                />
              </div>
              <div className="space-y-2 flex-1">
                <Label htmlFor="schedule-time">Time</Label>
                <Input
                  id="schedule-time"
                  type="time"
                  value={scheduledTime}
                  onChange={(e) => setScheduledTime(e.target.value)}
                />
              </div>
              <Button onClick={handleScheduleEmail}>Schedule Email</Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email-subject">Email Subject</Label>
                <Input
                  id="email-subject"
                  placeholder="Enter email subject"
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="preview-text">Preview Text (optional)</Label>
                <Input
                  id="preview-text"
                  placeholder="Brief summary shown in inbox preview"
                  value={previewText}
                  onChange={(e) => setPreviewText(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-0">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="design">Design</TabsTrigger>
                  <TabsTrigger value="code">HTML</TabsTrigger>
                  <TabsTrigger value="preview">Preview</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent className="p-4">
              <TabsContent value="design" className="mt-0 space-y-4">
                <div className="border-b pb-2 mb-2">
                  <div className="flex flex-wrap gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleFormatAction("bold")}
                      className="h-8 w-8 p-0"
                    >
                      <Bold className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleFormatAction("italic")}
                      className="h-8 w-8 p-0"
                    >
                      <Italic className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleFormatAction("underline")}
                      className="h-8 w-8 p-0"
                    >
                      <Underline className="h-4 w-4" />
                    </Button>
                    <div className="border-r mx-1 h-8"></div>
                    <Button variant="ghost" size="sm" onClick={() => handleFormatAction("h1")} className="h-8 w-8 p-0">
                      <Heading1 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleFormatAction("h2")} className="h-8 w-8 p-0">
                      <Heading2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleFormatAction("h3")} className="h-8 w-8 p-0">
                      <Heading3 className="h-4 w-4" />
                    </Button>
                    <div className="border-r mx-1 h-8"></div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleFormatAction("alignLeft")}
                      className="h-8 w-8 p-0"
                    >
                      <AlignLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleFormatAction("alignCenter")}
                      className="h-8 w-8 p-0"
                    >
                      <AlignCenter className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleFormatAction("alignRight")}
                      className="h-8 w-8 p-0"
                    >
                      <AlignRight className="h-4 w-4" />
                    </Button>
                    <div className="border-r mx-1 h-8"></div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleFormatAction("list")}
                      className="h-8 w-8 p-0"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleFormatAction("orderedList")}
                      className="h-8 w-8 p-0"
                    >
                      <ListOrdered className="h-4 w-4" />
                    </Button>
                    <div className="border-r mx-1 h-8"></div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleFormatAction("link")}
                      className="h-8 w-8 p-0"
                    >
                      <LinkIcon className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleFormatAction("image")}
                      className="h-8 w-8 p-0"
                    >
                      <ImageIcon className="h-4 w-4" />
                    </Button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageUpload}
                      multiple
                    />
                  </div>
                </div>

                {showImageUploader && (
                  <Card className="mb-4">
                    <CardContent className="p-4">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <h3 className="font-medium">Insert Image</h3>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                            onClick={() => setShowImageUploader(false)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                          <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                          <p className="text-sm text-muted-foreground mb-2">
                            Drag and drop an image, or click to browse
                          </p>
                          <Button variant="outline" onClick={() => fileInputRef.current?.click()} className="mt-2">
                            Choose Image
                          </Button>
                        </div>

                        {uploadedImages.length > 0 && (
                          <div>
                            <h4 className="text-sm font-medium mb-2">Uploaded Images</h4>
                            <div className="grid grid-cols-3 gap-2">
                              {uploadedImages.map((img, idx) => (
                                <div key={idx} className="relative group">
                                  <img
                                    src={img || "/placeholder.svg"}
                                    alt={`Uploaded ${idx + 1}`}
                                    className="w-full h-20 object-cover rounded-md cursor-pointer"
                                    onClick={() => insertImageToEditor(img)}
                                  />
                                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex items-center justify-center">
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="text-white"
                                      onClick={() => insertImageToEditor(img)}
                                    >
                                      <Plus className="h-4 w-4 mr-1" />
                                      Insert
                                    </Button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )}

                <div className="min-h-[400px] border rounded-md">
                  <div
                    ref={editorRef}
                    contentEditable
                    className="h-full p-4 focus:outline-none overflow-auto"
                    dangerouslySetInnerHTML={{ __html: emailContent }}
                    onInput={(e) => setEmailContent(e.currentTarget.innerHTML)}
                  />
                </div>
              </TabsContent>

              <TabsContent value="code" className="mt-0">
                <Textarea
                  value={htmlContent || emailContent}
                  onChange={(e) => setHtmlContent(e.target.value)}
                  className="min-h-[500px] font-mono text-sm"
                  placeholder="<html><body>Your HTML email content here...</body></html>"
                />
              </TabsContent>

              <TabsContent value="preview" className="mt-0">
                <div className="border rounded-md p-4 min-h-[500px] bg-white">
                  <div className="max-w-2xl mx-auto">
                    <div className="mb-4 pb-2 border-b">
                      <div className="font-medium">Subject: {emailSubject || "No subject"}</div>
                      {previewText && <div className="text-sm text-muted-foreground">{previewText}</div>}
                    </div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: htmlContent || emailContent || "<p>No content to preview</p>",
                      }}
                    />
                  </div>
                </div>
              </TabsContent>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <Tabs defaultValue="templates">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="templates">Templates</TabsTrigger>
                  <TabsTrigger value="recipients">Recipients</TabsTrigger>
                </TabsList>

                <TabsContent value="templates" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="template-select">Select Template</Label>
                    <Select value={selectedTemplate} onValueChange={handleTemplateChange}>
                      <SelectTrigger id="template-select">
                        <SelectValue placeholder="Choose a template" />
                      </SelectTrigger>
                      <SelectContent>
                        {templates.map((template) => (
                          <SelectItem key={template.id} value={template.id}>
                            {template.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {templates.map((template) => (
                      <div
                        key={template.id}
                        className={`border rounded-md p-2 cursor-pointer hover:border-primary ${
                          selectedTemplate === template.id ? "border-primary bg-primary/10" : ""
                        }`}
                        onClick={() => handleTemplateChange(template.id)}
                      >
                        <div className="aspect-video bg-muted rounded-md mb-2 flex items-center justify-center">
                          <FileText className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <p className="text-xs font-medium truncate">{template.name}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="recipients" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="recipient-list">Select Recipients</Label>
                    <Select>
                      <SelectTrigger id="recipient-list">
                        <SelectValue placeholder="Choose recipients" />
                      </SelectTrigger>
                      <SelectContent>
                        {recipientLists.map((list) => (
                          <SelectItem key={list.id} value={list.id}>
                            {list.name} ({list.count})
                          </SelectItem>
                        ))}
                        <SelectItem value="custom">Custom List</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label>Selected Recipients</Label>
                      <Button variant="ghost" size="sm" className="h-8 text-xs">
                        <Plus className="h-3 w-3 mr-1" />
                        Add
                      </Button>
                    </div>

                    <ScrollArea className="h-[200px] border rounded-md">
                      {recipientLists.map((list) => (
                        <div key={list.id} className="p-2 flex justify-between items-center border-b last:border-b-0">
                          <div className="flex items-center">
                            <div className="flex items-center justify-center w-5 h-5 mr-2">
                              <input
                                type="checkbox"
                                id={`list-${list.id}`}
                                checked={selectedRecipients.includes(list.id)}
                                onChange={() => toggleRecipient(list.id)}
                                className="rounded"
                              />
                            </div>
                            <label htmlFor={`list-${list.id}`} className="flex items-center cursor-pointer">
                              <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                              <span className="text-sm">{list.name}</span>
                              <Badge variant="outline" className="ml-2 text-xs">
                                {list.count}
                              </Badge>
                            </label>
                          </div>
                        </div>
                      ))}
                    </ScrollArea>
                  </div>

                  <div className="pt-2 flex justify-between items-center text-sm text-muted-foreground">
                    <span>
                      Total Recipients:{" "}
                      {selectedRecipients.reduce(
                        (total, id) => total + (recipientLists.find((list) => list.id === id)?.count || 0),
                        0,
                      )}
                    </span>
                    {selectedRecipients.length > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 text-xs"
                        onClick={() => setSelectedRecipients([])}
                      >
                        <Trash2 className="h-3 w-3 mr-1" />
                        Clear All
                      </Button>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <h3 className="font-medium text-base">Email Settings</h3>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Track Opens</p>
                  <p className="text-xs text-muted-foreground">Track when recipients open this email</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Track Clicks</p>
                  <p className="text-xs text-muted-foreground">Track when recipients click links</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Add Unsubscribe Link</p>
                  <p className="text-xs text-muted-foreground">Include option to unsubscribe</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="pt-2">
                <Label htmlFor="sender-name">Sender Name</Label>
                <Input id="sender-name" defaultValue="Alberow Team" className="mt-1" />
              </div>

              <div className="pt-2">
                <Label htmlFor="reply-to">Reply-To Email</Label>
                <Input id="reply-to" defaultValue="support@alberow.com" className="mt-1" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
