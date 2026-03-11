import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { scrollTriggerReplay, scrollAnimationDelay, scrollAnimationDuration } from '../../lib/gsap'

type AboutContentProps = {
  headline: string
  bio: string[]
  image: string
}

export function AboutContent({ headline, bio, image }: AboutContentProps) {
  const imageRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const paragraphRefs = useRef<HTMLParagraphElement[]>([])

  useEffect(() => {
    if (!imageRef.current || !headlineRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.92, filter: 'blur(8px)' },
        {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          duration: scrollAnimationDuration,
          delay: scrollAnimationDelay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: imageRef.current,
            ...scrollTriggerReplay,
          },
        }
      )
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: scrollAnimationDuration,
          delay: scrollAnimationDelay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headlineRef.current,
            ...scrollTriggerReplay,
          },
        }
      )
      paragraphRefs.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(
          el,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: scrollAnimationDuration,
            delay: scrollAnimationDelay + i * 0.1,
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
  }, [headline, bio])

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
      <div
        ref={imageRef}
        className="relative aspect-square max-w-md overflow-hidden rounded-2xl bg-[rgb(var(--color-bg-muted))]"
      >
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none'
          }}
        />
      </div>

      <div>
        <h2
          ref={headlineRef}
          className="font-display text-3xl font-bold text-[rgb(var(--color-foreground))] md:text-4xl"
        >
          {headline}
        </h2>
        <div className="mt-6 space-y-4">
          {bio.map((paragraph, i) => (
            <p
              key={i}
              ref={(el) => {
                if (el) paragraphRefs.current[i] = el
              }}
              className="text-[rgb(var(--color-foreground-muted))] leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
