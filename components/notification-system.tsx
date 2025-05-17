"use client"

import { useState, useEffect } from "react"
import { X, Bell, Info, CheckCircle, AlertTriangle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type NotificationType = "info" | "success" | "warning" | "error"

interface Notification {
  id: string
  title: string
  message: string
  type: NotificationType
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
}

export function NotificationSystem() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)

  // Mock notifications for demo purposes
  useEffect(() => {
    // Simulate receiving notifications
    const mockNotifications: Notification[] = [
      {
        id: "1",
        title: "Project Updated",
        message: "Website Redesign project has been updated with new files.",
        type: "info",
        duration: 5000,
      },
      {
        id: "2",
        title: "Task Completed",
        message: "Homepage design task has been marked as complete.",
        type: "success",
        duration: 5000,
      },
      {
        id: "3",
        title: "Meeting Reminder",
        message: "Client meeting in 30 minutes.",
        type: "warning",
        duration: 8000,
        action: {
          label: "Join Now",
          onClick: () => console.log("Joining meeting..."),
        },
      },
    ]

    setUnreadCount(mockNotifications.length)

    // Add a slight delay to simulate notifications coming in
    const timer = setTimeout(() => {
      setNotifications(mockNotifications)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id))
    setUnreadCount((prev) => Math.max(0, prev - 1))
  }

  const clearAllNotifications = () => {
    setNotifications([])
    setUnreadCount(0)
  }

  const toggleNotificationPanel = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setUnreadCount(0)
    }
  }

  const getNotificationIcon = (type: NotificationType) => {
    switch (type) {
      case "info":
        return <Info className="h-5 w-5 text-blue-500" />
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />
      case "error":
        return <AlertCircle className="h-5 w-5 text-red-500" />
    }
  }

  const getNotificationColor = (type: NotificationType) => {
    switch (type) {
      case "info":
        return "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
      case "success":
        return "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
      case "warning":
        return "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800"
      case "error":
        return "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
    }
  }

  // Auto-dismiss notifications after their duration
  useEffect(() => {
    const timers = notifications.map((notification) => {
      if (notification.duration) {
        return setTimeout(() => {
          removeNotification(notification.id)
        }, notification.duration)
      }
      return undefined
    })

    return () => {
      timers.forEach((timer) => {
        if (timer) clearTimeout(timer)
      })
    }
  }, [notifications])

  return (
    <>
      {/* Notification Bell */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="icon"
          className="relative rounded-full h-10 w-10 bg-background shadow-md"
          onClick={toggleNotificationPanel}
        >
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center transform translate-x-1 -translate-y-1">
              {unreadCount}
            </span>
          )}
        </Button>
      </div>

      {/* Notification Panel */}
      <div
        className={cn(
          "fixed top-16 right-4 z-50 w-80 bg-background border rounded-lg shadow-lg transition-all duration-200 transform",
          isOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0 pointer-events-none",
        )}
      >
        <div className="p-3 border-b flex items-center justify-between">
          <h3 className="font-medium">Notifications</h3>
          <div className="flex items-center gap-1">
            {notifications.length > 0 && (
              <Button variant="ghost" size="sm" onClick={clearAllNotifications} className="h-8 text-xs">
                Clear All
              </Button>
            )}
            <Button variant="ghost" size="icon" onClick={toggleNotificationPanel} className="h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="max-h-[70vh] overflow-y-auto">
          {notifications.length > 0 ? (
            <div className="p-2 space-y-2">
              {notifications.map((notification) => (
                <Card
                  key={notification.id}
                  className={cn("p-3 border shadow-sm", getNotificationColor(notification.type))}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">{getNotificationIcon(notification.type)}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-medium text-sm">{notification.title}</h4>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeNotification(notification.id)}
                          className="h-5 w-5 -mt-1 -mr-1"
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                      {notification.action && (
                        <Button
                          variant="link"
                          size="sm"
                          className="h-auto p-0 mt-1 text-xs"
                          onClick={notification.action.onClick}
                        >
                          {notification.action.label}
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="py-8 text-center text-muted-foreground">
              <Bell className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p>No notifications</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
