import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Assessment for Candidates',
  description: 'Register for a free assessment and discover your potential. Get instant insights into your skills and strengths with VitalAssess AI-powered evaluation.',
  openGraph: {
    title: 'Free Assessment for Candidates | VitalAssess',
    description: 'Register for a free assessment and discover your potential. Get instant insights into your skills and strengths.',
    url: '/free-assessment',
  },
  twitter: {
    title: 'Free Assessment for Candidates',
    description: 'Register for a free assessment and discover your potential with VitalAssess.',
  },
}

export default function FreeAssessmentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

