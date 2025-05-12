"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  MoreHorizontal,
  Phone,
  Video,
  Info,
  Paperclip,
  ImageIcon,
  Smile,
  Send,
  FileText,
  Code,
  Link,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const messages = [
  {
    id: 1,
    sender: "Alex Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "AJ",
    content: "Hey team, I've just pushed the latest changes to the GitHub repository. Can someone review the PR?",
    timestamp: "10:30 AM",
    isCurrentUser: false,
  },
  {
    id: 2,
    sender: "You",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "YO",
    content: "I'll take a look at it. What are the main changes?",
    timestamp: "10:32 AM",
    isCurrentUser: true,
  },
  {
    id: 3,
    sender: "Alex Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "AJ",
    content: "I've updated the homepage hero section and fixed the responsive issues on the services page.",
    timestamp: "10:35 AM",
    isCurrentUser: false,
  },
  {
    id: 4,
    sender: "Sarah Miller",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "SM",
    content: "I've also added some new animations to the project cards. Let me know what you think!",
    timestamp: "10:40 AM",
    isCurrentUser: false,
  },
  {
    id: 5,
    sender: "You",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "YO",
    content: "Great work, both of you! I'll review everything this afternoon and provide feedback.",
    timestamp: "10:45 AM",
    isCurrentUser: true,
  },
  {
    id: 6,
    sender: "David Lee",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "DL",
    content: "Don't forget we have a client meeting tomorrow to present the progress.",
    timestamp: "10:50 AM",
    isCurrentUser: false,
  },
  {
    id: 7,
    sender: "You",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "YO",
    content: "Thanks for the reminder, David. I'll prepare the presentation slides.",
    timestamp: "10:55 AM",
    isCurrentUser: true,
  },
]

export function MessagesChat() {
  const [newMessage, setNewMessage] = useState("")

  return (
    <div className="flex-1 flex flex-col">
      <div className="p-4 border-b flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Website Team" />
            <AvatarFallback>WT</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium">Website Team</h3>
            <p className="text-xs text-muted-foreground">Alex, Sarah, David, You</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Phone className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Voice Call</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Video className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Video Call</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Info className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Group Info</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Search in conversation</DropdownMenuItem>
              <DropdownMenuItem>Mute notifications</DropdownMenuItem>
              <DropdownMenuItem>Add members</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">Leave group</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.isCurrentUser ? "justify-end" : "justify-start"}`}>
            <div className={`flex gap-3 max-w-[80%] ${message.isCurrentUser ? "flex-row-reverse" : ""}`}>
              <Avatar className="h-8 w-8 mt-1">
                <AvatarImage src={message.avatar || "/placeholder.svg"} alt={message.sender} />
                <AvatarFallback>{message.initials}</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium">{message.sender}</span>
                  <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                </div>
                <div className={`rounded-lg p-3 ${message.isCurrentUser ? "bg-purple-600 text-white" : "bg-muted"}`}>
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-9 w-9">
                    <Paperclip className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Attach File</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <ImageIcon className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>
                  <ImageIcon className="mr-2 h-4 w-4" />
                  <span>Upload Image</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FileText className="mr-2 h-4 w-4" />
                  <span>Upload Document</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Code className="mr-2 h-4 w-4" />
                  <span>Share Code Snippet</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="mr-2 h-4 w-4" />
                  <span>Share Link</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Input
            type="text"
            placeholder="Type a message..."
            className="flex-1"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Smile className="h-5 w-5" />
          </Button>
          <Button
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white"
            size="icon"
            disabled={!newMessage.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
