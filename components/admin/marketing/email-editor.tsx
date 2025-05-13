"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Link,
  ImageIcon,
  Heading1,
  Heading2,
  Heading3,
  Undo,
  Redo,
  Send,
  Save,
  Eye,
  Code,
  FileText,
  Users,
  X,
} from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { ScrollArea } from "@/components/ui/scroll-area"

interface EmailEditorProps {
  onSave?: (data: any) => void
  onSend?: (data: any) => void
  initialContent?: string
  initialSubject?: string
}

export const EmailEditor = ({ onSave, onSend, initialContent = "", initialSubject = "" }: EmailEditorProps) => {
  const [activeTab, setActiveTab] = useState("design")
  const [subject, setSubject] = useState(initialSubject)
  const [content, setContent] = useState(initialContent)
  const [htmlContent, setHtmlContent] = useState("")
  const [recipients, setRecipients] = useState<string[]>([])
  const [newRecipient, setNewRecipient] = useState("")
  const [scheduleSend, setScheduleSend] = useState(false)
  const [scheduleDate, setScheduleDate] = useState("")
  const [scheduleTime, setScheduleTime] = useState("")
  const [selectedTemplate, setSelectedTemplate] = useState("blank")
  const [showImageUpload, setShowImageUpload] = useState(false)
  const [imageUrl, setImageUrl] = useState("")
  const [isSending, setIsSending] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const templates = [
    { id: "blank", name: "Blank Template" },
    { id: "newsletter", name: "Newsletter" },
    { id: "announcement", name: "Announcement" },
    { id: "promotion", name: "Promotion" },
    { id: "welcome", name: "Welcome Email" },
  ]

  const handleFormatting = (format: string) => {
    // In a real implementation, this would apply formatting to the selected text
    // For this demo, we'll just append the format tag to the content
    const formatTags: Record<string, string> = {
      bold: "<strong>Bold text</strong>",
      italic: "<em>Italic text</em>",
      underline: "<u>Underlined text</u>",
      h1: "<h1>Heading 1</h1>",
      h2: "<h2>Heading 2</h2>",
      h3: "<h3>Heading 3</h3>",
      ul: "<ul><li>List item</li></ul>",
      ol: "<ol><li>List item</li></ol>",
    }

    if (formatTags[format]) {
      setContent((prev) => prev + formatTags[format])
    }
  }

  const handleAddRecipient = () => {
    if (newRecipient && /^\S+@\S+\.\S+$/.test(newRecipient)) {
      setRecipients((prev) => [...prev, newRecipient])
      setNewRecipient("")
    }
  }

  const handleRemoveRecipient = (email: string) => {
    setRecipients((prev) => prev.filter((r) => r !== email))
  }

  const handleAddImage = () => {
    if (imageUrl) {
      setContent((prev) => prev + `<img src="${imageUrl}" alt="Email image" style="max-width: 100%;" />`)
      setImageUrl("")
      setShowImageUpload(false)
    }
  }

  const handleSave = () => {
    setIsSaving(true)

    // Simulate API call
    setTimeout(() => {
      if (onSave) {
        onSave({
          subject,
          content,
          recipients,
          scheduleSend,
          scheduleDate,
          scheduleTime,
        })
      }
      setIsSaving(false)
    }, 1000)
  }

  const handleSend = () => {
    setIsSending(true)

    // Simulate API call
    setTimeout(() => {
      if (onSend) {
        onSend({
          subject,
          content,
          recipients,
          scheduleSend,
          scheduleDate,
          scheduleTime,
        })
      }
      setIsSending(false)
    }, 1500)
  }

  const handleTemplateChange = (templateId: string) => {
    setSelectedTemplate(templateId)

    // In a real implementation, this would load the template content
    // For this demo, we'll just set some placeholder content based on the template
    const templateContents: Record<string, { subject: string; content: string }> = {
      blank: {
        subject: "",
        content: "",
      },
      newsletter: {
        subject: "Our Monthly Newsletter",
        content: "<h1>Monthly Newsletter</h1><p>Hello,</p><p>Here are the latest updates...</p>",
      },
      announcement: {
        subject: "Important Announcement",
        content: "<h1>Announcement</h1><p>We are excited to announce...</p>",
      },
      promotion: {
        subject: "Special Offer Inside!",
        content: "<h1>Limited Time Offer</h1><p>Take advantage of our special promotion...</p>",
      },
      welcome: {
        subject: "Welcome to Our Community",
        content: "<h1>Welcome!</h1><p>Thank you for joining our community...</p>",
      },
    }

    if (templateContents[templateId]) {
      setSubject(templateContents[templateId].subject)
      setContent(templateContents[templateId].content)
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Select value={selectedTemplate} onValueChange={handleTemplateChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select template" />
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

        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={handleSave} disabled={isSaving}>
            {isSaving ? (
              <>
                <span className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"></span>
                Saving
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Save Draft
              </>
            )}
          </Button>

          <Button
            size="sm"
            onClick={handleSend}
            disabled={isSending || !subject || !content || recipients.length === 0}
          >
            {isSending ? (
              <>
                <span className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"></span>
                Sending
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Email
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="mb-4">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          placeholder="Email subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="mt-1"
        />
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
        <TabsList className="grid grid-cols-4">
          <TabsTrigger value="design">
            <FileText className="h-4 w-4 mr-2" />
            Design
          </TabsTrigger>
          <TabsTrigger value="code">
            <Code className="h-4 w-4 mr-2" />
            HTML
          </TabsTrigger>
          <TabsTrigger value="preview">
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </TabsTrigger>
          <TabsTrigger value="recipients">
            <Users className="h-4 w-4 mr-2" />
            Recipients
          </TabsTrigger>
        </TabsList>

        <TabsContent value="design" className="flex-1 flex flex-col">
          <div className="bg-muted p-1 rounded-md mb-2 flex flex-wrap gap-1">
            <Button variant="ghost" size="icon" onClick={() => handleFormatting("bold")} title="Bold">
              <Bold className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => handleFormatting("italic")} title="Italic">
              <Italic className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => handleFormatting("underline")} title="Underline">
              <Underline className="h-4 w-4" />
            </Button>
            <div className="w-px h-6 bg-border mx-1 self-center"></div>
            <Button variant="ghost" size="icon" onClick={() => handleFormatting("h1")} title="Heading 1">
              <Heading1 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => handleFormatting("h2")} title="Heading 2">
              <Heading2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => handleFormatting("h3")} title="Heading 3">
              <Heading3 className="h-4 w-4" />
            </Button>
            <div className="w-px h-6 bg-border mx-1 self-center"></div>
            <Button variant="ghost" size="icon" title="Align Left">
              <AlignLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" title="Align Center">
              <AlignCenter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" title="Align Right">
              <AlignRight className="h-4 w-4" />
            </Button>
            <div className="w-px h-6 bg-border mx-1 self-center"></div>
            <Button variant="ghost" size="icon" onClick={() => handleFormatting("ul")} title="Bullet List">
              <List className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => handleFormatting("ol")} title="Numbered List">
              <ListOrdered className="h-4 w-4" />
            </Button>
            <div className="w-px h-6 bg-border mx-1 self-center"></div>
            <Button variant="ghost" size="icon" title="Insert Link">
              <Link className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowImageUpload(!showImageUpload)}
              title="Insert Image"
            >
              <ImageIcon className="h-4 w-4" />
            </Button>
            <div className="w-px h-6 bg-border mx-1 self-center"></div>
            <Button variant="ghost" size="icon" title="Undo">
              <Undo className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" title="Redo">
              <Redo className="h-4 w-4" />
            </Button>
          </div>

          {showImageUpload && (
            <Card className="mb-4">
              <CardContent className="p-4">
                <div className="space-y-2">
                  <Label htmlFor="image-url">Image URL</Label>
                  <div className="flex space-x-2">
                    <Input
                      id="image-url"
                      placeholder="https://example.com/image.jpg"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                    />
                    <Button onClick={handleAddImage}>Insert</Button>
                  </div>
                  <p className="text-xs text-muted-foreground">Enter the URL of the image you want to insert</p>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="flex-1 border rounded-md overflow-hidden">
            <Textarea
              placeholder="Compose your email content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="h-full min-h-[300px] resize-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </TabsContent>

        <TabsContent value="code" className="flex-1">
          <div className="flex-1 border rounded-md overflow-hidden">
            <Textarea
              placeholder="<html><body>Your HTML email content here...</body></html>"
              value={htmlContent || content}
              onChange={(e) => setHtmlContent(e.target.value)}
              className="h-full min-h-[300px] resize-none font-mono text-sm"
            />
          </div>
        </TabsContent>

        <TabsContent value="preview" className="flex-1">
          <div className="border rounded-md p-4 h-full overflow-auto bg-white">
            <div className="max-w-2xl mx-auto">
              <div className="mb-4 pb-2 border-b">
                <div className="font-medium">Subject: {subject}</div>
              </div>
              <div
                dangerouslySetInnerHTML={{
                  __html: htmlContent || content || "<p>No content to preview</p>",
                }}
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="recipients" className="flex-1">
          <div className="space-y-4">
            <div>
              <Label htmlFor="add-recipient">Add Recipient</Label>
              <div className="flex space-x-2 mt-1">
                <Input
                  id="add-recipient"
                  placeholder="email@example.com"
                  type="email"
                  value={newRecipient}
                  onChange={(e) => setNewRecipient(e.target.value)}
                />
                <Button onClick={handleAddRecipient}>Add</Button>
              </div>
            </div>

            <div>
              <Label className="mb-2 block">Recipients ({recipients.length})</Label>
              <ScrollArea className="h-[200px] border rounded-md p-2">
                {recipients.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">No recipients added yet</div>
                ) : (
                  <div className="space-y-2">
                    {recipients.map((email) => (
                      <div key={email} className="flex items-center justify-between p-2 border rounded-md">
                        <span>{email}</span>
                        <Button variant="ghost" size="icon" onClick={() => handleRemoveRecipient(email)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </ScrollArea>
            </div>

            <div className="pt-4 border-t">
              <div className="flex items-center space-x-2">
                <Switch id="schedule-send" checked={scheduleSend} onCheckedChange={setScheduleSend} />
                <Label htmlFor="schedule-send">Schedule sending</Label>
              </div>

              {scheduleSend && (
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <Label htmlFor="schedule-date">Date</Label>
                    <Input
                      id="schedule-date"
                      type="date"
                      value={scheduleDate}
                      onChange={(e) => setScheduleDate(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="schedule-time">Time</Label>
                    <Input
                      id="schedule-time"
                      type="time"
                      value={scheduleTime}
                      onChange={(e) => setScheduleTime(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default EmailEditor
