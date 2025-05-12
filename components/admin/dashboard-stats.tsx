"use client"

import { motion } from "framer-motion"
import { Users, FileText, FolderKanban, MessageSquare, TrendingUp, TrendingDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    title: "Total Users",
    value: "1,284",
    icon: <Users className="h-5 w-5" />,
    change: "+12%",
    trend: "up",
    color: "purple",
  },
  {
    title: "Blog Posts",
    value: "32",
    icon: <FileText className="h-5 w-5" />,
    change: "+5%",
    trend: "up",
    color: "pink",
  },
  {
    title: "Projects",
    value: "48",
    icon: <FolderKanban className="h-5 w-5" />,
    change: "+18%",
    trend: "up",
    color: "purple",
  },
  {
    title: "Messages",
    value: "92",
    icon: <MessageSquare className="h-5 w-5" />,
    change: "-3%",
    trend: "down",
    color: "pink",
  },
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-md bg-${stat.color}-100 dark:bg-${stat.color}-900/30`}>{stat.icon}</div>
                <div className={`flex items-center text-sm ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                  {stat.change}
                  {stat.trend === "up" ? (
                    <TrendingUp className="h-4 w-4 ml-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 ml-1" />
                  )}
                </div>
              </div>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-foreground/70">{stat.title}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
