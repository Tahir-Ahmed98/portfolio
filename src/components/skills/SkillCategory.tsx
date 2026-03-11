import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { SkillIcon } from './SkillIcon'
import type { SkillCategory as SkillCategoryType } from '../../types'
import { scrollTriggerReplay, scrollAnimationDelay, scrollAnimationDuration } from '../../lib/gsap'

type SkillCategoryProps = {
  category: SkillCategoryType
  index: number
}

export function SkillCategory({ category, index }: SkillCategoryProps) {
  const categoryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!categoryRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        categoryRef.current,
        { opacity: 0, y: 36, filter: 'blur(6px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: scrollAnimationDuration,
          delay: scrollAnimationDelay + index * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: categoryRef.current,
            ...scrollTriggerReplay,
          },
        }
      )
    })
    return () => ctx.revert()
  }, [index])

  return (
    <div
      ref={categoryRef}
      className="rounded-2xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-card))] p-6"
    >
      <h3 className="mb-4 font-display text-lg font-semibold text-[rgb(var(--color-foreground))]">
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill, i) => (
          <SkillIcon key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </div>
  )
}
