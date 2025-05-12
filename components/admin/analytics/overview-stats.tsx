"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Eye, MousePointerClick, Clock, TrendingUp, TrendingDown } from "lucide-react"

export function OverviewStats() {
  const stats = [
    {
      title: "Total Visitors",
      value: "24,512",
      change: "+12.5%",
      trend: "up",
      icon: <Users className="h-4 w-4" />,
    },
    {
      title: "Page Views",
      value: "98,347",
      change: "+18.2%",
      trend: "up",
      icon: <Eye className="h-4 w-4" />,
    },
    {
      title: "Bounce Rate",
      value: "42.3%",
      change: "-3.1%",
      trend: "down",
      icon: <MousePointerClick className="h-4 w-4" />,
    },
    {
      title: "Avg. Session",
      value: "3m 42s",
      change: "+8.4%",
      trend: "up",
      icon: <Clock className="h-4 w-4" />,
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <Card key={i}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <div className="h-4 w-4 text-muted-foreground">{stat.icon}</div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className={`text-xs flex items-center ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}>
              {stat.trend === "up" ? (
                <TrendingUp className="mr-1 h-3 w-3" />
              ) : (
                <TrendingDown className="mr-1 h-3 w-3" />
              )}
              {stat.change} from previous period
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
