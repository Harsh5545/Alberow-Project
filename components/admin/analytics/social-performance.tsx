"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export function SocialPerformance() {
  const socialData = [
    {
      platform: "Facebook",
      icon: <Facebook className="h-4 w-4" />,
      followers: "24.5K",
      engagement: "3.2%",
      clicks: 1240,
      conversions: 38,
    },
    {
      platform: "Twitter",
      icon: <Twitter className="h-4 w-4" />,
      followers: "18.7K",
      engagement: "2.8%",
      clicks: 980,
      conversions: 25,
    },
    {
      platform: "Instagram",
      icon: <Instagram className="h-4 w-4" />,
      followers: "32.1K",
      engagement: "4.5%",
      clicks: 1680,
      conversions: 52,
    },
    {
      platform: "LinkedIn",
      icon: <Linkedin className="h-4 w-4" />,
      followers: "12.3K",
      engagement: "2.1%",
      clicks: 760,
      conversions: 31,
    },
    {
      platform: "YouTube",
      icon: <Youtube className="h-4 w-4" />,
      followers: "8.4K",
      engagement: "3.7%",
      clicks: 520,
      conversions: 18,
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Platform</TableHead>
          <TableHead className="text-right">Followers</TableHead>
          <TableHead className="text-right">Engagement</TableHead>
          <TableHead className="text-right">Clicks</TableHead>
          <TableHead className="text-right">Conversions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {socialData.map((item) => (
          <TableRow key={item.platform}>
            <TableCell>
              <div className="flex items-center gap-2">
                {item.icon}
                <span>{item.platform}</span>
              </div>
            </TableCell>
            <TableCell className="text-right">{item.followers}</TableCell>
            <TableCell className="text-right">{item.engagement}</TableCell>
            <TableCell className="text-right">{item.clicks}</TableCell>
            <TableCell className="text-right">{item.conversions}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
