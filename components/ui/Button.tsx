import type { MouseEventHandler, ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

type ButtonProps = {
  variant?: Variant
  size?: Size
  href?: string
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
  children: ReactNode
  className?: string
  ariaLabel?: string
  type?: 'button' | 'submit' | 'reset'
}

const base =
  'inline-flex items-center justify-center gap-2 font-mono rounded-md transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary disabled:opacity-50 disabled:cursor-not-allowed'

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-accent-cyan text-bg-primary font-bold hover:bg-sky-300 active:bg-sky-400',
  outline:
    'border border-border-accent text-accent-cyan bg-transparent hover:bg-accent-cyan/10',
  ghost:
    'text-text-secondary bg-transparent hover:text-accent-cyan',
}

const sizeStyles: Record<Size, string> = {
  sm: 'text-xs px-3 py-1.5',
  md: 'text-sm px-4 py-2',
  lg: 'text-base px-6 py-3',
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  ariaLabel,
  type = 'button',
}: ButtonProps) {
  const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (href) {
    const isExternal = /^https?:\/\//.test(href) || href.startsWith('mailto:')
    return (
      <a
        href={href}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
        className={classes}
        aria-label={ariaLabel}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick as MouseEventHandler<HTMLButtonElement>}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}

export default Button
