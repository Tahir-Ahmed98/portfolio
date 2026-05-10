import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function useLenis() {
  const lenisRef = useRef<{ raf: (time: number) => void; destroy: () => void; on: (e: string, fn: () => void) => void } | null>(null)

  useEffect(() => {
    let lenisInstance: any = null
    let rafFunction: ((time: number) => void) | null = null

    import('@studio-freight/lenis').then(({ default: Lenis }) => {
      const lenis = new Lenis({
        lerp: 0.12,
        smoothWheel: true,
        wheelMultiplier: 1.2,
      })
      lenisInstance = lenis
      lenisRef.current = lenis

      lenis.on('scroll', ScrollTrigger.update)

      rafFunction = (time: number) => {
        lenis.raf(time * 1000)
      }

      gsap.ticker.add(rafFunction)
      gsap.ticker.lagSmoothing(0)
    })

    return () => {
      if (rafFunction) gsap.ticker.remove(rafFunction)
      if (lenisInstance) lenisInstance.destroy()
      lenisRef.current = null
    }
  }, [])
}
