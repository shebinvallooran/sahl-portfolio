'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Direction = 'up' | 'left' | 'right'

type FadeInViewProps = {
  children: ReactNode
  delay?: number
  direction?: Direction
  className?: string
  as?: 'div' | 'li' | 'article' | 'section'
}

function getOffset(direction: Direction) {
  switch (direction) {
    case 'left':
      return { x: 20, y: 0 }
    case 'right':
      return { x: -20, y: 0 }
    case 'up':
    default:
      return { x: 0, y: 20 }
  }
}

export function FadeInView({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  as = 'div',
}: FadeInViewProps) {
  const offset = getOffset(direction)
  const common = {
    className,
    initial: { opacity: 0, ...offset },
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.5, delay, ease: 'easeOut' as const },
  }

  switch (as) {
    case 'li':
      return <motion.li {...common}>{children}</motion.li>
    case 'article':
      return <motion.article {...common}>{children}</motion.article>
    case 'section':
      return <motion.section {...common}>{children}</motion.section>
    case 'div':
    default:
      return <motion.div {...common}>{children}</motion.div>
  }
}

export default FadeInView
