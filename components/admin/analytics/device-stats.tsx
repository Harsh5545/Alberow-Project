"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart } from "@/components/ui/chart"

export function DeviceStats() {
  // Mock data for the chart
  const data = [
    { device: "Desktop", users: 5840 },
    { device: "Mobile", users: 7920 },
    { device: "Tablet", users: 2180 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Device Usage</CardTitle>
        <CardDescription>Visitors by device type</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <BarChart
            data={data}
            index="device"
            categories={["users"]}
            colors={["purple"]}
            valueFormatter={(value) => `${value.toLocaleString()} users`}
            yAxisWidth={60}
          />
        </div>
      </CardContent>
    </Card>
  )
}
