import { ReactNode } from 'react'
import Card from './Card'

interface FeatureCardProps {
  icon?: ReactNode
  title: string
  description: string
  className?: string
  hover?: boolean
}

export default function FeatureCard({
  icon,
  title,
  description,
  className = '',
  hover = true,
}: FeatureCardProps) {
  return (
    <Card hover={hover} className={className}>
      {icon && (
        <div className="mb-4 text-primary">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-dark mb-3">
        {title}
      </h3>
      <p className="text-gray-medium">
        {description}
      </p>
    </Card>
  )
}

