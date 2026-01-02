'use client'

import { useState, FormEvent } from 'react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'
import { supabase, isSupabaseConfigured } from '@/lib/supabase'

interface FormData {
  name: string
  email: string
  mobile: string
}

interface FormErrors {
  name?: string
  email?: string
  mobile?: string
}

export default function FreeAssessment() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    mobile: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required'
    } else if (!/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/.test(formData.mobile.trim())) {
      newErrors.mobile = 'Please enter a valid mobile number'
    } else if (formData.mobile.trim().replace(/[^0-9]/g, '').length < 10) {
      newErrors.mobile = 'Mobile number must be at least 10 digits'
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

    try {
      // Check if Supabase is configured
      if (!isSupabaseConfigured()) {
        throw new Error('Service is not properly configured. Please contact support.')
      }

      const { name, email, mobile } = formData

      // Validate mobile format
      const mobileDigits = mobile.replace(/[^0-9]/g, '')
      if (mobileDigits.length < 10) {
        setErrors({ mobile: 'Invalid mobile number' })
        return
      }

      // Check for duplicate email
      const { data: existingCandidate, error: checkError } = await supabase
        .from('candidates')
        .select('email')
        .eq('email', email.toLowerCase().trim())
        .maybeSingle()

      if (checkError) {
        console.error('Supabase check error:', checkError)
        if (checkError.code === 'PGRST116' || checkError.message?.includes('relation') || checkError.message?.includes('does not exist')) {
          setErrors({ email: 'Database not configured. Please contact support.' })
        } else {
          setErrors({ email: 'Failed to check registration. Please try again.' })
        }
        return
      }

      if (existingCandidate) {
        setErrors({ email: 'This email is already registered' })
        return
      }

      // Insert candidate into database
      const { data: candidate, error: insertError } = await supabase
        .from('candidates')
        .insert({
          name: name.trim(),
          email: email.toLowerCase().trim(),
          mobile: mobile.trim(),
          mobile_digits: mobileDigits,
        })
        .select()
        .single()

      if (insertError) {
        console.error('Supabase insert error:', insertError)
        
        if (insertError.code === 'PGRST116' || insertError.message?.includes('relation') || insertError.message?.includes('does not exist')) {
          setErrors({ email: 'Database not configured. Please contact support.' })
        } else if (insertError.code === '42501' || insertError.message?.includes('permission denied') || insertError.message?.includes('row-level security')) {
          setErrors({ email: 'Database permission error. Please contact support.' })
        } else if (insertError.code === '23505' || insertError.message?.includes('duplicate key')) {
          setErrors({ email: 'This email is already registered' })
        } else {
          setErrors({ email: 'Failed to save registration. Please try again.' })
        }
        return
      }

      // Success handling
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        mobile: '',
      })
      setErrors({}) // Clear any previous errors

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    } catch (error: any) {
      console.error('Form submission error:', error)
      setErrors({
        email: error?.message || 'Something went wrong. Please try again later.',
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
  }

  return (
    <>
      <Section className="py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-dark mb-6">Free Assessment for Candidates</h1>
            <p className="text-xl text-gray-medium">
              Take our free assessment and discover your potential. Get instant insights into your skills and strengths.
            </p>
          </div>

          <Card padding="lg">
            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">
                  ✓ Thank you for registering! We&apos;ll send you the assessment details shortly.
                </p>
              </div>
            )}

            <h2 className="text-2xl font-semibold text-dark mb-6">Register for Free Assessment</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                    errors.name
                      ? 'border-red-300 focus:ring-red-500'
                      : 'border-gray-200'
                  }`}
                  placeholder="Enter your full name"
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

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
                  placeholder="your.email@example.com"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-dark mb-2">
                  Mobile Number <span className="text-primary">*</span>
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                    errors.mobile
                      ? 'border-red-300 focus:ring-red-500'
                      : 'border-gray-200'
                  }`}
                  placeholder="+91 9876543210"
                  disabled={isSubmitting}
                />
                {errors.mobile && (
                  <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Register for Free Assessment'}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-medium text-center">
                By registering, you agree to receive assessment details and updates via email and SMS.
              </p>
            </div>
          </Card>

          <div className="mt-8 text-center">
            <Card padding="md" className="bg-gray-subtle">
              <h3 className="text-lg font-semibold text-dark mb-3">What to Expect</h3>
              <ul className="text-left space-y-2 text-gray-medium text-sm max-w-md mx-auto">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Receive assessment link via email and SMS</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Complete the assessment at your convenience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Get instant results and personalized insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>No cost, no commitment - completely free</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>
    </>
  )
}

