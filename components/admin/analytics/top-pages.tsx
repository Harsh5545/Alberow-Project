"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown } from "lucide-react"

export function TopPages() {
  const pages = [
    {
      page: "Home",
      views: 12345,
      avgTime: "1m 32s",
      bounceRate: 28.4,
      trend: "up",
      change: "+5.2%",
    },
    {
      page: "Services",
      views: 8765,
      avgTime: "2m 15s",
      bounceRate: 34.2,
      trend: "up",
      change: "+3.8%",
    },
    {
      page: "About",
      views: 6543,
      avgTime: "1m 47s",
      bounceRate: 30.1,
      trend: "down",
      change: "-1.3%",
    },
    {
      page: "Blog",
      views: 5432,
      avgTime: "3m 22s",
      bounceRate: 25.7,
      trend: "up",
      change: "+7.6%",
    },
    {
      page: "Contact",
      views: 4321,
      avgTime: "1m 05s",
      bounceRate: 42.3,
      trend: "down",
      change: "-2.1%",
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Page</TableHead>
          <TableHead className="text-right">Views</TableHead>
          <TableHead className="text-right">Avg. Time</TableHead>
          <TableHead className="text-right">Bounce Rate</TableHead>
          <TableHead className="text-right">Trend</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {pages.map((page, i) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{page.page}</TableCell>
            <TableCell className="text-right">{page.views.toLocaleString()}</TableCell>
            <TableCell className="text-right">{page.avgTime}</TableCell>
            <TableCell className="text-right">{page.bounceRate}%</TableCell>
            <TableCell className="text-right">
              <Badge
                variant="outline"
                className={`flex items-center gap-1 ${
                  page.trend === "up" ? "text-green-500 border-green-500" : "text-red-500 border-red-500"
                }`}
              >
                {page.trend === "up" ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                {page.change}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
