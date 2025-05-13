"use client"

import { LineChart } from "@/components/ui/chart"

export function TrafficChart() {
  const data = [
    { date: "Jan 1", visitors: 1420, pageviews: 3240 },
    { date: "Jan 8", visitors: 1620, pageviews: 3680 },
    { date: "Jan 15", visitors: 1780, pageviews: 4120 },
    { date: "Jan 22", visitors: 1950, pageviews: 4560 },
    { date: "Jan 29", visitors: 2120, pageviews: 5080 },
    { date: "Feb 5", visitors: 2340, pageviews: 5620 },
    { date: "Feb 12", visitors: 2580, pageviews: 6240 },
    { date: "Feb 19", visitors: 2780, pageviews: 6760 },
    { date: "Feb 26", visitors: 3000, pageviews: 7280 },
    { date: "Mar 5", visitors: 3210, pageviews: 7840 },
    { date: "Mar 12", visitors: 3450, pageviews: 8320 },
    { date: "Mar 19", visitors: 3680, pageviews: 8960 },
  ]

  return (
    <LineChart
      data={data}
      index="date"
      categories={["visitors", "pageviews"]}
      colors={["#8b5cf6", "#10b981"]}
      valueFormatter={(value) => `${value.toLocaleString()}`}
      className="h-[300px]"
    />
  )
}
