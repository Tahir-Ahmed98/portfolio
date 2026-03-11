import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { getSkillIconUrl, SKILL_ICON_SLUGS } from '../../lib/skillIcons'
import type { Skill } from '../../types'
import { scrollTriggerReplay, scrollAnimationDelay, scrollAnimationDuration } from '../../lib/gsap'

type SkillIconProps = {
  skill: Skill
  index?: number
}

export function SkillIcon({ skill, index = 0 }: SkillIconProps) {
  const hasSlug = skill.icon in SKILL_ICON_SLUGS
  const iconUrl = getSkillIconUrl(skill.icon)
  const [imgFailed, setImgFailed] = useState(false)
  const useFallback = !hasSlug || imgFailed
  const iconRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!iconRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        iconRef.current,
        { opacity: 0, y: 24, filter: 'blur(4px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: scrollAnimationDuration,
          delay: scrollAnimationDelay + index * 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: iconRef.current,
            ...scrollTriggerReplay,
          },
        }
      )
    })
    return () => ctx.revert()
  }, [index])

  return (
    <div
      ref={iconRef}
      className="flex flex-col items-center gap-2 rounded-xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-card))] px-4 py-4 transition-colors hover:scale-105 hover:border-[rgb(var(--color-accent))] hover:bg-[rgb(var(--color-card-hover))] hover:-translate-y-1"
    >
      <span
        className="flex h-10 w-10 items-center justify-center"
        title={skill.name}
      >
        {useFallback ? (
          <span className="text-lg font-bold text-[rgb(var(--color-accent))]">
            {skill.name.slice(0, 2).toUpperCase()}
          </span>
        ) : (
          <img
            src={iconUrl}
            alt=""
            className="h-8 w-8 object-contain"
            loading="lazy"
            onError={() => setImgFailed(true)}
          />
        )}
      </span>
      <span className="text-center text-xs font-medium text-[rgb(var(--color-foreground))]">
        {skill.name}
      </span>
    </div>
  )
}
