import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch',
  description: 'Contact VitalAssess to learn how AI-powered hiring assessments can transform your recruitment process. Email: mail@vitalassess.com | Phone: 9744824525 | Kochi, Kerala.',
  openGraph: {
    title: 'Contact VitalAssess - Get in Touch',
    description: 'Contact VitalAssess to learn how AI-powered hiring assessments can transform your recruitment process.',
    url: '/contact',
  },
  twitter: {
    title: 'Contact VitalAssess',
    description: 'Get in touch to learn how AI-powered hiring assessments can transform your recruitment process.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

