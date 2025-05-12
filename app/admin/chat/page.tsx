"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, PlusCircle, Paperclip, Smile, Bot, Info, Users, MoreVertical } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ChatPage() {
  const [activeChat, setActiveChat] = useState("support-1")
  const [message, setMessage] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Mock data for chats
  const chats = [
    {
      id: "support-1",
      name: "John Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "JS",
      lastMessage: "I need help with my website design",
      time: "10:32 AM",
      unread: 2,
      status: "active",
    },
    {
      id: "support-2",
      name: "Emily Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "EJ",
      lastMessage: "When will my project be completed?",
      time: "Yesterday",
      unread: 0,
      status: "active",
    },
    {
      id: "support-3",
      name: "Michael Brown",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MB",
      lastMessage: "Thanks for your help!",
      time: "Yesterday",
      unread: 0,
      status: "inactive",
    },
    {
      id: "support-4",
      name: "Sarah Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SW",
      lastMessage: "I'd like to discuss my SEO strategy",
      time: "Monday",
      unread: 0,
      status: "active",
    },
    {
      id: "support-5",
      name: "David Lee",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "DL",
      lastMessage: "Can you provide a quote for a new project?",
      time: "Monday",
      unread: 0,
      status: "inactive",
    },
  ]

  // Mock data for messages
  const [messages, setMessages] = useState([
    {
      id: 1,
      chatId: "support-1",
      sender: "client",
      content: "Hello, I need help with my website design. Can you assist me?",
      time: "10:30 AM",
    },
    {
      id: 2,
      chatId: "support-1",
      sender: "bot",
      content:
        "Hi there! I'm AlbeBot, your AI assistant. I'd be happy to help with your website design. Could you please provide more details about what you're looking for?",
      time: "10:31 AM",
    },
    {
      id: 3,
      chatId: "support-1",
      sender: "client",
      content:
        "I need a modern design for my e-commerce store. I sell handmade jewelry and want something elegant but user-friendly.",
      time: "10:32 AM",
    },
    {
      id: 4,
      chatId: "support-2",
      sender: "client",
      content: "Hi, I'm wondering when my project will be completed?",
      time: "Yesterday",
    },
    {
      id: 5,
      chatId: "support-2",
      sender: "bot",
      content:
        "Hello! I'm AlbeBot. Let me check the status of your project. Could you please confirm your project name or ID?",
      time: "Yesterday",
    },
  ])

  const handleSendMessage = () => {
    if (message.trim() === "") return

    // Add client message
    const newClientMessage = {
      id: messages.length + 1,
      chatId: activeChat,
      sender: "client",
      content: message,
      time: "Just now",
    }

    setMessages([...messages, newClientMessage])
    setMessage("")

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        chatId: activeChat,
        sender: "bot",
        content:
          "Thank you for providing those details. Our design team specializes in creating elegant e-commerce solutions for businesses like yours. I've noted your requirements for a modern, elegant, and user-friendly design for your handmade jewelry store. A member of our design team will review this conversation and reach out to you shortly with some initial concepts. In the meantime, do you have any specific color schemes or reference websites that you particularly like?",
        time: "Just now",
      }
      setMessages((prevMessages) => [...prevMessages, botResponse])
    }, 1000)
  }

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Filter messages for active chat
  const activeMessages = messages.filter((msg) => msg.chatId === activeChat)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Support Chat</h1>
        <p className="text-muted-foreground mt-2">Manage customer conversations and support requests.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader className="px-4">
            <div className="flex items-center justify-between">
              <CardTitle>Conversations</CardTitle>
              <Button variant="ghost" size="icon">
                <PlusCircle className="h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <Input placeholder="Search conversations..." className="pl-8" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </CardHeader>
          <CardContent className="px-2 py-0">
            <Tabs defaultValue="all">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="closed">Closed</TabsTrigger>
              </TabsList>
            </Tabs>
            <ScrollArea className="h-[calc(100vh-15rem)]">
              <div className="space-y-1 py-2">
                {chats.map((chat) => (
                  <button
                    key={chat.id}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      activeChat === chat.id ? "bg-primary text-primary-foreground" : "hover:bg-muted text-foreground"
                    }`}
                    onClick={() => setActiveChat(chat.id)}
                  >
                    <div className="flex items-center gap-3">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={chat.avatar || "/placeholder.svg"} alt={chat.name} />
                        <AvatarFallback>{chat.initials}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="font-medium truncate">{chat.name}</span>
                          <span className="text-xs">{chat.time}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs truncate text-muted-foreground">{chat.lastMessage}</span>
                          {chat.unread > 0 && (
                            <Badge variant="destructive" className="ml-auto text-[10px] h-5 min-w-5">
                              {chat.unread}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader className="px-4 py-3 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9">
                  <AvatarImage
                    src={chats.find((chat) => chat.id === activeChat)?.avatar || "/placeholder.svg"}
                    alt={chats.find((chat) => chat.id === activeChat)?.name || "User"}
                  />
                  <AvatarFallback>{chats.find((chat) => chat.id === activeChat)?.initials || "U"}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-base">
                    {chats.find((chat) => chat.id === activeChat)?.name || "User"}
                  </CardTitle>
                  <CardDescription className="text-xs">
                    {chats.find((chat) => chat.id === activeChat)?.status === "active" ? (
                      <span className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-green-500 mr-1"></span> Online
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-gray-300 mr-1"></span> Offline
                      </span>
                    )}
                  </CardDescription>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Info className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Users className="h-5 w-5" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Options</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>View Profile</DropdownMenuItem>
                    <DropdownMenuItem>Transfer Chat</DropdownMenuItem>
                    <DropdownMenuItem>Email Transcript</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">Close Chat</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[calc(100vh-15rem)]">
              <div className="flex flex-col p-4 space-y-4">
                {activeMessages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === "client" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        msg.sender === "client" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                      }`}
                    >
                      {msg.sender === "bot" && (
                        <div className="flex items-center gap-2 mb-1">
                          <Bot className="h-4 w-4" />
                          <span className="text-xs font-medium">AlbeBot</span>
                        </div>
                      )}
                      <p className="text-sm">{msg.content}</p>
                      <div
                        className={`text-xs mt-1 ${
                          msg.sender === "client" ? "text-primary-foreground/70" : "text-muted-foreground"
                        }`}
                      >
                        {msg.time}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter className="p-3 border-t">
            <div className="flex items-center gap-2 w-full">
              <Button variant="outline" size="icon">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Input
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage()
                  }
                }}
                className="flex-1"
              />
              <Button variant="outline" size="icon">
                <Smile className="h-4 w-4" />
              </Button>
              <Button onClick={handleSendMessage} disabled={message.trim() === ""}>
                <Send className="h-4 w-4 mr-2" /> Send
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
