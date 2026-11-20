import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface PageBreadcrumbProps {
  currentPage: string
  parent?: { label: string; href: string }
  className?: string
}

export function PageBreadcrumb({ currentPage, parent, className }: PageBreadcrumbProps) {
  const currentLabel = currentPage.trim()
  const parentLabel = parent?.label.trim()
  const parentHref = parent?.href.trim()
  const includeParent = parentLabel && parentHref && parentHref.replace(/\/+$/, '') && parentLabel.toLowerCase() !== 'home' && parentLabel !== currentLabel
  const items: { label: string; href?: string }[] = [
    { label: 'Home', href: '/' },
    ...(includeParent ? [{ label: parentLabel, href: parentHref }] : []),
    ...(currentLabel ? [{ label: currentLabel }] : []),
  ]

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-base leading-relaxed text-muted-foreground">
        {items.map((item, index) => (
          <li key={`${item.href ?? 'current'}-${item.label}`} className="flex items-center gap-2">
            {index > 0 && <ChevronRight className="size-3.5 shrink-0" aria-hidden="true" />}
            {item.href ? (
              <Link href={item.href} className="inline-flex min-h-11 items-center hover:text-primary hover:underline">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
