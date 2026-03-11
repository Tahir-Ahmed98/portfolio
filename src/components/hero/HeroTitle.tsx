import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

type HeroTitleProps = {
  titles: string[]
}

const typeSpeed = 0.06
const deleteSpeed = 0.04
const holdAfterType = 1.5
const pauseAfterDelete = 0.5

export function HeroTitle({ titles }: HeroTitleProps) {
  const spanRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!spanRef.current || titles.length === 0) return
    const el = spanRef.current
    const obj = { charIndex: 0 }
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 })
      titles.forEach((title) => {
        tl.to(obj, {
          charIndex: title.length,
          duration: title.length * typeSpeed,
          ease: 'none',
          onUpdate: () => {
            el.textContent = title.slice(0, Math.round(obj.charIndex))
          },
        })
        tl.to({}, { duration: holdAfterType })
        tl.to(obj, {
          charIndex: 0,
          duration: title.length * deleteSpeed,
          ease: 'none',
          onUpdate: () => {
            el.textContent = title.slice(0, Math.round(obj.charIndex))
          },
        })
        tl.to({}, { duration: pauseAfterDelete })
      })
    }, el.parentElement!)
    return () => ctx.revert()
  }, [titles])

  return (
    <p className="mt-4 min-h-[1.5em] text-xl font-medium leading-[1.5em] text-[rgb(var(--color-accent))] md:text-2xl md:leading-[1.5em]">
      <span ref={spanRef} className="inline-block">
        {titles[0]?.slice(0, 0)}
      </span>
      <span className="animate-pulse" aria-hidden>
        |
      </span>
    </p>
  )
}
