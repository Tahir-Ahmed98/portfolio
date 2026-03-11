import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Section } from '../layout/Section'
import { SkillsGrid } from '../skills/SkillsGrid'
import { SKILL_CATEGORIES } from '../../content/skills'
import { scrollTriggerReplay, scrollAnimationDelay, scrollAnimationDuration } from '../../lib/gsap'

export function Skills() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!titleRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40, filter: 'blur(6px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: scrollAnimationDuration,
          delay: scrollAnimationDelay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleRef.current,
            ...scrollTriggerReplay,
          },
        }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <Section id="skills">
      <h2
        ref={titleRef}
        className="font-display text-3xl font-bold text-[rgb(var(--color-foreground))] md:text-4xl"
      >
        Skills & Technologies
      </h2>
      <div ref={gridRef} className="mt-12">
        <SkillsGrid categories={SKILL_CATEGORIES} />
      </div>
    </Section>
  )
}
