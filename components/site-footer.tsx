import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, HeartHandshake, Info } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { PracticeAction } from '@/components/practice-action'
import { navigation, practice } from '@/lib/practice'
import { policies } from '@/lib/policies'

export function SiteFooter() {
  return (
    <>
      <aside id="resources" aria-label="Emergency and crisis support" className="border-y bg-accent/45">
        <div className="site-container flex flex-col items-start gap-4 py-6 lg:flex-row lg:items-center lg:gap-8">
          <div className="flex items-start gap-3">
            <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <p className="max-w-[940px] text-lg leading-relaxed text-foreground">
              <strong className="font-semibold">{practice.name} is not an emergency or crisis service.</strong>{' '}
              If you are in immediate danger, call <a className="font-semibold text-primary underline underline-offset-2" href="tel:911">911</a> or go to the nearest emergency department.
              For mental health crisis support in the United States, call or text <a className="font-semibold text-primary underline underline-offset-2" href="tel:988">988</a>.
            </p>
          </div>
          <a href="https://988lifeline.org" target="_blank" rel="noopener noreferrer" className="text-link shrink-0">
            988 Lifeline
            <ArrowUpRight className="size-4" aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </aside>
      <footer className="bg-background">
        <div className="site-container pt-14 pb-7">
          <div className="grid gap-x-10 gap-y-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.9fr_1.1fr]">
            <div>
              <Link href="/" aria-label={`${practice.name} home`} className="inline-block">
                <Image
                  src="/images/marenova-logo.svg"
                  alt={practice.name}
                  width={1000}
                  height={270}
                  className="h-auto w-[238px]"
                />
              </Link>
              <p className="mt-5 max-w-[255px] text-lg leading-relaxed text-muted-foreground">
                A more personal path to mental wellbeing. For your life, at your pace.
              </p>
              <p className="mt-4 max-w-[290px] text-base leading-relaxed font-medium text-primary">{practice.eligibility}</p>
            </div>
            <div>
              <h2 className="mb-3 text-lg leading-relaxed font-semibold text-primary">Explore care</h2>
              <ul className="flex flex-col gap-1">
                {navigation.slice(0, 5).map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="inline-flex min-h-11 items-center text-base leading-relaxed font-medium text-muted-foreground underline-offset-4 hover:text-primary hover:underline">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-3 text-lg leading-relaxed font-semibold text-primary">Here for you</h2>
              <ul className="flex flex-col gap-1">
                <li><Link href="/about#meet-your-provider" className="inline-flex min-h-11 items-center text-base leading-relaxed font-medium text-muted-foreground underline-offset-4 hover:text-primary hover:underline">Meet your provider</Link></li>
                <li><Link href="/patient-info" className="inline-flex min-h-11 items-center text-base leading-relaxed font-medium text-muted-foreground underline-offset-4 hover:text-primary hover:underline">Patient information</Link></li>
                <li><Link href="/contact" className="inline-flex min-h-11 items-center text-base leading-relaxed font-medium text-muted-foreground underline-offset-4 hover:text-primary hover:underline">Contact the Practice</Link></li>
                <li><Link href="/blog" className="inline-flex min-h-11 items-center text-base font-medium text-muted-foreground hover:text-primary hover:underline">Marenova reading room</Link></li>
                {practice.portalUrl && <li><PracticeAction type="portal" variant="link" label="Patient portal" className="px-0" /></li>}
              </ul>
            </div>
            <div>
              <HeartHandshake className="mb-4 size-6 text-secondary-foreground" strokeWidth={1.4} aria-hidden="true" />
              <h2 className="font-serif text-xl text-primary">You deserve to feel heard.</h2>
              <p className="mt-2 mb-5 text-lg leading-relaxed text-muted-foreground">A conversation is a good place to start.</p>
              <PracticeAction size="sm" />
            </div>
          </div>
          <Separator />
          <nav aria-label="Policies and accessibility" className="py-4">
            <ul className="flex flex-wrap gap-x-6 gap-y-1">
              {policies.map((policy) => (
                <li key={policy.slug}>
                  <Link href={`/policies/${policy.slug}`} className="inline-flex min-h-11 items-center text-base leading-relaxed font-medium text-muted-foreground underline-offset-4 hover:text-primary hover:underline">{policy.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col justify-between gap-3 text-muted-foreground md:flex-row md:gap-8">
            <p className="text-base leading-relaxed font-medium">© {new Date().getFullYear()} {practice.name}. All rights reserved.</p>
            <p className="text-base leading-relaxed font-medium">Lifestyle imagery is illustrative and does not depict patients or diagnoses.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
