"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Code, Sparkles, Globe, MousePointer, Smartphone, Monitor, Tablet } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { HeroSVG } from "./hero-svg"

export function HeroNoLottie() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768)
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024)
    }
    checkDevice()
    window.addEventListener("resize", checkDevice)
    return () => window.removeEventListener("resize", checkDevice)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-16 pb-8 md:pt-20 md:pb-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-500/5 md:from-purple-500/10 to-transparent dark:from-purple-900/10 md:dark:from-purple-900/20" />

        {/* Animated background - only on desktop */}
        {!isMobile && (
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 rounded-full bg-purple-400/10 md:bg-purple-400/20 dark:bg-purple-600/10 md:dark:bg-purple-600/20 blur-2xl md:blur-3xl"
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
          </div>
        )}
      </div>

      <motion.div className="container mx-auto px-4" style={{ y, opacity }}>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-purple-200 dark:border-purple-800 bg-purple-100/50 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300 text-xs md:text-sm mb-4 md:mb-6"
            >
              <Sparkles size={14} className="mr-2" />
              Transforming Digital Presence
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight"
            >
              We Create{" "}
              <span className="relative block sm:inline">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9433E8] via-pink-600 to-[#BF2BA2]">
                  Digital Experiences
                </span>
              </span>
              <br className="hidden sm:block" />
              <span className="block sm:inline">That Inspire</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base md:text-lg lg:text-xl text-foreground/80 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0"
            >
              Alberow is a full-stack development agency specializing in creating powerful digital experiences that
              drive growth and engagement for your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start px-2 sm:px-0"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#9433E8] via-pink-600 to-[#BF2BA2] hover:from-purple-700 hover:via-pink-700 hover:to-[#BF2BA2] text-white group relative overflow-hidden transition-transform duration-200 hover:scale-105 text-sm md:text-base py-2.5 md:py-3"
              >
                <Link href="/contact">
                  <span className="relative z-10">Get Started</span>
                  <ArrowRight
                    size={16}
                    className="ml-2 relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group text-sm md:text-base py-2.5 md:py-3 bg-transparent"
              >
                <Link href="/services">
                  Explore Services
                  <MousePointer size={16} className="ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual Content - Pure CSS/SVG */}
          <motion.div
            className="flex-1 relative order-1 lg:order-2 w-full max-w-md lg:max-w-none"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
              {/* All devices: Use SVG with different animations */}
              <motion.div
                className="w-full h-full flex items-center justify-center"
                animate={
                  isMobile
                    ? {
                        scale: [1, 1.02, 1],
                      }
                    : isTablet
                      ? {
                          y: [0, -10, 0],
                          scale: [1, 1.05, 1],
                        }
                      : {
                          y: [0, -15, 0],
                          scale: [1, 1.08, 1],
                          rotateY: [0, 5, 0, -5, 0],
                        }
                }
                transition={{
                  duration: isMobile ? 4 : isTablet ? 6 : 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <HeroSVG className="max-w-full max-h-full" />
              </motion.div>

              {/* Additional floating elements for desktop */}
              {!isMobile && !isTablet && (
                <>
                  <motion.div
                    className="absolute top-8 left-8 w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-700"
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <Code className="w-6 h-6 text-[#9433E8]" />
                  </motion.div>

                  <motion.div
                    className="absolute bottom-12 right-8 w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-700"
                    animate={{
                      y: [0, 15, 0],
                      rotate: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  >
                    <Globe className="w-6 h-6 text-pink-500" />
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 right-4 w-10 h-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-700"
                    animate={{
                      rotate: [0, 45, 0, -45, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                  >
                    <Sparkles className="w-5 h-5 text-[#BF2BA2]" />
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        </div>

        {/* Service icons - Responsive grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 md:mt-16 md:grid hidden  md:grid-cols-6 gap-4 md:gap-6 lg:gap-8 text-center"
        >
          {[
            { icon: <Code />, label: "Web Development" },
            { icon: <Globe />, label: "SEO Optimization" },
            { icon: <Sparkles />, label: "Digital Marketing" },
            { icon: <Smartphone />, label: "App Development" },
            { icon: <Monitor />, label: "Portfolio Design" },
            { icon: <Tablet />, label: "Content Creation" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 flex items-center justify-center mb-2 md:mb-3"
                whileHover={{ scale: 1.05, rotate: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-gradient">{item.icon}</span>
              </motion.div>
              <p className="font-medium text-xs md:text-sm text-center px-1">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
