import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BadgeCheck, Check } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { PracticeAction } from '@/components/practice-action'
import { provider } from '@/lib/practice'

export function Provider() {
  return (
    <section id="your-provider" aria-labelledby="provider-heading" className="section-space">
      <div className="site-container grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div data-reveal className="relative mx-auto w-full max-w-[400px]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-muted">
            <Image
              src={provider.portrait}
              alt={`${provider.name}, board-certified psychiatric–mental health nurse practitioner`}
              fill
              sizes="(max-width: 447px) calc(100vw - 48px), 400px"
              className="object-cover"
            />
          </div>
          <div className="relative mx-5 -mt-12 flex items-center gap-4 rounded-lg border border-border/60 bg-background px-6 py-5 shadow-soft sm:mx-8">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-muted">
              <BadgeCheck className="size-6 text-primary" strokeWidth={1.4} aria-hidden="true" />
            </div>
            <div>
              <p className="font-sans text-xl leading-relaxed font-medium text-primary">One provider. A real connection.</p>
              <p className="mt-1 text-base leading-relaxed font-medium text-muted-foreground">Consistency you can feel. Care you can grow with.</p>
            </div>
          </div>
        </div>
        <div>
          <p className="eyebrow mb-4">Meet your provider</p>
          <h2 id="provider-heading" className="section-heading">A familiar face.<br />A partner in your wellbeing.</h2>
          <p className="mt-5 text-xl font-semibold text-primary">{provider.name}</p>
          <p className="mt-1 text-base font-medium text-muted-foreground">{provider.credentials}</p>
          <div className="mt-5">
            <Badge variant="secondary" className="h-auto gap-1.5 px-3 py-1.5">
              <BadgeCheck data-icon="inline-start" aria-hidden="true" />
              Board-Certified PMHNP
            </Badge>
          </div>
          <p className="body-copy mt-6">
            At Marenova Wellness, you work directly with Kizito, an ANCC
            board-certified psychiatric–mental health nurse practitioner. His
            background in caring for medically complex adults and older adults
            informs a thoughtful, whole-person approach.
          </p>
          <p className="body-copy mt-4">
            Care is grounded in clinical evidence and guided by a simple belief:
            feeling understood is an important place to begin.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {['An open, judgment-free conversation', 'Decisions made together, never for you', 'A plan that considers the whole person'].map((item) => (
              <li key={item} className="flex items-center gap-3 text-lg leading-relaxed">
                <Check className="size-4 shrink-0 text-secondary-foreground" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <PracticeAction label="Talk with Kizito" />
            <Link href="/about#meet-your-provider" className="text-link">
              Get to know Kizito <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
