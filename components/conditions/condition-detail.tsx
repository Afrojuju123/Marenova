import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  HeartHandshake,
  Info,
  TriangleAlert,
} from 'lucide-react'
import { PageIntro } from '@/components/page-intro'
import { PracticeAction } from '@/components/practice-action'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { conditions, educationalDisclaimer, type Condition } from '@/lib/conditions'
import { adhdDisclaimer } from '@/lib/services'

const pageSections = [
  { label: 'Symptoms', href: '#symptoms' },
  { label: 'Impact on daily life', href: '#daily-life' },
  { label: 'What an evaluation considers', href: '#evaluation' },
  { label: 'Approaches to support', href: '#support' },
  { label: 'Warning signs', href: '#warning-signs' },
]

const contactLabels: Record<string, string> = {
  depression: 'Find support for depression',
  'generalized-anxiety': 'Take the next step with anxiety',
  'social-anxiety-panic': 'Talk about anxiety and panic',
  adhd: 'Start with a thoughtful ADHD evaluation',
  'bipolar-disorder': 'Explore bipolar care together',
  insomnia: 'Talk about sleep and wellbeing',
  'grief-adjustment-disorders': 'Find support through life changes',
  'cognitive-behavioral-symptoms': 'Talk with us about older-adult care',
}

export function ConditionDetail({ condition }: { condition: Condition }) {
  const related = conditions.filter((item) => condition.relatedSlugs.includes(item.slug))
  const contactLabel = contactLabels[condition.slug] ?? 'Start your first conversation'

  return (
    <>
      <PageIntro
        eyebrow="Understanding your mental health"
        currentPage={condition.title}
        parent={{ label: 'What We Treat', href: '/what-we-treat' }}
        title={condition.title}
        description={condition.introduction}
      />
      <div className="site-container grid items-start gap-12 py-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
        <article aria-label={`${condition.title} educational guide`} className="flex min-w-0 flex-col gap-11">
          <section id="symptoms" aria-labelledby="symptoms-heading">
            <p className="eyebrow mb-3">Recognizing the experience</p>
            <h2 id="symptoms-heading" className="section-heading">Symptoms you may notice</h2>
            <p className="body-copy mt-5">
              Experiences vary from person to person. These symptoms can have different causes and are not a diagnostic checklist.
            </p>
            <ul className="mt-6 flex flex-col gap-4">
              {condition.symptoms.map((symptom) => (
                <li key={symptom} className="flex items-start gap-3 text-lg leading-relaxed">
                  <Check className="mt-1.5 size-4 shrink-0 text-secondary-foreground" aria-hidden="true" />
                  {symptom}
                </li>
              ))}
            </ul>
          </section>
          <section id="daily-life" aria-labelledby="daily-life-heading" className="border-t pt-10">
            <h2 id="daily-life-heading" className="section-heading">How daily life can be affected</h2>
            <p className="body-copy mt-5">{condition.impact}</p>
          </section>
          <section id="evaluation" aria-labelledby="evaluation-heading" className="border-t pt-10">
            <p className="eyebrow mb-3">Looking at the whole picture</p>
            <h2 id="evaluation-heading" className="section-heading">What an evaluation considers</h2>
            <p className="body-copy mt-5">
              Assessment is a conversation about your history, your health, and what matters to you. Your provider may:
            </p>
            <ol className="mt-6 flex flex-col gap-5">
              {condition.evaluation.map((item, index) => (
                <li key={item} className="flex items-start gap-4 text-lg leading-relaxed">
                  <span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-base font-semibold text-primary">{index + 1}</span>
                  {item}
                </li>
              ))}
            </ol>
          </section>
          <section id="support" aria-labelledby="support-heading" className="border-t pt-10">
            <h2 id="support-heading" className="section-heading">Support, shaped around you</h2>
            <p className="body-copy mt-5">{condition.support}</p>
            <Link href={`/services#${condition.service.slug}`} className="text-link mt-5">
              Explore {condition.service.label} <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
            </Link>
            {condition.slug === 'adhd' && (
              <Alert role="note" className="mt-6">
                <Info aria-hidden="true" />
                <AlertTitle>About ADHD evaluation and prescribing</AlertTitle>
                <AlertDescription>{adhdDisclaimer}</AlertDescription>
              </Alert>
            )}
          </section>
          <section id="warning-signs" aria-labelledby="warning-signs-heading" className="border-t pt-10">
            <div className="mb-4 flex items-center gap-3 text-primary">
              <TriangleAlert className="size-6 shrink-0" strokeWidth={1.5} aria-hidden="true" />
              <p className="eyebrow">Know when to seek help</p>
            </div>
            <h2 id="warning-signs-heading" className="section-heading">Warning signs that need attention</h2>
            <p className="body-copy mt-5">{condition.warningSigns}</p>
            <Alert role="note" className="mt-6">
              <Info aria-hidden="true" />
              <AlertTitle>Do not wait for a routine appointment in a crisis.</AlertTitle>
              <AlertDescription>
                In the U.S., call <a href="tel:911">911</a> or go to the nearest emergency department for immediate danger or a medical emergency. For suicidal thoughts or a mental health crisis, call or text <a href="tel:988">988</a>. Marenova Wellness is not an emergency or crisis service.
              </AlertDescription>
            </Alert>
          </section>
          <div className="border-t pt-7">
            <p className="mb-2 text-base font-semibold text-primary">Further reading from a public health resource</p>
            <a href={condition.resource.url} target="_blank" rel="noopener noreferrer" className="text-link items-start">
              {condition.resource.label}
              <ArrowUpRight className="mt-1.5 size-4 shrink-0" aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </article>
        <aside aria-label="Guide navigation and next steps" className="flex flex-col gap-6 lg:sticky lg:top-32">
          <Card size="sm">
            <CardHeader><CardTitle><h2>In this guide</h2></CardTitle></CardHeader>
            <CardContent>
              <nav aria-label="On this page">
                <ul className="flex flex-col gap-1">
                  {pageSections.map(({ label, href }) => (
                    <li key={href}>
                      <a href={href} className="flex min-h-11 items-center py-2 text-base leading-relaxed text-muted-foreground underline-offset-4 hover:text-primary hover:underline">{label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </CardContent>
            <CardFooter>
              <Link href="/what-we-treat" className="text-link">All conditions <ArrowRight className="size-4" aria-hidden="true" /></Link>
            </CardFooter>
          </Card>
          <div className="rounded-lg bg-muted p-6">
            <HeartHandshake className="mb-4 size-7 text-secondary-foreground" strokeWidth={1.4} aria-hidden="true" />
            <h2 className="font-serif text-2xl leading-snug tracking-tight text-primary">A conversation is a good place to start.</h2>
            <p className="body-copy mt-4">Bring your questions. We can explore what you are experiencing and consider the next step together.</p>
            <div className="mt-6"><PracticeAction label={contactLabel} className="w-full" showArrow={false} /></div>
            <Link href="/about#meet-your-provider" className="text-link mt-3">Meet your provider <ArrowRight className="size-4" aria-hidden="true" /></Link>
          </div>
        </aside>
      </div>
      <section aria-labelledby="related-heading" className="border-y bg-muted/45 py-10 sm:py-12">
        <div className="site-container">
          <h2 id="related-heading" className="mb-6 font-serif text-3xl tracking-tight text-primary">You may also want to explore</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {related.map((item) => (
              <Link key={item.slug} href={`/what-we-treat/${item.slug}`} className="group flex items-center justify-between gap-5 rounded-lg border bg-background px-6 py-5 text-lg font-medium text-primary transition-colors hover:bg-accent/50">
                {item.title}
                <ArrowRight className="size-5 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <div className="site-container py-10">
        <Alert role="note" aria-label="Educational disclaimer">
          <BookOpen aria-hidden="true" />
          <AlertTitle>For your understanding, not a diagnosis</AlertTitle>
          <AlertDescription>{educationalDisclaimer}</AlertDescription>
        </Alert>
      </div>
    </>
  )
}
