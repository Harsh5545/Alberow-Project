"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Shield, Cookie, Eye, Scale, HelpCircle } from "lucide-react"

interface LegalNavigationProps {
  currentPage: string
}

export function LegalNavigation({ currentPage }: LegalNavigationProps) {
  const legalPages = [
    {
      id: "terms",
      title: "Terms of Service",
      description: "Service terms and conditions",
      icon: <FileText className="h-4 w-4" />,
      href: "/terms-of-service",
      color: "blue",
    },
    {
      id: "privacy",
      title: "Privacy Policy",
      description: "Data protection and privacy",
      icon: <Shield className="h-4 w-4" />,
      href: "/privacy-policy",
      color: "green",
    },
    {
      id: "cookies",
      title: "Cookie Policy",
      description: "Cookie usage information",
      icon: <Cookie className="h-4 w-4" />,
      href: "/cookie-policy",
      color: "orange",
    },
    {
      id: "disclaimer",
      title: "Disclaimer",
      description: "Legal disclaimers",
      icon: <Eye className="h-4 w-4" />,
      href: "/disclaimer",
      color: "purple",
    },
    {
      id: "refund",
      title: "Refund Policy",
      description: "Refund terms and process",
      icon: <Scale className="h-4 w-4" />,
      href: "/refund-policy",
      color: "red",
    },
  ]

  return (
    <div className="sticky top-24 space-y-4 sm:space-y-6">
      <Card className="border-border/50">
        <CardHeader className="pb-3">
          <CardTitle className="text-base sm:text-lg flex items-center gap-2">
            <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5" />
            Legal Documents
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {legalPages.map((page, index) => (
            <motion.div
              key={page.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={page.href}
                className={`block p-3 rounded-lg transition-all duration-200 group ${
                  currentPage === page.id
                    ? `bg-${page.color}-100 dark:bg-${page.color}-900/30 border border-${page.color}-200 dark:border-${page.color}-800`
                    : "hover:bg-muted/50 border border-transparent hover:border-border"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`p-1.5 rounded ${
                      currentPage === page.id
                        ? `bg-${page.color}-200 dark:bg-${page.color}-800 text-${page.color}-700 dark:text-${page.color}-300`
                        : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                    }`}
                  >
                    {page.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3
                        className={`text-sm font-medium truncate ${
                          currentPage === page.id
                            ? `text-${page.color}-900 dark:text-${page.color}-100`
                            : "text-foreground"
                        }`}
                      >
                        {page.title}
                      </h3>
                      {currentPage === page.id && (
                        <Badge variant="secondary" className="text-xs px-1.5 py-0.5">
                          Current
                        </Badge>
                      )}
                    </div>
                    <p
                      className={`text-xs ${
                        currentPage === page.id
                          ? `text-${page.color}-700 dark:text-${page.color}-400`
                          : "text-muted-foreground"
                      }`}
                    >
                      {page.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Contact */}
      <Card className="border-border/50">
        <CardContent className="p-4">
          <h4 className="font-medium mb-3 text-sm">Need Help?</h4>
          <div className="space-y-2 text-xs text-muted-foreground">
            <p>📧 legal@alberow.com</p>
            <p>📞 +91 98765 43210</p>
            <p className="text-xs">Response within 48 hours</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
