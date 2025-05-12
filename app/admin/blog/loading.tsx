import { Skeleton } from "@/components/ui/skeleton"

export default function BlogLoading() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <Skeleton className="h-10 w-48" />
          <Skeleton className="h-5 w-72 mt-2" />
        </div>
        <Skeleton className="h-10 w-32" />
      </div>

      <div className="bg-card rounded-lg shadow-sm border p-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-6">
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-8 w-48" />
          </div>

          {Array(5)
            .fill(null)
            .map((_, i) => (
              <div key={i} className="flex items-center justify-between p-4 border rounded-md">
                <div className="flex items-center gap-4">
                  <Skeleton className="h-12 w-12 rounded-md" />
                  <div>
                    <Skeleton className="h-5 w-48 mb-2" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Skeleton className="h-9 w-9 rounded-md" />
                  <Skeleton className="h-9 w-9 rounded-md" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
