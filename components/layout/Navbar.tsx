'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { MhdSahlLogo } from '@/components/layout/MhdSahlLogo'

const navItems = [
  { id: 'about', label: 'about' },
  { id: 'projects', label: 'projects' },
  { id: 'skills', label: 'skills' },
  { id: 'experience', label: 'experience' },
  { id: 'contact', label: 'contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-50 bg-bg-secondary/90 backdrop-blur border-b border-border-default"
    >
      <div className="container-page flex items-center justify-between h-14">
        <a
          href="#hero"
          className="inline-flex items-center rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-bg-secondary"
          onClick={close}
          aria-label="Mhd Sahl — home"
        >
          <MhdSahlLogo size="sm" />
        </a>

        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="font-mono text-xs text-text-muted hover:text-accent-cyan transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden text-text-secondary hover:text-accent-cyan p-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="md:hidden border-t border-border-default bg-bg-secondary">
          <ul className="container-page py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={close}
                  className="block font-mono text-sm text-text-secondary hover:text-accent-cyan py-1"
                >
                  // {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </nav>
  )
}

export default Navbar

