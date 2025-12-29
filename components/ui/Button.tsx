import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary',
    secondary: 'bg-dark text-white hover:bg-dark-light focus:ring-dark',
    ghost: 'text-gray-medium hover:text-primary hover:bg-gray-subtle focus:ring-primary',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed pointer-events-none'
    : ''
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`
  
  if (href && !disabled) {
    if (href.startsWith('#')) {
      return (
        <a 
          href={href} 
          className={classes} 
          aria-disabled={disabled}
          onClick={(e) => {
            if (disabled) {
              e.preventDefault()
            }
          }}
        >
          {children}
        </a>
      )
    }
    return (
      <Link 
        href={href} 
        className={classes} 
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
      >
        {children}
      </Link>
    )
  }
  
  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={classes}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
    </button>
  )
}
