import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { scrollTriggerReplay, scrollAnimationDelay, scrollAnimationDuration } from '../../lib/gsap'

function CountUp({ value, label }: { value: number; label: string }) {
  const [display, setDisplay] = useState(0)
  const spanRef = useRef<HTMLSpanElement>(null)
  const valueRef = useRef({ n: 0 })

  useEffect(() => {
    if (!spanRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        valueRef.current,
        { n: 0 },
        {
          n: value,
          duration: 1.5,
          ease: 'power2.out',
          onUpdate: () => setDisplay(Math.round(valueRef.current.n)),
          scrollTrigger: {
            trigger: spanRef.current,
            ...scrollTriggerReplay,
          },
        }
      )
    })
    return () => ctx.revert()
  }, [value])

  return (
    <div className="text-center">
      <span
        ref={spanRef}
        className="font-display text-3xl font-bold text-[rgb(var(--color-accent))] md:text-4xl"
        style={{ fontVariantNumeric: 'tabular-nums' }}
      >
        {display}
      </span>
      <p className="mt-1 text-sm text-[rgb(var(--color-foreground-muted))]">
        {label}
      </p>
    </div>
  )
}

type AboutStatsProps = {
  stats: { value: number; label: string }[]
}

export function AboutStats({ stats }: AboutStatsProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: scrollAnimationDuration,
          delay: scrollAnimationDelay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            ...scrollTriggerReplay,
          },
        }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      className="mt-16 grid grid-cols-3 gap-8 border-t border-[rgb(var(--color-border))] pt-12"
    >
      {stats.map((stat, i) => (
        <CountUp key={i} value={stat.value} label={stat.label} />
      ))}
    </div>
  )
}
