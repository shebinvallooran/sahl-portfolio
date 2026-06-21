import { Clock, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { FadeInView } from '@/components/animations/FadeInView'

const EMAIL = 'sahlmhd007@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/sahlmhdoo7'

const socials = [

{
  href: LINKEDIN,
  label: 'LinkedIn',
  handle: '/in/sahlmhdoo7',
  Icon: Linkedin,
},
  {
    href: `mailto:${EMAIL}`,
    label: 'Email',
    handle: EMAIL,
    Icon: Mail,
  },
]

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-24">
      <div className="container-page">
        <FadeInView>
          <SectionHeading
            comment="get_in_touch"
            title="Let's build something."
            subtitle="Open to frontend roles and freelance projects. The fastest way to reach me is email."
          />
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <FadeInView direction="right">
            <div className="flex flex-col gap-6">
              <p className="text-text-secondary leading-relaxed">
                Based in Dubai, UAE and looking for the next frontend role —
                full-time or freelance. If you&apos;re hiring, collaborating,
                or just want to swap notes on a stack, say hi.
              </p>

              <ul className="flex flex-col gap-3">
                {socials.map(({ href, label, handle, Icon }) => {
                  const isInternal =
                    href.startsWith('mailto:') || href.startsWith('tel:')
                  return (
                    <li key={label}>
                      <a
                        href={href}
                        target={isInternal ? undefined : '_blank'}
                        rel={isInternal ? undefined : 'noopener noreferrer'}
                        className="group inline-flex items-center gap-3 text-text-secondary hover:text-accent-cyan transition-colors"
                      >
                        <span className="inline-flex p-2 rounded-md bg-bg-card border border-border-default group-hover:border-border-accent text-accent-cyan transition-colors">
                          <Icon size={16} />
                        </span>
                        <span className="font-mono text-sm">
                          <span className="text-text-muted">{label} —</span>{' '}
                          {handle}
                        </span>
                      </a>
                    </li>
                  )
                })}
                <li className="inline-flex items-center gap-3 text-text-muted">
                  <span className="inline-flex p-2 rounded-md bg-bg-card border border-border-default">
                    <MapPin size={16} />
                  </span>
                  <span className="font-mono text-sm">
                    Dubai, UAE
                  </span>
                </li>
              </ul>

              <div>
                <Button href={`mailto:${EMAIL}`} variant="primary" size="md">
                  <Mail size={16} /> say_hi()
                </Button>
              </div>
            </div>
          </FadeInView>

          <FadeInView direction="left" delay={0.1}>
            <aside
              aria-label="Availability"
              className="relative"
            >
              <div
                aria-hidden
                className="absolute -top-12 -right-8 w-64 h-64 rounded-full bg-accent-cyan/15 blur-3xl pointer-events-none"
              />
              <div
                aria-hidden
                className="absolute -bottom-10 -left-6 w-56 h-56 rounded-full bg-accent-purple/15 blur-3xl pointer-events-none"
              />

              <div className="relative rounded-2xl border border-border-default bg-white/[0.03] backdrop-blur-xl p-7 sm:p-8 shadow-2xl shadow-accent-cyan/5 overflow-hidden">
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-grid-dots bg-dots-md opacity-30 pointer-events-none"
                />

                <div className="relative flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <Sparkles size={14} className="text-accent-cyan" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                      // status
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-accent-green/30 bg-accent-green/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-accent-green">
                      open to work
                    </span>
                  </div>
                </div>

                <div className="relative mt-5">
                  <h3 className="font-display font-bold text-xl text-text-primary leading-tight">
                    Let&apos;s build something.
                  </h3>
                  <p className="font-mono text-xs text-text-secondary mt-2 leading-relaxed">
                    Currently accepting frontend roles and freelance projects.
                    Replies typically arrive within 24 hours.
                  </p>
                </div>

                <dl className="relative mt-6 space-y-3 font-mono text-xs">
                  <div className="flex items-center gap-3 text-text-secondary">
                    <MapPin size={14} className="text-accent-cyan shrink-0" />
                    <dt className="sr-only">Location</dt>
                    <dd>Dubai, UAE · GMT+4</dd>
                  </div>
                  <div className="flex items-center gap-3 text-text-secondary">
                    <Clock size={14} className="text-accent-cyan shrink-0" />
                    <dt className="sr-only">Response time</dt>
                    <dd>Responds within 24h</dd>
                  </div>
                  <div className="flex items-center gap-3 text-text-secondary">
                    <Mail size={14} className="text-accent-cyan shrink-0" />
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="hover:text-accent-cyan transition-colors"
                      >
                        {EMAIL}
                      </a>
                    </dd>
                  </div>
                </dl>

                <div className="relative mt-6 pt-6 border-t border-border-default">
                  <Button
                    href={`mailto:${EMAIL}`}
                    variant="primary"
                    size="md"
                    className="w-full"
                    ariaLabel={`Send email to ${EMAIL}`}
                  >
                    <Mail size={16} /> send_email()
                  </Button>
                </div>
              </div>
            </aside>
          </FadeInView>
        </div>
      </div>
    </section>
  )
}

export default Contact
