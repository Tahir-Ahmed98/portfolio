export interface NavLink {
  label: string
  href: string
}

export interface Skill {
  name: string
  icon: string
  level?: number
}

export interface SkillCategory {
  title: string
  skills: Skill[]
}

export interface ExperienceItem {
  id: string
  title: string
  company: string
  companyUrl?: string
  startDate: string
  endDate: string
  description: string[]
  tags: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  liveUrl?: string
  repoUrl?: string
  tags: string[]
  featured?: boolean
}

export interface ContactInfo {
  email: string
  whatsapp?: string
  location?: string
  socials: { name: string; url: string; icon: string }[]
}

export type ThemeId = 'light' | 'dark'
