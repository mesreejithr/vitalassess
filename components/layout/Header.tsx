'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Button from '@/components/ui/Button'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Assessments', href: '#assessments' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isHomePage) return

    const sections = navLinks.map(link => link.href.substring(1))
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -60% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1],
    }

    const observer = new IntersectionObserver((entries) => {
      const visibleSections = entries
        .filter(entry => entry.isIntersecting)
        .map(entry => `#${entry.target.id}`)
        .sort((a, b) => {
          const aEl = document.querySelector(a)
          const bEl = document.querySelector(b)
          if (!aEl || !bEl) return 0
          return aEl.getBoundingClientRect().top - bEl.getBoundingClientRect().top
        })

      if (visibleSections.length > 0) {
        setActiveSection(visibleSections[0])
      }
    }, observerOptions)

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [isHomePage])

  const handleNavClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
        setIsMobileMenuOpen(false)
      }
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-gray-200'
          : 'bg-white border-gray-200'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between" aria-label="Main navigation">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
            aria-label="VitalAssess Home"
          >
            VitalAssess
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {isHomePage ? (
              <>
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(link.href, e)}
                    className={`text-sm font-medium transition-colors ${
                      activeSection === link.href
                        ? 'text-primary'
                        : 'text-gray-medium hover:text-primary'
                    }`}
                    aria-label={`Navigate to ${link.label} section`}
                  >
                    {link.label}
                  </a>
                ))}
              </>
            ) : (
              <>
                <Link
                  href="/#features"
                  className="text-sm font-medium text-gray-medium hover:text-primary transition-colors"
                >
                  Features
                </Link>
                <Link
                  href="/#pricing"
                  className="text-sm font-medium text-gray-medium hover:text-primary transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  href="/case-studies"
                  className="text-sm font-medium text-gray-medium hover:text-primary transition-colors"
                >
                  Case Studies
                </Link>
              </>
            )}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button href="/contact" size="sm">
              Request Demo
            </Button>
            <Button href="/login" variant="outline" size="sm">
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-gray-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden mt-4 pb-4 border-t border-gray-200"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col gap-4 pt-4">
              {isHomePage ? (
                <>
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(link.href, e)}
                      className={`text-base font-medium transition-colors py-2 ${
                        activeSection === link.href
                          ? 'text-primary'
                          : 'text-gray-medium hover:text-primary'
                      }`}
                      role="menuitem"
                      aria-label={`Navigate to ${link.label} section`}
                    >
                      {link.label}
                    </a>
                  ))}
                </>
              ) : (
                <>
                  <Link
                    href="/#features"
                    className="text-base font-medium text-gray-medium hover:text-primary transition-colors py-2"
                    role="menuitem"
                  >
                    Features
                  </Link>
                  <Link
                    href="/#pricing"
                    className="text-base font-medium text-gray-medium hover:text-primary transition-colors py-2"
                    role="menuitem"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/case-studies"
                    className="text-base font-medium text-gray-medium hover:text-primary transition-colors py-2"
                    role="menuitem"
                  >
                    Case Studies
                  </Link>
                </>
              )}
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                <Button href="/contact" size="md" className="w-full">
                  Request Demo
                </Button>
                <Button href="/login" variant="outline" size="md" className="w-full">
                  Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
