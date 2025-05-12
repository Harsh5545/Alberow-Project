"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { LineChart, BarChart } from "@/components/ui/chart"
import { Calendar, Clock, FileText, MessageSquare, TrendingUp, ArrowRight, Download } from "lucide-react"
import Link from "next/link"

export function ClientDashboard() {
  // Mock data for project
  const project = {
    name: "E-commerce Website Redesign",
    status: "In Progress",
    progress: 65,
    startDate: "Oct 15, 2023",
    endDate: "Dec 20, 2023",
    team: [
      { name: "Alex Johnson", role: "Project Manager" },
      { name: "Sarah Miller", role: "UI/UX Designer" },
      { name: "David Lee", role: "Developer" },
    ],
    tasks: [
      { name: "Wireframe Design", status: "Completed", date: "Oct 25, 2023" },
      { name: "UI Design", status: "Completed", date: "Nov 10, 2023" },
      { name: "Frontend Development", status: "In Progress", date: "Nov 30, 2023" },
      { name: "Backend Integration", status: "Pending", date: "Dec 15, 2023" },
    ],
    updates: [
      {
        date: "Nov 15, 2023",
        content: "Completed the UI design phase. Awaiting your feedback on the mockups shared via email.",
      },
      {
        date: "Nov 5, 2023",
        content: "Wireframes approved. Moving to the UI design phase.",
      },
      {
        date: "Oct 20, 2023",
        content: "Project kickoff meeting completed. Initial wireframes in progress.",
      },
    ],
  }

  // Mock data for analytics
  const websiteData = [
    { date: "Oct", visitors: 1200, pageViews: 3800 },
    { date: "Nov", visitors: 1900, pageViews: 4600 },
    { date: "Dec", visitors: 2400, pageViews: 6300 },
    { date: "Jan", visitors: 2200, pageViews: 6100 },
    { date: "Feb", visitors: 2600, pageViews: 7200 },
    { date: "Mar", visitors: 2900, pageViews: 7800 },
  ]

  const socialData = [
    { platform: "Facebook", followers: 2500, engagement: 320 },
    { platform: "Instagram", followers: 3800, engagement: 560 },
    { platform: "Twitter", followers: 1200, engagement: 180 },
    { platform: "LinkedIn", followers: 950, engagement: 120 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Welcome, FashionHub</h1>
          <p className="text-muted-foreground">Here's an overview of your project and performance metrics.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <MessageSquare className="mr-2 h-4 w-4" /> Contact Support
          </Button>
          <Button>
            <FileText className="mr-2 h-4 w-4" /> View Reports
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Project Status</CardTitle>
            <CardDescription>Current progress of your project</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xl font-bold">{project.name}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="border-blue-500 text-blue-500">
                      {project.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{project.progress}% Complete</span>
                  </div>
                </div>
              </div>
              <Progress value={project.progress} className="h-2" />
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Started: {project.startDate}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>Deadline: {project.endDate}</span>
                </div>
              </div>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/client-portal/projects">
                  View Project Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Recent Updates</CardTitle>
            <CardDescription>Latest activity on your project</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {project.updates.map((update, i) => (
                <div key={i} className="border-b pb-3 last:border-0 last:pb-0">
                  <div className="text-sm text-muted-foreground">{update.date}</div>
                  <div className="mt-1">{update.content}</div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View All Updates <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Project Team</CardTitle>
            <CardDescription>Team members working on your project</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {project.team.map((member, i) => (
                <div key={i} className="flex items-center gap-3 border-b pb-3 last:border-0 last:pb-0">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-medium">{member.name}</div>
                    <div className="text-sm text-muted-foreground">{member.role}</div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                Contact Team <MessageSquare className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="website" className="space-y-4">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="website">Website Analytics</TabsTrigger>
            <TabsTrigger value="social">Social Media</TabsTrigger>
            <TabsTrigger value="marketing">Marketing</TabsTrigger>
          </TabsList>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" /> Export Data
          </Button>
        </div>
        <TabsContent value="website" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Website Performance</CardTitle>
              <CardDescription>Traffic and engagement metrics for your website</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <LineChart
                  data={websiteData}
                  index="date"
                  categories={["visitors", "pageViews"]}
                  colors={["#8b5cf6", "#ec4899"]}
                  valueFormatter={(value) => `${value.toLocaleString()}`}
                  className="h-[300px]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">Total Visitors</div>
                  <div className="text-2xl font-bold">13,200</div>
                  <div className="flex items-center text-sm text-green-500">
                    <TrendingUp className="mr-1 h-4 w-4" />
                    +24.5% from last period
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">Conversion Rate</div>
                  <div className="text-2xl font-bold">3.2%</div>
                  <div className="flex items-center text-sm text-green-500">
                    <TrendingUp className="mr-1 h-4 w-4" />
                    +1.1% from last period
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="social" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Social Media Performance</CardTitle>
              <CardDescription>Followers and engagement across platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <BarChart
                  data={socialData}
                  index="platform"
                  categories={["followers", "engagement"]}
                  colors={["#8b5cf6", "#ec4899"]}
                  valueFormatter={(value) => `${value.toLocaleString()}`}
                  className="h-[300px]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">Total Followers</div>
                  <div className="text-2xl font-bold">8,450</div>
                  <div className="flex items-center text-sm text-green-500">
                    <TrendingUp className="mr-1 h-4 w-4" />
                    +18.3% from last period
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">Engagement Rate</div>
                  <div className="text-2xl font-bold">4.7%</div>
                  <div className="flex items-center text-sm text-green-500">
                    <TrendingUp className="mr-1 h-4 w-4" />
                    +0.8% from last period
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="marketing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Marketing Campaigns</CardTitle>
              <CardDescription>Performance of your marketing initiatives</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                Marketing campaign visualization
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">Total Campaigns</div>
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-sm text-muted-foreground">2 active, 1 completed</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">ROI</div>
                  <div className="text-2xl font-bold">285%</div>
                  <div className="flex items-center text-sm text-green-500">
                    <TrendingUp className="mr-1 h-4 w-4" />
                    +32% from last period
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
            <CardDescription>Scheduled activities for your project</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {project.tasks.map((task, i) => (
                <div key={i} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
                  <div>
                    <div className="font-medium">{task.name}</div>
                    <div className="text-sm text-muted-foreground">Due: {task.date}</div>
                  </div>
                  <Badge
                    variant="outline"
                    className={
                      task.status === "Completed"
                        ? "border-green-500 text-green-500"
                        : task.status === "In Progress"
                          ? "border-blue-500 text-blue-500"
                          : "border-amber-500 text-amber-500"
                    }
                  >
                    {task.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Invoices & Payments</CardTitle>
            <CardDescription>Recent financial transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-3">
                <div>
                  <div className="font-medium">Invoice #1082</div>
                  <div className="text-sm text-muted-foreground">Project Deposit</div>
                </div>
                <div className="text-right">
                  <div className="font-medium">$4,500.00</div>
                  <Badge variant="outline" className="border-green-500 text-green-500">
                    Paid
                  </Badge>
                </div>
              </div>
              <div className="flex items-center justify-between border-b pb-3">
                <div>
                  <div className="font-medium">Invoice #1083</div>
                  <div className="text-sm text-muted-foreground">Design Phase</div>
                </div>
                <div className="text-right">
                  <div className="font-medium">$3,200.00</div>
                  <Badge variant="outline" className="border-green-500 text-green-500">
                    Paid
                  </Badge>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Invoice #1084</div>
                  <div className="text-sm text-muted-foreground">Development Phase</div>
                </div>
                <div className="text-right">
                  <div className="font-medium">$5,800.00</div>
                  <Badge variant="outline" className="border-amber-500 text-amber-500">
                    Pending
                  </Badge>
                </div>
              </div>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/client-portal/invoices">
                  View All Invoices <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
