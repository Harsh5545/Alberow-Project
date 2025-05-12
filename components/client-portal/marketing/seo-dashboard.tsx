"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { LineChart, BarChart } from "@/components/ui/chart"
import {
  TrendingUp,
  TrendingDown,
  Download,
  Calendar,
  Search,
  Globe,
  ArrowUpRight,
  LinkIcon,
  AlertTriangle,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function SEODashboard() {
  // Mock data for SEO metrics
  const trafficData = [
    { date: "Jan", organic: 1200, direct: 800, referral: 400, social: 300 },
    { date: "Feb", organic: 1350, direct: 850, referral: 450, social: 320 },
    { date: "Mar", organic: 1500, direct: 900, referral: 480, social: 350 },
    { date: "Apr", organic: 1680, direct: 950, referral: 520, social: 380 },
    { date: "May", organic: 1850, direct: 1000, referral: 550, social: 420 },
    { date: "Jun", organic: 2100, direct: 1050, referral: 600, social: 450 },
  ]

  const keywordData = [
    { keyword: "fashion trends 2023", position: 3, volume: 5400, difficulty: 68, change: 2 },
    { keyword: "summer clothing styles", position: 5, volume: 3200, difficulty: 52, change: -1 },
    { keyword: "affordable designer clothes", position: 8, volume: 2800, difficulty: 75, change: 4 },
    { keyword: "sustainable fashion", position: 12, volume: 4100, difficulty: 63, change: 0 },
    { keyword: "online clothing store", position: 15, volume: 8500, difficulty: 82, change: -3 },
  ]

  const pageData = [
    { page: "Home", traffic: 4500, bounce: 32, avgTime: "2:45", keywords: 18 },
    { page: "Summer Collection", traffic: 3200, bounce: 28, avgTime: "3:20", keywords: 24 },
    { page: "About Us", traffic: 1800, bounce: 45, avgTime: "1:50", keywords: 8 },
    { page: "Blog", traffic: 2700, bounce: 35, avgTime: "4:10", keywords: 32 },
    { page: "Contact", traffic: 1200, bounce: 52, avgTime: "1:15", keywords: 5 },
  ]

  const issuesData = [
    { type: "Missing meta descriptions", count: 12, severity: "Medium", impact: "Moderate" },
    { type: "Broken links", count: 8, severity: "High", impact: "Significant" },
    { type: "Slow page speed", count: 5, severity: "High", impact: "Significant" },
    { type: "Duplicate content", count: 3, severity: "Medium", impact: "Moderate" },
    { type: "Missing alt text", count: 24, severity: "Low", impact: "Minor" },
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
            <CardTitle className="text-sm font-medium">Organic Traffic</CardTitle>
            <Search className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,100</div>
            <p className="text-xs flex items-center text-green-500">
              <TrendingUp className="mr-1 h-3 w-3" />
              +13.5% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Position</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.6</div>
            <p className="text-xs flex items-center text-green-500">
              <TrendingUp className="mr-1 h-3 w-3" />
              +1.2 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Indexed Pages</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <p className="text-xs flex items-center text-green-500">
              <TrendingUp className="mr-1 h-3 w-3" />
              +8 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Backlinks</CardTitle>
            <LinkIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">876</div>
            <p className="text-xs flex items-center text-green-500">
              <TrendingUp className="mr-1 h-3 w-3" />
              +32 from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="keywords">Keywords</TabsTrigger>
          <TabsTrigger value="pages">Pages</TabsTrigger>
          <TabsTrigger value="issues">Issues</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Traffic Sources</CardTitle>
              <CardDescription>Website traffic by source</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <LineChart
                  data={trafficData}
                  index="date"
                  categories={["organic", "direct", "referral", "social"]}
                  colors={["#8b5cf6", "#3b82f6", "#10b981", "#f97316"]}
                  valueFormatter={(value) => `${value.toLocaleString()}`}
                  className="h-[300px]"
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>SEO Health Score</CardTitle>
                <CardDescription>Overall website optimization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex flex-col items-center justify-center">
                    <div className="relative h-36 w-36 flex items-center justify-center">
                      <svg className="h-full w-full" viewBox="0 0 100 100">
                        <circle
                          className="text-muted stroke-current"
                          strokeWidth="10"
                          fill="transparent"
                          r="40"
                          cx="50"
                          cy="50"
                        />
                        <circle
                          className="text-purple-500 stroke-current"
                          strokeWidth="10"
                          strokeLinecap="round"
                          fill="transparent"
                          r="40"
                          cx="50"
                          cy="50"
                          strokeDasharray={2 * Math.PI * 40}
                          strokeDashoffset={2 * Math.PI * 40 * (1 - 78 / 100)}
                        />
                      </svg>
                      <div className="absolute text-3xl font-bold">78%</div>
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground">Good</div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div>On-Page SEO</div>
                      <div className="font-medium">82%</div>
                    </div>
                    <Progress value={82} className="h-2" />

                    <div className="flex items-center justify-between text-sm">
                      <div>Technical SEO</div>
                      <div className="font-medium">75%</div>
                    </div>
                    <Progress value={75} className="h-2" />

                    <div className="flex items-center justify-between text-sm">
                      <div>Off-Page SEO</div>
                      <div className="font-medium">68%</div>
                    </div>
                    <Progress value={68} className="h-2" />

                    <div className="flex items-center justify-between text-sm">
                      <div>Content Quality</div>
                      <div className="font-medium">85%</div>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Top Ranking Improvements</CardTitle>
                <CardDescription>Keywords with position changes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {keywordData
                    .filter((kw) => kw.change !== 0)
                    .sort((a, b) => Math.abs(b.change) - Math.abs(a.change))
                    .slice(0, 4)
                    .map((keyword, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{keyword.keyword}</div>
                          <div className="text-xs text-muted-foreground">
                            Position: {keyword.position} • Volume: {keyword.volume.toLocaleString()}
                          </div>
                        </div>
                        <Badge
                          variant="outline"
                          className={
                            keyword.change > 0 ? "border-green-500 text-green-500" : "border-red-500 text-red-500"
                          }
                        >
                          <span className="flex items-center">
                            {keyword.change > 0 ? (
                              <TrendingUp className="mr-1 h-3 w-3" />
                            ) : (
                              <TrendingDown className="mr-1 h-3 w-3" />
                            )}
                            {keyword.change > 0 ? "+" : ""}
                            {keyword.change}
                          </span>
                        </Badge>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="keywords" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Keyword Rankings</CardTitle>
              <CardDescription>Performance of your target keywords</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Keyword</TableHead>
                    <TableHead className="text-right">Position</TableHead>
                    <TableHead className="text-right">Search Volume</TableHead>
                    <TableHead className="text-right">Difficulty</TableHead>
                    <TableHead className="text-right">Change</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {keywordData.map((keyword, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{keyword.keyword}</TableCell>
                      <TableCell className="text-right">{keyword.position}</TableCell>
                      <TableCell className="text-right">{keyword.volume.toLocaleString()}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Progress value={keyword.difficulty} className="h-2 w-16" />
                          <span>{keyword.difficulty}%</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Badge
                          variant="outline"
                          className={
                            keyword.change > 0
                              ? "border-green-500 text-green-500"
                              : keyword.change < 0
                                ? "border-red-500 text-red-500"
                                : "border-yellow-500 text-yellow-500"
                          }
                        >
                          <span className="flex items-center">
                            {keyword.change > 0 ? (
                              <TrendingUp className="mr-1 h-3 w-3" />
                            ) : keyword.change < 0 ? (
                              <TrendingDown className="mr-1 h-3 w-3" />
                            ) : (
                              "="
                            )}
                            {keyword.change > 0 ? "+" : ""}
                            {keyword.change !== 0 ? keyword.change : "0"}
                          </span>
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Keyword Distribution</CardTitle>
                <CardDescription>Rankings by position</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <BarChart
                    data={[
                      { position: "1-3", count: 5 },
                      { position: "4-10", count: 12 },
                      { position: "11-20", count: 18 },
                      { position: "21-50", count: 25 },
                      { position: "51-100", count: 15 },
                    ]}
                    index="position"
                    categories={["count"]}
                    colors={["#8b5cf6"]}
                    valueFormatter={(value) => `${value}`}
                    className="h-[200px]"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Keyword Opportunities</CardTitle>
                <CardDescription>Suggested keywords to target</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { keyword: "eco-friendly fashion", volume: 3800, difficulty: 58, relevance: "High" },
                    { keyword: "fashion subscription box", volume: 2500, difficulty: 62, relevance: "Medium" },
                    { keyword: "affordable luxury clothing", volume: 4200, difficulty: 75, relevance: "High" },
                    { keyword: "fashion trends fall 2023", volume: 6100, difficulty: 70, relevance: "High" },
                  ].map((keyword, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{keyword.keyword}</div>
                        <div className="text-xs text-muted-foreground">
                          Volume: {keyword.volume.toLocaleString()} • Difficulty: {keyword.difficulty}%
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          keyword.relevance === "High"
                            ? "border-green-500 text-green-500"
                            : keyword.relevance === "Medium"
                              ? "border-yellow-500 text-yellow-500"
                              : "border-blue-500 text-blue-500"
                        }
                      >
                        {keyword.relevance}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="pages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Page Performance</CardTitle>
              <CardDescription>SEO metrics by page</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Page</TableHead>
                    <TableHead className="text-right">Organic Traffic</TableHead>
                    <TableHead className="text-right">Bounce Rate</TableHead>
                    <TableHead className="text-right">Avg. Time</TableHead>
                    <TableHead className="text-right">Keywords</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pageData.map((page, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{page.page}</TableCell>
                      <TableCell className="text-right">{page.traffic.toLocaleString()}</TableCell>
                      <TableCell className="text-right">{page.bounce}%</TableCell>
                      <TableCell className="text-right">{page.avgTime}</TableCell>
                      <TableCell className="text-right">{page.keywords}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Content Quality</CardTitle>
                <CardDescription>Content analysis by page</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { page: "Home", score: 85, wordCount: 850, readability: "Good" },
                    { page: "Summer Collection", score: 92, wordCount: 1250, readability: "Excellent" },
                    { page: "About Us", score: 78, wordCount: 620, readability: "Good" },
                    { page: "Blog", score: 88, wordCount: 1800, readability: "Excellent" },
                  ].map((page, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{page.page}</div>
                        <Badge
                          variant="outline"
                          className={
                            page.readability === "Excellent"
                              ? "border-green-500 text-green-500"
                              : page.readability === "Good"
                                ? "border-blue-500 text-blue-500"
                                : "border-yellow-500 text-yellow-500"
                          }
                        >
                          {page.readability}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-muted-foreground">Quality Score: {page.score}%</div>
                        <div className="text-muted-foreground">Words: {page.wordCount}</div>
                      </div>
                      <Progress value={page.score} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Page Speed</CardTitle>
                <CardDescription>Loading performance by page</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { page: "Home", mobile: 72, desktop: 88 },
                    { page: "Summer Collection", mobile: 65, desktop: 82 },
                    { page: "About Us", mobile: 80, desktop: 94 },
                    { page: "Blog", mobile: 68, desktop: 85 },
                  ].map((page, i) => (
                    <div key={i} className="space-y-2">
                      <div className="font-medium">{page.page}</div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <div className="text-muted-foreground">Mobile</div>
                            <div
                              className={
                                page.mobile >= 90
                                  ? "text-green-500"
                                  : page.mobile >= 70
                                    ? "text-yellow-500"
                                    : "text-red-500"
                              }
                            >
                              {page.mobile}/100
                            </div>
                          </div>
                          <Progress value={page.mobile} className="h-2" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <div className="text-muted-foreground">Desktop</div>
                            <div
                              className={
                                page.desktop >= 90
                                  ? "text-green-500"
                                  : page.desktop >= 70
                                    ? "text-yellow-500"
                                    : "text-red-500"
                              }
                            >
                              {page.desktop}/100
                            </div>
                          </div>
                          <Progress value={page.desktop} className="h-2" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="issues" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>SEO Issues</CardTitle>
              <CardDescription>Problems that need attention</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Issue</TableHead>
                    <TableHead className="text-right">Count</TableHead>
                    <TableHead className="text-right">Severity</TableHead>
                    <TableHead className="text-right">Impact</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {issuesData.map((issue, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <AlertTriangle
                            className={
                              issue.severity === "High"
                                ? "h-4 w-4 text-red-500"
                                : issue.severity === "Medium"
                                  ? "h-4 w-4 text-yellow-500"
                                  : "h-4 w-4 text-blue-500"
                            }
                          />
                          <span className="font-medium">{issue.type}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">{issue.count}</TableCell>
                      <TableCell className="text-right">
                        <Badge
                          variant="outline"
                          className={
                            issue.severity === "High"
                              ? "border-red-500 text-red-500"
                              : issue.severity === "Medium"
                                ? "border-yellow-500 text-yellow-500"
                                : "border-blue-500 text-blue-500"
                          }
                        >
                          {issue.severity}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">{issue.impact}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          Fix
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Issue Summary</CardTitle>
                <CardDescription>Overview of SEO issues</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px]">
                  <BarChart
                    data={[
                      { severity: "High", count: 13 },
                      { severity: "Medium", count: 15 },
                      { severity: "Low", count: 24 },
                    ]}
                    index="severity"
                    categories={["count"]}
                    colors={["#ef4444", "#f59e0b", "#3b82f6"]}
                    valueFormatter={(value) => `${value}`}
                    className="h-[200px]"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommendations</CardTitle>
                <CardDescription>Suggested improvements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="font-medium">Fix broken links</div>
                    <div className="text-sm text-muted-foreground">
                      There are 8 broken links on your website that need to be fixed to improve user experience and SEO.
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm">Fix Now</Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="font-medium">Improve page speed</div>
                    <div className="text-sm text-muted-foreground">
                      5 pages have slow loading times that need optimization to improve user experience and SEO
                      rankings.
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm">Fix Now</Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="font-medium">Add meta descriptions</div>
                    <div className="text-sm text-muted-foreground">
                      12 pages are missing meta descriptions which can improve click-through rates from search results.
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm">Fix Now</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
