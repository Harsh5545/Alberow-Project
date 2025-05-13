"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, CalendarIcon, Filter, ChevronLeft, ChevronRight } from "lucide-react"
import { format, addMonths, subMonths } from "date-fns"

export function ContentCalendar() {
  const [date, setDate] = useState(new Date())
  const [view, setView] = useState("month")
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1))
  }

  // Sample content calendar data
  const events = [
    {
      id: "1",
      title: "Monthly Newsletter",
      date: new Date(2023, 5, 15), // June 15, 2023
      type: "Email",
      status: "Scheduled",
    },
    {
      id: "2",
      title: "New Service Announcement",
      date: new Date(2023, 5, 20), // June 20, 2023
      type: "Social",
      platforms: ["Instagram", "Facebook", "Twitter", "LinkedIn"],
      status: "Draft",
    },
    {
      id: "3",
      title: "Case Study: E-Commerce Success",
      date: new Date(2023, 5, 10), // June 10, 2023
      type: "Blog",
      status: "Published",
    },
    {
      id: "4",
      title: "Summer Promotion",
      date: new Date(2023, 5, 25), // June 25, 2023
      type: "Social",
      platforms: ["Instagram", "Facebook"],
      status: "Scheduled",
    },
    {
      id: "5",
      title: "Webinar: Digital Marketing Strategies",
      date: new Date(2023, 6, 5), // July 5, 2023
      type: "Event",
      status: "Scheduled",
    },
  ]

  // Function to get events for a specific date
  const getEventsForDate = (date) => {
    return events.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear(),
    )
  }

  // Custom day renderer for the calendar
  const renderDay = (day) => {
    const dayEvents = getEventsForDate(day)
    return (
      <div className="w-full h-full">
        <div className="text-center">{format(day, "d")}</div>
        {dayEvents.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-1 justify-center">
            {dayEvents.map((event) => (
              <div
                key={event.id}
                className={`w-2 h-2 rounded-full ${
                  event.type === "Email"
                    ? "bg-blue-500"
                    : event.type === "Social"
                      ? "bg-pink-500"
                      : event.type === "Blog"
                        ? "bg-purple-500"
                        : "bg-green-500"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold">Content Calendar</h2>
          <p className="text-muted-foreground">Plan and schedule your content across all channels</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" /> Filter
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Content
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" onClick={prevMonth}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <h3 className="font-semibold text-lg">{format(currentMonth, "MMMM yyyy")}</h3>
                  <Button variant="outline" size="icon" onClick={nextMonth}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                <Tabs defaultValue="month" onValueChange={setView}>
                  <TabsList>
                    <TabsTrigger value="month">Month</TabsTrigger>
                    <TabsTrigger value="week">Week</TabsTrigger>
                    <TabsTrigger value="list">List</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent>
              <TabsContent value="month" className="mt-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                  month={currentMonth}
                  renderDay={renderDay}
                />
              </TabsContent>
              <TabsContent value="week" className="mt-0">
                <div className="rounded-md border p-4">
                  <div className="grid grid-cols-7 gap-2">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                      <div key={day} className="text-center font-medium text-sm py-1">
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-2 mt-2">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div key={i} className="border rounded-md p-2 min-h-[120px]">
                        <div className="text-sm font-medium mb-1">{i + 1}</div>
                        {i === 2 && (
                          <div className="bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 text-xs p-1 rounded mb-1">
                            Monthly Newsletter
                          </div>
                        )}
                        {i === 4 && (
                          <div className="bg-pink-100 dark:bg-pink-900/20 text-pink-800 dark:text-pink-300 text-xs p-1 rounded">
                            Social: New Service
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="list" className="mt-0">
                <div className="rounded-md border divide-y">
                  {events
                    .sort((a, b) => a.date.getTime() - b.date.getTime())
                    .map((event) => (
                      <div key={event.id} className="p-3 flex justify-between items-center">
                        <div>
                          <div className="font-medium">{event.title}</div>
                          <div className="text-sm text-muted-foreground">{format(event.date, "MMMM d, yyyy")}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="outline"
                            className={
                              event.type === "Email"
                                ? "border-blue-200 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800"
                                : event.type === "Social"
                                  ? "border-pink-200 bg-pink-50 text-pink-700 dark:bg-pink-900/20 dark:text-pink-300 dark:border-pink-800"
                                  : event.type === "Blog"
                                    ? "border-purple-200 bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800"
                                    : "border-green-200 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800"
                            }
                          >
                            {event.type}
                          </Badge>
                          <Badge
                            variant={
                              event.status === "Published"
                                ? "default"
                                : event.status === "Scheduled"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {event.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Selected Date</CardTitle>
              <CardDescription>{date ? format(date, "MMMM d, yyyy") : "No date selected"}</CardDescription>
            </CardHeader>
            <CardContent>
              {date && (
                <>
                  {getEventsForDate(date).length > 0 ? (
                    <div className="space-y-3">
                      {getEventsForDate(date).map((event) => (
                        <div key={event.id} className="border rounded-md p-3">
                          <div className="font-medium">{event.title}</div>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge
                              variant="outline"
                              className={
                                event.type === "Email"
                                  ? "border-blue-200 bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800"
                                  : event.type === "Social"
                                    ? "border-pink-200 bg-pink-50 text-pink-700 dark:bg-pink-900/20 dark:text-pink-300 dark:border-pink-800"
                                    : event.type === "Blog"
                                      ? "border-purple-200 bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800"
                                      : "border-green-200 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800"
                              }
                            >
                              {event.type}
                            </Badge>
                            <Badge
                              variant={
                                event.status === "Published"
                                  ? "default"
                                  : event.status === "Scheduled"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {event.status}
                            </Badge>
                          </div>
                          {event.platforms && (
                            <div className="flex gap-1 mt-2">
                              {event.platforms.map((platform) => (
                                <Badge key={platform} variant="outline" className="text-xs">
                                  {platform}
                                </Badge>
                              ))}
                            </div>
                          )}
                          <div className="flex gap-2 mt-3">
                            <Button variant="outline" size="sm">
                              Edit
                            </Button>
                            <Button size="sm">View</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-6">
                      <CalendarIcon className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                      <h3 className="font-medium mb-1">No Content Scheduled</h3>
                      <p className="text-sm text-muted-foreground mb-4">There's no content scheduled for this date.</p>
                      <Button>Add Content</Button>
                    </div>
                  )}
                </>
              )}
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Content Types</CardTitle>
              <CardDescription>Filter by content type</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2" />
                  <span>Email Campaigns</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-pink-500 mr-2" />
                  <span>Social Media Posts</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-purple-500 mr-2" />
                  <span>Blog Articles</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2" />
                  <span>Events & Webinars</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="email">Email Campaigns</SelectItem>
                  <SelectItem value="social">Social Media Posts</SelectItem>
                  <SelectItem value="blog">Blog Articles</SelectItem>
                  <SelectItem value="event">Events & Webinars</SelectItem>
                </SelectContent>
              </Select>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
