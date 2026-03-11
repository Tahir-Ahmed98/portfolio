import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { scrollTriggerReplay, scrollAnimationDelay, scrollAnimationDuration } from '../../lib/gsap'

type SectionBackgroundProps = {
  variant?: 'default' | 'muted'
}

export function SectionBackground({ variant = 'default' }: SectionBackgroundProps) {
  const opacity = variant === 'muted' ? 0.08 : 0.12
  const blob1Ref = useRef<HTMLDivElement>(null)
  const blob2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!blob1Ref.current || !blob2Ref.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        blob1Ref.current,
        { opacity: 0 },
        {
          opacity,
          duration: scrollAnimationDuration,
          delay: scrollAnimationDelay,
          scrollTrigger: {
            trigger: blob1Ref.current,
            ...scrollTriggerReplay,
          },
        }
      )
      gsap.fromTo(
        blob2Ref.current,
        { opacity: 0 },
        {
          opacity: opacity * 0.7,
          duration: scrollAnimationDuration,
          delay: scrollAnimationDelay + 0.2,
          scrollTrigger: {
            trigger: blob2Ref.current,
            ...scrollTriggerReplay,
          },
        }
      )
    })
    return () => ctx.revert()
  }, [opacity])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        ref={blob1Ref}
        className="absolute -left-1/4 top-1/3 h-[60vmax] w-[60vmax] rounded-full"
        style={{
          background: `radial-gradient(circle, rgb(var(--color-accent)) 0%, transparent 70%)`,
        }}
      />
      <div
        ref={blob2Ref}
        className="absolute -right-1/4 bottom-1/3 h-[50vmax] w-[50vmax] rounded-full"
        style={{
          background: `radial-gradient(circle, rgb(var(--color-accent)) 0%, transparent 70%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgb(var(--color-foreground)) 1px, transparent 1px),
                            linear-gradient(90deg, rgb(var(--color-foreground)) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  )
}
