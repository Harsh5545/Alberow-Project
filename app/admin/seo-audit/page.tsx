"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  Globe,
  Search,
  Smartphone,
  Zap,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  ArrowUpRight,
  Download,
  Share2,
  BarChart4,
  FileText,
  LinkIcon,
  ImageIcon,
  Code,
  Layers,
} from "lucide-react"

export default function SeoAuditPage() {
  const [url, setUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [auditComplete, setAuditComplete] = useState(false)
  const [auditResults, setAuditResults] = useState<any>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!url) return

    setIsLoading(true)

    // Call our SEO audit API endpoint
    try {
      const response = await fetch("/api/seo-audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      })

      if (!response.ok) {
        throw new Error("Failed to perform SEO audit")
      }

      const auditResults = await response.json()
      setAuditResults(auditResults)
      setAuditComplete(true)
    } catch (error) {
      console.error("Error running SEO audit:", error)
      alert("Failed to perform SEO audit. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const resetAudit = () => {
    setAuditComplete(false)
    setAuditResults(null)
    setUrl("")
  }

  return (
    <div className="container mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">SEO Audit Tool</h1>
          <p className="text-muted-foreground">Analyze your website's SEO performance and get actionable insights</p>
        </div>
        {auditComplete && (
          <div className="flex gap-2">
            <Button variant="outline" onClick={resetAudit}>
              New Audit
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Button>
              <Share2 className="h-4 w-4 mr-2" />
              Share Results
            </Button>
          </div>
        )}
      </div>

      {!auditComplete ? (
        <Card className="border-2 border-dashed">
          <CardHeader>
            <CardTitle>Start Your Free SEO Audit</CardTitle>
            <CardDescription>
              Enter your website URL to get a comprehensive SEO analysis and actionable recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Enter your website URL (e.g., https://example.com)"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="pl-10"
                    disabled={isLoading}
                  />
                </div>
                <Button type="submit" disabled={isLoading || !url} className="min-w-[120px]">
                  {isLoading ? (
                    <>
                      <span className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"></span>
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Search className="mr-2 h-4 w-4" />
                      Audit Site
                    </>
                  )}
                </Button>
              </div>
            </form>

            {isLoading && (
              <div className="mt-8 space-y-4">
                <div className="text-center">
                  <h3 className="text-lg font-medium">Analyzing your website...</h3>
                  <p className="text-muted-foreground">This may take a minute or two</p>
                </div>

                <Progress value={45} className="h-2" />

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                  <Card className="p-4 flex flex-col items-center justify-center animate-pulse">
                    <Globe className="h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm">Crawling pages</p>
                  </Card>
                  <Card className="p-4 flex flex-col items-center justify-center animate-pulse">
                    <Zap className="h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm">Checking speed</p>
                  </Card>
                  <Card className="p-4 flex flex-col items-center justify-center animate-pulse">
                    <Smartphone className="h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm">Testing mobile</p>
                  </Card>
                  <Card className="p-4 flex flex-col items-center justify-center animate-pulse">
                    <Search className="h-8 w-8 text-muted-foreground mb-2" />
                    <p className="text-sm">Analyzing SEO</p>
                  </Card>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 items-start">
            <div className="text-sm text-muted-foreground">
              Our SEO audit checks for 25+ critical factors including:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                <span>Meta tags optimization</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                <span>Mobile responsiveness</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                <span>Page speed performance</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                <span>Content quality analysis</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                <span>Broken links detection</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                <span>Keyword optimization</span>
              </div>
            </div>
          </CardFooter>
        </Card>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Overall SEO Score</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-col items-center justify-center py-4">
                  <div className="relative">
                    <svg className="w-32 h-32">
                      <circle
                        className="text-muted stroke-current"
                        strokeWidth="8"
                        stroke="currentColor"
                        fill="transparent"
                        r="56"
                        cx="64"
                        cy="64"
                      />
                      <circle
                        className={`${
                          auditResults.score >= 80
                            ? "text-green-500"
                            : auditResults.score >= 60
                              ? "text-yellow-500"
                              : "text-red-500"
                        } stroke-current`}
                        strokeWidth="8"
                        strokeDasharray={`${auditResults.score * 3.51} 351`}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="56"
                        cx="64"
                        cy="64"
                      />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                      <p className="text-3xl font-bold">{auditResults.score}</p>
                      <p className="text-sm text-muted-foreground">out of 100</p>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <div className="flex items-center">
                      <span className="h-3 w-3 rounded-full bg-red-500 mr-1"></span>
                      <span className="text-xs">Critical: {auditResults.issues.critical}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="h-3 w-3 rounded-full bg-yellow-500 mr-1"></span>
                      <span className="text-xs">Warnings: {auditResults.issues.warnings}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="h-3 w-3 rounded-full bg-green-500 mr-1"></span>
                      <span className="text-xs">Passed: {auditResults.issues.passed}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Performance</span>
                      <span className="text-sm font-medium">{auditResults.performance}%</span>
                    </div>
                    <Progress value={auditResults.performance} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">SEO</span>
                      <span className="text-sm font-medium">{auditResults.seo}%</span>
                    </div>
                    <Progress value={auditResults.seo} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Accessibility</span>
                      <span className="text-sm font-medium">{auditResults.accessibility}%</span>
                    </div>
                    <Progress value={auditResults.accessibility} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Best Practices</span>
                      <span className="text-sm font-medium">{auditResults.bestPractices}%</span>
                    </div>
                    <Progress value={auditResults.bestPractices} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Mobile Friendly</span>
                      <span className="text-sm font-medium">{auditResults.mobile}%</span>
                    </div>
                    <Progress value={auditResults.mobile} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Technical Overview</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-muted-foreground" />
                      <span>Load Time</span>
                    </div>
                    <Badge variant={auditResults.loadTime < "3s" ? "outline" : "destructive"}>
                      {auditResults.loadTime}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Layers className="h-5 w-5 mr-2 text-muted-foreground" />
                      <span>Page Size</span>
                    </div>
                    <Badge variant={auditResults.pageSize < "2MB" ? "outline" : "destructive"}>
                      {auditResults.pageSize}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <ArrowUpRight className="h-5 w-5 mr-2 text-muted-foreground" />
                      <span>Requests</span>
                    </div>
                    <Badge variant={auditResults.requests < 50 ? "outline" : "destructive"}>
                      {auditResults.requests}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Smartphone className="h-5 w-5 mr-2 text-muted-foreground" />
                      <span>Mobile Friendly</span>
                    </div>
                    <Badge variant={auditResults.mobile >= 80 ? "outline" : "destructive"}>
                      {auditResults.mobile >= 80 ? "Yes" : "Needs Improvement"}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 mr-2 text-muted-foreground" />
                      <span>Crawlability</span>
                    </div>
                    <Badge variant="outline">Good</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="issues">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="issues">Issues</TabsTrigger>
              <TabsTrigger value="keywords">Keywords</TabsTrigger>
              <TabsTrigger value="competitors">Competitors</TabsTrigger>
              <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            </TabsList>

            <TabsContent value="issues" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Critical Issues</CardTitle>
                  <CardDescription>These issues require immediate attention</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {auditResults.contentIssues
                      .concat(auditResults.technicalIssues)
                      .filter((issue: any) => issue.type === "critical")
                      .map((issue: any, index: number) => (
                        <div
                          key={index}
                          className="flex items-start p-3 border rounded-md bg-red-50 dark:bg-red-900/20"
                        >
                          <XCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                          <div>
                            <p className="font-medium">{issue.message}</p>
                            <p className="text-sm text-muted-foreground mt-1">
                              This issue can significantly impact your search rankings.
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Warnings</CardTitle>
                  <CardDescription>These issues should be addressed to improve SEO</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {auditResults.metaIssues
                      .concat(auditResults.contentIssues)
                      .concat(auditResults.technicalIssues)
                      .filter((issue: any) => issue.type === "warning")
                      .map((issue: any, index: number) => (
                        <div
                          key={index}
                          className="flex items-start p-3 border rounded-md bg-yellow-50 dark:bg-yellow-900/20"
                        >
                          <AlertTriangle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                          <div>
                            <p className="font-medium">{issue.message}</p>
                            <p className="text-sm text-muted-foreground mt-1">
                              Addressing this issue will help improve your search visibility.
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="keywords" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Keyword Rankings</CardTitle>
                  <CardDescription>Your current positions for top keywords</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {auditResults.topKeywords.map((keyword: any, index: number) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                        <div className="flex items-center">
                          <Search className="h-5 w-5 mr-3 text-muted-foreground" />
                          <span className="font-medium">{keyword.keyword}</span>
                        </div>
                        <Badge variant={keyword.position <= 10 ? "default" : "secondary"}>
                          Position {keyword.position}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <BarChart4 className="h-4 w-4 mr-2" />
                    View Full Keyword Analysis
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="competitors" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Competitor Analysis</CardTitle>
                  <CardDescription>Websites competing for similar keywords</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {auditResults.competitors.map((competitor: string, index: number) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                        <div className="flex items-center">
                          <Globe className="h-5 w-5 mr-3 text-muted-foreground" />
                          <span className="font-medium">{competitor}</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          <ArrowUpRight className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <FileText className="h-4 w-4 mr-2" />
                    Generate Competitor Report
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="recommendations" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recommended Actions</CardTitle>
                  <CardDescription>Prioritized steps to improve your SEO</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 border rounded-md">
                      <div className="flex items-center">
                        <Badge className="mr-2">High Priority</Badge>
                        <h3 className="font-medium">Fix broken links</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Repair the 3 broken links found on your website to improve user experience and SEO.
                      </p>
                      <div className="mt-3 flex items-center text-sm">
                        <LinkIcon className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="text-muted-foreground">Impact: High</span>
                        <span className="mx-2">•</span>
                        <span className="text-muted-foreground">Difficulty: Medium</span>
                      </div>
                    </div>

                    <div className="p-3 border rounded-md">
                      <div className="flex items-center">
                        <Badge className="mr-2">High Priority</Badge>
                        <h3 className="font-medium">Improve content length</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Expand content on key pages to at least 800 words to improve search rankings.
                      </p>
                      <div className="mt-3 flex items-center text-sm">
                        <FileText className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="text-muted-foreground">Impact: High</span>
                        <span className="mx-2">•</span>
                        <span className="text-muted-foreground">Difficulty: Medium</span>
                      </div>
                    </div>

                    <div className="p-3 border rounded-md">
                      <div className="flex items-center">
                        <Badge variant="secondary" className="mr-2">
                          Medium Priority
                        </Badge>
                        <h3 className="font-medium">Add alt text to images</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Add descriptive alt text to 7 images that are currently missing this attribute.
                      </p>
                      <div className="mt-3 flex items-center text-sm">
                        <ImageIcon className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="text-muted-foreground">Impact: Medium</span>
                        <span className="mx-2">•</span>
                        <span className="text-muted-foreground">Difficulty: Easy</span>
                      </div>
                    </div>

                    <div className="p-3 border rounded-md">
                      <div className="flex items-center">
                        <Badge variant="secondary" className="mr-2">
                          Medium Priority
                        </Badge>
                        <h3 className="font-medium">Optimize meta descriptions</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Extend meta descriptions to 150-160 characters and include target keywords.
                      </p>
                      <div className="mt-3 flex items-center text-sm">
                        <Code className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="text-muted-foreground">Impact: Medium</span>
                        <span className="mx-2">•</span>
                        <span className="text-muted-foreground">Difficulty: Easy</span>
                      </div>
                    </div>

                    <div className="p-3 border rounded-md">
                      <div className="flex items-center">
                        <Badge variant="outline" className="mr-2">
                          Low Priority
                        </Badge>
                        <h3 className="font-medium">Fix JavaScript errors</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Resolve JavaScript errors on the homepage to improve user experience and page performance.
                      </p>
                      <div className="mt-3 flex items-center text-sm">
                        <Code className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="text-muted-foreground">Impact: Low</span>
                        <span className="mx-2">•</span>
                        <span className="text-muted-foreground">Difficulty: Hard</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Generate Action Plan</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  )
}
