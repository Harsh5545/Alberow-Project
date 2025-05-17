"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Bell, Users, Clock, Send } from "lucide-react"

export default function NotificationsPage() {
  const [notificationTitle, setNotificationTitle] = useState("")
  const [notificationBody, setNotificationBody] = useState("")
  const [notificationType, setNotificationType] = useState("info")
  const [targetAudience, setTargetAudience] = useState("all")
  const [scheduledTime, setScheduledTime] = useState("")
  const [sendImmediately, setSendImmediately] = useState(true)
  const [includeImage, setIncludeImage] = useState(false)
  const [imageUrl, setImageUrl] = useState("")
  const [actionUrl, setActionUrl] = useState("")
  const [actionText, setActionText] = useState("")

  const [sentNotifications, setSentNotifications] = useState([
    {
      id: 1,
      title: "New Feature Available",
      body: "Check out our new dashboard features!",
      sentAt: "2023-05-15T10:30:00",
      recipients: 245,
      opened: 178,
      type: "info",
    },
    {
      id: 2,
      title: "Maintenance Notice",
      body: "The system will be down for maintenance on Saturday from 2-4 AM.",
      sentAt: "2023-05-10T14:15:00",
      recipients: 312,
      opened: 289,
      type: "warning",
    },
    {
      id: 3,
      title: "Your Project Was Updated",
      body: "The project 'Website Redesign' has been updated with new files.",
      sentAt: "2023-05-08T09:45:00",
      recipients: 3,
      opened: 3,
      type: "success",
    },
  ])

  const [scheduledNotifications, setScheduledNotifications] = useState([
    {
      id: 1,
      title: "Upcoming Webinar",
      body: "Join us for a webinar on modern web development techniques.",
      scheduledFor: "2023-05-20T15:00:00",
      recipients: "All Clients",
      type: "info",
    },
    {
      id: 2,
      title: "Invoice Due Reminder",
      body: "Your invoice #INV-2023-05 is due in 3 days.",
      scheduledFor: "2023-05-18T09:00:00",
      recipients: "Client: Acme Corp",
      type: "warning",
    },
  ])

  const handleSendNotification = () => {
    alert("Notification sent successfully!")
    // In a real app, you would send the notification to your backend
    // and then update the sentNotifications state
  }

  const handleScheduleNotification = () => {
    alert("Notification scheduled successfully!")
    // In a real app, you would send the scheduled notification to your backend
    // and then update the scheduledNotifications state
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // In a real app, you would upload this file to your server
      // and get back a URL to use
      const fakeUrl = URL.createObjectURL(file)
      setImageUrl(fakeUrl)
    }
  }

  return (
    <div className="container mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
      </div>

      <Tabs defaultValue="create" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="create">Create</TabsTrigger>
          <TabsTrigger value="sent">Sent</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="create" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Create Browser Notification</CardTitle>
              <CardDescription>Send push notifications to your clients' browsers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="notification-title">Notification Title</Label>
                <Input
                  id="notification-title"
                  placeholder="Enter notification title"
                  value={notificationTitle}
                  onChange={(e) => setNotificationTitle(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notification-body">Notification Body</Label>
                <Textarea
                  id="notification-body"
                  placeholder="Enter notification message"
                  rows={3}
                  value={notificationBody}
                  onChange={(e) => setNotificationBody(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="notification-type">Notification Type</Label>
                  <Select value={notificationType} onValueChange={setNotificationType}>
                    <SelectTrigger id="notification-type">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="info">Information</SelectItem>
                      <SelectItem value="success">Success</SelectItem>
                      <SelectItem value="warning">Warning</SelectItem>
                      <SelectItem value="error">Error</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="target-audience">Target Audience</Label>
                  <Select value={targetAudience} onValueChange={setTargetAudience}>
                    <SelectTrigger id="target-audience">
                      <SelectValue placeholder="Select audience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Users</SelectItem>
                      <SelectItem value="clients">All Clients</SelectItem>
                      <SelectItem value="team">Team Members</SelectItem>
                      <SelectItem value="specific">Specific Users</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {targetAudience === "specific" && (
                <div className="space-y-2">
                  <Label htmlFor="specific-users">Select Specific Users</Label>
                  <Select>
                    <SelectTrigger id="specific-users">
                      <SelectValue placeholder="Select users" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="user1">John Doe (Client)</SelectItem>
                      <SelectItem value="user2">Jane Smith (Client)</SelectItem>
                      <SelectItem value="user3">Robert Johnson (Team)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="flex items-center space-x-2">
                <Switch id="send-immediately" checked={sendImmediately} onCheckedChange={setSendImmediately} />
                <Label htmlFor="send-immediately">Send Immediately</Label>
              </div>

              {!sendImmediately && (
                <div className="space-y-2">
                  <Label htmlFor="scheduled-time">Schedule Time</Label>
                  <Input
                    id="scheduled-time"
                    type="datetime-local"
                    value={scheduledTime}
                    onChange={(e) => setScheduledTime(e.target.value)}
                  />
                </div>
              )}

              <div className="flex items-center space-x-2">
                <Switch id="include-image" checked={includeImage} onCheckedChange={setIncludeImage} />
                <Label htmlFor="include-image">Include Image</Label>
              </div>

              {includeImage && (
                <div className="space-y-2">
                  <Label htmlFor="image-upload">Upload Image</Label>
                  <Input id="image-upload" type="file" accept="image/*" onChange={handleFileChange} />
                  {imageUrl && (
                    <div className="mt-2">
                      <img
                        src={imageUrl || "/placeholder.svg"}
                        alt="Notification preview"
                        className="max-h-40 rounded-md"
                      />
                    </div>
                  )}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="action-url">Action URL (Optional)</Label>
                <Input
                  id="action-url"
                  placeholder="https://example.com/page"
                  value={actionUrl}
                  onChange={(e) => setActionUrl(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="action-text">Action Button Text (Optional)</Label>
                <Input
                  id="action-text"
                  placeholder="View Details"
                  value={actionText}
                  onChange={(e) => setActionText(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Preview</Button>
              <div className="space-x-2">
                {!sendImmediately && (
                  <Button onClick={handleScheduleNotification}>
                    <Clock className="mr-2 h-4 w-4" />
                    Schedule
                  </Button>
                )}
                <Button onClick={handleSendNotification}>
                  <Send className="mr-2 h-4 w-4" />
                  {sendImmediately ? "Send Now" : "Save & Send Later"}
                </Button>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notification Preview</CardTitle>
              <CardDescription>This is how your notification will appear to users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg p-4 max-w-md mx-auto bg-white shadow-md">
                <div className="flex items-start">
                  <div
                    className={`p-2 rounded-full mr-3 ${
                      notificationType === "info"
                        ? "bg-blue-100 text-blue-600"
                        : notificationType === "success"
                          ? "bg-green-100 text-green-600"
                          : notificationType === "warning"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-red-100 text-red-600"
                    }`}
                  >
                    <Bell className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{notificationTitle || "Notification Title"}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {notificationBody || "This is where your notification message will appear."}
                    </p>
                    {actionUrl && actionText && (
                      <button className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-800">
                        {actionText}
                      </button>
                    )}
                  </div>
                </div>
                {includeImage && imageUrl && (
                  <div className="mt-3">
                    <img src={imageUrl || "/placeholder.svg"} alt="Notification" className="w-full rounded-md" />
                  </div>
                )}
                <div className="mt-3 text-xs text-gray-500 flex justify-between">
                  <span>Just now</span>
                  <button className="text-gray-400 hover:text-gray-600">
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sent" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Sent Notifications</CardTitle>
              <CardDescription>View all notifications that have been sent</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sentNotifications.map((notification) => (
                  <div key={notification.id} className="border rounded-lg p-4 flex items-start">
                    <div
                      className={`p-2 rounded-full mr-3 ${
                        notification.type === "info"
                          ? "bg-blue-100 text-blue-600"
                          : notification.type === "success"
                            ? "bg-green-100 text-green-600"
                            : notification.type === "warning"
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-red-100 text-red-600"
                      }`}
                    >
                      <Bell className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">{notification.title}</h3>
                        <span className="text-xs text-gray-500">{new Date(notification.sentAt).toLocaleString()}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{notification.body}</p>
                      <div className="mt-2 flex items-center text-xs text-gray-500 space-x-4">
                        <span className="flex items-center">
                          <Users className="h-3 w-3 mr-1" />
                          {notification.recipients} recipients
                        </span>
                        <span className="flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          {notification.opened} opened
                        </span>
                        <span className="flex items-center">
                          <BarChart2 className="h-3 w-3 mr-1" />
                          {Math.round((notification.opened / notification.recipients) * 100)}% open rate
                        </span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scheduled" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Scheduled Notifications</CardTitle>
              <CardDescription>View and manage scheduled notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scheduledNotifications.map((notification) => (
                  <div key={notification.id} className="border rounded-lg p-4 flex items-start">
                    <div
                      className={`p-2 rounded-full mr-3 ${
                        notification.type === "info"
                          ? "bg-blue-100 text-blue-600"
                          : notification.type === "success"
                            ? "bg-green-100 text-green-600"
                            : notification.type === "warning"
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-red-100 text-red-600"
                      }`}
                    >
                      <Clock className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">{notification.title}</h3>
                        <span className="text-xs text-gray-500">
                          Scheduled for: {new Date(notification.scheduledFor).toLocaleString()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{notification.body}</p>
                      <div className="mt-2 flex items-center text-xs text-gray-500">
                        <Users className="h-3 w-3 mr-1" />
                        {notification.recipients}
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure how notifications are delivered to your users</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Browser Push Notifications</h3>
                    <p className="text-sm text-gray-500">Allow sending push notifications to users' browsers</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Email Notifications</h3>
                    <p className="text-sm text-gray-500">Send email copies of important notifications</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">SMS Notifications</h3>
                    <p className="text-sm text-gray-500">Send SMS for critical notifications</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">In-App Notifications</h3>
                    <p className="text-sm text-gray-500">Show notifications within the application</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="pt-4 border-t">
                  <h3 className="font-medium mb-2">Default Notification Settings</h3>

                  <div className="space-y-2">
                    <Label htmlFor="default-title">Default Title Prefix</Label>
                    <Input id="default-title" defaultValue="Alberow - " />
                  </div>

                  <div className="space-y-2 mt-4">
                    <Label htmlFor="notification-lifetime">Notification Lifetime (seconds)</Label>
                    <Input id="notification-lifetime" type="number" defaultValue={10} min={1} />
                    <p className="text-xs text-gray-500">
                      How long notifications will be displayed before automatically dismissing
                    </p>
                  </div>

                  <div className="space-y-2 mt-4">
                    <Label htmlFor="notification-sound">Notification Sound</Label>
                    <Select defaultValue="default">
                      <SelectTrigger id="notification-sound">
                        <SelectValue placeholder="Select sound" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default">Default</SelectItem>
                        <SelectItem value="chime">Chime</SelectItem>
                        <SelectItem value="bell">Bell</SelectItem>
                        <SelectItem value="none">None (Silent)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Missing components for the preview
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

const Eye = () => (
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
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
)

const BarChart2 = () => (
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
    <line x1="18" y1="20" x2="18" y2="10"></line>
    <line x1="12" y1="20" x2="12" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="14"></line>
  </svg>
)

const MoreVertical = () => (
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
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="12" cy="5" r="1"></circle>
    <circle cx="12" cy="19" r="1"></circle>
  </svg>
)

const Edit = () => (
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
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
)

const Trash2 = () => (
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
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
    <line x1="10" y1="11" x2="10" y2="17"></line>
    <line x1="14" y1="11" x2="14" y2="17"></line>
  </svg>
)
