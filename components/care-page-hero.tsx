import type { ReactNode } from 'react'
import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { PageBreadcrumb } from '@/components/page-breadcrumb'
import { cn } from '@/lib/utils'

interface CarePageHeroProps {
  eyebrow: string
  title: ReactNode
  description: string
  currentPage: string
  image: { src: string; alt: string; caption: string }
  portrait?: boolean
  children: ReactNode
}

export function CarePageHero({ eyebrow, title, description, currentPage, image, portrait = false, children }: CarePageHeroProps) {
  return (
    <section className="border-b border-border/70 bg-muted/60">
      <div className="site-container pt-7 pb-14 sm:pt-9 sm:pb-20">
        <PageBreadcrumb currentPage={currentPage} className="mb-8 sm:mb-10" />
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="flex flex-col items-start">
            <p className="eyebrow mb-5">{eyebrow}</p>
            <h1 className="font-serif text-[2.6rem] leading-[1.13] tracking-[-0.04em] text-primary sm:text-6xl lg:text-[4.15rem]">{title}</h1>
            <p className="body-copy mt-6 max-w-[570px]">{description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">{children}</div>
          </div>
          <figure className="mx-auto w-full max-w-[520px]">
            <div className={cn('relative overflow-hidden bg-accent', portrait ? 'aspect-[4/4.5] rounded-t-[44%] rounded-b-lg' : 'aspect-[5/4] rounded-lg')}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 1023px) 520px, 500px"
                className={cn('object-cover', portrait && 'object-[center_35%]')}
              />
            </div>
            <figcaption className="mt-4 text-center text-base leading-relaxed text-muted-foreground">{image.caption}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

export function CareSectionNavigation({ links, label }: { links: { label: string; href: string }[]; label: string }) {
  return (
    <nav aria-label={label} className="border-b bg-background">
      <ul className={cn('site-container grid py-5 sm:grid-cols-2 lg:gap-5', links.length === 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-4')}>
        {links.map((link, index) => (
          <li key={link.href}>
            <a href={link.href} className="group flex h-full min-h-14 items-center gap-3 rounded-md px-2 py-3 text-base leading-snug font-medium text-primary transition-colors hover:bg-muted">
              <span className="text-muted-foreground" aria-hidden="true">0{index + 1}</span>
              <span className="flex-1">{link.label}</span>
              <ArrowDown className="size-4 shrink-0 text-secondary-foreground transition-transform duration-300 ease-in-out motion-safe:group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
