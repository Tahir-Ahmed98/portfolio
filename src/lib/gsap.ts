import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }

/** ScrollTrigger config for "animate every time element enters viewport" */
export const scrollTriggerReplay = {
  start: 'top 85%',
  end: 'bottom 15%',
  toggleActions: 'play none none reverse',
}

/** Delay before scroll-triggered animations start (so they don’t fire too quickly) */
export const scrollAnimationDelay = 0.15
/** Default duration for scroll-triggered animations */
export const scrollAnimationDuration = 0.5

export const easeSmooth = 'power2.out' as const
