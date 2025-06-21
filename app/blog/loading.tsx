import { Navbar } from "@/components/navbar"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* Hero Section Skeleton */}
        <div className="text-center mb-16">
          <Skeleton className="h-16 w-64 mx-auto mb-6" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>

        {/* Featured Posts Skeleton */}
        <div className="mb-20">
          <Skeleton className="h-8 w-48 mb-8" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="rounded-2xl border border-border/50 overflow-hidden">
                <Skeleton className="h-64 w-full" />
                <div className="p-6">
                  <Skeleton className="h-6 w-full mb-4" />
                  <Skeleton className="h-4 w-3/4 mb-4" />
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Filter Skeleton */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-6">
          <Skeleton className="h-12 w-full lg:w-96" />
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-8 w-20" />
            ))}
          </div>
        </div>

        {/* Blog Posts Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="rounded-2xl border border-border/50 overflow-hidden">
              <Skeleton className="h-48 w-full" />
              <div className="p-6">
                <div className="flex gap-4 mb-3">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-16" />
                </div>
                <Skeleton className="h-6 w-full mb-3" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-4" />
                <div className="flex justify-between items-center">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
