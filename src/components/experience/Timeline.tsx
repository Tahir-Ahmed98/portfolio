import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { TimelineItem } from './TimelineItem'
import type { ExperienceItem } from '../../types'
import { scrollTriggerReplay, scrollAnimationDelay, scrollAnimationDuration } from '../../lib/gsap'

type TimelineProps = {
  items: ExperienceItem[]
}

export function Timeline({ items }: TimelineProps) {
  const lineRef = useRef<HTMLDivElement>(null)
  const dotRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!lineRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: scrollAnimationDuration,
          delay: scrollAnimationDelay,
          ease: 'power2.out',
          transformOrigin: 'top',
          scrollTrigger: {
            trigger: lineRef.current,
            ...scrollTriggerReplay,
          },
        }
      )
      dotRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(
          el,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: scrollAnimationDuration,
            delay: scrollAnimationDelay + i * 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              ...scrollTriggerReplay,
            },
          }
        )
      })
    })
    return () => ctx.revert()
  }, [items.length])

  return (
    <div className="relative">
      {/* Line centered in track: 0.5rem (sm) / 1rem (md); track width = pl-8 / pl-12 so dot center matches */}
      <div
        ref={lineRef}
        className="absolute left-2 top-0 bottom-0 w-px -translate-x-1/2 bg-[rgb(var(--color-border))] md:left-4"
        style={{ transformOrigin: 'top' }}
      />
      <div className="space-y-12 pl-8 md:pl-12">
        {items.map((item, i) => (
          <div key={item.id} className="relative">
            {/* Dot centered on line: center at 0.5rem (sm) / 1rem (md) */}
            <div
              ref={(el) => {
                dotRefs.current[i] = el
              }}
              className="absolute -left-7 top-1 h-2 w-2 rounded-full bg-[rgb(var(--color-accent))] md:-left-9"
            />
            <TimelineItem item={item} index={i} />
          </div>
        ))}
      </div>
    </div>
  )
}
