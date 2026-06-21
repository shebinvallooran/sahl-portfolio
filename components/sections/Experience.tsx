import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { FadeInView } from '@/components/animations/FadeInView'
import { experiences } from '@/data/experience'

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-24">
      <div className="container-page">
        <FadeInView>
          <SectionHeading
            comment="work_history"
            title="Where I've worked."
            subtitle="Two roles, lots of shipped UI — booking, refund, MLM, and e-commerce platforms."
          />
        </FadeInView>

        <ol className="relative pl-6 sm:pl-8">
          <span
            aria-hidden
            className="absolute left-1.5 sm:left-2 top-1 bottom-1 w-px bg-border-default"
          />

          {experiences.map((e, i) => (
            <FadeInView
              key={e.id}
              as="li"
              delay={i * 0.1}
              className="relative pb-10 last:pb-0"
            >
              <span
                aria-hidden
                className="absolute -left-[18px] sm:-left-[22px] top-4 inline-block w-3 h-3 rounded-full bg-accent-cyan ring-4 ring-bg-primary"
              />

              <Card hover variant="glass" className="flex flex-col gap-2">
                <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
                  {e.period} · {e.location}
                </span>
                <h3 className="font-display font-bold text-xl text-text-primary">
                  {e.role}
                </h3>
                <p className="font-mono text-sm text-accent-cyan">
                  @ {e.company}
                </p>
                <ul className="flex flex-col gap-1.5 pt-1 max-w-2xl">
                  {e.bullets.map((b) => (
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
                <ul className="flex flex-wrap gap-1.5 pt-3">
                  {e.tags.map((t) => (
                    <li key={t}>
                      <Badge variant="stack">{t}</Badge>
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeInView>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Experience
