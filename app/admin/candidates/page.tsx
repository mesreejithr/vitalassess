'use client'

import { useState, useEffect } from 'react'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { supabase, isSupabaseConfigured } from '@/lib/supabase'

interface Candidate {
  id: string
  name: string
  email: string
  mobile: string
  mobile_digits: string
  created_at: string
}

export default function CandidatesAdmin() {
  const [candidates, setCandidates] = useState<Candidate[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        setIsAuthenticated(true)
        fetchCandidates()
      } else {
        setIsAuthenticated(false)
        // Redirect to login if not authenticated
        if (typeof window !== 'undefined') {
          window.location.href = '/login'
        }
      }
    } catch (err) {
      console.error('Auth check error:', err)
      setIsAuthenticated(false)
      if (typeof window !== 'undefined') {
        window.location.href = '/login'
      }
    }
  }

  const fetchCandidates = async () => {
    try {
      setLoading(true)
      setError(null)

      // Check if Supabase is configured
      if (!isSupabaseConfigured()) {
        throw new Error('Service is not properly configured. Please contact support.')
      }

      // Fetch candidates from database
      const { data: candidates, error: fetchError } = await supabase
        .from('candidates')
        .select('*')
        .order('created_at', { ascending: false })

      if (fetchError) {
        console.error('Supabase fetch error:', fetchError)
        if (fetchError.code === 'PGRST116' || fetchError.message?.includes('relation') || fetchError.message?.includes('does not exist')) {
          setError('Database not configured. Please contact support.')
        } else {
          setError('Failed to load candidates. Please try again.')
        }
        return
      }

      setCandidates(candidates || [])
    } catch (err: any) {
      setError(err?.message || 'Failed to load candidates. Please try again.')
      console.error('Error fetching candidates:', err)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Mobile', 'Registration Date']
    const rows = candidates.map((c) => [
      c.name,
      c.email,
      c.mobile,
      formatDate(c.created_at),
    ])
    
    const csvContent = [
      headers.join(','),
      ...rows.map((row) => row.map((cell) => `"${cell}"`).join(',')),
    ].join('\n')
    
    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `candidates_${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  // Show loading while checking authentication
  if (isAuthenticated === null) {
    return (
      <Section className="py-20">
        <div className="max-w-6xl mx-auto">
          <Card padding="lg" className="text-center">
            <p className="text-gray-medium">Checking authentication...</p>
          </Card>
        </div>
      </Section>
    )
  }

  // Don't render if not authenticated (will redirect)
  if (!isAuthenticated) {
    return null
  }

  return (
    <Section className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-dark mb-2">Candidate Registrations</h1>
            <p className="text-gray-medium">
              View and manage all candidate registrations for free assessments
            </p>
          </div>
          <div className="flex gap-4">
            <Button onClick={fetchCandidates} variant="outline" size="md">
              Refresh
            </Button>
            {candidates.length > 0 && (
              <Button onClick={exportToCSV} size="md">
                Export CSV
              </Button>
            )}
          </div>
        </div>

        {loading ? (
          <Card padding="lg" className="text-center">
            <p className="text-gray-medium">Loading candidates...</p>
          </Card>
        ) : error ? (
          <Card padding="lg" className="text-center">
            <p className="text-red-600">{error}</p>
            <Button onClick={fetchCandidates} className="mt-4">
              Try Again
            </Button>
          </Card>
        ) : candidates.length === 0 ? (
          <Card padding="lg" className="text-center">
            <p className="text-gray-medium">No candidate registrations yet.</p>
          </Card>
        ) : (
          <>
            <div className="mb-4 text-sm text-gray-medium">
              Total Registrations: <span className="font-semibold text-dark">{candidates.length}</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-subtle border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-dark">Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-dark">Email</th>
                    <th className="text-left py-3 px-4 font-semibold text-dark">Mobile</th>
                    <th className="text-left py-3 px-4 font-semibold text-dark">Registered</th>
                  </tr>
                </thead>
                <tbody>
                  {candidates.map((candidate) => (
                    <tr
                      key={candidate.id}
                      className="border-b border-gray-100 hover:bg-gray-subtle transition-colors"
                    >
                      <td className="py-3 px-4 text-dark">{candidate.name}</td>
                      <td className="py-3 px-4 text-gray-medium">{candidate.email}</td>
                      <td className="py-3 px-4 text-gray-medium">{candidate.mobile}</td>
                      <td className="py-3 px-4 text-gray-medium text-sm">
                        {formatDate(candidate.created_at)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </Section>
  )
}

