"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LineChart, BarChart, PieChart } from "@/components/ui/chart"
import { Badge } from "@/components/ui/badge"
import {
  ArrowUpRight,
  Calendar,
  MessageSquare,
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle,
  BarChart3,
  PieChartIcon,
  Users,
  Share2,
} from "lucide-react"

export default function ClientDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Sample data for charts
  const websiteTrafficData = [
    { date: "Jan", visitors: 1240, pageviews: 3720 },
    { date: "Feb", visitors: 1580, pageviews: 4320 },
    { date: "Mar", visitors: 1420, pageviews: 4100 },
    { date: "Apr", visitors: 1620, pageviews: 4500 },
    { date: "May", visitors: 1950, pageviews: 5200 },
    { date: "Jun", visitors: 2100, pageviews: 5800 },
    { date: "Jul", visitors: 1890, pageviews: 5100 },
    { date: "Aug", visitors: 2350, pageviews: 6200 },
    { date: "Sep", visitors: 2580, pageviews: 6800 },
    { date: "Oct", visitors: 2780, pageviews: 7400 },
    { date: "Nov", visitors: 3050, pageviews: 8100 },
    { date: "Dec", visitors: 3320, pageviews: 8900 },
  ]

  const socialMediaData = [
    { platform: "Facebook", followers: 42 },
    { platform: "Instagram", followers: 28 },
    { platform: "Twitter", followers: 18 },
    { platform: "LinkedIn", followers: 12 },
  ]

  const conversionData = [
    { source: "Organic Search", conversions: 38 },
    { source: "Social Media", conversions: 24 },
    { source: "Direct", conversions: 18 },
    { source: "Referral", conversions: 12 },
    { source: "Email", conversions: 8 },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Client Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your digital presence</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Website Visitors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,320</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500 font-medium inline-flex items-center">
                <ArrowUpRight className="mr-1 h-4 w-4" /> +8.9%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Social Engagement</CardTitle>
            <Share2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,245</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500 font-medium inline-flex items-center">
                <ArrowUpRight className="mr-1 h-4 w-4" /> +12.3%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500 font-medium inline-flex items-center">
                <ArrowUpRight className="mr-1 h-4 w-4" /> +0.5%
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">SEO Ranking</CardTitle>
            <PieChartIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Page 1</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500 font-medium inline-flex items-center">
                <ArrowUpRight className="mr-1 h-4 w-4" /> +2
              </span>{" "}
              positions up
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="website">Website</TabsTrigger>
          <TabsTrigger value="social">Social Media</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="md:col-span-4">
              <CardHeader>
                <CardTitle>Website Traffic</CardTitle>
                <CardDescription>Visitors and pageviews over time</CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                <LineChart
                  data={websiteTrafficData}
                  index="date"
                  categories={["visitors", "pageviews"]}
                  colors={["#8b5cf6", "#10b981"]}
                  valueFormatter={(value) => `${value.toLocaleString()}`}
                  className="h-[300px]"
                />
              </CardContent>
            </Card>
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>Social Media Followers</CardTitle>
                <CardDescription>Distribution across platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <PieChart
                  data={socialMediaData}
                  index="platform"
                  category="followers"
                  valueFormatter={(value) => `${value}%`}
                  colors={["#4267B2", "#E1306C", "#1DA1F2", "#0077B5"]}
                  className="h-[300px]"
                />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Upcoming Tasks</CardTitle>
                <CardDescription>Your scheduled activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "Content Review", date: "Today, 2:00 PM", status: "upcoming" },
                    { title: "SEO Optimization", date: "Tomorrow, 10:00 AM", status: "upcoming" },
                    { title: "Social Media Post", date: "May 15, 9:00 AM", status: "upcoming" },
                    { title: "Analytics Review", date: "May 18, 11:00 AM", status: "upcoming" },
                  ].map((task, i) => (
                    <div key={i} className="flex items-start gap-4 rounded-md border p-3">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      <div className="flex-1 space-y-1">
                        <p className="font-medium leading-none">{task.title}</p>
                        <p className="text-sm text-muted-foreground">{task.date}</p>
                      </div>
                      <Badge variant="outline">{task.status}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Recent Messages</CardTitle>
                <CardDescription>Latest communications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      sender: "Project Manager",
                      preview: "Website update completed",
                      time: "2 hours ago",
                      unread: true,
                    },
                    { sender: "SEO Specialist", preview: "Keyword research results", time: "Yesterday", unread: false },
                    { sender: "Support Team", preview: "Response to your inquiry", time: "2 days ago", unread: false },
                  ].map((message, i) => (
                    <div key={i} className="flex items-start gap-4 rounded-md border p-3">
                      <MessageSquare className="h-5 w-5 text-muted-foreground" />
                      <div className="flex-1 space-y-1">
                        <p className="font-medium leading-none">{message.sender}</p>
                        <p className="text-sm text-muted-foreground">{message.preview}</p>
                        <p className="text-xs text-muted-foreground">{message.time}</p>
                      </div>
                      {message.unread && <Badge>New</Badge>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Project Status</CardTitle>
                <CardDescription>Current project milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Website Redesign", progress: "In Progress", dueDate: "Jun 15", status: "on-track" },
                    { name: "SEO Campaign", progress: "In Progress", dueDate: "Jul 10", status: "on-track" },
                    { name: "Content Calendar", progress: "Completed", dueDate: "May 5", status: "completed" },
                    { name: "Social Media Strategy", progress: "Planning", dueDate: "Jun 1", status: "upcoming" },
                  ].map((project, i) => (
                    <div key={i} className="flex items-start gap-4 rounded-md border p-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div className="flex-1 space-y-1">
                        <p className="font-medium leading-none">{project.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {project.progress} • Due {project.dueDate}
                        </p>
                      </div>
                      <Badge
                        variant={
                          project.status === "completed"
                            ? "outline"
                            : project.status === "on-track"
                              ? "default"
                              : "secondary"
                        }
                      >
                        {project.status === "completed" ? (
                          <CheckCircle2 className="h-4 w-4" />
                        ) : project.status === "on-track" ? (
                          <Clock className="h-4 w-4" />
                        ) : (
                          <AlertCircle className="h-4 w-4" />
                        )}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="website" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Website Performance</CardTitle>
              <CardDescription>Detailed analytics for your website</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Traffic Overview</h3>
                <LineChart
                  data={websiteTrafficData}
                  index="date"
                  categories={["visitors", "pageviews"]}
                  colors={["#8b5cf6", "#10b981"]}
                  valueFormatter={(value) => `${value.toLocaleString()}`}
                  className="h-[300px]"
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Conversion Sources</h3>
                <BarChart
                  data={conversionData}
                  index="source"
                  categories={["conversions"]}
                  colors={["#8b5cf6"]}
                  valueFormatter={(value) => `${value}`}
                  className="h-[300px]"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium mb-4">Top Pages</h3>
                  <div className="space-y-2">
                    {[
                      { page: "Home", views: 1245, conversion: "3.2%" },
                      { page: "Services", views: 876, conversion: "4.1%" },
                      { page: "About", views: 654, conversion: "2.8%" },
                      { page: "Blog", views: 542, conversion: "3.5%" },
                      { page: "Contact", views: 321, conversion: "5.2%" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-2 border-b">
                        <span>{item.page}</span>
                        <div className="flex gap-4">
                          <span className="text-sm text-muted-foreground">{item.views} views</span>
                          <span className="text-sm">{item.conversion}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Traffic Sources</h3>
                  <div className="space-y-2">
                    {[
                      { source: "Organic Search", percentage: "42%" },
                      { source: "Direct", percentage: "25%" },
                      { source: "Social Media", percentage: "18%" },
                      { source: "Referral", percentage: "10%" },
                      { source: "Email", percentage: "5%" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-2 border-b">
                        <span>{item.source}</span>
                        <span>{item.percentage}</span>
                      </div>
                    ))}
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
              <CardDescription>Analytics across your social platforms</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Facebook</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#4267B2]"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">2,450</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-emerald-500 font-medium inline-flex items-center">
                        <ArrowUpRight className="mr-1 h-4 w-4" /> +5.2%
                      </span>{" "}
                      followers
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Instagram</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#E1306C]"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3,820</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-emerald-500 font-medium inline-flex items-center">
                        <ArrowUpRight className="mr-1 h-4 w-4" /> +8.7%
                      </span>{" "}
                      followers
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Twitter</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#1DA1F2]"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,680</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-emerald-500 font-medium inline-flex items-center">
                        <ArrowUpRight className="mr-1 h-4 w-4" /> +3.4%
                      </span>{" "}
                      followers
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">LinkedIn</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#0077B5]"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">950</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-emerald-500 font-medium inline-flex items-center">
                        <ArrowUpRight className="mr-1 h-4 w-4" /> +6.1%
                      </span>{" "}
                      followers
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Recent Posts Performance</h3>
                <div className="space-y-4">
                  {[
                    {
                      platform: "Instagram",
                      post: "Product showcase",
                      engagement: "High",
                      likes: 245,
                      comments: 32,
                      shares: 18,
                    },
                    {
                      platform: "Facebook",
                      post: "Customer testimonial",
                      engagement: "Medium",
                      likes: 128,
                      comments: 24,
                      shares: 12,
                    },
                    {
                      platform: "Twitter",
                      post: "Industry news",
                      engagement: "Medium",
                      likes: 87,
                      comments: 14,
                      shares: 28,
                    },
                    {
                      platform: "LinkedIn",
                      post: "Company update",
                      engagement: "High",
                      likes: 156,
                      comments: 21,
                      shares: 15,
                    },
                  ].map((post, i) => (
                    <div key={i} className="flex flex-col gap-2 rounded-md border p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{post.platform}</Badge>
                          <span className="font-medium">{post.post}</span>
                        </div>
                        <Badge variant={post.engagement === "High" ? "default" : "secondary"}>
                          {post.engagement} Engagement
                        </Badge>
                      </div>
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span>{post.likes} likes</span>
                        <span>{post.comments} comments</span>
                        <span>{post.shares} shares</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seo" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>SEO Performance</CardTitle>
              <CardDescription>Search engine optimization metrics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Keyword Rankings</CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-emerald-500 font-medium inline-flex items-center">
                        <ArrowUpRight className="mr-1 h-4 w-4" /> +3
                      </span>{" "}
                      from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Organic Traffic</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,245</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-emerald-500 font-medium inline-flex items-center">
                        <ArrowUpRight className="mr-1 h-4 w-4" /> +12.5%
                      </span>{" "}
                      from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Backlinks</CardTitle>
                    <Share2 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">87</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-emerald-500 font-medium inline-flex items-center">
                        <ArrowUpRight className="mr-1 h-4 w-4" /> +5
                      </span>{" "}
                      from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Domain Authority</CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">38</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="text-emerald-500 font-medium inline-flex items-center">
                        <ArrowUpRight className="mr-1 h-4 w-4" /> +2
                      </span>{" "}
                      from last month
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Top Performing Keywords</h3>
                <div className="rounded-md border">
                  <div className="grid grid-cols-5 gap-4 p-4 font-medium border-b">
                    <div>Keyword</div>
                    <div>Position</div>
                    <div>Monthly Searches</div>
                    <div>Traffic</div>
                    <div>Change</div>
                  </div>
                  {[
                    { keyword: "web design agency", position: 3, searches: 1200, traffic: 180, change: "+2" },
                    { keyword: "local web developer", position: 5, searches: 880, traffic: 120, change: "+1" },
                    { keyword: "responsive website design", position: 8, searches: 1500, traffic: 95, change: "-2" },
                    { keyword: "affordable web design", position: 12, searches: 2200, traffic: 75, change: "+4" },
                    { keyword: "business website development", position: 15, searches: 720, traffic: 45, change: "0" },
                  ].map((keyword, i) => (
                    <div key={i} className="grid grid-cols-5 gap-4 p-4 border-b last:border-0">
                      <div>{keyword.keyword}</div>
                      <div>{keyword.position}</div>
                      <div>{keyword.searches}</div>
                      <div>{keyword.traffic}</div>
                      <div
                        className={
                          keyword.change.startsWith("+")
                            ? "text-emerald-500"
                            : keyword.change.startsWith("-")
                              ? "text-rose-500"
                              : "text-muted-foreground"
                        }
                      >
                        {keyword.change}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Projects</CardTitle>
              <CardDescription>Current projects and their status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    name: "Website Redesign",
                    description: "Modernizing your website with a responsive design",
                    startDate: "Apr 15, 2023",
                    dueDate: "Jun 15, 2023",
                    progress: 65,
                    status: "In Progress",
                    team: ["John D.", "Sarah M."],
                  },
                  {
                    name: "SEO Optimization Campaign",
                    description: "Improving search rankings for key terms",
                    startDate: "May 1, 2023",
                    dueDate: "Jul 10, 2023",
                    progress: 40,
                    status: "In Progress",
                    team: ["Mike T.", "Lisa R."],
                  },
                  {
                    name: "Content Marketing Strategy",
                    description: "Developing a content calendar and blog posts",
                    startDate: "Mar 10, 2023",
                    dueDate: "May 5, 2023",
                    progress: 100,
                    status: "Completed",
                    team: ["Emma S.", "David P."],
                  },
                  {
                    name: "Social Media Campaign",
                    description: "Increasing engagement across platforms",
                    startDate: "May 20, 2023",
                    dueDate: "Jun 30, 2023",
                    progress: 25,
                    status: "In Progress",
                    team: ["Alex W.", "Jessica T."],
                  },
                ].map((project, i) => (
                  <div key={i} className="rounded-md border overflow-hidden">
                    <div className="bg-muted/30 p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-lg">{project.name}</h3>
                        <Badge
                          variant={
                            project.status === "Completed"
                              ? "outline"
                              : project.status === "In Progress"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mt-1">{project.description}</p>
                    </div>
                    <div className="p-4 space-y-4">
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Start: </span>
                          <span>{project.startDate}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Due: </span>
                          <span>{project.dueDate}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Team: </span>
                          <span>{project.team.join(", ")}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2.5">
                          <div
                            className="bg-primary h-2.5 rounded-full"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
