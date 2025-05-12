import { RolesTable } from "@/components/admin/roles/roles-table"
import { Button } from "@/components/ui/button"
import { PlusCircle, Download, Upload } from "lucide-react"
import Link from "next/link"

export default function RolesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Role Management</h1>
          <p className="text-muted-foreground">Manage roles and permissions for your team</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm">
            <Upload className="mr-2 h-4 w-4" /> Import
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
          <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <Link href="/admin/roles/new">
              <PlusCircle className="mr-2 h-4 w-4" /> Create Role
            </Link>
          </Button>
        </div>
      </div>

      <RolesTable />
    </div>
  )
}
