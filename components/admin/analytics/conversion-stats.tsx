"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart } from "@/components/ui/chart"

export function ConversionStats() {
  // Mock data for the chart
  const data = [
    { month: "Jan", conversions: 42, rate: 2.8 },
    { month: "Feb", conversions: 58, rate: 3.2 },
    { month: "Mar", conversions: 48, rate: 2.9 },
    { month: "Apr", conversions: 62, rate: 3.5 },
    { month: "May", conversions: 74, rate: 3.8 },
    { month: "Jun", conversions: 86, rate: 4.2 },
    { month: "Jul", conversions: 78, rate: 3.9 },
    { month: "Aug", conversions: 92, rate: 4.5 },
    { month: "Sep", conversions: 104, rate: 4.8 },
    { month: "Oct", conversions: 116, rate: 5.2 },
    { month: "Nov", conversions: 128, rate: 5.6 },
    { month: "Dec", conversions: 142, rate: 6.1 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Conversion Metrics</CardTitle>
        <CardDescription>Conversion numbers and rates over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <LineChart
            data={data}
            index="month"
            categories={["conversions", "rate"]}
            colors={["purple", "pink"]}
            valueFormatter={(value) => `${value}`}
            yAxisWidth={60}
          />
        </div>
      </CardContent>
    </Card>
  )
}
