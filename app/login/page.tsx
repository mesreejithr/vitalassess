'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import { supabase, isSupabaseConfigured } from '@/lib/supabase'

interface FormData {
  email: string
  password: string
}

interface FormErrors {
  email?: string
  password?: string
  general?: string
}

export default function Login() {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      // Check if Supabase is configured
      if (!isSupabaseConfigured()) {
        throw new Error('Authentication service is not properly configured. Please contact support.')
      }

      // Sign in with Supabase
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      })

      if (error) {
        throw error
      }

      // Successfully authenticated - redirect to admin page
      router.push('/admin/candidates')
    } catch (error: any) {
      console.error('Login error:', error)
      setErrors({
        general: error?.message || 'Invalid email or password. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
    if (errors.general) {
      setErrors((prev) => ({ ...prev, general: undefined }))
    }
  }

  return (
    <>
      <Section className="py-20">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-dark mb-4">Login</h1>
            <p className="text-lg text-gray-medium">
              Sign in to access your account
            </p>
          </div>

          <Card padding="lg">
            {errors.general && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 font-medium text-sm">
                  {errors.general}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
                  Email Address <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                    errors.email
                      ? 'border-red-300 focus:ring-red-500'
                      : 'border-gray-200'
                  }`}
                  placeholder="you@company.com"
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-dark mb-2">
                  Password <span className="text-primary">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                    errors.password
                      ? 'border-red-300 focus:ring-red-500'
                      : 'border-gray-200'
                  }`}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <span className="text-gray-medium">Remember me</span>
                </label>
                <a
                  href="#"
                  className="text-primary hover:text-primary-dark transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    // TODO: Implement forgot password functionality
                    alert('Forgot password functionality coming soon')
                  }}
                >
                  Forgot password?
                </a>
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-medium">
                Don&apos;t have an account?{' '}
                <a
                  href="/contact"
                  className="text-primary hover:text-primary-dark font-medium transition-colors"
                >
                  Contact us
                </a>
              </p>
            </div>
          </Card>
        </div>
      </Section>
    </>
  )
}

