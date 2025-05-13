"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react"

export function TopPages() {
  const pages = [
    {
      path: "/",
      title: "Home Page",
      views: 12450,
      change: 8.1,
      bounceRate: 42.3,
      avgTime: "1m 23s",
    },
    {
      path: "/services",
      title: "Services",
      views: 8320,
      change: 12.5,
      bounceRate: 38.7,
      avgTime: "2m 12s",
    },
    {
      path: "/blog",
      title: "Blog",
      views: 6540,
      change: -2.3,
      bounceRate: 45.1,
      avgTime: "3m 05s",
    },
    {
      path: "/about",
      title: "About Us",
      views: 4280,
      change: 0,
      bounceRate: 41.8,
      avgTime: "1m 45s",
    },
    {
      path: "/contact",
      title: "Contact",
      views: 3120,
      change: 5.7,
      bounceRate: 35.2,
      avgTime: "1m 12s",
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Page</TableHead>
          <TableHead className="text-right">Views</TableHead>
          <TableHead className="text-right">Change</TableHead>
          <TableHead className="text-right">Bounce Rate</TableHead>
          <TableHead className="text-right">Avg. Time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {pages.map((page) => (
          <TableRow key={page.path}>
            <TableCell>
              <div className="font-medium">{page.title}</div>
              <div className="text-sm text-muted-foreground">{page.path}</div>
            </TableCell>
            <TableCell className="text-right">{page.views.toLocaleString()}</TableCell>
            <TableCell className="text-right">
              {page.change > 0 ? (
                <span className="text-emerald-500 font-medium inline-flex items-center">
                  <ArrowUpRight className="mr-1 h-4 w-4" /> {page.change}%
                </span>
              ) : page.change < 0 ? (
                <span className="text-rose-500 font-medium inline-flex items-center">
                  <ArrowDownRight className="mr-1 h-4 w-4" /> {Math.abs(page.change)}%
                </span>
              ) : (
                <span className="text-muted-foreground font-medium inline-flex items-center">
                  <Minus className="mr-1 h-4 w-4" /> {page.change}%
                </span>
              )}
            </TableCell>
            <TableCell className="text-right">{page.bounceRate}%</TableCell>
            <TableCell className="text-right">{page.avgTime}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
