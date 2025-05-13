"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function CampaignPerformance() {
  const campaignData = [
    {
      name: "Summer Sale 2023",
      status: "Active",
      budget: "$5,000",
      spent: "$3,240",
      progress: 65,
      leads: 124,
      conversions: 38,
    },
    {
      name: "Product Launch",
      status: "Active",
      budget: "$8,500",
      spent: "$6,800",
      progress: 80,
      leads: 215,
      conversions: 62,
    },
    {
      name: "Holiday Special",
      status: "Scheduled",
      budget: "$4,200",
      spent: "$0",
      progress: 0,
      leads: 0,
      conversions: 0,
    },
    {
      name: "Brand Awareness",
      status: "Active",
      budget: "$3,000",
      spent: "$1,850",
      progress: 62,
      leads: 87,
      conversions: 24,
    },
    {
      name: "Spring Promotion",
      status: "Completed",
      budget: "$2,500",
      spent: "$2,500",
      progress: 100,
      leads: 96,
      conversions: 31,
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Campaign</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Budget</TableHead>
          <TableHead>Progress</TableHead>
          <TableHead className="text-right">Leads</TableHead>
          <TableHead className="text-right">Conversions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {campaignData.map((campaign) => (
          <TableRow key={campaign.name}>
            <TableCell className="font-medium">{campaign.name}</TableCell>
            <TableCell>
              <Badge
                variant={
                  campaign.status === "Active" ? "default" : campaign.status === "Completed" ? "outline" : "secondary"
                }
              >
                {campaign.status}
              </Badge>
            </TableCell>
            <TableCell>
              {campaign.budget}
              <div className="text-xs text-muted-foreground">Spent: {campaign.spent}</div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Progress value={campaign.progress} className="h-2" />
                <span className="text-xs text-muted-foreground">{campaign.progress}%</span>
              </div>
            </TableCell>
            <TableCell className="text-right">{campaign.leads}</TableCell>
            <TableCell className="text-right">{campaign.conversions}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
