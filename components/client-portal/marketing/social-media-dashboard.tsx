"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { LineChart, BarChart, PieChart } from "@/components/ui/chart"
import {
  TrendingUp,
  TrendingDown,
  Download,
  Calendar,
  Share2,
  MessageSquare,
  Heart,
  Eye,
  Users,
  BarChart2,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SocialMediaDashboard() {
  // Mock data for social media metrics
  const overviewData = [
    { date: "Jan", followers: 1200, engagement: 320, reach: 5600 },
    { date: "Feb", followers: 1350, engagement: 380, reach: 6200 },
    { date: "Mar", followers: 1500, engagement: 420, reach: 7100 },
    { date: "Apr", followers: 1680, engagement: 490, reach: 8300 },
    { date: "May", followers: 1850, engagement: 550, reach: 9200 },
    { date: "Jun", followers: 2100, engagement: 620, reach: 10500 },
  ]

  const platformData = [
    { platform: "Facebook", followers: 2500, engagement: 320, reach: 12000, growth: 5.2 },
    { platform: "Instagram", followers: 3800, engagement: 560, reach: 18000, growth: 8.7 },
    { platform: "Twitter", followers: 1200, engagement: 180, reach: 7500, growth: 3.1 },
    { platform: "LinkedIn", followers: 950, engagement: 120, reach: 4200, growth: 6.5 },
    { platform: "TikTok", followers: 1800, engagement: 420, reach: 22000, growth: 12.3 },
  ]

  const contentData = [
    { type: "Images", percentage: 45 },
    { type: "Videos", percentage: 30 },
    { type: "Carousels", percentage: 15 },
    { type: "Text", percentage: 10 },
  ]

  const topPosts = [
    {
      platform: "Instagram",
      date: "Jun 12, 2023",
      content: "Summer Collection Launch",
      engagement: 1250,
      reach: 8500,
      likes: 980,
      comments: 145,
      shares: 320,
    },
    {
      platform: "Facebook",
      date: "May 28, 2023",
      content: "Customer Testimonial Video",
      engagement: 870,
      reach: 6200,
      likes: 650,
      comments: 95,
      shares: 210,
    },
    {
      platform: "TikTok",
      date: "Jun 5, 2023",
      content: "Behind the Scenes",
      engagement: 2100,
      reach: 15000,
      likes: 1800,
      comments: 320,
      shares: 450,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-4">
          <Select defaultValue="last30days">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last7days">Last 7 days</SelectItem>
              <SelectItem value="last30days">Last 30 days</SelectItem>
              <SelectItem value="last90days">Last 90 days</SelectItem>
              <SelectItem value="lastYear">Last year</SelectItem>
              <SelectItem value="custom">Custom range</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Calendar className="h-4 w-4" />
          </Button>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" /> Export Report
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Followers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10,250</div>
            <p className="text-xs flex items-center text-green-500">
              <TrendingUp className="mr-1 h-3 w-3" />
              +7.2% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8%</div>
            <p className="text-xs flex items-center text-green-500">
              <TrendingUp className="mr-1 h-3 w-3" />
              +0.6% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Reach</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">63,700</div>
            <p className="text-xs flex items-center text-green-500">
              <TrendingUp className="mr-1 h-3 w-3" />
              +12.3% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Engagement</CardTitle>
            <BarChart2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">492</div>
            <p className="text-xs flex items-center text-red-500">
              <TrendingDown className="mr-1 h-3 w-3" />
              -2.1% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="platforms">Platforms</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Growth Trends</CardTitle>
              <CardDescription>Followers, engagement and reach over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <LineChart
                  data={overviewData}
                  index="date"
                  categories={["followers", "engagement", "reach"]}
                  colors={["#8b5cf6", "#ec4899", "#3b82f6"]}
                  valueFormatter={(value) => `${value.toLocaleString()}`}
                  className="h-[300px]"
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Platforms</CardTitle>
                <CardDescription>Based on engagement rate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {platformData.slice(0, 3).map((platform, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            platform.platform === "Facebook"
                              ? "bg-blue-100 text-blue-600"
                              : platform.platform === "Instagram"
                                ? "bg-pink-100 text-pink-600"
                                : platform.platform === "Twitter"
                                  ? "bg-sky-100 text-sky-600"
                                  : platform.platform === "LinkedIn"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {platform.platform[0]}
                        </div>
                        <div>
                          <div className="font-medium">{platform.platform}</div>
                          <div className="text-xs text-muted-foreground">
                            {platform.followers.toLocaleString()} followers
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">
                          {((platform.engagement / platform.followers) * 100).toFixed(1)}%
                        </div>
                        <div className="text-xs flex items-center justify-end text-green-500">
                          <TrendingUp className="mr-1 h-3 w-3" />
                          {platform.growth}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Content Distribution</CardTitle>
                <CardDescription>Types of content posted</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <PieChart
                    data={contentData}
                    index="type"
                    categories={["percentage"]}
                    colors={["#8b5cf6", "#ec4899", "#3b82f6", "#10b981"]}
                    valueFormatter={(value) => `${value}%`}
                    className="h-[200px]"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="platforms" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Platform Performance</CardTitle>
              <CardDescription>Comparison across social media platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <BarChart
                  data={platformData}
                  index="platform"
                  categories={["followers", "engagement", "reach"]}
                  colors={["#8b5cf6", "#ec4899", "#3b82f6"]}
                  valueFormatter={(value) => `${value.toLocaleString()}`}
                  className="h-[300px]"
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {platformData.map((platform, i) => (
              <Card key={i}>
                <CardHeader
                  className={`pb-2 ${
                    platform.platform === "Facebook"
                      ? "bg-blue-50 dark:bg-blue-950"
                      : platform.platform === "Instagram"
                        ? "bg-pink-50 dark:bg-pink-950"
                        : platform.platform === "Twitter"
                          ? "bg-sky-50 dark:bg-sky-950"
                          : platform.platform === "LinkedIn"
                            ? "bg-blue-50 dark:bg-blue-950"
                            : platform.platform === "TikTok"
                              ? "bg-slate-50 dark:bg-slate-950"
                              : ""
                  }`}
                >
                  <CardTitle>{platform.platform}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Followers</div>
                      <div className="text-xl font-bold">{platform.followers.toLocaleString()}</div>
                      <div className="text-xs flex items-center text-green-500">
                        <TrendingUp className="mr-1 h-3 w-3" />
                        {platform.growth}%
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Engagement</div>
                      <div className="text-xl font-bold">{platform.engagement.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">
                        {((platform.engagement / platform.followers) * 100).toFixed(1)}% rate
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Reach</div>
                      <div className="text-xl font-bold">{platform.reach.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Growth</div>
                      <div className="text-xl font-bold">{platform.growth}%</div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="content" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Posts</CardTitle>
              <CardDescription>Your most engaging content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {topPosts.map((post, i) => (
                  <div key={i} className="border-b pb-6 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            post.platform === "Facebook"
                              ? "bg-blue-100 text-blue-600"
                              : post.platform === "Instagram"
                                ? "bg-pink-100 text-pink-600"
                                : post.platform === "Twitter"
                                  ? "bg-sky-100 text-sky-600"
                                  : post.platform === "LinkedIn"
                                    ? "bg-blue-100 text-blue-800"
                                    : post.platform === "TikTok"
                                      ? "bg-slate-100 text-slate-600"
                                      : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {post.platform[0]}
                        </div>
                        <div>
                          <div className="font-medium">{post.platform}</div>
                          <div className="text-xs text-muted-foreground">{post.date}</div>
                        </div>
                      </div>
                      <Badge variant="outline" className="border-green-500 text-green-500">
                        Top Performer
                      </Badge>
                    </div>

                    <div className="font-medium mb-2">{post.content}</div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex items-center gap-2">
                        <Heart className="h-4 w-4 text-pink-500" />
                        <div>
                          <div className="text-sm font-medium">{post.likes.toLocaleString()}</div>
                          <div className="text-xs text-muted-foreground">Likes</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-blue-500" />
                        <div>
                          <div className="text-sm font-medium">{post.comments.toLocaleString()}</div>
                          <div className="text-xs text-muted-foreground">Comments</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Share2 className="h-4 w-4 text-green-500" />
                        <div>
                          <div className="text-sm font-medium">{post.shares.toLocaleString()}</div>
                          <div className="text-xs text-muted-foreground">Shares</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <div className="text-sm text-muted-foreground">Total Engagement</div>
                        <div className="font-medium">{post.engagement.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Reach</div>
                        <div className="font-medium">{post.reach.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Engagement Rate</div>
                        <div className="font-medium">{((post.engagement / post.reach) * 100).toFixed(1)}%</div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Post
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audience" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Audience Demographics</CardTitle>
              <CardDescription>Insights about your followers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                Audience demographics visualization
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Age Distribution</CardTitle>
                <CardDescription>Age groups of your audience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center bg-muted/20 rounded-md">
                  Age distribution chart
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Geographic Distribution</CardTitle>
                <CardDescription>Where your audience is located</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center bg-muted/20 rounded-md">
                  Geographic distribution map
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
