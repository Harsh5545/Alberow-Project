"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Code, Sparkles, Globe, MousePointer } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // For the 3D tilt effect
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    setRotateX((y - centerY) / 20)
    setRotateY((centerX - x) / 20)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  // For the typing effect - improved to prevent layout shifts
  const [displayText, setDisplayText] = useState("")
  const [currentPhrase, setCurrentPhrase] = useState("")
  const phrases = [
    "Stunning Websites",
    "Digital Experiences",
    "Mobile Applications",
    "Brand Identities",
    "Growth Strategies",
  ]
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  // Pre-calculate the maximum width to prevent layout shifts
  const maxPhraseLength = Math.max(...phrases.map((phrase) => phrase.length))

  useEffect(() => {
    const type = () => {
      const currentPhrase = phrases[phraseIndex]
      setCurrentPhrase(currentPhrase)

      if (isDeleting) {
        setDisplayText(currentPhrase.substring(0, charIndex - 1))
        setCharIndex((prev) => prev - 1)
        setTypingSpeed(50) // Faster when deleting
      } else {
        setDisplayText(currentPhrase.substring(0, charIndex + 1))
        setCharIndex((prev) => prev + 1)
        setTypingSpeed(100) // Normal speed when typing
      }

      // If completed typing the phrase
      if (!isDeleting && charIndex === currentPhrase.length) {
        setIsDeleting(true)
        setTypingSpeed(1000) // Pause before deleting
      }

      // If completed deleting the phrase
      if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setPhraseIndex((prev) => (prev + 1) % phrases.length)
        setTypingSpeed(500) // Pause before typing next phrase
      }
    }

    const timer = setTimeout(type, typingSpeed)
    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, phraseIndex, phrases, typingSpeed])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-500/10 to-transparent dark:from-purple-900/20" />

        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <motion.div
              className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-400/20 dark:bg-purple-600/20 blur-3xl"
              animate={{
                x: [50, -50, 50],
                y: [20, -20, 20],
              }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              style={{ opacity }}
            />
            <motion.div
              className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-pink-400/20 dark:bg-pink-600/20 blur-3xl"
              animate={{
                x: [-50, 50, -50],
                y: [-20, 20, -20],
              }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 1,
              }}
              style={{ opacity }}
            />
          </div>
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.02] dark:opacity-[0.03]" />

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 10 + 5,
                height: Math.random() * 10 + 5,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `rgba(${Math.random() * 255}, ${Math.random() * 100 + 100}, ${Math.random() * 255}, 0.3)`,
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      <motion.div className="container mx-auto px-4" style={{ y, opacity }}>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full border border-purple-200 dark:border-purple-800 bg-purple-100/50 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300 text-sm mb-6"
            >
              <Sparkles size={16} className="mr-2" />
              Transforming Digital Presence
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              We Create{" "}
              <span className="relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  Digital Experiences
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></span>
              </span>
              <br />
              That Inspire
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Alberow is a full-stack development agency specializing in creating powerful digital experiences that
              drive growth and engagement for your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white group relative overflow-hidden"
              >
                <Link href="/contact">
                  <span className="relative z-10">Get Started</span>
                  <motion.span
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <ArrowRight
                    size={16}
                    className="ml-2 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="group">
                <Link href="/services">
                  Explore Services
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
                  >
                    <MousePointer size={16} className="ml-2" />
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 relative"
            style={{
              perspective: 1000,
              transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.div
              style={{
                rotateX: rotateX,
                rotateY: rotateY,
                transformStyle: "preserve-3d",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative"
            >
              {/* 3D Layered Device Mockups */}
              <div className="relative w-full h-[500px]">
                {/* Desktop */}
                <motion.div
                  className="absolute top-0 left-0 right-0 mx-auto w-[80%] h-auto rounded-lg overflow-hidden shadow-2xl"
                  style={{ z: 30, translateZ: "40px" }}
                >
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Desktop Website"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-lg border border-gray-200 dark:border-gray-800"
                  />
                </motion.div>

                {/* Tablet */}
                <motion.div
                  className="absolute bottom-10 right-0 w-[40%] h-auto rounded-lg overflow-hidden shadow-xl"
                  style={{ z: 20, translateZ: "20px" }}
                >
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Tablet Website"
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover rounded-lg border border-gray-200 dark:border-gray-800"
                  />
                </motion.div>

                {/* Mobile */}
                <motion.div
                  className="absolute bottom-20 left-0 w-[25%] h-auto rounded-lg overflow-hidden shadow-lg"
                  style={{ z: 10, translateZ: "10px" }}
                >
                  <Image
                    src="/placeholder.svg?height=500&width=250"
                    alt="Mobile Website"
                    width={250}
                    height={500}
                    className="w-full h-auto object-cover rounded-lg border border-gray-200 dark:border-gray-800"
                  />
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                  className="absolute top-20 left-10 w-16 h-16 rounded-full bg-purple-500/20 dark:bg-purple-500/30"
                  style={{ z: 5, translateZ: "5px" }}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />

                <motion.div
                  className="absolute bottom-40 right-20 w-12 h-12 rounded-full bg-pink-500/20 dark:bg-pink-500/30"
                  style={{ z: 5, translateZ: "5px" }}
                  animate={{
                    y: [0, 15, 0],
                    rotate: [0, -10, 0],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                />

                <motion.div
                  className="absolute top-40 right-10 w-8 h-8 rounded-md bg-yellow-500/20 dark:bg-yellow-500/30"
                  style={{ z: 5, translateZ: "5px" }}
                  animate={{
                    rotate: [0, 45, 0, -45, 0],
                  }}
                  transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Service icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-8 text-center"
        >
          {[
            { icon: <Code />, label: "Web Development" },
            { icon: <Globe />, label: "SEO Optimization" },
            { icon: <Sparkles />, label: "Digital Marketing" },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M7 7h.01" />
                  <path d="M12 7h.01" />
                  <path d="M17 7h.01" />
                  <path d="M7 12h.01" />
                  <path d="M12 12h.01" />
                  <path d="M17 12h.01" />
                  <path d="M7 17h.01" />
                  <path d="M12 17h.01" />
                  <path d="M17 17h.01" />
                </svg>
              ),
              label: "App Development",
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
              ),
              label: "Portfolio Design",
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              ),
              label: "Content Creation",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 flex items-center justify-center mb-3"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-gradient">{item.icon}</span>
              </motion.div>
              <h3 className="font-medium text-sm">{item.label}</h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center pt-2">
            <motion.div
              className="w-1 h-2 bg-foreground/50 rounded-full"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
