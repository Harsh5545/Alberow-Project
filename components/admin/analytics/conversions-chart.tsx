"use client"

import { BarChart } from "@/components/ui/chart"

export function ConversionsChart() {
  const data = [
    { month: "Jan", conversions: 42, rate: 2.1 },
    { month: "Feb", conversions: 63, rate: 2.7 },
    { month: "Mar", conversions: 52, rate: 2.3 },
    { month: "Apr", conversions: 58, rate: 2.5 },
    { month: "May", conversions: 72, rate: 2.9 },
    { month: "Jun", conversions: 85, rate: 3.2 },
    { month: "Jul", conversions: 78, rate: 3.0 },
    { month: "Aug", conversions: 93, rate: 3.4 },
    { month: "Sep", conversions: 102, rate: 3.6 },
    { month: "Oct", conversions: 116, rate: 3.8 },
    { month: "Nov", conversions: 125, rate: 4.0 },
    { month: "Dec", conversions: 138, rate: 4.2 },
  ]

  return (
    <BarChart
      data={data}
      index="month"
      categories={["conversions"]}
      colors={["#8b5cf6"]}
      valueFormatter={(value) => `${value}`}
      className="h-[300px]"
    />
  )
}
