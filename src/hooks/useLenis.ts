import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function useLenis() {
  const lenisRef = useRef<{ raf: (time: number) => void; destroy: () => void; on: (e: string, fn: () => void) => void } | null>(null)
  const rafIdRef = useRef<number>(0)

  useEffect(() => {
    import('@studio-freight/lenis').then(({ default: Lenis }) => {
      const lenis = new Lenis({
        lerp: 0.12,
        smoothWheel: true,
        wheelMultiplier: 1.2,
      })
      lenisRef.current = lenis

      lenis.on('scroll', ScrollTrigger.update)

      function raf(time: number) {
        lenis.raf(time)
        rafIdRef.current = requestAnimationFrame(raf)
      }
      rafIdRef.current = requestAnimationFrame(raf)
    })

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current)
      lenisRef.current?.destroy()
      lenisRef.current = null
    }
  }, [])
}
