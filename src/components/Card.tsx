import { type ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`rounded-lg border border-border bg-background-cardHover p-6 backdrop-blur-sm transition-all duration-300 ${
        hover ? 'hover:border-primary/50 hover:bg-background-card hover:shadow-lg hover:shadow-primary/10' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
