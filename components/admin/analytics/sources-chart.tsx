"use client"

import { PieChart } from "@/components/ui/chart"

export function SourcesChart() {
  const data = [
    { source: "Organic Search", value: 42 },
    { source: "Direct", value: 25 },
    { source: "Social Media", value: 18 },
    { source: "Referral", value: 10 },
    { source: "Email", value: 5 },
  ]

  return (
    <PieChart
      data={data}
      index="source"
      category="value"
      valueFormatter={(value) => `${value}%`}
      colors={["#8b5cf6", "#ec4899", "#6366f1", "#f43f5e", "#10b981"]}
      className="h-[300px]"
    />
  )
}
