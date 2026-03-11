import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

type HeroHeadlineProps = {
  words: string[]
}

export function HeroHeadline({ words }: HeroHeadlineProps) {
  const containerRef = useRef<HTMLHeadingElement>(null)
  const wordRefs = useRef<HTMLSpanElement[]>([])

  useEffect(() => {
    if (!containerRef.current || !wordRefs.current.length) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordRefs.current,
        { opacity: 0, y: 40, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.6,
          stagger: 0.1,
          delay: 0.15,
          ease: 'power2.out',
        }
      )
    }, containerRef)
    return () => ctx.revert()
  }, [words])

  return (
    <h1
      ref={containerRef}
      className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
    >
      {words.map((word, i) => (
        <span
          key={i}
          ref={(el) => {
            if (el) wordRefs.current[i] = el
          }}
          className="mr-[0.25em] inline-block bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(90deg, rgb(var(--color-foreground)) 0%, rgb(var(--color-foreground)) 60%, rgb(var(--color-accent)) 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {word}
        </span>
      ))}
    </h1>
  )
}
