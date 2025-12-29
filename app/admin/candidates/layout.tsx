import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Candidate Registrations - Admin',
  description: 'View and manage candidate registrations for free assessments',
  robots: {
    index: false,
    follow: false,
  },
}

export default function CandidatesAdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

