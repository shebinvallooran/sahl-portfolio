import { Component, Gauge, Plug } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { FadeInView } from '@/components/animations/FadeInView'

const focus = [
  {
    icon: Plug,
    label: 'api integration',
    text: 'Booking, refund, and dashboard flows wired up to REST APIs in production at Ecogo.',
  },
  {
    icon: Component,
    label: 'reusable components',
    text: 'Building component libraries that cut sprint time and keep UIs consistent across products.',
  },
  {
    icon: Gauge,
    label: 'performance',
    text: 'Optimizing rendering, asset loading, and component structure for fast, responsive layouts.',
  },
]

const strengths = [
  'React.js & Next.js interface development',
  'Responsive design with Tailwind CSS',
  'REST API integration & data handling',
  'Reusable component architecture',
  'Frontend performance optimization',
  'Git & GitHub version control',
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-24">
      <div className="container-page">
        <FadeInView>
          <SectionHeading
            comment="about_me"
            title="A frontend dev who ships production UI."
            subtitle="Frontend developer based in Dubai, shipping React & Next.js interfaces across travel, refund, and e-commerce platforms."
          />
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <FadeInView direction="right">
            <div className="flex flex-col gap-5 text-text-secondary leading-relaxed">
              <p>
                I&apos;m a Frontend Developer skilled in React.js, Next.js, and
                the MERN stack with hands-on experience building responsive and
                scalable web applications. Strong in API integration, reusable
                component design, dashboard interfaces, and performance
                optimization.
              </p>
              <p>
                Proven ability to deliver clean, user-friendly solutions across
                travel booking, refund automation, e-commerce, and MLM platforms.
                Focused on producing reliable, efficient, and high-quality
                frontend results in fast-paced development environments.
              </p>
              <div className="pt-2">
                <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-3">
                  // what i bring
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                  {strengths.map((s) => (
                    <li
                      key={s}
                      className="relative pl-4 text-text-secondary text-sm"
                    >
                      <span
                        aria-hidden
                        className="absolute left-0 top-2 inline-block w-1.5 h-1.5 rounded-sm bg-accent-cyan/70"
                      />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInView>

          <FadeInView direction="left" delay={0.1}>
            <ul className="flex flex-col gap-3">
              {focus.map(({ icon: Icon, label, text }) => (
                <li key={label}>
                  <Card hover variant="glass">
                    <div className="flex items-start gap-3">
                      <span
                        aria-hidden
                        className="mt-0.5 inline-flex p-2 rounded-md bg-white/[0.04] border border-border-default text-accent-cyan"
                      >
                        <Icon size={16} />
                      </span>
                      <div className="flex flex-col">
                        <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
                          // {label}
                        </span>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {text}
                        </p>
                      </div>
                    </div>
                  </Card>
                </li>
              ))}
            </ul>

            <Card
              variant="glass"
              className="mt-6 border-l-4 border-l-accent-cyan"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-accent-cyan mb-1">
                // currently
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Based in Dubai, UAE — open to frontend roles and freelance
                projects. Fastest response by email.
              </p>
            </Card>
          </FadeInView>
        </div>
      </div>
    </section>
  )
}

export default About
