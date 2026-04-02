import { type ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  onClick?: () => void
  href?: string
  className?: string
}

export default function Button({
  children,
  variant = 'primary',
  onClick,
  href,
  className = '',
}: ButtonProps) {
  const baseStyles =
    'rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 uppercase tracking-wide'

  const variants = {
    primary:
      'bg-[#333333] text-[#e0e0e0] hover:bg-[#3a3a3a] hover:shadow-lg hover:shadow-[#6A0DAD]/20',
    secondary:
      'border border-[#333333] bg-[#212121] text-[#e0e0e0] hover:border-[#6A0DAD]/50',
    outline:
      'border border-[#6A0DAD]/40 bg-[#6A0DAD]/10 text-[#6A0DAD] hover:bg-[#6A0DAD]/20',
  }

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  )
}
