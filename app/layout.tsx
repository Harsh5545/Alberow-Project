import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { InstantLoader } from '@/components/instant-loader'
// import { PageLoader } from '@/components/page-loader'
// import { AlberowLoader } from '@/components/alberow-loader'

export const metadata: Metadata = {
  title: 'Alberow - Professional Web Development',
  description: 'Alberow is a professional web development company specializing in custom websites, applications, and digital solutions for businesses of all sizes.',
  generator: 'Alberow',
  keywords: [
    'Web Development',
    'Custom Websites',
    'Application Development',
    'Digital Solutions',
    'SEO',
    'UI/UX Design',
    'E-commerce',
    'Portfolio Websites',
    'Social Media Marketing',
    'Alberow',
    'Kalyan',
    'India',
    'Next.js',
    'React',
    'Tailwind CSS'
  ],
  authors: [
    { name: 'Alberow', url: 'https://alberow.com' }
  ],
  creator: 'Alberow',
  publisher: 'Alberow',
  openGraph: {
    title: 'Alberow - Professional Web Development',
    description: 'Alberow delivers custom websites, applications, and digital solutions for businesses of all sizes.',
    url: 'https://alberow.com',
    siteName: 'Alberow',
    images: [
      {
        url: 'https://alberow.com/assets/AboutAlberow.webp',
        width: 1200,
        height: 630,
        alt: 'Alberow - Professional Web Development',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
   icons: {
    icon: "/assets/alberow.webp", // Path to your logo in the public directory
    shortcut: "/assets/alberow.webp",
    apple: "/assets/alberow.webp",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alberow - Professional Web Development',
    description: 'Alberow delivers custom websites, applications, and digital solutions for businesses of all sizes.',
    site: '@alberow',
    creator: '@alberow',
    images: ['https://alberow.com/assets/AboutAlberow.webp'],
  },
  metadataBase: new URL('https://alberow.com'),
  alternates: {
    canonical: 'https://alberow.com',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body> <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {/* <AlberowLoader /> */}<InstantLoader />
          {children}
        </ThemeProvider></body>
    </html>
  )
}
