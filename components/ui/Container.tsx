import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export default function Container({ 
  children, 
  className = '', 
  size = 'lg' 
}: ContainerProps) {
  const maxWidths = {
    sm: 'max-w-container-sm',
    md: 'max-w-container-md',
    lg: 'max-w-container-lg',
    xl: 'max-w-container',
    full: 'max-w-full',
  }
  
  return (
    <div className={`mx-auto px-6 ${maxWidths[size]} ${className}`}>
      {children}
    </div>
  )
}
