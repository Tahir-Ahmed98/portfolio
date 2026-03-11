import { SkillCategory } from './SkillCategory'
import type { SkillCategory as SkillCategoryType } from '../../types'

type SkillsGridProps = {
  categories: SkillCategoryType[]
}

export function SkillsGrid({ categories }: SkillsGridProps) {
  return (
    <div className="space-y-8">
      {categories.map((category, i) => (
        <SkillCategory key={category.title} category={category} index={i} />
      ))}
    </div>
  )
}
