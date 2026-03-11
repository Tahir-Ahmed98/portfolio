import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { HeroHeadline } from '../hero/HeroHeadline'
import { HeroTitle } from '../hero/HeroTitle'
import { HeroSubline } from '../hero/HeroSubline'
import { HeroCta } from '../hero/HeroCta'
import { SITE } from '../../content/site'

export function Hero() {
  const words = SITE.name.split(' ')
  const titles = SITE.titles
  const subline = SITE.description
  const blob1Ref = useRef<HTMLDivElement>(null)
  const blob2Ref = useRef<HTMLDivElement>(null)
  const blob3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const blobs = [blob1Ref.current, blob2Ref.current, blob3Ref.current].filter(Boolean) as HTMLElement[]
    if (!blobs.length) return
    const ctx = gsap.context(() => {
      gsap.to(blob1Ref.current, {
        x: 100,
        y: -50,
        scale: 1.2,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
      gsap.to(blob2Ref.current, {
        x: -80,
        y: 60,
        scale: 0.9,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
      gsap.to(blob3Ref.current, {
        scale: 1.3,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-20 md:px-10 md:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div
          ref={blob1Ref}
          className="absolute -left-1/4 top-1/4 h-[80vmax] w-[80vmax] rounded-full opacity-30"
          style={{
            background: `radial-gradient(circle, rgb(var(--color-accent)) 0%, transparent 70%)`,
          }}
        />
        <div
          ref={blob2Ref}
          className="absolute -right-1/4 bottom-1/4 h-[60vmax] w-[60vmax] rounded-full opacity-20"
          style={{
            background: `radial-gradient(circle, rgb(var(--color-accent)) 0%, transparent 70%)`,
          }}
        />
        <div
          ref={blob3Ref}
          className="absolute left-1/2 top-1/2 h-[50vmax] w-[50vmax] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
          style={{
            background: `radial-gradient(circle, rgb(var(--color-accent)) 0%, transparent 60%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgb(var(--color-foreground)) 1px, transparent 1px),
                              linear-gradient(90deg, rgb(var(--color-foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <HeroHeadline words={words.length ? words : ['Your', 'Name']} />
        <HeroTitle titles={titles.length ? titles : [SITE.title]} />
        <HeroSubline text={subline} />
        <HeroCta />
      </div>
    </section>
  )
}
