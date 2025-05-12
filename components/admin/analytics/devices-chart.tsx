"use client"

import { PieChart } from "@/components/ui/chart"

export function DevicesChart() {
  const data = [
    { device: "Mobile", value: 58 },
    { device: "Desktop", value: 36 },
    { device: "Tablet", value: 6 },
  ]

  return (
    <PieChart
      data={data}
      index="device"
      category="value"
      valueFormatter={(value) => `${value}%`}
      colors={["#8b5cf6", "#ec4899", "#6366f1"]}
      className="h-[200px]"
    />
  )
}
