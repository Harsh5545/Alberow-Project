"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Search,
  Filter,
  Grid,
  List,
  MoreHorizontal,
  File,
  FileText,
  ImageIcon,
  FileCode,
  Download,
  Trash2,
  Share,
  Edit,
  Folder,
  ChevronRight,
} from "lucide-react"

// Mock data for files
const mockFiles = [
  {
    id: 1,
    name: "Project Proposal.pdf",
    type: "pdf",
    size: "2.4 MB",
    modified: "2023-12-15T14:30:00",
    icon: <FileText className="h-10 w-10 text-red-500" />,
  },
  {
    id: 2,
    name: "Website Mockup.png",
    type: "image",
    size: "4.8 MB",
    modified: "2023-12-14T10:15:00",
    icon: <ImageIcon className="h-10 w-10 text-purple-500" />,
  },
  {
    id: 3,
    name: "Client Contract.docx",
    type: "document",
    size: "1.2 MB",
    modified: "2023-12-13T16:45:00",
    icon: <FileText className="h-10 w-10 text-blue-500" />,
  },
  {
    id: 4,
    name: "Logo Design.ai",
    type: "design",
    size: "5.6 MB",
    modified: "2023-12-12T09:30:00",
    icon: <ImageIcon className="h-10 w-10 text-orange-500" />,
  },
  {
    id: 5,
    name: "Analytics Report.xlsx",
    type: "spreadsheet",
    size: "3.1 MB",
    modified: "2023-12-11T13:20:00",
    icon: <FileText className="h-10 w-10 text-green-500" />,
  },
  {
    id: 6,
    name: "Homepage Code.js",
    type: "code",
    size: "0.8 MB",
    modified: "2023-12-10T11:10:00",
    icon: <FileCode className="h-10 w-10 text-yellow-500" />,
  },
  {
    id: 7,
    name: "Team Photo.jpg",
    type: "image",
    size: "6.2 MB",
    modified: "2023-12-09T15:40:00",
    icon: <ImageIcon className="h-10 w-10 text-purple-500" />,
  },
  {
    id: 8,
    name: "Project Timeline.pdf",
    type: "pdf",
    size: "1.9 MB",
    modified: "2023-12-08T14:25:00",
    icon: <FileText className="h-10 w-10 text-red-500" />,
  },
]

// Mock data for folders
const mockFolders = [
  {
    id: 1,
    name: "Projects",
    files: 12,
    modified: "2023-12-15T14:30:00",
    icon: <Folder className="h-10 w-10 text-amber-500" />,
  },
  {
    id: 2,
    name: "Client Assets",
    files: 24,
    modified: "2023-12-14T10:15:00",
    icon: <Folder className="h-10 w-10 text-amber-500" />,
  },
  {
    id: 3,
    name: "Marketing Materials",
    files: 8,
    modified: "2023-12-13T16:45:00",
    icon: <Folder className="h-10 w-10 text-amber-500" />,
  },
  {
    id: 4,
    name: "Team Documents",
    files: 15,
    modified: "2023-12-12T09:30:00",
    icon: <Folder className="h-10 w-10 text-amber-500" />,
  },
]

export function FileManager() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-US", options)
  }

  const filteredFiles = mockFiles.filter((file) => file.name.toLowerCase().includes(searchQuery.toLowerCase()))
  const filteredFolders = mockFolders.filter((folder) => folder.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search files and folders..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <div className="border rounded-md flex">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="icon"
              className="rounded-r-none"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="icon"
              className="rounded-l-none"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex items-center text-sm text-muted-foreground">
        <Button variant="ghost" size="sm" className="h-8 px-2">
          Home
        </Button>
        <ChevronRight className="h-4 w-4" />
        <Button variant="ghost" size="sm" className="h-8 px-2">
          Documents
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="images">Images</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-6">
          {filteredFolders.length > 0 && (
            <div>
              <h3 className="text-lg font-medium mb-3">Folders</h3>
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                    : "space-y-2"
                }
              >
                {filteredFolders.map((folder) => (
                  <div
                    key={folder.id}
                    className={
                      viewMode === "grid"
                        ? "bg-background border border-border/50 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                        : "flex items-center justify-between bg-background border border-border/50 rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer"
                    }
                  >
                    {viewMode === "grid" ? (
                      <div className="flex flex-col items-center text-center">
                        {folder.icon}
                        <h4 className="font-medium mt-2 mb-1">{folder.name}</h4>
                        <p className="text-xs text-muted-foreground">{folder.files} files</p>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center gap-3">
                          <div className="shrink-0">{folder.icon}</div>
                          <div>
                            <h4 className="font-medium">{folder.name}</h4>
                            <p className="text-xs text-muted-foreground">{folder.files} files</p>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground">{formatDate(folder.modified)}</div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {filteredFiles.length > 0 && (
            <div>
              <h3 className="text-lg font-medium mb-3">Files</h3>
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                    : "space-y-2"
                }
              >
                {filteredFiles.map((file) => (
                  <div
                    key={file.id}
                    className={
                      viewMode === "grid"
                        ? "group bg-background border border-border/50 rounded-lg p-4 hover:shadow-md transition-shadow"
                        : "flex items-center justify-between bg-background border border-border/50 rounded-lg p-3 hover:shadow-md transition-shadow"
                    }
                  >
                    {viewMode === "grid" ? (
                      <div className="flex flex-col items-center text-center">
                        {file.icon}
                        <h4 className="font-medium mt-2 mb-1 truncate w-full">{file.name}</h4>
                        <p className="text-xs text-muted-foreground">{file.size}</p>
                        <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Download className="mr-2 h-4 w-4" />
                                <span>Download</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Share className="mr-2 h-4 w-4" />
                                <span>Share</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                <span>Rename</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">
                                <Trash2 className="mr-2 h-4 w-4" />
                                <span>Delete</span>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-center gap-3">
                          <div className="shrink-0">{file.icon}</div>
                          <div>
                            <h4 className="font-medium">{file.name}</h4>
                            <p className="text-xs text-muted-foreground">{file.size}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-sm text-muted-foreground">{formatDate(file.modified)}</div>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Download className="mr-2 h-4 w-4" />
                                <span>Download</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Share className="mr-2 h-4 w-4" />
                                <span>Share</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                <span>Rename</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">
                                <Trash2 className="mr-2 h-4 w-4" />
                                <span>Delete</span>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {filteredFiles.length === 0 && filteredFolders.length === 0 && (
            <div className="text-center py-12">
              <File className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">No files found</h3>
              <p className="text-muted-foreground mt-1">Try adjusting your search or upload a new file.</p>
            </div>
          )}
        </TabsContent>
        <TabsContent value="recent">
          <div className="text-center py-12">
            <File className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">Recent files will appear here</h3>
            <p className="text-muted-foreground mt-1">Files you've recently accessed will be shown in this tab.</p>
          </div>
        </TabsContent>
        <TabsContent value="images">
          <div className="text-center py-12">
            <ImageIcon className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">Image files will appear here</h3>
            <p className="text-muted-foreground mt-1">All your image files will be shown in this tab.</p>
          </div>
        </TabsContent>
        <TabsContent value="documents">
          <div className="text-center py-12">
            <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">Document files will appear here</h3>
            <p className="text-muted-foreground mt-1">All your document files will be shown in this tab.</p>
          </div>
        </TabsContent>
        <TabsContent value="shared">
          <div className="text-center py-12">
            <Share className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">Shared files will appear here</h3>
            <p className="text-muted-foreground mt-1">
              Files that have been shared with you will be shown in this tab.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
