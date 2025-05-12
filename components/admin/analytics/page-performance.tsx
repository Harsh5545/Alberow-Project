"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown } from "lucide-react"

export function PagePerformance() {
  // Mock data for the table
  const pages = [
    {
      path: "/",
      title: "Home Page",
      views: 12450,
      uniqueVisitors: 8320,
      bounceRate: 32.5,
      avgTime: "2m 45s",
      change: 12.3,
      trend: "up",
    },
    {
      path: "/services",
      title: "Services",
      views: 8720,
      uniqueVisitors: 6140,
      bounceRate: 28.7,
      avgTime: "3m 12s",
      change: 8.7,
      trend: "up",
    },
    {
      path: "/about",
      title: "About Us",
      views: 5430,
      uniqueVisitors: 4210,
      bounceRate: 35.2,
      avgTime: "2m 05s",
      change: -2.4,
      trend: "down",
    },
    {
      path: "/blog",
      title: "Blog",
      views: 7890,
      uniqueVisitors: 5620,
      bounceRate: 25.8,
      avgTime: "4m 30s",
      change: 15.6,
      trend: "up",
    },
    {
      path: "/contact",
      title: "Contact",
      views: 3240,
      uniqueVisitors: 2980,
      bounceRate: 42.3,
      avgTime: "1m 50s",
      change: -5.1,
      trend: "down",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Page Performance</CardTitle>
        <CardDescription>How individual pages are performing</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Page</TableHead>
              <TableHead className="text-right">Views</TableHead>
              <TableHead className="text-right">Unique Visitors</TableHead>
              <TableHead className="text-right">Bounce Rate</TableHead>
              <TableHead className="text-right">Avg. Time</TableHead>
              <TableHead className="text-right">Change</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pages.map((page, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div>
                    <div className="font-medium">{page.title}</div>
                    <div className="text-xs text-muted-foreground">{page.path}</div>
                  </div>
                </TableCell>
                <TableCell className="text-right">{page.views.toLocaleString()}</TableCell>
                <TableCell className="text-right">{page.uniqueVisitors.toLocaleString()}</TableCell>
                <TableCell className="text-right">{page.bounceRate}%</TableCell>
                <TableCell className="text-right">{page.avgTime}</TableCell>
                <TableCell className="text-right">
                  <Badge
                    variant="outline"
                    className={page.trend === "up" ? "border-green-500 text-green-500" : "border-red-500 text-red-500"}
                  >
                    <span className="flex items-center">
                      {page.trend === "up" ? (
                        <TrendingUp className="mr-1 h-3 w-3" />
                      ) : (
                        <TrendingDown className="mr-1 h-3 w-3" />
                      )}
                      {Math.abs(page.change)}%
                    </span>
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
