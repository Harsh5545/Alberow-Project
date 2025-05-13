"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Search,
  Plus,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  CalendarIcon,
  ImageIcon,
  Video,
  Link,
  MoreHorizontal,
  Edit,
  Trash,
  Eye,
  Send,
  Clock,
  BarChart,
  Users,
} from "lucide-react"
import { format } from "date-fns"

const socialAccounts = [
  {
    id: "1",
    platform: "Instagram",
    handle: "@alberow_digital",
    followers: 5240,
    engagement: "3.2%",
    icon: Instagram,
    color: "bg-pink-500",
  },
  {
    id: "2",
    platform: "Twitter",
    handle: "@alberow_digital",
    followers: 3850,
    engagement: "2.1%",
    icon: Twitter,
    color: "bg-blue-400",
  },
  {
    id: "3",
    platform: "Facebook",
    handle: "Alberow Digital Agency",
    followers: 8750,
    engagement: "1.8%",
    icon: Facebook,
    color: "bg-blue-600",
  },
  {
    id: "4",
    platform: "LinkedIn",
    handle: "Alberow Digital Agency",
    followers: 4320,
    engagement: "2.5%",
    icon: Linkedin,
    color: "bg-blue-700",
  },
]

const scheduledPosts = [
  {
    id: "1",
    content:
      "Check out our latest case study on how we helped StyleShop increase their online sales by 40%! #ecommerce #webdevelopment",
    platforms: ["Twitter", "LinkedIn"],
    scheduledDate: "2023-06-01T10:00:00",
    status: "Scheduled",
    media: true,
  },
  {
    id: "2",
    content:
      "Excited to announce our new Social Media Management service! Let us help you grow your online presence. Contact us for details.",
    platforms: ["Instagram", "Facebook", "Twitter", "LinkedIn"],
    scheduledDate: "2023-06-02T14:30:00",
    status: "Scheduled",
    media: true,
  },
  {
    id: "3",
    content:
      "The future of web development is here. Read our latest blog post on emerging trends and technologies that are shaping the industry.",
    platforms: ["LinkedIn", "Twitter"],
    scheduledDate: "2023-06-05T09:00:00",
    status: "Draft",
    media: false,
  },
]

export function SocialMediaMarketing() {
  const [activeTab, setActiveTab] = useState("compose")
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [postContent, setPostContent] = useState("")
  const [selectedPlatforms, setSelectedPlatforms] = useState({
    instagram: false,
    twitter: false,
    facebook: false,
    linkedin: false,
  })

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold">Social Media Marketing</h2>
          <p className="text-muted-foreground">Manage your social media content and campaigns</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Tabs defaultValue="compose" onValueChange={setActiveTab} className="space-y-4">
            <TabsList className="grid grid-cols-4 h-auto">
              <TabsTrigger value="compose" className="py-2">
                Compose
              </TabsTrigger>
              <TabsTrigger value="scheduled" className="py-2">
                Scheduled
              </TabsTrigger>
              <TabsTrigger value="published" className="py-2">
                Published
              </TabsTrigger>
              <TabsTrigger value="analytics" className="py-2">
                Analytics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="compose">
              <Card>
                <CardHeader>
                  <CardTitle>Create New Post</CardTitle>
                  <CardDescription>Compose and schedule your social media content</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="post-content">Post Content</Label>
                    <Textarea
                      id="post-content"
                      placeholder="What would you like to share?"
                      className="min-h-[120px] mt-1"
                      value={postContent}
                      onChange={(e) => setPostContent(e.target.value)}
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>{postContent.length} characters</span>
                      <span>
                        {280 - postContent.length >= 0
                          ? `${280 - postContent.length} characters remaining for Twitter`
                          : `${Math.abs(280 - postContent.length)} characters over Twitter limit`}
                      </span>
                    </div>
                  </div>

                  <div>
                    <Label>Add Media</Label>
                    <div className="flex gap-2 mt-1">
                      <Button variant="outline" size="sm">
                        <ImageIcon className="mr-2 h-4 w-4" /> Image
                      </Button>
                      <Button variant="outline" size="sm">
                        <Video className="mr-2 h-4 w-4" /> Video
                      </Button>
                      <Button variant="outline" size="sm">
                        <Link className="mr-2 h-4 w-4" /> Link
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Label>Select Platforms</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-1">
                      {socialAccounts.map((account) => (
                        <div
                          key={account.id}
                          className={`border rounded-md p-3 cursor-pointer transition-colors ${
                            selectedPlatforms[account.platform.toLowerCase()]
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                          onClick={() =>
                            setSelectedPlatforms({
                              ...selectedPlatforms,
                              [account.platform.toLowerCase()]: !selectedPlatforms[account.platform.toLowerCase()],
                            })
                          }
                        >
                          <div className="flex items-center gap-2">
                            <div className={`w-8 h-8 rounded-full ${account.color} flex items-center justify-center`}>
                              <account.icon className="h-4 w-4 text-white" />
                            </div>
                            <span className="font-medium">{account.platform}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label>Schedule</Label>
                    <div className="flex flex-col sm:flex-row gap-4 mt-1">
                      <div className="flex-1">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start">
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {selectedDate ? format(selectedDate, "PPP") : "Select date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="flex-1">
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="9:00">9:00 AM</SelectItem>
                            <SelectItem value="12:00">12:00 PM</SelectItem>
                            <SelectItem value="15:00">3:00 PM</SelectItem>
                            <SelectItem value="18:00">6:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Save as Draft</Button>
                  <div className="flex gap-2">
                    <Button variant="outline">Preview</Button>
                    <Button>Schedule Post</Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="scheduled">
              <Card>
                <CardHeader>
                  <CardTitle>Scheduled Posts</CardTitle>
                  <CardDescription>Manage your upcoming social media content</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Content</TableHead>
                          <TableHead>Platforms</TableHead>
                          <TableHead>Scheduled For</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="w-[100px]"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {scheduledPosts.map((post) => (
                          <TableRow key={post.id}>
                            <TableCell>
                              <div className="flex items-start gap-2">
                                {post.media && (
                                  <div className="w-10 h-10 bg-muted rounded flex items-center justify-center shrink-0">
                                    <ImageIcon className="h-4 w-4 text-muted-foreground" />
                                  </div>
                                )}
                                <div className="line-clamp-2 text-sm">{post.content}</div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-1">
                                {post.platforms.map((platform) => {
                                  const account = socialAccounts.find((acc) => acc.platform === platform)
                                  return (
                                    <div
                                      key={platform}
                                      className={`w-6 h-6 rounded-full ${account?.color} flex items-center justify-center`}
                                      title={platform}
                                    >
                                      <account.icon className="h-3 w-3 text-white" />
                                    </div>
                                  )
                                })}
                              </div>
                            </TableCell>
                            <TableCell>
                              {post.scheduledDate
                                ? format(new Date(post.scheduledDate), "MMM d, yyyy 'at' h:mm a")
                                : "Not scheduled"}
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant={post.status === "Scheduled" ? "secondary" : "outline"}
                                className={post.status === "Draft" ? "bg-muted" : ""}
                              >
                                {post.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-1">
                                <Button variant="ghost" size="icon">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon">
                                  <Trash className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="published">
              <Card>
                <CardHeader>
                  <CardTitle>Published Posts</CardTitle>
                  <CardDescription>View and analyze your published content</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between mb-4">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search published posts" className="pl-8 w-[300px]" />
                    </div>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by platform" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Platforms</SelectItem>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="twitter">Twitter</SelectItem>
                        <SelectItem value="facebook">Facebook</SelectItem>
                        <SelectItem value="linkedin">LinkedIn</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <div className="border rounded-md p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center shrink-0">
                            <Twitter className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">Twitter</span>
                              <span className="text-xs text-muted-foreground">May 25, 2023 at 2:30 PM</span>
                            </div>
                            <p className="mt-1">
                              Excited to announce our new Social Media Management service! Let us help you grow your
                              online presence. Contact us for details.
                            </p>
                            <div className="flex gap-4 mt-2">
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Eye className="h-4 w-4" /> 1,245
                              </div>
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <BarChart className="h-4 w-4" /> 3.2% engagement
                              </div>
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="border rounded-md p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center shrink-0">
                            <Instagram className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">Instagram</span>
                              <span className="text-xs text-muted-foreground">May 20, 2023 at 10:00 AM</span>
                            </div>
                            <p className="mt-1">
                              Check out our latest case study on how we helped StyleShop increase their online sales by
                              40%! #ecommerce #webdevelopment
                            </p>
                            <div className="mt-2 w-full h-40 bg-muted rounded-md flex items-center justify-center">
                              <ImageIcon className="h-8 w-8 text-muted-foreground" />
                            </div>
                            <div className="flex gap-4 mt-2">
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Eye className="h-4 w-4" /> 2,890
                              </div>
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <BarChart className="h-4 w-4" /> 4.5% engagement
                              </div>
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics">
              <Card>
                <CardHeader>
                  <CardTitle>Social Media Analytics</CardTitle>
                  <CardDescription>Track performance across all your social platforms</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <Users className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                          <h3 className="text-2xl font-bold">22,160</h3>
                          <p className="text-sm text-muted-foreground">Total Followers</p>
                          <div className="text-xs text-green-600 mt-1">+5.3% from last month</div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <Eye className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                          <h3 className="text-2xl font-bold">45,290</h3>
                          <p className="text-sm text-muted-foreground">Total Impressions</p>
                          <div className="text-xs text-green-600 mt-1">+12.8% from last month</div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <BarChart className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                          <h3 className="text-2xl font-bold">2.4%</h3>
                          <p className="text-sm text-muted-foreground">Avg. Engagement Rate</p>
                          <div className="text-xs text-green-600 mt-1">+0.3% from last month</div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <Clock className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                          <h3 className="text-2xl font-bold">18</h3>
                          <p className="text-sm text-muted-foreground">Posts This Month</p>
                          <div className="text-xs text-red-600 mt-1">-2 from last month</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <h3 className="font-semibold mb-4">Platform Performance</h3>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Platform</TableHead>
                          <TableHead>Followers</TableHead>
                          <TableHead>Engagement Rate</TableHead>
                          <TableHead>Growth</TableHead>
                          <TableHead>Top Post</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {socialAccounts.map((account) => (
                          <TableRow key={account.id}>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <div
                                  className={`w-8 h-8 rounded-full ${account.color} flex items-center justify-center`}
                                >
                                  <account.icon className="h-4 w-4 text-white" />
                                </div>
                                <span className="font-medium">{account.platform}</span>
                              </div>
                            </TableCell>
                            <TableCell>{account.followers.toLocaleString()}</TableCell>
                            <TableCell>{account.engagement}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1 text-green-600">
                                <span>+{Math.floor(Math.random() * 10)}%</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Button variant="outline" size="sm">
                                View
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Connected Accounts</CardTitle>
              <CardDescription>Manage your social media accounts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {socialAccounts.map((account) => (
                <div key={account.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full ${account.color} flex items-center justify-center`}>
                      <account.icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">{account.platform}</div>
                      <div className="text-xs text-muted-foreground">{account.handle}</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Manage
                  </Button>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                <Plus className="mr-2 h-4 w-4" /> Connect New Account
              </Button>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Bulk Actions</CardTitle>
              <CardDescription>Manage multiple accounts at once</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                <Send className="mr-2 h-4 w-4" /> Send to Multiple Platforms
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="mr-2 h-4 w-4" /> Schedule Content Calendar
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <BarChart className="mr-2 h-4 w-4" /> Generate Performance Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
