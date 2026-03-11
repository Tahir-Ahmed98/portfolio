import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Section } from '../layout/Section'
import { SocialLinks } from '../contact/SocialLinks'
import { CONTACT } from '../../content/contact'
import { scrollTriggerReplay, scrollAnimationDelay, scrollAnimationDuration } from '../../lib/gsap'

export function Contact() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!titleRef.current || !contentRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40, filter: 'blur(6px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: scrollAnimationDuration,
          delay: scrollAnimationDelay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleRef.current,
            ...scrollTriggerReplay,
          },
        }
      )
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 32, filter: 'blur(6px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: scrollAnimationDuration,
          delay: scrollAnimationDelay + 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            ...scrollTriggerReplay,
          },
        }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <Section id="contact">
      <h2
        ref={titleRef}
        className="font-display text-3xl font-bold text-[rgb(var(--color-foreground))] md:text-4xl"
      >
        Get in touch
      </h2>
      <div className="mt-12 max-w-xl">
        <div ref={contentRef}>
          <p className="mb-8 text-[rgb(var(--color-foreground-muted))]">
            Have a project in mind or want to chat? Drop me a message through any of the platforms below.
          </p>
          <h3 className="font-display text-lg font-semibold text-[rgb(var(--color-foreground))]">
            Contact info
          </h3>
          <div className="mt-4">
            <SocialLinks contact={CONTACT} />
          </div>
        </div>
      </div>
    </Section>
  )
}
