"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Loader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <div className="relative w-full max-w-md flex flex-col items-center">
            {/* Creative animated loader */}
            <div className="relative w-40 h-40">
              {/* Animated particles */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                  initial={{
                    x: 0,
                    y: 0,
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{
                    x: Math.sin(i * 1) * (80 + Math.random() * 20),
                    y: Math.cos(i * 1) * (80 + Math.random() * 20),
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2 + Math.random(),
                    delay: i * 0.1,
                    ease: "easeInOut",
                  }}
                  style={{
                    top: "50%",
                    left: "50%",
                    translateX: "-50%",
                    translateY: "-50%",
                  }}
                />
              ))}

              {/* Rotating rings */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={`ring-${i}`}
                  className="absolute top-1/2 left-1/2 rounded-full border-2 border-transparent"
                  style={{
                    width: `${100 - i * 20}%`,
                    height: `${100 - i * 20}%`,
                    x: "-50%",
                    y: "-50%",
                    borderLeftColor:
                      i === 0 ? "rgb(168, 85, 247)" : i === 1 ? "rgb(236, 72, 153)" : "rgb(59, 130, 246)",
                    borderRightColor:
                      i === 0 ? "rgb(59, 130, 246)" : i === 1 ? "rgb(168, 85, 247)" : "rgb(236, 72, 153)",
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 3 - i * 0.5,
                    ease: "linear",
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                />
              ))}

              {/* Central logo */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-16 h-16 bg-background rounded-full flex items-center justify-center shadow-lg"
                style={{ x: "-50%", y: "-50%" }}
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.div
                  className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  A
                </motion.div>
              </motion.div>
            </div>

            {/* Text animation */}
            <div className="mt-8 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              >
                Alberow
              </motion.h2>

              <motion.div className="mt-2 flex justify-center space-x-1">
                {[
                  "C",
                  "r",
                  "e",
                  "a",
                  "t",
                  "i",
                  "v",
                  "i",
                  "t",
                  "y",
                  " ",
                  "U",
                  "n",
                  "l",
                  "e",
                  "a",
                  "s",
                  "h",
                  "e",
                  "d",
                ].map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.05, duration: 0.3 }}
                    className="text-sm text-foreground/70"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
