type Size = 'sm' | 'md' | 'lg'

type MhdSahlLogoProps = {
  size?: Size
  className?: string
  showCursor?: boolean
}

const sizeStyles: Record<Size, { text: string; gap: string; cursor: string }> = {
  sm: { text: 'text-lg', gap: 'gap-1.5', cursor: 'w-[2px] h-4 ml-1' },
  md: { text: 'text-2xl', gap: 'gap-2', cursor: 'w-[3px] h-5 ml-1' },
  lg: { text: 'text-4xl', gap: 'gap-3', cursor: 'w-[4px] h-8 ml-1.5' },
}

export function MhdSahlLogo({
  size = 'sm',
  className = '',
  showCursor = true,
}: MhdSahlLogoProps) {
  const s = sizeStyles[size]
  return (
    <span
      className={`inline-flex items-baseline font-display font-extrabold tracking-tight leading-none ${s.text} ${s.gap} ${className}`}
      aria-label="Mhd Sahl"
    >
      <span className="text-text-primary">Mhd</span>
      <span className="inline-flex items-baseline text-accent-cyan">
        Sahl
        {showCursor ? (
          <span
            aria-hidden
            className={`inline-block bg-accent-cyan rounded-sm align-middle animate-cursor-blink ${s.cursor}`}
          />
        ) : null}
      </span>
    </span>
  )
}

export default MhdSahlLogo
