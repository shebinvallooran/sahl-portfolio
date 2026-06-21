'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Briefcase, Lock } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { FadeInView } from '@/components/animations/FadeInView'
import { projects, type DemoView, type Project } from '@/data/projects'
import { FlightBookingView } from '@/components/sections/FlightBookingDemo'
import Image from 'next/image'

const AUTOPLAY_MS = 5000

type Filter = 'all' | 'featured' | 'full-stack' | 'ui/ux'

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'featured', label: 'Featured' },
  { id: 'full-stack', label: 'Full-stack' },
  { id: 'ui/ux', label: 'UI/UX' },
]

function matches(p: Project, f: Filter) {
  if (f === 'all') return true
  if (f === 'featured') return p.featured || p.tag === 'featured'
  return p.tag === f
}

export function Projects() {
  const [active, setActive] = useState<Filter>('all')

  const visible = useMemo(
    () => projects.filter((p) => matches(p, active)),
    [active],
  )

  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-24">
      <div className="container-page">
        <FadeInView>
          <SectionHeading
            comment="projects"
            title="What I've Shipped."
            subtitle="Production client work shipped at Ecogo Software Solutions — source is private."
          />
        </FadeInView>

        <FadeInView delay={0.1}>
          <div
            role="tablist"
            aria-label="Filter projects"
            className="flex flex-wrap gap-2 mb-8"
          >
            {filters.map((f) => (
              <Button
                key={f.id}
                variant={active === f.id ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setActive(f.id)}
                ariaLabel={`Filter: ${f.label}`}
              >
                {f.label}
              </Button>
            ))}
          </div>
        </FadeInView>

        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {visible.map((p, i) => (
            <FadeInView
              key={p.id}
              as="li"
              delay={i * 0.08}
              className={p.featured ? 'lg:col-span-2' : ''}
            >
              <ProjectCard project={p} />
            </FadeInView>
          ))}
        </ul>

        {visible.length === 0 ? (
          <p className="text-center text-text-muted font-mono text-sm mt-8">
            // no projects match this filter (yet).
          </p>
        ) : null}
      </div>
    </section>
  )
}

function ProjectCard({ project: p }: { project: Project }) {
  const featured = p.featured
  return (
    <div className="group relative h-full">
      {featured ? (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-lg bg-gradient-to-br from-accent-cyan/20 via-transparent to-accent-purple/15 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
        />
      ) : null}
      <Card
        hover
        className={`relative h-full flex flex-col gap-4 bg-bg-card/80 backdrop-blur-sm ${
          featured ? 'lg:p-6' : ''
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <Badge variant="tag">{p.tag}</Badge>
          <span className="font-mono text-[10px] text-text-muted">
            /{p.id}
          </span>
        </div>

        <div
          className={
            featured
              ? 'grid grid-cols-1 lg:grid-cols-5 gap-6 items-start'
              : 'flex flex-col gap-4'
          }
        >
          {p.demo && p.demo.length > 0 ? (
            <div className={featured ? 'lg:col-span-3' : ''}>
              <MultiViewBrowserFrame
                projectId={p.id}
                title={p.title}
                views={p.demo}
                urlHost={p.urlHost ?? 'sahl.dev'}
                featured={featured}
              />
            </div>
          ) : p.image ? (
            <div className={featured ? 'lg:col-span-3' : ''}>
              <BrowserFrame
                src={p.image}
                alt={`${p.title} preview`}
                urlPath={p.id}
                featured={featured}
              />
            </div>
          ) : null}

          <div
            className={`flex flex-col gap-2 ${featured ? 'lg:col-span-2' : ''}`}
          >
            <h3 className="font-display font-bold text-xl text-text-primary">
              {p.title}
            </h3>

            <ul className="flex flex-col gap-1.5 pt-1">
              {p.bullets.map((b) => (
                <li
                  key={b}
                  className="relative pl-4 text-text-secondary text-sm leading-relaxed"
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-2 inline-block w-1.5 h-1.5 rounded-sm bg-accent-cyan/70"
                  />
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 pt-2">
              {p.stack.map((s) => (
                <Badge key={s} variant="stack">
                  {s}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 mt-auto pt-3 border-t border-border-default">
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-text-muted">
            <Lock size={14} aria-hidden /> private — client work
          </span>
          {p.company ? (
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-text-muted">
              <Briefcase size={12} aria-hidden /> {p.company}
            </span>
          ) : null}
        </div>
      </Card>
    </div>
  )
}

type BrowserFrameProps = {
  src: string
  alt: string
  urlPath: string
  featured?: boolean
}

function BrowserFrame({ src, alt, urlPath, featured = false }: BrowserFrameProps) {
  return (
    <div className="group/frame relative rounded-lg overflow-hidden border border-border-default bg-bg-secondary shadow-[0_10px_30px_-15px_rgba(0,0,0,0.7)] transition-all duration-300 hover:border-border-hover hover:shadow-[0_0_0_1px_rgba(56,189,248,0.25),0_20px_50px_-20px_rgba(56,189,248,0.25)]">
      <div className="flex items-center gap-2 px-3 py-2 bg-bg-secondary/95 border-b border-border-default">
        <div className="flex items-center gap-1.5">
          <span aria-hidden className="inline-block w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span aria-hidden className="inline-block w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span aria-hidden className="inline-block w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 flex justify-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-bg-primary/70 border border-border-default font-mono text-[10px] text-text-muted max-w-[240px] truncate">
            <span aria-hidden className="inline-block w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
            ecogo.com/{urlPath}
          </span>
        </div>
        <span aria-hidden className="w-7" />
      </div>
      <div
        className={`relative w-full overflow-hidden bg-bg-primary ${
          featured ? 'h-64 sm:h-80 lg:h-[22rem]' : 'h-48'
        }`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={featured ? '(min-width: 1024px) 60vw, 100vw' : '(min-width: 1024px) 40vw, 100vw'}
          className="object-cover transition-transform duration-500 ease-out group-hover/frame:scale-[1.04]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 via-transparent to-transparent"
        />
      </div>
    </div>
  )
}

type MultiViewBrowserFrameProps = {
  projectId: string
  title: string
  views: DemoView[]
  urlHost: string
  featured?: boolean
}

function MultiViewBrowserFrame({
  projectId,
  title,
  views,
  urlHost,
  featured = false,
}: MultiViewBrowserFrameProps) {
  const [activeIdx, setActiveIdx] = useState(0)
  const [paused, setPaused] = useState(false)
  const active = views[activeIdx]

  useEffect(() => {
    if (paused || views.length <= 1) return
    const t = window.setTimeout(
      () => setActiveIdx((i) => (i + 1) % views.length),
      AUTOPLAY_MS,
    )
    return () => window.clearTimeout(t)
  }, [activeIdx, paused, views.length])

  const select = (i: number) => {
    setActiveIdx(i)
    setPaused(true)
  }

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="group/frame relative rounded-lg overflow-hidden border border-border-default bg-bg-secondary shadow-[0_10px_30px_-15px_rgba(0,0,0,0.7)] transition-all duration-300 hover:border-border-hover hover:shadow-[0_0_0_1px_rgba(56,189,248,0.25),0_20px_50px_-20px_rgba(56,189,248,0.25)]"
    >
      <div className="flex items-center gap-2 px-3 py-2 bg-bg-secondary/95 border-b border-border-default">
        <div className="flex items-center gap-1.5">
          <span aria-hidden className="inline-block w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span aria-hidden className="inline-block w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span aria-hidden className="inline-block w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 flex justify-center">
          <span
            aria-live="polite"
            className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-bg-primary/70 border border-border-default font-mono text-[10px] text-text-muted max-w-[260px] truncate"
          >
            <span aria-hidden className="inline-block w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
            {urlHost}/{active.urlPath}
          </span>
        </div>
        <span
          aria-hidden
          className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded font-mono text-[9px] uppercase tracking-widest ${
            paused ? 'text-text-muted' : 'text-accent-green'
          }`}
        >
          <span className={`w-1 h-1 rounded-full ${paused ? 'bg-text-muted' : 'bg-accent-green animate-pulse'}`} />
          {paused ? 'paused' : 'auto'}
        </span>
      </div>

      <div
        role="tablist"
        aria-label={`${title} demo views`}
        className="flex items-center gap-1 px-2 py-1.5 bg-bg-secondary/60 backdrop-blur-md border-b border-border-default overflow-x-auto"
      >
        {views.map((v, i) => {
          const isActive = i === activeIdx
          const Icon = v.icon
          return (
            <button
              key={v.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`${projectId}-panel-${v.id}`}
              id={`${projectId}-tab-${v.id}`}
              onClick={() => select(i)}
              className={`shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-mono text-[10px] uppercase tracking-widest transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-accent-cyan ${
                isActive
                  ? 'bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/40'
                  : 'text-text-muted border border-transparent hover:text-text-secondary hover:border-border-default'
              }`}
            >
              {Icon ? <Icon size={10} aria-hidden /> : null}
              {v.label}
            </button>
          )
        })}
        <span className="ml-auto font-mono text-[10px] text-text-muted shrink-0">
          {activeIdx + 1}/{views.length}
        </span>
      </div>

      <div
        className={`relative w-full overflow-hidden bg-bg-primary ${
          featured ? 'h-64 sm:h-80 lg:h-[22rem]' : 'h-48'
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.id}
            id={`${projectId}-panel-${active.id}`}
            role="tabpanel"
            aria-labelledby={`${projectId}-tab-${active.id}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            {active.image ? (
              <Image
                src={active.image}
                alt={`${title} — ${active.label}`}
                fill
                sizes={featured ? '(min-width: 1024px) 60vw, 100vw' : '(min-width: 1024px) 40vw, 100vw'}
                className="object-cover"
              />
            ) : projectId === 'flight-booking-system' ? (
              <FlightBookingView viewId={active.id} />
            ) : null}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-bg-primary/30 via-transparent to-transparent pointer-events-none"
            />
          </motion.div>
        </AnimatePresence>

        <div
          aria-hidden
          className={`absolute bottom-0 left-0 right-0 h-0.5 bg-border-default/40 overflow-hidden transition-opacity duration-200 ${
            paused ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <motion.div
            key={`${active.id}-${paused ? 'p' : 'r'}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: paused ? 0 : 1 }}
            transition={{ duration: paused ? 0 : AUTOPLAY_MS / 1000, ease: 'linear' }}
            style={{ transformOrigin: '0% 50%' }}
            className="h-full bg-accent-cyan"
          />
        </div>
      </div>
    </div>
  )
}

export default Projects




