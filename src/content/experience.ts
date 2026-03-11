import type { ExperienceItem } from '../types'

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: '1',
    title: 'Frontend Engineer',
    company: 'Sprouts.AI',
    companyUrl: 'https://sprouts.ai',
    startDate: '2023-09',
    endDate: 'Present',
    description: [
      'Autonomous intelligent B2B demand gen platform to drive incremental revenue and reduce martech costs.',
      'Built and maintained a library of reusable React components documented in Storybook, reducing development time by 40–50% and ensuring design consistency.',
      'Participated in code reviews and helped establish frontend coding standards.',
      'Optimized web application load times through code splitting, lazy loading, and asset compression — improved page speed scores by 35–45% and reduced initial bundle size by 30%.',
      'Collaborated with UI/UX designers, backend developers, and product managers to deliver 15+ features from design handoff to production.',
    ],
    tags: ['React', 'TypeScript', 'Storybook', 'Performance'],
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'QLU.ai',
    companyUrl: 'https://qlu.ai',
    startDate: '2022-09',
    endDate: '2023-08',
    description: [
      'Recruitment redefined — automates recruitment using modern AI techniques.',
      'Contributed to the development of 2+ Chrome extensions using React and Manifest v3.',
      'Built a UI library of reusable components based on a design system, ensuring consistent and stateless UI.',
      'Optimized ElasticSearch queries, improving data retrieval speed by 40% and enhancing search relevance with boosting techniques.',
      'Developed and maintained RESTful APIs using Express.js with PostgreSQL, implementing optimized queries and indexing strategies that improved data retrieval speed by 35–40%.',
    ],
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'ElasticSearch', 'Chrome Extensions'],
  },
  {
    id: '3',
    title: 'MERN Stack Developer',
    company: 'Pluton',
    startDate: '2022-02',
    endDate: '2022-06',
    description: [
      'Implemented JWT-based login and signup with secure user authorization.',
      'Developed KYC Level 1, 2, and 3 APIs and integrated frontend forms for seamless user verification.',
      'Created and integrated user dashboard UI and APIs for balance management and settings.',
    ],
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'KYC'],
  },
]
