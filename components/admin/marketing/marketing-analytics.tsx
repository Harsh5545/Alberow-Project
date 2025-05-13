// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Download, Calendar } from "lucide-react"

// // Sample data for charts
// const emailData = [
//   { name: "Jan", sent: 120, opened: 80, clicked: 40 },
//   { name: "Feb", sent: 150, opened: 90, clicked: 45 },
//   { name: "Mar", sent: 180, opened: 110, clicked: 60 },
//   { name: "Apr", sent: 220, opened: 140, clicked: 75 },
//   { name: "May", sent: 250, opened: 170, clicked: 90 },
// ]

// const socialData = [
//   { name: "Jan", followers: 2500, engagement: 3.2, reach: 15000 },
//   { name: "Feb", followers: 2800, engagement: 3.5, reach: 18000 },
//   { name: "Mar", followers: 3200, engagement: 3.8, reach: 22000 },
//   { name: "Apr", followers: 3600, engagement: 4.1, reach: 28000 },
//   { name: "May", followers: 4200, engagement: 4.5, reach: 35000 },
// ]

// const websiteData = [
//   { name: "Jan", visitors: 8500, pageviews: 32000, bounceRate: 65 },
//   { name: "Feb", visitors: 9200, pageviews: 36000, bounceRate: 62 },
//   { name: "Mar", visitors: 11000, pageviews: 42000, bounceRate: 58 },
//   { name: "Apr", visitors: 13500, pageviews: 48000, bounceRate: 55 },
//   { name: "May", visitors: 15800, pageviews: 56000, bounceRate: 52 },
// ]

// const conversionData = [
//   { name: "Website", value: 45 },
//   { name: "Email", value: 25 },
//   { name: "Social", value: 20 },
//   { name: "Referral", value: 10 },
// ]

// const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"]

// export function MarketingAnalytics() {
//   const [timeframe, setTimeframe] = useState("month")

//   return (
//     <div className="p-6">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
//         <div>
//           <h2 className="text-2xl font-bold">Marketing Analytics</h2>
//           <p className="text-muted-foreground">Track and analyze your marketing performance</p>
//         </div>
//         <div className="flex gap-2">
//           <Select defaultValue={timeframe} onValueChange={setTimeframe}>
//             <SelectTrigger className="w-[180px]">
//               <SelectValue placeholder="Select timeframe" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="week">Last 7 days</SelectItem>
//               <SelectItem value="month">Last 30 days</SelectItem>
//               <SelectItem value="quarter">Last 90 days</SelectItem>
//               <SelectItem value="year">Last 12 months</SelectItem>
//             </SelectContent>
//           </Select>
//           <Button variant="outline">
//             <Calendar className="mr-2 h-4 w-4" /> Custom Range
//           </Button>
//           <Button variant="outline">
//             <Download className="mr-2 h-4 w-4" /> Export
//           </Button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//         <Card>
//           <CardContent className="pt-6">
//             <div className="flex justify-between">\
