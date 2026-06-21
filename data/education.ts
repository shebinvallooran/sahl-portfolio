export type Education = {
  id: string
  degree: string
  institution: string
  university: string
  location: string
  period: string
}

export type Certification = {
  id: string
  title: string
  issuer: string
}

export type Language = {
  name: string
  level?: string
}

export const education: Education[] = [
  {
    id: 'bsc-cs',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'GEMS Arts & Science College',
    university: 'Calicut University',
    location: 'Malappuram, India',
    period: '2020 — 2023',
  },
]

export const certifications: Certification[] = [
  {
    id: 'mentorow-internship',
    title: 'Internship Certificate',
    issuer: 'Mentorow Technologies Pvt. Ltd',
  },
  {
    id: 'mentorow-live-project',
    title: 'Live Project Certificate — Mentorow Website (Frontend)',
    issuer: 'Mentorow Technologies Pvt. Ltd',
  },
]

export const languages: Language[] = [
  { name: 'English' },
  { name: 'Hindi' },
  { name: 'Malayalam' },
]
