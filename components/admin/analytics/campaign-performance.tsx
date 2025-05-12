"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function CampaignPerformance() {
  const campaigns = [
    {
      name: "Summer Sale 2023",
      status: "Active",
      budget: 5000,
      spent: 3250,
      impressions: 125000,
      clicks: 4200,
      conversions: 168,
      roi: 320,
    },
    {
      name: "Product Launch",
      status: "Active",
      budget: 8000,
      spent: 6400,
      impressions: 210000,
      clicks: 7800,
      conversions: 312,
      roi: 480,
    },
    {
      name: "Holiday Special",
      status: "Scheduled",
      budget: 6000,
      spent: 0,
      impressions: 0,
      clicks: 0,
      conversions: 0,
      roi: 0,
    },
    {
      name: "Brand Awareness",
      status: "Completed",
      budget: 3500,
      spent: 3500,
      impressions: 95000,
      clicks: 3100,
      conversions: 124,
      roi: 280,
    },
    {
      name: "Retargeting",
      status: "Active",
      budget: 2500,
      spent: 1800,
      impressions: 68000,
      clicks: 2900,
      conversions: 145,
      roi: 520,
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Campaign</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Budget</TableHead>
          <TableHead>Impressions</TableHead>
          <TableHead>Clicks</TableHead>
          <TableHead>Conversions</TableHead>
          <TableHead>ROI</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {campaigns.map((campaign, i) => (
          <TableRow key={i}>
            <TableCell className="font-medium">
              <div>{campaign.name}</div>
              {campaign.status === "Active" && (
                <div className="mt-1">
                  <Progress value={(campaign.spent / campaign.budget) * 100} className="h-2" />
                  <div className="text-xs text-muted-foreground mt-1">
                    ${campaign.spent.toLocaleString()} of ${campaign.budget.toLocaleString()} spent
                  </div>
                </div>
              )}
            </TableCell>
            <TableCell>
              <Badge
                variant="outline"
                className={
                  campaign.status === "Active"
                    ? "border-green-500 text-green-500"
                    : campaign.status === "Completed"
                      ? "border-blue-500 text-blue-500"
                      : "border-amber-500 text-amber-500"
                }
              >
                {campaign.status}
              </Badge>
            </TableCell>
            <TableCell>${campaign.budget.toLocaleString()}</TableCell>
            <TableCell>{campaign.impressions.toLocaleString()}</TableCell>
            <TableCell>{campaign.clicks.toLocaleString()}</TableCell>
            <TableCell>{campaign.conversions.toLocaleString()}</TableCell>
            <TableCell>
              {campaign.roi > 0 ? (
                <span className="text-green-500">{campaign.roi}%</span>
              ) : (
                <span className="text-muted-foreground">-</span>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
