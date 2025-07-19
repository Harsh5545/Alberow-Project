"use client"

import { useEffect, useState } from "react"

export function AlberowLoader() {
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
    <>
      <style jsx>{`
        .alberow-loader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          transition: opacity 0.5s ease-out;
        }
        
        .dark .alberow-loader {
          background: #0f172a;
        }
        
        .fade-out {
          opacity: 0;
        }
        
        .alberow-logo {
          text-align: center;
        }
        
        .alberow-text {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(135deg, #9433E8, #ec4899, #BF2BA2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          animation: slideUp 0.8s ease-out;
        }
        
        .alberow-tagline {
          font-size: 0.875rem;
          color: #64748b;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          animation: slideUp 0.8s ease-out 0.2s both;
        }
        
        .dark .alberow-tagline {
          color: #94a3b8;
        }
        
        .loading-bar {
          width: 200px;
          height: 3px;
          background: #e2e8f0;
          border-radius: 2px;
          margin: 1.5rem auto 0;
          overflow: hidden;
          animation: slideUp 0.8s ease-out 0.4s both;
        }
        
        .dark .loading-bar {
          background: #334155;
        }
        
        .loading-progress {
          height: 100%;
          background: linear-gradient(90deg, #9433E8, #ec4899, #BF2BA2);
          border-radius: 2px;
          animation: loadProgress 1.5s ease-out;
        }
        
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
        
        /* Mobile responsive */
        @media (max-width: 640px) {
          .alberow-text {
            font-size: 2.5rem;
          }
          
          .loading-bar {
            width: 150px;
          }
        }
        
        @media (max-width: 480px) {
          .alberow-text {
            font-size: 2rem;
          }
          
          .loading-bar {
            width: 120px;
          }
        }
      `}</style>

      <div className={`alberow-loader ${fadeOut ? "fade-out" : ""}`}>
        <div className="alberow-logo">
          <h1 className="alberow-text">Alberow</h1>
          <p className="alberow-tagline">Digital Innovation Partner</p>
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
        </div>
      </div>
    </>
  )
}
