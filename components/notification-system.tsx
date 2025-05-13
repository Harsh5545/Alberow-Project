"use client"

import { useState, useEffect } from "react"
import { Bell, X, Check, Info, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export type NotificationType = "info" | "success" | "warning" | "error"

export interface Notification {
  id: string
  title: string
  message: string
  type: NotificationType
  timestamp: Date
  read: boolean
  link?: string
}

interface NotificationSystemProps {
  className?: string
}

export const NotificationSystem = ({ className }: NotificationSystemProps) => {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [showNotifications, setShowNotifications] = useState(false)
  const [notificationCount, setNotificationCount] = useState(0)
  const [notificationsEnabled, setNotificationsEnabled] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("notificationsEnabled") === "true"
    }
    return false
  })

  // Load notifications from localStorage on component mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedNotifications = localStorage.getItem("notifications")
      if (savedNotifications) {
        const parsedNotifications = JSON.parse(savedNotifications).map((n: any) => ({
          ...n,
          timestamp: new Date(n.timestamp),
        }))
        setNotifications(parsedNotifications)
        setNotificationCount(parsedNotifications.filter((n: Notification) => !n.read).length)
      }

      // Check if we should show the notification popup based on last close time
      const lastClosedTime = localStorage.getItem("notificationLastClosed")
      if (lastClosedTime) {
        const hoursSinceLastClosed = (Date.now() - Number.parseInt(lastClosedTime)) / (1000 * 60 * 60)
        if (hoursSinceLastClosed < 30) {
          // Don't show if less than 30 hours have passed
          return
        }
      }
    }
  }, [])

  // Save notifications to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== "undefined" && notifications.length > 0) {
      localStorage.setItem("notifications", JSON.stringify(notifications))
      setNotificationCount(notifications.filter((n) => !n.read).length)
    }
  }, [notifications])

  // Save notification preferences
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("notificationsEnabled", notificationsEnabled.toString())
    }
  }, [notificationsEnabled])

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications)
    if (!showNotifications) {
      // Mark all as read when opening
      setNotifications(notifications.map((n) => ({ ...n, read: true })))
      setNotificationCount(0)
    }
  }

  const handleNotificationToggle = (checked: boolean) => {
    setNotificationsEnabled(checked)

    // If enabling notifications, request browser permission
    if (checked && typeof window !== "undefined" && "Notification" in window) {
      Notification.requestPermission()
    }
  }

  const closeNotifications = () => {
    setShowNotifications(false)
    // Store the time when notifications were closed
    if (typeof window !== "undefined") {
      localStorage.setItem("notificationLastClosed", Date.now().toString())
    }
  }

  const removeNotification = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id))
  }

  const clearAllNotifications = () => {
    setNotifications([])
    setNotificationCount(0)
  }

  // Function to add a new notification (can be called from other components)
  const addNotification = (notification: Omit<Notification, "id" | "timestamp" | "read">) => {
    const newNotification: Notification = {
      ...notification,
      id: Date.now().toString(),
      timestamp: new Date(),
      read: false,
    }

    setNotifications((prev) => [newNotification, ...prev])
    setNotificationCount((prev) => prev + 1)

    // Show browser notification if enabled
    if (
      notificationsEnabled &&
      typeof window !== "undefined" &&
      "Notification" in window &&
      Notification.permission === "granted"
    ) {
      new Notification(notification.title, {
        body: notification.message,
      })
    }
  }

  // Expose the addNotification function to the window object
  useEffect(() => {
    if (typeof window !== "undefined") {
      ;(window as any).addNotification = addNotification
    }

    return () => {
      if (typeof window !== "undefined") {
        delete (window as any).addNotification
      }
    }
  }, [])

  const getNotificationIcon = (type: NotificationType) => {
    switch (type) {
      case "success":
        return <Check className="h-4 w-4 text-green-500" />
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-amber-500" />
      case "error":
        return <X className="h-4 w-4 text-red-500" />
      case "info":
      default:
        return <Info className="h-4 w-4 text-blue-500" />
    }
  }

  const getNotificationColor = (type: NotificationType) => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-200"
      case "warning":
        return "bg-amber-50 border-amber-200"
      case "error":
        return "bg-red-50 border-red-200"
      case "info":
      default:
        return "bg-blue-50 border-blue-200"
    }
  }

  return (
    <div className={cn("relative", className)}>
      <Button variant="ghost" size="icon" className="relative" onClick={toggleNotifications} aria-label="Notifications">
        <Bell className="h-5 w-5" />
        {notificationCount > 0 && (
          <Badge
            className="absolute -top-1 -right-1 px-1.5 py-0.5 min-w-[1.25rem] h-5 flex items-center justify-center"
            variant="destructive"
          >
            {notificationCount}
          </Badge>
        )}
      </Button>

      {showNotifications && (
        <Card className="absolute right-0 mt-2 w-80 sm:w-96 max-h-[80vh] overflow-hidden z-50 shadow-lg">
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <div>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Stay updated with the latest news</CardDescription>
            </div>
            <Button variant="ghost" size="icon" onClick={closeNotifications}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>

          <div className="px-4 py-2 border-t border-b flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Switch
                id="notifications-toggle"
                checked={notificationsEnabled}
                onCheckedChange={handleNotificationToggle}
              />
              <Label htmlFor="notifications-toggle">Enable notifications</Label>
            </div>

            {notifications.length > 0 && (
              <Button variant="ghost" size="sm" onClick={clearAllNotifications} className="text-xs">
                Clear all
              </Button>
            )}
          </div>

          <div className="overflow-y-auto max-h-[50vh]">
            {notifications.length === 0 ? (
              <div className="p-6 text-center text-muted-foreground">No notifications yet</div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={cn(
                    "p-3 border-b last:border-b-0 relative",
                    !notification.read && "bg-muted/30",
                    getNotificationColor(notification.type),
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">{getNotificationIcon(notification.type)}</div>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{notification.title}</div>
                      <p className="text-sm text-muted-foreground">{notification.message}</p>
                      <div className="text-xs text-muted-foreground mt-1">
                        {notification.timestamp.toLocaleString()}
                      </div>
                      {notification.link && (
                        <a href={notification.link} className="text-xs text-primary hover:underline mt-1 block">
                          View details
                        </a>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => removeNotification(notification.id)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>

          <CardFooter className="flex justify-between pt-2">
            <Button variant="outline" size="sm" onClick={closeNotifications}>
              Close
            </Button>
            {notificationsEnabled ? (
              <Badge variant="outline" className="ml-auto">
                Notifications enabled
              </Badge>
            ) : (
              <Badge variant="outline" className="ml-auto bg-muted">
                Notifications disabled
              </Badge>
            )}
          </CardFooter>
        </Card>
      )}
    </div>
  )
}

export default NotificationSystem
