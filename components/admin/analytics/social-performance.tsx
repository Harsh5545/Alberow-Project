"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown } from "lucide-react"

export function SocialPerformance() {
  const platforms = [
    {
      platform: "Facebook",
      followers: 12500,
      engagement: "3.2%",
      clicks: 1876,
      conversions: 42,
      trend: "up",
      change: "+8.3%",
    },
    {
      platform: "Instagram",
      followers: 24800,
      engagement: "4.7%",
      clicks: 2345,
      conversions: 68,
      trend: "up",
      change: "+12.5%",
    },
    {
      platform: "Twitter",
      followers: 8700,
      engagement: "2.1%",
      clicks: 945,
      conversions: 23,
      trend: "down",
      change: "-1.8%",
    },
    {
      platform: "LinkedIn",
      followers: 5600,
      engagement: "2.8%",
      clicks: 1245,
      conversions: 37,
      trend: "up",
      change: "+5.2%",
    },
    {
      platform: "Pinterest",
      followers: 3200,
      engagement: "3.5%",
      clicks: 876,
      conversions: 19,
      trend: "up",
      change: "+2.7%",
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Platform</TableHead>
          <TableHead className="text-right">Followers</TableHead>
          <TableHead className="text-right">Engagement</TableHead>
          <TableHead className="text-right">Clicks</TableHead>
          <TableHead className="text-right">Conversions</TableHead>
          <TableHead className="text-right">Trend</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {platforms.map((platform, i) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{platform.platform}</TableCell>
            <TableCell className="text-right">{platform.followers.toLocaleString()}</TableCell>
            <TableCell className="text-right">{platform.engagement}</TableCell>
            <TableCell className="text-right">{platform.clicks.toLocaleString()}</TableCell>
            <TableCell className="text-right">{platform.conversions}</TableCell>
            <TableCell className="text-right">
              <Badge
                variant="outline"
                className={`flex items-center gap-1 ${
                  platform.trend === "up" ? "text-green-500 border-green-500" : "text-red-500 border-red-500"
                }`}
              >
                {platform.trend === "up" ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                {platform.change}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
