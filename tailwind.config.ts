import type { Config } from 'tailwindcss'
import { tokens } from './styles/tokens'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: tokens.colors.bg.primary,
          secondary: tokens.colors.bg.secondary,
          card: tokens.colors.bg.card,
        },
        border: {
          default: tokens.colors.border.default,
          hover: tokens.colors.border.hover,
          accent: tokens.colors.border.accent,
        },
        accent: {
          cyan: tokens.colors.accent.cyan,
          green: tokens.colors.accent.green,
          purple: tokens.colors.accent.purple,
          orange: tokens.colors.accent.orange,
        },
        text: {
          primary: tokens.colors.text.primary,
          secondary: tokens.colors.text.secondary,
          muted: tokens.colors.text.muted,
          accent: tokens.colors.text.accent,
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Syne', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        sm: tokens.radius.sm,
        md: tokens.radius.md,
        lg: tokens.radius.lg,
      },
      backgroundImage: {
        'grid-dots':
          'radial-gradient(circle, rgba(56,189,248,0.08) 1px, transparent 1px)',
        'grid-lines':
          'linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dots-md': '24px 24px',
        'grid-md': '40px 40px',
      },
      keyframes: {
        'cursor-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'cursor-blink': 'cursor-blink 1.1s step-end infinite',
      },
    },
  },
  plugins: [],
}

export default config
