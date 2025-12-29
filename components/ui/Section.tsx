import { ReactNode } from 'react'
import Container from './Container'

interface SectionProps {
  children: ReactNode
  title?: string
  subtitle?: string
  className?: string
  background?: 'white' | 'gray' | 'subtle'
  id?: string
}

export default function Section({ 
  children, 
  title,
  subtitle,
  className = '', 
  background = 'white',
  id
}: SectionProps) {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-light',
    subtle: 'bg-gray-subtle',
  }
  
  return (
    <section id={id} className={`${bgColors[background]} ${className}`}>
      <Container>
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-medium max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  )
}
