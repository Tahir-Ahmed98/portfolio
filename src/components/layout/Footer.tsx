import { Github, Linkedin, Twitter } from 'lucide-react'
import { NAV_LINKS, SITE } from '../../content/site'
import { CONTACT } from '../../content/contact'
import { cn } from '../../lib/utils'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[rgb(var(--color-border))] bg-[rgb(var(--color-bg-muted))]">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-10 lg:px-16">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <p className="font-display text-sm font-semibold text-[rgb(var(--color-foreground))]">
              {SITE.name}
            </p>
            <p className="mt-1 text-xs text-[rgb(var(--color-foreground-muted))]">
              © {year}. All rights reserved.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm text-[rgb(var(--color-foreground-muted))] transition-colors hover:text-[rgb(var(--color-foreground))]'
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-4">
            {CONTACT.socials.map((social) => {
              const Icon = iconMap[social.icon] ?? Github
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-[rgb(var(--color-foreground-muted))] transition-colors hover:scale-110 hover:text-[rgb(var(--color-accent))]"
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
