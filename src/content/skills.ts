import type { SkillCategory } from '../types'

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'SCSS', icon: 'scss' },
      { name: 'Redux & RTK', icon: 'redux' },
      { name: 'Material UI', icon: 'mui' },
      { name: 'Shadcn', icon: 'shadcn' },
      { name: 'Storybook', icon: 'storybook' },
    ],
  },
  {
    title: 'Backend & Data',
    skills: [
      { name: 'Node.js', icon: 'node' },
      { name: 'Express.js', icon: 'express' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Sequelize', icon: 'sequelize' },
      { name: 'Prisma', icon: 'prisma' },
      { name: 'ElasticSearch', icon: 'elasticsearch' },
      { name: 'Redis', icon: 'redis' },
      { name: 'REST API', icon: 'api' },
      { name: 'Swagger', icon: 'swagger' },
    ],
  },
  {
    title: 'Tools & Other',
    skills: [
      { name: 'Docker', icon: 'docker' },
      { name: 'Git', icon: 'git' },
      { name: 'Zod', icon: 'zod' },
      { name: 'Chrome Extensions', icon: 'chrome' },
      { name: 'JWT & Auth', icon: 'auth' },
      { name: 'ESLint', icon: 'eslint' },
    ],
  },
]
