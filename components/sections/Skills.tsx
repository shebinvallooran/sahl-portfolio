import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { FadeInView } from '@/components/animations/FadeInView'
import { skills, type Skill } from '@/data/skills'

type Category = Skill['category']

const categoryLabels: Record<Category, string> = {
  frontend: 'frontend',
  backend: 'backend (basics)',
  database: 'database',
  tools: 'tools',
}

const categoryOrder: Category[] = ['frontend', 'backend', 'database', 'tools']

const levelColor: Record<Skill['level'], string> = {
  strong: '#38bdf8',
  growing: '#a3e635',
  familiar: '#475569',
}

const legend: { level: Skill['level']; label: string }[] = [
  { level: 'strong', label: 'strong' },
  { level: 'growing', label: 'growing' },
  { level: 'familiar', label: 'familiar' },
]

export function Skills() {
  const grouped = categoryOrder.map((cat) => ({
    category: cat,
    items: skills.filter((s) => s.category === cat),
  }))

  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-24 bg-bg-secondary/30">
      <div className="container-page">
        <FadeInView>
          <SectionHeading
            comment="tech_stack"
            title="What I work with."
            subtitle="A working snapshot — always shifting as I learn."
          />
        </FadeInView>

        <FadeInView delay={0.1}>
          <ul className="flex flex-wrap items-center gap-5 mb-10">
            {legend.map(({ level, label }) => (
              <li key={level} className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="inline-block w-2 h-2 rounded-full"
                  style={{ backgroundColor: levelColor[level] }}
                />
                <span className="font-mono text-xs text-text-secondary">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </FadeInView>

        <div className="flex flex-col gap-10">
          {grouped.map((group, gi) => (
            <FadeInView key={group.category} delay={gi * 0.1}>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4">
                  // {categoryLabels[group.category]}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <li key={s.name}>
                      <Card hover variant="glass" className="!p-2 !px-3 !rounded-md">
                        <span className="inline-flex items-center gap-2 font-mono text-xs text-text-primary">
                          <span
                            aria-hidden
                            className="inline-block w-2 h-2 rounded-full"
                            style={{ backgroundColor: levelColor[s.level] }}
                          />
                          {s.name}
                        </span>
                      </Card>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
