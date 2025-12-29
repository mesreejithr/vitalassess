import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StructuredData from '@/components/seo/StructuredData'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://vitalassess.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'VitalAssess - AI-Powered Hiring Intelligence',
    template: '%s | VitalAssess',
  },
  description: 'AI-generated assessments + secure proctoring + instant ranking + role-fit insights. Transform your hiring process with intelligent candidate evaluation.',
  keywords: ['AI assessment', 'hiring platform', 'candidate evaluation', 'recruitment software', 'AI proctoring', 'talent assessment', 'hiring intelligence'],
  authors: [{ name: 'VitalAssess' }],
  creator: 'VitalAssess',
  publisher: 'VitalAssess',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'VitalAssess',
    title: 'VitalAssess - AI-Powered Hiring Intelligence',
    description: 'AI-generated assessments + secure proctoring + instant ranking + role-fit insights. Transform your hiring process with intelligent candidate evaluation.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VitalAssess - AI-Powered Hiring Intelligence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VitalAssess - AI-Powered Hiring Intelligence',
    description: 'AI-generated assessments + secure proctoring + instant ranking + role-fit insights.',
    images: ['/og-image.jpg'],
    creator: '@vitalassess',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <StructuredData />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
