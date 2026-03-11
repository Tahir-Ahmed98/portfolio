/**
 * Maps our skill icon keys to simpleicons.org CDN slugs.
 * Icons: https://cdn.simpleicons.org/{slug}
 * Docs: https://github.com/LitoMore/simple-icons-cdn
 */
export const SKILL_ICON_SLUGS: Record<string, string> = {
  react: 'react',
  nextjs: 'nextdotjs',
  typescript: 'typescript',
  javascript: 'javascript',
  tailwind: 'tailwindcss',
  scss: 'sass',
  redux: 'redux',
  mui: 'mui',
  shadcn: 'radixui',
  storybook: 'storybook',
  node: 'nodedotjs',
  express: 'express',
  postgresql: 'postgresql',
  sequelize: 'sequelize',
  prisma: 'prisma',
  elasticsearch: 'elasticsearch',
  redis: 'redis',
  api: 'swagger',
  swagger: 'swagger',
  docker: 'docker',
  git: 'git',
  zod: 'zod',
  chrome: 'googlechrome',
  eslint: 'eslint',
  auth: 'auth0',
  framer: 'framer',
  vite: 'vite',
  testing: 'jest',
  cicd: 'githubactions',
}

const CDN_BASE = 'https://cdn.simpleicons.org'

export function getSkillIconUrl(slugKey: string, color?: string): string {
  const slug = SKILL_ICON_SLUGS[slugKey] ?? slugKey
  if (color) return `${CDN_BASE}/${slug}/${color.replace('#', '')}`
  return `${CDN_BASE}/${slug}`
}
