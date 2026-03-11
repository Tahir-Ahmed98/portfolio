import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { cn } from '../../lib/utils'

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        'rounded-full p-2 transition-colors hover:bg-[rgb(var(--color-bg-muted))] focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--color-accent))]',
        className
      )}
    >
      <div className="relative h-5 w-5">
        <Sun
          className={cn(
            'absolute inset-0 h-5 w-5 transition-opacity',
            isDark ? 'opacity-0' : 'opacity-100'
          )}
          strokeWidth={1.5}
        />
        <Moon
          className={cn(
            'absolute inset-0 h-5 w-5 transition-opacity',
            isDark ? 'opacity-100' : 'opacity-0'
          )}
          strokeWidth={1.5}
        />
      </div>
    </button>
  )
}
