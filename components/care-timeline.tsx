import Link from 'next/link'
import { ArrowRight, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CareStep {
  title: string
  description: string
  icon?: LucideIcon
  link?: { label: string; href: string }
}

export function CareTimeline({ steps, variant = 'timeline' }: { steps: readonly CareStep[]; variant?: 'timeline' | 'list' }) {
  const isTimeline = variant === 'timeline'

  return (
    <ol className={cn('flex flex-col', !isTimeline && 'divide-y divide-border')}>
      {steps.map(({ title, description, icon: Icon, link }, index) => (
        <li key={title} data-reveal className={cn('group flex gap-5', isTimeline ? 'sm:gap-7' : 'items-start py-6 first:pt-0 last:pb-0')}>
          <div className="flex shrink-0 flex-col items-center" aria-hidden="true">
            <span className={cn('flex size-12 items-center justify-center bg-muted text-primary', isTimeline ? 'rounded-full border border-primary/20 font-serif text-xl' : 'rounded-lg')}>
              {Icon ? <Icon className="size-5" strokeWidth={1.5} /> : index + 1}
            </span>
            {isTimeline && <span className="my-3 w-px flex-1 bg-border group-last:hidden" />}
          </div>
          <div className={cn('flex flex-1 flex-col', isTimeline ? 'gap-3 pt-1 pb-9 group-last:pb-0' : 'gap-2')}>
            <h3 className={cn('text-primary', isTimeline ? 'font-serif text-2xl tracking-tight' : 'text-lg font-semibold')}>
              <span className="sr-only">Step {index + 1}: </span>{title}
            </h3>
            <p className="body-copy">{description}</p>
            {link && (link.href.startsWith('#') ? (
              <a href={link.href} className="text-link self-start">{link.label}<ArrowRight className="size-4" aria-hidden="true" /></a>
            ) : (
              <Link href={link.href} className="text-link self-start">{link.label}<ArrowRight className="size-4" aria-hidden="true" /></Link>
            ))}
          </div>
        </li>
      ))}
    </ol>
  )
}
