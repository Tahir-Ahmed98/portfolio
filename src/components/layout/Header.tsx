import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, SITE } from '../../content/site'
import { ThemeToggle } from '../theme/ThemeToggle'
import profileImage from '../../assets/mypic.png'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const linkRefs = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    if (!headerRef.current) return
    gsap.fromTo(headerRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' })
  }, [])

  useEffect(() => {
    if (!mobileOpen || !navRef.current) return
    const links = linkRefs.current.filter(Boolean) as HTMLElement[]
    const ctx = gsap.context(() => {
      gsap.fromTo(navRef.current, { opacity: 0, height: 0 }, { opacity: 1, height: 'auto', duration: 0.2 })
      gsap.fromTo(links, { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: 0.2, stagger: 0.05 })
    })
    return () => ctx.revert()
  }, [mobileOpen])

  return (
    <header
      ref={headerRef}
      className="fixed left-0 right-0 top-0 z-40 border-b border-[rgb(var(--color-border))] bg-[rgb(var(--color-bg))]/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">
        <a
          href="#"
          className="flex items-center gap-3 font-display text-lg font-semibold tracking-tight text-[rgb(var(--color-foreground))] transition-opacity hover:opacity-80"
        >
          <img
            src={profileImage}
            alt=""
            className="h-9 w-9 rounded-full object-cover ring-2 ring-[rgb(var(--color-border))]"
          />
          <span>{SITE.name}</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-[rgb(var(--color-foreground-muted))] transition-colors hover:text-[rgb(var(--color-foreground))]"
            >
              <span className="relative">
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[rgb(var(--color-accent))] transition-[width] duration-200 hover:w-full" />
              </span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="rounded p-2 md:hidden"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          ref={navRef}
          className="overflow-hidden border-t border-[rgb(var(--color-border))] bg-[rgb(var(--color-bg))] md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.href}
                ref={(el) => {
                  linkRefs.current[i] = el
                }}
              >
                <a
                  href={link.href}
                  className="block rounded px-3 py-2 text-[rgb(var(--color-foreground))] hover:bg-[rgb(var(--color-bg-muted))]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
