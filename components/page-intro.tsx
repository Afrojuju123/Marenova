import type { ReactNode } from 'react'
import { PageBreadcrumb } from '@/components/page-breadcrumb'

interface PageIntroProps {
  eyebrow: string
  title: ReactNode
  description: string
  currentPage: string
  parent?: { label: string; href: string }
  children?: ReactNode
}

export function PageIntro({
  eyebrow,
  title,
  description,
  currentPage,
  parent,
  children,
}: PageIntroProps) {
  return (
    <header className="border-b border-border/70 bg-muted/60">
      <div className="site-container pt-7 pb-12 sm:pt-9 sm:pb-16 lg:pb-20">
        <PageBreadcrumb currentPage={currentPage} parent={parent} className="mb-10 sm:mb-12" />
        <div className="max-w-[850px]">
          <p className="eyebrow mb-5">{eyebrow}</p>
          <h1 className="font-serif text-[2.6rem] leading-[1.13] tracking-[-0.04em] text-primary sm:text-6xl lg:text-[4.15rem]">
            {title}
          </h1>
          <p className="body-copy mt-6 max-w-[720px]">{description}</p>
          {children && <div className="mt-7">{children}</div>}
        </div>
      </div>
    </header>
  )
}
