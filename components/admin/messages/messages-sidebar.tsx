"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Plus, Circle } from "lucide-react"
import { cn } from "@/lib/utils"

const conversations = [
  {
    id: 1,
    name: "Website Team",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "WT",
    lastMessage: "Let's review the homepage design",
    timestamp: "10:30 AM",
    unread: true,
    isGroup: true,
    members: ["Alex", "Sarah", "David", "You"],
  },
  {
    id: 2,
    name: "Alex Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "AJ",
    lastMessage: "I've pushed the latest changes to GitHub",
    timestamp: "Yesterday",
    unread: false,
    isGroup: false,
  },
  {
    id: 3,
    name: "Mobile App Team",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "MA",
    lastMessage: "The API integration is complete",
    timestamp: "Yesterday",
    unread: true,
    isGroup: true,
    members: ["Michael", "Emma", "James", "You"],
  },
  {
    id: 4,
    name: "Sarah Miller",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "SM",
    lastMessage: "Can we discuss the client feedback?",
    timestamp: "Monday",
    unread: false,
    isGroup: false,
  },
  {
    id: 5,
    name: "Marketing Team",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "MT",
    lastMessage: "Social media campaign is ready for review",
    timestamp: "Monday",
    unread: false,
    isGroup: true,
    members: ["Sophia", "William", "Olivia", "You"],
  },
  {
    id: 6,
    name: "David Lee",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "DL",
    lastMessage: "I need help with the database schema",
    timestamp: "Last week",
    unread: false,
    isGroup: false,
  },
  {
    id: 7,
    name: "Project Managers",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "PM",
    lastMessage: "Let's schedule the client meeting",
    timestamp: "Last week",
    unread: false,
    isGroup: true,
    members: ["Emma", "Liam", "Ava", "You"],
  },
]

export function MessagesSidebar() {
  const [activeConversation, setActiveConversation] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredConversations = conversations.filter(
    (conversation) =>
      conversation.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conversation.lastMessage.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="w-full md:w-80 border-r flex flex-col">
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search messages..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button size="icon" variant="ghost">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        {filteredConversations.map((conversation) => (
          <div
            key={conversation.id}
            className={cn(
              "flex items-center gap-3 p-3 cursor-pointer hover:bg-muted/50 transition-colors",
              activeConversation === conversation.id && "bg-muted",
            )}
            onClick={() => setActiveConversation(conversation.id)}
          >
            <Avatar className="h-10 w-10">
              <AvatarImage src={conversation.avatar || "/placeholder.svg"} alt={conversation.name} />
              <AvatarFallback>{conversation.initials}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="font-medium truncate">{conversation.name}</span>
                <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</span>
                {conversation.unread && <Circle className="h-2 w-2 fill-current text-purple-500" />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
