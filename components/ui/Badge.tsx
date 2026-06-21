import type { ReactNode } from 'react'

type Variant = 'stack' | 'tag' | 'level'
type Level = 'strong' | 'growing' | 'familiar'

type BadgeProps = {
  variant: Variant
  children: ReactNode
  level?: Level
  className?: string
}

const variantStyles: Record<Variant, string> = {
  stack:
    'bg-bg-secondary border border-border-default text-text-secondary text-[10px] px-2 py-0.5 rounded-sm',
  tag: 'bg-cyan-950 border border-border-accent text-accent-cyan text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-sm',
  level:
    'inline-flex items-center gap-2 text-xs text-text-secondary',
}

const levelDotColor: Record<Level, string> = {
  strong: '#38bdf8',
  growing: '#a3e635',
  familiar: '#475569',
}

export function Badge({ variant, children, level, className = '' }: BadgeProps) {
  if (variant === 'level') {
    return (
      <span className={`${variantStyles.level} font-mono ${className}`}>
        <span
          aria-hidden
          className="inline-block w-2 h-2 rounded-full"
          style={{ backgroundColor: levelDotColor[level ?? 'familiar'] }}
        />
        {children}
      </span>
    )
  }

  return (
    <span className={`${variantStyles[variant]} font-mono ${className}`}>
      {children}
    </span>
  )
}

export default Badge
