import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ChevronDown } from 'lucide-react'

type HeroCtaProps = {
  primaryLabel?: string
  secondaryLabel?: string
}

export function HeroCta({
  primaryLabel = 'View my work',
  secondaryLabel = 'Get in touch',
}: HeroCtaProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const primaryRef = useRef<HTMLAnchorElement>(null)
  const secondaryRef = useRef<HTMLAnchorElement>(null)
  const scrollRef = useRef<HTMLAnchorElement>(null)
  const chevronRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [primaryRef.current, secondaryRef.current].filter(Boolean),
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.9,
          ease: 'power2.out',
        }
      )
      gsap.fromTo(scrollRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4, delay: 1.4 })
      if (chevronRef.current) {
        gsap.to(chevronRef.current, {
          y: 8,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative mt-10 flex flex-col items-center gap-10">
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          ref={primaryRef}
          href="#projects"
          className="group relative rounded-full bg-[rgb(var(--color-accent))] px-6 py-3 text-sm font-medium text-[rgb(var(--color-accent-foreground))] shadow-lg shadow-[rgb(var(--color-accent))]/25 transition-shadow hover:shadow-xl hover:shadow-[rgb(var(--color-accent))]/30"
        >
          <span className="relative z-10">{primaryLabel}</span>
        </a>
        <a
          ref={secondaryRef}
          href="#contact"
          className="rounded-full border-2 border-[rgb(var(--color-border))] px-6 py-3 text-sm font-medium text-[rgb(var(--color-foreground))] transition-colors hover:border-[rgb(var(--color-accent))] hover:text-[rgb(var(--color-accent))]"
        >
          {secondaryLabel}
        </a>
      </div>

      <a
        ref={scrollRef}
        href="#about"
        aria-label="Scroll to about"
        className="mt-[100px] text-[rgb(var(--color-foreground-muted))]"
      >
        <div ref={chevronRef}>
          <ChevronDown className="h-8 w-8" />
        </div>
      </a>
    </div>
  )
}
