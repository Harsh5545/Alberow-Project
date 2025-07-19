"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export function InstantLoader() {
  const [show, setShow] = useState(true)
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setShow(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Get the actual theme being used
  const currentTheme = theme === "system" ? systemTheme : theme
  const isDark = currentTheme === "dark"

  if (!show) return null

  return (
    <>
      {/* Critical CSS - loads immediately with theme support */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .instant-loader {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            background: ${isDark ? "#160D1D" : "#ffffff"} !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            z-index: 9999 !important;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif !important;
            transition: opacity 0.5s ease-out !important;
          }
          
          .instant-logo {
            text-align: center !important;
          }
          
          .instant-text {
            font-size: 3rem !important;
            font-weight: 800 !important;
            background: linear-gradient(135deg, #9433E8, #ec4899, #BF2BA2) !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            background-clip: text !important;
            margin-bottom: 1rem !important;
            animation: fadeInUp 0.8s ease-out !important;
          }
          
          .instant-tagline {
            font-size: 0.875rem !important;
            color: ${isDark ? "#94a3b8" : "#64748b"} !important;
            font-weight: 500 !important;
            letter-spacing: 2px !important;
            text-transform: uppercase !important;
            margin-bottom: 1.5rem !important;
            animation: fadeInUp 0.8s ease-out 0.2s both !important;
          }
          
          .instant-bar {
            width: 200px !important;
            height: 3px !important;
            background: ${isDark ? "#334155" : "#e2e8f0"} !important;
            border-radius: 2px !important;
            margin: 0 auto !important;
            overflow: hidden !important;
            animation: fadeInUp 0.8s ease-out 0.4s both !important;
          }
          
          .instant-progress {
            height: 100% !important;
            background: linear-gradient(90deg, #9433E8, #ec4899, #BF2BA2) !important;
            border-radius: 2px !important;
            animation: loadProgress 1.5s ease-out !important;
          }
          
          @keyframes fadeInUp {
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
            from { width: 0%; }
            to { width: 100%; }
          }
          
          @media (max-width: 640px) {
            .instant-text { font-size: 2.5rem !important; }
            .instant-bar { width: 150px !important; }
          }
          
          @media (max-width: 480px) {
            .instant-text { font-size: 2rem !important; }
            .instant-bar { width: 120px !important; }
          }
        `,
        }}
      />

      <div className="instant-loader">
        <div className="instant-logo">
          <h1 className="instant-text">Alberow</h1>
          <p className="instant-tagline">Digital Innovation Partner</p>
          <div className="instant-bar">
            <div className="instant-progress"></div>
          </div>
        </div>
      </div>
    </>
  )
}
