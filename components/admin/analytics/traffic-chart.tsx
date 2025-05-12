"use client"

import { LineChart } from "@/components/ui/chart"

export function TrafficChart() {
  const data = [
    { date: "Jan", visitors: 1200, pageViews: 3800 },
    { date: "Feb", visitors: 1900, pageViews: 4600 },
    { date: "Mar", visitors: 1500, pageViews: 4200 },
    { date: "Apr", visitors: 1700, pageViews: 5100 },
    { date: "May", visitors: 2100, pageViews: 5800 },
    { date: "Jun", visitors: 2400, pageViews: 6300 },
    { date: "Jul", visitors: 2200, pageViews: 6100 },
    { date: "Aug", visitors: 2600, pageViews: 7200 },
    { date: "Sep", visitors: 2900, pageViews: 7800 },
    { date: "Oct", visitors: 3100, pageViews: 8300 },
    { date: "Nov", visitors: 3300, pageViews: 8900 },
    { date: "Dec", visitors: 3500, pageViews: 9500 },
  ]

  return (
    <LineChart
      data={data}
      index="date"
      categories={["visitors", "pageViews"]}
      colors={["#8b5cf6", "#ec4899"]}
      valueFormatter={(value) => `${value.toLocaleString()}`}
      className="h-[300px]"
    />
  )
}
