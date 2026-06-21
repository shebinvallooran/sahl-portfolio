import { Github, Linkedin, Mail } from 'lucide-react'
import { MhdSahlLogo } from '@/components/layout/MhdSahlLogo'

const socials = [
  // { href: 'https://github.com/sahlmhd', label: 'GitHub', Icon: Github },
  { href: 'www.linkedin.com/in/sahlmhdoo7', label: 'LinkedIn', Icon: Linkedin },
  { href: 'mailto:sahlmhd007@gmail.com', label: 'Email', Icon: Mail },
]

export function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border-default mt-24">
      <div className="container-page py-10 flex flex-col items-center gap-5 text-center">
        <a
          href="#hero"
          aria-label="Mhd Sahl — back to top"
          className="inline-flex items-center rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-bg-secondary"
        >
          <MhdSahlLogo size="sm" />
        </a>
        <p className="font-mono text-xs text-text-muted">
          // built with Next.js + Tailwind — Mohammed Sahl V U © {new Date().getFullYear()}
        </p>
        <ul className="flex items-center gap-5">
          {socials.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent-cyan transition-colors inline-flex"
              >
                <Icon size={18} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
