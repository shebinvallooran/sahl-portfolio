export type Skill = {
  name: string
  level: 'strong' | 'growing' | 'familiar'
  category: 'frontend' | 'backend' | 'database' | 'tools'
}

export const skills: Skill[] = [
  // frontend
  { name: 'React.js', level: 'strong', category: 'frontend' },
  { name: 'Next.js', level: 'strong', category: 'frontend' },
  { name: 'JavaScript (ES6+)', level: 'strong', category: 'frontend' },
  { name: 'HTML5', level: 'strong', category: 'frontend' },
  { name: 'CSS3', level: 'strong', category: 'frontend' },
  { name: 'Tailwind CSS', level: 'strong', category: 'frontend' },
  { name: 'Responsive Design', level: 'growing', category: 'frontend' },
  { name: 'TypeScript', level: 'growing', category: 'frontend' },

  // backend (basics)
  { name: 'Node.js', level: 'growing', category: 'backend' },
  { name: 'Express.js', level: 'growing', category: 'backend' },
  { name: 'REST API Development', level: 'strong', category: 'backend' },
  { name: 'JWT Auth', level: 'growing', category: 'backend' },

  // database
  { name: 'MongoDB', level: 'familiar', category: 'database' },
  { name: 'Mongoose', level: 'familiar', category: 'database' },

  // tools
  { name: 'Git', level: 'strong', category: 'tools' },
  { name: 'GitHub', level: 'strong', category: 'tools' },
  { name: 'VS Code', level: 'growing', category: 'tools' },
  { name: 'Postman', level: 'growing', category: 'tools' },
  { name: 'API Integration', level: 'growing', category: 'tools' },
]
