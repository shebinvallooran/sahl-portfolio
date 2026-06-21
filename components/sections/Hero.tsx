'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Briefcase, Clock, Download, MapPin, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { projects } from '@/data/projects'
import { skills } from '@/data/skills'

const stats = [
  { label: 'projects', value: `${projects.length}+` },
  { label: 'years_writing_code', value: '2+' },
  { label: 'technologies', value: `${skills.length}+` },
]

const primaryStack = [
  'React.js',
  'Next.js',
  'TypeScript',
  'Tailwind',
  'Node.js',
  'MongoDB',
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Intro"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-dots bg-dots-md opacity-60 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent"
      />

      <div className="container-page relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          <motion.span
            variants={item}
            className="font-mono text-xs text-text-muted tracking-widest"
          >
            // hello, world —
          </motion.span>

          <motion.div
            variants={item}
            className="font-mono text-sm text-accent-green"
          >
            <span className="text-text-muted">$</span> whoami{' '}
            <span className="text-text-muted">→</span>{' '}
            <span className="text-accent-cyan">frontend developer</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight"
          >
            <span className="block text-text-primary">Mohammed</span>
            <span className="block text-accent-cyan">Sahl</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="font-mono text-sm text-text-secondary uppercase tracking-widest"
          >
            frontend developer · react · next.js · mern · dubai
          </motion.p>

          <motion.p
            variants={item}
            className="text-text-secondary text-base max-w-xl leading-relaxed"
          >
            Frontend Developer skilled in React.js, Next.js, and the MERN stack
            with hands-on experience building responsive and scalable web
            applications. Strong in API integration, reusable component design,
            dashboard interfaces, and performance optimization.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3">
            <Button href="#projects" variant="primary" size="md">
              view_projects() <ArrowRight size={16} />
            </Button>
            {/* <Button href="/resume.pdf" variant="outline" size="md">
              <Download size={16} /> download_cv
            </Button> */}
            
          </motion.div>

          <motion.dl
            variants={item}
            className="grid grid-cols-3 gap-6 pt-6 border-t border-border-default max-w-md"
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <dt className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                  {s.label}
                </dt>
                <dd className="font-display font-bold text-2xl text-accent-cyan">
                  {s.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          aria-label="Developer profile and availability"
          className="relative w-full"
        >
          <div
            aria-hidden
            className="absolute -top-16 -right-10 w-72 h-72 rounded-full bg-accent-cyan/20 blur-3xl pointer-events-none"
          />
          <div
            aria-hidden
            className="absolute -bottom-12 -left-8 w-64 h-64 rounded-full bg-accent-purple/20 blur-3xl pointer-events-none"
          />

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative rounded-2xl border border-border-default bg-white/[0.03] backdrop-blur-xl p-7 sm:p-8 shadow-2xl shadow-accent-cyan/5 overflow-hidden"
          >
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-grid-dots bg-dots-md opacity-30 pointer-events-none"
            />

            <div className="relative flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent-cyan/30 via-accent-purple/20 to-accent-green/20 border border-border-default flex items-center justify-center font-display font-bold text-2xl text-text-primary">
                    MS
                  </div>
                  <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-60" />
                    <span className="relative inline-flex h-4 w-4 rounded-full bg-accent-green border-2 border-bg-primary" />
                  </span>
                </div>
                <div className="flex flex-col">
                  <div className="font-display font-bold text-lg text-text-primary leading-tight">
                    Mohammed Sahl
                  </div>
                  <div className="font-mono text-xs text-text-secondary mt-0.5">
                    Frontend Developer
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-accent-green/30 bg-accent-green/10">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent-green">
                  available
                </span>
              </div>
            </div>

            <dl className="relative mt-7 space-y-3 font-mono text-xs">
              <div className="flex items-center gap-3 text-text-secondary">
                <MapPin size={14} className="text-accent-cyan shrink-0" />
                <dt className="sr-only">Location</dt>
                <dd>Dubai, UAE</dd>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <Briefcase size={14} className="text-accent-cyan shrink-0" />
                <dt className="sr-only">Status</dt>
                <dd>Open to frontend roles</dd>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <Clock size={14} className="text-accent-cyan shrink-0" />
                <dt className="sr-only">Timezone</dt>
                <dd>GMT+4 · Responds within 24h</dd>
              </div>
            </dl>

            <div className="relative mt-7 pt-6 border-t border-border-default">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={12} className="text-accent-cyan" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                  primary_stack
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {primaryStack.map((t) => (
                  <li
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-bg-card border border-border-default text-text-primary text-xs font-mono hover:border-border-accent hover:text-accent-cyan transition-colors"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.aside>
      </div>
    </section>
  )
}

export default Hero
