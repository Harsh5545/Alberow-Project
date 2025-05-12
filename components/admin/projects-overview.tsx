"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const projects = [
  {
    name: "E-Commerce Platform",
    progress: 75,
    status: "In Progress",
  },
  {
    name: "Corporate Website Redesign",
    progress: 90,
    status: "Testing",
  },
  {
    name: "Social Media Dashboard",
    progress: 40,
    status: "In Progress",
  },
  {
    name: "Restaurant Booking System",
    progress: 100,
    status: "Completed",
  },
]

export function ProjectsOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Projects Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <h4 className="font-medium">{project.name}</h4>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    project.status === "Completed"
                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                      : project.status === "Testing"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <Progress value={project.progress} className="h-2" />
              <p className="text-xs text-right text-foreground/50">{project.progress}% complete</p>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
