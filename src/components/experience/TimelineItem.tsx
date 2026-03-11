import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { formatDate } from '../../lib/utils'
import type { ExperienceItem as ExperienceItemType } from '../../types'
import { scrollTriggerReplay, scrollAnimationDelay, scrollAnimationDuration } from '../../lib/gsap'

type TimelineItemProps = {
  item: ExperienceItemType
  index: number
}

export function TimelineItem({ item, index }: TimelineItemProps) {
  const isEven = index % 2 === 0
  const articleRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!articleRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        articleRef.current,
        {
          opacity: 0,
          x: isEven ? -48 : 48,
          filter: 'blur(4px)',
        },
        {
          opacity: 1,
          x: 0,
          filter: 'blur(0px)',
          duration: scrollAnimationDuration,
          delay: scrollAnimationDelay + index * 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: articleRef.current,
            ...scrollTriggerReplay,
          },
        }
      )
    })
    return () => ctx.revert()
  }, [index, isEven])

  return (
    <article
      ref={articleRef}
      className="relative flex gap-8 md:gap-12"
    >
      <div className="flex flex-1 flex-col md:flex-row md:items-start md:gap-8">
        <div className="min-w-[7rem] shrink-0 text-sm text-[rgb(var(--color-foreground-muted))]">
          {formatDate(item.startDate)} — {item.endDate === 'Present' ? 'Present' : formatDate(item.endDate)}
        </div>
        <div className="flex-1">
          <h3 className="font-display text-lg font-semibold text-[rgb(var(--color-foreground))]">
            {item.title}
          </h3>
          <p className="mt-0.5">
            {item.companyUrl ? (
              <a
                href={item.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgb(var(--color-accent))] hover:underline"
              >
                {item.company}
              </a>
            ) : (
              <span className="text-[rgb(var(--color-foreground-muted))]">
                {item.company}
              </span>
            )}
          </p>
          <ul className="mt-4 space-y-2">
            {item.description.map((line, i) => (
              <li
                key={i}
                className="text-sm text-[rgb(var(--color-foreground-muted))] leading-relaxed"
              >
                {line}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[rgb(var(--color-bg-muted))] px-3 py-1 text-xs font-medium text-[rgb(var(--color-foreground-muted))]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
