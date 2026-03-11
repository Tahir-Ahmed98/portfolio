import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { scrollTriggerReplay, scrollAnimationDelay, scrollAnimationDuration } from '../../lib/gsap'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (!formRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: scrollAnimationDuration,
          delay: scrollAnimationDelay,
          scrollTrigger: {
            trigger: formRef.current,
            ...scrollTriggerReplay,
          },
        }
      )
    })
    return () => ctx.revert()
  }, [])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 800)
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[rgb(var(--color-foreground))]">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-lg border border-[rgb(var(--color-border))] bg-[rgb(var(--color-bg))] px-4 py-3 text-[rgb(var(--color-foreground))] placeholder:text-[rgb(var(--color-foreground-muted))] focus:border-[rgb(var(--color-accent))] focus:outline-none focus:ring-1 focus:ring-[rgb(var(--color-accent))]"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[rgb(var(--color-foreground))]">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-lg border border-[rgb(var(--color-border))] bg-[rgb(var(--color-bg))] px-4 py-3 text-[rgb(var(--color-foreground))] placeholder:text-[rgb(var(--color-foreground-muted))] focus:border-[rgb(var(--color-accent))] focus:outline-none focus:ring-1 focus:ring-[rgb(var(--color-accent))]"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[rgb(var(--color-foreground))]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 w-full resize-none rounded-lg border border-[rgb(var(--color-border))] bg-[rgb(var(--color-bg))] px-4 py-3 text-[rgb(var(--color-foreground))] placeholder:text-[rgb(var(--color-foreground-muted))] focus:border-[rgb(var(--color-accent))] focus:outline-none focus:ring-1 focus:ring-[rgb(var(--color-accent))]"
          placeholder="Your message..."
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full rounded-full bg-[rgb(var(--color-accent))] px-6 py-3 text-sm font-medium text-[rgb(var(--color-accent-foreground))] transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === 'idle' && 'Send message'}
        {status === 'sending' && 'Sending...'}
        {status === 'sent' && 'Sent!'}
        {status === 'error' && 'Try again'}
      </button>
    </form>
  )
}
