"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export function InAppBrowserDetector() {
  const [isInAppBrowser, setIsInAppBrowser] = useState(false)

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera || ""

    const isFacebookApp = userAgent.indexOf("FBAV") > -1 || userAgent.indexOf("FBDV") > -1
    const isInstagramApp = userAgent.indexOf("Instagram") > -1

    // Check if it's an iOS device and one of the known in-app browsers
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream

    if (isIOS && (isFacebookApp || isInstagramApp)) {
      setIsInAppBrowser(true)
    }
  }, [])

  const handleOpenInExternalBrowser = () => {
    // Attempt to open the current URL in the default external browser
    // _system is often used for Cordova/Capacitor, _blank for standard browser new tab
    // For iOS in-app browsers, window.location.href might work, or a more complex
    // approach using universal links/deep links if you control the link source.
    // For simplicity, we'll try a direct window.open to _blank.
    window.open(window.location.href, "_blank")
  }

  if (!isInAppBrowser) {
    return null // Don't render anything if not in an in-app browser
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4">
      <Card className="w-full max-w-sm text-center">
        <CardHeader>
          <CardTitle>Open in Browser</CardTitle>
          <CardDescription>
            For the best experience, please open this page in your device's default browser.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={handleOpenInExternalBrowser} className="w-full">
            <ExternalLink className="mr-2 h-4 w-4" />
            Open in Safari / Chrome
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            (This app may not function correctly in this in-app browser.)
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
