import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, CalendarDays, LockKeyhole } from 'lucide-react'
import { PracticeAction } from '@/components/practice-action'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { practice, provider } from '@/lib/practice'

export function BookingOptions() {
  return (
    <div className="flex flex-col gap-7">
      <Card id="booking" className="scroll-mt-32">
        <CardHeader>
          <CalendarDays className="mb-4 size-7 text-secondary-foreground" strokeWidth={1.5} aria-hidden="true" />
          <CardTitle><h2>Start your first conversation.</h2></CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <Image src={provider.portrait} alt={provider.name} width={72} height={72} className="size-18 shrink-0 rounded-full object-cover object-top" />
            <div><p className="font-semibold text-primary">{provider.name}</p><p className="text-base text-muted-foreground">{provider.credentials}</p></div>
          </div>
          <p className="body-copy">Care is for adults 18+, including older adults, who are physically located in Florida at the time of each telehealth visit.</p>
          <p className="body-copy">Use the practice contact details supplied in your referral or welcome materials to discuss availability, clinical fit, insurance, and fees before arranging an appointment.</p>
          {practice.bookingUrl && (
            <a href={practice.bookingUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ size: 'lg' })}>Open online scheduler <ArrowUpRight data-icon="inline-end" aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
          )}
          <p className="text-base text-muted-foreground">Appointments are confirmed directly by the practice after eligibility and intake requirements are reviewed.</p>
        </CardContent>
        <CardFooter><Link href="/patient-info#new-patients" className="text-link">Your first five steps <ArrowRight className="size-4" aria-hidden="true" /></Link></CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <LockKeyhole className="mb-3 size-6 text-secondary-foreground" strokeWidth={1.5} aria-hidden="true" />
          <CardTitle><h2>Already a patient?</h2></CardTitle>
        </CardHeader>
        <CardContent><p className="body-copy">For clinical questions, refill requests, and appointment changes, follow the secure communication instructions in your practice welcome materials.</p></CardContent>
        {practice.portalUrl && <CardFooter><PracticeAction type="portal" variant="link" label="Go to patient portal" className="px-0" /></CardFooter>}
      </Card>
      <Separator />
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-primary">Representing a care facility?</p>
        <p className="body-copy">Begin with a non-clinical partnership conversation. Keep resident information out of general inquiries.</p>
        <Link href="/facilities#refer-a-resident" className="text-link">Facility partnership information <ArrowRight className="size-4" aria-hidden="true" /></Link>
      </div>
    </div>
  )
}
