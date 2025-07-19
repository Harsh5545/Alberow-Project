"use client"

import { useEffect, useState } from "react"

export function AlberowLoaderFixed() {
  const [isVisible, setIsVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Start fade out after 1.5 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true)
    }, 1500)

    // Complete hide after 2 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false)
    }, 2000)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <div
        className="text-center"
        style={{
          textAlign: "center",
          opacity: fadeOut ? 0 : 1,
          transition: "opacity 0.5s ease-out",
        }}
      >
        {/* Logo Text with inline styles to prevent flash */}
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: 800,
            background: "linear-gradient(135deg, #9433E8, #ec4899, #BF2BA2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: "1rem",
            animation: "slideUp 0.8s ease-out",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          Alberow
        </h1>

        {/* Tagline */}
        <p
          style={{
            fontSize: "0.875rem",
            color: "#64748b",
            fontWeight: 500,
            letterSpacing: "2px",
            textTransform: "uppercase",
            animation: "slideUp 0.8s ease-out 0.2s both",
            marginBottom: "1.5rem",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          Digital Innovation Partner
        </p>

        {/* Loading Bar */}
        <div
          style={{
            width: "200px",
            height: "3px",
            backgroundColor: "#e2e8f0",
            borderRadius: "2px",
            margin: "0 auto",
            overflow: "hidden",
            animation: "slideUp 0.8s ease-out 0.4s both",
          }}
        >
          <div
            style={{
              height: "100%",
              background: "linear-gradient(90deg, #9433E8, #ec4899, #BF2BA2)",
              borderRadius: "2px",
              animation: "loadProgress 1.5s ease-out",
            }}
          />
        </div>
      </div>

      {/* Inline CSS to prevent any loading issues */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes loadProgress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .dark-bg {
            background-color: #0f172a !important;
          }
          .dark-tagline {
            color: #94a3b8 !important;
          }
          .dark-bar {
            background-color: #334155 !important;
          }
        }

        /* Mobile responsive */
        @media (max-width: 640px) {
          .mobile-text {
            font-size: 2.5rem !important;
          }
          .mobile-bar {
            width: 150px !important;
          }
        }

        @media (max-width: 480px) {
          .mobile-text-small {
            font-size: 2rem !important;
          }
          .mobile-bar-small {
            width: 120px !important;
          }
        }
      `}</style>
    </div>
  )
}
