export type TerminalLineType =
  | 'keyword'
  | 'string'
  | 'value'
  | 'comment'
  | 'plain'

export type TerminalLine = {
  type: TerminalLineType
  content: string
}

type TerminalBlockProps = {
  lines: TerminalLine[]
  title?: string
  className?: string
}

const colorMap: Record<TerminalLineType, string> = {
  keyword: '#c084fc',
  string: '#fb923c',
  value: '#a3e635',
  comment: '#475569',
  plain: '#94a3b8',
}

export function TerminalBlock({
  lines,
  title = '~/portfolio',
  className = '',
}: TerminalBlockProps) {
  return (
    <div
      className={`bg-bg-primary border border-border-default rounded-md font-mono text-sm overflow-hidden shadow-lg shadow-black/30 ${className}`}
    >
      <div className="flex items-center gap-2 px-3 py-2 border-b border-border-default bg-bg-secondary">
        <span
          aria-hidden
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: '#fb7185' }}
        />
        <span
          aria-hidden
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: '#fbbf24' }}
        />
        <span
          aria-hidden
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: '#a3e635' }}
        />
        <span className="ml-3 text-text-muted text-xs">{title}</span>
      </div>
      <pre className="p-4 leading-relaxed overflow-x-auto">
        <code>
          {lines.map((line, i) => (
            <span
              key={i}
              className="block whitespace-pre"
              style={{ color: colorMap[line.type] }}
            >
              {line.content}
            </span>
          ))}
        </code>
      </pre>
    </div>
  )
}

export default TerminalBlock
