import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Section } from '../layout/Section'
import { Timeline } from '../experience/Timeline'
import { EXPERIENCE } from '../../content/experience'
import { scrollTriggerReplay, scrollAnimationDelay, scrollAnimationDuration } from '../../lib/gsap'

export function Experience() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!titleRef.current || !wrapRef.current) return
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
      gsap.fromTo(
        wrapRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: scrollAnimationDuration,
          delay: scrollAnimationDelay,
          scrollTrigger: {
            trigger: wrapRef.current,
            ...scrollTriggerReplay,
          },
        }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <Section id="experience">
      <h2
        ref={titleRef}
        className="font-display text-3xl font-bold text-[rgb(var(--color-foreground))] md:text-4xl"
      >
        Experience
      </h2>
      <div ref={wrapRef} className="mt-12">
        <Timeline items={EXPERIENCE} />
      </div>
    </Section>
  )
}
