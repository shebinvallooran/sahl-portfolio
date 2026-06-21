type SectionHeadingProps = {
  comment: string
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeading({
  comment,
  title,
  subtitle,
  className = '',
}: SectionHeadingProps) {
  return (
    <header className={`flex flex-col gap-2 mb-10 ${className}`}>
      <span className="text-text-muted text-xs tracking-widest font-mono">
        // {comment}
      </span>
      <h2 className="font-display font-bold text-3xl sm:text-4xl text-text-primary">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-text-secondary text-sm max-w-2xl">{subtitle}</p>
      ) : null}
    </header>
  )
}

export default SectionHeading
