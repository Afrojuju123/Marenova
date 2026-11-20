import { Check, Info, ShieldCheck } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { PracticeAction } from '@/components/practice-action'
import { careServices } from '@/lib/services'

const serviceActions: Record<string, string> = {
  'psychiatric-evaluation': 'Start your first conversation',
  'medication-management': 'Discuss your medication plan',
  'adhd-evaluation-treatment': 'Start with a thoughtful ADHD evaluation',
  'depression-anxiety-treatment': 'Find support for your mood and anxiety',
  'geriatric-psychiatry': 'Talk with us about older-adult care',
  telepsychiatry: 'Explore telehealth care in Florida',
}

export function ServiceDirectory() {
  return (
    <section aria-label="Our psychiatric services" className="section-space bg-muted/30">
      <div className="site-container">
        <div className="grid gap-7 md:grid-cols-2">
          {careServices.map(({ slug, title, icon: Icon, description, points, note }) => (
            <article key={slug} id={slug} aria-labelledby={`${slug}-heading`} className="h-full">
              <Card className="h-full">
                <CardHeader className="gap-4">
                  <div className="mb-1 flex size-13 items-center justify-center rounded-xl bg-muted">
                    <Icon className="size-6 text-primary" strokeWidth={1.4} aria-hidden="true" />
                  </div>
                  <CardTitle><h2 id={`${slug}-heading`}>{title}</h2></CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-col gap-3">
                    {points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-lg leading-relaxed">
                        <Check className="mt-1.5 size-4 shrink-0 text-secondary-foreground" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  {note && (
                    <Alert role="note" className="mt-6">
                      <Info aria-hidden="true" />
                      <AlertTitle>About ADHD evaluation and prescribing</AlertTitle>
                      <AlertDescription>{note}</AlertDescription>
                    </Alert>
                  )}
                </CardContent>
                <CardFooter>
                  <PracticeAction variant="link" label={serviceActions[slug] ?? 'Contact the Practice'} className="px-0" />
                </CardFooter>
              </Card>
            </article>
          ))}
        </div>
        <div className="mt-10 flex max-w-[880px] items-start gap-4">
          <ShieldCheck className="mt-1 size-6 shrink-0 text-secondary-foreground" strokeWidth={1.5} aria-hidden="true" />
          <p className="body-copy">
            Every recommendation is individualized. Service availability depends on clinical fit, your physical location, and applicable laws. An evaluation does not guarantee a diagnosis or prescription, and telehealth does not replace emergency or in-person care when needed.
          </p>
        </div>
      </div>
    </section>
  )
}
