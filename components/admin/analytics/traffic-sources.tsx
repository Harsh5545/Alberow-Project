"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DonutChart } from "@/components/ui/chart"

export function TrafficSources() {
  // Mock data for the chart
  const data = [
    { name: "Organic Search", value: 42 },
    { name: "Direct", value: 23 },
    { name: "Social Media", value: 18 },
    { name: "Referral", value: 12 },
    { name: "Email", value: 5 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Traffic Sources</CardTitle>
        <CardDescription>Where your visitors are coming from</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <DonutChart
            data={data}
            category="value"
            index="name"
            colors={["purple", "pink", "indigo", "cyan", "amber"]}
            valueFormatter={(value) => `${value}%`}
            className="h-full"
          />
        </div>
      </CardContent>
    </Card>
  )
}
