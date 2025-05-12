import { NextResponse } from "next/server"

// Mock data for analytics
const analyticsData = {
  overview: {
    totalVisits: 24689,
    uniqueVisitors: 18453,
    pageViews: 67821,
    bounceRate: 32.5,
    avgSessionDuration: "2m 47s",
    conversionRate: 3.8,
  },
  trafficSources: [
    { source: "Organic Search", percentage: 42, value: 10369 },
    { source: "Direct", percentage: 25, value: 6172 },
    { source: "Social Media", percentage: 18, value: 4444 },
    { source: "Referral", percentage: 10, value: 2469 },
    { source: "Email", percentage: 5, value: 1235 },
  ],
  visitorsByDevice: [
    { device: "Mobile", percentage: 58, value: 14320 },
    { device: "Desktop", percentage: 36, value: 8888 },
    { device: "Tablet", percentage: 6, value: 1481 },
  ],
  visitorsByCountry: [
    { country: "United States", value: 9876 },
    { country: "United Kingdom", value: 3703 },
    { country: "Canada", value: 2469 },
    { country: "Australia", value: 1728 },
    { country: "Germany", value: 1235 },
    { country: "France", value: 987 },
    { country: "Other", value: 4691 },
  ],
  pagePerformance: [
    { page: "Home", views: 12345, avgTime: "1m 32s", bounceRate: 28.4 },
    { page: "Services", views: 8765, avgTime: "2m 15s", bounceRate: 34.2 },
    { page: "About", views: 6543, avgTime: "1m 47s", bounceRate: 30.1 },
    { page: "Blog", views: 5432, avgTime: "3m 22s", bounceRate: 25.7 },
    { page: "Contact", views: 4321, avgTime: "1m 05s", bounceRate: 42.3 },
  ],
  trendsData: {
    visits: [
      { date: "Jan", value: 1200 },
      { date: "Feb", value: 1900 },
      { date: "Mar", value: 1500 },
      { date: "Apr", value: 1700 },
      { date: "May", value: 2100 },
      { date: "Jun", value: 2400 },
      { date: "Jul", value: 2200 },
      { date: "Aug", value: 2600 },
      { date: "Sep", value: 2900 },
      { date: "Oct", value: 3100 },
      { date: "Nov", value: 3300 },
      { date: "Dec", value: 3500 },
    ],
    conversions: [
      { date: "Jan", value: 42 },
      { date: "Feb", value: 63 },
      { date: "Mar", value: 52 },
      { date: "Apr", value: 58 },
      { date: "May", value: 72 },
      { date: "Jun", value: 85 },
      { date: "Jul", value: 78 },
      { date: "Aug", value: 93 },
      { date: "Sep", value: 102 },
      { date: "Oct", value: 116 },
      { date: "Nov", value: 125 },
      { date: "Dec", value: 138 },
    ],
  },
}

export async function GET() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  return NextResponse.json({ data: analyticsData })
}
