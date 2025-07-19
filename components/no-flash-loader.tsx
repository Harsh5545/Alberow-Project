"use client"

import { useEffect, useState } from "react"

export function NoFlashLoader() {
  const [mounted, setMounted] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Ensure component is mounted
    setMounted(true)

    // Start fade out
    const fadeTimer = setTimeout(() => {
      setFadeOut(true)
    }, 1500)

    return () => clearTimeout(fadeTimer)
  }, [])

  // Don't render anything until mounted to prevent flash
  if (!mounted) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: "3rem",
            fontWeight: 800,
            background: "linear-gradient(135deg, #9433E8, #ec4899, #BF2BA2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Alberow
        </div>
      </div>
    )
  }

  if (fadeOut) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-white dark:bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-[#9433E8] via-pink-600 to-[#BF2BA2] bg-clip-text text-transparent mb-4 animate-pulse">
          Alberow
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 font-medium tracking-widest uppercase mb-6">
          Digital Innovation Partner
        </p>
        <div className="w-48 h-1 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#9433E8] via-pink-600 to-[#BF2BA2] rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
