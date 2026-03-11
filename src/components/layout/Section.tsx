import { forwardRef, type ReactNode } from 'react'
import { cn } from '../../lib/utils'
import { SectionBackground } from './SectionBackground'

type SectionProps = {
  id?: string
  children: ReactNode
  className?: string
  withBackground?: boolean
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, children, className, withBackground = true }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          'relative w-full overflow-hidden px-6 py-20 md:px-10 md:py-24 lg:px-16 lg:py-28',
          className
        )}
      >
        {withBackground && <SectionBackground variant="muted" />}
        <div className="relative z-10 mx-auto max-w-6xl">{children}</div>
      </section>
    )
  }
)
Section.displayName = 'Section'
