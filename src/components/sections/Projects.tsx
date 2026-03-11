import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Section } from '../layout/Section'
import { ProjectGrid } from '../projects/ProjectGrid'
import { PROJECTS } from '../../content/projects'
import { scrollTriggerReplay, scrollAnimationDelay, scrollAnimationDuration } from '../../lib/gsap'

export function Projects() {
  const titleRef = useRef<HTMLHeadingElement>(null)

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
    <Section id="projects">
      <h2
        ref={titleRef}
        className="font-display text-3xl font-bold text-[rgb(var(--color-foreground))] md:text-4xl"
      >
        Projects
      </h2>
      <div className="mt-12">
        <ProjectGrid projects={PROJECTS} />
      </div>
    </Section>
  )
}
