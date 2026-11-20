import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, HeartHandshake } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { CareTimeline } from '@/components/care-timeline'
import { newPatientSteps } from '@/lib/patient-info'
import { provider } from '@/lib/practice'

export function NewPatients() {
  return (
    <section id="new-patients" aria-labelledby="new-patients-heading" className="section-space scroll-mt-28">
      <div className="site-container grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div className="flex flex-col gap-6 lg:sticky lg:top-32">
          <p className="eyebrow">01 / New patients</p>
          <h2 id="new-patients-heading" className="section-heading">Five steps.<br />One personal connection.</h2>
          <p className="body-copy">You do not have to navigate everything at once. Here is what the path to care looks like, from the first question to a plan made with you.</p>
          <Card className="mt-3">
            <CardHeader>
              <HeartHandshake className="mb-3 size-7 text-secondary-foreground" strokeWidth={1.5} aria-hidden="true" />
              <CardTitle><h3>Your provider, from the start.</h3></CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
              <p className="body-copy">Marenova is a solo practice. You schedule directly with {provider.name}—not a provider directory or a rotating clinical team.</p>
              <div className="flex items-center gap-4">
                <Image src={provider.portrait} alt={provider.name} width={60} height={60} className="size-15 rounded-full object-cover object-top" />
                <div>
                  <p className="font-semibold text-primary">{provider.name}</p>
                  <p className="text-base text-muted-foreground">{provider.credentials}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/about#meet-your-provider" className="text-link">Meet your provider <ArrowRight className="size-4" aria-hidden="true" /></Link>
            </CardFooter>
          </Card>
        </div>
        <CareTimeline steps={newPatientSteps} />
      </div>
    </section>
  )
}
