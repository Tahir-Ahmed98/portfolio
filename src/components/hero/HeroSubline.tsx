import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

type HeroSublineProps = {
  text: string
}

export function HeroSubline({ text }: HeroSublineProps) {
  const words = text.split(' ')
  const containerRef = useRef<HTMLParagraphElement>(null)
  const wordRefs = useRef<HTMLSpanElement[]>([])

  useEffect(() => {
    if (!containerRef.current || !wordRefs.current.length) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordRefs.current,
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          stagger: 0.03,
          delay: 0.5,
          ease: 'power2.out',
        }
      )
    }, containerRef)
    return () => ctx.revert()
  }, [text])

  return (
    <p
      ref={containerRef}
      className="mt-6 max-w-2xl text-lg text-[rgb(var(--color-foreground-muted))] md:text-xl"
    >
      {words.map((w, i) => (
        <span
          key={i}
          ref={(el) => {
            if (el) wordRefs.current[i] = el
          }}
          className="inline-block pr-[0.25em]"
        >
          {w}
        </span>
      ))}
    </p>
  )
}
