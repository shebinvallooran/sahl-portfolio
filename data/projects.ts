import type { LucideIcon } from 'lucide-react'
import { CircleCheck, ClipboardCheck, House, ListChecks, LogIn } from 'lucide-react'

export type DemoView = {
  id: string
  label: string
  urlPath: string
  image?: string
  icon?: LucideIcon
}

export type Project = {
  image?: string
  demo?: DemoView[]
  urlHost?: string
  id: string
  title: string
  bullets: string[]
  stack: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  tag: 'featured' | 'ui/ux' | 'full-stack'
  caseStudy?: string
  company?: string
}

export const projects: Project[] = [
  {
    id: 'flight-booking-system',
    title: 'Flight Booking System',
    image:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    urlHost: 'sahlair.com',
    demo: [
      { id: 'home', label: 'Home', urlPath: 'flights', icon: House },
      { id: 'login', label: 'Login', urlPath: 'auth/login', icon: LogIn },
      { id: 'list', label: 'Results', urlPath: 'flights/search?from=DXB&to=LHR', icon: ListChecks },
      { id: 'booking', label: 'Booking', urlPath: 'flights/book/EK003', icon: ClipboardCheck },
      { id: 'success', label: 'Success', urlPath: 'flights/success?ref=ECG-XK48F', icon: CircleCheck },
    ],
    bullets: [
      'Developed the full frontend using React.js and Next.js with responsive booking flows.',
      'Integrated APIs for flight search, filters, availability checks, and ticket booking.',
      'Created admin dashboards for booking management with real-time data tables, KPIs, and analytics.',
    ],
    stack: ['Next.js', 'React.js', 'Tailwind CSS', 'REST API'],
    featured: true,
    tag: 'featured',
    company: 'Ecogo Software Solutions',
  },
  {
    id: 'hotel-booking-system',
    title: 'Hotel Booking System',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    bullets: [
      'Built the frontend with Next.js for search, room selection, and guided booking steps.',
      'Integrated APIs for room availability, pricing, and confirmation updates.',
      'Added admin dashboard views showing booking status, refunds, and performance metrics.',
    ],
    stack: ['Next.js', 'React.js', 'Tailwind CSS', 'REST API'],
    featured: false,
    tag: 'full-stack',
    company: 'Ecogo Software Solutions',
  },
  {
    id: 'mlm-fruit-export',
    title: 'MLM System for Fruit Export',
    image:
      'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1200&q=80',
    bullets: [
      'Built dashboards for genealogy, referrals, income details, and payout tracking.',
      'Integrated APIs for hierarchy mapping, commission data, and performance reports.',
      'Enhanced admin monitoring with structured views, charts, and live data insights.',
    ],
    stack: ['React.js', 'Next.js', 'Tailwind CSS', 'Charts'],
    featured: false,
    tag: 'full-stack',
    company: 'Ecogo Software Solutions',
  },
  {
    id: 'refund-ai',
    title: 'Refund AI',
    image:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
    bullets: [
      'Created the frontend for an AI-based refund platform using Next.js and Tailwind CSS.',
      'Integrated APIs for refund eligibility checks, cancellation status, and tracking.',
    ],
    stack: ['Next.js', 'Tailwind CSS', 'REST API'],
    featured: false,
    tag: 'full-stack',
    company: 'Ecogo Software Solutions',
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    image:
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80',
    bullets: [
      'Developed user interfaces for product pages, cart, checkout, and authentication.',
      'Connected API endpoints for product data, cart updates, and order processes.',
    ],
    stack: ['React.js', 'Next.js', 'Tailwind CSS', 'REST API'],
    featured: false,
    tag: 'full-stack',
    company: 'Ecogo Software Solutions',
  },
  {
    id: 'company-websites',
    title: 'Personalized Company Websites',
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80',
    bullets: [
      'Developed custom company websites with fast loading and fully responsive layouts.',
      'Used React.js and Next.js to build clean UI components with optimized performance.',
    ],
    stack: ['Next.js', 'React.js', 'Tailwind CSS', 'Responsive Design'],
    featured: false,
    tag: 'ui/ux',
    company: 'Ecogo Software Solutions',
  },
]
