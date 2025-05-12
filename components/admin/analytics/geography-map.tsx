"use client"

export function GeographyMap() {
  const countries = [
    { country: "United States", visitors: 9876, percentage: 40 },
    { country: "United Kingdom", visitors: 3703, percentage: 15 },
    { country: "Canada", visitors: 2469, percentage: 10 },
    { country: "Australia", visitors: 1728, percentage: 7 },
    { country: "Germany", visitors: 1235, percentage: 5 },
    { country: "France", visitors: 987, percentage: 4 },
    { country: "Other", visitors: 4691, percentage: 19 },
  ]

  return (
    <div className="space-y-4">
      <div className="h-[200px] bg-muted/20 rounded-md flex items-center justify-center">
        Interactive map visualization
      </div>
      <div className="space-y-2">
        {countries.map((country, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="font-medium">{country.country}</div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-muted-foreground">{country.visitors.toLocaleString()} visitors</div>
              <div className="w-16 text-right">{country.percentage}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
