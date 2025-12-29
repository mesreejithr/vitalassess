import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

export default function Card({ 
  children, 
  className = '', 
  hover = false,
  padding = 'md'
}: CardProps) {
  const baseStyles = 'bg-white rounded-xl border border-gray-200'
  const hoverStyles = hover ? 'transition-shadow hover:shadow-md' : ''
  
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }
  
  return (
    <div className={`${baseStyles} ${paddings[padding]} ${hoverStyles} ${className}`}>
      {children}
    </div>
  )
}
