"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Filter, Share, RefreshCw } from "lucide-react"
import { OverviewStats } from "@/components/admin/analytics/overview-stats"
import { TrafficChart } from "@/components/admin/analytics/traffic-chart"
import { SourcesChart } from "@/components/admin/analytics/sources-chart"
import { DevicesChart } from "@/components/admin/analytics/devices-chart"
import { ConversionsChart } from "@/components/admin/analytics/conversions-chart"
import { TopPages } from "@/components/admin/analytics/top-pages"
import { GeographyMap } from "@/components/admin/analytics/geography-map"
import { SocialPerformance } from "@/components/admin/analytics/social-performance"
import { CampaignPerformance } from "@/components/admin/analytics/campaign-performance"
import { DateRangePicker } from "@/components/ui/date-range-picker"
import type { DateRange } from "react-day-picker"

export default function AnalyticsPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [dateRange, setDateRange] = useState<DateRange>({
    from: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    to: new Date(),
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Comprehensive insights into your website and marketing performance</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <DateRangePicker date={dateRange} setDate={setDateRange} />
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <RefreshCw className="h-4 w-4" />
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" /> Export
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <div className="flex justify-between">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full md:w-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="audience">Audience</TabsTrigger>
            <TabsTrigger value="acquisition">Acquisition</TabsTrigger>
            <TabsTrigger value="behavior">Behavior</TabsTrigger>
            <TabsTrigger value="conversions">Conversions</TabsTrigger>
          </TabsList>
          <div className="hidden md:flex items-center gap-2">
            <Select defaultValue="realtime">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Data Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="realtime">Real-time Data</SelectItem>
                <SelectItem value="historical">Historical Data</SelectItem>
                <SelectItem value="predicted">Predicted Trends</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Share className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <TabsContent value="overview" className="space-y-4">
          <OverviewStats />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="md:col-span-4">
              <CardHeader>
                <CardTitle>Traffic Overview</CardTitle>
                <CardDescription>Website traffic over time</CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                <TrafficChart />
              </CardContent>
            </Card>
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>Traffic Sources</CardTitle>
                <CardDescription>Where your visitors come from</CardDescription>
              </CardHeader>
              <CardContent>
                <SourcesChart />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle>Devices</CardTitle>
                <CardDescription>Visitor device breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <DevicesChart />
              </CardContent>
            </Card>
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Top Pages</CardTitle>
                <CardDescription>Most visited pages on your website</CardDescription>
              </CardHeader>
              <CardContent>
                <TopPages />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="audience" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Demographics</CardTitle>
                <CardDescription>Age and gender distribution</CardDescription>
              </CardHeader>
              <CardContent className="px-2">
                {/* Demographics chart would go here */}
                <div className="h-80 flex items-center justify-center bg-muted/20 rounded-md">
                  Demographics visualization
                </div>
              </CardContent>
            </Card>
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Geographic Distribution</CardTitle>
                <CardDescription>Where your visitors are located</CardDescription>
              </CardHeader>
              <CardContent>
                <GeographyMap />
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>User Behavior</CardTitle>
              <CardDescription>How users interact with your site</CardDescription>
            </CardHeader>
            <CardContent>
              {/* User behavior metrics would go here */}
              <div className="h-80 flex items-center justify-center bg-muted/20 rounded-md">
                User behavior visualization
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="acquisition" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Channel Performance</CardTitle>
              <CardDescription>Performance metrics by acquisition channel</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Channel performance metrics would go here */}
              <div className="h-80 flex items-center justify-center bg-muted/20 rounded-md">
                Channel performance visualization
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Social Media Performance</CardTitle>
              <CardDescription>Engagement across social platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <SocialPerformance />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Campaign Performance</CardTitle>
              <CardDescription>Results from marketing campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <CampaignPerformance />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="behavior" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Flow</CardTitle>
              <CardDescription>How users navigate through your site</CardDescription>
            </CardHeader>
            <CardContent>
              {/* User flow visualization would go here */}
              <div className="h-80 flex items-center justify-center bg-muted/20 rounded-md">
                User flow visualization
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Page Load Time</CardTitle>
                <CardDescription>Performance metrics for your pages</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Page load time metrics would go here */}
                <div className="h-80 flex items-center justify-center bg-muted/20 rounded-md">
                  Page load time visualization
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>User Engagement</CardTitle>
                <CardDescription>Time on page and interaction metrics</CardDescription>
              </CardHeader>
              <CardContent>
                {/* User engagement metrics would go here */}
                <div className="h-80 flex items-center justify-center bg-muted/20 rounded-md">
                  User engagement visualization
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="conversions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Conversion Rates</CardTitle>
              <CardDescription>Conversion metrics over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ConversionsChart />
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Goal Completions</CardTitle>
                <CardDescription>Tracking of defined conversion goals</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Goal completions metrics would go here */}
                <div className="h-80 flex items-center justify-center bg-muted/20 rounded-md">
                  Goal completions visualization
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Conversion Funnel</CardTitle>
                <CardDescription>Visualize your conversion path</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Conversion funnel visualization would go here */}
                <div className="h-80 flex items-center justify-center bg-muted/20 rounded-md">
                  Conversion funnel visualization
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
