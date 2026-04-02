import { type ReactNode } from 'react'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
  title?: string
  subtitle?: string
}

export default function Section({
  id,
  children,
  className = '',
  title,
  subtitle,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`min-h-screen px-6 py-20 md:py-32 ${className}`}
    >
      <div className="mx-auto max-w-6xl">
        {(title || subtitle) && (
          <div className="mb-16 text-center">
            {subtitle && (
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

