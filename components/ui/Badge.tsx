import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'subtle'
  size?: 'sm' | 'md'
  className?: string
}

export default function Badge({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center font-medium rounded-full'
  
  const variants = {
    primary: 'bg-primary text-white',
    secondary: 'bg-dark text-white',
    outline: 'border border-primary text-primary bg-transparent',
    subtle: 'bg-primary-light text-primary',
  }
  
  const sizes = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  }
  
  return (
    <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  )
}

