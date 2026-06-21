import type { ReactNode } from 'react'

type Variant = 'solid' | 'glass'

type CardProps = {
  hover?: boolean
  variant?: Variant
  className?: string
  children: ReactNode
}

const variantStyles: Record<Variant, string> = {
  solid: 'bg-bg-card border border-border-default rounded-lg p-4',
  glass:
    'bg-white/[0.03] backdrop-blur-xl border border-border-default rounded-xl p-4 shadow-lg shadow-black/20',
}

const hoverStyles: Record<Variant, string> = {
  solid: 'transition-colors duration-200 hover:border-border-accent',
  glass:
    'transition-all duration-300 hover:border-border-accent hover:bg-white/[0.05] hover:shadow-accent-cyan/5',
}

export function Card({
  hover = false,
  variant = 'solid',
  className = '',
  children,
}: CardProps) {
  const base = variantStyles[variant]
  const interactive = hover ? hoverStyles[variant] : ''
  return <div className={`${base} ${interactive} ${className}`}>{children}</div>
}

export default Card
