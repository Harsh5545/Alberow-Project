"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo({
      top: 0,
      behavior: "instant", // Use "instant" instead of "smooth" to avoid animation conflicts
    })
  }, [pathname])

  return null
}
