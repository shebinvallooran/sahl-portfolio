export type Experience = {
  id: string
  role: string
  company: string
  location: string
  period: string
  bullets: string[]
  tags: string[]
}

export const experiences: Experience[] = [
  {
    id: 'ecogo-frontend',
    role: 'Frontend Developer',
    company: 'Ecogo Software Solutions',
    location: 'Kerala, India',
    period: 'Nov 2024 — Nov 2025',
    bullets: [
      'Developed user interfaces for travel, flight booking, hotel booking, refund, and MLM systems.',
      'Integrated REST APIs smoothly across booking and refund workflows.',
      'Created reusable UI components to reduce development time and improve performance.',
      'Improved page loading speed by optimizing rendering and component structure.',
    ],
    tags: ['React.js', 'Next.js', 'Tailwind CSS', 'REST API'],
  },
  {
    id: 'mentorow-intern',
    role: 'MERN Stack Developer (Intern)',
    company: 'Mentorow Technologies Pvt. Ltd',
    location: 'Kerala, India',
    period: 'Aug 2023 — Apr 2024',
    bullets: [
      'Created frontend modules in React.js connected with backend APIs.',
      'Developed secure login and authentication functions using JWT.',
      'Worked on the Mentorow Website frontend as part of a live project.',
      'Used Git for version control and contributed to team development tasks.',
      'Identified and fixed UI issues during testing to improve user experience.',
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
  },
]
