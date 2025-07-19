"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedLoader } from "./animated-loader"

interface PageLoaderProps {
  isLoading?: boolean
  onComplete?: () => void
}

export function PageLoader({ isLoading = true, onComplete }: PageLoaderProps) {
  const [loading, setLoading] = useState(isLoading)

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setLoading(false)
        onComplete?.()
      }, 2000) // Adjust timing as needed

      return () => clearTimeout(timer)
    }
  }, [isLoading, onComplete])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatedLoader size="lg" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
