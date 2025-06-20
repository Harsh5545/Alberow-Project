import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TermsContent } from "@/components/legal/terms-content"
import { LegalNavigation } from "@/components/legal/legal-navigation"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
export const metadata: Metadata = {
  title: "Terms of Service | Alberow - Web Development & Digital Marketing",
  description:
    "Read the terms and conditions governing the use of Alberow's website and services. Comprehensive terms covering web development, SEO, and digital marketing services.",
  keywords: "terms of service, legal terms, web development terms, digital marketing terms, Alberow terms",
  openGraph: {
    title: "Terms of Service | Alberow",
    description: "Read the terms and conditions governing the use of Alberow's website and services.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 pb-8 sm:pb-12 md:pb-16 bg-gradient-to-br from-blue-50 via-background to-purple-50 dark:from-blue-950/20 dark:via-background dark:to-purple-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={[{ label: "Legal", href: "/legal" }, { label: "Terms of Service" }]} />

            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Terms of Service
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                Please read these terms carefully before using our services. These terms govern your use of Alberow's
                website and services.
              </p>
              <div className="mt-4 sm:mt-6 inline-flex items-center px-3 sm:px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs sm:text-sm font-medium">
                Last Updated: December 20, 2024
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Sidebar Navigation - Hidden on mobile, shown on larger screens */}
              <div className="lg:col-span-1">
                <LegalNavigation currentPage="terms" />
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <TermsContent />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
