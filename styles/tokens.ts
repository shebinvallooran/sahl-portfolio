export const tokens = {
  colors: {
    bg: {
      primary: '#0a0e17',
      secondary: '#0d1220',
      card: '#0f1929',
    },
    border: {
      default: '#1e2d4a',
      hover: '#2a4a7f',
      accent: '#38bdf8',
    },
    accent: {
      cyan: '#38bdf8',
      green: '#a3e635',
      purple: '#c084fc',
      orange: '#fb923c',
    },
    text: {
      primary: '#f1f5f9',
      secondary: '#94a3b8',
      muted: '#475569',
      accent: '#38bdf8',
    },
  },
  fonts: {
    display: 'Syne',
    mono: 'JetBrains Mono',
  },
  radius: {
    sm: '4px',
    md: '6px',
    lg: '10px',
  },
} as const

export type Tokens = typeof tokens
