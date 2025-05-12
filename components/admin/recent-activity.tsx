"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    user: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "JD",
    },
    action: "submitted a new contact form",
    time: "2 hours ago",
  },
  {
    user: {
      name: "Sarah Williams",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SW",
    },
    action: "commented on blog post 'SEO Strategies'",
    time: "5 hours ago",
  },
  {
    user: {
      name: "Michael Brown",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MB",
    },
    action: "updated project status to 'Testing'",
    time: "Yesterday",
  },
  {
    user: {
      name: "Emily Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "EJ",
    },
    action: "created a new blog post 'Web Design Trends'",
    time: "2 days ago",
  },
  {
    user: {
      name: "David Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "DW",
    },
    action: "added a new team member",
    time: "3 days ago",
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-start space-x-4"
            >
              <Avatar>
                <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
                <AvatarFallback>{activity.user.initials}</AvatarFallback>
              </Avatar>
              <div>
                <p>
                  <span className="font-medium">{activity.user.name}</span>{" "}
                  <span className="text-foreground/70">{activity.action}</span>
                </p>
                <p className="text-sm text-foreground/50">{activity.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
