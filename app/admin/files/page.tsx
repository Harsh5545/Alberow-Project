import { FileManager } from "@/components/admin/files/file-manager"
import { Button } from "@/components/ui/button"
import { Upload, FolderPlus } from "lucide-react"

export default function FilesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">File Manager</h1>
          <p className="text-muted-foreground mt-2">Upload, organize, and manage your files.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <FolderPlus className="h-4 w-4 mr-2" />
            New Folder
          </Button>
          <Button>
            <Upload className="h-4 w-4 mr-2" />
            Upload Files
          </Button>
        </div>
      </div>

      <FileManager />
    </div>
  )
}
