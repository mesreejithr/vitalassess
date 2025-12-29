'use client'

import { useState, FormEvent } from 'react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Section from '@/components/ui/Section'

interface FormData {
  name: string
  email: string
  company: string
  hiringVolume: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  company?: string
  hiringVolume?: string
  message?: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    hiringVolume: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required'
    }

    if (!formData.hiringVolume) {
      newErrors.hiringVolume = 'Please select hiring volume'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
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
      // Mock submit - structured for future API integration
      // TODO: Replace with actual API call
      console.log('Form submitted:', formData)

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Success handling
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        hiringVolume: '',
        message: '',
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    } catch (error) {
      console.error('Form submission error:', error)
      // Handle error (could show error message to user)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-dark mb-6">Get in Touch</h1>
              <p className="text-xl text-gray-medium">
                Ready to transform your hiring process? Let&apos;s talk.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Form */}
              <Card padding="lg">
                <h2 className="text-2xl font-semibold text-dark mb-6">Send us a message</h2>
                
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-primary-light border border-primary/20 rounded-lg">
                    <p className="text-primary font-medium">
                      Thank you! Your message has been sent. We&apos;ll get back to you soon.
                    </p>
                  </div>
                )}

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
                      placeholder="John Doe"
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
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-dark mb-2">
                      Company Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                        errors.company
                          ? 'border-red-300 focus:ring-red-500'
                          : 'border-gray-200'
                      }`}
                      placeholder="Your Company"
                    />
                    {errors.company && (
                      <p className="mt-1 text-sm text-red-600">{errors.company}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="hiringVolume" className="block text-sm font-medium text-dark mb-2">
                      Hiring Volume <span className="text-primary">*</span>
                    </label>
                    <select
                      id="hiringVolume"
                      name="hiringVolume"
                      value={formData.hiringVolume}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-white ${
                        errors.hiringVolume
                          ? 'border-red-300 focus:ring-red-500'
                          : 'border-gray-200'
                      }`}
                    >
                      <option value="">Select hiring volume</option>
                      <option value="1-10">1-10 hires per month</option>
                      <option value="11-50">11-50 hires per month</option>
                      <option value="51-100">51-100 hires per month</option>
                      <option value="101-500">101-500 hires per month</option>
                      <option value="500+">500+ hires per month</option>
                    </select>
                    {errors.hiringVolume && (
                      <p className="mt-1 text-sm text-red-600">{errors.hiringVolume}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none ${
                        errors.message
                          ? 'border-red-300 focus:ring-red-500'
                          : 'border-gray-200'
                      }`}
                      placeholder="Tell us about your hiring needs..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Card>

              {/* Contact Details */}
              <div>
                <Card padding="lg">
                  <h2 className="text-2xl font-semibold text-dark mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-medium uppercase mb-2">
                        Email
                      </h3>
                      <a
                        href="mailto:mail@vitalassess.com"
                        className="text-dark hover:text-primary transition-colors"
                      >
                        mail@vitalassess.com
                      </a>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-gray-medium uppercase mb-2">
                        Phone
                      </h3>
                      <a
                        href="tel:9744824525"
                        className="text-dark hover:text-primary transition-colors"
                      >
                        9744824525
                      </a>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-gray-medium uppercase mb-2">
                        Address
                      </h3>
                      <address className="text-dark not-italic leading-relaxed">
                        67/A, Residents Ln, Edappally<br />
                        Ernakulam, Kochi<br />
                        Kerala 682024<br />
                        India
                      </address>
                    </div>
                  </div>
                </Card>

                <div className="mt-6">
                  <Card padding="lg" className="bg-gray-subtle">
                    <h3 className="text-lg font-semibold text-dark mb-3">
                      Business Hours
                    </h3>
                    <div className="space-y-2 text-gray-medium">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                      <p>Saturday: 10:00 AM - 2:00 PM IST</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
      </Section>
    </>
  )
}
