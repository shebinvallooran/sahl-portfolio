import { Award, GraduationCap, Languages as LanguagesIcon } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { FadeInView } from '@/components/animations/FadeInView'
import { certifications, education, languages } from '@/data/education'

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="py-24 bg-bg-secondary/30"
    >
      <div className="container-page">
        <FadeInView>
          <SectionHeading
            comment="education"
            title="Education & credentials."
            subtitle="Formal study, certifications, and the languages I speak."
          />
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <FadeInView direction="right">
            <Card hover variant="glass" className="h-full flex flex-col gap-4">
              <PanelHeader
                icon={GraduationCap}
                label="education"
                title="Degree"
              />
              <ul className="flex flex-col gap-4">
                {education.map((e) => (
                  <li key={e.id} className="flex flex-col gap-1">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                      {e.period} · {e.location}
                    </span>
                    <h4 className="font-display font-bold text-base text-text-primary leading-snug">
                      {e.degree}
                    </h4>
                    <p className="font-mono text-xs text-accent-cyan">
                      @ {e.institution}
                    </p>
                    <p className="font-mono text-[11px] text-text-muted">
                      {e.university}
                    </p>
                  </li>
                ))}
              </ul>
            </Card>
          </FadeInView>

          <FadeInView delay={0.1}>
            <Card hover variant="glass" className="h-full flex flex-col gap-4">
              <PanelHeader
                icon={Award}
                label="certifications"
                title="Certifications"
              />
              <ul className="flex flex-col gap-3">
                {certifications.map((c) => (
                  <li
                    key={c.id}
                    className="flex flex-col gap-1 pb-3 last:pb-0 border-b border-border-default last:border-0"
                  >
                    <p className="text-text-primary text-sm leading-snug">
                      {c.title}
                    </p>
                    <p className="font-mono text-[11px] text-text-muted">
                      — {c.issuer}
                    </p>
                  </li>
                ))}
              </ul>
            </Card>
          </FadeInView>

          <FadeInView direction="left" delay={0.2}>
            <Card hover variant="glass" className="h-full flex flex-col gap-4">
              <PanelHeader
                icon={LanguagesIcon}
                label="languages"
                title="Languages"
              />
              <ul className="flex flex-wrap gap-2">
                {languages.map((l) => (
                  <li key={l.name}>
                    <Badge variant="stack">
                      {l.name}
                      {l.level ? ` · ${l.level}` : ''}
                    </Badge>
                  </li>
                ))}
              </ul>
            </Card>
          </FadeInView>
        </div>
      </div>
    </section>
  )
}

type PanelHeaderProps = {
  icon: React.ComponentType<{ size?: string | number }>
  label: string
  title: string
}

function PanelHeader({ icon: Icon, label, title }: PanelHeaderProps) {
  return (
    <header className="flex items-start gap-3">
      <span
        aria-hidden
        className="inline-flex p-2 rounded-md bg-white/[0.04] border border-border-default text-accent-cyan"
      >
        <Icon size={16} />
      </span>
      <div className="flex flex-col leading-tight">
        <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
          // {label}
        </span>
        <h3 className="font-display font-bold text-base text-text-primary">
          {title}
        </h3>
      </div>
    </header>
  )
}

export default Education
