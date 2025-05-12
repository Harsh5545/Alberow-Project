"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AreaChart } from "@/components/ui/chart"

export function VisitorStats() {
  // Mock data for the chart
  const data = [
    { date: "Jan", visitors: 1200, pageViews: 3800 },
    { date: "Feb", visitors: 1900, pageViews: 4800 },
    { date: "Mar", visitors: 1500, pageViews: 4200 },
    { date: "Apr", visitors: 1800, pageViews: 5100 },
    { date: "May", visitors: 2200, pageViews: 6200 },
    { date: "Jun", visitors: 2600, pageViews: 7800 },
    { date: "Jul", visitors: 2400, pageViews: 7200 },
    { date: "Aug", visitors: 2800, pageViews: 8400 },
    { date: "Sep", visitors: 3200, pageViews: 9600 },
    { date: "Oct", visitors: 3500, pageViews: 10500 },
    { date: "Nov", visitors: 3800, pageViews: 11400 },
    { date: "Dec", visitors: 4200, pageViews: 12600 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Visitor Statistics</CardTitle>
        <CardDescription>Unique visitors and page views over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <AreaChart
            data={data}
            index="date"
            categories={["visitors", "pageViews"]}
            colors={["purple", "pink"]}
            valueFormatter={(value) => `${value.toLocaleString()}`}
            yAxisWidth={60}
          />
        </div>
      </CardContent>
    </Card>
  )
}
