import Link from 'next/link'
import { ArrowRight, HeartHandshake } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { conditions } from '@/lib/conditions'

export function ConditionDirectory() {
  return (
    <section aria-label="Conditions and concerns" className="section-space">
      <div className="site-container">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {conditions.map(({ slug, title, icon: Icon, summary }) => (
            <Card key={slug} size="sm" className="h-full">
              <CardHeader className="gap-4">
                <div className="mb-1 flex size-12 items-center justify-center rounded-xl bg-muted">
                  <Icon className="size-6 text-primary" strokeWidth={1.4} aria-hidden="true" />
                </div>
                <CardTitle>
                  <h2><Link href={`/what-we-treat/${slug}`} className="underline-offset-4 hover:underline">{title}</Link></h2>
                </CardTitle>
              </CardHeader>
              <CardContent><CardDescription>{summary}</CardDescription></CardContent>
              <CardFooter>
                <Link href={`/what-we-treat/${slug}`} className="text-link" aria-label={`Learn about ${title}`}>
                  Learn more <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <Alert role="note" className="mt-10">
          <HeartHandshake aria-hidden="true" />
          <AlertTitle>You do not need a diagnosis to begin.</AlertTitle>
          <AlertDescription>
            Symptoms can overlap, and your experience may not fit neatly into a category. A <Link href="/services#psychiatric-evaluation">psychiatric evaluation</Link> is a place to talk through your concerns, consider possible explanations, and decide on next steps together.
          </AlertDescription>
        </Alert>
      </div>
    </section>
  )
}
