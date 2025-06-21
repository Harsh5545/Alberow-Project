"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { List } from "lucide-react"

export function TableOfContents() {
  const [headings, setHeadings] = useState<Array<{ id: string; text: string; level: number }>>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const headingElements = document.querySelectorAll("h2, h3, h4")
    const headingArray = Array.from(headingElements).map((heading, index) => {
      const id = heading.id || `heading-${index}`
      if (!heading.id) {
        heading.id = id
      }
      return {
        id,
        text: heading.textContent || "",
        level: Number.parseInt(heading.tagName.charAt(1)),
      }
    })
    setHeadings(headingArray)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0% -35% 0%" },
    )

    headingElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  if (headings.length === 0) return null

  return (
    <Card className="shadow-lg border-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
      <CardHeader>
        <h3 className="text-xl font-bold flex items-center">
          <List className="h-5 w-5 mr-2 text-purple-600" />
          Table of Contents
        </h3>
      </CardHeader>
      <CardContent>
        <nav className="space-y-2">
          {headings.map((heading) => (
            <button
              key={heading.id}
              onClick={() => scrollToHeading(heading.id)}
              className={`block w-full text-left text-sm py-2 px-3 rounded-md transition-colors ${
                activeId === heading.id
                  ? "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
              style={{ paddingLeft: `${(heading.level - 2) * 12 + 12}px` }}
            >
              {heading.text}
            </button>
          ))}
        </nav>
      </CardContent>
    </Card>
  )
}
