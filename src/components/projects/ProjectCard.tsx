import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ExternalLink, Github } from 'lucide-react'
import type { Project as ProjectType } from '../../types'
import { cn } from '../../lib/utils'
import { scrollTriggerReplay, scrollAnimationDelay, scrollAnimationDuration } from '../../lib/gsap'

type ProjectCardProps = {
  project: ProjectType
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!cardRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 36, filter: 'blur(6px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: scrollAnimationDuration,
          delay: scrollAnimationDelay + index * 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardRef.current,
            ...scrollTriggerReplay,
          },
        }
      )
    })
    return () => ctx.revert()
  }, [index])

  return (
    <article
      ref={cardRef}
      className="group overflow-hidden rounded-2xl border border-[rgb(var(--color-border))] bg-[rgb(var(--color-card))] transition-colors hover:border-[rgb(var(--color-accent))] hover:shadow-xl hover:shadow-[rgb(var(--color-accent))]/10 hover:-translate-y-1.5"
    >
      <div className="aspect-video overflow-hidden bg-[rgb(var(--color-bg-muted))]">
        <img
          src={project.image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
            target.parentElement!.style.background = 'rgb(var(--color-bg-muted))'
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-[rgb(var(--color-foreground))]">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-[rgb(var(--color-foreground-muted))] line-clamp-2">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                'rounded-full px-2.5 py-0.5 text-xs font-medium',
                'bg-[rgb(var(--color-bg-muted))] text-[rgb(var(--color-foreground-muted))]'
              )}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[rgb(var(--color-accent))] hover:underline"
            >
              <ExternalLink className="h-4 w-4" />
              Live
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[rgb(var(--color-accent))] hover:underline"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
